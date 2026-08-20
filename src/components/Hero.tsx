import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[30rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_88%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <div className="mb-8 flex items-center justify-center gap-4 text-sm font-extrabold tracking-tight text-white sm:text-base">
          <span>FIRST</span>
          <span className="h-5 w-px bg-slate-700" aria-hidden="true" />
          <span className="text-blue-400">SENAI</span>
        </div>

        <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
          Robótica • Educação • Tecnologia
        </p>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-7xl">
          Conheça a jornada da{' '}
          <span className="text-blue-400">robótica FIRST</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
          Um guia simples sobre as modalidades, competências e equipes que fazem parte desse universo.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="#sobre"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Explorar o conteúdo
            <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-16 text-xs font-medium uppercase tracking-[0.18em] text-slate-600">
          Role para conhecer
        </div>
      </motion.div>
    </section>
  );
};
