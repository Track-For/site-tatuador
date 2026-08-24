<script setup lang="ts">
import { ArrowDown, ArrowRight, Headphones, MapPin, PackageCheck, Plus, Ruler, ShieldCheck, Sparkles, Truck } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { computed, ref } from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { productCategories, products } from '../data/products';
import { siteConfig, whatsappUrl } from '../data/site';

const activeCategory = ref<(typeof productCategories)[number]>('Todos');
const filteredProducts = computed(() =>
  activeCategory.value === 'Todos' ? products : products.filter((product) => product.category === activeCategory.value),
);

useHead({
  title: 'Versa Wear | Moda masculina em Goiânia',
  meta: [
    { name: 'description', content: 'Moda masculina contemporânea em Goiânia. Polos, camisas, camisetas e calças com compra fácil pelo WhatsApp.' },
    { property: 'og:title', content: 'Versa Wear | Moda masculina em Goiânia' },
    { property: 'og:description', content: 'Vista a sua melhor versão. Conheça a coleção Versa Wear.' },
    { property: 'og:url', content: siteConfig.domain },
    { property: 'og:image', content: `${siteConfig.domain}/og.png` },
    { name: 'twitter:title', content: 'Versa Wear | Moda masculina em Goiânia' },
    { name: 'twitter:description', content: 'Vista a sua melhor versão. Conheça a coleção Versa Wear.' },
    { name: 'twitter:image', content: `${siteConfig.domain}/og.png` },
  ],
  link: [{ rel: 'canonical', href: siteConfig.domain }],
});
</script>

<template>
  <section id="topo" class="hero">
    <img class="hero-photo" src="/images/versa/hero-dark.jpg" alt="Homem vestindo polo preta em editorial de moda" />
    <div class="hero-shade"></div>
    <div class="hero-copy site-shell">
      <p class="eyebrow"><MapPin :size="14" aria-hidden="true" /> Goiânia · Goiás</p>
      <h1>Vista a sua<br /><em>melhor versão.</em></h1>
      <p class="hero-lead">Moda masculina para quem sabe que presença não precisa de exagero.</p>
      <div class="hero-actions">
        <a class="button button-gold" href="#novidades">Ver novidades <ArrowRight :size="18" aria-hidden="true" /></a>
        <a class="text-link" href="#colecao">Explorar coleção</a>
      </div>
    </div>
    <a class="scroll-cue" href="#novidades"><span>Descubra</span><ArrowDown :size="17" aria-hidden="true" /></a>
  </section>

  <section class="benefits-strip" aria-label="Benefícios da loja">
    <article><Truck :size="21" :stroke-width="1.5" /><div><strong>Entrega local</strong><span>Goiânia e região</span></div></article>
    <article><ShieldCheck :size="21" :stroke-width="1.5" /><div><strong>Compra assistida</strong><span>Confirmação pelo WhatsApp</span></div></article>
    <article><PackageCheck :size="21" :stroke-width="1.5" /><div><strong>Troca facilitada</strong><span>Primeira troca grátis*</span></div></article>
    <article><Headphones :size="21" :stroke-width="1.5" /><div><strong>Atendimento próximo</strong><span>Ajuda para escolher</span></div></article>
  </section>

  <section id="novidades" class="editorial-section section-space">
    <div class="section-heading site-shell">
      <p class="eyebrow">Nova seleção · 2026</p>
      <h2>Essenciais que<br /><em>acompanham seu ritmo.</em></h2>
      <p>Do trabalho ao fim de semana, peças escolhidas para combinar entre si e durar além da estação.</p>
    </div>
    <div class="teaser-grid site-shell">
      <a href="#colecao" class="teaser-card teaser-card-wide">
        <img src="/images/versa/shirt-white.jpg" alt="Homem com camisa branca" />
        <span><small>01</small><strong>Camisas</strong><ArrowRight :size="20" /></span>
      </a>
      <a href="#colecao" class="teaser-card">
        <img src="/images/versa/polo-black.jpg" alt="Homem com polo preta" />
        <span><small>02</small><strong>Polos</strong><ArrowRight :size="20" /></span>
      </a>
      <a href="#colecao" class="teaser-card">
        <img src="/images/versa/goiania-beige.jpg" alt="Homem com look casual bege em Goiânia" />
        <span><small>03</small><strong>Casual</strong><ArrowRight :size="20" /></span>
      </a>
    </div>
  </section>

  <section id="colecao" class="collection-section section-space">
    <div class="collection-head site-shell">
      <div>
        <p class="eyebrow">Seleção Versa</p>
        <h2>Escolha sua<br /><em>próxima peça.</em></h2>
      </div>
      <p>Uma curadoria enxuta de peças versáteis. Escolha o tamanho, adicione à sacola e confirme seu pedido com nosso atendimento.</p>
    </div>

    <div class="filter-bar site-shell" role="group" aria-label="Filtrar produtos por categoria">
      <button
        v-for="category in productCategories"
        :key="category"
        type="button"
        :class="{ active: activeCategory === category }"
        :aria-pressed="activeCategory === category"
        @click="activeCategory = category"
      >
        {{ category }}
      </button>
    </div>

    <TransitionGroup name="product-grid" tag="div" class="product-grid site-shell">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </TransitionGroup>
  </section>

  <section class="local-banner">
    <div class="local-banner-copy">
      <p class="eyebrow"><MapPin :size="14" /> Feito para Goiânia</p>
      <h2>Seu estilo, sem distância.</h2>
      <p>Atendimento online com entrega local e suporte real para acertar no tamanho, na combinação e na escolha.</p>
      <a class="button button-light" :href="whatsappUrl('Olá, Versa Wear! Quero saber sobre entrega em Goiânia.')" target="_blank" rel="noopener">Consultar entrega <ArrowRight :size="18" /></a>
    </div>
    <div class="local-banner-photo"><img src="/images/versa/goiania-beige.jpg" alt="Retrato masculino casual fotografado em Goiânia" loading="lazy" /></div>
  </section>

  <section id="sobre" class="about-section section-space site-shell">
    <div class="about-photo">
      <img src="/images/versa/look-white.jpg" alt="Homem com visual casual sofisticado" loading="lazy" />
      <span>Goiânia · GO</span>
    </div>
    <div class="about-copy">
      <p class="eyebrow">A marca</p>
      <h2>Versátil no nome.<br /><em>Autêntica na essência.</em></h2>
      <p class="about-lead">A Versa Wear nasce para simplificar o guarda-roupa masculino com peças que funcionam em mais de um cenário — e fazem você se sentir bem em todos eles.</p>
      <div class="about-values">
        <article><span>01</span><div><strong>Curadoria objetiva</strong><p>Menos excesso, mais peças que realmente combinam com sua rotina.</p></div></article>
        <article><span>02</span><div><strong>Presença sem esforço</strong><p>Caimento, textura e cores pensados para elevar o essencial.</p></div></article>
        <article><span>03</span><div><strong>Atendimento humano</strong><p>Conversa direta para ajudar você a escolher com segurança.</p></div></article>
      </div>
    </div>
  </section>

  <section class="fit-section section-space">
    <div class="fit-shell site-shell">
      <div class="fit-intro">
        <Ruler :size="30" :stroke-width="1.35" aria-hidden="true" />
        <p class="eyebrow">Guia rápido</p>
        <h2>O caimento certo<br /><em>faz toda diferença.</em></h2>
        <p>Ficou entre dois tamanhos? Chame a gente com suas medidas e receba uma indicação antes de fechar o pedido.</p>
      </div>
      <ol class="fit-steps">
        <li><span>01</span><div><strong>Escolha a peça</strong><p>Selecione modelo, cor e tamanho desejado.</p></div></li>
        <li><span>02</span><div><strong>Envie suas medidas</strong><p>Altura, peso e uma peça de referência já ajudam.</p></div></li>
        <li><span>03</span><div><strong>Compre com confiança</strong><p>Confirmamos o melhor tamanho e a entrega no WhatsApp.</p></div></li>
      </ol>
      <a class="button button-gold" :href="whatsappUrl('Olá, Versa Wear! Preciso de ajuda para escolher meu tamanho.')" target="_blank" rel="noopener">Quero ajuda com tamanho <ArrowRight :size="18" /></a>
    </div>
  </section>

  <section class="faq-section section-space site-shell">
    <div class="faq-intro">
      <p class="eyebrow">Dúvidas frequentes</p>
      <h2>Antes de<br /><em>escolher.</em></h2>
      <p>Se sua dúvida não estiver aqui, nosso atendimento responde pelo WhatsApp.</p>
    </div>
    <div class="faq-list">
      <details open>
        <summary>Como finalizo meu pedido?<Plus /></summary>
        <p>Adicione as peças à sacola e clique em “Finalizar pelo WhatsApp”. A mensagem já chega com itens, tamanhos e subtotal para conferirmos disponibilidade, frete e pagamento.</p>
      </details>
      <details>
        <summary>Vocês entregam em Goiânia?<Plus /></summary>
        <p>Sim. A Versa Wear atende Goiânia e região com prazo e valor confirmados conforme o endereço. Também enviamos para outras cidades do Brasil.</p>
      </details>
      <details>
        <summary>Posso trocar se o tamanho não servir?<Plus /></summary>
        <p>Sim. Orientamos a troca pelo atendimento. As condições e o prazo são confirmados junto com o pedido.</p>
      </details>
      <details>
        <summary>Como escolho meu tamanho?<Plus /></summary>
        <p>Envie altura, peso e medidas aproximadas pelo WhatsApp. Nossa equipe ajuda a comparar com a modelagem da peça escolhida.</p>
      </details>
    </div>
  </section>

  <section class="closing-section">
    <Sparkles :size="24" :stroke-width="1.35" aria-hidden="true" />
    <p class="eyebrow">Versa Wear · Goiânia</p>
    <h2>Vista quem você é.<br /><em>Em qualquer versão.</em></h2>
    <a class="button button-light" href="#colecao">Conhecer a coleção <ArrowRight :size="18" /></a>
  </section>
</template>
