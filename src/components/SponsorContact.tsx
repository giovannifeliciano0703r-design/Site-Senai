import React, { useEffect, useState } from 'react';
import {
  HeartHandshake,
  Mail,
  Send,
} from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const sponsorTeams = [
  {
    name: 'Federal Force',
    number: 'FRC 10466',
    email: 'federalforce10466@gmail.com',
    logo: '/logos/teams/federal-force.jpg',
    logoFrame: 'bg-slate-950',
    logoShape: 'rounded-[0.55rem]',
  },
  {
    name: "Robot's District",
    number: 'FRC 9484',
    email: null,
    logo: '/logos/teams/robots-district.jpg',
    logoFrame: 'bg-[#351547]',
    logoShape: 'rounded-full',
  },
] as const;

const contactTopics = [
  {
    label: 'Financiamento',
    subject: 'Proposta de patrocínio financeiro',
    message: 'Olá, equipe! Gostaria de conversar sobre apoio financeiro e conhecer as possibilidades de patrocínio.',
  },
  {
    label: 'Mentoria',
    subject: 'Proposta de mentoria e voluntariado',
    message: 'Olá, equipe! Gostaria de conversar sobre mentoria e voluntariado e saber como posso apoiar vocês.',
  },
  {
    label: 'Tecnologia',
    subject: 'Apoio com tecnologia e equipamentos',
    message: 'Olá, equipe! Gostaria de conversar sobre apoio com tecnologia e equipamentos para os projetos da equipe.',
  },
] as const;

export const SponsorContact: React.FC = () => {
  const [selectedTeamIndex, setSelectedTeamIndex] = useState(0);
  const [selectedTopicIndex, setSelectedTopicIndex] = useState(0);
  const [isInteractionPaused, setIsInteractionPaused] = useState(false);
  const reduceMotion = useReducedMotion();

  const selectedTeam = sponsorTeams[selectedTeamIndex];
  const selectedTopic = contactTopics[selectedTopicIndex];
  const emailHref = selectedTeam.email
    ? `mailto:${selectedTeam.email}?subject=${encodeURIComponent(selectedTopic.subject)}&body=${encodeURIComponent(selectedTopic.message)}`
    : null;

  useEffect(() => {
    if (isInteractionPaused) return;

    const timer = window.setTimeout(() => {
      setSelectedTopicIndex((current) => (current + 1) % contactTopics.length);
    }, 9000);

    return () => window.clearTimeout(timer);
  }, [isInteractionPaused, selectedTeamIndex, selectedTopicIndex]);

  const showTopic = (index: number) => {
    setSelectedTopicIndex((index + contactTopics.length) % contactTopics.length);
  };

  return (
    <div id="patrocine" className="mt-20 scroll-mt-8 border-t border-slate-800/80 pt-20 sm:mt-24 sm:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
            <HeartHandshake className="h-3.5 w-3.5" aria-hidden="true" />
            Apoie uma equipe
          </div>

          <h2 className="mt-5 max-w-xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Quer patrocinar quem transforma ideias em robôs?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            A FIRST informa que patrocinadores podem contribuir com financiamento de equipes e eventos, mentoria, voluntariado, tecnologia e equipamentos. Escolha uma equipe e prepare o contato por e-mail.
          </p>

          <fieldset className="mt-8">
            <legend className="text-sm font-bold text-white">Com qual equipe você quer falar?</legend>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              {sponsorTeams.map((team, index) => {
                const isSelected = selectedTeamIndex === index;

                return (
                  <button
                    key={team.number}
                    type="button"
                    onClick={() => {
                      setSelectedTeamIndex(index);
                      setSelectedTopicIndex(0);
                    }}
                    aria-pressed={isSelected}
                    className={`flex min-h-14 flex-1 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                      isSelected
                        ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/15 to-slate-900/80 text-white shadow-lg shadow-blue-950/20'
                        : 'border-slate-800 bg-slate-900/45 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 ${team.logoFrame}`}>
                      <img
                        src={team.logo}
                        alt={`Logo da equipe ${team.name}`}
                        className={`h-full w-full object-cover ${team.logoShape}`}
                      />
                    </span>
                    <span>
                      <span className="block text-sm font-bold">{team.name}</span>
                      <span className="mt-0.5 block break-all text-xs text-slate-400">
                        {team.email ?? 'E-mail a definir'}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

        </div>

        <div className="mx-auto w-full max-w-[390px]" aria-label="Demonstração interativa de contato por e-mail">
          <div className="relative rounded-[3rem] border-[10px] border-slate-800 bg-slate-950 p-2 shadow-2xl shadow-blue-950/40 ring-1 ring-blue-500/20">
            <div className="absolute left-1/2 top-0 z-20 h-7 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-950" aria-hidden="true" />

            <div className="relative min-h-[610px] overflow-hidden rounded-[2.15rem] border border-white/5 bg-[#071526]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_12%,rgba(59,130,246,0.15),transparent_35%),radial-gradient(circle_at_0%_100%,rgba(30,64,175,0.18),transparent_40%)]" />

              <div className="relative flex items-center gap-3 border-b border-white/5 bg-slate-900/80 px-5 pb-4 pt-10 backdrop-blur">
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-blue-400/40 p-0.5 ${selectedTeam.logoFrame}`}>
                  <img
                    src={selectedTeam.logo}
                    alt={`Logo da equipe ${selectedTeam.name}`}
                    className={`h-full w-full object-cover ${selectedTeam.logoShape}`}
                  />
                </span>
                <div className="min-w-0 flex-1" aria-live="polite">
                  <p className="truncate text-sm font-extrabold text-white">{selectedTeam.name}</p>
                  <p className="truncate text-xs text-slate-400">{selectedTeam.number} · Contato por e-mail</p>
                </div>
                <Mail className="h-5 w-5 shrink-0 text-blue-300" aria-hidden="true" />
              </div>

              <div
                className="relative flex min-h-[440px] flex-col px-5 py-6"
                onMouseEnter={() => setIsInteractionPaused(true)}
                onMouseLeave={() => setIsInteractionPaused(false)}
                onFocusCapture={() => setIsInteractionPaused(true)}
                onBlurCapture={() => setIsInteractionPaused(false)}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.13em] text-slate-400">
                    Novo e-mail · simulação
                  </div>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${selectedTeam.number}-${selectedTopic.label}`}
                    initial={reduceMotion ? false : { opacity: 0, x: 90 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -90 }}
                    transition={{ duration: reduceMotion ? 0 : 0.65, ease: 'easeInOut' }}
                    drag={reduceMotion ? false : 'x'}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -45) showTopic(selectedTopicIndex + 1);
                      if (info.offset.x > 45) showTopic(selectedTopicIndex - 1);
                    }}
                    className="mt-5 cursor-grab overflow-hidden rounded-2xl border border-white/10 bg-slate-900/75 active:cursor-grabbing"
                  >
                    <div className="flex items-start gap-3 border-b border-white/10 px-4 py-3 text-xs">
                      <span className="w-14 shrink-0 font-bold text-slate-500">Para</span>
                      <span className={`break-all font-semibold ${selectedTeam.email ? 'text-blue-200' : 'text-slate-400'}`}>
                        {selectedTeam.email ?? 'E-mail a definir'}
                      </span>
                    </div>
                    <div className="flex items-start gap-3 border-b border-white/10 px-4 py-3 text-xs">
                      <span className="w-14 shrink-0 font-bold text-slate-500">Assunto</span>
                      <span className="font-semibold text-slate-200">{selectedTopic.subject}</span>
                    </div>
                    <div className="min-h-32 px-4 py-4 text-sm leading-6 text-slate-300">
                      {selectedTopic.message}
                      <p className="mt-5 text-slate-500">Atenciosamente,</p>
                      <p className="text-slate-500">[Seu nome ou empresa]</p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-auto flex items-center justify-between gap-4 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-slate-500">
                    {selectedTopic.label} · {selectedTopicIndex + 1} de {contactTopics.length}
                  </p>
                  <div className="flex gap-2" aria-label="Exemplos de e-mail">
                    {contactTopics.map((topic, index) => (
                      <button
                        key={topic.label}
                        type="button"
                        onClick={() => showTopic(index)}
                        aria-label={`Mostrar exemplo sobre ${topic.label}`}
                        aria-current={selectedTopicIndex === index ? 'true' : undefined}
                        className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                          selectedTopicIndex === index ? 'w-6 bg-blue-400' : 'w-2 bg-slate-600 hover:bg-slate-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {emailHref ? (
                  <a
                    href={emailHref}
                    className="mt-5 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 text-sm font-extrabold text-white shadow-lg shadow-blue-950/30 transition-all hover:scale-[1.02] hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 motion-reduce:transform-none"
                    aria-label={`Preparar e-mail para a equipe ${selectedTeam.name}`}
                  >
                    Preparar e-mail
                    <Send className="h-4 w-4" aria-hidden="true" />
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="mt-5 flex min-h-12 w-full cursor-not-allowed items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-extrabold text-slate-500"
                  >
                    E-mail ainda não informado
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-xs leading-5 text-slate-500">
            Os exemplos avançam a cada 9 segundos e podem ser arrastados para o lado. O envio acontece no aplicativo de e-mail do visitante.
          </p>
        </div>
      </div>
    </div>
  );
};
