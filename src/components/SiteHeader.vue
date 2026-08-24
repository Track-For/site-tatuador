<script setup lang="ts">
import { ArrowUpRight, Menu, X } from '@lucide/vue';
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { whatsappUrl } from '../data/site';

const route = useRoute();
const menuOpen = ref(false);
const scrolled = ref(false);
const solidHeader = computed(() => scrolled.value || route.path !== '/');

function updateScroll() {
  scrolled.value = window.scrollY > 24;
}

watch(
  () => route.fullPath,
  () => {
    menuOpen.value = false;
  },
);

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
  <header class="site-header" :class="{ 'is-solid': solidHeader, 'menu-active': menuOpen }">
    <div class="header-inner">
      <RouterLink class="brand" to="/" aria-label="OUSE Perfumaria e Acessórios — início">
        <span class="brand-name">OUSE</span>
        <span class="brand-subtitle">Perfumaria & Acessórios</span>
      </RouterLink>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <RouterLink to="/#colecao">Coleções</RouterLink>
        <RouterLink to="/sobre">Nossa história</RouterLink>
        <RouterLink to="/servicos">Curadoria</RouterLink>
      </nav>

      <a class="header-cta" :href="whatsappUrl()" target="_blank" rel="noopener">
        Fale conosco <ArrowUpRight :size="16" aria-hidden="true" />
      </a>

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

    <nav v-show="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Navegação para celular">
      <RouterLink to="/#colecao">Coleções <span>01</span></RouterLink>
      <RouterLink to="/sobre">Nossa história <span>02</span></RouterLink>
      <RouterLink to="/servicos">Curadoria <span>03</span></RouterLink>
      <a :href="whatsappUrl()" target="_blank" rel="noopener">Fale com a OUSE <ArrowUpRight :size="24" /></a>
      <p>Perfumaria & acessórios · Enviamos para todo o Brasil</p>
    </nav>
  </header>
</template>
