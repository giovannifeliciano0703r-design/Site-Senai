import React from 'react';
import { ExternalLink, Heart, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="main-footer" className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Logo / Brand Blocks Reserved Space */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-3 px-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            {/* SENAI Brand Badge / Reserved Logo Space */}
            <div
              id="logo-space-senai"
              className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-extrabold tracking-widest text-white text-base font-mono-tech hover:border-red-500/40 transition-colors"
              title="Espaço reservado para logo oficial SENAI"
            >
              <span className="text-red-500 mr-1.5">•</span> SENAI
            </div>

            <span className="text-slate-600 font-bold">•</span>

            {/* FIRST Brand Badge / Reserved Logo Space */}
            <div
              id="logo-space-first"
              className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center font-extrabold tracking-widest text-white text-base font-mono-tech hover:border-blue-500/40 transition-colors"
              title="Espaço reservado para logo oficial FIRST"
            >
              <span className="text-blue-500 mr-1.5">•</span> FIRST
            </div>
          </div>

          {/* Educational Project Details */}
          <div className="space-y-2 max-w-lg">
            <p className="text-base font-bold text-slate-200">
              Projeto educacional sobre competições FIRST
            </p>
            <p className="text-sm text-slate-300 font-medium">
              Criado por <span className="text-white font-semibold">Giovanni Feliciano</span>
            </p>
            <p className="text-xs text-slate-400 font-mono-tech tracking-wider">
              SENAI • FIRST
            </p>
          </div>

          {/* Official reference disclaimer */}
          <div className="pt-4 border-t border-slate-900 w-full max-w-md flex flex-col items-center gap-2">
            <p className="text-xs text-slate-400">
              Conteúdo baseado em informações do site oficial da FIRST.
            </p>
            <a
              href="https://www.firstinspires.org/programs/frc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            >
              <span>Visitar FIRST Inspires (Oficial)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} • Guia Informativo e Educacional de Robótica
          </div>
        </div>
      </div>
    </footer>
  );
};
