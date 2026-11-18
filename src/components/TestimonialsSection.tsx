import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS, buildWhatsAppUrl } from '../data/hangsData';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const updateMatch = () => setIsDesktop(mediaQuery.matches);
    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  const slidesVisible = isDesktop ? 2 : 1;
  const maxIndex = Math.max(0, TESTIMONIALS.length - slidesVisible);
  const safeIndex = Math.min(activeIndex, maxIndex);

  useEffect(() => {
    if (activeIndex > maxIndex) {
      setActiveIndex(maxIndex);
    }
  }, [activeIndex, maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const translatePercentage = safeIndex * (100 / slidesVisible);

  return (
    <section
      id="depoimentos"
      className="border-b border-[#D4AF37]/15 bg-[#08080A] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#E8C65B]">
              Prova Social · Avaliação Média 4,4 Estrelas
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F2EB]"
              style={{ textWrap: 'balance' }}
            >
              Quem frequenta ou pede na madrugada confirma: é ponto de encontro de verdade
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 lg:justify-end">
            <p className="text-sm text-[#B8B2A6] tabular-nums">
              4,4 ★ consolidados · Milhares de clientes em Belém - PA
            </p>

            {/* Carousel Controls */}
            <div className="flex items-center gap-2">
              <span className="mr-1 text-xs font-medium text-[#B8B2A6] tabular-nums">
                {String(safeIndex + 1).padStart(2, '0')} /{' '}
                {String(maxIndex + 1).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Depoimento anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#111114] text-[#F5F2EB] transition-colors duration-150 hover:border-[#E8C65B] hover:text-[#E8C65B]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo depoimento"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#111114] text-[#F5F2EB] transition-colors duration-150 hover:border-[#E8C65B] hover:text-[#E8C65B]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          role="region"
          aria-roledescription="carousel"
          aria-label="Depoimentos de clientes da Hangs Burguer"
        >
          <motion.div
            className="-mx-3 flex"
            animate={{ x: `-${translatePercentage}%` }}
            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -50) {
                handleNext();
              } else if (info.offset.x > 50) {
                handlePrev();
              }
            }}
          >
            {TESTIMONIALS.map((item) => (
              <div key={item.id} className="w-full shrink-0 px-3 md:w-1/2">
                <blockquote className="flex h-full flex-col justify-between rounded-xl border border-[#D4AF37]/20 bg-[#111114] p-6 sm:p-8 select-none">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8B2A6]">
                      <span className="font-semibold text-[#E8C65B]">{item.since}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.context}</span>
                    </div>

                    <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#F5F2EB]">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  <footer className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-display text-base font-bold text-[#F5F2EB]">{item.name}</p>
                    <p className="mt-1 text-sm text-[#B8B2A6]">{item.outcome}</p>
                  </footer>
                </blockquote>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slide Progress Indicators */}
        <div
          className="mt-6 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Selecionar slide de depoimento"
        >
          {Array.from({ length: maxIndex + 1 }).map((_, index) => {
            const isActive = index === safeIndex;
            return (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Ver grupo de depoimentos ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className="flex h-10 items-center px-1 focus-visible:outline-none"
              >
                <span
                  className={`block h-1.5 rounded-sm transition-all duration-200 ${
                    isActive ? 'w-10 bg-[#D4AF37]' : 'w-5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <a
            href={buildWhatsAppUrl(
              'Olá, Hangs Burguer! Vi os depoimentos e quero fazer meu pedido pelo WhatsApp.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3 text-sm sm:text-base font-bold text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
          >
            Faça seu pedido pelo WhatsApp agora
          </a>
        </div>
      </div>
    </section>
  );
}
