<script setup lang="ts">
import { ArrowUpRight, MapPin } from '@lucide/vue';
import { siteConfig, whatsappUrl } from '../data/site';
import BrandMark from './BrandMark.vue';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-lead site-shell">
      <div>
        <p class="eyebrow">Atendimento próximo</p>
        <h2>Sua próxima versão<br /><em>começa aqui.</em></h2>
      </div>
      <a class="footer-arrow" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Conversar com a Versa Wear">
        <ArrowUpRight :size="32" aria-hidden="true" />
      </a>
    </div>
    <div class="footer-grid site-shell">
      <a class="footer-brand" href="#topo"><BrandMark /></a>
      <div>
        <p class="footer-label">Navegue</p>
        <a href="#novidades">Novidades</a>
        <a href="#colecao">Coleção</a>
        <a href="#sobre">A marca</a>
      </div>
      <div>
        <p class="footer-label">Atendimento</p>
        <a :href="whatsappUrl()" target="_blank" rel="noopener">Comprar pelo WhatsApp ↗</a>
        <a :href="`mailto:${siteConfig.email}`">{{ siteConfig.email }}</a>
      </div>
      <div>
        <p class="footer-label">Goiânia, GO</p>
        <span><MapPin :size="15" /> Loja online</span>
        <a :href="siteConfig.instagramUrl" target="_blank" rel="noopener"><ArrowUpRight :size="15" /> {{ siteConfig.instagramHandle }}</a>
      </div>
    </div>
    <div class="footer-bottom site-shell">
      <span>© {{ currentYear }} {{ siteConfig.name }}</span>
      <span>Moda masculina · Goiânia</span>
      <a href="#topo">Voltar ao topo ↑</a>
    </div>
  </footer>
</template>
