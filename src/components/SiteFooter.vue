<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue';
import { siteConfig, whatsappUrl } from '../data/site';

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="site-footer">
    <div class="footer-cta section-shell">
      <div>
        <p class="eyebrow eyebrow-light">Sua ideia pode sair do papel</p>
        <h2>Vamos criar sua<br /><em>próxima favorita?</em></h2>
      </div>
      <a class="footer-button" :href="whatsappUrl()" target="_blank" rel="noopener">
        Conversar no WhatsApp <ArrowUpRight :size="20" aria-hidden="true" />
      </a>
    </div>

    <div class="footer-meta section-shell">
      <a class="brand footer-brand" href="#inicio">
        <span class="brand-mark">I</span>
        <span><strong>Indy</strong><small>tatoo</small></span>
      </a>
      <p>{{ siteConfig.address }}<br />Terça a sábado · com agendamento</p>
      <a class="instagram-link" :href="siteConfig.instagramUrl" target="_blank" rel="noopener">
        @ {{ siteConfig.instagramHandle.replace('@', '') }}
      </a>
    </div>
    <div class="footer-bottom section-shell">
      <span>© {{ currentYear }} {{ siteConfig.name }}</span>
      <span>Desenho autoral · ambiente seguro · atendimento com calma</span>
    </div>
  </footer>
</template>
