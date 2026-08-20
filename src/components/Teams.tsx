import React from 'react';
import { ArrowUpRight, Camera, Instagram, Users } from 'lucide-react';
import { motion } from 'motion/react';

const teams = [
  {
    name: 'Federal Force',
    number: 'FRC 10466',
    instagram: 'https://www.instagram.com/frc10466?igsi=MTgybDF2M2Zydnlzeg%3D%3D',
    handle: '@frc10466',
    photo: '/teams/federal-force.jpg',
    description:
      'Equipe de robótica do SENAI que participa da FIRST Robotics Competition, unindo engenharia, programação, estratégia e trabalho em equipe.',
  },
  {
    name: "Robot's District",
    number: 'FRC 9484',
    instagram: 'https://www.instagram.com/frc9484?igsi=MWVuejdmazdkazEwMw%3D%3D',
    handle: '@frc9484',
    photo: '/teams/robots-district.jpg',
    description:
      'Equipe de robótica do SENAI voltada aos desafios da FIRST Robotics Competition e ao desenvolvimento de soluções técnicas em equipe.',
  },
];

export const Teams: React.FC = () => {
  return (
    <section id="equipes" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            Equipes SENAI
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Conheça quem transforma projeto em competição
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Federal Force e Robot's District representam o SENAI no universo da FIRST Robotics Competition.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {teams.map((team, index) => (
            <motion.article
              key={team.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-blue-950/20"
            >
              <div className="relative h-64 overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/50 sm:h-72">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-700 bg-slate-950/70 text-slate-400">
                    <Camera className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-3 text-sm font-semibold text-slate-400">Foto oficial da equipe</p>
                  <p className="mt-1 text-xs text-slate-600">Espaço preparado para a imagem real</p>
                </div>

                <img
                  src={team.photo}
                  alt={`Equipe ${team.name}`}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none';
                  }}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-300 backdrop-blur">
                  {team.number}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white">{team.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">Equipe SENAI</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/10 text-pink-300">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-400 sm:text-base">{team.description}</p>

                <a
                  href={team.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-pink-500/40 hover:bg-slate-900"
                  aria-label={`Abrir Instagram da equipe ${team.name}`}
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  {team.handle}
                  <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
