import React, { useState } from 'react';
import { ChevronDown, Lightbulb, Users, Wrench } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const principles = [
  {
    icon: Wrench,
    title: 'Aprender fazendo',
    description: 'Os estudantes aplicam ciência, tecnologia, engenharia e matemática em desafios reais, projetando, construindo e resolvendo problemas em equipe.',
  },
  {
    icon: Users,
    title: 'Trabalho em equipe',
    description: 'Os programas promovem colaboração e os Valores Essenciais da FIRST afirmam que somos mais fortes quando trabalhamos juntos.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'A inovação é um Valor Essencial da FIRST: usar criatividade e persistência para resolver problemas.',
  },
];

export const AboutFirst: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const reduceMotion = useReducedMotion();

  return (
    <section id="sobre" className="border-y border-slate-800/80 bg-slate-900/40 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-400">Sobre a organização</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">O que é a FIRST?</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              A missão da <strong className="font-semibold text-white">FIRST</strong> é oferecer programas transformadores de robótica que deem aos jovens habilidades, confiança e resiliência para construir um mundo melhor.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Em seus programas, participantes pesquisam, arrecadam recursos, projetam, constroem e apresentam suas realizações, orientados pelos Valores Essenciais da organização.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50"
                >
                  <button
                    type="button"
                    aria-expanded={Boolean(expanded[item.title])}
                    aria-controls={`principle-${index}`}
                    onClick={() => setExpanded((current) => ({ ...current, [item.title]: !current[item.title] }))}
                    className="flex w-full items-center gap-4 p-4 text-left transition-colors hover:bg-slate-900/60 sm:p-5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-blue-400">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="flex-1 font-bold text-white">{item.title}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${expanded[item.title] ? 'rotate-180 text-blue-400' : ''}`} aria-hidden="true" />
                  </button>
                  <AnimatePresence initial={false}>
                    {expanded[item.title] ? (
                      <motion.div
                        id={`principle-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="border-t border-slate-800 px-5 py-4 text-sm leading-6 text-slate-400">{item.description}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
