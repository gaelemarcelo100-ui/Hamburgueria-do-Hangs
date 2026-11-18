import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import {
  FEATURED_MAIN_DISHES,
  SERVICES,
  ServiceCategory,
  buildWhatsAppUrl,
} from '../data/hangsData';
import { MediaImage } from './MediaImage';

const SERVICE_TABS: { id: ServiceCategory; label: string }[] = [
  { id: 'todos', label: 'Todos os Serviços' },
  { id: 'gastronomia', label: 'Gastronomia' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'atendimento', label: 'Atendimento' },
];

export function ServicesSection() {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('todos');
  const [dishIndex, setDishIndex] = useState(0);
  const [isDishPaused, setIsDishPaused] = useState(false);

  const filteredServices =
    activeCategory === 'todos'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeCategory);

  const totalDishes = FEATURED_MAIN_DISHES.length;

  useEffect(() => {
    if (isDishPaused || totalDishes <= 1) return;
    const timer = window.setInterval(() => {
      setDishIndex((prev) => (prev >= totalDishes - 1 ? 0 : prev + 1));
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isDishPaused, totalDishes]);

  const handlePrevDish = () => {
    setDishIndex((prev) => (prev <= 0 ? totalDishes - 1 : prev - 1));
  };

  const handleNextDish = () => {
    setDishIndex((prev) => (prev >= totalDishes - 1 ? 0 : prev + 1));
  };

  return (
    <section id="servicos" className="border-b border-[#D4AF37]/15 bg-[#08080A] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E8C65B]">Cardápio, Estrutura & Hospitalidade</p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F2EB]"
            style={{ textWrap: 'balance' }}
          >
            Tudo o que preparamos para a sua mesa, seu grupo ou seu pedido na madrugada
          </h2>
        </div>

        {/* Featured Main Dishes Carousel */}
        <div className="mt-10">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F2EB]">
                Pratos Principais em Destaque
              </h3>
              <p className="mt-1 text-sm text-[#B8B2A6]">
                Os carros-chefes mais pedidos da nossa chapa e cozinha em Belém.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="mr-1 text-xs font-medium text-[#B8B2A6] tabular-nums">
                {String(dishIndex + 1).padStart(2, '0')} / {String(totalDishes).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrevDish}
                aria-label="Prato principal anterior"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#111114] text-[#F5F2EB] transition-colors duration-150 hover:border-[#E8C65B] hover:text-[#E8C65B]"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNextDish}
                aria-label="Próximo prato principal"
                className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#D4AF37]/30 bg-[#111114] text-[#F5F2EB] transition-colors duration-150 hover:border-[#E8C65B] hover:text-[#E8C65B]"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            className="overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-[#111114]"
            onMouseEnter={() => setIsDishPaused(true)}
            onMouseLeave={() => setIsDishPaused(false)}
            onFocus={() => setIsDishPaused(true)}
            onBlur={() => setIsDishPaused(false)}
            role="region"
            aria-roledescription="carousel"
            aria-label="Pratos principais em destaque da Hangs Burguer"
          >
            <motion.div
              className="flex"
              animate={{ x: `-${dishIndex * 100}%` }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) {
                  handleNextDish();
                } else if (info.offset.x > 50) {
                  handlePrevDish();
                }
              }}
            >
              {FEATURED_MAIN_DISHES.map((dish) => (
                <article
                  key={dish.id}
                  className="grid w-full shrink-0 grid-cols-1 items-stretch lg:grid-cols-12 select-none"
                >
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] lg:col-span-7 overflow-hidden bg-[#08080A]">
                    <MediaImage
                      src={dish.image}
                      alt={dish.alt}
                      title={dish.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080A]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#111114]/40" />
                  </div>

                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8B2A6]">
                        <span className="font-semibold text-[#E8C65B]">{dish.tag}</span>
                        <span aria-hidden="true">·</span>
                        <span>{dish.servings}</span>
                      </div>

                      <h4 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-[#F5F2EB]">
                        {dish.title}
                      </h4>

                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#C7C1B5]">
                        {dish.description}
                      </p>

                      <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm text-[#F5F2EB]">
                        {dish.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-[#E8C65B]" aria-hidden="true">
                              —
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
                      <span className="text-xs text-[#B8B2A6]">{dish.availability}</span>
                      <a
                        href={buildWhatsAppUrl(dish.whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm font-bold text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>Pedir este prato no WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>

          {/* Dish Slide Indicators */}
          <div
            className="mt-4 flex items-center justify-center gap-2"
            role="tablist"
            aria-label="Selecionar prato principal em destaque"
          >
            {FEATURED_MAIN_DISHES.map((dish, idx) => {
              const isActive = idx === dishIndex;
              return (
                <button
                  key={dish.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Ver prato principal ${dish.title}`}
                  onClick={() => setDishIndex(idx)}
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

        {/* Remaining Menu, Structure & Hospitality Filterable Cards */}
        <div className="mt-14 border-t border-[#D4AF37]/15 pt-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-[#F5F2EB]">
                Opções de Cardápio, Estrutura e Atendimento
              </h3>
              <p className="mt-1 text-sm text-[#B8B2A6]">
                Filtre por categoria para explorar toda a experiência da Hangs Burguer.
              </p>
            </div>

            {/* Interactive Filter Controls */}
            <div
              role="tablist"
              aria-label="Filtrar serviços por categoria"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/10 bg-[#111114] p-1.5"
            >
              {SERVICE_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(tab.id)}
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

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service, index) => {
              const isMarquee = activeCategory === 'todos' && index === 0;
              return (
                <motion.article
                  key={service.id}
                  layout="position"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex flex-col justify-between overflow-hidden rounded-xl border border-[#D4AF37]/20 bg-[#111114] transition-colors duration-150 hover:border-[#D4AF37]/45 ${
                    isMarquee ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div>
                    <div
                      className={`relative w-full overflow-hidden bg-[#08080A] ${
                        isMarquee ? 'aspect-[16/9] sm:aspect-[16/8]' : 'aspect-[16/10]'
                      }`}
                    >
                      <MediaImage
                        src={service.image}
                        alt={service.alt}
                        title={service.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent" />
                    </div>

                    <div className="px-6 pt-4">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#B8B2A6]">
                        <span className="font-semibold text-[#E8C65B] tabular-nums">
                          {service.number}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{service.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{service.highlight}</span>
                      </div>

                      <h4 className="mt-2.5 font-display text-xl font-bold text-[#F5F2EB]">
                        {service.number}. {service.title}
                      </h4>

                      <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#C7C1B5]">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-5">
                    <div className="border-t border-white/10 pt-4">
                      <a
                        href={buildWhatsAppUrl(
                          `Olá, Hangs Burguer! Gostaria de saber mais sobre: ${service.title}.`
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#E8C65B] transition-colors hover:text-[#F5E09B]"
                      >
                        <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>Solicitar pelo WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Section Action */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#D4AF37]/25 bg-[#111114] p-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-lg font-bold text-[#F5F2EB]">
              Pronto para pedir agora ou reservar para a sua turma?
            </p>
            <p className="mt-1 text-sm text-[#B8B2A6]">
              Atendimento direto pelo WhatsApp para delivery, entrega sem contato, retirada no balcão
              e mesas no salão.
            </p>
          </div>
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-bold text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
          >
            <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
            <span>Faça seu pedido pelo WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
