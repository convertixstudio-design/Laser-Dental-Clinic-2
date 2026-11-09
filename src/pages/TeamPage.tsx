import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { TEAM_PLACEHOLDERS } from '../data/clinicData';
import { loc, locArr, l3 } from '../utils/localize';
import { ShieldAlert, Check } from 'lucide-react';
import {
  ScrollReveal,
  PopupCard,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const TeamPage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: {
      bg: 'Медицински екип и стандарти | Laser Dental Clinic София',
      en: 'Clinical Team & Standards | Laser Dental Clinic Sofia',
      pt: 'Equipa Clínica e Padrões Médicos | Laser Dental Clinic Sófia'
    },
    description: {
      bg: 'Интердисциплинарен медицински екип и специализирани стандарти в Laser Dental Clinic, София.',
      en: 'Interdisciplinary clinical team structure and European standards at Laser Dental Clinic, Sofia.',
      pt: 'Estrutura interdisciplinar da equipa clínica e padrões europeus na Laser Dental Clinic, Sófia.'
    }
  });

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Editorial Header */}
      <FadeScale className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Медицински екип', 'Clinical Team', 'Equipa Médica')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] tracking-tight mb-4">
          {l3(
            language,
            'Специализирана екипна структура и стандарти',
            'Specialized Clinical Structure & Standards',
            'Estrutura Clínica Especializada & Padrões'
          )}
        </h1>
        <p className="text-base text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Интердисциплинарният модел на Laser Dental Clinic обединява експерти в лазерната хирургия, микроскопската ендодонтия, ортодонтията и пародонталната регенерация.',
            'Laser Dental Clinic’s interdisciplinary model integrates clinicians across hydrokinetic laser surgery, microscopic endodontics, gnathology, and periodontal biology.',
            'O modelo interdisciplinar da Laser Dental Clinic integra médicos dentistas especializados em cirurgia laser hidrocinética, endodontia microscópica, ortodontia e biologia periodontal.'
          )}
        </p>
      </FadeScale>

      {/* Mandatory Demonstration Policy Banner with Category B PopupCard */}
      <PopupCard delayMs={100} className="bg-[#FAF4EB] border border-[#E8D8BF] rounded-xl p-5 sm:p-6 flex items-start gap-4 shadow-xs">
        <ShieldAlert className="w-5 h-5 text-[#B8924B] shrink-0 mt-0.5" />
        <div className="text-xs text-[#5D4E37] space-y-1.5">
          <p className="font-semibold text-sm text-[#3D301F]">
            {l3(
              language,
              'Етичен стандарт на демонстрацията (Convertix_studio):',
              'Ethical Demonstration Standard (Convertix_studio):',
              'Padrão Ético da Demonstração (Convertix_studio):'
            )}
          </p>
          <p className="leading-relaxed">
            {l3(
              language,
              'С цел пълна етичност и точност, в тази демонстрационна концепция не се използват измислени лекарски имена, фиктивни снимки или неистински биографии. По-долу е представена предложената екипна архитектура с ясно обозначени длъжностни позиции, които ще бъдат попълнени с верифицираните лекари на Laser Dental Clinic при официалното въвеждане на сайта в експлоатация.',
              'In strict adherence to medical ethics, this design proposal contains zero fabricated clinician identities, stock portraits, or mock biographies. Below is the proposed department hierarchy with clearly marked clinical positions, to be populated with Laser Dental Clinic’s verified accredited medical staff upon commissioning.',
              'Em rigoroso cumprimento da ética médica, esta proposta conceptual não recorre a identidades clínicas fictícias, retratos de banco de imagens ou biografias inventadas. Apresenta-se de seguida a arquitetura clínica departamental proposta, com posições funcionais claramente identificadas, que serão preenchidas com os médicos acreditados da Laser Dental Clinic aquando da entrada em produção do website.'
            )}
          </p>
        </div>
      </PopupCard>

      {/* Team Placeholders Grid with Category F StaggerGroup */}
      <StaggerGroup variant="scale" staggerMs={110} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {TEAM_PLACEHOLDERS.map((member, index) => (
          <div
            key={member.id}
            className="bg-white border border-[#E8E2D8] rounded-xl p-7 flex flex-col justify-between shadow-xs hover:border-[#B8924B] transition-colors"
          >
            <div className="space-y-4">
              
              {/* Neutral Clinical Silhouette Indicator */}
              <div className="w-16 h-16 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#B8924B] font-serif font-bold text-xl">
                0{index + 1}
              </div>

              <div>
                <span className="text-[11px] font-mono text-[#B8924B] uppercase tracking-wider block mb-1">
                  {l3(language, 'Клинична позиция', 'Clinical Position', 'Posição Clínica')}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#0A1926] leading-snug">
                  {loc(member.role, language)}
                </h3>
              </div>

              <div className="text-xs text-[#184D58] font-medium leading-relaxed">
                {loc(member.department, language)}
              </div>

              {/* Focus Areas */}
              <div className="space-y-2 pt-2 border-t border-[#F2ECE4]">
                <span className="text-[10px] uppercase font-semibold text-[#5E6D77] tracking-wider block">
                  {l3(language, 'Клиничен фокус:', 'Clinical Focus:', 'Foco Clínico:')}
                </span>
                <div className="space-y-1">
                  {locArr(member.focusAreas, language).map((focus, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#334155]">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span>{focus}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Verification Placeholder Footer Note */}
            <div className="mt-6 pt-4 border-t border-[#F2ECE4] text-[11px] text-[#5E6D77] italic leading-tight">
              {loc(member.placeholderNote, language)}
            </div>

          </div>
        ))}
      </StaggerGroup>

      {/* Bottom CTA */}
      <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#0A1926] mb-1">
            {l3(
              language,
              'Желаете ли консултация с подходящия специалист?',
              'Consultation with our Clinical Specialists',
              'Deseja uma consulta com o especialista indicado?'
            )}
          </h3>
          <p className="text-xs text-[#5E6D77]">
            {l3(
              language,
              'Нашият приемен координатор ще ви насочи към правилния протокол.',
              'Our clinical coordinator will direct you to the appropriate diagnostic protocol.',
              'O nosso coordenador clínico orientará o seu caso para o protocolo de diagnóstico adequado.'
            )}
          </p>
        </div>
        <Link
          to="/consultation"
          className="px-6 py-3 text-xs font-semibold text-white bg-[#0A1926] hover:bg-[#18344A] rounded-md transition-colors shrink-0"
        >
          {l3(language, 'Запишете час', 'Book Consultation', 'Marcar Consulta')}
        </Link>
      </div>

    </div>
  );
};
