import React from 'react';
import { Globe2, Lightbulb, Search, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { VALUES } from '../data/roboticsData';

const iconMap = {
  Search,
  Users,
  Lightbulb,
  Globe2,
} as const;

export const Values: React.FC = () => {
  return (
    <section id="valores" className="py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-blue-400">Valores essenciais FIRST</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Princípios que orientam a comunidade</h2>
          <p className="mt-4 text-base leading-7 text-slate-400">
            A FIRST define valores essenciais que incluem descoberta, inovação, impacto, inclusão, trabalho em equipe e diversão.
          </p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-800 bg-slate-800 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, index) => {
            const Icon = iconMap[value.iconName as keyof typeof iconMap] ?? Lightbulb;
            return (
              <motion.article
                key={value.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                className="bg-slate-950 p-6 sm:p-7"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-blue-400">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{value.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{value.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
