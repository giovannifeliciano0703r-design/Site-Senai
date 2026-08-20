import React from 'react';
import { Camera, Cpu, Users } from 'lucide-react';
import { motion } from 'motion/react';

const galleryItems = [
  {
    title: 'Robótica em movimento',
    subtitle: 'Máquinas, sensores e automação ganhando forma.',
    image:
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=85',
    icon: Cpu,
  },
  {
    title: 'Engenharia por dentro',
    subtitle: 'Eletrônica, componentes e detalhes que fazem tudo funcionar.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
    icon: Camera,
  },
  {
    title: 'Trabalho em equipe',
    subtitle: 'Projetar, testar e evoluir juntos faz parte do desafio.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85',
    icon: Users,
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
            Experiência visual
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Robótica também é movimento, construção e colaboração
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Uma pausa visual para mostrar o lado prático e humano da tecnologia.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {galleryItems.map((item, index) => {
            const Icon = item.icon;
            const spanClass = index === 0 ? 'lg:col-span-6' : 'lg:col-span-3';

            return (
              <motion.figure
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`group relative min-h-[320px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-black/10 ${spanClass}`}
              >
                <img
                  src={item.image}
                  alt="Imagem ilustrativa relacionada a robótica e tecnologia"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-blue-300 backdrop-blur">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-300">{item.subtitle}</p>
                </div>
              </motion.figure>
            );
          })}
        </div>

        <p className="mt-5 text-center text-xs text-slate-600">
          Imagens ilustrativas. As fotos oficiais das equipes podem ser adicionadas aos cards abaixo.
        </p>
      </div>
    </section>
  );
};
