import React from 'react';
import { Bot, Boxes, Check, Cpu, Users, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import { MODALITIES } from '../data/roboticsData';

const getIcon = (acronym: string) => {
  if (acronym === 'FLL') return Boxes;
  if (acronym === 'FTC') return Wrench;
  return Bot;
};

export const Modalities: React.FC = () => {
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
              Três níveis, uma mesma cultura de inovação
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-400 lg:justify-self-end">
            As modalidades evoluem em complexidade, mas compartilham a mesma base: aprender fazendo, resolver problemas reais e trabalhar em equipe.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {MODALITIES.map((modality, index) => {
            const Icon = getIcon(modality.acronym);
            const highlighted = modality.acronym === 'FRC';

            return (
              <motion.article
                key={modality.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-7 ${
                  highlighted
                    ? 'border-blue-500/40 bg-gradient-to-b from-blue-500/10 to-slate-900/80 shadow-xl shadow-blue-950/25'
                    : 'border-slate-800 bg-slate-900/70'
                }`}
              >
                {highlighted && (
                  <div className="absolute right-5 top-5 rounded-full border border-blue-400/25 bg-blue-500/10 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-blue-300">
                    Destaque
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                    highlighted
                      ? 'border-blue-500/30 bg-blue-500/10 text-blue-300'
                      : 'border-slate-800 bg-slate-950 text-slate-400'
                  }`}>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-500">Etapa 0{index + 1}</p>
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

                <div className="mt-6 border-t border-slate-800 pt-5">
                  <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                    Principais características
                  </p>
                  <ul className="space-y-2.5">
                    {modality.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${highlighted ? 'text-blue-400' : 'text-slate-500'}`} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  {modality.allianceNote ? (
                    <div className="flex gap-2.5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-3 text-xs leading-5 text-blue-100/80">
                      <Users className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                      <span>{modality.allianceNote}</span>
                    </div>
                  ) : (
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-slate-600">
                      {modality.badge}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
