<script setup lang="ts">
import { onMounted } from 'vue';
import CartDrawer from './components/CartDrawer.vue';
import FloatingWhatsapp from './components/FloatingWhatsapp.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';
import { useCart } from './composables/useCart';

const { hydrate } = useCart();
onMounted(hydrate);
</script>

<template>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <SiteHeader />
  <main id="conteudo">
    <RouterView />
  </main>
  <SiteFooter />
  <FloatingWhatsapp />
  <CartDrawer />
</template>
