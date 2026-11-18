import { FormEvent, useState } from 'react';
import { CheckCircle2, Instagram, MapPin, MessageCircle, Phone } from 'lucide-react';
import {
  ADDRESS_SHORT,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  buildWhatsAppUrl,
} from '../data/hangsData';

interface FormState {
  name: string;
  phone: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
}

const SERVICE_OPTIONS = [
  'Pedido Delivery / Madrugada',
  'Entrega sem Contato',
  'Retirada no Balcão',
  'Reserva de Mesa · Música ao Vivo / Jogos',
  'Confraternização ou Evento Comunitário',
];

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    serviceType: SERVICE_OPTIONS[0],
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedPayload, setSubmittedPayload] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (form.name.trim().length < 2) {
      nextErrors.name = 'Informe seu nome completo ou apelido.';
    }
    const digitsOnly = form.phone.replace(/\D/g, '');
    if (digitsOnly.length < 10 || digitsOnly.length > 13) {
      nextErrors.phone = 'Informe um WhatsApp válido com DDD (ex: 91 99267-2897).';
    }
    if (form.message.trim().length < 8) {
      nextErrors.message = 'Descreva brevemente seu pedido, data da reserva ou dúvida.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const composed = `Olá, Hangs Burguer! Meu nome é ${form.name.trim()} (Contato: ${form.phone.trim()}). Assunto: ${form.serviceType}. Mensagem: ${form.message.trim()}`;
    setSubmittedPayload(composed);
  };

  const handleReset = () => {
    setSubmittedPayload(null);
    setForm({
      name: '',
      phone: '',
      serviceType: SERVICE_OPTIONS[0],
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contato" className="bg-[#0A0A0D] py-16 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#E8C65B]">Contato, Reservas & Delivery</p>
          <h2
            className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#F5F2EB]"
            style={{ textWrap: 'balance' }}
          >
            Faça seu pedido pelo WhatsApp e venha viver uma experiência de sabor na Hangs Burguer!
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left: Direct Channels & Location */}
          <div className="flex flex-col justify-between rounded-2xl border border-[#D4AF37]/20 bg-[#111114] p-6 sm:p-8 lg:col-span-5">
            <div className="space-y-6">
              <div>
                <h3 className="font-display text-xl font-bold text-[#F5F2EB]">
                  Casa Nova na Av. Almirante Tamandaré
                </h3>
                <p className="mt-2 text-sm sm:text-base leading-relaxed text-[#B8B2A6]">
                  Atendimento presencial acolhedor, entrega rápida na madrugada, retirada sem filas
                  no balcão, estacionamento gratuito e acessibilidade completa.
                </p>
              </div>

              <div className="space-y-4 border-t border-white/10 pt-6 text-sm sm:text-base">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#E8C65B]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#F5F2EB]">Endereço</p>
                    <p className="text-[#B8B2A6]">{ADDRESS_SHORT}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#E8C65B]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-[#F5F2EB]">WhatsApp Oficial</p>
                    <a
                      href={buildWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E8C65B] hover:underline tabular-nums"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Instagram
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#E8C65B]"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-semibold text-[#F5F2EB]">Instagram</p>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#E8C65B] hover:underline"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-lg bg-[#D4AF37] px-5 py-3 text-sm sm:text-base font-bold text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B]"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>Chamar direto no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Validated Contact / Order Form */}
          <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#111114] p-6 sm:p-8 lg:col-span-7">
            {submittedPayload ? (
              <div className="flex h-full flex-col justify-center py-6">
                <div className="flex items-center gap-3 text-[#E8C65B]">
                  <CheckCircle2 className="h-7 w-7 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-2xl font-bold text-[#F5F2EB]">
                    Solicitação pronta para envio!
                  </h3>
                </div>

                <p className="mt-3 text-base leading-relaxed text-[#C7C1B5]">
                  Recebemos os dados do seu atendimento. Clique abaixo para abrir sua mensagem já
                  preenchida diretamente no WhatsApp da Hangs Burguer e agilizar seu pedido ou
                  reserva.
                </p>

                <div className="mt-6 rounded-xl border border-white/10 bg-[#08080A] p-4 text-sm text-[#B8B2A6]">
                  {submittedPayload}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={buildWhatsAppUrl(submittedPayload)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm sm:text-base font-bold text-[#08080A] transition-colors hover:bg-[#E8C65B] whitespace-nowrap shrink-0"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                    <span>Enviar agora pelo WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-[#F5F2EB] transition-colors hover:border-[#E8C65B]"
                  >
                    Fazer nova solicitação
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-[#F5F2EB]">
                    Envie seu pedido, reserva ou dúvida
                  </h3>
                  <p className="mt-1 text-sm text-[#B8B2A6]">
                    Preencha os campos abaixo para montar sua mensagem personalizada para nossa
                    equipe em Belém.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-[#F5F2EB]"
                    >
                      Seu nome
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => {
                        setForm({ ...form, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: undefined });
                      }}
                      placeholder="Ex: João Silva"
                      aria-invalid={Boolean(errors.name)}
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#08080A] px-4 py-2.5 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#E8C65B] focus:outline-none"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-medium text-[#F87171]" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-[#F5F2EB]"
                    >
                      Seu WhatsApp com DDD
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => {
                        setForm({ ...form, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: undefined });
                      }}
                      placeholder="(91) 99999-9999"
                      aria-invalid={Boolean(errors.phone)}
                      className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#08080A] px-4 py-2.5 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#E8C65B] focus:outline-none tabular-nums"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-medium text-[#F87171]" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-sm font-medium text-[#F5F2EB]"
                  >
                    Tipo de atendimento
                  </label>
                  <select
                    id="contact-service"
                    value={form.serviceType}
                    onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                    className="mt-1.5 min-h-[44px] w-full rounded-lg border border-white/15 bg-[#08080A] px-4 py-2.5 text-sm text-[#F5F2EB] focus:border-[#E8C65B] focus:outline-none"
                  >
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-[#F5F2EB]"
                  >
                    Detalhes do pedido ou reserva
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: undefined });
                    }}
                    placeholder="Ex: Quero reservar mesa para 6 pessoas na sexta à noite ou pedir uma Chapa Imperial para entrega na Cidade Velha."
                    aria-invalid={Boolean(errors.message)}
                    className="mt-1.5 w-full rounded-lg border border-white/15 bg-[#08080A] px-4 py-3 text-sm text-[#F5F2EB] placeholder:text-[#78736A] focus:border-[#E8C65B] focus:outline-none"
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs font-medium text-[#F87171]" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-lg bg-[#D4AF37] px-6 py-3 text-sm sm:text-base font-bold text-[#08080A] transition-colors duration-150 hover:bg-[#E8C65B]"
                >
                  <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>Preparar e Enviar pelo WhatsApp</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
