import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { CLINIC_INFO } from '../data/clinicData';
import { l3 } from '../utils/localize';
import { MapPin, Mail, Clock, Send, CheckCircle2, Navigation, Compass, AlertCircle } from 'lucide-react';
import {
  PopupCard,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const ContactPage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: {
      bg: 'Контакти & Локация | Laser Dental Clinic София — ул. „Чумерна“ 12',
      en: 'Contact & Location | Laser Dental Clinic Sofia — 12 Chumerna St',
      pt: 'Contactos & Localização | Laser Dental Clinic Sófia — Rua Chumerna, 12'
    },
    description: {
      bg: 'Контакти, адрес и работно време на Laser Dental Clinic в София: ул. „Чумерна“ 12, близо до метростанция „Лъвов мост“ и бул. „Сливница“.',
      en: 'Contact information, location, and opening hours for Laser Dental Clinic in Sofia: 12 Chumerna St, close to metro station Lavov Most and Slivnitsa Blvd.',
      pt: 'Contactos, morada e horário de funcionamento da Laser Dental Clinic em Sófia: Rua Chumerna, 12, próximo do metro Lavov Most e Blvd. Slivnitsa.'
    }
  });

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handlePopulateDemo = () => {
    setForm({
      name: l3(language, 'Тестов Потребител (Демо)', 'Sample Visitor (Demo)', 'Utilizador de Teste (Demo)'),
      email: 'demo-visitor@example.com',
      subject: l3(
        language,
        'Въпрос относно начална терапия и 3D анализ',
        'Question regarding Initial Therapy and 3D imaging',
        'Dúvida sobre Terapia Inicial e imagiologia 3D'
      ),
      message: l3(
        language,
        'Това е демонстрационно съобщение за тестване на контактния интерфейс.',
        'This is a sample message demonstrating the contact simulation interface.',
        'Esta é uma mensagem demonstrativa para testar a interface de contacto.'
      )
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <FadeScale className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Контакти & Достъп', 'Contact & Directions', 'Contactos & Localização')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] tracking-tight mb-4">
          {l3(
            language,
            'Свържете се с Laser Dental Clinic в София',
            'Contact Laser Dental Clinic in Central Sofia',
            'Contacte a Laser Dental Clinic no Centro de Sófia'
          )}
        </h1>
        <p className="text-base text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Клиниката се намира на тиха централна локация на ул. „Чумерна“ 12 в София, с удобен пешеходен достъп и градски транспорт.',
            'Conveniently located at 12 Chumerna Street in central Sofia, providing discreet and accessible private dental care.',
            'Convenientemente localizada na Rua Chumerna, 12, no centro de Sófia, proporcionando cuidados dentários privados com discrição e facilidade de acesso.'
          )}
        </p>
      </FadeScale>

      {/* Grid: Verified Contact Info + Interactive Inquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Verified Public Clinic Information with Category B PopupCard */}
        <div className="lg:col-span-5 space-y-6">
          
          <PopupCard className="bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
            <h2 className="text-xl font-serif font-bold text-[#0A1926]">
              {l3(language, 'Официални координати', 'Verified Clinic Details', 'Dados Oficiais da Clínica')}
            </h2>

            <div className="space-y-5 text-sm">
              
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF4EB] text-[#B8924B] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5E6D77] block">
                    {l3(language, 'Адрес', 'Address', 'Morada')}
                  </span>
                  <p className="font-medium text-[#0A1926] mt-0.5">
                    {l3(language, CLINIC_INFO.addressBg, CLINIC_INFO.addressEn, CLINIC_INFO.addressPt || CLINIC_INFO.addressEn)}
                  </p>
                  <p className="text-xs text-[#5E6D77] mt-0.5">
                    {l3(
                      language,
                      'Централна градска част, район Оборище / Сердика',
                      'Central Sofia municipal district',
                      'Zona central de Sófia, distrito de Oborishte / Serdika'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF4EB] text-[#B8924B] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5E6D77] block">
                    {l3(language, 'Официален имейл', 'Email Inquiry', 'Endereço de E-mail')}
                  </span>
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="font-medium text-[#0A1926] hover:text-[#B8924B] transition-colors mt-0.5 block"
                  >
                    {CLINIC_INFO.email}
                  </a>
                  <p className="text-xs text-[#5E6D77] mt-0.5">
                    {l3(
                      language,
                      'Отговори в рамките на 24 работни часа',
                      'Inquiries answered within 24 business hours',
                      'Respostas no prazo de 24 horas úteis'
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-[#FAF4EB] text-[#B8924B] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5E6D77] block">
                    {l3(language, 'Работно време', 'Clinical Working Hours', 'Horário de Funcionamento')}
                  </span>
                  <p className="font-medium text-[#0A1926] mt-0.5">
                    {l3(language, CLINIC_INFO.workingHoursBg, CLINIC_INFO.workingHoursEn, CLINIC_INFO.workingHoursPt || CLINIC_INFO.workingHoursEn)}
                  </p>
                  <p className="text-xs text-[#5E6D77] mt-0.5">
                    {l3(
                      language,
                      'Събота и Неделя: С предварително уговорен час',
                      'Saturday – Sunday: By advance clinical appointment',
                      'Sábado – Domingo: Por marcação prévia'
                    )}
                  </p>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-[#F2ECE4] text-[11px] text-[#5E6D77]">
              {l3(
                language,
                'Забележка за телефонния контакт: Телефонните номера ще бъдат верифицирани и активирани при финалното въвеждане в експлоатация.',
                'Note on telephone support: Verified clinic direct lines will be activated in the final production release.',
                'Nota sobre o contacto telefónico: As linhas diretas verificadas da clínica serão ativadas no lançamento final em produção.'
              )}
            </div>

          </PopupCard>

          {/* Transport & Access Card */}
          <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-6 space-y-3 text-xs text-[#5E6D77]">
            <div className="flex items-center gap-2 font-semibold text-[#0A1926]">
              <Compass className="w-4 h-4 text-[#B8924B]" />
              <span>{l3(language, 'Как да стигнете до нас:', 'Directions & Urban Transit:', 'Como Chegar até Nós:')}</span>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#184D58] mt-1.5 shrink-0" />
                <span>
                  {l3(
                    language,
                    'Метро: На 7-8 минути пеша от метростанции „Лъвов мост“ и „Сердика“.',
                    'Metro: 7-8 minutes walking distance from "Lavov Most" and "Serdika" stations.',
                    'Metro: A 7-8 minutos a pé das estações de metro "Lavov Most" e "Serdika".'
                  )}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#184D58] mt-1.5 shrink-0" />
                <span>
                  {l3(
                    language,
                    'Паркиране: Синя зона за кратковременно паркиране по ул. „Чумерна“ и околните пресечки.',
                    'Parking: Blue Zone municipal parking available along Chumerna St and adjoining streets.',
                    'Estacionamento: Zona Azul de estacionamento de curta duração ao longo da Rua Chumerna e ruas adjacentes.'
                  )}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Right Column: Interactive Demonstration Message Form with Category B PopupCard */}
        <PopupCard className="lg:col-span-7 bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 shadow-xs">
          
          <div className="mb-6 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1926] mb-0.5">
                  {l3(language, 'Изпратете запитване (Симулация)', 'Send an Inquiry (Simulation)', 'Enviar Pedido de Informação (Simulação)')}
                </h2>
                <p className="text-xs text-[#5E6D77]">
                  {l3(
                    language,
                    'Демонстрационна форма — не се събират реални лични данни.',
                    'Demonstration interface — no real personal data collected.',
                    'Interface de demonstração — sem recolha de dados pessoais reais.'
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={handlePopulateDemo}
                className="px-3 py-1.5 text-xs font-semibold text-[#184D58] bg-[#FAF4EB] border border-[#E8D8BF] hover:bg-[#F2E7D5] rounded-md transition-colors shrink-0"
              >
                {l3(language, '🧪 Попълни примерни данни', '🧪 Auto-fill Demo Data', '🧪 Preencher Dados de Teste')}
              </button>
            </div>

            <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-md text-[11px] text-[#5E6D77] flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-[#B8924B] shrink-0" />
              <span>
                {l3(
                  language,
                  'Тази форма е неактивна симулация. За официален контакт с клиниката: info@laserdentalclinic-bg.com',
                  'This form is a non-operational sandbox. For official clinic contact: info@laserdentalclinic-bg.com',
                  'Este formulário é uma simulação demonstrativa. Para contacto oficial com a clínica: info@laserdentalclinic-bg.com'
                )}
              </span>
            </div>
          </div>

          {submitted ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in">
              <div className="w-14 h-14 rounded-full bg-[#FAF4EB] border border-[#B8924B] flex items-center justify-center mx-auto text-[#B8924B]">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#0A1926]">
                {l3(language, 'Запитването е симулирано успешно', 'Message Simulated Successfully', 'Mensagem Simulada com Sucesso')}
              </h3>
              <p className="text-xs text-[#5E6D77] max-w-md mx-auto leading-relaxed">
                {l3(
                  language,
                  'Благодарим Ви! В реалната версия на сайта клиниката получава криптирано известие за незабавен отговор.',
                  'Thank you! In the production version, the clinic team receives real-time secure notification for swift dispatch.',
                  'Obrigado! Na versão de produção do website, a equipa da clínica recebe uma notificação cifrada para resposta célere.'
                )}
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-4 px-5 py-2 text-xs font-semibold text-[#0A1926] bg-[#F4EFEA] hover:bg-[#E8E2D8] rounded-md transition-colors"
              >
                {l3(language, 'Ново запитване', 'Send another inquiry', 'Enviar outro pedido')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                    {l3(language, 'Вашето име (примерно) *', 'Your Name (Sample) *', 'O Seu Nome (Exemplo) *')}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder={l3(language, 'Иван Иванов', 'Alexander Davis', 'Rui Silva')}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                    {l3(language, 'Имейл адрес *', 'Email Address *', 'Endereço de E-mail *')}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="patient@example.com"
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                  {l3(language, 'Тема на запитването', 'Subject', 'Assunto')}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder={l3(
                    language,
                    'Въпрос за лазерна манипулация / 3D скенер...',
                    'Question about Waterlase laser / 3D scan...',
                    'Dúvida sobre laser Waterlase / diagnóstico 3D...'
                  )}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                  {l3(language, 'Съобщение *', 'Message *', 'Mensagem *')}
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder={l3(
                    language,
                    'Опишете накратко как можем да Ви бъдем полезни...',
                    'Please describe how we can assist your dental health...',
                    'Descreva resumidamente como podemos ajudar com o seu caso clínico...'
                  )}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-[#5E6D77] flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5 text-[#B8924B]" />
                  <span>{l3(language, 'Демонстрационна форма', 'Demonstration input', 'Entrada demonstrativa')}</span>
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-[#0A1926] hover:bg-[#18344A] rounded-md transition-colors flex items-center gap-2"
                >
                  <Send className="w-3.5 h-3.5 text-[#B8924B]" />
                  <span>{l3(language, 'Изпратете съобщение', 'Submit Message', 'Enviar Mensagem')}</span>
                </button>
              </div>

            </form>
          )}

        </PopupCard>

      </div>

      {/* Styled Architectural Map Visualizer with Category B PopupCard */}
      <PopupCard className="bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#B8924B]" />
            <h3 className="font-serif font-bold text-lg text-[#0A1926]">
              {l3(language, 'Интерактивна карта на локацията', 'Interactive Map Location', 'Localização no Mapa Interativo')}
            </h3>
          </div>
          <span className="text-xs text-[#5E6D77] font-mono">12 CHUMERNA ST · SOFIA 1000</span>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-[#E8E2D8] bg-[#FAF8F5] h-72 flex items-center justify-center text-center p-6">
          <div className="max-w-md space-y-2">
            <div className="w-12 h-12 rounded-full bg-[#0A1926] text-[#B8924B] flex items-center justify-center mx-auto mb-2 shadow-xs">
              <MapPin className="w-6 h-6" />
            </div>
            <p className="font-serif font-bold text-base text-[#0A1926]">
              Laser Dental Clinic — Sofia
            </p>
            <p className="text-xs text-[#5E6D77]">
              {l3(language, CLINIC_INFO.addressBg, CLINIC_INFO.addressEn, CLINIC_INFO.addressPt || CLINIC_INFO.addressEn)}
            </p>
            <div className="pt-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Laser Dental Clinic Chumerna 12 Sofia Bulgaria')}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#0A1926] bg-white border border-[#DCD5CB] rounded-md hover:bg-[#FAF8F5] transition-colors"
              >
                <span>{l3(language, 'Отворете в Google Maps', 'Open in Google Maps', 'Abrir no Google Maps')}</span>
              </a>
            </div>
          </div>
        </div>
      </PopupCard>

    </div>
  );
};
