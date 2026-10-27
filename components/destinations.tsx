import { ArrowUpRight, MapPin } from "lucide-react"

const destinations = [
  {
    name: "Gramado e Canela",
    category: "Cidades & paisagens",
    description: "Conheça os cenários, atrações e cantinhos especiais da região.",
    image: "/gramado-charming-town-with-flowers-and-architectur.jpg",
    imageAlt: "Arquitetura charmosa e flores em Gramado",
  },
  {
    name: "Tour Uva e Vinho + Trem",
    category: "Cultura & sabores",
    description: "Uma experiência pela região dos vinhedos e da tradicional Maria Fumaça.",
    image: "/bento.jpg",
    imageAlt: "Paisagem da região de vinhedos da Serra Gaúcha",
  },
  {
    name: "Vinícola Jolimont",
    category: "Vinhos & experiências",
    description: "Inclua uma parada para conhecer sabores e paisagens da região.",
    image: "/canela.jpg",
    imageAlt: "Paisagem da região de Canela",
  },
  {
    name: "Linha Bela + almoço",
    category: "Tradição & gastronomia",
    description: "Descubra paisagens rurais e aproveite a culinária local.",
    image: "/beautiful-mountain-landscape-with-sunset--serene-p.jpg",
    imageAlt: "Paisagem serrana ao entardecer",
  },
]

const whatsappNumber = "5551981699277"
const getWhatsappLink = (name: string) =>
  "https://wa.me/" + whatsappNumber + "?text=" +
  encodeURIComponent("Olá! Gostaria de saber mais sobre o passeio: " + name + ".")

export function Destinations() {
  return (
    <section id="destinos" className="section-space bg-stone-50">
      <div className="container mx-auto px-5 md:px-8">
        <div className="section-heading mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <span className="section-kicker"><MapPin size={14} aria-hidden="true" /> DESCUBRA A REGIÃO</span>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            Lugares que viram <span className="text-violet-800 italic">boas memórias.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-stone-600 md:text-lg">
            De passeios clássicos a experiências gastronômicas, escolha o que combina com sua viagem.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {destinations.map((item, index) => (
            <article
              key={item.name}
              className="destination-card group overflow-hidden rounded-[1.6rem] border border-stone-200/80 bg-white shadow-sm"
              style={{ animationDelay: (index * 90) + "ms" }}
            >
              <a
                href={getWhatsappLink(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={"Consultar passeio: " + item.name}
                className="block"
              >
                <div className="destination-image relative h-64 overflow-hidden sm:h-60">
                  <img src={item.image} alt={item.imageAlt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/65 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold leading-snug text-stone-900">{item.name}</h3>
                  <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-stone-600">{item.description}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-800">
                    Consultar passeio
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:border-violet-800 hover:text-violet-800">
            Não encontrou seu roteiro? Fale conosco
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
