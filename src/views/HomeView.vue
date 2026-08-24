<script setup lang="ts">
import { ArrowRight, ArrowUpRight, Gift, Heart, ShieldCheck, Sparkles, Star } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import ContactForm from '../components/ContactForm.vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'OUSE Perfumaria & Acessórios | Sua essência, sua assinatura',
  meta: [
    { name: 'description', content: 'Descubra perfumes e acessórios escolhidos para marcar momentos. Curadoria próxima, presentes especiais e atendimento personalizado na OUSE.' },
    { property: 'og:title', content: 'OUSE Perfumaria & Acessórios' },
    { property: 'og:description', content: 'Sua essência, sua assinatura.' },
    { property: 'og:url', content: siteConfig.domain },
    { property: 'og:image', content: `${siteConfig.domain}/og.png` },
    { name: 'twitter:title', content: 'OUSE Perfumaria & Acessórios' },
    { name: 'twitter:description', content: 'Sua essência, sua assinatura.' },
    { name: 'twitter:image', content: `${siteConfig.domain}/og.png` },
  ],
  link: [{ rel: 'canonical', href: siteConfig.domain }],
});

const collections = [
  { title: 'Florais & delicados', eyebrow: 'Leves, luminosos, inesquecíveis', image: '/images/ouse-floral.png', class: 'collection-card-large', message: 'Olá, OUSE! Quero conhecer opções florais e delicadas.' },
  { title: 'Intensos & marcantes', eyebrow: 'Madeiras, âmbar e presença', image: '/images/ouse-woody.png', class: '', message: 'Olá, OUSE! Quero conhecer opções intensas e marcantes.' },
  { title: 'Presentes & acessórios', eyebrow: 'Detalhes que encantam', image: '/images/ouse-gifts.png', class: '', message: 'Olá, OUSE! Quero montar um presente especial.' },
];

const scentFamilies = [
  { number: '01', name: 'Cítricos', description: 'Frescor luminoso para dias leves e cheios de movimento.', notes: 'Bergamota · limão · neroli' },
  { number: '02', name: 'Florais', description: 'Românticos, elegantes e tão plurais quanto cada pessoa.', notes: 'Rosa · jasmim · peônia' },
  { number: '03', name: 'Amadeirados', description: 'Conforto e presença em fragrâncias profundas e sofisticadas.', notes: 'Cedro · sândalo · vetiver' },
  { number: '04', name: 'Orientais', description: 'Calor envolvente para quem gosta de deixar lembrança.', notes: 'Baunilha · âmbar · especiarias' },
];

const faqs = [
  { q: 'Como escolher um perfume sem sentir na pele?', a: 'Nossa curadoria começa pelo que você já gosta: famílias olfativas, ocasiões, intensidade e perfumes de referência. A partir disso, sugerimos opções coerentes com o seu perfil.' },
  { q: 'Vocês ajudam a escolher presentes?', a: 'Sim. Conte para quem é, a ocasião e a faixa de preferência. Montamos uma sugestão especial com perfume, acessório e apresentação para presente.' },
  { q: 'Como sei quais produtos estão disponíveis?', a: 'O catálogo é atualizado pelo WhatsApp. Assim você recebe opções disponíveis, detalhes e condições diretamente com nosso atendimento.' },
  { q: 'A OUSE envia para outras cidades?', a: 'Sim. Consulte prazo, valor e disponibilidade de envio informando seu CEP no atendimento.' },
];
</script>

<template>
  <section class="ouse-hero">
    <div class="ouse-hero-copy">
      <p class="ouse-kicker"><Sparkles :size="14" aria-hidden="true" /> Perfumaria & acessórios</p>
      <h1>Encontre o aroma que<br /><em>fala por você.</em></h1>
      <p class="ouse-lead">Perfumes escolhidos para marcar momentos, despertar memórias e traduzir quem você é.</p>
      <div class="ouse-actions">
        <a class="ouse-button" :href="whatsappUrl('Olá, OUSE! Quero conhecer os perfumes disponíveis.')" target="_blank" rel="noopener">
          Descobrir perfumes <ArrowUpRight :size="18" aria-hidden="true" />
        </a>
        <a class="ouse-text-link" href="#colecao">Explorar coleções <span aria-hidden="true">↓</span></a>
      </div>
      <div class="ouse-signature" aria-label="Assinatura da marca">
        <span>O</span><p><strong>OUSE</strong> sentir primeiro.</p>
      </div>
    </div>

    <figure class="ouse-hero-visual">
      <img src="/images/ouse-hero.png" width="1536" height="1024" alt="Composição elegante com frascos de perfume em tons rosé, âmbar e marfim" fetchpriority="high" />
      <figcaption><span>Curadoria OUSE</span><span>01 — Sua nova assinatura</span></figcaption>
    </figure>
  </section>

  <section class="trust-strip" aria-label="Diferenciais da OUSE">
    <article><Sparkles :size="19" /><div><strong>Curadoria especial</strong><span>Escolhas para cada personalidade</span></div></article>
    <article><Gift :size="19" /><div><strong>Presente com intenção</strong><span>Detalhes feitos para encantar</span></div></article>
    <article><ShieldCheck :size="19" /><div><strong>Compra acompanhada</strong><span>Atendimento próximo e cuidadoso</span></div></article>
  </section>

  <section id="colecao" class="section collection-section">
    <div class="section-title container-wide">
      <div><p class="eyebrow">Escolhas OUSE</p><h2>Comece pelo que<br /><em>você quer sentir.</em></h2></div>
      <p>Nossa coleção não começa em uma lista de nomes. Começa na sensação que você quer levar consigo — ou oferecer a alguém.</p>
    </div>

    <div class="collection-grid container-wide">
      <article v-for="(item, index) in collections" :key="item.title" class="collection-card" :class="item.class">
        <img :src="item.image" :alt="item.title" width="1024" height="1280" loading="lazy" />
        <div class="collection-overlay">
          <span>0{{ index + 1 }}</span>
          <div><p>{{ item.eyebrow }}</p><h3>{{ item.title }}</h3></div>
          <a :href="whatsappUrl(item.message)" target="_blank" rel="noopener" :aria-label="`Conhecer ${item.title}`"><ArrowUpRight :size="20" /></a>
        </div>
      </article>
    </div>
  </section>

  <section class="finder-section">
    <div class="finder-copy">
      <p class="eyebrow">Curadoria personalizada</p>
      <h2>Seu perfume pode<br />chegar antes do <em>nome.</em></h2>
      <p>Você conta o que gosta, como quer se sentir e em quais momentos pretende usar. A OUSE traduz essas pistas em sugestões que combinam com a sua rotina.</p>
      <RouterLink to="/servicos" class="editorial-link">Conheça a curadoria <ArrowRight :size="18" /></RouterLink>
    </div>
    <div class="finder-card" aria-label="Etapas da curadoria OUSE">
      <span class="finder-card-label">Seu mapa olfativo</span>
      <ol>
        <li><span>01</span><div><strong>O que te atrai?</strong><p>Frescor, doçura, flores ou intensidade.</p></div></li>
        <li><span>02</span><div><strong>Como quer se sentir?</strong><p>Leve, elegante, confiante ou envolvente.</p></div></li>
        <li><span>03</span><div><strong>Qual é o momento?</strong><p>Dia a dia, noite, ocasião especial ou presente.</p></div></li>
      </ol>
      <a class="ouse-button ouse-button-light" :href="whatsappUrl('Olá, OUSE! Quero descobrir meu perfil olfativo.')" target="_blank" rel="noopener">Descobrir meu perfil <ArrowUpRight :size="18" /></a>
    </div>
  </section>

  <section class="section families-section">
    <div class="families-heading container-wide">
      <p class="eyebrow">Famílias olfativas</p>
      <h2>Qual delas<br /><em>tem a sua voz?</em></h2>
    </div>
    <div class="families-grid container-wide">
      <article v-for="family in scentFamilies" :key="family.number">
        <span>{{ family.number }}</span>
        <div class="family-orbit" aria-hidden="true"><i></i></div>
        <h3>{{ family.name }}</h3>
        <p>{{ family.description }}</p>
        <small>{{ family.notes }}</small>
      </article>
    </div>
  </section>

  <section class="about-preview">
    <figure class="about-preview-image">
      <img src="/images/ouse-gifts.png" width="1024" height="1280" alt="Perfume, joias e embalagem para presente em uma composição delicada" loading="lazy" />
      <div class="brand-seal" aria-hidden="true"><strong>OUSE</strong><span>perfumaria & acessórios</span></div>
    </figure>
    <div class="about-preview-copy">
      <p class="eyebrow">Sobre a OUSE</p>
      <h2>Beleza que fica<br />na <em>memória.</em></h2>
      <p class="large-copy">Acreditamos que perfume não é detalhe. É presença, lembrança e uma forma silenciosa de dizer quem você é.</p>
      <p>A OUSE nasceu para tornar essa escolha mais próxima e especial — com olhar cuidadoso, conversa verdadeira e sugestões que fazem sentido para cada pessoa.</p>
      <RouterLink to="/sobre" class="editorial-link">Conheça nossa história <ArrowRight :size="18" /></RouterLink>
    </div>
  </section>

  <section class="testimonial-section">
    <div class="testimonial-inner">
      <Heart :size="25" :stroke-width="1.3" aria-hidden="true" />
      <div class="stars" aria-label="5 de 5 estrelas"><Star v-for="n in 5" :key="n" :size="14" fill="currentColor" /></div>
      <blockquote>“Mais do que indicar um perfume, a OUSE entendeu o que eu queria sentir. A escolha ficou com a minha cara.”</blockquote>
      <p><strong>Uma experiência OUSE</strong><span>Curadoria personalizada</span></p>
    </div>
  </section>

  <section class="section faq-section">
    <div class="faq-layout container-wide">
      <div class="faq-intro">
        <p class="eyebrow">Dúvidas frequentes</p>
        <h2>Escolher também<br />é <em>descobrir.</em></h2>
        <p>Reunimos respostas para deixar sua experiência mais simples — do primeiro desejo ao perfume escolhido.</p>
      </div>
      <div class="faq-list">
        <details v-for="(faq, index) in faqs" :key="faq.q" :open="index === 0">
          <summary><span>{{ faq.q }}</span><b aria-hidden="true">+</b></summary>
          <p>{{ faq.a }}</p>
        </details>
      </div>
    </div>
  </section>

  <section id="contato" class="contact-section">
    <div class="contact-layout container-wide">
      <div class="contact-intro">
        <p class="eyebrow">Fale com a OUSE</p>
        <h2>Vamos encontrar<br />a sua <em>assinatura?</em></h2>
        <p>Conte um pouco do que você busca. Preparamos uma mensagem com suas preferências para continuar o atendimento pelo WhatsApp.</p>
        <div class="contact-meta">
          <span>Atendimento</span><strong>Próximo, simples e personalizado</strong>
          <span>Envios</span><strong>Consulte disponibilidade para sua região</strong>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
