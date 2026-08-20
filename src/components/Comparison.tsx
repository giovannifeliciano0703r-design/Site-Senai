import React from 'react';
import { COMPARISONS } from '../data/roboticsData';
import { Layers, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export const Comparison: React.FC = () => {
  return (
    <section id="comparacao" className="py-16 bg-slate-900/40 border-y border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-semibold text-slate-300">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Resumo Rápido</span>
          </div>
          <h2 id="comparison-heading" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Qual é a diferença?
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Uma visão comparativa em segundos para entender a progressão das modalidades.
          </p>
        </div>

        {/* Quick progression grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COMPARISONS.map((comp, idx) => (
            <motion.div
              key={comp.acronym}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className={`p-5 rounded-xl border flex flex-col justify-between transition-all ${comp.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-2xl font-black text-white">
                    {comp.acronym}
                  </span>
                  <span className="text-2xl">{comp.emoji}</span>
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-3">
                  {comp.level}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/40 text-xs font-bold tracking-wide uppercase text-slate-100">
                {comp.keywords}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
