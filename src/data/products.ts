export type ProductCategory = 'Polos' | 'Camisas' | 'Camisetas' | 'Calças';

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  price: number;
  installments: string;
  image: string;
  imagePosition?: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  badge?: string;
  description: string;
}

export const productCategories = ['Todos', 'Polos', 'Camisas', 'Camisetas', 'Calças'] as const;

export const products: Product[] = [
  {
    id: 1,
    name: 'Polo Verona',
    category: 'Polos',
    price: 189.9,
    installments: '3x de R$ 63,30',
    image: '/images/versa/polo-black.jpg',
    imagePosition: '50% 25%',
    colors: [
      { name: 'Preto', hex: '#181615' },
      { name: 'Vinho', hex: '#54110f' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Mais vendido',
    description: 'Malha encorpada, gola estruturada e caimento preciso.',
  },
  {
    id: 2,
    name: 'Camisa Siena',
    category: 'Camisas',
    price: 229.9,
    installments: '3x de R$ 76,63',
    image: '/images/versa/shirt-white.jpg',
    imagePosition: '50% 42%',
    colors: [
      { name: 'Off-white', hex: '#e8dfd1' },
      { name: 'Areia', hex: '#bca886' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Novo',
    description: 'Visual limpo para composições casuais ou alinhadas.',
  },
  {
    id: 3,
    name: 'Camiseta Essenziale',
    category: 'Camisetas',
    price: 119.9,
    installments: '2x de R$ 59,95',
    image: '/images/versa/street-white.jpg',
    imagePosition: '50% 35%',
    colors: [
      { name: 'Branco', hex: '#f2efe7' },
      { name: 'Preto', hex: '#1d1b1a' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Algodão macio, gola reforçada e corte contemporâneo.',
  },
  {
    id: 4,
    name: 'Camisa Linho Bari',
    category: 'Camisas',
    price: 249.9,
    installments: '4x de R$ 62,48',
    image: '/images/versa/goiania-beige.jpg',
    imagePosition: '48% 50%',
    colors: [
      { name: 'Natural', hex: '#d9c6a4' },
      { name: 'Oliva', hex: '#65634d' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    badge: 'Edição limitada',
    description: 'Textura natural e leveza pensada para o clima de Goiânia.',
  },
  {
    id: 5,
    name: 'Calça Roma',
    category: 'Calças',
    price: 259.9,
    installments: '4x de R$ 64,98',
    image: '/images/versa/look-white.jpg',
    imagePosition: '50% 60%',
    colors: [
      { name: 'Off-white', hex: '#e8e0d2' },
      { name: 'Grafite', hex: '#4b4947' },
    ],
    sizes: ['38', '40', '42', '44', '46'],
    description: 'Alfaiataria descomplicada com conforto no movimento.',
  },
  {
    id: 6,
    name: 'Polo Notte',
    category: 'Polos',
    price: 199.9,
    installments: '3x de R$ 66,63',
    image: '/images/versa/hero-dark.jpg',
    imagePosition: '56% 32%',
    colors: [
      { name: 'Preto', hex: '#191716' },
      { name: 'Marinho', hex: '#202b3a' },
    ],
    sizes: ['P', 'M', 'G', 'GG'],
    description: 'Polo minimalista com acabamento premium e toque suave.',
  },
];

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
