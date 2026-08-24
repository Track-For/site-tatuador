<script setup lang="ts">
import { ArrowUpRight, Check } from '@lucide/vue';
import { reactive, ref } from 'vue';
import { siteConfig, whatsappUrl } from '../data/site';

const form = reactive({ name: '', placement: '', size: '', idea: '', consent: false });
const error = ref('');
const sent = ref(false);

function submitLead() {
  error.value = '';
  sent.value = false;

  if (!form.name.trim() || !form.placement || !form.size || !form.idea.trim()) {
    error.value = 'Preencha os campos obrigatórios para continuar.';
    return;
  }
  if (!form.consent) {
    error.value = 'Confirme o envio dos dados pelo WhatsApp.';
    return;
  }

  const message = [
    `Oi, ${siteConfig.shortName}! Meu nome é ${form.name}.`,
    `Local do corpo: ${form.placement}.`,
    `Tamanho aproximado: ${form.size}.`,
    `Minha ideia: ${form.idea}`,
  ].join('\n');

  sent.value = true;
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
}
</script>

<template>
  <form class="contact-form" novalidate @submit.prevent="submitLead">
    <label>
      <span>Como posso te chamar? *</span>
      <input v-model="form.name" name="name" type="text" autocomplete="name" placeholder="Seu nome" />
    </label>
    <div class="form-row">
      <label>
        <span>Onde quer tatuar? *</span>
        <select v-model="form.placement" name="placement">
          <option value="" disabled>Escolha o local</option>
          <option>Braço</option>
          <option>Perna</option>
          <option>Costas / tronco</option>
          <option>Outro local</option>
        </select>
      </label>
      <label>
        <span>Tamanho aproximado *</span>
        <select v-model="form.size" name="size">
          <option value="" disabled>Escolha o tamanho</option>
          <option>Até 5 cm</option>
          <option>De 6 a 10 cm</option>
          <option>Mais de 10 cm</option>
          <option>Ainda não sei</option>
        </select>
      </label>
    </div>
    <label>
      <span>Me conta sua ideia *</span>
      <textarea v-model="form.idea" name="idea" rows="4" placeholder="Personagem, memória, referência ou sentimento que você quer levar para a pele..."></textarea>
    </label>
    <label class="consent">
      <input v-model="form.consent" type="checkbox" />
      <span>Concordo em abrir esta mensagem no WhatsApp para continuar meu orçamento.</span>
    </label>
    <p v-if="error" class="form-message is-error" role="alert">{{ error }}</p>
    <p v-if="sent" class="form-message is-success" role="status"><Check :size="16" /> Tudo pronto! Sua mensagem foi aberta no WhatsApp.</p>
    <button class="button button-primary form-submit" type="submit">
      Pedir meu orçamento <ArrowUpRight :size="18" aria-hidden="true" />
    </button>
  </form>
</template>
