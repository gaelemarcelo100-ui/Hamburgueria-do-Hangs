import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight, MessageCircle, X } from 'lucide-react';
import {
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
  buildWhatsAppUrl,
} from '../data/hangsData';
import { MediaImage } from './MediaImage';

const PORTFOLIO_TABS: { id: PortfolioCategory; label: string }[] = [
  { id: 'todos', label: 'Tudo' },
  { id: 'chapas-burgers', label: 'Chapas & Burgers' },
  { id: 'ambiente-eventos', label: 'Ambiente & Eventos' },
  { id: 'regionais-bebidas', label: 'Regionais & Bebidas' },
];

export function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioCategory>('todos');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const visibleItems =
    activeTab === 'todos'
      ? PORTFOLIO_ITEMS
      : PORTFOLIO_ITEMS.filter((item) => item.category === activeTab);

  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedItem(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  return (
    <section id="portfolio" className="border-b border-[#D4AF37]/15 bg-[#0A0A0D] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#E8C65B]">
              Portfólio Gastronômico & Experiência
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F2EB]"
              style={{ textWrap: 'balance' }}
            >
              Chapas icônicas, sabores paraenses e a atmosfera da nossa casa nova
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filtrar destaques do portfólio"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#111114] p-1.5"
          >
            {PORTFOLIO_TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.id)}
                  className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs sm:text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#D4AF37] text-[#08080A] font-bold'
                      : 'text-[#B8B2A6] hover:text-[#F5F2EB] hover:bg-[#17171B]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media-First Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, idx) => {
            const isFeatured = activeTab === 'todos' && idx === 0;
            return (
              <motion.article
                key={item.id}
                layout="position"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`group overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#111114] transition-colors duration-150 hover:border-[#D4AF37]/50 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <button
                  type="button"
                  onClick={() => setSelectedItem(item)}
                  className="flex h-full w-full flex-col text-left focus-visible:outline-none"
                >
                  <div
                    className={`relative w-full overflow-hidden bg-[#08080A] ${
                      isFeatured ? 'aspect-[16/9] sm:aspect-[16/8]' : 'aspect-[4/3]'
                    }`}
                  >
                    <MediaImage
                      src={item.image}
                      alt={item.alt}
                      title={item.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-[#08080A]/15 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8B2A6]">
                        <span className="font-semibold text-[#E8C65B]">{item.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.servings}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.availability}</span>
                      </div>

                      <h3 className="mt-2.5 font-display text-xl sm:text-2xl font-bold text-[#F5F2EB] transition-colors group-hover:text-[#E8C65B]">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#C7C1B5]">
                        {item.shortDesc}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-semibold text-[#E8C65B]">
                      <span>Ver detalhes e pedir</span>
                      <ArrowUpRight
                        className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#D4AF37]/35 bg-[#111114]"
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                aria-label="Fechar detalhes"
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#08080A]/85 text-[#F5F2EB] transition-colors hover:border-[#E8C65B] hover:text-[#E8C65B]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/10] w-full overflow-hidden bg-[#08080A]">
                <MediaImage
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  title={selectedItem.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8B2A6]">
                  <span className="font-semibold text-[#E8C65B]">
                    {selectedItem.categoryLabel}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedItem.servings}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedItem.availability}</span>
                </div>

                <h3
                  id="modal-title"
                  className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#F5F2EB]"
                >
                  {selectedItem.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[#C7C1B5]">
                  {selectedItem.fullDesc}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-sm text-[#F5F2EB]">
                  {selectedItem.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5">
                      <span className="mt-1 text-[#E8C65B]" aria-hidden="true">
                        —
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-white/10 pt-5">
                  <a
                    href={buildWhatsAppUrl(selectedItem.whatsappPrefill)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm font-bold text-[#08080A] transition-colors hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span>Pedir este destaque no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-white/15 px-4 py-2 text-sm font-medium text-[#B8B2A6] transition-colors hover:text-[#F5F2EB]"
                  >
                    Fechar janela
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
