import React, { useEffect, useState } from 'react';
import { Bot } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, type PanInfo } from 'motion/react';

const IMAGE_FALLBACK = '/images/robotics-fallback.svg';
const SLIDE_DURATION = 9000;

const scenes = [
  {
    title: 'Robôs de porte industrial',
    label: 'Projeto e construção',
    description: 'Equipes partem de um Kit of Parts para projetar, programar e construir robôs para o desafio da temporada.',
    image: '/images/arena/frc-robots-field.jpg',
    alt: 'Robôs da FIRST Robotics Competition disputando uma partida em um campo com elementos amarelos.',
  },
  {
    title: 'Ação no campo temático',
    label: 'Jogo da temporada',
    description: 'A cada temporada, um novo jogo leva as equipes a adaptar mecanismos, programação e estratégia.',
    image: '/images/arena/frc-robot-gamepiece.jpg',
    alt: 'Robô da FIRST Robotics Competition em ação ao lado de elementos amarelos do jogo.',
  },
  {
    title: 'Alianças em ação',
    label: 'Três equipes por aliança',
    description: 'As partidas da FIRST Robotics Competition são disputadas em alianças formadas por três equipes.',
    image: '/images/arena/frc-arena-alliance.jpg',
    alt: 'Arena da FIRST Robotics Competition vista das arquibancadas durante uma partida.',
  },
];

const applyFallback = (event: React.SyntheticEvent<HTMLImageElement>) => {
  const image = event.currentTarget;
  if (image.dataset.fallbackApplied) return;
  image.dataset.fallbackApplied = 'true';
  image.src = IMAGE_FALLBACK;
};

export const ArenaRobots: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragging, setDragging] = useState(false);
  const reduceMotion = useReducedMotion();
  const activeScene = scenes[activeIndex];
  const navigate = (direction: number) => setActiveIndex((current) => (current + direction + scenes.length) % scenes.length);
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    setDragging(false);
    const intentionalSwipe = Math.abs(info.offset.x) > 60 || Math.abs(info.velocity.x) > 500;
    if (intentionalSwipe) navigate(info.offset.x < 0 ? 1 : -1);
  };

  useEffect(() => {
    if (reduceMotion || dragging) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % scenes.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timer);
  }, [activeIndex, dragging, reduceMotion]);

  return (
    <section id="arena" className="relative overflow-hidden border-b border-slate-800/80 bg-slate-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-28 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-500/[0.07] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
            Robôs na arena
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">Engenharia em movimento</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-400">
            Na FIRST Robotics Competition, equipes projetam, programam e constroem robôs de porte industrial para um jogo anual em campo temático.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <motion.article
            aria-label="Galeria de robôs na arena. Arraste para os lados ou use as setas do teclado para trocar de imagem."
            aria-live="off"
            tabIndex={0}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragStart={() => setDragging(true)}
            onDragEnd={handleDragEnd}
            onKeyDown={(event) => {
              if (event.key === 'ArrowRight') navigate(1);
              if (event.key === 'ArrowLeft') navigate(-1);
            }}
            className="relative min-h-[440px] cursor-grab touch-pan-y select-none overflow-hidden rounded-3xl border border-blue-500/30 bg-slate-900 shadow-2xl shadow-blue-950/30 outline-none focus-visible:ring-2 focus-visible:ring-blue-400 active:cursor-grabbing sm:min-h-[590px]"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={activeScene.image}
                src={activeScene.image}
                alt={activeScene.alt}
                draggable={false}
                onError={applyFallback}
                initial={reduceMotion ? false : { opacity: 0.2, scale: 1.015 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0 }}
                transition={{ duration: reduceMotion ? 0 : 0.8, ease: 'easeOut' }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/10" />

            <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 p-4 sm:p-6">
              <span className="rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-200 backdrop-blur">
                FRC • Arena
              </span>
              <span className="rounded-full border border-white/15 bg-slate-950/75 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-300 backdrop-blur">
                {activeIndex + 1} de {scenes.length}
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeScene.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.45 }}
                className="absolute inset-x-0 bottom-0 z-20 p-6 sm:p-9"
              >
                <span className="text-xs font-extrabold uppercase tracking-[0.14em] text-blue-300">{activeScene.label}</span>
                <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-4xl">{activeScene.title}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">{activeScene.description}</p>
              </motion.div>
            </AnimatePresence>
          </motion.article>

          <div className="mt-5 flex items-center justify-center gap-2" aria-label="Escolha uma imagem da arena">
            {scenes.map((scene, index) => {
              const selected = activeIndex === index;
              return (
                <button
                  key={scene.title}
                  type="button"
                  aria-label={`Mostrar imagem ${index + 1}: ${scene.title}`}
                  aria-pressed={selected}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-[width,background-color] ${selected ? 'w-10 bg-blue-400' : 'w-2.5 bg-slate-700 hover:bg-slate-500'}`}
                />
              );
            })}
          </div>
          <p className="mt-3 text-center text-xs leading-5 text-slate-500">
            {reduceMotion ? 'Arraste a imagem para os lados ou use os indicadores para navegar.' : 'Arraste para os lados ou aguarde: as imagens mudam a cada 9 segundos.'}
          </p>
        </div>
      </div>
    </section>
  );
};
