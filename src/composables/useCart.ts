import { computed, reactive, watch } from 'vue';
import { formatCurrency, products, type Product } from '../data/products';
import { whatsappUrl } from '../data/site';

export interface CartLine {
  key: string;
  product: Product;
  size: string;
  quantity: number;
}

interface StoredLine {
  productId: number;
  size: string;
  quantity: number;
}

const state = reactive({
  lines: [] as CartLine[],
  open: false,
  hydrated: false,
});

const count = computed(() => state.lines.reduce((sum, line) => sum + line.quantity, 0));
const subtotal = computed(() => state.lines.reduce((sum, line) => sum + line.product.price * line.quantity, 0));

function persist() {
  if (typeof window === 'undefined' || !state.hydrated) return;
  const payload: StoredLine[] = state.lines.map((line) => ({
    productId: line.product.id,
    size: line.size,
    quantity: line.quantity,
  }));
  window.localStorage.setItem('versa-wear-cart', JSON.stringify(payload));
}

if (typeof window !== 'undefined') {
  watch(() => state.lines, persist, { deep: true });
}

function hydrate() {
  if (state.hydrated || typeof window === 'undefined') return;
  state.hydrated = true;
  try {
    const stored = JSON.parse(window.localStorage.getItem('versa-wear-cart') || '[]') as StoredLine[];
    state.lines = stored.flatMap((line) => {
      const product = products.find((item) => item.id === line.productId);
      if (!product || !product.sizes.includes(line.size)) return [];
      return [{ key: `${product.id}-${line.size}`, product, size: line.size, quantity: Math.max(1, line.quantity) }];
    });
  } catch {
    window.localStorage.removeItem('versa-wear-cart');
  }
}

function add(product: Product, size: string) {
  const key = `${product.id}-${size}`;
  const line = state.lines.find((item) => item.key === key);
  if (line) line.quantity += 1;
  else state.lines.push({ key, product, size, quantity: 1 });
  state.open = true;
}

function changeQuantity(key: string, delta: number) {
  const line = state.lines.find((item) => item.key === key);
  if (!line) return;
  line.quantity += delta;
  if (line.quantity < 1) remove(key);
}

function remove(key: string) {
  const index = state.lines.findIndex((item) => item.key === key);
  if (index >= 0) state.lines.splice(index, 1);
}

function checkoutUrl() {
  const items = state.lines.map(
    (line) => `• ${line.quantity}x ${line.product.name} · Tam. ${line.size} · ${formatCurrency(line.product.price * line.quantity)}`,
  );
  const message = [
    'Olá, Versa Wear! Quero finalizar este pedido:',
    '',
    ...items,
    '',
    `Subtotal: ${formatCurrency(subtotal.value)}`,
    'Pode me confirmar disponibilidade e entrega para Goiânia?',
  ].join('\n');
  return whatsappUrl(message);
}

export function useCart() {
  return {
    state,
    count,
    subtotal,
    hydrate,
    add,
    changeQuantity,
    remove,
    checkoutUrl,
  };
}
