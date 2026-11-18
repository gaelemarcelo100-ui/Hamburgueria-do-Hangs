import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DIFFERENTIALS, buildWhatsAppUrl } from '../data/hangsData';
import { MediaImage } from './MediaImage';

export function AboutSection() {
  const [diffIndex, setDiffIndex] = useState(0);
  const [slidesVisible, setSlidesVisible] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateSlides = () => {
      if (window.innerWidth >= 1024) {
        setSlidesVisible(3);
      } else if (window.innerWidth >= 768) {
        setSlidesVisible(2);
      } else {
        setSlidesVisible(1);
      }
    };
    updateSlides();
    window.addEventListener('resize', updateSlides);
    return () => window.removeEventListener('resize', updateSlides);
  }, []);

  const maxIndex = Math.max(0, DIFFERENTIALS.length - slidesVisible);
  const safeIndex = Math.min(diffIndex, maxIndex);

  useEffect(() => {
    if (diffIndex > maxIndex) {
      setDiffIndex(maxIndex);
    }
  }, [diffIndex, maxIndex]);

  useEffect(() => {
    if (isPaused || maxIndex === 0) return;
    const timer = window.setInterval(() => {
      setDiffIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 6000);
    return () => window.clearInterval(timer);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setDiffIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setDiffIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const translatePercentage = safeIndex * (100 / slidesVisible);

  return (
    <section id="sobre" className="border-b border-[#D4AF37]/15 bg-[#0A0A0D] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Story + Lounge Visual Split */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[300px] overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#111114]">
              <MediaImage
                src="/src/assets/images/about_lounge_belem_1794961844278.jpg"
                alt="Interior modernizado da Hangs Burguer na Av. Almirante Tamandaré com iluminação dourada, bar e música ao vivo"
                title="Casa Nova 2026 · Av. Almirante Tamandaré"
                className="h-full w-full object-cover lg:h-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080A]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-medium text-[#E8C65B]">
                  Cidade Velha · Belém - PA
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#F5F2EB]">
                  Reinaugurada em 2026 na Av. Almirante Tamandaré
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-sm font-medium text-[#E8C65B]">
              Nossa História · De Hang Burgs a Hangs Burguer
            </p>
            <h2
              className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F2EB]"
              style={{ textWrap: 'balance' }}
            >
              Mais de 20 anos de raiz boêmia na Cidade Velha, renovados para o futuro de Belém.
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#C7C1B5]">
              <p>
                Com mais de duas décadas de história no coração da Cidade Velha, o{' '}
                <strong className="font-semibold text-[#F5F2EB]">Hang Burgs</strong> é muito mais
                do que uma lanchonete: é uma marca icônica e referência absoluta na gastronomia
                noturna e boêmia de Belém.
              </p>
              <p>
                Reconhecido pelas chapas generosas, sanduíches irresistíveis, cerveja estupidamente
                gelada e uma atmosfera vibrante com música ao vivo e transmissão de jogos, o espaço
                conquistou um público fiel e apaixonado — sustentado por uma expressiva avaliação de{' '}
                <strong className="font-semibold text-[#E8C65B] tabular-nums">4,4 estrelas</strong>{' '}
                e milhares de clientes satisfeitos.
              </p>
              <p>
                Após passar por uma grande revitalização e reinaugurar de casa nova na{' '}
                <strong className="font-semibold text-[#F5F2EB]">
                  Avenida Almirante Tamandaré em 2026
                </strong>
                , a Hangs Burguer une tradição, resiliência e modernidade — acolhendo universitários,
                famílias, torcedores, moradores tradicionais e a comunidade cametaense tanto no salão
                quanto no delivery da madrugada.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href={buildWhatsAppUrl(
                  'Olá! Quero conhecer a casa nova da Hangs Burguer na Av. Almirante Tamandaré e fazer um pedido.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-bold text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
              >
                Viver essa experiência pelo WhatsApp
              </a>
              <span className="text-sm text-[#B8B2A6]">
                Estacionamento gratuito · Acessibilidade · Horário estendido
              </span>
            </div>
          </motion.div>
        </div>

        {/* 7 Competitive Differentials Carousel */}
        <div className="mt-16 border-t border-[#D4AF37]/20 pt-14">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-[#E8C65B]">Diferenciais Competitivos</p>
              <h3
                className="mt-2 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#F5F2EB]"
                style={{ textWrap: 'balance' }}
              >
                Por que a Hangs Burguer é o ponto de encontro indispensável em Belém
              </h3>
            </div>

            <div className="flex items-center gap-2 self-start lg:self-end">
              <span className="mr-1 text-xs font-medium text-[#B8B2A6] tabular-nums">
                {String(safeIndex + 1).padStart(2, '0')} /{' '}
                {String(maxIndex + 1).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Diferencial anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#111114] text-[#F5F2EB] transition-colors duration-150 hover:border-[#E8C65B] hover:text-[#E8C65B]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Próximo diferencial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#111114] text-[#F5F2EB] transition-colors duration-150 hover:border-[#E8C65B] hover:text-[#E8C65B]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className="mt-8 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Carrossel de diferenciais competitivos da Hangs Burguer"
          >
            <motion.div
              className="-mx-3 flex"
              animate={{ x: `-${translatePercentage}%` }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
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
              {DIFFERENTIALS.map((item) => (
                <div key={item.number} className="w-full shrink-0 px-3 md:w-1/2 lg:w-1/3">
                  <article className="flex h-full flex-col justify-between rounded-xl border border-[#D4AF37]/20 bg-[#111114] p-6 select-none transition-colors duration-150 hover:border-[#D4AF37]/45">
                    <div>
                      <p className="font-display text-xs font-semibold tracking-wide text-[#E8C65B] tabular-nums">
                        Diferencial {item.number}
                      </p>
                      <h4 className="mt-2 font-display text-lg font-bold text-[#F5F2EB]">
                        {item.number}. {item.title}
                      </h4>
                      <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-[#B8B2A6]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Slide Indicators */}
          <div
            className="mt-5 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Selecionar diferencial competitivo"
          >
            {Array.from({ length: maxIndex + 1 }).map((_, index) => {
              const isActive = index === safeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ver grupo de diferenciais ${index + 1}`}
                  onClick={() => setDiffIndex(index)}
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
        </div>
      </div>
    </section>
  );
}
