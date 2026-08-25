<script setup lang="ts">
import { ArrowUpRight, Menu, X } from '@lucide/vue';
import { onBeforeUnmount, ref, watch } from 'vue';
import { whatsappUrl } from '../data/site';

const menuOpen = ref(false);

watch(menuOpen, (isOpen) => {
  if (typeof document !== 'undefined') document.body.classList.toggle('menu-open', isOpen);
});

function closeMenu() {
  menuOpen.value = false;
}

onBeforeUnmount(() => document.body.classList.remove('menu-open'));
</script>

<template>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#inicio" aria-label="Vértice Tattoo — início">
        <span class="brand-mark"><i>V</i></span>
        <span><strong>Vértice</strong><small>tattoo atelier</small></span>
      </a>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#corpo">No corpo</a>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">O artista</a>
      </nav>

      <a class="header-cta" :href="whatsappUrl()" target="_blank" rel="noopener">
        Começar projeto <ArrowUpRight :size="17" aria-hidden="true" />
      </a>

      <button class="menu-button" type="button" :aria-expanded="menuOpen" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">
        <X v-if="menuOpen" :size="24" aria-hidden="true" />
        <Menu v-else :size="24" aria-hidden="true" />
      </button>
    </div>

    <nav v-show="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Navegação para celular">
      <a href="#corpo" @click="closeMenu">No corpo</a>
      <a href="#projetos" @click="closeMenu">Projetos</a>
      <a href="#sobre" @click="closeMenu">O artista</a>
      <a :href="whatsappUrl()" target="_blank" rel="noopener">Começar projeto <ArrowUpRight :size="22" /></a>
    </nav>
  </header>
</template>
