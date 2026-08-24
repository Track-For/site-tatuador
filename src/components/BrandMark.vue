<script setup lang="ts">
import { Crown } from '@lucide/vue';

withDefaults(defineProps<{ compact?: boolean }>(), { compact: false });
</script>

<template>
  <span class="brand-mark" :class="{ 'is-compact': compact }">
    <Crown class="brand-mark-crown" :size="compact ? 18 : 24" :stroke-width="1.25" aria-hidden="true" />
    <span class="brand-mark-name">Versa Wear</span>
    <span class="brand-mark-subtitle">Moda masculina</span>
  </span>
</template>
