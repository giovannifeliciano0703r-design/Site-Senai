import React from 'react';
import { Instagram, Users } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SponsorContact } from './SponsorContact';

const IMAGE_FALLBACK = '/images/robotics-fallback.svg';

const teams = [
  {
    name: 'Federal Force',
    number: 'FRC 10466',
    instagram: 'https://www.instagram.com/frc10466/',
    photo:
      'https://www.sistemafibra.org.br/senai/images/categorias/noticias/2026/02-fevereiro/23-1-2026_Equipes_FRC_-_Foto_Bruno_Frauzino-2816_Federal_Force.jpg',
    photoCredit: 'Bruno Frauzino / Sistema Fibra',
    description:
      'A Federal Force representa o Sesi Taguatinga, de Taguatinga (DF), estreou em 2025 e participou do FIRST Championship.',
  },
  {
    name: "Robot's District",
    number: 'FRC 9484',
    instagram: 'https://www.instagram.com/frc9484/',
    photo:
      'https://www.sistemafibra.org.br/senai/images/categorias/noticias/2026/02-fevereiro/23-1-2026_Equipes_FRC_-_Foto_Bruno_Frauzino-2827_ROBOTS_DISTRICT.jpg',
    photoCredit: 'Bruno Frauzino / Sistema Fibra',
    description:
      'A Robot’s District representa o SESI SENAI Taguatinga, de Taguatinga (DF), estreou em 2024 e participou do FIRST Championship.',
  },
];

const useFallbackImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === 'true') return;

  image.dataset.fallbackApplied = 'true';
  image.src = IMAGE_FALLBACK;
};

export const Teams: React.FC = () => {
  const reduceMotion = useReducedMotion();

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
            Federal Force 10466 e Robot&apos;s District 9484 representam Taguatinga, Distrito Federal, na FIRST Robotics Competition.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {teams.map((team, index) => (
            <motion.a
              key={team.name}
              href={team.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir Instagram da equipe ${team.name}`}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: reduceMotion ? 0 : 0.4, delay: reduceMotion ? 0 : index * 0.08 }}
              className={`group block overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/10 transition-[border-color,box-shadow,transform] duration-300 hover:border-blue-500/40 hover:shadow-blue-950/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 ${reduceMotion ? '' : 'hover:-translate-y-1.5'}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-slate-800 bg-slate-900">
                <img
                  src={team.photo}
                  alt={`Equipe ${team.name}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={useFallbackImage}
                  className={`absolute inset-0 h-full w-full object-cover object-center ${reduceMotion ? '' : 'transition-transform duration-700 group-hover:scale-[1.025]'}`}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/80 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-300 backdrop-blur">
                  {team.number}
                </div>
                <span className="absolute bottom-4 right-4 hidden rounded-full bg-slate-950/70 px-2.5 py-1 text-[10px] text-slate-300 backdrop-blur sm:block">
                  Foto: {team.photoCredit}
                </span>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white">{team.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">FIRST Robotics Competition</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-gradient-to-br from-violet-600 via-pink-500 to-amber-400 text-white shadow-lg shadow-pink-950/30">
                    <Instagram className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-400 sm:text-base">{team.description}</p>

              </div>
            </motion.a>
          ))}
        </div>

        <SponsorContact />
      </div>
    </section>
  );
};
