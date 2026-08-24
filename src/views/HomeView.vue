<script setup lang="ts">
import { ArrowDown, ArrowUpRight, CalendarHeart, HeartHandshake, ShieldCheck, Sparkles } from '@lucide/vue';
import { useHead } from '@unhead/vue';
import ContactForm from '../components/ContactForm.vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Indy Tatoo | Tattoos pequenas, memórias gigantes',
  meta: [
    { name: 'description', content: 'Tatuagens autorais de personagens, nostalgia e traço delicado. Conheça os trabalhos e peça seu orçamento pelo WhatsApp.' },
    { property: 'og:title', content: 'Indy Tatoo | Tattoos pequenas, memórias gigantes' },
    { property: 'og:description', content: 'Personagens, nostalgia e traço delicado em projetos feitos para a sua história.' },
    { property: 'og:url', content: siteConfig.domain },
  ],
});

const works = [
  { title: 'Coelhinho lunar', note: 'Flash autoral · fine line', position: 'left' },
  { title: 'Sapo dançarino', note: 'Nostalgia · traço ilustrativo', position: 'center' },
  { title: 'Joaninha charmosa', note: 'Cartoon · black ink', position: 'right' },
];

const faqs = [
  { q: 'Você tatua desenhos de personagens?', a: 'Sim. A ideia é usar sua referência afetiva como ponto de partida e criar uma composição autoral, adaptada ao tamanho e ao local do corpo.' },
  { q: 'Como recebo o orçamento?', a: 'Envie tema, local do corpo e tamanho aproximado. Você recebe pelo WhatsApp a estimativa, formas de pagamento e datas disponíveis.' },
  { q: 'É minha primeira tattoo. Tudo bem?', a: 'Claro. Antes da sessão, você recebe orientação sobre tamanho, dor, preparo e cuidados. A sessão acontece sem pressa e com pausas quando necessário.' },
  { q: 'Como funciona o desenho?', a: 'Depois da confirmação, a ideia é desenvolvida para você. Ajustes de composição são alinhados antes de tatuar, respeitando o estilo e a anatomia.' },
];
</script>

<template>
  <section id="inicio" class="hero">
    <div class="hero-copy">
      <p class="eyebrow"><Sparkles :size="15" aria-hidden="true" /> Tattoo autoral · São Paulo</p>
      <h1>Tattoos pequenas.<br /><em>Memórias gigantes.</em></h1>
      <p class="hero-lead">Personagens, nostalgia e traço delicado para transformar aquela ideia afetiva em uma tattoo só sua.</p>
      <div class="hero-actions">
        <a class="button button-primary" :href="whatsappUrl('Oi, Indy! Tenho uma ideia de tattoo e queria saber como funciona.')" target="_blank" rel="noopener">
          Quero minha tattoo <ArrowUpRight :size="18" aria-hidden="true" />
        </a>
        <a class="text-link" href="#trabalhos">Ver trabalhos <ArrowDown :size="16" aria-hidden="true" /></a>
      </div>
      <ul class="hero-notes" aria-label="Destaques do atendimento">
        <li>Desenho autoral</li>
        <li>Sessão com calma</li>
        <li>Suporte no pós</li>
      </ul>
    </div>

    <div class="hero-art" aria-label="Seleção de tatuagens autorais em estilo cartoon">
      <div class="hero-photo hero-photo-one"></div>
      <div class="hero-photo hero-photo-two"></div>
      <div class="hero-photo hero-photo-three"></div>
      <span class="tape tape-one" aria-hidden="true"></span>
      <span class="tape tape-two" aria-hidden="true"></span>
      <span class="scribble" aria-hidden="true">feito pra você!</span>
      <span class="hero-badge" aria-hidden="true"><b>1/1</b> desenho<br />exclusivo</span>
    </div>
  </section>

  <div class="ticker" aria-hidden="true">
    <div>personagens ✦ nostalgia ✦ fine line ✦ flash autoral ✦ personagens ✦ nostalgia ✦ fine line ✦ flash autoral ✦</div>
  </div>

  <section id="trabalhos" class="section portfolio-section">
    <div class="section-shell section-heading">
      <div>
        <p class="eyebrow">Trabalhos recentes</p>
        <h2>Um pedacinho de<br /><em>quem você é.</em></h2>
      </div>
      <p>Traço limpo, referências afetivas e uma dose de humor. Cada tattoo começa em uma conversa e termina com personalidade.</p>
    </div>

    <div class="portfolio-grid section-shell">
      <figure v-for="(work, index) in works" :key="work.title" class="portfolio-card">
        <div class="portfolio-image" :class="`portfolio-${work.position}`" role="img" :aria-label="`Tatuagem ${work.title}`"></div>
        <figcaption>
          <span>0{{ index + 1 }}</span>
          <div><strong>{{ work.title }}</strong><small>{{ work.note }}</small></div>
        </figcaption>
      </figure>
    </div>

    <div class="section-action section-shell">
      <a class="button button-outline" :href="siteConfig.instagramUrl" target="_blank" rel="noopener">
        Ver mais no Instagram <ArrowUpRight :size="18" aria-hidden="true" />
      </a>
    </div>
  </section>

  <section id="experiencia" class="section experience-section">
    <div class="section-shell section-heading experience-heading">
      <div>
        <p class="eyebrow">A experiência</p>
        <h2>Leve do começo<br /><em>ao cicatrizado.</em></h2>
      </div>
      <p>Sem mistério e sem pressa. Você entende cada etapa antes de sentar na maca.</p>
    </div>
    <div class="experience-grid section-shell">
      <article>
        <span>01</span><CalendarHeart :size="31" :stroke-width="1.6" aria-hidden="true" />
        <h3>Você conta a ideia</h3>
        <p>Tema, tamanho e local do corpo. Se tiver referências, pode mandar tudo.</p>
      </article>
      <article>
        <span>02</span><Sparkles :size="31" :stroke-width="1.6" aria-hidden="true" />
        <h3>Eu crio o desenho</h3>
        <p>A referência vira uma composição original, pensada para encaixar em você.</p>
      </article>
      <article>
        <span>03</span><HeartHandshake :size="31" :stroke-width="1.6" aria-hidden="true" />
        <h3>A gente tatua</h3>
        <p>Você aprova os detalhes e a sessão acontece no seu ritmo, com todo cuidado.</p>
      </article>
    </div>
  </section>

  <section id="sobre" class="about-section">
    <div class="about-card section-shell">
      <div class="about-title">
        <p class="eyebrow">Por trás do traço</p>
        <h2>Oi, eu sou<br /><em>a Indy.</em></h2>
        <span class="about-note" aria-hidden="true">pode chegar com sua ideia “estranha” ♡</span>
      </div>
      <div class="about-copy">
        <p class="large-copy">Eu gosto de transformar personagens, cenas e pequenas obsessões em tattoos que parecem ter sido feitas para morar na sua pele.</p>
        <p>Meu trabalho mistura desenho delicado, preto bem marcado e referências nostálgicas. O atendimento é individual, sem julgamento e com espaço para você perguntar tudo.</p>
        <ul>
          <li><ShieldCheck :size="19" aria-hidden="true" /> Biossegurança e materiais descartáveis</li>
          <li><HeartHandshake :size="19" aria-hidden="true" /> Atendimento acolhedor e com pausas</li>
          <li><Sparkles :size="19" aria-hidden="true" /> Desenho exclusivo para cada projeto</li>
        </ul>
        <a class="text-link" :href="siteConfig.instagramUrl" target="_blank" rel="noopener">Me conheça no Instagram <ArrowUpRight :size="17" /></a>
      </div>
    </div>
  </section>

  <section class="section faq-section">
    <div class="section-shell faq-layout">
      <div class="faq-intro">
        <p class="eyebrow">Antes de tatuar</p>
        <h2>Pode perguntar.<br /><em>De verdade.</em></h2>
        <p>Algumas respostas para você chegar mais tranquila na primeira conversa.</p>
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
    <div class="section-shell contact-layout">
      <div class="contact-intro">
        <p class="eyebrow eyebrow-light">Vamos tirar do papel?</p>
        <h2>Conte sua ideia.<br /><em>Eu cuido do resto.</em></h2>
        <p>Preencha o essencial e sua mensagem já abre organizada no WhatsApp. Normalmente respondo em até um dia útil.</p>
        <div class="contact-chips"><span>Orçamento sem compromisso</span><span>Resposta pelo WhatsApp</span></div>
      </div>
      <ContactForm />
    </div>
  </section>
</template>
