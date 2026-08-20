import React from 'react';
import { ArrowDown, Bot, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden flex flex-col justify-center min-h-[85vh]"
    >
      {/* Background Subtle Tech Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] h-[200px] bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-blue-300 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span>Competições Oficiais de Robótica</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">Temporada Estudantil</span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-title"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
            >
              Descubra o mundo da{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
                robótica FIRST
              </span>
            </h1>

            {/* Subtitle */}
            <p
              id="hero-subtitle"
              className="text-lg sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0"
            >
              Conheça as principais modalidades que desafiam estudantes a projetar, construir e programar robôs.
            </p>

            {/* CTAs and Key Badges */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="hero-cta-button"
                href="#modalidades"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-base shadow-lg shadow-blue-600/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Conhecer modalidades</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                id="hero-about-link"
                href="#sobre"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-semibold text-base transition-colors duration-200"
              >
                <span>O que é a FIRST?</span>
              </a>
            </div>

            {/* Quick Metrics / Tagline */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-bold font-mono-tech text-amber-400">FLL</div>
                <div className="text-xs text-slate-400">5 a 16 anos</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/60">
                <div className="text-xl font-bold font-mono-tech text-blue-400">FTC</div>
                <div className="text-xs text-slate-400">12 a 18 anos</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/60 border-blue-500/30 bg-blue-950/20">
                <div className="text-xl font-bold font-mono-tech text-indigo-300">FRC</div>
                <div className="text-xs text-slate-300 font-medium">14 a 18 anos</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Clean Robotics & Engineering Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            <div className="w-full max-w-md p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-2xl relative backdrop-blur-sm">
              {/* Header inside HUD container */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-blue-500/80" />
                  <span className="text-xs font-mono-tech text-slate-400 ml-1">ROBOTICS_LADDER.v2026</span>
                </div>
                <span className="text-[11px] font-mono-tech text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  ATIVO
                </span>
              </div>

              {/* Schematic Stages */}
              <div className="py-5 space-y-3.5">
                {/* Stage 1: FLL */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-amber-500/30 flex items-center justify-between group hover:border-amber-500/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                      🧱
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        FLL <span className="text-xs font-normal text-amber-400/90 font-mono-tech">(LEGO)</span>
                      </div>
                      <div className="text-xs text-slate-400">Fundamentos & Criatividade</div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono-tech border border-amber-500/20">
                    5-16 anos
                  </span>
                </div>

                {/* Stage 2: FTC */}
                <div className="p-3 rounded-xl bg-slate-950/70 border border-blue-500/30 flex items-center justify-between group hover:border-blue-500/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                      ⚙️
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        FTC <span className="text-xs font-normal text-blue-400/90 font-mono-tech">(Tech Challenge)</span>
                      </div>
                      <div className="text-xs text-slate-400">Metal & Programação Java</div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-300 font-mono-tech border border-blue-500/20">
                    12-18 anos
                  </span>
                </div>

                {/* Stage 3: FRC */}
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-950/80 via-slate-900 to-indigo-950/80 border-2 border-blue-500/60 flex items-center justify-between group shadow-lg shadow-blue-900/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-400/40 flex items-center justify-center text-blue-300 font-bold text-sm">
                      🤖
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-2">
                        FRC <span className="text-xs font-normal text-indigo-300 font-mono-tech">(Robotics Comp)</span>
                      </div>
                      <div className="text-xs text-slate-300">Robôs de Grande Porte & Alianças</div>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-0.5 rounded bg-blue-500/20 text-blue-200 font-mono-tech border border-blue-400/40 font-semibold">
                    14-18 anos
                  </span>
                </div>
              </div>

              {/* Footer Info */}
              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <Zap className="w-3.5 h-3.5 text-blue-400" />
                  Ecossistema Integrado FIRST
                </span>
                <span className="text-slate-500">SENAI Brasil</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
