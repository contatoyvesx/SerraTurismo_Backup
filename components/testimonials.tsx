import { Check, HeartHandshake, MessageCircle, Route, Sparkles } from "lucide-react"

const benefits = [
  {
    icon: MessageCircle,
    title: "Atendimento próximo",
    text: "Tire suas dúvidas e converse sobre o que você espera da viagem.",
  },
  {
    icon: Route,
    title: "Roteiro alinhado a você",
    text: "Consulte opções de passeios e organize melhor seus dias na serra.",
  },
  {
    icon: HeartHandshake,
    title: "Orientação do início ao fim",
    text: "Receba informações para decidir com mais tranquilidade antes de reservar.",
  },
]

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-space overflow-hidden bg-violet-950 text-white">
      <div className="container mx-auto px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold tracking-wide text-amber-200">
              <Sparkles size={14} aria-hidden="true" /> VIAJE COM MAIS TRANQUILIDADE
            </span>
            <h2 className="mt-6 font-serif text-4xl font-medium leading-tight tracking-tight md:text-5xl">
              A viagem é sua.
              <br />
              <span className="text-gold-gradient italic">O cuidado também.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/70">
              Planejar fica mais simples quando você pode conversar, comparar opções e esclarecer os detalhes antes de decidir.
            </p>
            <a
              href={"https://wa.me/5551981699277?text=" + encodeURIComponent("Olá! Quero ajuda para organizar minha viagem pela Serra Gaúcha.")}
              target="_blank"
              rel="noopener noreferrer"
              className="button-gold mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold transition hover:-translate-y-0.5"
            >
              Converse com a gente <MessageCircle size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <article key={benefit.title} className="benefit-row flex gap-5 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm md:p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-200/10 text-amber-200">
                  <benefit.icon size={23} strokeWidth={1.7} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{benefit.text}</p>
                </div>
                <Check className="ml-auto mt-1 hidden shrink-0 text-amber-200 sm:block" size={18} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
