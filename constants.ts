import { NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Expertise', href: '#expertise' },
  { label: 'Metodologia', href: '#methodology' },
  { label: 'AI Advisor', href: '#ai-advisor' },
  { label: 'Contato', href: '#contact' },
];

export const COMPANY_NAME = "DOM SEVEN";
export const CONTACT_EMAIL = "contato@domseven.com.br";

export const SYSTEM_INSTRUCTION = `
Você é um consultor de negócios sênior e especialista em IA da empresa "Dom Seven".
A Dom Seven é uma consultoria B2B de elite que acelera processos e faturamento usando IA.
Seu tom deve ser profissional, estratégico, inovador e direto.
Responda a dúvidas de empresários sobre como a IA pode ajudar nos negócios deles.
Foque em ROI, eficiência, automação e redução de custos.
Responda em português do Brasil. Use no máximo 3 parágrafos curtos.
`;