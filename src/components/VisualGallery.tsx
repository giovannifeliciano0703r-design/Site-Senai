import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Blocks, Bot, Flag, Wrench, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const IMAGE_FALLBACK = '/images/robotics-fallback.svg';
const items = [
  { title: 'Robot Game — FIRST LEGO League', eyebrow: 'FLL • Partida', subtitle: 'No Challenge, equipes programam um robô LEGO Education SPIKE Prime para realizar missões autônomas em partidas de dois minutos e meio.', image: 'https://www.firstinspires.org/hs-fs/hubfs/20230420_bm_0312.jpg?height=760&name=20230420_bm_0312.jpg&width=1140', icon: Blocks },
  { title: 'Robôs em campo — FIRST Tech Challenge', eyebrow: 'FTC • Competição', subtitle: 'Participantes trabalham com mentores para projetar e construir robôs dinâmicos que competem em um novo jogo divulgado a cada setembro.', image: 'https://www.firstinspires.org/hs-fs/hubfs/web/program/ftc/ftc_getstarted_1260hero.jpg?height=760&name=ftc_getstarted_1260hero.jpg&width=1140', icon: Wrench },
  { title: 'Arena FRC — engenharia em grande escala', eyebrow: 'FRC • Arena', subtitle: 'Equipes projetam, programam e constroem robôs de porte industrial para um jogo anual em campo temático, formando alianças de três equipes.', image: 'https://www.firstinspires.org/hs-fs/hubfs/frc_getstarted_1260hero.webp?height=760&name=frc_getstarted_1260hero.webp&width=1140', icon: Bot },
];
const fallback = (event: React.SyntheticEvent<HTMLImageElement>) => { const image = event.currentTarget; if (!image.dataset.fallbackApplied) { image.dataset.fallbackApplied = 'true'; image.src = IMAGE_FALLBACK; } };

export const VisualGallery: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const reduceMotion = useReducedMotion();
  const open = (index: number, trigger: HTMLButtonElement) => { openerRef.current = trigger; setActive(index); };
  const close = () => setActive(null);
  const navigate = (direction: number) => setActive((current) => current === null ? null : (current + direction + items.length) % items.length);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') navigate(1);
      if (event.key === 'ArrowLeft') navigate(-1);
      if (event.key === 'Tab') {
        const dialog = closeRef.current?.closest('[role="dialog"]');
        const controls = dialog?.querySelectorAll<HTMLElement>('button, a[href]');
        if (!controls?.length) return;
        const first = controls[0]; const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); openerRef.current?.focus(); };
  }, [active]);

  return <section id="competicoes" className="relative overflow-hidden border-y border-slate-800/80 bg-slate-900/35 py-20 sm:py-24"><div className="pointer-events-none absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" /><div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end"><div><div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300"><Flag className="h-3.5 w-3.5" aria-hidden="true" />Competições em ação</div><h2 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">É na arena que engenharia, estratégia e velocidade se encontram</h2></div><p className="max-w-xl text-base leading-7 text-slate-400 lg:justify-self-end">Clique nas imagem para ampliar e navegar pela galeria de competições.</p></div>
    <div className="mt-12 grid gap-5 lg:grid-cols-12">{items.map((item, index) => { const Icon = item.icon; return <motion.article key={item.title} initial={reduceMotion ? false : { opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`group relative min-h-[390px] overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-xl shadow-black/20 transition-colors hover:border-blue-500/40 ${index === 2 ? 'lg:col-span-6' : 'lg:col-span-3'}`}>
      <img src={item.image} alt="" loading="lazy" decoding="async" referrerPolicy="no-referrer" onError={fallback} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]" /><div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/5" /><button type="button" onClick={(event) => open(index, event.currentTarget)} aria-label={`Ampliar imagem: ${item.title}`} className="absolute inset-0 z-10 cursor-zoom-in"><span className="sr-only">Ampliar imagem</span></button>
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between p-5"><span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-200 backdrop-blur">{item.eyebrow}</span><span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-blue-300 backdrop-blur"><Icon className="h-5 w-5" aria-hidden="true" /></span></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 sm:p-7"><h3 className="text-xl font-extrabold leading-snug text-white sm:text-2xl">{item.title}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-slate-300">{item.subtitle}</p></div>
    </motion.article>; })}</div>
  </div>
  <AnimatePresence>{active !== null ? <motion.div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-3 backdrop-blur-md sm:p-6" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) close(); }}><motion.div role="dialog" aria-modal="true" aria-labelledby="gallery-title" aria-describedby="gallery-description" className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl" initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }}>
    <button ref={closeRef} type="button" onClick={close} aria-label="Fechar galeria" className="absolute right-3 top-3 z-20 rounded-full border border-white/15 bg-slate-950/80 p-2.5 text-white backdrop-blur hover:bg-slate-800"><X className="h-5 w-5" aria-hidden="true" /></button><img src={items[active].image} alt={`Competição ${items[active].title}`} onError={fallback} referrerPolicy="no-referrer" className="max-h-[65vh] w-full bg-slate-900 object-contain" />
    <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-300">{items[active].eyebrow} • {active + 1} de {items.length}</p><h3 id="gallery-title" className="mt-2 text-xl font-extrabold text-white sm:text-2xl">{items[active].title}</h3><p id="gallery-description" className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">{items[active].subtitle}</p></div><div className="flex shrink-0 gap-2"><button type="button" onClick={() => navigate(-1)} aria-label="Imagem anterior" className="rounded-xl border border-slate-700 p-3 text-slate-200 hover:bg-slate-800"><ArrowLeft className="h-5 w-5" aria-hidden="true" /></button><button type="button" onClick={() => navigate(1)} aria-label="Próxima imagem" className="rounded-xl border border-slate-700 p-3 text-slate-200 hover:bg-slate-800"><ArrowRight className="h-5 w-5" aria-hidden="true" /></button></div></div>
  </motion.div></motion.div> : null}</AnimatePresence>
  </section>;
};
