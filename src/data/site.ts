export const siteConfig = {
  name: 'Versa Wear',
  shortName: 'Versa Wear',
  tagline: 'Moda masculina',
  domain: 'https://versa-wear-goiania.luizfhellippe.chatgpt.site',
  email: 'contato@versawear.com.br',
  whatsappDigits: '',
  instagramHandle: '@versawear',
  instagramUrl: 'https://instagram.com/versawear',
  location: 'Goiânia, Goiás',
  address: 'Loja online em Goiânia · Entregas para todo o Brasil',
};

export const whatsappUrl = (message = 'Olá, Versa Wear! Quero conhecer a coleção.') => {
  const recipient = siteConfig.whatsappDigits ? `/${siteConfig.whatsappDigits}` : '';
  return `https://wa.me${recipient}?text=${encodeURIComponent(message)}`;
};
