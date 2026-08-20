import React from 'react';
import { BriefcaseBusiness, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

export const SenaiFirst: React.FC = () => {
  return (
    <section id="senai" className="border-t border-slate-800/80 bg-slate-900/35 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950"
        >
          <div className="h-1 w-full bg-gradient-to-r from-red-500 via-blue-500 to-blue-400" aria-hidden="true" />
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-400">Educação tecnológica</p>
              <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">SENAI, tecnologia e cultura de engenharia</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                A formação profissional do SENAI e as experiências de robótica da FIRST aproximam estudantes de projetos práticos, colaboração e desafios semelhantes aos encontrados em ambientes de tecnologia e indústria.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/55 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/5 text-red-400">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Formação prática</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">Conhecimento aplicado em projetos, protótipos e resolução de problemas.</p>
                </div>
              </div>

              <div className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/55 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 text-blue-400">
                  <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Visão profissional</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-400">Organização, comunicação, estratégia e responsabilidade em equipe.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
