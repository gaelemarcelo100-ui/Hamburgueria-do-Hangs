import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowDownRight, MessageCircle } from 'lucide-react';
import { ADDRESS_SHORT, HERO_PROOF_METRICS, buildWhatsAppUrl } from '../data/hangsData';
import { MediaImage } from './MediaImage';

interface SmokePlumeConfig {
  id: string;
  left: string;
  width: string;
  height: string;
  duration: number;
  delay: number;
  driftX: number;
  peakOpacity: number;
  tint: string;
}

const HERO_SMOKE_PLUMES: SmokePlumeConfig[] = [
  {
    id: 'plume-1',
    left: '6%',
    width: '26rem',
    height: '32rem',
    duration: 13,
    delay: 0,
    driftX: 28,
    peakOpacity: 0.24,
    tint: 'radial-gradient(ellipse at center, rgba(232,198,91,0.14) 0%, rgba(245,242,235,0.06) 45%, rgba(8,8,10,0) 75%)',
  },
  {
    id: 'plume-2',
    left: '28%',
    width: '30rem',
    height: '36rem',
    duration: 16,
    delay: 2.4,
    driftX: -24,
    peakOpacity: 0.22,
    tint: 'radial-gradient(ellipse at center, rgba(245,242,235,0.12) 0%, rgba(184,178,166,0.06) 48%, rgba(8,8,10,0) 76%)',
  },
  {
    id: 'plume-3',
    left: '52%',
    width: '28rem',
    height: '34rem',
    duration: 14,
    delay: 1.1,
    driftX: 34,
    peakOpacity: 0.26,
    tint: 'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, rgba(245,242,235,0.07) 44%, rgba(8,8,10,0) 74%)',
  },
  {
    id: 'plume-4',
    left: '72%',
    width: '32rem',
    height: '38rem',
    duration: 15,
    delay: 3.6,
    driftX: -30,
    peakOpacity: 0.28,
    tint: 'radial-gradient(ellipse at center, rgba(245,242,235,0.14) 0%, rgba(212,175,55,0.07) 46%, rgba(8,8,10,0) 76%)',
  },
];

const CHAPA_WISPS: SmokePlumeConfig[] = [
  {
    id: 'chapa-wisp-1',
    left: '16%',
    width: '12rem',
    height: '18rem',
    duration: 7.5,
    delay: 0.2,
    driftX: 16,
    peakOpacity: 0.42,
    tint: 'radial-gradient(ellipse at center, rgba(245,242,235,0.22) 0%, rgba(232,198,91,0.09) 45%, rgba(8,8,10,0) 75%)',
  },
  {
    id: 'chapa-wisp-2',
    left: '48%',
    width: '14rem',
    height: '20rem',
    duration: 9,
    delay: 1.8,
    driftX: -18,
    peakOpacity: 0.46,
    tint: 'radial-gradient(ellipse at center, rgba(245,242,235,0.24) 0%, rgba(212,175,55,0.1) 46%, rgba(8,8,10,0) 76%)',
  },
  {
    id: 'chapa-wisp-3',
    left: '66%',
    width: '11rem',
    height: '17rem',
    duration: 8.2,
    delay: 3.1,
    driftX: 14,
    peakOpacity: 0.38,
    tint: 'radial-gradient(ellipse at center, rgba(245,242,235,0.2) 0%, rgba(184,178,166,0.08) 45%, rgba(8,8,10,0) 75%)',
  },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const smokeBackY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const smokeFrontY = useTransform(scrollYProgress, [0, 1], [0, -190]);
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 44]);
  const emberGlowY = useTransform(scrollYProgress, [0, 1], [0, -75]);

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative overflow-hidden border-b border-[#D4AF37]/15 bg-[#08080A] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24"
    >
      {/* Parallax Grill Smoke & Warm Brasa Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* Subtle Warm Ember Glow Rising Behind Hero */}
        <motion.div
          style={shouldReduceMotion ? undefined : { y: emberGlowY }}
          className="absolute -bottom-24 left-1/4 h-72 w-3/4 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,rgba(158,130,43,0.04)_45%,transparent_75%)] blur-2xl"
        />

        {/* Background Slow Smoke Parallax Layer */}
        <motion.div
          style={shouldReduceMotion ? undefined : { y: smokeBackY }}
          className="absolute inset-0"
        >
          {HERO_SMOKE_PLUMES.slice(0, 2).map((plume) => (
            <motion.div
              key={plume.id}
              style={{
                left: plume.left,
                width: plume.width,
                height: plume.height,
                background: plume.tint,
              }}
              className="absolute bottom-[-8rem] rounded-full blur-3xl will-change-transform"
              initial={{ y: 40, x: 0, scale: 0.85, opacity: 0 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.14 }
                  : {
                      y: [40, -140, -320],
                      x: [0, plume.driftX, -plume.driftX * 0.5],
                      scale: [0.85, 1.15, 1.4],
                      opacity: [0, plume.peakOpacity, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : {
                      duration: plume.duration,
                      delay: plume.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            />
          ))}
        </motion.div>

        {/* Midground Faster Smoke Parallax Layer */}
        <motion.div
          style={shouldReduceMotion ? undefined : { y: smokeFrontY }}
          className="absolute inset-0"
        >
          {HERO_SMOKE_PLUMES.slice(2).map((plume) => (
            <motion.div
              key={plume.id}
              style={{
                left: plume.left,
                width: plume.width,
                height: plume.height,
                background: plume.tint,
              }}
              className="absolute bottom-[-6rem] rounded-full blur-2xl will-change-transform"
              initial={{ y: 30, x: 0, scale: 0.8, opacity: 0 }}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.16 }
                  : {
                      y: [30, -170, -370],
                      x: [0, plume.driftX, plume.driftX * 0.3],
                      scale: [0.8, 1.2, 1.45],
                      opacity: [0, plume.peakOpacity, 0],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.2 }
                  : {
                      duration: plume.duration,
                      delay: plume.delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
            />
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <p className="mb-4 text-xs sm:text-sm font-medium tracking-wide text-[#E8C65B]">
                {ADDRESS_SHORT} · Tradição desde a Cidade Velha
              </p>

              <h1
                className="font-display font-extrabold tracking-tight text-[#F5F2EB] leading-[1.06]"
                style={{
                  fontSize: 'clamp(2.25rem, 4.1vw, 3.75rem)',
                  textWrap: 'balance',
                }}
              >
                <span className="gold-gradient-text block">HANGS BURGUER</span>
                Muito mais que sabor. Um ponto de encontro para bons momentos!
              </h1>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-[#C7C1B5]">
                Há mais de duas décadas transformando as noites de Belém com chapas generosas,
                hambúrgueres artesanais suculentos, cerveja estupidamente gelada, música ao vivo e
                a emoção do futebol na nova casa da Avenida Almirante Tamandaré.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm sm:text-base font-bold text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Pedir pelo WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#D4AF37]/30 bg-[#111114] px-5 py-3 text-sm sm:text-base font-semibold text-[#F5F2EB] transition-colors duration-150 hover:border-[#E8C65B] hover:text-[#E8C65B] whitespace-nowrap shrink-0"
              >
                <span>Ver Chapas e Destaques</span>
                <ArrowDownRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </motion.div>

          {/* Right Visual Anchor with Counter-Parallax & Rising Chapa Smoke */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="relative h-full min-h-[300px] sm:min-h-[380px] overflow-hidden rounded-2xl border border-[#D4AF37]/25 bg-[#111114]">
              <motion.div
                style={shouldReduceMotion ? undefined : { y: imageParallaxY }}
                className="h-full w-full scale-[1.06] will-change-transform"
              >
                <MediaImage
                  src="/src/assets/images/hero_hangs_burger_1794961844196.jpg"
                  alt="Hambúrguer artesanal duplo com cheddar e chapa quente fumegante na Hangs Burguer em Belém"
                  title="Hangs Burguer · Chapas e Burgers Artesanais"
                  className="h-full w-full object-cover lg:h-full"
                  priority
                />
              </motion.div>

              {/* Rising Grill Smoke Over the Sizzling Chapa */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
              >
                {CHAPA_WISPS.map((wisp) => (
                  <motion.div
                    key={wisp.id}
                    style={{
                      left: wisp.left,
                      width: wisp.width,
                      height: wisp.height,
                      background: wisp.tint,
                    }}
                    className="absolute bottom-8 rounded-full blur-2xl will-change-transform"
                    initial={{ y: 20, x: 0, scale: 0.75, opacity: 0 }}
                    animate={
                      shouldReduceMotion
                        ? { opacity: 0.2 }
                        : {
                            y: [20, -110, -240],
                            x: [0, wisp.driftX, -wisp.driftX * 0.4],
                            scale: [0.75, 1.15, 1.45],
                            opacity: [0, wisp.peakOpacity, 0],
                          }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0.2 }
                        : {
                            duration: wisp.duration,
                            delay: wisp.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }
                    }
                  />
                ))}
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08080A]/85 via-[#08080A]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-xs font-medium text-[#E8C65B]">
                  Salão Revitalizado 2026 · Delivery na Madrugada
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-[#F5F2EB]">
                  Do primeiro gole à última mordida na chapa quente.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Proof Strip Directly Below Split */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-1 gap-4 border-t border-[#D4AF37]/20 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {HERO_PROOF_METRICS.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/10 bg-[#111114]/90 p-5 backdrop-blur-xs"
            >
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#E8C65B] tabular-nums">
                {metric.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-[#F5F2EB]">{metric.label}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-[#B8B2A6]">{metric.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
