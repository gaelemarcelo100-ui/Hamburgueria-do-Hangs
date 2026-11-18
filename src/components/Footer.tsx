import {
  ADDRESS_SHORT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/hangsData';

export function Footer() {
  return (
    <footer className="border-t border-[#D4AF37]/20 bg-[#070709] py-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <a
              href="#inicio"
              className="font-display text-xl font-bold tracking-tight text-[#F5F2EB]"
            >
              Hangs Burguer
            </a>
            <p className="mt-2 text-sm text-[#B8B2A6]">
              Muito mais que sabor. Um ponto de encontro para bons momentos!
            </p>
            <p className="mt-1 text-xs text-[#8C867B]">{ADDRESS_SHORT}</p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-[#B8B2A6]"
          >
            <a href="#sobre" className="hover:text-[#E8C65B] transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="hover:text-[#E8C65B] transition-colors">
              Serviços
            </a>
            <a href="#portfolio" className="hover:text-[#E8C65B] transition-colors">
              Destaques
            </a>
            <a href="#depoimentos" className="hover:text-[#E8C65B] transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-[#E8C65B] transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex flex-col gap-1.5 text-sm md:text-right">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#E8C65B] hover:underline tabular-nums"
            >
              WhatsApp: {WHATSAPP_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B8B2A6] hover:text-[#F5F2EB] transition-colors"
            >
              Instagram: {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-[#8C867B]">
          <p>© {new Date().getFullYear()} Hangs Burguer (Hang Burgs) · Belém - PA.</p>
          <p>Estacionamento gratuito e acessibilidade · Casa nova desde 2026.</p>
        </div>
      </div>
    </footer>
  );
}
