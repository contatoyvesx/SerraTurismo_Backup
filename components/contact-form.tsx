"use client"

import { useEffect, useState, type FormEvent } from "react"
import { CalendarDays, CheckCircle2, MapPin, MessageCircle, Users } from "lucide-react"

const WHATSAPP = "5551981699277"

export function ContactForm() {
  const [name, setName] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [people, setPeople] = useState("2 pessoas")
  const [message, setMessage] = useState("")

  const send = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const details = [
      "Olá! Meu nome é " + name + ".",
      destination ? "Passeio ou destino de interesse: " + destination + "." : "",
      date ? "Data prevista: " + date + "." : "",
      "Quantidade de pessoas: " + people + ".",
      message ? "Mais detalhes: " + message : "",
      "Pode me ajudar com informações e disponibilidade?",
    ].filter(Boolean).join("\n")

    const url = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(details)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contato" className="section-space bg-stone-50">
      <div className="container mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="flex flex-col justify-center">
          <span className="section-kicker"><MessageCircle size={14} aria-hidden="true" /> VAMOS CONVERSAR</span>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            Sua próxima viagem começa com uma mensagem.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-7 text-stone-600">
            Conte um pouco sobre seus planos. Vamos abrir uma conversa no WhatsApp com as informações para facilitar o atendimento.
          </p>
          <div className="mt-8 space-y-4 text-sm text-stone-700">
            <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-violet-800" aria-hidden="true" /> Tire dúvidas antes de decidir</div>
            <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-violet-800" aria-hidden="true" /> Consulte opções e disponibilidade</div>
            <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-violet-800" aria-hidden="true" /> Organize os detalhes do passeio</div>
          </div>
        </div>

        <form onSubmit={send} className="contact-panel rounded-[1.8rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-900/[0.04] sm:p-8">
          <h3 className="font-serif text-2xl font-semibold text-stone-900">Planeje seu passeio</h3>
          <p className="mt-2 text-sm leading-6 text-stone-500">Preencha os campos abaixo para montar sua mensagem.</p>

          <div className="mt-6 space-y-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-stone-700">Seu nome <span className="text-violet-800">*</span></label>
              <input id="contact-name" name="name" autoComplete="name" required value={name} onChange={(event) => setName(event.target.value)} placeholder="Como podemos chamar você?" className="form-field" />
            </div>

            <div>
              <label htmlFor="contact-destination" className="mb-2 block text-sm font-medium text-stone-700">Qual passeio interessa?</label>
              <div className="relative">
                <MapPin size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                <select id="contact-destination" name="destination" value={destination} onChange={(event) => setDestination(event.target.value)} className="form-field pl-11">
                  <option value="">Ainda estou decidindo</option>
                  <option>Gramado e Canela</option>
                  <option>Tour Uva e Vinho + Trem</option>
                  <option>Vinícola Jolimont</option>
                  <option>Linha Bela + almoço</option>
                  <option>Noite Alemã</option>
                  <option>Transfer</option>
                  <option>Outro roteiro</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-date" className="mb-2 block text-sm font-medium text-stone-700">Data prevista</label>
                <div className="relative">
                  <CalendarDays size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                  <input id="contact-date" name="date" type="date" min={minDate || undefined} value={date} onChange={(event) => setDate(event.target.value)} className="form-field pl-11" />
                </div>
              </div>
              <div>
                <label htmlFor="contact-people" className="mb-2 block text-sm font-medium text-stone-700">Viajantes</label>
                <div className="relative">
                  <Users size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden="true" />
                  <select id="contact-people" name="people" value={people} onChange={(event) => setPeople(event.target.value)} className="form-field pl-11">
                    <option>1 pessoa</option>
                    <option>2 pessoas</option>
                    <option>3 pessoas</option>
                    <option>4 pessoas</option>
                    <option>5 pessoas</option>
                    <option>6 ou mais pessoas</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-stone-700">Algum detalhe a mais?</label>
              <textarea id="contact-message" name="message" rows={3} value={message} onChange={(event) => setMessage(event.target.value)} placeholder="Datas flexíveis, local de saída ou o que você gostaria de conhecer..." className="form-field resize-y" />
            </div>

            <button type="submit" className="button-gold inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-bold transition hover:-translate-y-0.5">
              Continuar pelo WhatsApp <MessageCircle size={18} aria-hidden="true" />
            </button>
            <p className="text-center text-xs leading-5 text-stone-500">Você será direcionado ao WhatsApp para enviar a mensagem. Nenhum dado é enviado por este site.</p>
          </div>
        </form>
      </div>
    </section>
  )
}
