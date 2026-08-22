import React, { useEffect, useState } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Comparar', href: '#comparacao' },
  { label: 'Quiz', href: '#quiz' },
  { label: 'Equipes', href: '#equipes' },
  { label: 'Habilidades', href: '#valores' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-800/80 bg-slate-950/90 py-3 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'border-transparent bg-slate-950/50 py-4 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="group flex items-center gap-3 rounded-xl"
          aria-label="Voltar ao início"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition-colors group-hover:bg-blue-500/20">
            <Cpu className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm font-extrabold tracking-tight text-white sm:text-base">
              <span>FIRST</span>
              <span className="h-4 w-px bg-slate-700" aria-hidden="true" />
              <span className="text-blue-400">SENAI</span>
            </div>
            <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Robótica e educação
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#modalidades"
            className="ml-3 rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
          >
            Explorar modalidades
          </a>
        </nav>

        <button
          type="button"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-lg border border-slate-800 bg-slate-900/80 p-2 text-slate-200 md:hidden"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          className="mx-4 mt-3 rounded-2xl border border-slate-800 bg-slate-950/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl md:hidden"
          aria-label="Navegação móvel"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};
