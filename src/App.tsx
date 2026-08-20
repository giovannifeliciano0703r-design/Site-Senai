/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutFirst } from './components/AboutFirst';
import { Modalities } from './components/Modalities';
import { Comparison } from './components/Comparison';
import { Values } from './components/Values';
import { SenaiFirst } from './components/SenaiFirst';
import { Teams } from './components/Teams';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutFirst />
        <Modalities />
        <Comparison />
        <Values />
        <SenaiFirst />
        <Teams />
      </main>
      <Footer />
    </div>
  );
}
