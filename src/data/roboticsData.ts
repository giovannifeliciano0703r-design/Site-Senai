import { Modality, ValueItem, ComparisonItem } from '../types';

export const MODALITIES: Modality[] = [
  {
    id: 'fll',
    name: 'FIRST LEGO League',
    acronym: 'FLL',
    ageRange: 'aproximadamente 5 a 16 anos, dependendo da categoria e região',
    shortDescription: 'Uma introdução ao mundo da ciência, tecnologia e robótica utilizando LEGO, criatividade e trabalho em equipe.',
    badge: 'Introdução & Criatividade',
    accentColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
    tagline: 'Criatividade e fundamentos da engenharia com blocos inteligentes',
    features: [
      'Robótica com LEGO',
      'Trabalho em equipe',
      'Resolução de problemas',
      'Criatividade',
      'Introdução à programação e engenharia'
    ]
  },
  {
    id: 'ftc',
    name: 'FIRST Tech Challenge',
    acronym: 'FTC',
    ageRange: 'aproximadamente 12 a 18 anos',
    shortDescription: 'Equipes projetam, constroem e programam robôs para participar de desafios que mudam a cada temporada.',
    badge: 'Categoria Intermediária',
    accentColor: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    tagline: 'Evolução técnica, peças em metal e programação em Android/Java',
    features: [
      'Construção de robôs',
      'Programação',
      'Estratégia',
      'Engenharia',
      'Competições em equipe'
    ]
  },
  {
    id: 'frc',
    name: 'FIRST Robotics Competition',
    acronym: 'FRC',
    ageRange: 'aproximadamente 14 a 18 anos',
    shortDescription: 'Uma das competições de robótica estudantil mais avançadas da FIRST, na qual equipes desenvolvem robôs de grande porte para competir em desafios anuais.',
    badge: 'Principal Referência & Alta Engenharia',
    accentColor: 'from-blue-600/30 via-indigo-600/20 to-red-600/10',
    tagline: 'Robôs industriais de até 57 kg em arenas competitivas de alta performance',
    features: [
      'Robôs de grande porte',
      'Programação avançada',
      'Engenharia mecânica',
      'Eletrônica',
      'Estratégia',
      'Trabalho em grandes equipes'
    ],
    allianceNote: 'Nas partidas, equipes competem formando alianças de três times.',
    highlight: true
  }
];

export const COMPARISONS: ComparisonItem[] = [
  {
    acronym: 'FLL',
    level: 'Introdução à robótica',
    emoji: '🧱',
    keywords: 'LEGO • Criatividade • Aprendizado',
    accent: 'border-amber-500/30 bg-amber-500/5 text-amber-300'
  },
  {
    acronym: 'FTC',
    level: 'Próximo nível',
    emoji: '⚙️',
    keywords: 'Construção • Programação • Estratégia',
    accent: 'border-blue-500/30 bg-blue-500/5 text-blue-300'
  },
  {
    acronym: 'FRC',
    level: 'Engenharia em grande escala',
    emoji: '🤖',
    keywords: 'Robôs grandes • Tecnologia • Competição',
    accent: 'border-indigo-500/50 bg-indigo-500/10 text-indigo-200 ring-1 ring-blue-500/30'
  }
];

export const VALUES: ValueItem[] = [
  {
    id: 'engineering',
    title: 'Engenharia',
    description: 'Transformando ideias em projetos reais.',
    iconName: 'Wrench'
  },
  {
    id: 'programming',
    title: 'Programação',
    description: 'Utilizando código para controlar e automatizar robôs.',
    iconName: 'Code'
  },
  {
    id: 'teamwork',
    title: 'Trabalho em equipe',
    description: 'Pessoas com diferentes habilidades trabalhando pelo mesmo objetivo.',
    iconName: 'Users'
  },
  {
    id: 'innovation',
    title: 'Inovação',
    description: 'Encontrando novas soluções para problemas e desafios.',
    iconName: 'Lightbulb'
  }
];
