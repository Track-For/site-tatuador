<script setup lang="ts">
import { ArrowUpRight, Check } from '@lucide/vue';
import { reactive, ref } from 'vue';
import { siteConfig, whatsappUrl } from '../data/site';

const form = reactive({ name: '', phone: '', search: '', preferences: '', consent: false });
const error = ref('');
const sent = ref(false);

function submitLead() {
  error.value = '';
  sent.value = false;

  if (!form.name.trim() || !form.phone.trim() || !form.search || !form.preferences.trim()) {
    error.value = 'Preencha os campos obrigatórios para continuar.';
    return;
  }
  if (!form.consent) {
    error.value = 'Confirme que podemos usar estes dados para responder seu pedido.';
    return;
  }

  const message = [
    `Olá, ${siteConfig.shortName}! Meu nome é ${form.name}.`,
    `Meu WhatsApp: ${form.phone}.`,
    `O que procuro: ${form.search}.`,
    `Minhas preferências: ${form.preferences}`,
  ].join('\n');

  sent.value = true;
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
}
</script>

<template>
  <form class="contact-form" novalidate @submit.prevent="submitLead">
    <div class="form-row">
      <label>
        <span>Seu nome *</span>
        <input v-model="form.name" name="name" type="text" autocomplete="name" placeholder="Como podemos te chamar?" />
      </label>
      <label>
        <span>WhatsApp *</span>
        <input v-model="form.phone" name="phone" type="tel" autocomplete="tel" inputmode="tel" placeholder="(11) 99999-9999" />
      </label>
    </div>
    <label>
      <span>O que você procura? *</span>
      <select v-model="form.search" name="search">
        <option value="" disabled>Selecione uma opção</option>
        <option>Um perfume para mim</option>
        <option>Um presente especial</option>
        <option>Perfumes intensos e marcantes</option>
        <option>Perfumes leves e delicados</option>
        <option>Acessórios</option>
        <option>Quero descobrir</option>
      </select>
    </label>
    <label>
      <span>Conte o que você gosta *</span>
      <textarea v-model="form.preferences" name="preferences" rows="4" placeholder="Perfumes de referência, sensações, notas, ocasião ou para quem é o presente..."></textarea>
    </label>
    <label class="consent">
      <input v-model="form.consent" type="checkbox" />
      <span>Concordo em enviar estes dados pelo WhatsApp para receber o atendimento da OUSE.</span>
    </label>

    <p v-if="error" class="form-message is-error" role="alert">{{ error }}</p>
    <p v-if="sent" class="form-message is-success" role="status"><Check :size="16" /> Tudo certo! Abrimos sua mensagem no WhatsApp.</p>

    <button class="button button-primary form-submit" type="submit">
      Continuar pelo WhatsApp <ArrowUpRight :size="18" aria-hidden="true" />
    </button>
  </form>
</template>
