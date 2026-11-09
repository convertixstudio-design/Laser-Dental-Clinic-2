import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { PATIENT_JOURNEY_STEPS } from '../data/clinicData';
import { loc, locArr, l3 } from '../utils/localize';
import { Check, Sparkles } from 'lucide-react';
import {
  ScrollReveal,
  PopupCard,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const PatientJourneyPage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: {
      bg: 'Пациентски път и етапи на лечение | Laser Dental Clinic София',
      en: 'Patient Journey & Treatment Steps | Laser Dental Clinic Sofia',
      pt: 'Percurso do Paciente e Etapas do Tratamento | Laser Dental Clinic Sófia'
    },
    description: {
      bg: 'Вашият път към дългосрочно орално здраве в Laser Dental Clinic: 4 ясни етапа от 3D дигитална диагностика и начална терапия до профилактичен контрол.',
      en: 'Your path to sustained long-term oral health at Laser Dental Clinic: 4 structured stages from 3D digital diagnosis and initial therapy to preventive recall.',
      pt: 'O seu caminho para a saúde oral a longo prazo na Laser Dental Clinic: 4 etapas estruturadas desde o diagnóstico 3D e terapia inicial até à manutenção preventiva.'
    }
  });

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <FadeScale className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Пациентско изживяване', 'Patient Journey', 'Experiência do Paciente')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] tracking-tight mb-4">
          {l3(
            language,
            'Предвидим, спокоен и научно обоснован лечебен процес',
            'A Structured, Predictable, and Evidence-Based Care Pathway',
            'Um Percurso Clínico Estruturado, Previsível e Baseado em Evidência'
          )}
        </h1>
        <p className="text-base text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'В Laser Dental Clinic пациентът никога не остава в неведение. Всеки етап от диагностиката до финалното възстановяване е предварително симулиран, детайлно обяснен и щадящо изпълнен.',
            'At Laser Dental Clinic, you are never left in the dark. Every phase from initial 3D volumetric diagnosis to ongoing maintenance is digitally planned, transparently explained, and gently executed.',
            'Na Laser Dental Clinic, o paciente tem sempre total clareza sobre o seu tratamento. Cada fase, desde o diagnóstico 3D volumétrico inicial até à manutenção contínua, é planeada digitalmente, explicada de forma transparente e executada com delicadeza.'
          )}
        </p>
      </FadeScale>

      {/* 4 Steps Sequential Journey with Category F StaggerGroup */}
      <StaggerGroup variant="scale" staggerMs={130} className="space-y-8">
        {PATIENT_JOURNEY_STEPS.map((stepItem) => (
          <div
            key={stepItem.step}
            className="bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 shadow-xs relative overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Step indicator & headline */}
              <div className="lg:col-span-4 space-y-2">
                <span className="font-serif text-5xl font-bold text-[#B8924B] opacity-80 block">
                  {stepItem.step}
                </span>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#184D58] block">
                  {loc(stepItem.short, language)}
                </span>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1926]">
                  {loc(stepItem.title, language)}
                </h2>
              </div>

              {/* Description & Deliverables */}
              <div className="lg:col-span-8 space-y-6">
                <p className="text-sm text-[#334155] leading-relaxed font-light">
                  {loc(stepItem.desc, language)}
                </p>

                {/* Deliverables / Key Results */}
                <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-5 space-y-3">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#0A1926] flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-[#B8924B]" />
                    <span>
                      {l3(language, 'Какво получавате на този етап:', 'What you receive at this stage:', 'O que inclui esta etapa:')}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {locArr(stepItem.deliverables, language).map((deliv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#5E6D77]">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </StaggerGroup>

      {/* Conversion Banner with Category B PopupCard */}
      <PopupCard className="bg-[#0A1926] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 max-w-xl">
          <h3 className="text-2xl font-serif font-bold text-white">
            {l3(
              language,
              'Започнете със Стъпка 01: Пълен 3D преглед',
              'Begin with Step 01: Comprehensive 3D Exam',
              'Inicie pela Etapa 01: Avaliação Diagnóstica 3D Completa'
            )}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 font-light">
            {l3(
              language,
              'Консултацията включва конично-лъчев CBCT скенер, дигитален отпечатък и цялостен статус.',
              'Consultation encompasses low-dose volumetric CBCT, digital optical impression, and full status analysis.',
              'A consulta engloba tomografia computorizada CBCT 3D de baixa dosagem, impressão digital ótica e diagnóstico clínico integral.'
            )}
          </p>
        </div>
        <Link
          to="/consultation"
          className="px-6 py-3.5 text-xs font-semibold text-[#0A1926] bg-white hover:bg-[#FAF8F5] rounded-md transition-colors whitespace-nowrap shrink-0 shadow-xs"
        >
          {l3(language, 'Заявете консултация', 'Schedule Diagnostic Visit', 'Marcar Consulta de Avaliação')}
        </Link>
      </PopupCard>

    </div>
  );
};
