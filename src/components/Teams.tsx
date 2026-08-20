import React from 'react';
import { ArrowUpRight, Instagram, Users } from 'lucide-react';
import { motion } from 'motion/react';

const FEDERAL_FORCE_PHOTO =
  'data:image/webp;base64,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';

const ROBOTS_DISTRICT_PHOTO =
  'data:image/webp;base64,UklGRs4OAABXRUJQVlA4IMIOAADwTQCdASq0AOEAP1mYxFeyKqejrnl6QkArCWZu/HvuUNFyQDTnku2gN1pnXPy52d99fmmDvXu7/+AQ8/ZV9YNYXoEccdhSDsaaTyUdp5D3/Yaa5EI77peIRlKkkfiovwoAXHLPpreq1U2m/eAxWowYKJHMbJATECVA5FTwCq8WJMLsmtPHhZHJa+NYzffrUFx3pkHTX3h3SH/m3uRsRr5f2FeBwSd8bhK5ykbfMZAByN9M4vSIfqgXRkuwMwS+/fiqMVc86USXXxwXpZZJE+NJ2YYNgz6ZtQrOfgPQdaJzYALqv/wKeRD4x06FB6IFLLCUX0x8wLBZeJincZgFXiTwYf2c8CqY8ipxInZVnk3eWqD7/iwEkzsenF//Bh7Okw4Hbj9zAIhFvWMVCzGcVXWKddAYBvLnnTb1S8zFy+/s53coqz60lueZ0fYLUy5pMG/3qhX2Fw0C5DyOc/brfvQcTa9dksxxXt7t4hh3y3AqTsbxQjNW/vmzb/wWhY58lcVTJ4PKUPSp0i+e9UnFuW7hGvQmF5HaXvsfMN/TCexjYwZEnqtYNBCVYN8I7TuE1qYfCJEkJ4NNbVDVhBfOx0S7de6IlyA/rfpzhoTXqt25QXZ+2KPoSqEa21QKDHmgQxCA0+HtqbWZ6qNmIpPVr7lJHBW6n6KNcddE5VJ5yPYbW4QpbzWqhxkwCgNGSki3zTtEN3jIDXCdk3+++piacgGeD9FuA5iLodNX+Iq0AF2xo+9nB6XBzeuWsSgkHsJZeQ9LvpNpBWWlVtQ7qtpAbL9fFabxN7Nbt6ofCL9oMkFjuZdYvWkjSbFZs4QQa1XGTqf+KnGTiSQwAAD+sUqfA6OpCKOLEBUSVweZCrbR1KazirNkORkT/yd9Gnv9+R1NLNuuykEkr/QsWEqiGTAx1NQy/JvIgyq9j/59wvjdkRQnsMHt5FYwnal8uqnH6KPamJe4Tw50EIMFyjT8r6fT4OfSNWAVjQjrROjP3aPnXPGVJMI8QfM+yqZu+4PQqlmCO6pCySO9uhdXh1SEqRsBRXSVrY3WI1NJ9GB7abW2OVTB7AUODsUBb5k+or5yaj6QzzXHR45QZvJEvNlfB4i1FeTepZPeys+ba8S8eKptruRXm/3l/Rr7h6MzVWO0F/mW7TXn0z4ZQ/MLU9OdD6LWjb82A/6FosCXVBi3DONwn+d3MDQ9CSEinSx80IzkNV9ZxfxepaoJPg7KnGwlt+2SefGVOUCdKZ+6uwXAjcq477O0RCFuaJ23HUKSb0bSG4LLp/zMwik6QtohEP6e4mu4CNhO5jJ0PeXLMjopFAkTxV/cehyzsJmx0ZHTGzLnY1UswtFrE5l3nyH9wG1DwZXc7vZefk1UDWbr1K2M7FnN98igCs/qZiyE7M6w8BLc2oZ0pkqNRNxsXcE8LtwVxfwWwB6nbeFDefUi6t7BzT1wc/jp5qs4h4WfYaLtXzJkawFW8nS5ccZFH4jGQcFzqSrDTlXm8q6RtqeWqRJVvnAW4PyISinoNL4SrCHeYAaLQTwhE2p10Sz3kIVLjX6kpO976N1gTMglL8AhdVD81l4SUOcem877i5pKYqA676oq1TJCJ0Mbioi0Uyh64sg9wsb1J5vhVJG+KIPWM64c/6oJ3n6g7qPG5w86kjIZGoCHjK0rdQwozctZj+Neb6KnsuWyXTiWxgl6paVERWJSPlNvq9UcJFQkqAbm3BiKKby2u2ytZ2o4o9S0Q9UMMGXm16Px+/c5/CRx+Y9cCAvIQET4tet4SUJUrlzA7BqhPgN0Z+RoCQOKsceAJ6WvdI62PPCVa1lJJprRnUvyl2Iigp5Xay9f6IivWlnwV0cPIFTQQXKFh2kkltr/85LfxAZ5bsBxlQLxLOP3/UqNFuDCryLf9aketkvYOcIuqmttGvA7njebRd8b52ZlqnJ2otApQpR6ghNlTUev0gSv4b01wrao8BHzMPIVMpxH7esKI7jdTfKopkBWDGmIEnkJpcAIy3C/7+LzgqdNE7J5SJdHAnxzGZ3iWpEs1s9mQSBWVj0oNDPV0UmdDOkbRt4ypj8GmAY29kl1uMl35e3PBcqnUUdQJRFGBwnObZi9MDM3s457Bc2jfZ//nMznJIC9gUfRfDQYzsinxsOwb6Vmpm0xR+5OfjCcP5TQl7e8XcHpduKpXnmoJGepgVrTzWAgWj7ZCIvZtd5Her1Gf1YS11N7ZyLNLSOWKJqud0a4Ogmj+LM6VJHnhOlc0Mg0leSFzS2dhlcfkatTVWbP91cv+Q2usV7HcHbEv6J4NvjtlquORaFchQJxkti83uYEIxaX4UXvca5XuD+3FbaSwTzvDSaOQse7Bqum3uLxbQhlqBWNED7Tt3+wuOEfVSa7RGuZ2ol9AbFxPRHcdt1ze9sxiE7QMweJCtiYw7DCAnTxchuRfIplxtSs8IPN6hgj8k0jhkCIJWZbgJZbglp2CPxIcb3PbOJ5ChZ5HU0HCh3Xi5OBvRBzNeMcpigTqWpRoxxa4QQNSC+wINggYoRpW4HrpH3orRuX3qQCiCFuyNhapfSIVX2ZuaSku1bUGWGFm7TJs/cpyJRbx66/So0BvnN98u1QoCzH62hZieTSHgENa3Vb/+6GX+t5twhh9F4fF+XHrzkp5KT/B2RbHdsNprkbgOQ55v6R3eOp4GKoNmiBXuBqOXAl7kNYIhfxIerYdqtxTjfqGcOR/Km6x4HKsgcG2r5hVJZj+kqsxgbah4CqOiz10C+9wh0+lUxDVfX8p99vzLLOVxgF8zj/Yjv16t3WuQY0FMf6FqpxPaDoRmUcbEEZBFldrC/6V+7FeQ4H72khTlg8wxyDeeIk7K6ncHRPi/epUCDIoutxiL+wFjri8A97mgDDZPaz7cO2AK47x3EWOFpHJJJD+CGzfJISiG7AWE44v+pQk2PPumogAZYKSLwry/rLT3LZEIyfuYhUubDJlC4q3jRJHw0PJOkcROL/SvBXV8KzzjVxUWeeOhZhE8YMm7eLD1exmGcSZFV/1G63kqoXc0UqTiWvcE7HGGMZfIr9+sVrYzY3UcJkCHOmhdWb99TK2pF53Iw9RVz/SrxLb1B/WcElGDLiO7Yw8AjkyGqXVK7McsaX6B0LpRAnaRISmYA8UIX5NNr9k1Y8PiztMV1QFWiaq1IB5ajXuherXGyzO/e+Cd30ZbmYv0ZynC7DptKrpQzm5lyDtOOHBYzUnHPoC8B020xQzyGjaV/JSD9aKr7LQO18VCidjAqL04kPbq0VwmpU24H1smeNd4A33K4g+3lSdT6CHJTGVKw1eqvivJ5ewx1R9DJCuDHHldgbk9soRVPnqqCioenhSd1JbGblybhG+61tCb37VyqqKe3oL91HQ3M2K93tA5hxWNdctrBUlxut7/9MBqyvogbu9q7Wfx0mcz1VUCQKwmWGMjtwQmpGEeW9+RvWa6Qxvwz78qnJcl/VPy3NJ4UcuemL72Ey0eWuJ74BjCLny2n5Vwoae3xMarx+8e2LBDwt4ibuYxyTx/nMAYJ8b2uR7kyI9keaKGUTdEi4hUZAw89a5kjFkifsV43lx04qYAJaD9nE9jentWBKx7pyVxy5Zm7gQ9rGh218ZJzL6pMd2e5F8kO6cWRlL5gc5yPIBgikckYO2ew5m0Q1hCRINJZx7pFYTKE09Ur4OcR84pPvrurcETOxeFwoxcJ0nDE75T6C9vOgJkHDng9tuFfy0Wti8oqwn+0PcNMTylXL0wXLxnwfYKpLdTTa3xbyvHFHQWkW0HqL9cA/6XnjiCJILTgk6UOyioGGcXyyURFp02dC9Z3V5JfkFlebTDhhqEonyQNPX9Pp7caz1DwEKy9d1fIETvdBupFe0BC7/SEjld0L746uc5d9Mk3Hd7KgbU9gttpcR/cgKt0q8rkamgd2bPQpIuaF5BmVEt3jrVGdvggbtoQtHIhobRs0Dr2U9OciostNyZwMVwnTm0pjRppVoZacBRUIvs5uMcZmoiBN2Z6q2sU+5lIZiHJSKLBmc9btqEWcSzxJ48ZK2vlQwK6haSf4Z7ZQzl1smrBnB5fef0tMdgXtX779PkOtgrQpmlsdE7Hkg69e2xB7RGzMXyjohdnsWN4n5olgEjncCC/kLLGpX7RS2CUZJcHoHdqE4XOsTenjBh/0Q3ZbxosPNkEpUNs1BYEG5vAT5KSTQIfP2Nh/98O07pJMS+DSWvI0oJukxbCEyi1SWCuUspyGssjQ/EySIhlJA7GLMAjEwcciqHtW1gTOkeEctc3D+ww/kT8W91gz0IgQxid86QpTSTkmUhxaYg2ki590glv4Q8MkLVPZ4pQ/gujTZynQ1cmtiwBbjX+QGFsNuigkZJkjYPLxdx1r3GViKad1jdCLP9Bh5F+6X5v2lb8rik0fl5ybsLF7ThcvskJeC0VRZWe2YDJsMGK1KlDFUAz36Km0ahzo0t2+w8CIiZm1GrjNCS7c+ag3rQ5bucl2k+nXqCjXC8eoekfvrPcLYQ72zbM1GIXOFIo6LSKxYtHODKvjxjgGwb4pL/wviJWkZ7+1dH6JXjmM5whwXhjJWEYRWJxCaawKeuRqPWhkNMkW0w7RunSB0NzpatJmEMlRGqOfT7RqnKx3ykHYL2T+NsN5UtmjAi/AsCdUErkRYz83cZ7g4MaqPAH4KhekXsosUytgJIQ40yZz/Sz6PkRjci9YZXAJUOKgd0Spvn74Hp9RFfQETCFqSy3hJXkLljGh6UrcUnSPXKvEvb6frFQfpwvtciN6LCQrrcYV5B1uxdebR8p8jeA2D4OK0MLUU3bQihjXrty+9mtX5/lId4dxq1ciUdEicxXXrT9kwlX/tgtRS1Kmd0+G6V0INPyP/wfyCJbqyWfIFSZf9ehilBwITx58+83nyGYTB2WyRVAnGFKwaBOSgQksL3jg4kF0SChy9hpDgJNIRBQ5nmZApI/VTjdshr2aMphQDjnyBP92MPeVta/byFWBQ1ZvrSYk1rwV9S2UHXLamGBJCl+9uVYIVS25ah9KeAfWThFLWPgcyyR8pWlhZX+oAAAA=';

const teams = [
  {
    name: 'Federal Force',
    number: 'FRC 10466',
    instagram: 'https://www.instagram.com/frc10466/',
    handle: '@frc10466',
    photo: FEDERAL_FORCE_PHOTO,
    description:
      'Equipe de robótica do SENAI que participa da FIRST Robotics Competition, unindo engenharia, programação, estratégia e trabalho em equipe.',
  },
  {
    name: "Robot's District",
    number: 'FRC 9484',
    instagram: 'https://www.instagram.com/frc9484/',
    handle: '@frc9484',
    photo: ROBOTS_DISTRICT_PHOTO,
    description:
      'Equipe de robótica do SENAI voltada aos desafios da FIRST Robotics Competition e ao desenvolvimento de soluções técnicas em equipe.',
  },
];

export const Teams: React.FC = () => {
  return (
    <section id="equipes" className="relative overflow-hidden bg-slate-950 py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-300">
            <Users className="h-3.5 w-3.5" aria-hidden="true" />
            Equipes SENAI
          </div>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Conheça quem transforma projeto em competição
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Federal Force e Robot's District representam o SENAI no universo da FIRST Robotics Competition.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {teams.map((team, index) => (
            <motion.article
              key={team.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 shadow-xl shadow-black/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-500/30 hover:shadow-blue-950/20"
            >
              <div className="relative h-64 overflow-hidden border-b border-slate-800 bg-slate-900 sm:h-72">
                <img
                  src={team.photo}
                  alt={`Equipe ${team.name}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-slate-950/75 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-300 backdrop-blur">
                  {team.number}
                </div>
              </div>

              <div className="p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white">{team.name}</h3>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-blue-400">Equipe SENAI</p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/10 text-pink-300">
                    <Instagram className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-400 sm:text-base">{team.description}</p>

                <a
                  href={team.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm font-bold text-white transition-all hover:border-pink-500/40 hover:bg-slate-900"
                  aria-label={`Abrir Instagram da equipe ${team.name}`}
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  {team.handle}
                  <ArrowUpRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
