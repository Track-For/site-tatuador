<script setup lang="ts">
import { Menu, ShoppingBag, X } from '@lucide/vue';
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useCart } from '../composables/useCart';
import BrandMark from './BrandMark.vue';

const menuOpen = ref(false);
const scrolled = ref(false);
const { state: cart, count } = useCart();

function updateScroll() {
  scrolled.value = window.scrollY > 24;
}

function closeMenu() {
  menuOpen.value = false;
}

watch(menuOpen, (isOpen) => {
  if (typeof document !== 'undefined') document.body.classList.toggle('menu-open', isOpen);
});

onMounted(() => {
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScroll);
  document.body.classList.remove('menu-open');
});
</script>

<template>
  <header class="site-header" :class="{ 'is-solid': scrolled, 'menu-active': menuOpen }">
    <div class="header-shell">
      <a class="brand" href="#topo" aria-label="Versa Wear — início"><BrandMark compact /></a>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#novidades">Novidades</a>
        <a href="#colecao">Coleção</a>
        <a href="#sobre">A marca</a>
      </nav>

      <button class="cart-button" type="button" aria-label="Abrir sacola de compras" @click="cart.open = true">
        <ShoppingBag :size="20" :stroke-width="1.6" aria-hidden="true" />
        <span>Sacola</span>
        <b>{{ count }}</b>
      </button>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'"
        aria-controls="mobile-menu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" :size="24" aria-hidden="true" />
        <Menu v-else :size="24" aria-hidden="true" />
      </button>
    </div>

    <nav v-if="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Navegação para celular">
      <a href="#novidades" @click="closeMenu">Novidades <span>01</span></a>
      <a href="#colecao" @click="closeMenu">Coleção <span>02</span></a>
      <a href="#sobre" @click="closeMenu">A marca <span>03</span></a>
      <button type="button" @click="cart.open = true; closeMenu()">Abrir sacola <ShoppingBag :size="22" /></button>
      <p>Moda masculina · Goiânia, GO</p>
    </nav>
  </header>
</template>
