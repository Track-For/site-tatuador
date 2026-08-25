export const siteConfig = {
  name: 'Vértice Tattoo Atelier',
  shortName: 'Vértice',
  domain: 'https://indy-tatoo.luizfhellippe.chatgpt.site',
  email: 'atelier@vertice.example',
  phoneLabel: '(11) 00000-0000',
  whatsappDigits: '5511000000000',
  instagramHandle: '@vertice.tattoo.atelier',
  instagramUrl: 'https://example.com/vertice-tattoo-atelier',
  location: 'São Paulo, SP',
  address: 'Vila Madalena, São Paulo — endereço conceitual fictício',
};

export const whatsappUrl = (message = 'Olá, Vértice! Quero conversar sobre um projeto de tattoo.') =>
  `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
