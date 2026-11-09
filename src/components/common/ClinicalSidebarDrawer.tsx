import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { CLINICAL_DISCIPLINES } from '../../data/clinicData';
import { loc, l3 } from '../../utils/localize';
import { getDisciplineIcon } from '../icons/ClinicalIcons';
import { X, ArrowRight, ShieldCheck } from 'lucide-react';

interface ClinicalSidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClinicalSidebarDrawer: React.FC<ClinicalSidebarDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { language } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      role="dialog"
      aria-modal="true"
      aria-labelledby="clinical-drawer-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0A1926]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF8F5] dark:bg-[#0A1926] border-l border-[#E8E2D8] dark:border-[#1E3A52] shadow-2xl flex flex-col justify-between overflow-y-auto">
          
          {/* Header */}
          <div className="p-6 border-b border-[#E8E2D8] dark:border-[#1E3A52] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#B8924B] block mb-1">
                {l3(language, 'Клиничен Навигатор', 'Clinical Navigator', 'Navegador Clínico')}
              </span>
              <h2
                id="clinical-drawer-title"
                className="text-lg font-serif font-bold text-[#0A1926] dark:text-white"
              >
                {l3(language, '10 Специализирани Направления', '10 Clinical Disciplines', '10 Especialidades Clínicas')}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-[#5E6D77] hover:text-[#0A1926] dark:text-slate-400 dark:hover:text-white hover:bg-[#F4EFEA] dark:hover:bg-[#152A40] transition-colors"
              aria-label={l3(language, 'Затвори панела', 'Close drawer', 'Fechar painel')}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Disciplines List */}
          <div className="p-4 sm:p-6 space-y-2 flex-1 overflow-y-auto">
            {CLINICAL_DISCIPLINES.map((d, index) => {
              const IconComp = getDisciplineIcon(d.id);
              const isActive = location.pathname === '/disciplines';

              return (
                <Link
                  key={d.id}
                  to={`/disciplines#${d.id}`}
                  onClick={onClose}
                  className="group flex items-start gap-3.5 p-3 rounded-xl bg-white dark:bg-[#112233] border border-[#E8E2D8] dark:border-[#1E3A52] hover:border-[#B8924B] transition-all hover:shadow-xs"
                >
                  <div className="p-2 rounded-lg bg-[#FAF8F5] dark:bg-[#1A334D] text-[#B8924B] group-hover:scale-105 transition-transform shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#0A1926] dark:text-white group-hover:text-[#B8924B] transition-colors truncate">
                        {loc(d.name, language)}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5E6D77] dark:text-slate-400 line-clamp-1 mt-0.5 font-light">
                      {loc(d.shortDesc, language)}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Footer Call to Action */}
          <div className="p-6 border-t border-[#E8E2D8] dark:border-[#1E3A52] bg-white dark:bg-[#112233] space-y-3">
            <div className="flex items-center gap-2 text-xs text-[#5E6D77] dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#B8924B] shrink-0" />
              <span>{l3(language, 'Биомиметични лазерни протоколи', 'Biomimetic Laser Protocols', 'Protocolos a Laser Biomiméticos')}</span>
            </div>
            <Link
              to="/consultation"
              onClick={onClose}
              className="w-full py-3 px-4 rounded-lg bg-[#0A1926] dark:bg-[#B8924B] text-white dark:text-[#0A1926] text-xs font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-[#18344A] transition-colors"
            >
              <span>{l3(language, 'Запишете диагностичен час', 'Book Diagnostic Visit', 'Marcar Consulta de Avaliação')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
