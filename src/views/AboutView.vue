<script setup lang="ts">
import { ArrowUpRight, Heart, Search, Sparkles } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Nossa história | OUSE Perfumaria & Acessórios',
  meta: [
    { name: 'description', content: 'Conheça a OUSE, uma perfumaria criada para transformar a escolha de perfumes e presentes em uma experiência próxima e cheia de significado.' },
    { property: 'og:title', content: 'Nossa história | OUSE' },
    { property: 'og:description', content: 'Perfume é presença, memória e expressão.' },
    { property: 'og:url', content: `${siteConfig.domain}/sobre` },
    { property: 'og:image', content: `${siteConfig.domain}/og.png` },
    { name: 'twitter:title', content: 'Nossa história | OUSE' },
    { name: 'twitter:description', content: 'Perfume é presença, memória e expressão.' },
    { name: 'twitter:image', content: `${siteConfig.domain}/og.png` },
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.domain}/sobre` }],
});

const values = [
  { icon: Search, number: '01', title: 'Olhar cuidadoso', text: 'Escutamos antes de sugerir. Cada escolha parte da sua história, gosto e intenção.' },
  { icon: Heart, number: '02', title: 'Beleza com afeto', text: 'Acreditamos em presentes e fragrâncias que criam vínculo e permanecem na memória.' },
  { icon: Sparkles, number: '03', title: 'Liberdade para ousar', text: 'Perfume é expressão. Você pode mudar, experimentar e escolher o que faz sentido agora.' },
];
</script>

<template>
  <section class="inner-hero about-hero">
    <div class="container-wide inner-hero-grid">
      <div><p class="eyebrow">Nossa essência</p><h1>Perfume é uma forma<br />de <em>presença.</em></h1></div>
      <p>Há aromas que chegam antes da palavra e ficam muito depois do encontro. A OUSE existe para ajudar você a encontrar o seu.</p>
    </div>
    <span class="inner-hero-word" aria-hidden="true">OUSE</span>
  </section>

  <section class="story-section container-wide">
    <figure class="story-image">
      <img src="/images/ouse-floral.png" width="1024" height="1280" alt="Frasco de perfume rosé ao lado de uma flor delicada" />
      <figcaption>Um aroma. Uma memória. Uma assinatura.</figcaption>
    </figure>
    <div class="story-copy">
      <p class="eyebrow">Por que OUSE?</p>
      <h2>Porque escolher é<br />também se <em>revelar.</em></h2>
      <p class="large-copy">A OUSE nasceu do desejo de tornar a perfumaria mais humana: menos sobre seguir uma fórmula e mais sobre reconhecer o que desperta algo em você.</p>
      <p>Para nós, fragrância não tem regra fixa. Tem pele, memória, momento e personalidade. Por isso, nosso atendimento começa com conversa e termina com uma escolha que faz sentido.</p>
      <p>Também acreditamos no poder dos pequenos detalhes. Um acessório, um laço, uma mensagem e a intenção certa podem transformar um presente em lembrança.</p>
      <div class="story-signature"><strong>OUSE</strong><span>perfumaria & acessórios</span></div>
    </div>
  </section>

  <section class="values-section">
    <div class="values-intro container-wide">
      <p class="eyebrow">O que nos guia</p>
      <h2>Sentir. Escolher.<br /><em>Marcar.</em></h2>
    </div>
    <div class="values-grid container-wide">
      <article v-for="value in values" :key="value.number">
        <span>{{ value.number }}</span>
        <component :is="value.icon" :size="27" :stroke-width="1.35" aria-hidden="true" />
        <h3>{{ value.title }}</h3>
        <p>{{ value.text }}</p>
      </article>
    </div>
  </section>

  <section class="manifesto-section">
    <div class="manifesto-copy">
      <p class="eyebrow">Manifesto OUSE</p>
      <blockquote>Ouse mudar de ideia.<br />Ouse escolher por você.<br /><em>Ouse deixar lembrança.</em></blockquote>
    </div>
    <figure><img src="/images/ouse-woody.png" width="1024" height="1280" alt="Perfume âmbar em uma composição intensa e sofisticada" loading="lazy" /></figure>
  </section>

  <section class="page-cta">
    <div>
      <p class="eyebrow">Sua próxima descoberta</p>
      <h2>Pronta para encontrar<br />um perfume <em>seu?</em></h2>
      <a class="ouse-button ouse-button-light" :href="whatsappUrl('Olá, OUSE! Quero conhecer a curadoria de vocês.')" target="_blank" rel="noopener">Conversar com a OUSE <ArrowUpRight :size="18" /></a>
    </div>
  </section>
</template>
