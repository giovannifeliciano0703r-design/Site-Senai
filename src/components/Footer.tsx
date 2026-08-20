import React from 'react';
import { ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="flex items-center gap-3 text-lg font-extrabold text-white">
              <span>FIRST</span>
              <span className="h-5 w-px bg-slate-800" aria-hidden="true" />
              <span className="text-blue-400">SENAI</span>
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
              Projeto educacional sobre modalidades de robótica, desenvolvido para apresentar FLL, FTC e FRC de forma simples e visual.
            </p>
            <p className="mt-4 text-sm font-semibold text-slate-300">
              Criado por <span className="text-white">Giovanni Feliciano</span>
            </p>
          </div>

          <div className="md:text-right">
            <a
              href="https://www.firstinspires.org/programs/frc/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors hover:text-blue-300"
            >
              Site oficial da FIRST
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <p className="mt-3 text-xs leading-5 text-slate-600">
              Conteúdo educacional baseado em informações públicas da FIRST.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-slate-900 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Giovanni Feliciano</span>
          <span>Robótica • Educação • Tecnologia</span>
        </div>
      </div>
    </footer>
  );
};
