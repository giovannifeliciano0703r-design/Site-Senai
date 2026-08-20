import React from 'react';
import { ArrowUpRight, Instagram, Users } from 'lucide-react';
import { motion } from 'motion/react';

const teams = [
  {
    name: 'Federal Force',
    number: 'FRC 9484',
    instagram: 'https://www.instagram.com/frc9484?igsi=MWVuejdmazdkazEwMw%3D%3D',
    handle: '@frc9484',
    description: 'Equipe de robótica do SENAI que participa da FIRST Robotics Competition, unindo engenharia, programação, estratégia e trabalho em equipe.',
  },
  {
    name: 'Robots District',
    number: 'FRC 10466',
    instagram: 'https://www.instagram.com/frc10466?igsi=MTgybDF2M2Zydnlzeg%3D%3D',
    handle: '@frc10466',
    description: 'Equipe de robótica do SENAI voltada aos desafios da FIRST Robotics Competition e ao desenvolvimento de soluções técnicas em equipe.',
  },
];

export const Teams: React.FC = () => {
  return (
    <section id="equipes" className="border-y border-slate-800/80 bg-slate-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            Equipes SENAI
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Conheça as equipes de robótica do SENAI
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Duas equipes que representam o SENAI na FIRST Robotics Competition e desenvolvem habilidades em tecnologia, engenharia e colaboração.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {teams.map((team, index) => (
            <motion.article
              key={team.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="group rounded-2xl border border-slate-800 bg-slate-950/70 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-950 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-blue-400">{team.number}</span>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-white">{team.name}</h3>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/10 text-pink-300">
                  <Instagram className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-400 sm:text-base">
                {team.description}
              </p>

              <a
                href={team.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-pink-500/40 hover:bg-slate-800"
                aria-label={`Abrir Instagram da equipe ${team.name}`}
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                {team.handle}
                <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
