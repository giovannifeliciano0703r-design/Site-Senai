import React, { useState } from 'react';
import { Bot, Boxes, Check, ChevronDown, Cpu, Users, Wrench } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { MODALITIES } from '../data/roboticsData';

const getIcon = (acronym: string) => {
  if (acronym === 'FLL') return Boxes;
  if (acronym === 'FTC') return Wrench;
  return Bot;
};

export const Modalities: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const shouldReduceMotion = useReducedMotion();

  const toggleExpanded = (id: string) => {
    setExpanded((current) => ({ ...current, [id]: !current[id] }));
  };

  return (
    <section id="modalidades" className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
              <Cpu className="h-3.5 w-3.5" aria-hidden="true" />
              Modalidades FIRST
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Três programas, uma comunidade de robótica
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-7 text-slate-400 lg:justify-self-end">
            A FIRST oferece programas para diferentes idades e séries escolares. Todos promovem
            colaboração, resolução de problemas e inovação por meio da robótica e da engenharia.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {MODALITIES.map((modality, index) => {
            const Icon = getIcon(modality.acronym);
            const isExpanded = Boolean(expanded[modality.id]);
            const panelId = `modality-detail-${modality.id}`;

            return (
              <motion.article
                key={modality.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.4, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-blue-500/40 bg-gradient-to-b from-blue-500/10 to-slate-900/80 shadow-xl shadow-blue-950/25 transition-colors hover:border-blue-400/60"
              >
                <button
                  type="button"
                  onClick={() => toggleExpanded(modality.id)}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  className="flex w-full flex-col p-6 text-left sm:p-7 lg:min-h-[342px]"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-300"
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">
                        Etapa 0{index + 1}
                      </p>
                      <p className="font-mono-tech text-xl font-bold text-white">{modality.acronym}</p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-bold leading-snug text-white">{modality.name}</h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                      {modality.ageRange}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-slate-300">{modality.shortDescription}</p>
                  </div>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-800 pt-5 lg:mt-auto">
                    <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-500">
                      {modality.badge}
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-blue-300' : 'text-slate-500'}`} aria-hidden="true" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={panelId}
                      key="details"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-slate-800 bg-slate-950/35 px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
                        <div
                          className={`rounded-2xl border border-slate-800 bg-gradient-to-br ${modality.accentColor} p-4`}
                        >
                          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">
                            Em poucas palavras
                          </p>
                          <p className="mt-1.5 text-sm font-medium leading-6 text-slate-100">{modality.tagline}</p>
                        </div>

                        <div className="mt-5">
                          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                            Principais características
                          </p>
                          <ul className="space-y-2.5">
                            {modality.features.map((feature) => (
                              <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                                <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {modality.allianceNote && (
                          <div className="mt-5 flex gap-2.5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 text-xs leading-5 text-blue-100/80">
                            <Users className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                            <span>{modality.allianceNote}</span>
                          </div>
                        )}

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
