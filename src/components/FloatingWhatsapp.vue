<script setup lang="ts">
import { MessageCircle } from '@lucide/vue';
import { whatsappUrl } from '../data/site';
</script>

<template>
  <a class="floating-whatsapp" :href="whatsappUrl()" target="_blank" rel="noopener" aria-label="Conversar com a Indy pelo WhatsApp">
    <MessageCircle :size="21" aria-hidden="true" />
    <span>Falar com a Indy</span>
  </a>
</template>
