import React from 'react';
import { Blocks, Bot, Camera, ExternalLink, Wrench } from 'lucide-react';
import { motion } from 'motion/react';

const galleryItems = [
  {
    title: 'FIRST LEGO League',
    subtitle: 'Robótica, programação e resolução de desafios com tecnologia LEGO.',
    image:
      'https://www.firstinspires.org/hs-fs/hubfs/20230420_bm_0312.jpg?height=420&name=20230420_bm_0312.jpg&width=630',
    href: 'https://www.firstinspires.org/programs/fll/',
    icon: Blocks,
  },
  {
    title: 'FIRST Tech Challenge',
    subtitle: 'Equipes projetam e constroem robôs competitivos em escala intermediária.',
    image:
      'https://www.firstinspires.org/hs-fs/hubfs/web/program/ftc/ftc_getstarted_1260hero.jpg?height=420&name=ftc_getstarted_1260hero.jpg&width=630',
    href: 'https://www.firstinspires.org/programs/ftc/',
    icon: Wrench,
  },
  {
    title: 'FIRST Robotics Competition',
    subtitle: 'Robôs de grande porte, engenharia aplicada e competições em alto nível.',
    image:
      'https://www.firstinspires.org/hs-fs/hubfs/frc_getstarted_1260hero.webp?height=420&name=frc_getstarted_1260hero.webp&width=630',
    href: 'https://www.firstinspires.org/programs/frc/',
    icon: Bot,
  },
];

export const VisualGallery: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-y border-slate-800/80 bg-slate-900/30 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
            <Camera className="h-3.5 w-3.5" aria-hidden="true" />
            Robôs e competições
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Da primeira construção aos grandes robôs de competição
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Imagens oficiais da FIRST ajudam a mostrar como cada modalidade ganha vida na prática.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            const spanClass = index === 2 ? 'lg:col-span-6' : 'lg:col-span-3';

            return (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative min-h-[340px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-black/10 ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt={`Imagem oficial da ${item.title} no site da FIRST`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-blue-300 backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{item.subtitle}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-blue-300 transition-colors hover:text-blue-200"
                  >
                    Ver no site da FIRST
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </motion.figure>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs text-slate-600">
          Imagens carregadas diretamente do site oficial da FIRST.
        </p>
      </div>
    </section>
  );
};
