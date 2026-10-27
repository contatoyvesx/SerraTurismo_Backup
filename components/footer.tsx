import { ArrowUpRight, Instagram, MapPin, MessageCircle } from "lucide-react"

const whatsappLink =
  "https://wa.me/5551981699277?text=" +
  encodeURIComponent("Olá! Gostaria de informações sobre passeios na Serra Gaúcha.")

export function Footer() {
  return (
    <footer className="bg-stone-950 text-white">
      <div className="container mx-auto px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_0.7fr_1fr] md:items-start">
          <div>
            <a href="#inicio" className="font-serif text-2xl font-semibold tracking-tight">
              HA <span className="text-gold">Serra</span> Turismo
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/60">
              Passeios, transfers e experiências para descobrir Gramado, Canela e a Serra Gaúcha.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Explore</h2>
            <nav aria-label="Links do rodapé" className="mt-4 flex flex-col items-start gap-3 text-sm text-white/65">
              <a href="#destinos" className="transition hover:text-amber-200">Destinos</a>
              <a href="#servicos" className="transition hover:text-amber-200">Experiências</a>
              <a href="#contato" className="transition hover:text-amber-200">Contato</a>
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Vamos conversar?</h2>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 transition hover:text-amber-200">
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/ha.turismo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/70 transition hover:text-amber-200">
                <Instagram size={17} aria-hidden="true" /> Instagram <ArrowUpRight size={14} aria-hidden="true" />
              </a>
              <span className="inline-flex items-center gap-2 text-white/60"><MapPin size={17} aria-hidden="true" /> Serra Gaúcha, RS</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} HA Serra Turismo. Todos os direitos reservados.</p>
          <a href="#inicio" className="transition hover:text-amber-200">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  )
}
