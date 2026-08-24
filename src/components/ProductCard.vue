<script setup lang="ts">
import { Plus } from '@lucide/vue';
import { ref } from 'vue';
import { useCart } from '../composables/useCart';
import { formatCurrency, type Product } from '../data/products';

const props = defineProps<{ product: Product }>();
const selectedSize = ref(props.product.sizes.includes('M') ? 'M' : props.product.sizes[0]);
const { add } = useCart();
</script>

<template>
  <article class="product-card">
    <div class="product-image-wrap">
      <img
        :src="product.image"
        :alt="`${product.name} — ${product.category}`"
        :style="{ objectPosition: product.imagePosition }"
        width="700"
        height="900"
        loading="lazy"
      />
      <span v-if="product.badge" class="product-badge">{{ product.badge }}</span>
      <button class="quick-add" type="button" @click="add(product, selectedSize)">
        <Plus :size="17" aria-hidden="true" /> Adicionar
      </button>
    </div>
    <div class="product-info">
      <div class="product-line">
        <div>
          <p>{{ product.category }}</p>
          <h3>{{ product.name }}</h3>
        </div>
        <strong>{{ formatCurrency(product.price) }}</strong>
      </div>
      <p class="product-description">{{ product.description }}</p>
      <div class="product-options">
        <div class="swatches" :aria-label="`Cores disponíveis: ${product.colors.map((color) => color.name).join(', ')}`">
          <span
            v-for="color in product.colors"
            :key="color.name"
            :style="{ backgroundColor: color.hex }"
            :title="color.name"
          ></span>
        </div>
        <label>
          <span>Tamanho</span>
          <select v-model="selectedSize" :aria-label="`Tamanho de ${product.name}`">
            <option v-for="size in product.sizes" :key="size">{{ size }}</option>
          </select>
        </label>
      </div>
      <small>{{ product.installments }} sem juros</small>
    </div>
  </article>
</template>
