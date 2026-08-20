import React from 'react';
import { Blocks, Bot, ExternalLink, Flag, Trophy, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const IMAGE_FALLBACK = '/images/robotics-fallback.svg';

const competitionItems = [
  {
    title: 'Robot Game — FIRST LEGO League',
    eyebrow: 'FLL • Partida',
    subtitle: 'Robôs LEGO entram em campo para cumprir missões, somar pontos e colocar estratégia e programação à prova.',
    image:
      'https://www.firstinspires.org/hs-fs/hubfs/20230420_bm_0312.jpg?height=760&name=20230420_bm_0312.jpg&width=1140',
    href: 'https://www.firstinspires.org/programs/fll/',
    icon: Blocks,
    position: 'object-center',
  },
  {
    title: 'Robôs em campo — FIRST Tech Challenge',
    eyebrow: 'FTC • Competição',
    subtitle: 'Equipes pilotam robôs compactos e técnicos em desafios que exigem precisão, estratégia e trabalho em aliança.',
    image:
      'https://www.firstinspires.org/hs-fs/hubfs/web/program/ftc/ftc_getstarted_1260hero.jpg?height=760&name=ftc_getstarted_1260hero.jpg&width=1140',
    href: 'https://www.firstinspires.org/programs/ftc/',
    icon: Wrench,
    position: 'object-center',
  },
  {
    title: 'Arena FRC — engenharia em grande escala',
    eyebrow: 'FRC • Arena',
    subtitle: 'Robôs de porte industrial disputam partidas em campos temáticos, formando alianças e executando estratégias em alta velocidade.',
    image:
      'https://www.firstinspires.org/hs-fs/hubfs/frc_getstarted_1260hero.webp?height=760&name=frc_getstarted_1260hero.webp&width=1140',
    href: 'https://www.firstinspires.org/programs/frc/',
    icon: Bot,
    position: 'object-center',
  },
];

const useFallbackImage = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied === 'true') return;

  image.dataset.fallbackApplied = 'true';
  image.src = IMAGE_FALLBACK;
};

export const VisualGallery: React.FC = () => {
  return (
    <section id="competicoes" className="relative overflow-hidden border-y border-slate-800/80 bg-slate-900/35 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
              <Flag className="h-3.5 w-3.5" aria-hidden="true" />
              Competições em ação
            </div>
            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              É na arena que engenharia, estratégia e velocidade se encontram
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-400 lg:justify-self-end">
            As modalidades da FIRST ganham outra dimensão quando os robôs entram em campo. Estas imagens são carregadas diretamente do site oficial da FIRST.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {competitionItems.map((item, index) => {
            const Icon = item.icon;
            const spanClass = index === 2 ? 'lg:col-span-6' : 'lg:col-span-3';

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative min-h-[390px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/30 ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={`Competição ${item.title} — imagem oficial da FIRST`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  onError={useFallbackImage}
                  className={`absolute inset-0 h-full w-full object-cover ${item.position} transition-transform duration-700 group-hover:scale-[1.035]`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/5" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-200 backdrop-blur">
                    {item.eyebrow}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-blue-300 backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                  <h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{item.subtitle}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-300 transition-colors hover:text-blue-200"
                  >
                    Ver modalidade na FIRST
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.a
          href="https://www.firstinspires.org/first-championship"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 flex flex-col gap-4 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 transition-colors hover:border-blue-500/35 hover:bg-blue-500/[0.08] sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-300">
              <Trophy className="h-5 w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="text-sm font-extrabold text-white">FIRST Championship</p>
              <p className="mt-1 text-sm leading-6 text-slate-400">
                Conheça o grande encontro internacional onde equipes e robôs de diferentes modalidades se reúnem para competir.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-300">
            Conhecer o evento
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </motion.a>

        <p className="mt-5 text-center text-xs text-slate-600">
          Imagens oficiais da FIRST utilizadas para apresentar e promover seus programas e competições.
        </p>
      </div>
    </section>
  );
};
