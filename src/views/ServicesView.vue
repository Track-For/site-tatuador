<script setup lang="ts">
import { ArrowUpRight, Check } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Curadoria de perfumes e presentes | OUSE',
  meta: [
    { name: 'description', content: 'Conte o que você busca e receba sugestões de perfumes e presentes alinhadas ao seu gosto, momento e intenção.' },
    { property: 'og:title', content: 'Curadoria personalizada | OUSE' },
    { property: 'og:description', content: 'Você conta as pistas. A OUSE ajuda a encontrar a escolha certa.' },
    { property: 'og:url', content: `${siteConfig.domain}/servicos` },
    { property: 'og:image', content: `${siteConfig.domain}/og.png` },
    { name: 'twitter:title', content: 'Curadoria personalizada | OUSE' },
    { name: 'twitter:description', content: 'Você conta as pistas. A OUSE ajuda a encontrar a escolha certa.' },
    { name: 'twitter:image', content: `${siteConfig.domain}/og.png` },
  ],
  link: [{ rel: 'canonical', href: `${siteConfig.domain}/servicos` }],
});

const services = [
  { number: '01', title: 'Perfume assinatura', eyebrow: 'Para chamar de seu', text: 'Partimos das fragrâncias, sensações e ocasiões que combinam com você para apresentar caminhos olfativos coerentes com a sua personalidade.', tags: ['Perfil olfativo', 'Uso e ocasião', 'Sugestões pessoais'], image: '/images/ouse-floral.png', message: 'Olá, OUSE! Quero ajuda para encontrar meu perfume assinatura.' },
  { number: '02', title: 'Escolha para presente', eyebrow: 'Afeto em cada detalhe', text: 'Você conta para quem é, a ocasião e o estilo da pessoa. A OUSE ajuda a transformar essas pistas em um presente bonito e cheio de intenção.', tags: ['Perfumes', 'Acessórios', 'Apresentação especial'], image: '/images/ouse-gifts.png', message: 'Olá, OUSE! Quero montar um presente especial.' },
  { number: '03', title: 'Nova descoberta', eyebrow: 'Para sair do habitual', text: 'Para quem quer experimentar algo diferente sem perder a própria identidade. Exploramos novas famílias, notas e intensidades com direção.', tags: ['Novas famílias', 'Outras intensidades', 'Escolha guiada'], image: '/images/ouse-woody.png', message: 'Olá, OUSE! Quero descobrir um perfume diferente.' },
];

const included = [
  'Conversa sobre referências e preferências',
  'Leitura do momento e da ocasião de uso',
  'Sugestões dentro do catálogo disponível',
  'Orientação sobre famílias e notas olfativas',
  'Atendimento direto pelo WhatsApp',
];
</script>

<template>
  <section class="inner-hero services-hero">
    <div class="container-wide inner-hero-grid">
      <div><p class="eyebrow">Curadoria OUSE</p><h1>Você traz as pistas.<br /><em>Nós criamos caminhos.</em></h1></div>
      <p>Escolher um perfume fica mais simples quando alguém ajuda a traduzir gosto, memória, ocasião e intenção.</p>
    </div>
    <span class="inner-hero-word" aria-hidden="true">SENTIR</span>
  </section>

  <section class="services-list container-wide">
    <article v-for="service in services" :key="service.number" class="service-row">
      <span class="service-number">{{ service.number }}</span>
      <figure class="service-image"><img :src="service.image" :alt="service.title" width="1024" height="1280" loading="lazy" /></figure>
      <div class="service-copy">
        <p class="service-eyebrow">{{ service.eyebrow }}</p>
        <h2>{{ service.title }}</h2>
        <p>{{ service.text }}</p>
        <ul><li v-for="tag in service.tags" :key="tag">{{ tag }}</li></ul>
        <a :href="whatsappUrl(service.message)" target="_blank" rel="noopener">Começar conversa <ArrowUpRight :size="17" /></a>
      </div>
    </article>
  </section>

  <section class="included-section">
    <div class="included-layout container-wide">
      <div>
        <p class="eyebrow">Como funciona</p>
        <h2>Uma conversa.<br />Muitas <em>possibilidades.</em></h2>
        <p>Você não precisa conhecer termos técnicos. Basta contar o que gosta, o que evita e como quer se sentir.</p>
      </div>
      <ul><li v-for="item in included" :key="item"><Check :size="17" aria-hidden="true" />{{ item }}</li></ul>
    </div>
  </section>

  <section class="curation-steps container-wide">
    <div><p class="eyebrow">Em três passos</p><h2>Do desejo<br />à escolha.</h2></div>
    <ol>
      <li><span>01</span><div><h3>Conte as pistas</h3><p>Preferências, ocasião, intensidade e referências que você já conhece.</p></div></li>
      <li><span>02</span><div><h3>Receba sugestões</h3><p>Apresentamos opções do catálogo alinhadas ao perfil que construímos.</p></div></li>
      <li><span>03</span><div><h3>Escolha no seu ritmo</h3><p>Tire dúvidas e decida com segurança, sem pressão e com acompanhamento.</p></div></li>
    </ol>
  </section>

  <section class="page-cta page-cta-rose">
    <div>
      <p class="eyebrow">Comece agora</p>
      <h2>Qual sensação você<br />quer levar <em>consigo?</em></h2>
      <a class="ouse-button ouse-button-dark" :href="whatsappUrl('Olá, OUSE! Quero começar uma curadoria de perfumes.')" target="_blank" rel="noopener">Falar com a OUSE <ArrowUpRight :size="18" /></a>
    </div>
  </section>
</template>
