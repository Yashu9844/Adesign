// Single source of truth for all contact details across the site.
export const CONTACT = {
  brand: 'Adesign',
  email: 'yashavanthrsiddesh@gmail.com',
  phoneDisplay: '+91 98441 96763',
  phoneTel: '+919844196763',
  whatsappNumber: '919844196763', // digits only, with country code
  whatsappMessage: "Hi Adesign! I'd like to discuss a project.",
  location: 'Remote / Bengaluru, India',
  siteUrl: 'https://adesign.tech',
  social: {
    github: 'https://github.com/zubair-mallick',
    linkedin: 'https://www.linkedin.com/in/yashavanth-r-siddesh/',
  },
} as const;

export const mailtoHref = `mailto:${CONTACT.email}`;
export const telHref = `tel:${CONTACT.phoneTel}`;
export const whatsappHref = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`;
