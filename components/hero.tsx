import { ArrowRight, MapPin, MessageCircle } from "lucide-react"

const whatsappLink =
  "https://wa.me/5551981699277?text=" +
  encodeURIComponent("Olá! Quero ajuda para planejar uma viagem pela Serra Gaúcha.")

export function Hero() {
  return (
    <section id="inicio" className="hero-section overflow-hidden bg-[#f8f6f1]">
      <div className="container mx-auto grid min-h-[calc(100svh-4.5rem)] max-w-7xl items-center gap-10 px-5 pb-12 pt-28 md:px-8 md:pb-16 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:pt-28">
        <div className="relative z-10 py-5 lg:py-10">
          <div className="mb-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6a37] sm:text-sm">
            <span className="h-px w-8 bg-[#b7955c]" />
            HA Serra Turismo · Rio Grande do Sul
          </div>

          <h1 className="max-w-2xl font-serif text-[2.8rem] font-medium leading-[1.04] tracking-[-0.04em] text-[#27222a] sm:text-6xl lg:text-[4.35rem]">
            A serra tem um jeito especial de{" "}
            <span className="italic text-[#82633c]">ficar na memória.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-stone-600 sm:text-lg sm:leading-8">
            Descubra Gramado, Canela e os encantos da Serra Gaúcha com passeios, transfers e experiências planejadas para você.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-gold group inline-flex min-h-13 items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold"
            >
              Planejar minha viagem
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#destinos"
              className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-semibold text-stone-700 transition hover:text-[#82633c]"
            >
              Conhecer os passeios
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3 border-t border-stone-200 pt-5 text-sm text-stone-500">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#82633c] shadow-sm">
              <MessageCircle size={17} aria-hidden="true" />
            </span>
            <span>Atendimento próximo, direto pelo WhatsApp.</span>
          </div>
        </div>

        <div className="hero-visual relative mx-auto w-full max-w-[39rem] lg:ml-auto">
          <div className="hero-photo relative aspect-[4/4.5] overflow-hidden rounded-[1.7rem] bg-stone-200 sm:aspect-[5/4.7] lg:aspect-[4/4.8] lg:rounded-[2rem]">
            <img
              src="/stunning-mountain-landscape-at-golden-hour-with-dr.jpg"
              alt="Paisagem de montanhas da Serra Gaúcha ao entardecer"
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-white/85">
                <MapPin size={14} aria-hidden="true" />
                Gramado · Canela · Serra Gaúcha
              </span>
              <p className="mt-2 max-w-sm font-serif text-2xl leading-tight sm:text-3xl">
                Viaje sem pressa. Aproveite cada detalhe.
              </p>
            </div>
          </div>

          <div className="hero-note absolute -bottom-4 left-4 flex max-w-[15rem] items-center gap-3 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_16px_45px_rgba(40,30,20,0.12)] sm:-left-7 sm:bottom-8 sm:max-w-[17rem] sm:p-5">
            <span className="h-10 w-1 shrink-0 rounded-full bg-[#b7955c]" aria-hidden="true" />
            <div>
              <p className="font-serif text-base font-semibold text-stone-800">Sua viagem, do seu jeito</p>
              <p className="mt-1 text-xs leading-5 text-stone-500">Passeios e roteiros para combinar com seus planos.</p>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-5 -top-5 -z-0 h-24 w-24 rounded-full border border-[#d7c7aa] sm:-right-7 sm:-top-7 sm:h-32 sm:w-32" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
