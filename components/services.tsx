import { ArrowUpRight, Map, MoonStar, TrainFront, Wine } from "lucide-react"

const services = [
  {
    icon: TrainFront,
    title: "Uva e Vinho + Trem",
    desc: "Uma jornada por tradições, paisagens e sabores da região dos vinhedos.",
    number: "01",
  },
  {
    icon: MoonStar,
    title: "Noite Alemã",
    desc: "Uma noite temática para conhecer a gastronomia e a cultura local.",
    number: "02",
  },
  {
    icon: Map,
    title: "City Tour",
    desc: "Um roteiro para conhecer os principais pontos de Gramado e Canela.",
    number: "03",
  },
]

const whatsapp = "5551981699277"
const makeLink = (title: string) =>
  "https://wa.me/" + whatsapp + "?text=" +
  encodeURIComponent("Olá! Quero informações e disponibilidade para: " + title + ".")

export function Services() {
  return (
    <section id="servicos" className="section-space relative overflow-hidden bg-white">
      <div className="absolute -right-32 top-10 h-80 w-80 rounded-full bg-amber-100/60 blur-3xl" aria-hidden="true" />
      <div className="container relative mx-auto px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="section-kicker"><Wine size={14} aria-hidden="true" /> EXPERIÊNCIAS PARA VOCÊ</span>
            <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
              Viva a serra do seu jeito.
            </h2>
          </div>
          <p className="max-w-md text-base leading-7 text-stone-600">
            Conte o que você tem vontade de conhecer. A gente ajuda a encontrar a experiência ideal para seu roteiro.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="service-card rounded-[1.6rem] border border-stone-200 bg-stone-50/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-white hover:shadow-xl hover:shadow-violet-950/5 md:p-8">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100 text-violet-800">
                  <service.icon size={25} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <span className="font-serif text-3xl text-stone-300">{service.number}</span>
              </div>
              <h3 className="mt-7 font-serif text-2xl font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-stone-600">{service.desc}</p>
              <a href={makeLink(service.title)} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-800 transition hover:gap-3">
                Consultar detalhes <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
