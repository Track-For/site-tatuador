<script setup lang="ts">
import { Minus, Plus, ShoppingBag, Trash2, X } from '@lucide/vue';
import { onBeforeUnmount, watch } from 'vue';
import { useCart } from '../composables/useCart';
import { formatCurrency } from '../data/products';

const { state: cart, count, subtotal, changeQuantity, remove, checkoutUrl } = useCart();

function close() {
  cart.open = false;
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') close();
}

watch(
  () => cart.open,
  (isOpen) => {
    if (typeof document === 'undefined') return;
    document.body.classList.toggle('cart-open', isOpen);
    if (isOpen) window.addEventListener('keydown', handleKeydown);
    else window.removeEventListener('keydown', handleKeydown);
  },
);

onBeforeUnmount(() => {
  if (typeof document !== 'undefined') document.body.classList.remove('cart-open');
  if (typeof window !== 'undefined') window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="cart-fade">
      <div v-if="cart.open" class="cart-layer">
        <button class="cart-backdrop" type="button" aria-label="Fechar sacola" @click="close"></button>
        <aside class="cart-drawer" role="dialog" aria-modal="true" aria-labelledby="cart-title">
          <header>
            <div>
              <p class="eyebrow">Sua seleção</p>
              <h2 id="cart-title">Sacola <span>{{ count }}</span></h2>
            </div>
            <button class="icon-button" type="button" aria-label="Fechar sacola" @click="close"><X :size="22" /></button>
          </header>

          <div v-if="cart.lines.length" class="cart-lines">
            <article v-for="line in cart.lines" :key="line.key" class="cart-line">
              <img :src="line.product.image" :alt="line.product.name" :style="{ objectPosition: line.product.imagePosition }" />
              <div>
                <p>{{ line.product.category }}</p>
                <h3>{{ line.product.name }}</h3>
                <span>Tamanho {{ line.size }}</span>
                <strong>{{ formatCurrency(line.product.price * line.quantity) }}</strong>
                <div class="quantity-control" aria-label="Quantidade">
                  <button type="button" :aria-label="`Diminuir quantidade de ${line.product.name}`" @click="changeQuantity(line.key, -1)"><Minus :size="14" /></button>
                  <span>{{ line.quantity }}</span>
                  <button type="button" :aria-label="`Aumentar quantidade de ${line.product.name}`" @click="changeQuantity(line.key, 1)"><Plus :size="14" /></button>
                </div>
              </div>
              <button class="remove-line" type="button" :aria-label="`Remover ${line.product.name}`" @click="remove(line.key)"><Trash2 :size="17" /></button>
            </article>
          </div>

          <div v-else class="empty-cart">
            <ShoppingBag :size="42" :stroke-width="1.2" aria-hidden="true" />
            <h3>Sua sacola está vazia.</h3>
            <p>Explore a coleção e escolha sua próxima peça.</p>
            <button class="button button-wine" type="button" @click="close">Continuar comprando</button>
          </div>

          <footer v-if="cart.lines.length">
            <div><span>Subtotal</span><strong>{{ formatCurrency(subtotal) }}</strong></div>
            <p>Frete e prazo são confirmados no atendimento.</p>
            <a class="button button-wine" :href="checkoutUrl()" target="_blank" rel="noopener">Finalizar pelo WhatsApp</a>
            <small>Você revisa disponibilidade, entrega e pagamento antes de confirmar.</small>
          </footer>
        </aside>
      </div>
    </Transition>
  </Teleport>
</template>
