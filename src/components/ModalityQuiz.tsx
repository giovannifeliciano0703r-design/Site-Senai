import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import type { ModalityId } from '../types';

type Modality = 'FLL' | 'FTC' | 'FRC';
type Answer = { label: string; scores: Record<Modality, number> };
const score = (fll: number, ftc: number, frc: number): Record<Modality, number> => ({ FLL: fll, FTC: ftc, FRC: frc });
const questions: { prompt: string; answers: Answer[] }[] = [
  { prompt: 'Qual é a faixa etária do participante?', answers: [{ label: '5 a 11 anos', scores: score(4, 0, 0) }, { label: '12 a 13 anos', scores: score(2, 4, 0) }, { label: '14 a 16 anos', scores: score(1, 3, 4) }, { label: '17 a 18 anos', scores: score(0, 3, 4) }] },
  { prompt: 'Qual formato você quer conhecer?', answers: [{ label: 'Robótica lúdica com tecnologia LEGO', scores: score(4, 0, 0) }, { label: 'Robô em escala de sala de aula', scores: score(0, 4, 1) }, { label: 'Robô de porte industrial', scores: score(0, 1, 4) }] },
  { prompt: 'Qual faixa escolar corresponde ao participante?', answers: [{ label: 'Graus K–6', scores: score(4, 0, 0) }, { label: 'Graus 7–8', scores: score(2, 4, 0) }, { label: 'Graus 9–12', scores: score(0, 3, 4) }] },
  { prompt: 'Qual ambiente de programação interessa mais?', answers: [{ label: 'Tecnologia LEGO e missões autônomas', scores: score(4, 0, 0) }, { label: 'Blocks, OnBot Java ou Android Studio', scores: score(0, 4, 1) }, { label: 'WPILib com Java, C++ ou Python', scores: score(0, 1, 4) }] },
  { prompt: 'Qual experiência você procura?', answers: [{ label: 'Aprendizado lúdico em equipe', scores: score(4, 0, 0) }, { label: 'Desafio anual com robô de sala de aula', scores: score(0, 4, 1) }, { label: 'Engenharia complexa com mentores e alianças', scores: score(0, 1, 4) }] },
];
const copy: Record<Modality, { title: string; description: string; color: string }> = {
  FLL: { title: 'Programa correspondente: FLL', description: 'A FIRST LEGO League atende idades de 5 a 16 anos, variando por região, com experiências de STEM adequadas à idade e robótica lúdica em equipe.', color: 'text-blue-300' },
  FTC: { title: 'Programa correspondente: FTC', description: 'A FIRST Tech Challenge atende idades de 12 a 18 anos; participantes projetam e constroem um robô em escala de sala de aula para um desafio anual.', color: 'text-blue-300' },
  FRC: { title: 'Programa correspondente: FRC', description: 'A FIRST Robotics Competition atende idades de 14 a 18 anos e envolve robôs de porte industrial, mentoria e um jogo anual em alianças.', color: 'text-blue-300' },
};

const modalityIds: Record<Modality, ModalityId> = { FLL: 'fll', FTC: 'ftc', FRC: 'frc' };

const calculateResult = (answers: number[]): Modality => {
  const totals = answers.reduce<Record<Modality, number>>((sum, answer, index) => {
    const points = questions[index].answers[answer].scores;
    (Object.keys(sum) as Modality[]).forEach((key) => { sum[key] += points[key]; });
    return sum;
  }, { FLL: 0, FTC: 0, FRC: 0 });

  return (Object.keys(totals) as Modality[]).reduce((best, item) => totals[item] > totals[best] ? item : best, 'FLL');
};

interface ModalityQuizProps {
  onResult: (result: ModalityId) => void;
}

export const ModalityQuiz: React.FC<ModalityQuizProps> = ({ onResult }) => {
  const [answers, setAnswers] = useState<number[]>([]);
  const reduceMotion = useReducedMotion();
  const step = answers.length;
  const complete = step === questions.length;
  const result = calculateResult(answers);
  const chooseAnswer = (answer: number) => {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    if (nextAnswers.length === questions.length) {
      onResult(modalityIds[calculateResult(nextAnswers)]);
      window.requestAnimationFrame(() => {
        document.getElementById('comparacao')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        document.getElementById('comparison-title')?.focus({ preventScroll: true });
      });
    }
  };

  return <section id="quiz" className="relative overflow-hidden py-20 sm:py-24"><div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" /><div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
    <div className="mb-8 text-center"><span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-300"><Sparkles className="h-3.5 w-3.5" aria-hidden="true" />Guia de programas</span><h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">Qual programa FIRST corresponde às suas respostas?</h2><p className="mt-3 text-slate-400">Compare faixas etárias, séries escolares e características de cada programa.</p></div>
    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-2xl shadow-black/20 sm:p-8"><div className="mb-7 flex items-center justify-between gap-4"><span className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{complete ? 'Resultado' : `Pergunta ${step + 1} de ${questions.length}`}</span><div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800" aria-hidden="true"><div className="h-full rounded-full bg-blue-500 transition-[width]" style={{ width: `${(step / questions.length) * 100}%` }} /></div></div>
      <AnimatePresence mode="wait">{complete ? <motion.div key="result" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="py-5 text-center" aria-live="polite"><div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-400/30 bg-blue-500/10 font-mono-tech text-3xl font-bold text-white">{result}</div><h3 className={`mt-6 text-2xl font-extrabold ${copy[result].color}`}>{copy[result].title}</h3><p className="mx-auto mt-3 max-w-xl leading-7 text-slate-300">{copy[result].description}</p><p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-500">O guia logo abaixo já está selecionado nesta modalidade. Resultado orientativo; confirme idade e disponibilidade com o parceiro regional da FIRST.</p><div className="mt-7 flex justify-center"><button type="button" onClick={() => setAnswers([])} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 px-5 py-3 text-sm font-bold text-slate-200 hover:bg-slate-800"><RotateCcw className="h-4 w-4" aria-hidden="true" />Refazer quiz</button></div></motion.div> :
      <motion.div key={step} initial={reduceMotion ? false : { opacity: 0, x: 14 }} animate={{ opacity: 1, x: 0 }} exit={reduceMotion ? undefined : { opacity: 0, x: -14 }}><h3 className="text-xl font-extrabold text-white sm:text-2xl">{questions[step].prompt}</h3><div className="mt-6 grid gap-3">{questions[step].answers.map((answer, index) => <button key={answer.label} type="button" onClick={() => chooseAnswer(index)} className="group flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-left text-sm font-semibold text-slate-200 transition-colors hover:border-blue-500/40 hover:bg-blue-500/[0.07] sm:p-5"><span>{answer.label}</span><ArrowRight className="h-4 w-4 shrink-0 text-slate-600 group-hover:text-blue-300" aria-hidden="true" /></button>)}</div>{step > 0 ? <button type="button" onClick={() => setAnswers((current) => current.slice(0, -1))} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-300"><ArrowLeft className="h-4 w-4" aria-hidden="true" />Voltar</button> : null}</motion.div>}</AnimatePresence>
    </div>
  </div></section>;
};
