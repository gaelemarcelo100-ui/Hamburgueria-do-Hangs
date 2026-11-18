import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/hangsData';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fazer pedido pelo WhatsApp da Hangs Burguer"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.25, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed bottom-4 right-4 z-40 inline-flex h-13 w-13 sm:h-auto sm:w-auto items-center justify-center gap-2.5 rounded-full border border-[#F5E09B]/40 bg-[#D4AF37] sm:px-5 sm:py-3 text-[#08080A] shadow-lg transition-transform duration-150 hover:scale-[1.03] hover:bg-[#E8C65B]"
    >
      <MessageCircle className="h-6 w-6 sm:h-5 sm:w-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline text-sm font-bold whitespace-nowrap shrink-0">
        Pedir no WhatsApp
      </span>
    </motion.a>
  );
}
