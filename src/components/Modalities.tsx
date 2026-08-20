import React from 'react';
import { MODALITIES } from '../data/roboticsData';
import { CheckCircle2, Users, ShieldAlert, Sparkles, Award, Cpu, Boxes, Wrench, Bot } from 'lucide-react';
import { motion } from 'motion/react';

export const Modalities: React.FC = () => {
  const getModalityIcon = (acronym: string) => {
    switch (acronym) {
      case 'FLL':
        return <Boxes className="w-6 h-6 text-amber-400" />;
      case 'FTC':
        return <Wrench className="w-6 h-6 text-blue-400" />;
      case 'FRC':
        return <Bot className="w-6 h-6 text-indigo-300" />;
      default:
        return <Cpu className="w-6 h-6 text-blue-400" />;
    }
  };

  const getEmojiIcon = (acronym: string) => {
    switch (acronym) {
      case 'FLL':
        return '🧱';
      case 'FTC':
        return '⚙️';
      case 'FRC':
        return '🤖';
      default:
        return '⚡';
    }
  };

  return (
    <section id="modalidades" className="py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-950/80 border border-blue-800/60 text-xs font-semibold text-blue-300">
            <Cpu className="w-3.5 h-3.5" />
            <span>Programas Oficiais</span>
          </div>
          <h2 id="modalities-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Modalidades da FIRST
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Três categorias estruturadas por faixa etária e complexidade técnica para desenvolver talentos desde a infância até o ensino médio.
          </p>
        </div>

        {/* 3 Main Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MODALITIES.map((modality, idx) => {
            const isFRC = modality.highlight;
            const isFLL = modality.acronym === 'FLL';
            const isFTC = modality.acronym === 'FTC';

            return (
              <motion.div
                key={modality.id}
                id={`card-modality-${modality.acronym.toLowerCase()}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 ${
                  isFRC
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950/70 border-2 border-blue-500/70 shadow-xl shadow-blue-950/50 ring-1 ring-blue-400/40'
                    : isFLL
                    ? 'bg-slate-900/90 border border-amber-500/30 hover:border-amber-500/60 shadow-lg shadow-black/30'
                    : 'bg-slate-900/90 border border-blue-500/30 hover:border-blue-500/60 shadow-lg shadow-black/30'
                }`}
              >
                {/* Highlight Badge for FRC */}
                {isFRC && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider shadow-md shadow-blue-600/40 flex items-center gap-1 border border-blue-300/40">
                    <Sparkles className="w-3 h-3" />
                    <span>Destaque Principal</span>
                  </div>
                )}

                {/* Top Section */}
                <div>
                  {/* Card Header: Icon + Acronym */}
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl shadow-sm ${
                          isFRC
                            ? 'bg-blue-600/20 border border-blue-400/50 text-blue-300'
                            : isFLL
                            ? 'bg-amber-500/10 border border-amber-500/40 text-amber-400'
                            : 'bg-blue-500/10 border border-blue-500/40 text-blue-400'
                        }`}
                      >
                        {getEmojiIcon(modality.acronym)}
                      </div>
                      <div>
                        <span
                          className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                            isFRC
                              ? 'bg-blue-950 text-blue-300 border-blue-700/60'
                              : isFLL
                              ? 'bg-amber-950/80 text-amber-300 border-amber-700/60'
                              : 'bg-blue-950/80 text-blue-300 border-blue-800/60'
                          }`}
                        >
                          {modality.badge}
                        </span>
                        <div className="font-mono-tech text-2xl font-bold text-white mt-1">
                          {modality.acronym}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Title & Age Range */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl font-bold text-white leading-snug">
                      {modality.name}
                    </h3>
                    
                    <div className="flex items-start gap-1.5 text-xs text-slate-300 bg-slate-950/60 px-3 py-2 rounded-lg border border-slate-800">
                      <span className="font-semibold text-slate-400">Faixa etária:</span>
                      <span className="font-medium text-slate-200">{modality.ageRange}</span>
                    </div>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {modality.shortDescription}
                  </p>

                  {/* Characteristics Section */}
                  <div className="space-y-3 pt-4 border-t border-slate-800/80">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Principais características
                    </h4>
                    <ul className="space-y-2.5">
                      {modality.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                          <CheckCircle2
                            className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                              isFRC
                                ? 'text-blue-400'
                                : isFLL
                                ? 'text-amber-400'
                                : 'text-blue-400'
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Alliance note for FRC or taglines */}
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  {modality.allianceNote ? (
                    <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-700/50 flex items-start gap-2.5">
                      <Users className="w-4 h-4 text-blue-300 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-blue-200 font-medium leading-relaxed">
                        {modality.allianceNote}
                      </p>
                    </div>
                  ) : (
                    <div className="text-xs text-slate-400 flex items-center justify-between">
                      <span className="font-mono-tech">{modality.acronym} FIRST</span>
                      <span className="text-slate-500">Temporada Anual</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
