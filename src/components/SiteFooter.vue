<script setup lang="ts">
import { siteConfig } from '../data/site';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-meta shell">
      <a class="brand footer-brand" href="#inicio">
        <span class="brand-mark"><i>V</i></span>
        <span><strong>Vértice</strong><small>tattoo atelier</small></span>
      </a>
      <p>{{ siteConfig.address }}<br />Terça a sábado · somente com agendamento</p>
      <a class="instagram-link" :href="siteConfig.instagramUrl" target="_blank" rel="noopener">
        @ {{ siteConfig.instagramHandle.replace('@', '') }}
      </a>
    </div>
    <div class="footer-bottom shell">
      <span>© {{ currentYear }} {{ siteConfig.name }}</span>
      <span>Projeto demonstrativo · marca, artista e informações 100% fictícios</span>
    </div>
  </footer>
</template>
