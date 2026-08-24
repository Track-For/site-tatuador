// Centralize aqui os dados reais da perfumaria antes da publicação definitiva.
export const siteConfig = {
  name: 'OUSE Perfumaria & Acessórios',
  shortName: 'OUSE',
  // Ao conectar um domínio próprio, atualize esta URL e os arquivos de SEO em public/.
  domain: 'https://ouse-perfumaria.luizfhellippe.chatgpt.site',
  email: 'contato@ouseperfumaria.com.br',
  phoneLabel: '(11) 99999-9999',
  // Substitua pelo número real com DDI + DDD, apenas dígitos.
  whatsappDigits: '5511999999999',
  instagramHandle: '@ouse.perfumaria',
  instagramUrl: 'https://instagram.com/ouse.perfumaria',
  location: 'Atendimento online · Brasil',
  address: 'Envios para todo o Brasil',
};

export const whatsappUrl = (message = 'Olá, OUSE! Quero encontrar um perfume para chamar de meu.') =>
  `https://wa.me/${siteConfig.whatsappDigits}?text=${encodeURIComponent(message)}`;
