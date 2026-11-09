import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { CLINICAL_DISCIPLINES } from '../data/clinicData';
import { Discipline } from '../types';
import { loc, locArr, l3 } from '../utils/localize';
import { getDisciplineIcon } from '../components/icons/ClinicalIcons';
import { TextReveal } from '../components/animations/TextReveal';
import { MandatoryDisclosure } from '../components/common/MandatoryDisclosure';
import { Check, ArrowRight, ChevronRight, LayoutList, X, ShieldCheck } from 'lucide-react';
import {
  ScrollReveal,
  PopupCard,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const DisciplinesPage: React.FC = () => {
  const { language } = useLanguage();
  const location = useLocation();
  const [activeId, setActiveId] = useState<string>('periodontology');
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);

  // Sync hash with activeId
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash && CLINICAL_DISCIPLINES.some((d) => d.id === hash)) {
      setActiveId(hash);
    }
  }, [location.hash]);

  useSEO({
    title: {
      bg: 'Клинични направления | Laser Dental Clinic — 10 Специализации София',
      en: 'Clinical Disciplines | Laser Dental Clinic — 10 Specialties Sofia',
      pt: 'Especialidades Clínicas | Laser Dental Clinic — 10 Especialidades em Sófia'
    },
    description: {
      bg: 'Разгледайте 10-те специализирани направления на Laser Dental Clinic: лазерна пародонтология, ендодонтия, ортодонтия, гнатология, имплантология и детска дентална медицина.',
      en: 'Explore Laser Dental Clinic’s 10 clinical disciplines: laser periodontology, endodontics, orthodontics, gnathology, implantology, and pediatric dentistry.',
      pt: 'Conheça as 10 especialidades clínicas da Laser Dental Clinic: periodontologia a laser, endodontia, ortodontia, gnatologia, implantologia e medicina dentária pediátrica.'
    }
  });

  const activeIndex = CLINICAL_DISCIPLINES.findIndex((d) => d.id === activeId);
  const activeDiscipline: Discipline =
    CLINICAL_DISCIPLINES[activeIndex >= 0 ? activeIndex : 0];
  const ActiveIcon = getDisciplineIcon(activeDiscipline.id);

  const handleSelect = (id: string) => {
    setActiveId(id);
    setMobileDrawerOpen(false);
    if (window.innerWidth < 1024) {
      document.getElementById('discipline-detail')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block">
          {l3(language, 'Клиничен спектър', 'Clinical Disciplines', 'Especialidades Clínicas')}
        </span>
        <TextReveal effect="blur" as="h1" className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] dark:text-white tracking-tight">
          {l3(
            language,
            '10 Специализирани направления в модерната лазерна медицина',
            '10 Specialized Disciplines in Modern Laser Healthcare',
            '10 Especialidades na Medicina Dentária a Laser Moderna'
          )}
        </TextReveal>
        <TextReveal effect="paragraph" as="p" className="text-base text-[#5E6D77] dark:text-slate-300 font-light leading-relaxed">
          {l3(
            language,
            'Всяка процедура в Laser Dental Clinic следва строги биомиметични протоколи за запазване на здравата тъкан, прецизна 3D диагностика и комфорт без вибрации.',
            'Every clinical intervention at Laser Dental Clinic adheres to biomimetic guidelines, preserving healthy structure through 3D diagnostic precision.',
            'Cada intervenção clínica na Laser Dental Clinic cumpre rigorosas diretrizes biomiméticas, preservando a estrutura saudável através de diagnóstico 3D minucioso.'
          )}
        </TextReveal>
      </div>

      {/* Mobile / Tablet Sticky Quick-Selector Floating Bar */}
      <div className="lg:hidden sticky top-20 z-30 bg-[#FAF8F5]/95 dark:bg-[#0A1926]/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E8E2D8] dark:border-[#1E3A52] shadow-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="p-1.5 rounded-md bg-[#0A1926] dark:bg-[#B8924B] text-[#B8924B] dark:text-[#0A1926] shrink-0">
            <ActiveIcon className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#B8924B] uppercase tracking-wider">
              <span>{l3(language, 'Специализация', 'Specialty', 'Especialidade')}</span>
              <span>·</span>
              <span>{String(activeIndex + 1).padStart(2, '0')}/10</span>
            </div>
            <span className="text-xs font-semibold text-[#0A1926] dark:text-white truncate block">
              {loc(activeDiscipline.name, language)}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileDrawerOpen(!mobileDrawerOpen)}
          className="px-3 py-1.5 bg-[#0A1926] dark:bg-[#B8924B] text-white dark:text-[#0A1926] text-xs font-medium rounded-lg flex items-center gap-1.5 shrink-0 shadow-xs cursor-pointer"
          aria-expanded={mobileDrawerOpen}
          aria-controls="mobile-disciplines-list"
          aria-label={l3(language, 'Превключи списъка с направления', 'Toggle disciplines drawer', 'Alternar gaveta de especialidades')}
        >
          {mobileDrawerOpen ? (
            <>
              <X className="w-3.5 h-3.5" />
              <span>{l3(language, 'Затвори', 'Close', 'Fechar')}</span>
            </>
          ) : (
            <>
              <LayoutList className="w-3.5 h-3.5" />
              <span>{l3(language, 'Избери (10)', 'Select (10)', 'Escolher (10)')}</span>
            </>
          )}
        </button>
      </div>

      {/* Mobile Collapsible Drawer Panel */}
      {mobileDrawerOpen && (
        <div
          id="mobile-disciplines-list"
          className="lg:hidden bg-white dark:bg-[#112233] border border-[#E8E2D8] dark:border-[#1E3A52] rounded-xl p-3 shadow-lg space-y-1.5 animate-in fade-in slide-in-from-top-2"
        >
          <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#B8924B] border-b border-[#E8E2D8] dark:border-[#1E3A52] flex items-center justify-between">
            <span>{l3(language, 'Всички 10 Направления', 'All 10 Disciplines', 'Todas as 10 Especialidades')}</span>
            <span className="font-mono text-[10px] text-slate-400">01 — 10</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 max-h-80 overflow-y-auto pt-1">
            {CLINICAL_DISCIPLINES.map((d, index) => {
              const isSelected = d.id === activeId;
              const IconComp = getDisciplineIcon(d.id);
              return (
                <button
                  key={d.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleSelect(d.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-all flex items-center justify-between gap-2 ${
                    isSelected
                      ? 'bg-[#0A1926] dark:bg-[#B8924B] text-white dark:text-[#0A1926] shadow-xs font-semibold'
                      : 'text-[#41515E] dark:text-slate-300 hover:bg-[#FAF8F5] dark:hover:bg-[#1A334D]'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <IconComp className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#B8924B] dark:text-[#0A1926]' : 'text-slate-400'}`} />
                    <span className="truncate">{loc(d.name, language)}</span>
                  </div>
                  <span className={`text-[10px] font-mono shrink-0 ${isSelected ? 'opacity-80' : 'text-slate-400'}`}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Interactive Layout: Desktop Sidebar Navigation + Detailed Presentation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Interactive Discipline List (Desktop Sticky Sidebar) */}
        <div className="hidden lg:block lg:col-span-4 bg-white dark:bg-[#112233] border border-[#E8E2D8] dark:border-[#1E3A52] rounded-xl p-3.5 shadow-xs space-y-1 lg:sticky lg:top-28">
          <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#B8924B] border-b border-[#E8E2D8] dark:border-[#1E3A52] mb-1.5 flex items-center justify-between">
            <span>{l3(language, 'Изберете направление', 'Select Discipline', 'Selecione a especialidade')}</span>
            <span className="font-mono text-[10px] text-slate-400">10 / 10</span>
          </div>

          <StaggerGroup variant="drop-down" staggerMs={60} className="space-y-1">
            {CLINICAL_DISCIPLINES.map((d, index) => {
              const isSelected = d.id === activeId;
              const IconComp = getDisciplineIcon(d.id);
              return (
                <button
                  key={d.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(d.id)}
                  className={`w-full text-left px-3.5 py-3 rounded-lg text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#0A1926] text-white shadow-xs font-semibold'
                      : 'text-[#41515E] dark:text-slate-300 hover:bg-[#FAF8F5] dark:hover:bg-[#1A334D] hover:text-[#0A1926] dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <span className={`p-1.5 rounded-md ${isSelected ? 'bg-white/10 text-[#B8924B]' : 'bg-[#FAF8F5] dark:bg-[#1A334D] text-slate-500'}`}>
                      <IconComp className="w-3.5 h-3.5" />
                    </span>
                    <span className="truncate">{loc(d.name, language)}</span>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`text-[10px] font-mono ${isSelected ? 'text-[#B8924B]' : 'text-slate-400'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-[#B8924B]' : 'text-slate-300'}`} />
                  </div>
                </button>
              );
            })}
          </StaggerGroup>
        </div>

        {/* Right Column: In-Depth Discipline Detail Card with Category B PopupCard */}
        <PopupCard key={activeDiscipline.id} className="lg:col-span-8 bg-white dark:bg-[#112233] border border-[#E8E2D8] dark:border-[#1E3A52] rounded-2xl p-6 sm:p-10 shadow-sm space-y-8">
          
          {/* Header of Detail with Clinical Vector Icon */}
          <div className="border-b border-[#E8E2D8] dark:border-[#1E3A52] pb-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#184D58] dark:text-[#38BDF8] block mb-1">
                  {loc(activeDiscipline.category, language)}
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1926] dark:text-white">
                  {loc(activeDiscipline.name, language)}
                </h2>
              </div>
              <div className="p-3 rounded-xl bg-[#FAF8F5] dark:bg-[#1A334D] border border-[#E8E2D8] dark:border-[#1E3A52] text-[#B8924B] shrink-0">
                <ActiveIcon className="w-7 h-7" />
              </div>
            </div>
            <p className="mt-4 text-sm text-[#5E6D77] dark:text-slate-300 font-light leading-relaxed">
              {loc(activeDiscipline.shortDesc, language)}
            </p>
          </div>

          {/* Full Clinical Description */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#B8924B]">
              {l3(language, 'Клиничен протокол & подход', 'Clinical Protocol & Rationale', 'Protocolo Clínico & Abordagem')}
            </h3>
            <p className="text-sm text-[#334155] dark:text-slate-200 leading-relaxed font-light">
              {loc(activeDiscipline.fullDesc, language)}
            </p>
          </div>

          {/* Key Advantages */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase tracking-widest font-semibold text-[#B8924B]">
              {l3(language, 'Основни предимства за пациента', 'Key Patient Advantages', 'Principais Vantagens para o Paciente')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {locArr(activeDiscipline.keyBenefits, language).map((benefit, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#FAF8F5] dark:bg-[#0E2030] border border-[#E8E2D8] dark:border-[#1E3A52] text-xs text-[#0A1926] dark:text-slate-200">
                  <Check className="w-4 h-4 text-[#B8924B] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Indications & Technologies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] dark:text-slate-400">
                {l3(language, 'Клинични показания', 'Common Indications', 'Indicações Clínicas Comuns')}
              </h3>
              <ul className="space-y-1.5 text-xs text-[#334155] dark:text-slate-200">
                {locArr(activeDiscipline.indications, language).map((ind, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8924B]" />
                    <span>{ind}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider font-semibold text-[#5E6D77] dark:text-slate-400">
                {l3(language, 'Приложени технологии', 'Integrated Technologies', 'Tecnologias Integradas')}
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {activeDiscipline.technologiesUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-[#0A1926] dark:text-white bg-[#F4EFEA] dark:bg-[#1A334D] px-2.5 py-1 rounded border border-[#E8E2D8] dark:border-[#1E3A52]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Hairline Divider */}
          <div className="ldc-divider-micron" />

          {/* Mandatory Disclosure Note */}
          <MandatoryDisclosure variant="card" />

          {/* Action Box */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#5E6D77] dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#B8924B] shrink-0" />
              <span>
                {l3(
                  language,
                  'Желаете ли преглед в това направление?',
                  'Interested in this specialized treatment?',
                  'Deseja uma avaliação nesta especialidade?'
                )}
              </span>
            </div>
            
            <Link
              to="/consultation"
              className="px-6 py-3 text-xs font-semibold text-white bg-[#0A1926] hover:bg-[#18344A] dark:bg-[#B8924B] dark:text-[#0A1926] rounded-md transition-colors text-center flex items-center justify-center gap-2 shadow-xs"
            >
              <span>{l3(language, 'Запишете час за това направление', 'Schedule for this discipline', 'Marcar consulta para esta especialidade')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </PopupCard>

      </div>

    </div>
  );
};
