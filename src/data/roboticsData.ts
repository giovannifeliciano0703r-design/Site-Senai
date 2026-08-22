import { Modality, ValueItem } from '../types';

export const MODALITIES: Modality[] = [
  {
    id: 'fll',
    name: 'FIRST LEGO League',
    acronym: 'FLL',
    ageRange: '5 a 16 anos • graus K–8 • varia por região',
    shortDescription: 'Experiências de STEM adequadas à idade, com robótica lúdica, aprendizado em equipe e temas anuais.',
    badge: '5–16 anos • K–8',
    accentColor: 'from-blue-600/20 via-cyan-500/10 to-transparent',
    tagline: 'Aprendizado prático com tecnologia LEGO e atividades guiadas por um tema anual.',
    features: [
      'Robótica lúdica e aprendizado em equipe',
      'Construção e programação com tecnologia LEGO',
      'Criatividade, colaboração e resolução de problemas',
      'No Challenge, o robô realiza missões de forma autônoma',
      'Pode funcionar em equipes pequenas ou em ambiente de sala de aula',
    ],
  },
  {
    id: 'ftc',
    name: 'FIRST Tech Challenge',
    acronym: 'FTC',
    ageRange: '12 a 18 anos • graus 7–12',
    shortDescription: 'Participantes projetam e constroem um robô em escala de sala de aula para competir em um desafio anual.',
    badge: '12–18 anos • 7–12',
    accentColor: 'from-blue-600/20 via-cyan-500/10 to-transparent',
    tagline: 'Robôs dinâmicos, colaboração e um novo jogo divulgado a cada setembro.',
    features: [
      'Projeto e construção de um robô em escala de sala de aula',
      'Competição em um desafio anual',
      'Programação por Blocks, OnBot Java ou Android Studio',
      'Desenvolvimento de habilidades técnicas e solução colaborativa de problemas',
      'Inovação em engenharia e ações de impacto na comunidade',
    ],
  },
  {
    id: 'frc',
    name: 'FIRST Robotics Competition',
    acronym: 'FRC',
    ageRange: '14 a 18 anos • graus 9–12',
    shortDescription: 'Equipes partem de um Kit of Parts para projetar, programar e construir robôs de porte industrial.',
    badge: '14–18 anos • 9–12',
    accentColor: 'from-blue-600/20 via-cyan-500/10 to-transparent',
    tagline: 'Robôs de porte industrial em um jogo anual disputado em campo temático.',
    features: [
      'Kit of Parts como ponto de partida',
      'Projeto, programação e construção de robôs de porte industrial',
      'Java, C++ e Python têm suporte no WPILib',
      'Criação de identidade da equipe e ações de valorização de STEM na comunidade',
      'Aprendizado orientado por mentores adultos',
    ],
    allianceNote: 'As partidas são disputadas em alianças formadas por três equipes.',
    highlight: true,
  },
];

export const VALUES: ValueItem[] = [
  { id: 'discovery', title: 'Descoberta', description: 'Explorar novas habilidades e ideias.', iconName: 'Search' },
  { id: 'innovation', title: 'Inovação', description: 'Usar criatividade e persistência para resolver problemas.', iconName: 'Lightbulb' },
  { id: 'teamwork', title: 'Trabalho em equipe', description: 'Reconhecer que somos mais fortes quando trabalhamos juntos.', iconName: 'Users' },
  { id: 'impact', title: 'Impacto', description: 'Aplicar o que aprendemos para melhorar o mundo.', iconName: 'Globe2' },
];
