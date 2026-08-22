/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Hero } from './components/Hero';
import { AboutFirst } from './components/AboutFirst';
import { Modalities } from './components/Modalities';
import { VisualGallery } from './components/VisualGallery';
import { ArenaRobots } from './components/ArenaRobots';
import { Comparison } from './components/Comparison';
import { ModalityQuiz } from './components/ModalityQuiz';
import { Values } from './components/Values';
import { SenaiFirst } from './components/SenaiFirst';
import { Teams } from './components/Teams';
import { Footer } from './components/Footer';
import type { ModalityId } from './types';

export default function App() {
  const [selectedModality, setSelectedModality] = React.useState<ModalityId>('fll');

  React.useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;

    const frame = window.requestAnimationFrame(() => {
      document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <main className="flex-grow">
        <Hero />
        <AboutFirst />
        <Modalities />
        <VisualGallery />
        <ArenaRobots />
        <ModalityQuiz onResult={setSelectedModality} />
        <Comparison selected={selectedModality} onSelect={setSelectedModality} />
        <Values />
        <SenaiFirst />
        <Teams />
      </main>
      <Footer />
    </div>
  );
}
