<script setup lang="ts">
import { MessageCircle } from '@lucide/vue';
import { whatsappUrl } from '../data/site';
</script>

<template>
  <a class="floating-whatsapp" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Conversar com o Vértice Tattoo Atelier pelo WhatsApp" data-cursor="AGENDAR">
    <MessageCircle :size="21" aria-hidden="true" />
    <span>Iniciar projeto</span>
  </a>
</template>
