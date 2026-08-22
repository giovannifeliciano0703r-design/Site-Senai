import React from 'react';

const partnerLinks = [
  {
    name: 'SENAI',
    href: 'https://www.sistemafibra.org.br/senai/40-noticias/destaques/1836-alunos-do-sesi-e-do-senai-df-vivem-o-sonho-do-mundial-de-robotica',
    logo: '/logos/senai-logo-transparent.png',
    logoClassName: 'h-11 sm:h-12',
  },
  {
    name: 'FIRST',
    href: 'https://www.firstinspires.org/programs/frc/',
    logo: '/logos/first-logo-transparent.png',
    logoClassName: 'h-9 sm:h-10',
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
            Conheça as instituições
          </p>

          <div className="mt-5 flex w-full max-w-lg items-center justify-center gap-10">
            {partnerLinks.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Acessar página do ${partner.name}`}
                title={`Acessar ${partner.name}`}
                className="group inline-flex items-center justify-center rounded-xl p-2 transition-transform duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className={`${partner.logoClassName} w-auto max-w-full object-contain transition-transform duration-200 group-hover:scale-[1.03]`}
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-base font-bold text-slate-100 sm:text-lg">
              Projeto educacional sobre competições FIRST
            </p>
            <p className="mt-2 text-sm font-medium text-slate-400">
              Criado por <span className="font-semibold text-white">Giovanni Feliciano</span>
            </p>
          </div>

          <p className="mt-5 max-w-xl text-xs leading-5 text-slate-600">
            Clique nas logos para conhecer mais sobre o SENAI e a FIRST Robotics Competition.
          </p>
        </div>

        <div className="mt-9 flex flex-col gap-2 border-t border-slate-900 pt-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Giovanni Feliciano</span>
          <span>Robótica • Educação • Tecnologia</span>
        </div>
      </div>
    </footer>
  );
};
