import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { Menu, X, ChevronDown, Globe, Palette, LayoutGrid } from 'lucide-react';
import { ClinicalSidebarDrawer } from './common/ClinicalSidebarDrawer';

export const Navbar: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [clinicalDrawerOpen, setClinicalDrawerOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { path: '/', labelBg: 'Начало', labelEn: 'Home', labelPt: 'Início' },
    { path: '/about', labelBg: 'За клиниката', labelEn: 'About', labelPt: 'Sobre' },
    { path: '/disciplines', labelBg: 'Дисциплини', labelEn: 'Disciplines', labelPt: 'Especialidades' },
    { path: '/technologies', labelBg: 'Технологии', labelEn: 'Technologies', labelPt: 'Tecnologias' },
    { path: '/patient-journey', labelBg: 'Пациентски път', labelEn: 'Patient Journey', labelPt: 'Percurso do Paciente' },
  ];

  const moreLinks = [
    { path: '/team', labelBg: 'Медицински екип', labelEn: 'Medical Team', labelPt: 'Equipa Médica' },
    { path: '/maintenance', labelBg: 'Програми за поддръжка', labelEn: 'Maintenance Plans', labelPt: 'Planos de Manutenção' },
    { path: '/articles', labelBg: 'Научни статии', labelEn: 'Scientific Articles', labelPt: 'Artigos Científicos' },
    { path: '/gallery', labelBg: 'Галерия', labelEn: 'Gallery', labelPt: 'Galeria' },
    { path: '/contact', labelBg: 'Контакти & Локация', labelEn: 'Contact & Location', labelPt: 'Contactos & Localização' },
  ];

  const getLabel = (link: { labelBg: string; labelEn: string; labelPt?: string }) => {
    if (language === 'bg') return link.labelBg;
    if (language === 'pt') return link.labelPt || link.labelEn;
    return link.labelEn;
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMoreDropdownOpen(false);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu();
      }
    };
    if (mobileMenuOpen || moreDropdownOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen, moreDropdownOpen]);

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 dark:bg-[#0A1926]/95 backdrop-blur-md border-b border-[#E8E2D8] dark:border-[#1A2E3D] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-6">
          
          {/* Zone 1: Single text element wordmark */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group whitespace-nowrap shrink-0 text-decoration-none"
            onClick={closeMenu}
          >
            <div className="w-8 h-8 rounded-sm bg-[#0A1926] dark:bg-[#B8924B] flex items-center justify-center text-[#B8924B] dark:text-[#0A1926] font-serif font-bold text-lg tracking-wider transition-transform group-hover:scale-105">
              L
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-tight text-[#0A1926] dark:text-white leading-none">
                LASER DENTAL
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#5E6D77] dark:text-slate-400 font-medium leading-tight">
                Clinic · Sofia
              </span>
            </div>
          </Link>

          {/* Zone 2: Navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#41515E] dark:text-slate-300">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
                  isActive(link.path)
                    ? 'text-[#0A1926] dark:text-white font-semibold border-b-2 border-[#0A1926] dark:border-[#B8924B]'
                    : 'text-[#41515E] dark:text-slate-300 hover:text-[#0A1926] dark:hover:text-white'
                }`}
              >
                {getLabel(link)}
              </Link>
            ))}

            {/* Submenu for secondary pages */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`flex items-center gap-1 whitespace-nowrap shrink-0 py-1 transition-colors ${
                  moreLinks.some((l) => isActive(l.path))
                    ? 'text-[#0A1926] dark:text-white font-semibold border-b-2 border-[#0A1926] dark:border-[#B8924B]'
                    : 'text-[#41515E] dark:text-slate-300 hover:text-[#0A1926] dark:hover:text-white'
                }`}
                aria-expanded={moreDropdownOpen}
              >
                <span>{language === 'bg' ? 'Още' : language === 'pt' ? 'Explorar' : 'Explore'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {moreDropdownOpen && (
                <div 
                  className="absolute left-0 mt-3 w-64 bg-white dark:bg-[#112233] border border-[#E8E2D8] dark:border-[#1E3A52] rounded-md shadow-lg py-2 z-50"
                  onMouseLeave={() => setMoreDropdownOpen(false)}
                >
                  {moreLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                        isActive(item.path)
                          ? 'bg-[#F4EFEA] dark:bg-[#1A334D] text-[#0A1926] dark:text-white font-semibold'
                          : 'text-[#41515E] dark:text-slate-300 hover:bg-[#FAF8F5] dark:hover:bg-[#152A40] hover:text-[#0A1926] dark:hover:text-white'
                      }`}
                    >
                      {getLabel(item)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Clinical Navigator, Language Switcher, & Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {/* Clinical Specialties Navigator Drawer Button */}
            <button
              type="button"
              onClick={() => setClinicalDrawerOpen(true)}
              title={language === 'bg' ? 'Отвори списъка с 10 специализации' : language === 'pt' ? 'Abrir painel de 10 especialidades' : 'Open 10 Disciplines Drawer'}
              className="px-2.5 py-1.5 text-xs font-medium rounded-full border border-[#DCD5CB] bg-[#F4EFEA] text-[#0A1926] hover:bg-[#EBE2D5] transition-colors flex items-center gap-1.5 cursor-pointer"
              aria-label="Clinical Disciplines Navigator"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#B8924B]" />
              <span className="hidden xl:inline">{language === 'bg' ? 'Направления' : language === 'pt' ? 'Especialidades' : 'Disciplines'}</span>
            </button>

            {/* 3-Way Language Switcher (BG / EN / PT) */}
            <div className="flex items-center border border-[#DCD5CB] rounded-full p-0.5 bg-[#F4EFEA]">
              <button
                type="button"
                onClick={() => setLanguage('bg')}
                className={`px-2 py-1 text-[11px] font-semibold rounded-full transition-all ${
                  language === 'bg'
                    ? 'bg-[#0A1926] text-white shadow-xs'
                    : 'text-[#5E6D77] hover:text-[#0A1926]'
                }`}
                aria-label="Български език"
              >
                БГ
              </button>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-[11px] font-semibold rounded-full transition-all ${
                  language === 'en'
                    ? 'bg-[#0A1926] text-white shadow-xs'
                    : 'text-[#5E6D77] hover:text-[#0A1926]'
                }`}
                aria-label="English language"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('pt')}
                className={`px-2 py-1 text-[11px] font-semibold rounded-full transition-all ${
                  language === 'pt'
                    ? 'bg-[#0A1926] text-white shadow-xs'
                    : 'text-[#5E6D77] hover:text-[#0A1926]'
                }`}
                aria-label="Português"
              >
                PT
              </button>
            </div>

            {/* Primary Action Button */}
            <Link
              to="/consultation"
              className="px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0A1926] rounded-md hover:bg-[#18344A] transition-colors whitespace-nowrap shadow-xs flex items-center gap-1.5"
            >
              <span>{language === 'bg' ? 'Запишете час' : language === 'pt' ? 'Marcar Consulta' : 'Consultation'}</span>
            </Link>
          </div>

          {/* Mobile hamburger button & controls */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Specialties Drawer Trigger for mobile */}
            <button
              type="button"
              onClick={() => setClinicalDrawerOpen(true)}
              className="p-1.5 text-xs font-medium rounded border border-[#DCD5CB] bg-[#F4EFEA] text-[#0A1926] cursor-pointer"
              aria-label="Open clinical specialties drawer"
            >
              <LayoutGrid className="w-3.5 h-3.5 text-[#B8924B]" />
            </button>

            {/* Language Switcher for mobile (cycling BG -> EN -> PT -> BG) */}
            <button
              type="button"
              onClick={() => {
                if (language === 'bg') setLanguage('en');
                else if (language === 'en') setLanguage('pt');
                else setLanguage('bg');
              }}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded text-xs font-semibold border border-[#DCD5CB] bg-[#F4EFEA] text-[#0A1926]"
              aria-label={
                language === 'bg'
                  ? 'Mudar para Inglês'
                  : language === 'en'
                  ? 'Mudar para Português'
                  : 'Превключване на български'
              }
            >
              <Globe className="w-3.5 h-3.5 text-[#B8924B]" />
              <span className="uppercase">{language}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0A1926] hover:bg-[#F4EFEA] rounded-md transition-colors"
              aria-label={
                mobileMenuOpen
                  ? (language === 'bg' ? 'Затвори менюто' : language === 'pt' ? 'Fechar menu' : 'Close navigation menu')
                  : (language === 'bg' ? 'Отвори менюто' : language === 'pt' ? 'Abrir menu' : 'Open navigation menu')
              }
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] px-4 pt-3 pb-6 animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {[...navLinks, ...moreLinks].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-[#0A1926] text-white'
                    : 'text-[#41515E] hover:bg-[#F4EFEA] hover:text-[#0A1926]'
                }`}
              >
                {getLabel(link)}
              </Link>
            ))}

            <div className="pt-4 mt-2 border-t border-[#E8E2D8]">
              <Link
                to="/consultation"
                onClick={closeMenu}
                className="w-full text-center block px-4 py-3 text-sm font-semibold text-white bg-[#0A1926] rounded-md shadow-xs"
              >
                {language === 'bg'
                  ? 'Запишете час за консултация'
                  : language === 'pt'
                  ? 'Marcar Consulta de Avaliação'
                  : 'Request Consultation'}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Clinical Specialties Sidebar Drawer */}
      <ClinicalSidebarDrawer
        isOpen={clinicalDrawerOpen}
        onClose={() => setClinicalDrawerOpen(false)}
      />
    </header>
  );
};
