import React from 'react';
import {
  Blocks,
  Bot,
  CalendarDays,
  Check,
  Code2,
  GraduationCap,
  Trophy,
  UsersRound,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import type { ModalityId } from '../types';

type ModalityDetails = {
  acronym: string;
  name: string;
  icon: LucideIcon;
  details: Record<string, string>;
};

const modalities: Record<ModalityId, ModalityDetails> = {
  fll: {
    acronym: 'FLL',
    name: 'FIRST LEGO League',
    icon: Blocks,
    details: {
      Idade: '5 a 16 anos; varia por região',
      Escolaridade: 'Graus K–8',
      Construção: 'Tecnologia LEGO em atividades orientadas por um tema anual',
      Programação: 'Construção e código; no Challenge, o robô executa missões de forma autônoma',
      Experiência: 'Robótica lúdica e aprendizado em equipe',
      Competição: 'Pode ocorrer em equipes ou sala de aula; Challenge inclui Robot Game',
    },
  },
  ftc: {
    acronym: 'FTC',
    name: 'FIRST Tech Challenge',
    icon: Wrench,
    details: {
      Idade: '12 a 18 anos',
      Escolaridade: 'Graus 7–12',
      Construção: 'Robô em escala de sala de aula',
      Programação: 'Blocks, OnBot Java ou Android Studio',
      Experiência: 'Habilidades técnicas e solução colaborativa de problemas',
      Competição: 'Desafio anual com novo jogo divulgado em setembro',
    },
  },
  frc: {
    acronym: 'FRC',
    name: 'FIRST Robotics Competition',
    icon: Bot,
    details: {
      Idade: '14 a 18 anos',
      Escolaridade: 'Graus 9–12',
      Construção: 'Kit of Parts e robôs de porte industrial',
      Programação: 'Java, C++ e Python têm suporte no WPILib',
      Experiência: 'Mentoria adulta, identidade de equipe e valorização de STEM na comunidade',
      Competição: 'Jogo anual em campo temático e alianças de três equipes',
    },
  },
};

const criteria: { label: string; icon: LucideIcon }[] = [
  { label: 'Idade', icon: CalendarDays },
  { label: 'Escolaridade', icon: GraduationCap },
  { label: 'Construção', icon: Wrench },
  { label: 'Programação', icon: Code2 },
  { label: 'Experiência', icon: UsersRound },
  { label: 'Competição', icon: Trophy },
];

interface ComparisonProps {
  selected: ModalityId;
  onSelect: (id: ModalityId) => void;
}

export const Comparison: React.FC<ComparisonProps> = ({ selected, onSelect }) => {
  const reduceMotion = useReducedMotion();
  const selectedModality = modalities[selected];
  const SelectedIcon = selectedModality.icon;

  return (
    <section id="comparacao" aria-labelledby="comparison-title" className="relative overflow-hidden border-y border-slate-800/80 bg-slate-900/40 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-28 bottom-12 h-64 w-64 rounded-full border border-blue-500/10" />
      <div className="pointer-events-none absolute -right-20 top-20 h-48 w-48 rounded-full border border-cyan-400/[0.08]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-300">Explore o guia</p>
          <h2 id="comparison-title" tabIndex={-1} className="mt-3 text-3xl font-extrabold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:text-4xl">
            Conheça as modalidades
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">Selecione uma opção para explorar seus principais aspectos.</p>
        </div>

        <fieldset className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-3">
          <legend className="sr-only">Escolha uma modalidade para explorar</legend>
          {(Object.keys(modalities) as ModalityId[]).map((id, index) => {
            const item = modalities[id];
            const Icon = item.icon;
            const active = selected === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => onSelect(id)}
                className={`group relative min-h-32 overflow-hidden rounded-2xl border p-5 text-left transition-colors ${active ? 'border-blue-400/60 bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-slate-950 text-blue-100 shadow-xl shadow-blue-950/30' : 'border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:bg-slate-900'}`}
              >
                <span className={`absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl transition-colors ${active ? 'bg-blue-500/20' : 'bg-transparent group-hover:bg-blue-500/[0.06]'}`} />
                <span className="relative flex items-start justify-between gap-4">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-xl border ${active ? 'border-blue-400/40 bg-blue-500/15 text-blue-200' : 'border-slate-800 bg-slate-900 text-slate-500'}`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full border ${active ? 'border-blue-300 text-blue-200' : 'border-slate-700 text-transparent'}`}>
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
                <span className="relative mt-5 block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-500">Programa 0{index + 1}</span>
                  <span className="mt-1 block font-mono-tech text-xl font-bold text-white">{item.acronym}</span>
                  <span className={`mt-1 block text-xs font-semibold ${active ? 'text-blue-200' : 'text-slate-400'}`}>{item.name}</span>
                </span>
              </button>
            );
          })}
        </fieldset>

        <div className="mt-4 flex justify-center" aria-live="polite">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/[0.07] px-3 py-1.5 text-xs font-semibold text-blue-200">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
            {selectedModality.acronym} selecionada
          </span>
        </div>

        <motion.div
          key={selected}
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative mt-8 overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-950/75 shadow-2xl shadow-black/25"
        >
          <div className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-r from-blue-500/15 via-slate-900/80 to-slate-950 p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-2 -top-8 font-mono-tech text-[7rem] font-black leading-none text-blue-400/[0.045] sm:text-[10rem]">{selectedModality.acronym}</div>
            <div className="relative flex items-center gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-blue-500/10 text-blue-200">
                <SelectedIcon className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-300">Programa selecionado</p>
                <h3 className="mt-1 text-2xl font-extrabold text-white sm:text-3xl">{selectedModality.name}</h3>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-slate-800/80 sm:grid-cols-2 lg:grid-cols-3">
            {criteria.map(({ label, icon: CriterionIcon }) => (
              <article key={label} className="min-h-40 bg-slate-950/95 p-5 transition-colors hover:bg-slate-900/90 sm:p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-blue-300">
                  <CriterionIcon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="mt-4 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</h4>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-200">{selectedModality.details[label]}</p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
