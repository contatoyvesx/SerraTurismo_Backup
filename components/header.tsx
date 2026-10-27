"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Menu, PhoneCall, X } from "lucide-react"

const links = [
  { href: "#destinos", label: "Destinos" },
  { href: "#servicos", label: "Experiências" },
  { href: "#depoimentos", label: "Por que viajar conosco" },
  { href: "#contato", label: "Contato" },
]

const whatsappLink =
  "https://wa.me/5551981699277?text=" +
  encodeURIComponent("Olá! Gostaria de planejar um passeio pela Serra Gaúcha.")

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-stone-200/70 bg-white/95 text-stone-900 shadow-sm backdrop-blur-xl"
          : "bg-stone-950/25 text-white backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <a href="#inicio" onClick={closeMenu} className="flex items-center gap-3" aria-label="HA Serra Turismo — início">
          <Image
            src="/logo.png"
            alt="HA Serra Turismo"
            width={44}
            height={44}
            priority
            className="h-10 w-10 rounded-full object-contain"
          />
          <span className="font-serif text-lg font-semibold tracking-tight md:text-xl">
            HA <span className="text-gold">Serra</span> Turismo
          </span>
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link text-sm font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="button-gold inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold">
            <PhoneCall size={16} aria-hidden="true" />
            Planejar viagem
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-current/20 transition hover:bg-black/5 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? "max-h-96 border-t border-stone-200/70" : "max-h-0"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Navegação móvel" className="container mx-auto flex flex-col gap-1 px-4 py-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              className="rounded-xl px-3 py-3 text-sm font-medium transition hover:bg-stone-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={open ? 0 : -1}
            className="button-gold mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold"
          >
            <PhoneCall size={16} aria-hidden="true" />
            Planejar viagem pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  )
}
