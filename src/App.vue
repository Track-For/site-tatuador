<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import FloatingWhatsapp from './components/FloatingWhatsapp.vue';
import SiteFooter from './components/SiteFooter.vue';
import SiteHeader from './components/SiteHeader.vue';

const route = useRoute();
const introVisible = ref(true);
let introTimer: ReturnType<typeof setTimeout> | undefined;
let revealObserver: IntersectionObserver | undefined;

function prepareReveals() {
  if (typeof window === 'undefined') return;
  revealObserver?.disconnect();
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    elements.forEach((element) => element.classList.add('is-visible'));
    return;
  }

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver?.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

  elements.forEach((element) => revealObserver?.observe(element));
}

watch(
  () => route.fullPath,
  async () => {
    await nextTick();
    prepareReveals();
  },
);

onMounted(async () => {
  document.body.classList.add('intro-playing');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  introTimer = setTimeout(() => {
    introVisible.value = false;
    document.body.classList.remove('intro-playing');
  }, reducedMotion ? 180 : 1450);
  await nextTick();
  prepareReveals();
});

onBeforeUnmount(() => {
  if (introTimer) clearTimeout(introTimer);
  revealObserver?.disconnect();
  document.body.classList.remove('intro-playing');
});
</script>

<template>
  <Transition name="brand-intro">
    <div v-if="introVisible" class="cinema-intro" aria-hidden="true">
      <div class="cinema-intro-mark"><strong>OUSE</strong><span>Perfumaria & acessórios</span></div>
      <i></i>
    </div>
  </Transition>
  <div class="film-grain" aria-hidden="true"></div>
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <SiteHeader />
  <main id="conteudo">
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <SiteFooter />
  <FloatingWhatsapp />
</template>
