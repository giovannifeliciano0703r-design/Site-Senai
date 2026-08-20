import React from 'react';
import { ArrowRight, Bot, Boxes, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const pathways = [
  {
    acronym: 'FLL',
    title: 'FIRST LEGO League',
    age: '5–16 anos',
    description: 'Fundamentos, criatividade e robótica com LEGO.',
    icon: Boxes,
  },
  {
    acronym: 'FTC',
    title: 'FIRST Tech Challenge',
    age: '12–18 anos',
    description: 'Construção, programação e estratégia em equipe.',
    icon: Wrench,
  },
  {
    acronym: 'FRC',
    title: 'FIRST Robotics Competition',
    age: '14–18 anos',
    description: 'Engenharia de alta complexidade e robôs de grande porte.',
    icon: Bot,
  },
];

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pt-36 lg:pb-28 lg:pt-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[50rem] -translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.045)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-400" aria-hidden="true" />
              Robótica • Engenharia • Tecnologia
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Conheça as modalidades que formam a jornada da{' '}
              <span className="text-blue-400">robótica FIRST</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Um guia direto para entender como FLL, FTC e FRC desenvolvem criatividade, programação, engenharia e trabalho em equipe em diferentes níveis de desafio.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#modalidades"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-950/40 transition-all hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Conhecer modalidades
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900/50 px-6 py-3.5 text-sm font-bold text-slate-200 transition-colors hover:border-slate-700 hover:bg-slate-900"
              >
                Entender a FIRST
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-800/80 pt-6 text-sm text-slate-400">
              <span><strong className="text-slate-200">3</strong> modalidades em destaque</span>
              <span><strong className="text-slate-200">1</strong> progressão de aprendizado</span>
              <span><strong className="text-slate-200">100%</strong> conteúdo educacional</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="relative"
          >
            <div className="rounded-3xl border border-slate-800 bg-slate-900/75 p-5 shadow-2xl shadow-black/25 backdrop-blur sm:p-6">
              <div className="mb-5 flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-400">Trilha FIRST</p>
                  <h2 className="mt-1 text-xl font-bold text-white">Da descoberta à alta engenharia</h2>
                </div>
                <span className="rounded-lg border border-slate-800 bg-slate-950 px-2.5 py-1 text-xs font-semibold text-slate-400">
                  FLL → FTC → FRC
                </span>
              </div>

              <div className="space-y-3">
                {pathways.map((item, index) => {
                  const Icon = item.icon;
                  const highlighted = item.acronym === 'FRC';

                  return (
                    <div
                      key={item.acronym}
                      className={`rounded-2xl border p-4 transition-colors ${
                        highlighted
                          ? 'border-blue-500/40 bg-blue-500/10'
                          : 'border-slate-800 bg-slate-950/60'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border ${
                          highlighted
                            ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                            : 'border-slate-800 bg-slate-900 text-slate-400'
                        }`}>
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <div>
                              <span className="font-mono-tech text-sm font-bold text-white">{item.acronym}</span>
                              <span className="ml-2 text-xs text-slate-500">0{index + 1}</span>
                            </div>
                            <span className="text-xs font-semibold text-slate-400">{item.age}</span>
                          </div>
                          <p className="mt-1 text-sm font-semibold text-slate-200">{item.title}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <p className="mt-5 border-t border-slate-800 pt-4 text-xs leading-5 text-slate-500">
                Cada programa possui desafios próprios, mas todos valorizam aprendizado prático, colaboração e resolução de problemas.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
