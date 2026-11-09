import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { SCIENTIFIC_ARTICLES } from '../data/clinicData';
import { Article } from '../types';
import { loc, locArr, l3 } from '../utils/localize';
import { ArrowRight, X } from 'lucide-react';
import {
  PopupCard,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const ArticlesPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  useSEO({
    title: {
      bg: 'Научни Статии и Публикации | Laser Dental Clinic София',
      en: 'Scientific Articles & Publications | Laser Dental Clinic Sofia',
      pt: 'Artigos Científicos e Publicações | Laser Dental Clinic Sófia'
    },
    description: {
      bg: 'Научен архив и медицински статии за хидрокинетични лазери, CBCT диагностика, гнатология и биологична стоматология от Laser Dental Clinic.',
      en: 'Scientific archive and medical articles on hydrokinetic lasers, CBCT imaging, gnathology, and biological dentistry by Laser Dental Clinic.',
      pt: 'Arquivo científico e artigos médicos sobre lasers hidrocinéticos, diagnóstico CBCT, gnatologia e medicina dentária biológica da Laser Dental Clinic.'
    }
  });

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedArticle(null);
      }
    };
    if (selectedArticle) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedArticle]);

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      
      {/* Header */}
      <FadeScale className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Научен архив', 'Scientific & Clinical Archive', 'Arquivo Científico & Clínico')}
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] tracking-tight mb-4">
          {l3(
            language,
            'Доказателствена дентална медицина и лазерна биофизика',
            'Evidence-Based Dental Medicine & Laser Biophysics',
            'Medicina Dentária Baseada na Evidência & Biofísica Laser'
          )}
        </h1>
        <p className="text-base text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Образователни научни обзори върху механизмите на хидрокинетичната аблация, 3D томографията, фотобиомодулацията и функционалната гнатология.',
            'Peer-reviewed clinical educational literature detailing hydrokinetic ablation dynamics, volumetric CBCT diagnostics, photobiomodulation, and functional gnathology.',
            'Revisões científicas e literatura clínica sobre os mecanismos de ablação hidrocinética, tomografia volumétrica CBCT, fotobiomodulação e gnatologia funcional.'
          )}
        </p>
      </FadeScale>

      {/* Articles Grid with Category F StaggerGroup */}
      <StaggerGroup variant="scale" staggerMs={110} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SCIENTIFIC_ARTICLES.map((article) => (
          <article
            key={article.id}
            className="bg-white border border-[#E8E2D8] rounded-xl p-6 shadow-xs hover:border-[#B8924B] transition-all flex flex-col justify-between"
          >
            <div className="space-y-4">
              
              {/* Unboxed metadata according to Zero-Pill discipline */}
              <div className="flex items-center gap-2 text-xs text-[#5E6D77]">
                <span className="font-semibold text-[#184D58]">
                  {loc(article.category, language)}
                </span>
                <span aria-hidden="true" className="text-slate-300">·</span>
                <span>{article.readTime}</span>
              </div>

              <h2 className="text-lg font-serif font-bold text-[#0A1926] leading-snug">
                {loc(article.title, language)}
              </h2>

              <p className="text-xs text-[#5E6D77] leading-relaxed line-clamp-4">
                {loc(article.summary, language)}
              </p>

            </div>

            <div className="pt-6 mt-4 border-t border-[#F2ECE4] flex items-center justify-between">
              <span className="text-[11px] text-slate-400 font-mono">{article.date}</span>
              <button
                type="button"
                onClick={() => setSelectedArticle(article)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1926] hover:text-[#B8924B] transition-colors"
              >
                <span>{l3(language, 'Прочетете статията', 'Read Article', 'Ler Artigo')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </article>
        ))}
      </StaggerGroup>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A1926]/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
        >
          <div 
            className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-[#E8E2D8] shadow-2xl p-6 sm:p-10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-[#0A1926] hover:bg-[#FAF8F5] transition-colors"
              aria-label={l3(language, 'Затвори прегледа', 'Close Article', 'Fechar Artigo')}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs text-[#5E6D77]">
                <span className="font-semibold text-[#184D58]">
                  {loc(selectedArticle.category, language)}
                </span>
                <span aria-hidden="true">·</span>
                <span>{selectedArticle.readTime}</span>
                <span aria-hidden="true">·</span>
                <span className="font-mono">{selectedArticle.date}</span>
              </div>

              <h2 id="article-modal-title" className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1926] leading-tight">
                {loc(selectedArticle.title, language)}
              </h2>

              <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8] text-xs text-[#0A1926] italic leading-relaxed">
                {loc(selectedArticle.summary, language)}
              </div>

              <div className="space-y-4 text-sm text-[#334155] leading-relaxed font-light">
                {locArr(selectedArticle.content, language).map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {/* Scientific References */}
              <div className="pt-6 border-t border-[#E8E2D8] space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-[#B8924B]">
                  {l3(language, 'Научни литературни източници:', 'Peer-Reviewed Scientific Literature:', 'Fontes e Literatura Científica:')}
                </h4>
                <ul className="space-y-1.5 text-xs text-[#5E6D77] font-mono">
                  {selectedArticle.scientificReferences.map((ref, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#B8924B]">[{idx + 1}]</span>
                      <span>{ref}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#0A1926] hover:bg-[#18344A] rounded-md transition-colors"
                >
                  {l3(language, 'Затвори прегледа', 'Close Article', 'Fechar Artigo')}
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
