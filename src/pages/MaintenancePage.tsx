import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { MAINTENANCE_PROGRAMS } from '../data/clinicData';
import { loc, locArr, l3 } from '../utils/localize';
import { Clock, Check, ArrowRight, HeartPulse } from 'lucide-react';
import {
  ScrollReveal,
  PopupCard,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const MaintenancePage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: {
      bg: 'Профилактика и Поддръжка | Laser Dental Clinic София',
      en: 'Preventive Care & Maintenance Programs | Laser Dental Clinic Sofia',
      pt: 'Cuidados Preventivos e Programas de Manutenção | Laser Dental Clinic Sófia'
    },
    description: {
      bg: 'Индивидуални програми за поддръжка в Laser Dental Clinic: лазерна пародонтална хигиенизация, грижа за импланти и оклузален рекол.',
      en: 'Personalized maintenance and recall programs at Laser Dental Clinic: periodontal laser hygiene, implant longevity care, and occlusal recall.',
      pt: 'Programas de manutenção personalizados na Laser Dental Clinic: higiene periodontal a laser, preservação de implantes e controlo oclusal contínuo.'
    }
  });

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Editorial Header */}
      <FadeScale className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Профилактика и рекол', 'Preventative Care & Recall', 'Cuidados Preventivos & Manutenção')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] tracking-tight mb-4">
          {l3(
            language,
            'Специализирани програми за дългосрочна поддръжка',
            'Specialized Long-Term Maintenance Programmes',
            'Programas Especializados de Manutenção a Longo Prazo'
          )}
        </h1>
        <p className="text-base text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Истинският успех на денталното лечение се измерва с неговата стабилност след години. Нашите поддържащи протоколи предотвратяват възпаления, костна загуба и рецидиви чрез лазерна деконтаминация.',
            'True clinical success is measured by biological stability over decades. Our supportive maintenance protocols prevent periodontal breakdown and bone loss through gentle laser decontamination.',
            'O verdadeiro sucesso do tratamento dentário mede-se pela sua estabilidade ao longo dos anos. Os nossos protocolos de manutenção preventiva evitam inflamações, perda óssea e recidivas através de descontaminação suave por laser.'
          )}
        </p>
      </FadeScale>

      {/* Program Cards Grid with Category F StaggerGroup */}
      <StaggerGroup variant="scale" staggerMs={120} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MAINTENANCE_PROGRAMS.map((program) => (
          <div
            key={program.id}
            className="bg-white border border-[#E8E2D8] rounded-2xl p-7 sm:p-9 shadow-xs hover:border-[#B8924B] transition-colors flex flex-col justify-between"
          >
            <div className="space-y-6">
              
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#B8924B]">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{loc(program.frequency, language)}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1926]">
                  {loc(program.title, language)}
                </h2>
                <div className="text-xs font-medium text-[#184D58]">
                  {loc(program.targetGroup, language)}
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#5E6D77] leading-relaxed font-light">
                {loc(program.description, language)}
              </p>

              {/* Clinical Procedures Included */}
              <div className="space-y-2.5 pt-2">
                <span className="text-[11px] uppercase font-semibold text-[#0A1926] tracking-wider block">
                  {l3(language, 'Включени клинични процедури:', 'Clinical Procedures Included:', 'Procedimentos Clínicos Incluídos:')}
                </span>
                <div className="space-y-2">
                  {locArr(program.procedures, language).map((proc, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#334155]">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                      <span>{proc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinical Aim */}
              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs text-[#0A1926]">
                <strong className="block text-[10px] uppercase tracking-wider text-[#B8924B] mb-1 font-semibold">
                  {l3(language, 'Клинична цел:', 'Clinical Aim:', 'Objetivo Clínico:')}
                </strong>
                <span>{loc(program.clinicalAim, language)}</span>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-[#F2ECE4]">
              <Link
                to="/consultation"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A1926] hover:text-[#B8924B] transition-colors"
              >
                <span>{l3(language, 'Запишете час за поддържаща процедура', 'Schedule maintenance visit', 'Marcar consulta de manutenção')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        ))}
      </StaggerGroup>

      {/* Philosophy Callout with Category B PopupCard */}
      <PopupCard className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-8 max-w-3xl mx-auto text-center space-y-3">
        <HeartPulse className="w-8 h-8 text-[#B8924B] mx-auto" />
        <h3 className="text-xl font-serif font-bold text-[#0A1926]">
          {l3(language, 'Прозрачност и етика', 'Clinical Integrity & Ethics', 'Transparência Clínica e Ética')}
        </h3>
        <p className="text-xs text-[#5E6D77] leading-relaxed max-w-xl mx-auto">
          {l3(
            language,
            'Всички поддържащи програми се адаптират спрямо индивидуалния пародонтален и оклузален статус на пациента, установен чрез 3D сканиране. Не се начисляват скрити такси или ненужни интервенции.',
            'All maintenance regimens are custom-tailored to the individual periodontal and occlusal status mapped via 3D diagnostics. We never recommend unindicated procedures or create arbitrary packages.',
            'Todos os planos de manutenção são adaptados ao estado periodontal e oclusal específico de cada paciente, avaliado através de diagnóstico 3D. Não existem procedimentos desnecessários nem custos ocultos.'
          )}
        </p>
      </PopupCard>

    </div>
  );
};
