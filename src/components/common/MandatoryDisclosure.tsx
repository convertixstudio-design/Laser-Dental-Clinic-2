import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Info } from 'lucide-react';

interface MandatoryDisclosureProps {
  className?: string;
  variant?: 'inline' | 'card' | 'badge';
}

export const MandatoryDisclosure: React.FC<MandatoryDisclosureProps> = ({
  className = '',
  variant = 'inline'
}) => {
  const { language } = useLanguage();

  const text =
    language === 'pt'
      ? 'Imagens meramente ilustrativas. As fotografias reais da clínica serão adicionadas após a aprovação da equipa.'
      : language === 'bg'
      ? 'Изображенията са с илюстративен характер. Реалните фотографии на клиниката ще бъдат добавени след одобрение от екипа.'
      : 'Images are for illustrative purposes only. Actual photographs of the clinic will be added following team approval.';

  if (variant === 'card') {
    return (
      <div
        className={`flex items-center gap-2.5 p-3 rounded-lg bg-[#FAF8F5]/80 dark:bg-[#0E2030]/80 border border-[#E8E2D8] dark:border-[#1E3A52] text-xs text-[#5E6D77] dark:text-slate-400 ${className}`}
        role="note"
      >
        <Info className="w-4 h-4 text-[#B8924B] shrink-0" aria-hidden="true" />
        <span className="leading-relaxed font-light">{text}</span>
      </div>
    );
  }

  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0A1926]/75 dark:bg-black/75 backdrop-blur-md text-[11px] text-white/90 border border-white/10 ${className}`}
        role="note"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#B8924B] shrink-0" />
        <span className="font-light">{text}</span>
      </div>
    );
  }

  return (
    <p
      className={`text-xs text-[#5E6D77] dark:text-slate-400 flex items-center gap-1.5 font-light ${className}`}
      role="note"
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#B8924B] shrink-0 inline-block" />
      <span>{text}</span>
    </p>
  );
};
