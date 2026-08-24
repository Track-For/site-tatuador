export const siteConfig = {
  name: 'Aurora Flash Club',
  shortName: 'Aurora',
  domain: 'https://aurora-flash-club.luizfhellippe.chatgpt.site',
  email: 'contato@auroratattoo.com.br',
  phoneLabel: '(11) 99999-9999',
  whatsappDigits: '5511999999999',
  instagramHandle: '@aurora.tattoo',
  instagramUrl: 'https://instagram.com/aurora.tattoo',
  location: 'São Paulo, SP',
  address: 'São Paulo — atendimento com hora marcada',
};

export const whatsappUrl = (message = 'Oi, Aurora! Quero conversar sobre uma tattoo.') =>
  `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
