import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react"

const whatsappLink =
  "https://wa.me/5551981699277?text=" +
  encodeURIComponent("Olá! Quero ajuda para organizar minha viagem pela Serra Gaúcha.")

export function Hero() {
  return (
    <section id="inicio" className="hero-section relative flex min-h-[92svh] items-center overflow-hidden bg-stone-950">
      <div className="hero-image absolute inset-0" aria-hidden="true">
        <img
          src="/stunning-mountain-landscape-at-golden-hour-with-dr.jpg"
          alt=""
          fetchPriority="high"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="hero-glow absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-violet-700/20 blur-3xl" aria-hidden="true" />

      <div className="container relative z-10 mx-auto px-5 pb-20 pt-36 md:px-8 md:pb-28 md:pt-44">
        <div className="max-w-4xl text-white">
          <div className="eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md md:text-sm">
            <Sparkles size={15} className="text-amber-300" aria-hidden="true" />
            Sua próxima história começa na Serra Gaúcha
          </div>

          <h1 className="hero-title max-w-4xl font-serif text-5xl font-medium leading-[1.04] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            A beleza da serra.
            <br />
            <span className="text-gold-gradient italic">A tranquilidade</span> de
            <br className="hidden sm:block" /> viajar bem.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-white/80 md:text-lg md:leading-8">
            Passeios, transfers e experiências em Gramado, Canela e região — com atendimento próximo para você aproveitar cada momento.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-gold group inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-7 py-4 text-sm font-bold shadow-xl shadow-amber-950/20 transition duration-300 hover:-translate-y-1 md:text-base"
            >
              Vamos planejar sua viagem
              <ArrowUpRight size={19} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="#destinos"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/15 md:text-base"
            >
              Explorar passeios
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-sm text-white/75">
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-amber-300" aria-hidden="true" /> Gramado, Canela e Serra Gaúcha</span>
            <span className="hidden h-1 w-1 rounded-full bg-amber-300 sm:block" aria-hidden="true" />
            <span>Atendimento personalizado pelo WhatsApp</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-stone-50 to-transparent" aria-hidden="true" />
    </section>
  )
}
