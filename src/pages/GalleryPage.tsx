import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { GALLERY_ITEMS } from '../data/clinicData';
import { GalleryItem } from '../types';
import { loc, l3 } from '../utils/localize';
import { Info, Maximize2, X } from 'lucide-react';
import { TextReveal } from '../components/animations/TextReveal';
import { MandatoryDisclosure } from '../components/common/MandatoryDisclosure';
import {
  PopupCard,
  ZoomVisual,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const GalleryPage: React.FC = () => {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'operatory' | 'technology' | 'spaces'>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  useSEO({
    title: {
      bg: 'Интериор и Клинична Атмосфера | Галерия — Laser Dental Clinic',
      en: 'Interior & Clinical Atmosphere | Gallery — Laser Dental Clinic',
      pt: 'Ambiente Clínico e Arquitetura | Galeria — Laser Dental Clinic'
    },
    description: {
      bg: 'Разгледайте интериора, операционните зали и лазерната апаратура на Laser Dental Clinic в София, ул. „Чумерна“ 12.',
      en: 'View the interior architecture, surgical operatories, and advanced laser equipment of Laser Dental Clinic in Sofia, Bulgaria.',
      pt: 'Explore o interior, consultórios cirúrgicos e equipamento laser avançado da Laser Dental Clinic em Sófia, Bulgária.'
    }
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveItem(null);
      }
    };
    if (activeItem) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeItem]);

  const filteredItems = filter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
      
      {/* Header */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Визуален архив', 'Architectural & Clinical Gallery', 'Galeria Arquitetónica & Clínica')}
        </span>
        <TextReveal effect="blur" as="h1" className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] tracking-tight mb-4">
          {l3(
            language,
            'Атмосфера на уединение, комфорт и технологично спокойствие',
            'An Atmosphere of Privacy, Sanctuary, and Clinical Calm',
            'Uma Atmosfera de Privacidade, Conforto e Serenidade Clínica'
          )}
        </TextReveal>
        <TextReveal effect="paragraph" as="p" className="text-base text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Разгледайте концептуалните интериорни зони, високотехнологичните операционни кабинети и лазерни конзоли, предложени за Laser Dental Clinic в София.',
            'Explore the proposed spatial concepts, surgical operatories, and precision laser consoles curated for Laser Dental Clinic in Sofia.',
            'Descubra os conceitos espaciais, consultórios cirúrgicos e consolas laser de precisão desenvolvidos para a Laser Dental Clinic em Sófia.'
          )}
        </TextReveal>
      </div>

      {/* Mandatory Illustrative Notice with exact prompt text */}
      <div className="space-y-3">
        <MandatoryDisclosure variant="card" className="bg-[#FAF4EB] border-[#E8D8BF]" />
      </div>

      {/* Interactive Category Filter - Zero-pill discipline (functional button tabs) */}
      <div className="flex items-center gap-1.5 p-1 bg-[#F4EFEA] border border-[#E8E2D8] rounded-lg max-w-fit">
        {[
          { key: 'all', labelBg: 'Всички', labelEn: 'All', labelPt: 'Todas' },
          { key: 'operatory', labelBg: 'Кабинети', labelEn: 'Operatories', labelPt: 'Consultórios' },
          { key: 'technology', labelBg: 'Технологии', labelEn: 'Technology', labelPt: 'Tecnologias' },
          { key: 'spaces', labelBg: 'Пространства', labelEn: 'Spaces', labelPt: 'Espaços' },
        ].map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key as any)}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all ${
              filter === tab.key
                ? 'bg-[#0A1926] text-white shadow-xs'
                : 'text-[#5E6D77] hover:text-[#0A1926]'
            }`}
          >
            {l3(language, tab.labelBg, tab.labelEn, tab.labelPt)}
          </button>
        ))}
      </div>

      {/* Gallery Grid with Category F StaggerGroup */}
      <StaggerGroup variant="scale" staggerMs={120} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            className="group bg-white rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-xs hover:border-[#B8924B] focus:outline-hidden focus:ring-2 focus:ring-[#B8924B] transition-all cursor-pointer"
            onClick={() => setActiveItem(item)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActiveItem(item);
              }
            }}
            aria-label={`${loc(item.title, language)} - ${l3(language, 'Отвори уголемен преглед', 'Open enlarged view', 'Abrir imagem ampliada')}`}
          >
            <ZoomVisual direction="in" className="relative aspect-16/10 overflow-hidden bg-neutral-100">
              <img
                src={item.imageUrl}
                alt={loc(item.title, language)}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#0A1926]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="p-3 rounded-full bg-white/90 text-[#0A1926] shadow-md">
                  <Maximize2 className="w-5 h-5" />
                </span>
              </div>
              <div className="absolute top-3 left-3 bg-[#0A1926]/85 backdrop-blur-xs text-[10px] text-white px-2.5 py-1 rounded font-mono">
                {l3(language, 'ИЛЮСТРАТИВЕН КАДЪР', 'ILLUSTRATIVE CONCEPT', 'CONCEITO ILUSTRATIVO')}
              </div>
            </ZoomVisual>

            <div className="p-6 space-y-2">
              <div className="text-[11px] font-mono text-[#B8924B] uppercase tracking-wider">
                {loc(item.categoryLabel, language)}
              </div>
              <h3 className="text-lg font-serif font-bold text-[#0A1926]">
                {loc(item.title, language)}
              </h3>
              <p className="text-xs text-[#5E6D77] leading-relaxed">
                {loc(item.description, language)}
              </p>
            </div>
          </div>
        ))}
      </StaggerGroup>

      {/* Lightbox Modal */}
      {activeItem && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A1926]/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setActiveItem(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-modal-title"
        >
          <div 
            className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl relative border border-[#E8E2D8]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#0A1926]/70 text-white hover:bg-[#0A1926] transition-colors"
              aria-label={l3(language, 'Затвори прегледа', 'Close preview', 'Fechar visualização')}
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-16/10 bg-neutral-900">
              <img
                src={activeItem.imageUrl}
                alt={loc(activeItem.title, language)}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 space-y-2 bg-[#FAF8F5]">
              <span className="text-[11px] font-mono text-[#B8924B] uppercase tracking-wider block">
                {loc(activeItem.categoryLabel, language)} · {l3(language, 'Концептуален рендер', 'Concept Asset', 'Renderização Concetual')}
              </span>
              <h3 id="gallery-modal-title" className="text-xl font-serif font-bold text-[#0A1926]">
                {loc(activeItem.title, language)}
              </h3>
              <p className="text-xs sm:text-sm text-[#5E6D77]">
                {loc(activeItem.description, language)}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
