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
      <a class="brand" href="#inicio" aria-label="Aurora Flash Club — início">
        <span class="brand-mark">A</span>
        <span><strong>Aurora</strong><small>flash club</small></span>
      </a>

      <nav class="desktop-nav" aria-label="Navegação principal">
        <a href="#trabalhos">Trabalhos</a>
        <a href="#experiencia">Como funciona</a>
        <a href="#sobre">Sobre</a>
      </nav>

      <a class="header-cta" :href="whatsappUrl()" target="_blank" rel="noopener">
        Quero tatuar <ArrowUpRight :size="17" aria-hidden="true" />
      </a>

      <button class="menu-button" type="button" :aria-expanded="menuOpen" :aria-label="menuOpen ? 'Fechar menu' : 'Abrir menu'" aria-controls="mobile-menu" @click="menuOpen = !menuOpen">
        <X v-if="menuOpen" :size="24" aria-hidden="true" />
        <Menu v-else :size="24" aria-hidden="true" />
      </button>
    </div>

    <nav v-show="menuOpen" id="mobile-menu" class="mobile-nav" aria-label="Navegação para celular">
      <a href="#trabalhos" @click="closeMenu">Trabalhos</a>
      <a href="#experiencia" @click="closeMenu">Como funciona</a>
      <a href="#sobre" @click="closeMenu">Sobre</a>
      <a :href="whatsappUrl()" target="_blank" rel="noopener">Quero tatuar <ArrowUpRight :size="22" /></a>
    </nav>
  </header>
</template>
