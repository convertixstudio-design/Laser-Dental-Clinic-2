import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { CLINICAL_DISCIPLINES } from '../data/clinicData';
import { loc, l3 } from '../utils/localize';
import { Clock, CheckCircle2, AlertCircle, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import {
  PopupCard,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const ConsultationPage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: {
      bg: 'Заявете преглед и консултация | Laser Dental Clinic София',
      en: 'Schedule Consultation & 3D Exam | Laser Dental Clinic Sofia',
      pt: 'Marcar Consulta de Avaliação e Diagnóstico 3D | Laser Dental Clinic Sófia'
    },
    description: {
      bg: 'Заявете първичен преглед, 3D диагностика или консултация за лазерно лечение в Laser Dental Clinic, София, ул. „Чумерна“ 12.',
      en: 'Request a diagnostic exam, 3D volumetric analysis, or laser consultation at Laser Dental Clinic, Sofia, 12 Chumerna St.',
      pt: 'Solicite uma consulta de avaliação, diagnóstico volumétrico 3D ou tratamento a laser na Laser Dental Clinic, Sófia, Rua Chumerna, 12.'
    }
  });

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('periodontology');
  const [visitType, setVisitType] = useState<string>('initial');
  const [preferredTime, setPreferredTime] = useState<string>('morning');
  const [preferredDate, setPreferredDate] = useState<string>('');
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = l3(
        language,
        'Моля, въведете име или попълнете примерни данни',
        'Please provide a name or click sample data',
        'Por favor, indique um nome ou utilize os dados de exemplo'
      );
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = l3(
        language,
        'Моля, въведете валиден имейл',
        'Please provide a valid email',
        'Por favor, introduza um e-mail válido'
      );
    }
    if (!formData.phone.trim()) {
      errs.phone = l3(
        language,
        'Моля, въведете телефон за връзка',
        'Please provide a contact phone',
        'Por favor, indique um telefone de contacto'
      );
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePopulateSample = () => {
    setFormData({
      fullName: l3(language, 'Тестов Пациент (Демо)', 'Sample Patient (Demo)', 'Paciente de Demonstração (Demo)'),
      phone: '+359 88 000 0000',
      email: 'demo-patient@example.com',
      notes: l3(
        language,
        'Симулационна заявка за демонстрационния преглед',
        'Demonstration booking inquiry',
        'Pedido de simulação para consulta de demonstração'
      )
    });
    setErrors({});
  };

  const handleDirectSimulation = () => {
    setFormData({
      fullName: l3(language, 'Тестов Пациент (Демо)', 'Sample Patient (Demo)', 'Paciente de Demonstração (Demo)'),
      phone: '+359 88 000 0000',
      email: 'demo-patient@example.com',
      notes: l3(
        language,
        'Симулационна заявка за демонстрационния преглед',
        'Demonstration booking inquiry',
        'Pedido de simulação para consulta de demonstração'
      )
    });
    setStep(4);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep3()) {
      setStep(4);
    }
  };

  const chosenDisciplineObj = CLINICAL_DISCIPLINES.find(d => d.id === selectedDiscipline);

  const getTimeLabel = (timeKey: string) => {
    switch (timeKey) {
      case 'morning':
        return l3(language, 'Сутрин (09:00 – 12:30)', 'Morning (09:00 – 12:30)', 'Manhã (09:00 – 12:30)');
      case 'afternoon':
        return l3(language, 'Следобед (12:30 – 16:30)', 'Afternoon (12:30 – 16:30)', 'Tarde (12:30 – 16:30)');
      case 'evening':
        return l3(language, 'Късен следобед (16:30 – 19:00)', 'Late Day (16:30 – 19:00)', 'Final de Tarde (16:30 – 19:00)');
      default:
        return timeKey;
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      
      {/* Editorial Header */}
      <FadeScale className="text-center max-w-3xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Индивидуална консултация', 'Personal Consultation', 'Consulta Personalizada')}
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#0A1926] font-bold tracking-tight mb-4">
          {l3(
            language,
            'Заявете час за преглед и 3D анализ',
            'Schedule Clinical Examination & 3D Scan',
            'Marque a sua Avaliação Clínica & Análise 3D'
          )}
        </h1>
        <p className="text-base text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Започнете вашето пътуване към стабилно здраве с прецизен лазерен и функционален преглед в Laser Dental Clinic.',
            'Begin your clinical pathway with precision laser assessment and high-resolution diagnostic imaging at Laser Dental Clinic.',
            'Inicie o seu percurso para uma saúde oral duradoura com uma avaliação precisa por laser e imagiologia de alta resolução na Laser Dental Clinic.'
          )}
        </p>
      </FadeScale>

      {/* Prominent Demonstration Safety Notice with Category B PopupCard */}
      <PopupCard delayMs={100} className="bg-[#FAF4EB] border border-[#E8D8BF] rounded-lg p-4 sm:p-5 mb-10 flex items-start gap-3.5 shadow-xs">
        <AlertCircle className="w-5 h-5 text-[#B8924B] shrink-0 mt-0.5" />
        <div className="text-xs text-[#5D4E37] space-y-1">
          <p className="font-semibold text-sm text-[#3D301F]">
            {l3(
              language,
              'Важно уведомление за демонстрационна функционалност (Convertix_studio):',
              'Demonstration Functionality Notice (Convertix_studio):',
              'Aviso de Funcionalidade de Demonstração (Convertix_studio):'
            )}
          </p>
          <p className="leading-relaxed">
            {l3(
              language,
              'Това е интерактивен интерфейс за демонстрация на потребителското изживяване. Лични медицински данни не се записват, съхраняват или предават към сървъри. Реалната защитена система за записване на часове ще бъде свързана при официално одобрение и въвеждане в експлоатация.',
              'This interface is a design demonstration of the proposed patient booking workflow. No personal or clinical data is recorded, transmitted, or stored on external servers. Live encrypted integration will be connected upon final commissioning.',
              'Esta interface é uma demonstração do fluxo de marcação de consultas para o paciente. Não são gravados, transmitidos ou armazenados dados pessoais ou clínicos em servidores externos. A integração cifrada final será ligada após validação e entrada em produção.'
            )}
          </p>
        </div>
      </PopupCard>

      {/* Booking Container */}
      <div className="bg-white border border-[#E8E2D8] rounded-xl shadow-sm overflow-hidden">
        
        {/* Progress Navigation Steps */}
        <div className="grid grid-cols-4 border-b border-[#E8E2D8] bg-[#FAF8F5] text-[10px] sm:text-xs font-medium text-[#5E6D77]">
          <div className={`p-2.5 sm:p-4 text-center border-r border-[#E8E2D8] transition-colors ${step >= 1 ? 'text-[#0A1926] font-semibold bg-white' : ''}`}>
            <span className="block text-[9px] sm:text-[10px] text-[#B8924B] uppercase tracking-wider mb-0.5">
              {l3(language, 'Стъпка 1', 'Step 1', 'Etapa 1')}
            </span>
            <span className="truncate block">{l3(language, 'Дисциплина', 'Discipline', 'Especialidade')}</span>
          </div>
          <div className={`p-2.5 sm:p-4 text-center border-r border-[#E8E2D8] transition-colors ${step >= 2 ? 'text-[#0A1926] font-semibold bg-white' : ''}`}>
            <span className="block text-[9px] sm:text-[10px] text-[#B8924B] uppercase tracking-wider mb-0.5">
              {l3(language, 'Стъпка 2', 'Step 2', 'Etapa 2')}
            </span>
            <span className="truncate block">{l3(language, 'Параметри', 'Preferences', 'Preferências')}</span>
          </div>
          <div className={`p-2.5 sm:p-4 text-center border-r border-[#E8E2D8] transition-colors ${step >= 3 ? 'text-[#0A1926] font-semibold bg-white' : ''}`}>
            <span className="block text-[9px] sm:text-[10px] text-[#B8924B] uppercase tracking-wider mb-0.5">
              {l3(language, 'Стъпка 3', 'Step 3', 'Etapa 3')}
            </span>
            <span className="truncate block">{l3(language, 'Контакти', 'Details', 'Dados Pessoais')}</span>
          </div>
          <div className={`p-2.5 sm:p-4 text-center transition-colors ${step === 4 ? 'text-[#0A1926] font-semibold bg-white' : ''}`}>
            <span className="block text-[9px] sm:text-[10px] text-[#B8924B] uppercase tracking-wider mb-0.5">
              {l3(language, 'Стъпка 4', 'Step 4', 'Etapa 4')}
            </span>
            <span className="truncate block">{l3(language, 'Потвърждение', 'Receipt', 'Confirmação')}</span>
          </div>
        </div>

        {/* Step Contents */}
        <div className="p-6 sm:p-10">

          {/* STEP 1: Select Discipline */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#0A1926] mb-1">
                  {l3(language, 'Изберете направление за вашия преглед', 'Select Clinical Specialty', 'Selecione a especialidade para a sua avaliação')}
                </h3>
                <p className="text-sm text-[#5E6D77]">
                  {l3(
                    language,
                    'Ако не сте сигурни, изберете „Комплексна първична диагностика“.',
                    'If unsure, select "Comprehensive Diagnostic Consultation".',
                    'Se tiver dúvidas, selecione "Consulta de Diagnóstico Integral".'
                  )}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {CLINICAL_DISCIPLINES.map((d) => (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDiscipline(d.id)}
                    className={`text-left p-4 rounded-lg border transition-all text-sm flex flex-col justify-between ${
                      selectedDiscipline === d.id
                        ? 'border-[#0A1926] bg-[#F4EFEA] ring-1 ring-[#0A1926]'
                        : 'border-[#E8E2D8] hover:border-[#B8924B] bg-white'
                    }`}
                  >
                    <div>
                      <div className="font-semibold text-[#0A1926] mb-1">
                        {loc(d.name, language)}
                      </div>
                      <div className="text-xs text-[#5E6D77] line-clamp-2">
                        {loc(d.shortDesc, language)}
                      </div>
                    </div>
                    <div className="mt-3 text-[11px] font-medium text-[#B8924B]">
                      {d.technologiesUsed.join(' · ')}
                    </div>
                  </button>
                ))}
              </div>

              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0A1926] rounded-md hover:bg-[#18344A] transition-colors flex items-center gap-2"
                >
                  <span>{l3(language, 'Продължете към предпочитания', 'Continue to Preferences', 'Avançar para Preferências')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Preferences */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#0A1926] mb-1">
                  {l3(language, 'Параметри на посещението', 'Appointment Specifications', 'Especificações da Consulta')}
                </h3>
                <p className="text-sm text-[#5E6D77]">
                  {l3(
                    language,
                    'Посочете желания тип консултация и удобна част от деня.',
                    'Indicate consultation scope and your preferred time slot.',
                    'Indique o âmbito da consulta e o seu horário de preferência.'
                  )}
                </p>
              </div>

              {/* Consultation Type */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block">
                  {l3(language, 'Тип консултация', 'Consultation Scope', 'Âmbito da Consulta')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: 'initial',
                      bg: 'Първичен комплексен преглед & 3D скан',
                      en: 'Comprehensive Initial Exam & 3D',
                      pt: 'Avaliação Inicial Completa & 3D'
                    },
                    {
                      id: 'second-opinion',
                      bg: 'Второ медицинско мнение',
                      en: 'Specialist Second Opinion',
                      pt: 'Segunda Opinião Médica Especializada'
                    },
                    {
                      id: 'preventive-recall',
                      bg: 'Лазерна профилактика & Рекол',
                      en: 'Preventative Laser Recall',
                      pt: 'Manutenção Preventiva a Laser'
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setVisitType(item.id)}
                      className={`p-3.5 text-left rounded-lg border text-xs font-medium transition-all ${
                        visitType === item.id
                          ? 'border-[#0A1926] bg-[#F4EFEA] font-semibold text-[#0A1926]'
                          : 'border-[#E8E2D8] hover:border-[#B8924B] text-[#5E6D77]'
                      }`}
                    >
                      {loc(item, language)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Preferred Time of Day */}
              <div className="space-y-3">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block">
                  {l3(language, 'Удобен часови диапазон', 'Preferred Timing', 'Horário de Preferência')}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'morning', bg: 'Сутрин (09:00 – 12:30)', en: 'Morning (09:00 – 12:30)', pt: 'Manhã (09:00 – 12:30)' },
                    { id: 'afternoon', bg: 'Следобед (12:30 – 16:30)', en: 'Afternoon (12:30 – 16:30)', pt: 'Tarde (12:30 – 16:30)' },
                    { id: 'evening', bg: 'Късен следобед (16:30 – 19:00)', en: 'Late Day (16:30 – 19:00)', pt: 'Final de Tarde (16:30 – 19:00)' },
                  ].map((time) => (
                    <button
                      key={time.id}
                      type="button"
                      onClick={() => setPreferredTime(time.id)}
                      className={`p-3.5 text-left rounded-lg border text-xs font-medium transition-all flex items-center gap-2 ${
                        preferredTime === time.id
                          ? 'border-[#0A1926] bg-[#F4EFEA] font-semibold text-[#0A1926]'
                          : 'border-[#E8E2D8] hover:border-[#B8924B] text-[#5E6D77]'
                      }`}
                    >
                      <Clock className="w-4 h-4 text-[#B8924B]" />
                      <span>{loc(time, language)}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Target Date */}
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block">
                  {l3(language, 'Ориентировъчна дата (по избор)', 'Preferred Date (Optional)', 'Data Indicativa (Opcional)')}
                </label>
                <div className="relative max-w-xs">
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white"
                  />
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="pt-6 flex items-center justify-between border-t border-[#E8E2D8]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 text-sm font-semibold text-[#5E6D77] hover:text-[#0A1926] transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{l3(language, 'Назад', 'Back', 'Voltar')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#0A1926] rounded-md hover:bg-[#18344A] transition-colors flex items-center gap-2"
                >
                  <span>{l3(language, 'Към контактни данни', 'Patient Information', 'Dados do Paciente')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Patient Information */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#0A1926] mb-0.5">
                      {l3(
                        language,
                        'Данни за контакт (Симулация)',
                        'Patient Contact Information (Simulation)',
                        'Dados de Contacto do Paciente (Simulação)'
                      )}
                    </h3>
                    <p className="text-xs text-[#5E6D77]">
                      {l3(
                        language,
                        'Моля, НЕ въвеждайте реални лични или медицински данни.',
                        'Please do NOT enter real personal or medical information.',
                        'Por favor, NÃO introduza dados pessoais ou clínicos reais.'
                      )}
                    </p>
                  </div>

                  {/* Auto-fill Sample Demo Data button */}
                  <div className="flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={handlePopulateSample}
                      className="px-3 py-1.5 text-xs font-semibold text-[#184D58] bg-[#FAF4EB] border border-[#E8D8BF] hover:bg-[#F2E7D5] rounded-md transition-colors"
                    >
                      {l3(language, '🧪 Попълни примерни данни', '🧪 Auto-fill Sample Data', '🧪 Preencher Dados de Exemplo')}
                    </button>
                    <button
                      type="button"
                      onClick={handleDirectSimulation}
                      className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0A1926] hover:bg-[#18344A] rounded-md transition-colors"
                    >
                      {l3(language, '⚡ Директен тест', '⚡ Instant Test', '⚡ Teste Imediato')}
                    </button>
                  </div>
                </div>

                <div className="p-3 bg-[#FAF8F5] border border-[#E8E2D8] rounded-md text-[11px] text-[#5E6D77] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#B8924B] shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Всички стойности се обработват локално в браузъра и не се изпращат или записват.',
                      'All values remain purely local to your browser session and are never transmitted or stored.',
                      'Todos os dados são processados exclusivamente na sessão local do navegador e nunca são transmitidos ou guardados.'
                    )}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="consult-fullname" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                    {l3(language, 'Име и фамилия (примерни) *', 'Full Name (Sample) *', 'Nome Completo (Exemplo) *')}
                  </label>
                  <input
                    id="consult-fullname"
                    type="text"
                    required
                    placeholder={l3(language, 'Иван Иванов', 'Alexander Davis', 'Rui Silva')}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white"
                  />
                  {errors.fullName && <p className="text-xs text-rose-600 mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="consult-phone" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                    {l3(language, 'Телефон за връзка *', 'Phone Number *', 'Número de Contacto *')}
                  </label>
                  <input
                    id="consult-phone"
                    type="tel"
                    required
                    placeholder="+359 88 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white"
                  />
                  {errors.phone && <p className="text-xs text-rose-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="consult-email" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                  {l3(language, 'Имейл адрес *', 'Email Address *', 'Endereço de E-mail *')}
                </label>
                <input
                  id="consult-email"
                  type="email"
                  required
                  placeholder="patient@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white"
                />
                {errors.email && <p className="text-xs text-rose-600 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="consult-notes" className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] block mb-1">
                  {l3(language, 'Бележки или оплаквания (по желание)', 'Symptoms or Treatment Notes (Optional)', 'Notas ou Sintomas (Opcional)')}
                </label>
                <textarea
                  id="consult-notes"
                  rows={3}
                  placeholder={l3(
                    language,
                    'Опишете накратко симптоми, предишни лечения или конкретни въпроси...',
                    'Briefly note any acute symptoms, historical treatments, or specific questions...',
                    'Descreva brevemente sintomas, tratamentos prévios ou dúvidas específicas...'
                  )}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm border border-[#E8E2D8] rounded-md focus:outline-hidden focus:border-[#0A1926] bg-white resize-none"
                />
              </div>

              {/* Summary Preview Box */}
              <div className="bg-[#FAF8F5] p-4 rounded-lg border border-[#E8E2D8] text-xs space-y-1.5 text-[#5E6D77]">
                <div className="font-semibold text-[#0A1926] mb-1">
                  {l3(language, 'Преглед на заявката:', 'Request Summary:', 'Resumo do Pedido:')}
                </div>
                <div className="flex justify-between">
                  <span>{l3(language, 'Направление:', 'Discipline:', 'Especialidade:')}</span>
                  <span className="font-medium text-[#0A1926]">
                    {chosenDisciplineObj ? loc(chosenDisciplineObj.name, language) : ''}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{l3(language, 'Времеви слот:', 'Time Slot:', 'Horário:')}</span>
                  <span className="font-medium text-[#0A1926]">{getTimeLabel(preferredTime)}</span>
                </div>
              </div>

              <div className="pt-6 flex items-center justify-between border-t border-[#E8E2D8]">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2.5 text-sm font-semibold text-[#5E6D77] hover:text-[#0A1926] transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>{l3(language, 'Назад', 'Back', 'Voltar')}</span>
                </button>
                <button
                  type="submit"
                  className="px-7 py-3 text-sm font-semibold text-white bg-[#0A1926] rounded-md hover:bg-[#18344A] transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#B8924B]" />
                  <span>{l3(language, 'Изпратете демонстрационна заявка', 'Submit Demonstration Request', 'Submeter Pedido de Demonstração')}</span>
                </button>
              </div>
            </form>
          )}

          {/* STEP 4: Success Receipt / Demonstration Confirmation */}
          {step === 4 && (
            <div className="text-center py-8 space-y-6 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-[#FAF4EB] border-2 border-[#B8924B] flex items-center justify-center mx-auto text-[#B8924B]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#B8924B] font-semibold block">
                  {l3(language, 'Успешна симулация', 'Demonstration Verified', 'Simulação Verificada')}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#0A1926]">
                  {l3(
                    language,
                    'Заявката за час е симулирана успешно',
                    'Consultation Request Simulated',
                    'Pedido de Consulta Simulado com Sucesso'
                  )}
                </h3>
                <p className="text-sm text-[#5E6D77] leading-relaxed">
                  {l3(
                    language,
                    `Благодарим Ви, ${formData.fullName || 'пациент'}! Във финалната версия на уебсайта клиниката ще получи известие в реално време за потвърждение.`,
                    `Thank you, ${formData.fullName || 'Patient'}! In the commissioned website version, clinic coordinators receive real-time notification.`,
                    `Obrigado, ${formData.fullName || 'estimado paciente'}! Na versão final de produção, a equipa clínica recebe uma notificação instantânea para confirmação da consulta.`
                  )}
                </p>
              </div>

              {/* Receipt Summary Card */}
              <div className="max-w-md mx-auto text-left bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg p-5 text-xs space-y-2.5">
                <div className="font-semibold text-sm text-[#0A1926] pb-2 border-b border-[#E8E2D8] flex items-center justify-between">
                  <span>{l3(language, 'Протокол за демонстрация', 'Simulation Receipt', 'Comprovativo de Simulação')}</span>
                  <span className="text-[#B8924B] font-mono">DEMO-LDC-2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFEBE3]">
                  <span className="text-[#5E6D77]">{l3(language, 'Дисциплина', 'Discipline', 'Especialidade')}</span>
                  <span className="font-medium text-[#0A1926]">
                    {chosenDisciplineObj ? loc(chosenDisciplineObj.name, language) : ''}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFEBE3]">
                  <span className="text-[#5E6D77]">{l3(language, 'Локация', 'Operatory', 'Localização')}</span>
                  <span className="font-medium text-[#0A1926]">
                    {l3(language, 'ул. „Чумерна“ 12, София', '12 Chumerna St, Sofia', 'Rua Chumerna, 12, Sófia')}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#EFEBE3]">
                  <span className="text-[#5E6D77]">{l3(language, 'Интервал', 'Timeframe', 'Intervalo Horário')}</span>
                  <span className="font-medium text-[#0A1926]">{getTimeLabel(preferredTime)}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-[#5E6D77]">{l3(language, 'Статус на данните', 'Data Status', 'Estado dos Dados')}</span>
                  <span className="text-emerald-700 font-medium">
                    {l3(language, 'Не се съхраняват (Защитено)', 'Not Stored (Sandboxed)', 'Não Armazenados (Protegido)')}
                  </span>
                </div>
              </div>

              <div className="pt-4 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setFormData({ fullName: '', phone: '', email: '', notes: '' });
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-[#0A1926] bg-[#F4EFEA] hover:bg-[#E8E2D8] rounded-md transition-colors"
                >
                  {l3(language, 'Нова демонстрационна заявка', 'Simulate Another Booking', 'Simular Nova Marcação')}
                </button>
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
