import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface SEOMetadata {
  title: { bg: string; en: string; pt?: string };
  description: { bg: string; en: string; pt?: string };
}

export const useSEO = ({ title, description }: SEOMetadata) => {
  const { language } = useLanguage();

  useEffect(() => {
    let currentTitle = title.en;
    let currentDesc = description.en;

    if (language === 'bg') {
      currentTitle = title.bg;
      currentDesc = description.bg;
    } else if (language === 'pt') {
      currentTitle = title.pt || title.en;
      currentDesc = description.pt || description.en;
    }

    // Update document title
    document.title = currentTitle;

    // Update meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', currentDesc);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', currentTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', currentDesc);
  }, [language, title, description]);
};
