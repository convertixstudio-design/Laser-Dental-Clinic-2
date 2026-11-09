import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { TECHNOLOGIES } from '../data/clinicData';
import { loc, locArr, l3 } from '../utils/localize';
import { Check, Cpu } from 'lucide-react';
import {
  LaserBeamIcon,
  Volumetric3DIcon,
  MicronPrecisionIcon,
  BioStabilityIcon,
  FunctionalOcclusionIcon,
  PeriodontalGumIcon
} from '../components/icons/ClinicalIcons';
import { TextReveal } from '../components/animations/TextReveal';
import { MandatoryDisclosure } from '../components/common/MandatoryDisclosure';
import {
  ScrollReveal,
  PopupCard,
  ZoomVisual,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const TechnologiesPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedTech, setSelectedTech] = useState<string>('waterlase');

  useSEO({
    title: {
      bg: 'Лазерни и 3D Технологии | Waterlase, CBCT & Diagnocam — Laser Dental Clinic',
      en: 'Laser & 3D Technologies | Waterlase, CBCT & Diagnocam — Laser Dental Clinic',
      pt: 'Tecnologias Laser & 3D | Waterlase, CBCT & Diagnocam — Laser Dental Clinic'
    },
    description: {
      bg: 'Дигитална апаратура в Laser Dental Clinic София: Waterlase Er,Cr:YSGG лазер, 3D CBCT скенер с ниска доза, беземисионен Diagnocam и оптично 3D сканиране.',
      en: 'High-tier technology at Laser Dental Clinic Sofia: Waterlase Er,Cr:YSGG hydrokinetic laser, low-dose 3D CBCT, radiation-free Diagnocam, and 3D digital impressions.',
      pt: 'Infraestrutura digital na Laser Dental Clinic em Sófia: laser Waterlase Er,Cr:YSGG, tomografia CBCT 3D de baixa dosagem, Diagnocam sem radiação e impressões 3D digitais.'
    }
  });

  const currentTech = TECHNOLOGIES.find((t) => t.id === selectedTech) || TECHNOLOGIES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'waterlase': return <LaserBeamIcon className="w-5 h-5 text-[#B8924B]" />;
      case 'cbct-3d': return <Volumetric3DIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'intraoral-scanning': return <MicronPrecisionIcon className="w-5 h-5 text-[#B8924B]" />;
      case 'diagnocam': return <PeriodontalGumIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      case 'photobiomodulation': return <BioStabilityIcon className="w-5 h-5 text-[#B8924B]" />;
      case 'functional-diagnostics': return <FunctionalOcclusionIcon className="w-5 h-5 text-teal-600 dark:text-teal-400" />;
      default: return <LaserBeamIcon className="w-5 h-5 text-[#B8924B]" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Editorial Header */}
      <div className="max-w-3xl space-y-3">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block">
          {l3(language, 'Дигитална инфраструктура', 'Digital Infrastructure', 'Infraestrutura Digital')}
        </span>
        <TextReveal effect="blur" as="h1" className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] dark:text-white tracking-tight">
          {l3(
            language,
            'Авангардни технологии за биологично щадяща терапия',
            'Advanced Technologies for Biologically Conscious Care',
            'Tecnologias Avançadas para Tratamento Biologicamente Consciente'
          )}
        </TextReveal>
        <TextReveal effect="paragraph" as="p" className="text-base text-[#5E6D77] dark:text-slate-300 font-light leading-relaxed">
          {l3(
            language,
            'Премахваме механичната травма и неприятните звуци на стандартната стоматология. Интегрираме златен европейски стандарт за лазерна хирургия и 3D диагностика.',
            'Eliminating the mechanical trauma and high-frequency noise of standard dentistry. We integrate gold-standard laser surgery and low-dose volumetric imaging.',
            'Eliminamos o trauma mecânico e o ruído da medicina dentária convencional. Integramos o padrão europeu de referência em cirurgia laser e imagiologia 3D.'
          )}
        </TextReveal>
      </div>

      {/* Interactive Technology Selector Grid with Category E StaggerGroup */}
      <StaggerGroup variant="drop-down" staggerMs={70} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {TECHNOLOGIES.map((tech) => {
          const isSelected = tech.id === selectedTech;
          return (
            <button
              key={tech.id}
              type="button"
              onClick={() => setSelectedTech(tech.id)}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? 'bg-[#0A1926] text-white border-[#0A1926] shadow-sm'
                  : 'bg-white text-[#0A1926] border-[#E8E2D8] hover:border-[#B8924B]'
              }`}
            >
              <div className="mb-3">{getIcon(tech.id)}</div>
              <div>
                <div className="text-xs font-bold leading-snug mb-1">
                  {tech.name.split(' ')[0]} {tech.name.split(' ')[1] || ''}
                </div>
                <div className={`text-[10px] leading-tight ${isSelected ? 'text-slate-300' : 'text-[#5E6D77]'}`}>
                  {loc(tech.type, language).split(' ')[0]}...
                </div>
              </div>
            </button>
          );
        })}
      </StaggerGroup>

      {/* Selected Technology Deep Dive with Category B PopupCard */}
      <PopupCard key={currentTech.id} className="bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-12 shadow-sm space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#184D58]">
              {loc(currentTech.type, language)}
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0A1926]">
              {currentTech.name}
            </h2>
            <p className="text-sm font-medium text-[#B8924B] italic">
              {loc(currentTech.tagline, language)}
            </p>
            <p className="text-sm text-[#334155] leading-relaxed font-light pt-2">
              {loc(currentTech.description, language)}
            </p>
          </div>

          <div className="lg:col-span-5">
            {currentTech.id === 'waterlase' ? (
              <ZoomVisual direction="in" className="rounded-xl overflow-hidden border border-[#E8E2D8] shadow-xs relative group">
                <picture>
                  <source type="image/webp" srcSet="/images/tech_waterlase_laser-mobile.webp 600w, /images/tech_waterlase_laser.webp 1200w" sizes="50vw" />
                  <img
                    src="/images/tech_waterlase_laser.jpg"
                    alt={l3(language, 'WATERLASE лазерна конзола', 'WATERLASE laser console', 'Consola laser WATERLASE')}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
              </ZoomVisual>
            ) : currentTech.id === 'cbct-3d' ? (
              <ZoomVisual direction="in" className="rounded-xl overflow-hidden border border-[#E8E2D8] shadow-xs relative group">
                <picture>
                  <source type="image/webp" srcSet="/images/tech_cbct_diagnostics-mobile.webp 600w, /images/tech_cbct_diagnostics.webp 1200w" sizes="50vw" />
                  <img
                    src="/images/tech_cbct_diagnostics.jpg"
                    alt={l3(language, 'CBCT 3D томограф', 'CBCT 3D volumetric scanner', 'Tomógrafo volumétrico CBCT 3D')}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
              </ZoomVisual>
            ) : currentTech.id === 'intraoral-scanning' ? (
              <ZoomVisual direction="in" className="rounded-xl overflow-hidden border border-[#E8E2D8] shadow-xs relative group">
                <picture>
                  <source type="image/webp" srcSet="/images/intraoral_3d_scanning-mobile.webp 720w, /images/intraoral_3d_scanning.webp 1600w" sizes="50vw" />
                  <img
                    src="/images/intraoral_3d_scanning.webp"
                    alt={l3(language, 'Оптичен 3D скенер', 'Optical 3D scanner', 'Scanner ótico 3D')}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                </picture>
              </ZoomVisual>
            ) : (
              <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0A1926]">
                  <Cpu className="w-4 h-4 text-[#B8924B]" />
                  <span>{l3(language, 'Технически спецификации', 'Hardware Specifications', 'Especificações Técnicas')}</span>
                </div>
                <div className="space-y-2 text-xs text-[#5E6D77]">
                  {locArr(currentTech.specs, language).map((sp, idx) => (
                    <div key={idx} className="pb-2 border-b border-[#E8E2D8] last:border-0">
                      {sp}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>

        {/* Clinical Advantages Breakdown */}
        <div className="border-t border-[#E8E2D8] pt-8 space-y-4">
          <h3 className="text-xs uppercase tracking-widest font-semibold text-[#B8924B]">
            {l3(language, 'Доказани клинични предимства', 'Evidence-Based Clinical Advantages', 'Vantagens Clínicas Comprovadas')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locArr(currentTech.clinicalAdvantage, language).map((adv, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] flex items-start gap-3">
                <Check className="w-4 h-4 text-teal-700 shrink-0 mt-0.5" />
                <span className="text-xs text-[#0A1926] font-medium leading-relaxed">{adv}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory Disclosure */}
        <MandatoryDisclosure variant="card" />

        {/* CTA */}
        <div className="pt-6 border-t border-[#E8E2D8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#5E6D77]">
            {l3(
              language,
              'Искате ли да изпитате лечение с тази технология?',
              'Experience treatment powered by this technology.',
              'Deseja realizar o seu tratamento com esta tecnologia?'
            )}
          </p>
          <Link
            to="/consultation"
            className="px-6 py-3 text-xs font-semibold text-white bg-[#0A1926] hover:bg-[#18344A] rounded-md transition-colors"
          >
            {l3(language, 'Запишете преглед', 'Schedule Diagnostic Exam', 'Marcar Consulta de Avaliação')}
          </Link>
        </div>

      </PopupCard>

    </div>
  );
};
