import React from 'react';
import { ArrowRight, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { COMPARISONS } from '../data/roboticsData';

export const Comparison: React.FC = () => {
  return (
    <section id="comparacao" className="border-y border-slate-800/80 bg-slate-900/35 py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
            <Layers className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
            Comparação rápida
          </div>
          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Como as modalidades evoluem?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400 sm:text-base">
            A complexidade aumenta de forma progressiva, acompanhando o desenvolvimento técnico dos estudantes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {COMPARISONS.map((comp, index) => (
            <React.Fragment key={comp.acronym}>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.07 }}
                className={`relative rounded-2xl border p-5 ${
                  comp.acronym === 'FRC'
                    ? 'border-blue-500/35 bg-blue-500/7'
                    : 'border-slate-800 bg-slate-950/45'
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono-tech text-2xl font-bold text-white">{comp.acronym}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-600">0{index + 1}</span>
                </div>
                <p className="mt-4 text-sm font-bold text-slate-200">{comp.level}</p>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 tracking-[0.08em] text-slate-500">
                  {comp.keywords}
                </p>
                {index < COMPARISONS.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 text-slate-700 md:block" aria-hidden="true" />
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
