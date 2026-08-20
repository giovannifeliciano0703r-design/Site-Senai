import React from 'react';
import { Globe, Users, Trophy, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutFirst: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-slate-900/50 border-y border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto space-y-4"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-800/50 text-xs font-semibold text-blue-300">
            <Globe className="w-3.5 h-3.5" />
            <span>Fundação Internacional</span>
          </div>

          <h2 id="about-first-heading" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            O que é a FIRST?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            A <strong>FIRST</strong> (<em>For Inspiration and Recognition of Science and Technology</em>) é uma organização internacional que utiliza competições de robótica para aproximar jovens das áreas de <strong>ciência, tecnologia, engenharia e matemática</strong>. Os participantes trabalham em equipe para desenvolver robôs, resolver desafios e colocar seus conhecimentos em prática.
          </p>
        </motion.div>

        {/* 3 Core Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-4">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Impacto Global</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Presente em mais de 100 países, inspirando milhões de estudantes a explorar carreiras de alto impacto tecnológico.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4">
              <Trophy className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Desafios Reais da Temporada</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Problemas de engenharia e sustentabilidade desenhados por especialistas da indústria a cada ano.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-400 mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Gracious Professionalism®</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Competição saudável com respeito mútuo, cooperação mútua (Coopertition®) e ética profissional.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
