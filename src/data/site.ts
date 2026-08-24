export const siteConfig = {
  name: 'Indy Tatoo',
  shortName: 'Indy',
  domain: 'https://indy-tatoo.luizfhellippe.chatgpt.site',
  email: 'contato@indytatoo.com.br',
  phoneLabel: '(11) 99999-9999',
  whatsappDigits: '5511999999999',
  instagramHandle: '@indy.tatoo',
  instagramUrl: 'https://instagram.com/indy.tatoo',
  location: 'São Paulo, SP',
  address: 'São Paulo — atendimento com hora marcada',
};

export const whatsappUrl = (message = 'Oi, Indy! Quero conversar sobre uma tattoo.') =>
  `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
