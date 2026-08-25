<script setup lang="ts">
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Paperclip,
  Quote,
  ShieldCheck,
} from '@lucide/vue';
import { useHead } from '@unhead/vue';
import { computed, onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import { siteConfig, whatsappUrl } from '../data/site';

useHead({
  title: 'Vértice Tattoo Atelier | Tatuagem autoral em São Paulo',
  meta: [
    { name: 'description', content: 'Projetos autorais em blackwork, fine line e dark art, pensados para acompanhar a anatomia e o movimento do corpo.' },
    { property: 'og:title', content: 'Vértice Tattoo Atelier | A pele guarda o que a boca cala.' },
    { property: 'og:description', content: 'Descubra como sua próxima tatuagem vive no corpo e comece um projeto autoral.' },
    { property: 'og:url', content: siteConfig.domain },
  ],
});

const bodyWorks = [
  {
    key: 'braco',
    label: 'Braço',
    title: 'Oráculo de Ícaro',
    style: 'Blackwork',
    duration: '2 sessões · 11h',
    size: '32 cm',
    image: '/images/hero-vertice.png',
    story: 'Asas, queda e recomeço em uma composição construída para girar com o braço.',
  },
  {
    key: 'antebraco',
    label: 'Antebraço',
    title: 'Entrelinhas',
    style: 'Fine line',
    duration: '1 sessão · 4h',
    size: '18 cm',
    image: '/images/portfolio-fine-line.jpg',
    story: 'Duas mãos quase se encontram. O vazio entre elas guarda a parte mais importante da história.',
  },
  {
    key: 'costas',
    label: 'Costas',
    title: 'Catedral Noturna',
    style: 'Dark art',
    duration: '4 sessões · 24h',
    size: '58 cm',
    image: '/images/portfolio-process.jpg',
    story: 'Arquitetura, sombra e memória em grande escala, desenhadas a partir do eixo da coluna.',
  },
  {
    key: 'peito',
    label: 'Peito',
    title: 'Peso & Pulso',
    style: 'Geométrico',
    duration: '2 sessões · 9h',
    size: '34 cm',
    image: '/images/portfolio-art.jpg',
    story: 'Uma construção simétrica interrompida pelo ritmo da respiração e pela assimetria real do corpo.',
  },
  {
    key: 'perna',
    label: 'Perna',
    title: 'Fera Serena',
    style: 'Micro realismo',
    duration: '2 sessões · 10h',
    size: '29 cm',
    image: '/images/cartoon-tattoo-triptych.png',
    story: 'Uma narrativa vertical que muda de leitura quando a pessoa caminha, senta ou cruza as pernas.',
  },
  {
    key: 'panturrilha',
    label: 'Panturrilha',
    title: 'Tempo Suspenso',
    style: 'Lettering',
    duration: '1 sessão · 3h',
    size: '16 cm',
    image: '/images/studio-detail.jpg',
    story: 'Uma frase íntima redesenhada como imagem, acompanhando a tensão natural da musculatura.',
  },
];

const activeRegion = ref('antebraco');
const activeWork = computed(() => bodyWorks.find((work) => work.key === activeRegion.value) ?? bodyWorks[0]);

const projects = [
  {
    index: '01',
    title: 'Oráculo de Ícaro',
    meta: 'Blackwork · braço · 11 horas',
    image: '/images/hero-vertice.png',
    className: 'project-tall',
    text: 'Mitologia sem ilustração literal: uma peça que se transforma quando o braço gira.',
  },
  {
    index: '02',
    title: 'Entrelinhas',
    meta: 'Fine line · antebraço · 4 horas',
    image: '/images/portfolio-fine-line.jpg',
    className: 'project-wide',
    text: 'Uma memória traduzida em gesto, respiro e poucas linhas essenciais.',
  },
  {
    index: '03',
    title: 'Catedral Noturna',
    meta: 'Dark art · costas · 24 horas',
    image: '/images/portfolio-process.jpg',
    className: 'project-landscape',
    text: 'Escala, silêncio e contraste construídos em quatro encontros.',
  },
];

const specialties = [
  { number: '01', name: 'Blackwork', note: 'Massa, contraste e desenho que continua legível com o tempo.' },
  { number: '02', name: 'Fine line', note: 'Precisão e respiro para ideias que pedem delicadeza sem fragilidade.' },
  { number: '03', name: 'Dark art', note: 'Imagens densas, simbólicas e abertas a uma leitura muito pessoal.' },
  { number: '04', name: 'Micro realismo', note: 'Narrativa e textura condensadas em uma escala íntima.' },
  { number: '05', name: 'Lettering', note: 'Palavras desenhadas para o corpo, nunca apenas digitadas sobre ele.' },
  { number: '06', name: 'Geométrico', note: 'Ritmo, repetição e ruptura calibrados para cada anatomia.' },
];

const builderSteps = ['Parte do corpo', 'Estilo', 'Tamanho', 'Significado', 'Referência'];
const builderStep = ref(0);
const builderComplete = ref(false);
const project = reactive({ body: '', style: '', size: '', meaning: '', reference: '' });
const bodyOptions = ['Braço', 'Antebraço', 'Costas', 'Peito', 'Perna', 'Panturrilha', 'Outro'];
const styleOptions = ['Blackwork', 'Fine line', 'Dark art', 'Micro realismo', 'Lettering', 'Geométrico', 'Quero orientação'];
const sizeOptions = ['Até 10 cm', '10–20 cm', '20–35 cm', 'Acima de 35 cm', 'Ainda não sei'];

const canAdvance = computed(() => {
  if (builderStep.value === 0) return Boolean(project.body);
  if (builderStep.value === 1) return Boolean(project.style);
  if (builderStep.value === 2) return Boolean(project.size);
  if (builderStep.value === 3) return project.meaning.trim().length >= 8;
  return true;
});

const projectWhatsapp = computed(() => whatsappUrl(
  `Olá, Nilo. Meu projeto começou pelo site.\n\nParte do corpo: ${project.body}\nEstilo: ${project.style}\nTamanho: ${project.size}\nIdeia/significado: ${project.meaning}\nReferência visual: ${project.reference || 'vou enviar depois'}`,
));

function advanceBuilder() {
  if (!canAdvance.value) return;
  if (builderStep.value < builderSteps.length - 1) builderStep.value += 1;
  else builderComplete.value = true;
}

function handleReference(event: Event) {
  const input = event.target as HTMLInputElement;
  project.reference = input.files?.[0]?.name ?? '';
}

const process = [
  { number: '01', title: 'Ideia', text: 'Você traz o que sente, não um desenho pronto.' },
  { number: '02', title: 'Conversa', text: 'Entendemos história, corpo, rotina e expectativa.' },
  { number: '03', title: 'Criação', text: 'A composição nasce para a sua anatomia.' },
  { number: '04', title: 'Sessão', text: 'Técnica, pausa e presença, no tempo necessário.' },
  { number: '05', title: 'Cicatrização', text: 'Acompanhamento até o trabalho assentar na pele.' },
];

const testimonials = [
  {
    quote: 'Eu cheguei com uma sensação difícil de explicar. O Nilo fez as perguntas certas e transformou isso em uma imagem que parece ter estado em mim há muito tempo.',
    name: 'Elisa Moura',
    project: 'Projeto “Véu”, costelas',
  },
  {
    quote: 'O desenho respeitou meu corpo de um jeito que eu nunca tinha visto em referências online. Até parado ele tem movimento — e o processo inteiro foi muito tranquilo.',
    name: 'Tomás Vale',
    project: 'Projeto “Órbita”, braço',
  },
  {
    quote: 'Era minha primeira tatuagem grande. Entendi cada escolha antes da sessão e nunca senti que precisava decidir algo com pressa.',
    name: 'Maya Lins',
    project: 'Projeto “Raiz”, coxa',
  },
];
const activeTestimonial = ref(0);

const faqs = [
  { q: 'Preciso chegar com o desenho pronto?', a: 'Não. Referências ajudam a mostrar atmosfera, símbolos ou estilos, mas o desenho final é criado do zero para o seu corpo e sua história.' },
  { q: 'Como funciona o orçamento?', a: 'Depois do briefing, você recebe uma faixa de investimento baseada em tamanho, área, complexidade e número estimado de sessões.' },
  { q: 'Posso fazer meu primeiro projeto grande?', a: 'Sim. A escala é decidida com calma, e projetos longos podem ser divididos em etapas para respeitar seu tempo e sua experiência.' },
  { q: 'Quando vejo o desenho?', a: 'A direção é alinhada antes. O desenho final é apresentado próximo à sessão para preservar a autoria e manter o processo concentrado.' },
  { q: 'Quais são os cuidados depois?', a: 'Você recebe orientação por escrito e acompanhamento durante a cicatrização. Se algo fugir do esperado, o contato permanece aberto.' },
];

const introVisible = ref(true);
const cursorLabel = ref('');
let introTimer: number | undefined;
let revealObserver: IntersectionObserver | undefined;

function setCursor(event: PointerEvent) {
  document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
  document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
  const target = (event.target as HTMLElement).closest<HTMLElement>('[data-cursor]');
  cursorLabel.value = target?.dataset.cursor ?? '';
}

onMounted(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.body.classList.add('intro-active');
  introTimer = window.setTimeout(() => {
    introVisible.value = false;
    document.body.classList.remove('intro-active');
  }, reduceMotion ? 50 : 1750);

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver?.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  document.querySelectorAll('.reveal').forEach((element) => revealObserver?.observe(element));
  window.addEventListener('pointermove', setCursor, { passive: true });
});

onBeforeUnmount(() => {
  if (introTimer) window.clearTimeout(introTimer);
  revealObserver?.disconnect();
  window.removeEventListener('pointermove', setCursor);
  document.body.classList.remove('intro-active');
});
</script>

<template>
  <Transition name="intro-fade">
    <div v-if="introVisible" class="intro" aria-hidden="true">
      <div class="intro-mark"><span>V</span></div>
      <div class="intro-word">VÉRTICE</div>
      <div class="intro-line"></div>
      <p>tattoo atelier</p>
    </div>
  </Transition>

  <div class="custom-cursor" :class="{ 'has-label': cursorLabel }" aria-hidden="true">
    <span>{{ cursorLabel }}</span>
  </div>

  <section id="inicio" class="hero hero-v2">
    <div class="hero-v2-media" role="img" aria-label="Artista fictício desenvolvendo uma tatuagem autoral no estúdio"></div>
    <div class="hero-v2-shade" aria-hidden="true"></div>
    <div class="hero-v2-index" aria-hidden="true">
      <span>VRT / 01</span>
      <span>ATELIÊ DE TATUAGEM AUTORAL</span>
    </div>
    <div class="hero-v2-copy">
      <p class="hero-v2-kicker">Nilo Voss · São Paulo · desde 2016</p>
      <h1>A pele guarda<br /><em>o que a boca cala.</em></h1>
      <p class="hero-v2-lead">Não escolha uma tattoo olhando apenas uma galeria. Descubra como uma ideia ganha forma, movimento e presença no seu corpo.</p>
      <div class="hero-v2-actions">
        <a class="button hero-v2-primary" href="#corpo" data-cursor="EXPLORAR">Explorar no corpo <ArrowDown :size="17" aria-hidden="true" /></a>
        <a class="hero-v2-link" :href="whatsappUrl('Olá, Nilo. Quero começar um projeto autoral de tatuagem.')" target="_blank" rel="noopener" data-cursor="AGENDAR">Iniciar um projeto <ArrowUpRight :size="17" aria-hidden="true" /></a>
      </div>
    </div>
    <div class="hero-v2-scroll" aria-hidden="true"><span></span> role para descobrir</div>
    <p class="hero-v2-credit">Nilo Voss é um artista fictício</p>
  </section>

  <section class="manifesto section-dark">
    <div class="shell manifesto-grid reveal">
      <p class="section-kicker">Manifesto / 02</p>
      <div>
        <p class="manifesto-lead">Uma tatuagem não ocupa apenas um espaço.</p>
        <h2>Ela respira,<br />dobra, envelhece<br /><em>e conta.</em></h2>
      </div>
      <div class="manifesto-side">
        <p>Por isso, cada projeto começa antes do desenho: na leitura da anatomia, na intenção e na forma como você habita o próprio corpo.</p>
        <span>Autoria · anatomia · permanência</span>
      </div>
    </div>
  </section>

  <section id="corpo" class="body-section section-light">
    <div class="shell section-title reveal">
      <p class="section-kicker">No corpo / 03</p>
      <h2>Veja onde a ideia<br /><em>ganha movimento.</em></h2>
      <p>Passe pelo corpo ou toque em uma região. Cada lugar muda escala, fluxo e leitura do desenho.</p>
    </div>

    <div class="shell body-explorer reveal">
      <div class="body-map" data-cursor="EXPLORAR">
        <div class="body-figure" aria-hidden="true">
          <span class="figure-head"></span><span class="figure-neck"></span><span class="figure-torso"></span>
          <span class="figure-arm figure-arm-left"></span><span class="figure-arm figure-arm-right"></span>
          <span class="figure-leg figure-leg-left"></span><span class="figure-leg figure-leg-right"></span>
        </div>
        <button
          v-for="work in bodyWorks"
          :key="work.key"
          type="button"
          class="body-hotspot"
          :class="[`spot-${work.key}`, { active: activeRegion === work.key }]"
          :aria-pressed="activeRegion === work.key"
          @mouseenter="activeRegion = work.key"
          @focus="activeRegion = work.key"
          @click="activeRegion = work.key"
        >
          <span></span>{{ work.label }}
        </button>
        <p class="body-orientation">Frente · representação conceitual</p>
      </div>

      <article class="body-case">
        <div class="body-case-image" :style="{ backgroundImage: `url(${activeWork.image})` }" role="img" :aria-label="`Projeto ${activeWork.title}`"></div>
        <div class="body-case-copy" :key="activeWork.key">
          <div class="body-case-top"><span>{{ activeWork.style }}</span><span>{{ activeWork.label }}</span></div>
          <h3>{{ activeWork.title }}</h3>
          <p>{{ activeWork.story }}</p>
          <dl><div><dt>Sessão</dt><dd>{{ activeWork.duration }}</dd></div><div><dt>Escala</dt><dd>{{ activeWork.size }}</dd></div></dl>
          <a href="#projetos">Ver projeto <ArrowRight :size="17" aria-hidden="true" /></a>
        </div>
      </article>
    </div>
  </section>

  <section id="projetos" class="portfolio-editorial section-dark">
    <div class="shell section-title title-light reveal">
      <p class="section-kicker">Projetos selecionados / 04</p>
      <h2>Não é galeria.<br /><em>É trajetória.</em></h2>
      <p>Do primeiro rascunho à peça cicatrizada: contexto, escolha e intenção em cada trabalho.</p>
    </div>

    <div class="shell projects-editorial">
      <article v-for="projectItem in projects" :key="projectItem.index" class="project-card reveal" :class="projectItem.className" data-cursor="VER">
        <div class="project-image-wrap"><img :src="projectItem.image" :alt="`Projeto fictício ${projectItem.title}`" loading="lazy" /></div>
        <div class="project-caption">
          <span>{{ projectItem.index }}</span>
          <div><p>{{ projectItem.meta }}</p><h3>{{ projectItem.title }}</h3><small>{{ projectItem.text }}</small></div>
          <ArrowUpRight :size="24" aria-hidden="true" />
        </div>
      </article>
    </div>
  </section>

  <section id="estilos" class="styles-section section-light">
    <div class="shell styles-layout">
      <div class="styles-intro reveal">
        <p class="section-kicker">Vocabulário / 05</p>
        <h2>Estilo é<br /><em>ferramenta.</em></h2>
        <p>A escolha não começa por uma tendência, mas pela linguagem que melhor carrega a sua ideia.</p>
      </div>
      <div class="style-list">
        <article v-for="(specialty, index) in specialties" :key="specialty.name" class="style-row reveal" :style="{ '--delay': `${index * 55}ms` }">
          <span>{{ specialty.number }}</span><h3>{{ specialty.name }}</h3><p>{{ specialty.note }}</p><ArrowUpRight :size="22" aria-hidden="true" />
        </article>
      </div>
    </div>
  </section>

  <section id="monte" class="builder-section">
    <div class="shell builder-layout reveal">
      <div class="builder-intro">
        <p class="section-kicker">Monte seu projeto / 06</p>
        <h2>Sua ideia<br /><em>já pode começar.</em></h2>
        <p>Responda cinco passos rápidos. No final, sua primeira mensagem chega organizada para a conversa criativa.</p>
        <div class="builder-progress" aria-hidden="true"><span :style="{ width: `${builderComplete ? 100 : ((builderStep + 1) / builderSteps.length) * 100}%` }"></span></div>
        <small>{{ builderComplete ? 'Projeto iniciado' : `${String(builderStep + 1).padStart(2, '0')} / 05 — ${builderSteps[builderStep]}` }}</small>
      </div>

      <div v-if="!builderComplete" class="builder-card">
        <div v-if="builderStep === 0" class="builder-panel">
          <p>Onde você imagina essa tattoo?</p>
          <div class="choice-grid"><button v-for="option in bodyOptions" :key="option" type="button" :class="{ selected: project.body === option }" @click="project.body = option"><Check :size="15" />{{ option }}</button></div>
        </div>
        <div v-else-if="builderStep === 1" class="builder-panel">
          <p>Qual linguagem mais se aproxima da ideia?</p>
          <div class="choice-grid"><button v-for="option in styleOptions" :key="option" type="button" :class="{ selected: project.style === option }" @click="project.style = option"><Check :size="15" />{{ option }}</button></div>
        </div>
        <div v-else-if="builderStep === 2" class="builder-panel">
          <p>Qual é o tamanho aproximado?</p>
          <div class="choice-grid"><button v-for="option in sizeOptions" :key="option" type="button" :class="{ selected: project.size === option }" @click="project.size = option"><Check :size="15" />{{ option }}</button></div>
        </div>
        <div v-else-if="builderStep === 3" class="builder-panel">
          <label for="meaning">O que essa ideia precisa carregar?</label>
          <textarea id="meaning" v-model="project.meaning" rows="7" maxlength="600" placeholder="Conte a memória, símbolo, frase ou sensação. Não precisa escrever bonito — precisa fazer sentido para você."></textarea>
          <small>{{ project.meaning.length }} / 600</small>
        </div>
        <div v-else class="builder-panel">
          <p>Tem alguma referência visual?</p>
          <label class="upload-box" for="reference"><Paperclip :size="24" /><strong>{{ project.reference || 'Anexar imagem de referência' }}</strong><span>JPG, PNG ou WEBP · opcional</span></label>
          <input id="reference" class="visually-hidden" type="file" accept="image/jpeg,image/png,image/webp" @change="handleReference" />
          <p class="upload-note">O arquivo não é enviado pelo site. O nome entra no resumo para você anexá-lo no WhatsApp.</p>
        </div>

        <div class="builder-nav">
          <button v-if="builderStep > 0" type="button" class="builder-back" @click="builderStep -= 1"><ArrowLeft :size="17" /> Voltar</button>
          <span v-else></span>
          <button type="button" class="builder-next" :disabled="!canAdvance" @click="advanceBuilder">{{ builderStep === 4 ? 'Iniciar projeto' : 'Continuar' }} <ArrowRight :size="17" /></button>
        </div>
      </div>

      <div v-else class="builder-card builder-result">
        <span class="result-check"><Check :size="30" /></span>
        <p>Seu projeto já começou.</p>
        <h3>{{ project.style }} para {{ project.body.toLowerCase() }}.</h3>
        <ul><li>{{ project.size }}</li><li>{{ project.meaning }}</li><li v-if="project.reference">Referência: {{ project.reference }}</li></ul>
        <a :href="projectWhatsapp" target="_blank" rel="noopener" data-cursor="AGENDAR">Quero transformar essa ideia em tattoo <ArrowUpRight :size="18" /></a>
        <button type="button" @click="builderComplete = false; builderStep = 0">Editar respostas</button>
      </div>
    </div>
  </section>

  <section id="sobre" class="artist-section section-dark">
    <div class="shell artist-layout reveal">
      <div class="artist-image"><img src="/images/hero-vertice.png" alt="Retrato conceitual do artista fictício Nilo Voss" loading="lazy" /><span>NV · 2016—26</span></div>
      <div class="artist-copy">
        <p class="section-kicker">O artista / 07</p>
        <h2>Nilo<br /><em>Voss.</em></h2>
        <p class="artist-lead">“Eu não desenho para preencher pele. Desenho para revelar uma parte da pessoa que ainda não tinha forma.”</p>
        <p>Artista fictício com dez anos de prática, Nilo cruza blackwork, fine line e dark art em composições guiadas pela anatomia. Seu processo parte da escuta e elimina tudo que não sustenta a ideia.</p>
        <div class="artist-facts"><div><strong>10</strong><span>anos de<br />experiência</span></div><div><strong>430+</strong><span>projetos<br />autorais</span></div><div><strong>03</strong><span>linguagens<br />centrais</span></div></div>
        <p class="fiction-note">Nilo Voss, números e trajetória são integralmente fictícios, criados para este projeto demonstrativo.</p>
      </div>
    </div>
  </section>

  <section id="processo" class="process-section section-light">
    <div class="shell section-title reveal">
      <p class="section-kicker">O caminho / 08</p>
      <h2>Da sensação<br /><em>à cicatriz.</em></h2>
      <p>Um processo transparente para você saber onde está, o que vem depois e por que cada etapa existe.</p>
    </div>
    <ol class="shell process-track">
      <li v-for="(step, index) in process" :key="step.number" class="reveal" :style="{ '--delay': `${index * 70}ms` }"><span>{{ step.number }}</span><div class="process-node"></div><h3>{{ step.title }}</h3><p>{{ step.text }}</p></li>
    </ol>
    <div class="process-assurance shell reveal"><ShieldCheck :size="22" /><span>Biossegurança, materiais descartáveis e acompanhamento de cicatrização fazem parte do processo.</span></div>
  </section>

  <section class="testimonials-section">
    <div class="shell testimonial-layout reveal">
      <div class="testimonial-index"><p class="section-kicker">Depois da sessão / 09</p><span>0{{ activeTestimonial + 1 }} — 03</span></div>
      <div class="testimonial-quote" :key="activeTestimonial"><Quote :size="34" :stroke-width="1" aria-hidden="true" /><blockquote>{{ testimonials[activeTestimonial].quote }}</blockquote><p>{{ testimonials[activeTestimonial].name }}<small>{{ testimonials[activeTestimonial].project }}</small></p></div>
      <div class="testimonial-nav"><button type="button" aria-label="Depoimento anterior" @click="activeTestimonial = (activeTestimonial + testimonials.length - 1) % testimonials.length"><ArrowLeft /></button><button type="button" aria-label="Próximo depoimento" @click="activeTestimonial = (activeTestimonial + 1) % testimonials.length"><ArrowRight /></button></div>
    </div>
  </section>

  <section class="faq-section section-light">
    <div class="shell faq-layout">
      <div class="faq-intro reveal"><p class="section-kicker">Antes de marcar / 10</p><h2>Perguntas<br /><em>honestas.</em></h2><p>Sem mistério, sem pressão e sem resposta decorada.</p></div>
      <div class="faq-list reveal">
        <details v-for="(faq, index) in faqs" :key="faq.q" :open="index === 0"><summary><span>0{{ index + 1 }}</span><strong>{{ faq.q }}</strong><b aria-hidden="true">+</b></summary><p>{{ faq.a }}</p></details>
      </div>
    </div>
  </section>

  <section id="contato" class="final-cta">
    <div class="final-cta-media" aria-hidden="true"></div>
    <div class="shell final-cta-inner reveal">
      <p class="section-kicker">O próximo traço / 11</p>
      <h2>Sua próxima tattoo<br /><em>ainda não existe.</em></h2>
      <p>Vamos criar algo que só faça sentido em você.</p>
      <a href="#monte" data-cursor="AGENDAR">Começar meu projeto <ArrowUpRight :size="20" /></a>
    </div>
  </section>
</template>
