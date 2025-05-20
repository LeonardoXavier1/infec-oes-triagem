import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Há quanto tempo o sinal está presente?",
    options: [
      { id: "1a", text: "Menos de 1 mês", isRisk: false },
      { id: "1b", text: "Mais de 1 mês", isRisk: true },
    ],
  },
  {
    id: 2,
    text: "O paciente tem idade menor que 12 anos?",
    options: [
      { id: "2a", text: "Não", isRisk: false },
      { id: "2b", text: "Sim", isRisk: true },
    ],
  },
  {
    id: 3,
    text: "A lesão é em face, pés, mãos ou genitália?",
    options: [
      { id: "3a", text: "Não", isRisk: false },
      { id: "3b", text: "Sim", isRisk: true },
    ],
  },
  {
    id: 4,
    text: "Há suspeita de psoríase ou dermatite?",
    options: [
      { id: "4a", text: "Não", isRisk: false },
      { id: "4b", text: "Sim", isRisk: true },
    ],
  },
  {
    id: 5,
    text: "A lesão apareceu após uso de corticosteroides?",
    options: [
      { id: "5a", text: "Não", isRisk: false },
      { id: "5b", text: "Sim", isRisk: true },
    ],
  },
  {
    id: 6,
    text: "O paciente está grávida ou amamentando?",
    options: [
      { id: "6a", text: "Não", isRisk: false },
      { id: "6b", text: "Sim", isRisk: true },
    ],
  },
  {
    id: 7,
    text: "Há presença de inflamação intensa?",
    options: [
      { id: "7a", text: "Não", isRisk: false },
      { id: "7b", text: "Sim", isRisk: true },
    ],
  },
  {
    id: 8,
    text: "Há histórico de diabetes ou imunossupressão?",
    options: [
      { id: "8a", text: "Não", isRisk: false },
      { id: "8b", text: "Sim", isRisk: true },
    ],
  },
  {
    id: 9,
    text: "O paciente já tentou tratamento sem sucesso?",
    options: [
      { id: "9a", text: "Não", isRisk: false },
      { id: "9b", text: "Sim", isRisk: true },
    ],
  },
];