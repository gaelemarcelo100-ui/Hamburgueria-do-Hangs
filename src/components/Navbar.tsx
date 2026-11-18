import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/hangsData';

const NAV_LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#portfolio', label: 'Destaques' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#D4AF37]/20 bg-[#08080A]/92 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Zone 1: Single clean wordmark */}
        <a
          href="#inicio"
          className="font-display text-xl font-bold tracking-tight text-[#F5F2EB] transition-colors hover:text-[#E8C65B] whitespace-nowrap shrink-0"
        >
          Hangs Burguer
        </a>

        {/* Zone 2: Single-line navigation links */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#B8B2A6]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 transition-colors duration-150 hover:text-[#F5F2EB] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-150 hover:after:w-full whitespace-nowrap shrink-0"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single primary CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#D4AF37] px-4 py-2 text-xs font-bold tracking-wide text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
          >
            Pedir no WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#111114] text-[#F5F2EB] transition-colors hover:border-[#D4AF37] md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileOpen && (
        <div className="border-t border-[#D4AF37]/20 bg-[#0D0D10] px-4 py-4 md:hidden">
          <nav aria-label="Menu mobile" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#F5F2EB] transition-colors hover:bg-[#17171B] hover:text-[#E8C65B]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex min-h-[44px] items-center justify-center rounded-lg bg-[#D4AF37] px-4 py-2.5 text-sm font-bold text-[#08080A] transition-colors hover:bg-[#E8C65B]"
            >
              Pedir pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
