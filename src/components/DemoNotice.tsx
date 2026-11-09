import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinicData';
import { ShieldCheck, Info } from 'lucide-react';
import { PopupCard } from './animations/GlobalAnimations';

export const DemoNotice: React.FC = () => {
  const { language } = useLanguage();

  return (
    <PopupCard as="aside" delayMs={100} className="w-full bg-[#0A1926] text-[#E8ECF0] text-xs py-2 px-4 border-b border-[#1A2E3D]">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-[#B8924B] shrink-0" />
          <p className="font-normal text-[11px] sm:text-xs text-slate-300">
            {language === 'bg' ? (
              <>
                <strong className="text-white font-medium">Демонстрационен концептуален дизайн</strong> от <span className="text-[#E2C389] font-medium">{CLINIC_INFO.agencyCredit}</span> — Не е официален уебсайт на клиниката.
              </>
            ) : language === 'pt' ? (
              <>
                <strong className="text-white font-medium">Proposta de Design Demonstrativo</strong> por <span className="text-[#E2C389] font-medium">{CLINIC_INFO.agencyCredit}</span> — Não é o website oficial da clínica.
              </>
            ) : (
              <>
                <strong className="text-white font-medium">Demonstration Design Proposal</strong> by <span className="text-[#E2C389] font-medium">{CLINIC_INFO.agencyCredit}</span> — Not the official clinic website.
              </>
            )}
          </p>
        </div>
        <div className="flex items-center gap-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-teal-400" />
            {language === 'bg' ? 'Независим дизайн проект' : language === 'pt' ? 'Projeto Concetual Independente' : 'Independent Concept'}
          </span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{language === 'bg' ? 'ул. „Чумерна“ 12, София' : language === 'pt' ? 'Rua Chumerna 12, Sófia' : '12 Chumerna St, Sofia'}</span>
        </div>
      </div>
    </PopupCard>
  );
};
