import React from 'react';
import { Award, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const SenaiFirst: React.FC = () => {
  return (
    <section id="senai" className="py-20 bg-gradient-to-b from-slate-900/60 to-slate-950 border-t border-slate-800/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl relative backdrop-blur-md"
        >
          {/* Subtle gradient bar on top */}
          <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-red-500 via-blue-500 to-indigo-500 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-800/40 text-xs font-semibold text-red-300">
                <GraduationCap className="w-3.5 h-3.5 text-red-400" />
                <span>SENAI + FIRST Brasil</span>
              </div>

              <h2 id="senai-heading" className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Educação, tecnologia e inovação
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Iniciativas ligadas ao <strong>SENAI</strong> e à <strong>FIRST</strong> aproximam estudantes da tecnologia, da engenharia, da inovação e dos desafios encontrados no mundo profissional.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Formação Profissional</div>
                  <div className="text-[11px] text-slate-400">Preparação real para a indústria</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400 font-bold text-sm">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Torneios Nacionais</div>
                  <div className="text-[11px] text-slate-400">Etapas regionais e Festival SESI/SENAI</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
