import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { StaggerGroup } from './animations/GlobalAnimations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-[#0A1926] text-[#E8ECF0] border-t border-[#1C2C3A] pt-16 pb-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGroup variant="drop-down" staggerMs={120} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-14 border-b border-[#1A2E3D]">
          
          {/* Col 1: Clinic Brand & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-xs bg-[#B8924B] flex items-center justify-center text-[#0A1926] font-serif font-bold text-base">
                L
              </div>
              <span className="font-serif text-lg font-bold tracking-tight text-white">
                LASER DENTAL CLINIC
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              {language === 'bg'
                ? 'Премиум дентална медицина в сърцето на София. Специализирана лазерна терапия, 3D диагностика и комплексна функционална грижа за естественото съзъбие.'
                : language === 'pt'
                ? 'Medicina dentária premium no coração de Sófia. Terapia laser Waterlase avançada, diagnóstico 3D volumétrico e harmonia mastigatória biológica.'
                : 'Premium laser dentistry in the heart of Sofia. Advanced Waterlase therapy, volumetric 3D imaging, and holistic masticatory harmony.'}
            </p>

            <div className="pt-2 text-xs text-[#B8924B] font-medium flex items-center gap-1.5">
              <span>{CLINIC_INFO.agencyCredit}</span>
              <span className="text-slate-500">·</span>
              <span className="text-slate-400">
                {language === 'bg' ? 'Концептуален демонстрационен проект' : language === 'pt' ? 'Projeto Concetual Demonstrativo' : 'Concept Demonstration Design'}
              </span>
            </div>
          </div>

          {/* Col 2: Clinical Disciplines */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B8924B]">
              {language === 'bg' ? 'Клинични дисциплини' : language === 'pt' ? 'Especialidades Clínicas' : 'Clinical Disciplines'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/disciplines" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Пародонтология & Лазер' : language === 'pt' ? 'Periodontologia & Laser' : 'Periodontology & Laser'}
                </Link>
              </li>
              <li>
                <Link to="/disciplines" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Микроскопска ендодонтия' : language === 'pt' ? 'Endodontia Microscópica' : 'Microscopic Endodontics'}
                </Link>
              </li>
              <li>
                <Link to="/disciplines" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Функционална ортодонтия & ТМС' : language === 'pt' ? 'Ortodontia Funcional & ATM' : 'Functional Orthodontics & TMJ'}
                </Link>
              </li>
              <li>
                <Link to="/disciplines" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Навигирана имплантология' : language === 'pt' ? 'Implantologia Guiada' : 'Guided Implantology'}
                </Link>
              </li>
              <li>
                <Link to="/disciplines" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Детска лазерна стоматология' : language === 'pt' ? 'Medicina Dentária Pediátrica a Laser' : 'Paediatric Laser Care'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Exploration & Knowledge */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B8924B]">
              {language === 'bg' ? 'Пациент & Наука' : language === 'pt' ? 'Paciente & Ciência' : 'Patient & Science'}
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/patient-journey" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Пациентски път в 4 стъпки' : language === 'pt' ? 'Jornada em 4 Etapas' : '4-Step Patient Journey'}
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Лазер WATERLASE & CBCT' : language === 'pt' ? 'Laser WATERLASE & CBCT 3D' : 'WATERLASE & CBCT 3D'}
                </Link>
              </li>
              <li>
                <Link to="/maintenance" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Програми за профилактика' : language === 'pt' ? 'Planos Preventivos de Recall' : 'Preventative Recall Protocols'}
                </Link>
              </li>
              <li>
                <Link to="/articles" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Научни клинични статии' : language === 'pt' ? 'Artigos Clínicos Científicos' : 'Peer-Reviewed Clinical Insights'}
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-white transition-colors">
                  {language === 'bg' ? 'Медицински екип (Структура)' : language === 'pt' ? 'Equipa Médica (Estrutura)' : 'Medical Team Structure'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Public Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B8924B]">
              {language === 'bg' ? 'Локация & Контакт' : language === 'pt' ? 'Localização & Contacto' : 'Location & Contact'}
            </h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B8924B] shrink-0 mt-0.5" />
                <span>
                  {language === 'bg' ? CLINIC_INFO.addressBg : language === 'pt' ? 'Rua Chumerna 12, Sófia 1000, Bulgária' : CLINIC_INFO.addressEn}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B8924B] shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors underline-offset-4 hover:underline">
                  {CLINIC_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#B8924B] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">
                  {language === 'bg' ? CLINIC_INFO.workingHoursBg : language === 'pt' ? 'Segunda – Sexta: 09:00 – 19:00' : CLINIC_INFO.workingHoursEn}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link 
                to="/consultation"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8924B] hover:text-[#E2C389] transition-colors"
              >
                <span>{language === 'bg' ? 'Запишете демонстрационен час' : language === 'pt' ? 'Marcar Consulta Demonstrativa' : 'Book Demonstration Appointment'}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </StaggerGroup>

        {/* Bottom Bar: Legal, Safety Notice & Agency Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} Laser Dental Clinic. {language === 'bg' ? 'Всички права запазени.' : language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}
          </p>

          <p className="text-center md:text-right max-w-xl text-[11px] text-slate-500">
            {language === 'bg' ? (
              <>
                Демонстрационен проект на <strong>{CLINIC_INFO.agencyCredit}</strong>. Този уебсайт е независима дизайн концепция и не представлява официален портал за пациентски досиета или реално медицинско записване.
              </>
            ) : language === 'pt' ? (
              <>
                Proposta concetual demonstrativa desenvolvida por <strong>{CLINIC_INFO.agencyCredit}</strong>. Design independente; não substitui o portal oficial da clínica.
              </>
            ) : (
              <>
                Demonstration design concept by <strong>{CLINIC_INFO.agencyCredit}</strong>. Independent aesthetic proposal; not the official clinical portal.
              </>
            )}
          </p>

          <div className="flex items-center gap-4 shrink-0">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">
              {language === 'bg' ? 'Правна информация' : language === 'pt' ? 'Termos & Privacidade' : 'Privacy & Legal'}
            </Link>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">
              {language === 'bg' ? 'Карта & Достъп' : language === 'pt' ? 'Como Chegar' : 'Directions'}
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
