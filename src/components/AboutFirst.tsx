import React from 'react';
import { Lightbulb, Users, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const principles = [
  {
    icon: Wrench,
    title: 'Aprender fazendo',
    description: 'Projetos práticos transformam teoria em soluções construídas pelas próprias equipes.',
  },
  {
    icon: Users,
    title: 'Trabalho em equipe',
    description: 'Cada desafio combina diferentes habilidades, funções e decisões coletivas.',
  },
  {
    icon: Lightbulb,
    title: 'Inovação',
    description: 'Os estudantes testam ideias, resolvem problemas e evoluem a cada temporada.',
  },
];

export const AboutFirst: React.FC = () => {
  return (
    <section id="sobre" className="border-y border-slate-800/80 bg-slate-900/40 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-400">Sobre a organização</p>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">O que é a FIRST?</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              A <strong className="font-semibold text-white">FIRST</strong> — <em>For Inspiration and Recognition of Science and Technology</em> — promove experiências de robótica que aproximam estudantes de ciência, tecnologia, engenharia e matemática.
            </p>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">
              Em vez de apenas estudar conceitos, as equipes projetam, constroem, programam e tomam decisões para enfrentar desafios de cada modalidade.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {principles.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-blue-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
