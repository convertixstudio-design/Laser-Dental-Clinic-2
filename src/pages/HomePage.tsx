import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import {
  CLINICAL_DISCIPLINES,
  SCIENTIFIC_PROTOCOLS,
  PATIENT_PROFILES,
  CLINICAL_CASE_FRAMEWORK,
  REVIEW_FRAMEWORK,
  PATIENT_JOURNEY_STEPS
} from '../data/clinicData';
import { loc, locArr, l3 } from '../utils/localize';
import {
  ArrowRight,
  Sparkles,
  Shield,
  Activity,
  Microscope,
  Check,
  ChevronRight,
  Star,
  Info
} from 'lucide-react';
import {
  LaserBeamIcon,
  JawAlignmentIcon,
  PeriodontalGumIcon,
  Volumetric3DIcon,
  MicronPrecisionIcon,
  BioStabilityIcon,
  getDisciplineIcon
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

export const HomePage: React.FC = () => {
  const { language } = useLanguage();
  const [activeProfileId, setActiveProfileId] = useState<string>(PATIENT_PROFILES[0].id);
  const [activeProtocolId, setActiveProtocolId] = useState<string>(SCIENTIFIC_PROTOCOLS[0].id);

  // SEO Integration with full PT support
  useSEO({
    title: {
      bg: 'Laser Dental Clinic | Дентална клиника София — Лазерна и функционална стоматология',
      en: 'Laser Dental Clinic | Sofia Dental Clinic — Laser & Functional Dentistry',
      pt: 'Laser Dental Clinic | Clínica Dentária em Sófia — Medicina Dentária a Laser e Funcional'
    },
    description: {
      bg: 'Laser Dental Clinic в София: съвременно щадящо лечение с минимален дискомфорт с Waterlase хидрокинетичен лазер, 3D CBCT диагностика и протоколи MFSP™ и BOSYNC™.',
      en: 'Laser Dental Clinic in Sofia: modern gentle dental care with minimized discomfort using Waterlase hydrokinetic laser, 3D CBCT diagnostics, and MFSP™ and BOSYNC™ protocols.',
      pt: 'Laser Dental Clinic em Sófia: medicina dentária moderna e minimamente invasiva com laser hidrocinético Waterlase, diagnóstico 3D CBCT e protocolos MFSP™ e BOSYNC™.'
    }
  });



  const selectedProfile = PATIENT_PROFILES.find((p) => p.id === activeProfileId) || PATIENT_PROFILES[0];
  const selectedProtocol = SCIENTIFIC_PROTOCOLS.find((p) => p.id === activeProtocolId) || SCIENTIFIC_PROTOCOLS[0];

  return (
    <div className="space-y-24 sm:space-y-32">
      
      {/* 1. HERO SECTION — UPGRADED WITH PATIENT-CENTRIC POSITIONING & PARALLAX/LASER EFFECTS */}
      <section className="relative pt-6 sm:pt-12 overflow-hidden">
        {/* Parallax Background Layers from Reference Design */}
        <div className="parallax-bg" id="parallaxBg">
          <div className="parallax-layer"><img src="/images/hero_clinic_interior.jpg" alt="Clinic interior" /></div>
          <div className="parallax-layer"><img src="/images/sterilization_suite.jpg" alt="Sterilization suite" /></div>
          <div className="parallax-layer"><img src="/images/clinical_operatory_laser.jpg" alt="Operatory laser" /></div>
          <div className="parallax-layer"><img src="/images/intraoral_3d_scanning.jpg" alt="3D scanning" /></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Editorial Value Proposition */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B]">
                <span>
                  {l3(language, 'Лазерна & Биологична Стоматология', 'Laser & Biological Dentistry', 'Medicina Dentária a Laser & Biológica')}
                </span>
                <span aria-hidden="true" className="text-slate-300">/</span>
                <span className="text-[#5E6D77] font-normal">
                  {l3(language, 'София · ул. „Чумерна“ 12', 'Sofia · 12 Chumerna St', 'Sófia · Rua Chumerna, 12')}
                </span>
              </div>

              <div className="laser-title">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#0A1926] tracking-tight leading-[1.1] text-balance laser-title__text">
                  {language === 'bg' ? (
                    <>
                      Съвършена прецизност. <br />
                      <span className="italic font-normal text-[#184D58]">Щадяща биология.</span>
                    </>
                  ) : language === 'pt' ? (
                    <>
                      Sub-mícron de precisão. <br />
                      <span className="italic font-normal text-[#184D58]">Biologia preservada.</span>
                    </>
                  ) : (
                    <>
                      Sub-micron precision. <br />
                      <span className="italic font-normal text-[#184D58]">Preserved biology.</span>
                    </>
                  )}
                </h1>
                <span className="laser-title__beam"></span>
                <span className="laser-title__dot"></span>
              </div>

              {/* What Makes LDC Different */}
              <div className="space-y-3">
                <TextReveal effect="paragraph" as="p" className="text-base sm:text-lg text-[#5E6D77] font-light leading-relaxed">
                  {l3(
                    language,
                    'Laser Dental Clinic съчетава авангардната хидрокинетична технология Waterlase с триизмерна CBCT диагностика и патентовани протоколи за стабилност (MFSP™ и BOSYNC™). Лекуваме зъбите без класически ротационни вибрации, със защита от термичен шок и с фокус върху дългосрочното съхранение на естествените тъкани.',
                    'Laser Dental Clinic unites Waterlase hydrokinetic photon technology with 3D CBCT diagnostics and proprietary biomechanical protocols (MFSP™ & BOSYNC™). We treat dental pathology without mechanical drills, vibration, or thermal trauma, prioritizing long-term biological preservation of your natural dentition.',
                    'A Laser Dental Clinic conjuga a avançada tecnologia hidrocinética Waterlase com diagnóstico tridimensional CBCT e protocolos biomecânicos patenteados (MFSP™ e BOSYNC™). Tratamos as patologias dentárias sem brocas mecânicas, vibrações ou trauma térmico, priorizando a conservação biológica duradoura da sua dentição natural.'
                  )}
                </TextReveal>

                {/* 3 Differential Pillars with Authentic Vector Clinical Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-3 rounded-lg text-left flex items-start gap-2.5">
                    <LaserBeamIcon className="w-4 h-4 text-[#B8924B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold text-[#184D58] uppercase tracking-wide">
                        {l3(language, 'Безконтактно', 'Contactless', 'Sem contacto')}
                      </div>
                      <div className="text-xs text-[#5E6D77]">
                        {l3(language, 'Водно-лазерна енергия без вибрации', 'Water-laser energy without vibration', 'Energia hidro-laser sem vibrações')}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-3 rounded-lg text-left flex items-start gap-2.5">
                    <JawAlignmentIcon className="w-4 h-4 text-[#B8924B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold text-[#184D58] uppercase tracking-wide">
                        {l3(language, 'MFSP™ Протокол', 'MFSP™ Protocol', 'Protocolo MFSP™')}
                      </div>
                      <div className="text-xs text-[#5E6D77]">
                        {l3(language, 'Балансирана захапка и здрави стави', 'Harmonized occlusion & joint relief', 'Oclusão harmoniosa e alívio articular')}
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-3 rounded-lg text-left flex items-start gap-2.5">
                    <PeriodontalGumIcon className="w-4 h-4 text-[#B8924B] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-[11px] font-bold text-[#184D58] uppercase tracking-wide">
                        {l3(language, 'Начална терапия', 'Initial Therapy', 'Terapia Inicial')}
                      </div>
                      <div className="text-xs text-[#5E6D77]">
                        {l3(language, 'Биологична подготовка на венците', 'Biological gingival foundation', 'Preparação biológica da gengiva')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clear Consultation & Action Pathways */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to="/consultation"
                  className="px-6 py-3.5 text-xs font-semibold tracking-wide text-white bg-[#0A1926] rounded-md hover:bg-[#18344A] transition-colors text-center shadow-xs flex items-center justify-center gap-2 group"
                >
                  <span>
                    {l3(language, 'Заявете преглед & 3D диагностика', 'Schedule Diagnostic Exam', 'Marcar Avaliação & Diagnóstico 3D')}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#B8924B] group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/patient-journey"
                  className="px-6 py-3.5 text-xs font-semibold tracking-wide text-[#0A1926] bg-[#F4EFEA] hover:bg-[#E8E2D8] rounded-md transition-colors text-center"
                >
                  {l3(language, 'Как протича първото посещение', 'How Your First Visit Works', 'Como Funciona a Primeira Consulta')}
                </Link>
              </div>

              {/* Quantitative Technology Indicators */}
              <div className="pt-6 border-t border-[#E8E2D8] grid grid-cols-3 gap-4 text-left">
                <div>
                  <div className="font-serif text-2xl font-bold text-[#0A1926]">2780<span className="text-xs font-sans font-normal text-[#B8924B]">nm</span></div>
                  <div className="text-[11px] text-[#5E6D77] leading-tight">
                    {l3(language, 'Waterlase Er,Cr:YSGG лазер', 'Waterlase laser wavelength', 'Comprimento de onda laser Waterlase')}
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#0A1926]">0<span className="text-xs font-sans font-normal text-[#B8924B]">µSv</span></div>
                  <div className="text-[11px] text-[#5E6D77] leading-tight">
                    {l3(language, 'Diagnocam беземисионен кариес-скрининг', 'Zero-radiation Diagnocam detection', 'Deteção Diagnocam sem radiação')}
                  </div>
                </div>
                <div>
                  <div className="font-serif text-2xl font-bold text-[#0A1926]">100<span className="text-xs font-sans font-normal text-[#B8924B]">%</span></div>
                  <div className="text-[11px] text-[#5E6D77] leading-tight">
                    {l3(language, 'Биосъвместими керамики без метал', 'Metal-free biocompatible ceramics', 'Cerâmicas biocompatíveis sem metal')}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Operatory Photographic Canvas */}
            <div className="lg:col-span-6">
              <ZoomVisual direction="in" className="relative rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-lg bg-neutral-100 group">
                <MandatoryDisclosure variant="badge" className="absolute top-4 left-4 z-10" />
                <picture>
                  <source
                    type="image/webp"
                    srcSet="/images/hero_clinic_interior-mobile.webp 688w, /images/hero_clinic_interior.webp 1376w"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  />
                  <img
                    src="/images/hero_clinic_interior.jpg"
                    alt={l3(
                      language,
                      'Интериор на Laser Dental Clinic в София с лазерна апаратура',
                      'Laser Dental Clinic operatory with precision laser suite in Sofia',
                      'Consultório da Laser Dental Clinic com equipamento laser em Sófia'
                    )}
                    width={1376}
                    height={768}
                    className="w-full h-[420px] sm:h-[500px] lg:h-[560px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    fetchPriority="high"
                    decoding="sync"
                  />
                </picture>
                
                {/* Floating Verified Technology Badge with Category B PopupCard */}
                <PopupCard delayMs={200} className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-white/40 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E8E2D8] flex items-center justify-center text-[#B8924B] shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0A1926]">
                        {l3(
                          language,
                          'Усъвършени технологии. Внимателна дентална грижа.',
                          'Advanced technology. Thoughtful dental care.',
                          'Tecnologia avançada. Cuidados dentários atenciosos.'
                        )}
                      </p>
                      <p className="text-[11px] text-[#5E6D77]">
                        {l3(
                          language,
                          'Лазерно асистираните методи спомагат за прецизно и консервативно лечение при подходящи клинични показания с акцент върху комфорта на пациента.',
                          'Laser-assisted techniques can support precise, conservative treatment in suitable clinical situations, with an emphasis on patient comfort.',
                          'As técnicas assistidas por laser promovem um tratamento minucioso e conservador em indicações clínicas adequadas, com foco no conforto do paciente.'
                        )}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] font-mono font-medium text-[#B8924B]">
                    SOFIA · BULGARIA
                  </span>
                </PopupCard>
              </ZoomVisual>
            </div>

          </div>

        </div>
      </section>

      {/* 2. PATIENT-CENTRED SYMPTOM/NEED PROFILES SECTION */}
      <ScrollReveal as="section" className="bg-white py-20 border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeScale className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
              {l3(language, 'Пациентски нужди и решения', 'Patient Needs & Clinical Solutions', 'Necessidades do Paciente & Soluções Clínicas')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight">
              {l3(
                language,
                'Какви здравословни проблеми решаваме?',
                'Which Clinical Challenges Do We Address?',
                'Que desafios clínicos resolvemos?'
              )}
            </h2>
            <p className="mt-3 text-sm text-[#5E6D77] font-light leading-relaxed">
              {l3(
                language,
                'Разпознайте вашите симптоми и научете как щадящите биологични методи на Laser Dental Clinic осигуряват комфортно и трайно решение.',
                'Identify your symptoms and discover how Laser Dental Clinic’s gentle biological protocols provide lasting comfort and structural stability.',
                'Identifique os seus sintomas e descubra como os protocolos biológicos conservadores da Laser Dental Clinic proporcionam conforto duradouro e estabilidade estrutural.'
              )}
            </p>
          </FadeScale>

          {/* Interactive Profile Navigation Pills with Category E StaggerGroup */}
          <StaggerGroup variant="drop-down" staggerMs={80} className="flex flex-wrap gap-2 pb-6 border-b border-[#E8E2D8]">
            {PATIENT_PROFILES.map((profile) => {
              const isActive = profile.id === activeProfileId;
              return (
                <button
                  key={profile.id}
                  onClick={() => setActiveProfileId(profile.id)}
                  className={`px-4 py-2.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-[#0A1926] text-white shadow-xs'
                      : 'bg-[#FAF8F5] text-[#5E6D77] hover:bg-[#F0EAE1] hover:text-[#0A1926]'
                  }`}
                >
                  {loc(profile.title, language)}
                </button>
              );
            })}
          </StaggerGroup>

          {/* Active Profile Details Card */}
          <div className="mt-8 bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-6 sm:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-[11px] font-mono text-[#B8924B] uppercase tracking-wider block mb-1">
                    {l3(language, 'Симптоми & Оплаквания', 'Symptoms & Clinical Presentation', 'Sintomas & Apresentação Clínica')}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-[#0A1926]">
                    {loc(selectedProfile.title, language)}
                  </h3>
                  <p className="text-xs text-[#184D58] font-medium mt-1">
                    {loc(selectedProfile.subtitle, language)}
                  </p>
                </div>

                <div className="space-y-2.5">
                  <span className="text-xs font-semibold text-[#0A1926] block">
                    {l3(language, 'Често срещани признаци:', 'Common indicators:', 'Sinais frequentes:')}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {locArr(selectedProfile.symptoms, language).map((symptom, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#5E6D77] bg-white p-2.5 rounded-md border border-[#EFE9DF]">
                        <Check className="w-3.5 h-3.5 text-[#B8924B] shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#EFE9DF] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0A1926]">
                    <Shield className="w-4 h-4 text-[#184D58]" />
                    <span>{l3(language, 'Подход на Laser Dental Clinic:', 'Laser Dental Clinic Approach:', 'Abordagem da Laser Dental Clinic:')}</span>
                  </div>
                  <p className="text-xs text-[#5E6D77] leading-relaxed">
                    {loc(selectedProfile.clinicSolution, language)}
                  </p>
                </div>
              </div>

              {/* Profile Action Box */}
              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-5">
                <div className="space-y-1">
                  <span className="text-[11px] font-mono text-[#5E6D77] uppercase tracking-wider">
                    {l3(language, 'Препоръчителен протокол', 'Recommended Protocol', 'Protocolo Recomendado')}
                  </span>
                  <div className="font-serif text-lg font-bold text-[#0A1926]">
                    {selectedProfile.recommendedProtocol}
                  </div>
                </div>

                <div className="text-xs text-[#5E6D77] leading-relaxed">
                  {l3(
                    language,
                    'Всяко лечение започва с прецизна начална диагностика, при която лекарят обяснява на достъпен език всяка стъпка преди да започне.',
                    'Every case initiates with precision diagnostic evaluation where our team explains every phase in plain language before proceeding.',
                    'Cada plano clínico inicia-se com uma avaliação diagnóstica minuciosa, na qual a nossa equipa explica cada fase em linguagem acessível antes de avançar.'
                  )}
                </div>

                <div className="pt-2 space-y-2.5">
                  <Link
                    to="/consultation"
                    className="w-full py-3 px-4 bg-[#0A1926] text-white text-xs font-semibold rounded-md hover:bg-[#18344A] transition-colors flex items-center justify-center gap-2"
                  >
                    <span>{l3(language, 'Консултация за този проблем', 'Consult on this condition', 'Consulta para esta condição')}</span>
                    <ArrowRight className="w-4 h-4 text-[#B8924B]" />
                  </Link>

                  <Link
                    to={`/disciplines`}
                    className="w-full py-2.5 px-4 bg-[#FAF8F5] text-[#0A1926] hover:bg-[#F0EAE1] text-xs font-medium rounded-md transition-colors text-center block"
                  >
                    {l3(language, 'Разгледайте клиничното направление', 'Explore Clinical Discipline', 'Conhecer a Especialidade Clínica')}
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </ScrollReveal>

      {/* 3. SCIENTIFIC PROTOCOLS SPOTLIGHT: MFSP™, BOSYNC™ & INITIAL THERAPY */}
      <ScrollReveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
            {l3(language, 'Научен протоколен стандарт', 'Scientific Protocol Standard', 'Padrão Científico de Protocolos')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight">
            {l3(
              language,
              'Патентовани клинични протоколи за дългосрочна стабилност',
              'Proprietary Clinical Protocols for Lifelong Stability',
              'Protocolos Clínicos Patenteados para Estabilidade a Longo Prazo'
            )}
          </h2>
          <p className="mt-3 text-sm text-[#5E6D77] font-light leading-relaxed">
            {l3(
              language,
              'Вместо изолирано поставяне на пломби или коронки, Laser Dental Clinic прилага тристепенна научна методика, насочена към функционална стабилност на захапката, венците и костта.',
              'Rather than placing isolated fillings or crowns, Laser Dental Clinic executes a structured 3-pillar methodology oriented toward sustainable biomechanical stability across occlusion, gingiva, and alveolar bone.',
              'Em vez de restaurações ou coroas isoladas, a Laser Dental Clinic executa uma metodologia científica estruturada em 3 pilares, orientada para a estabilidade biomecânica contínua da oclusão, gengivas e osso alveolar.'
            )}
          </p>
        </div>

        {/* 3-Protocol Selector Grid with Category F StaggerGroup */}
        <StaggerGroup variant="scale" staggerMs={140} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SCIENTIFIC_PROTOCOLS.map((protocol) => {
            const isSelected = protocol.id === activeProtocolId;
            return (
              <div
                key={protocol.id}
                onClick={() => setActiveProtocolId(protocol.id)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#0A1926] text-white border-[#0A1926] shadow-md'
                    : 'bg-white text-[#0A1926] border-[#E8E2D8] hover:border-[#B8924B]'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className={`font-mono text-xs ${isSelected ? 'text-[#B8924B]' : 'text-[#184D58]'}`}>
                      {protocol.code}
                    </span>
                    <span className={`text-[11px] ${isSelected ? 'text-slate-300' : 'text-[#5E6D77]'}`}>
                      {loc(protocol.clinicalPurpose, language)}
                    </span>
                  </div>

                  <h3 className={`text-xl font-serif font-bold ${isSelected ? 'text-white' : 'text-[#0A1926]'}`}>
                    {loc(protocol.title, language)}
                  </h3>

                  <p className={`text-xs leading-relaxed ${isSelected ? 'text-slate-300' : 'text-[#5E6D77]'}`}>
                    {loc(protocol.accessibleSummary, language)}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                  <span className={`text-[11px] font-medium ${isSelected ? 'text-[#B8924B]' : 'text-[#184D58]'}`}>
                    {l3(language, 'Научен преглед', 'Scientific breakdown', 'Análise científica')}
                  </span>
                  <ChevronRight className={`w-4 h-4 ${isSelected ? 'text-[#B8924B]' : 'text-slate-400'}`} />
                </div>
              </div>
            );
          })}
        </StaggerGroup>

        {/* Detailed 3-Layer Communication Preview for Active Protocol */}
        <div className="mt-8 bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
            <div>
              <span className="text-[11px] font-mono text-[#B8924B] uppercase tracking-wider block">
                {l3(language, 'Клиничен протокол на фокус', 'Featured Protocol Deep-Dive', 'Protocolo Clínico em Destaque')}
              </span>
              <h4 className="text-2xl font-serif font-bold text-[#0A1926]">
                {loc(selectedProtocol.title, language)} ({selectedProtocol.code})
              </h4>
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#184D58] hover:text-[#0A1926] transition-colors"
            >
              <span>{l3(language, 'Прочетете пълната методика в За нас', 'Read full methodology in About', 'Ler a metodologia completa em Sobre Nós')}</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B8924B]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Layer 1: Layperson Summary */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D8] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0A1926]">
                <Info className="w-4 h-4 text-[#B8924B]" />
                <span>{l3(language, '1. Достъпно за пациента', '1. Plain Explanation', '1. Explicação Acessível')}</span>
              </div>
              <p className="text-xs text-[#5E6D77] leading-relaxed">
                {loc(selectedProtocol.accessibleSummary, language)}
              </p>
            </div>

            {/* Layer 2: Practical Clinical Purpose */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D8] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0A1926]">
                <Activity className="w-4 h-4 text-[#184D58]" />
                <span>{l3(language, '2. Практическа цел', '2. Practical Purpose', '2. Objetivo Clínico Prático')}</span>
              </div>
              <p className="text-xs text-[#5E6D77] leading-relaxed">
                {loc(selectedProtocol.clinicalPurpose, language)}
              </p>
            </div>

            {/* Layer 3: Scientific & Biophysical Depth */}
            <div className="bg-[#FAF8F5] p-5 rounded-xl border border-[#E8E2D8] space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold text-[#0A1926]">
                <Microscope className="w-4 h-4 text-[#0A1926]" />
                <span>{l3(language, '3. Биофизична дълбочина', '3. Biomechanical Depth', '3. Profundidade Biomecânica')}</span>
              </div>
              <p className="text-xs text-[#5E6D77] leading-relaxed">
                {loc(selectedProtocol.scientificDepth, language)}
              </p>
            </div>

          </div>

          {/* Pillars Strip */}
          <div className="pt-4 border-t border-[#F2ECE4]">
            <span className="text-xs font-semibold text-[#0A1926] block mb-3">
              {l3(language, 'Ключови фази на протокола:', 'Key Protocol Pillars:', 'Fases Fundamentais do Protocolo:')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {locArr(selectedProtocol.pillars, language).map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#0A1926] bg-[#F7F4EF] p-2.5 rounded-lg border border-[#EBE3D7]">
                  <span className="w-5 h-5 rounded-full bg-[#0A1926] text-[#B8924B] font-mono text-[10px] flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <span className="font-medium">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </ScrollReveal>

      {/* 4. CLINICAL DISCIPLINES PREVIEW */}
      <ScrollReveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeScale className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
              {l3(language, 'Клинични направления', 'Specialized Disciplines', 'Especialidades Clínicas')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight">
              {l3(
                language,
                'Комплексни интердисциплинарни грижи',
                'Comprehensive Interdisciplinary Services',
                'Cuidados Interdisciplinares Abrangentes'
              )}
            </h2>
          </div>
          
          <Link
            to="/disciplines"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1926] hover:text-[#B8924B] transition-colors"
          >
            <span>{l3(language, 'Всички 10 дисциплини', 'View all 10 clinical disciplines', 'Ver todas as 10 especialidades')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeScale>

        {/* Bento Grid of Disciplines with Category F StaggerGroup */}
        <StaggerGroup variant="scale" staggerMs={120} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CLINICAL_DISCIPLINES.slice(0, 6).map((item, idx) => {
            const IconComp = getDisciplineIcon(item.id);
            return (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-[#E8E2D8] hover:border-[#B8924B] transition-all flex flex-col justify-between group shadow-xs"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#5E6D77]">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-[#FAF8F5] text-[#B8924B] group-hover:scale-105 transition-transform">
                        <IconComp className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-[#B8924B]">0{idx + 1}</span>
                    </div>
                    <span>{item.technologiesUsed[0]}</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#0A1926] group-hover:text-[#184D58] transition-colors">
                    {loc(item.name, language)}
                  </h3>

                  <p className="text-xs text-[#5E6D77] leading-relaxed line-clamp-3 font-light">
                    {loc(item.shortDesc, language)}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-[#F2ECE4] flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#184D58]">
                    {loc(item.category, language)}
                  </span>
                  <Link
                    to={`/disciplines#${item.id}`}
                    className="p-1.5 rounded-full text-[#0A1926] hover:bg-[#FAF8F5] transition-colors"
                    aria-label={l3(
                      language,
                      `Детайли за ${item.name.bg}`,
                      `Details on ${item.name.en}`,
                      `Detalhes sobre ${item.name.pt || item.name.en}`
                    )}
                  >
                    <ChevronRight className="w-4 h-4 text-[#B8924B]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </StaggerGroup>

      </ScrollReveal>

      {/* 5. FEATURED TECHNOLOGIES SPOTLIGHT */}
      <ScrollReveal as="section" className="bg-[#0A1926] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <FadeScale className="max-w-3xl mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
              {l3(language, 'Технологичен авангард', 'Pioneering Technology', 'Inovação Tecnológica')}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
              {l3(
                language,
                'Дигитална инфраструктура за щадящо и прецизно лечение',
                'Digital diagnostic infrastructure for gentle and precise dentistry',
                'Infraestrutura diagnóstica digital para tratamentos suaves e precisos'
              )}
            </h2>
            <p className="mt-4 text-sm text-slate-300 font-light leading-relaxed">
              {l3(
                language,
                'Нашата клиника инвестира в най-високия клас лазерна апаратура и 3D визуализация за постигане на предвидими, биологично съвместими резултати.',
                'Our practice integrates leading-tier hydrokinetic lasers and 3D volumetric diagnostics for biological predictability and lasting clinical outcomes.',
                'A nossa clínica investe em equipamento laser de referência e diagnóstico volumétrico 3D para obter resultados biologicamente previsíveis e duradouros.'
              )}
            </p>
          </FadeScale>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            
            {/* Tech 1: WATERLASE */}
            <div className="bg-[#102231] border border-[#1E374D] rounded-2xl p-8 flex flex-col justify-between group">
              <div>
                <ZoomVisual direction="in" className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-neutral-900 border border-[#23435C]">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/tech_waterlase_laser-mobile.webp 600w, /images/tech_waterlase_laser.webp 1200w"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <img
                      src="/images/tech_waterlase_laser.jpg"
                      alt={l3(
                        language,
                        'WATERLASE лазерна конзола в операционна',
                        'WATERLASE laser console in sterile operatory',
                        'Consola laser WATERLASE em ambiente cirúrgico'
                      )}
                      width={1200}
                      height={896}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute top-3 left-3 bg-[#0A1926]/90 px-3 py-1 rounded text-[11px] font-mono text-[#B8924B] border border-[#B8924B]/30">
                    2780 nm Er,Cr:YSGG
                  </div>
                </ZoomVisual>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  WATERLASE Er,Cr:YSGG Laser
                </h3>
                <p className="text-xs text-[#B8924B] font-medium mb-4">
                  {l3(
                    language,
                    'Хидрокинетичен лазер за твърди и меки тъкани',
                    'Hydrokinetic hard & soft tissue laser',
                    'Laser hidrocinético para tecidos duros e moles'
                  )}
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {l3(
                    language,
                    'Патентована водно-светлинна енергия, която заменя конвенционалната бормашина. Без вибрации, без шум, без нагряване на дентина и често без никаква нужда от упойка.',
                    'Patented water-atomized photon energy replacing mechanical dental drills. Zero tactile vibrations, no bone heating, and treatment often without local anaesthesia.',
                    'Energia fotónica patenteada com microgotículas de água que substitui a broca dentária convencional. Sem vibrações táteis, sem aquecimento ósseo e frequentemente sem necessidade de anestesia local.'
                  )}
                </p>
              </div>

              <ul className="space-y-2 border-t border-[#1C364C] pt-6 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Запазва зъбния пулп от термичен шок',
                      'Shields dental pulp from friction heat',
                      'Protege a polpa dentária contra o choque térmico'
                    )}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Дълбока стерилизация на дентиновите каналчета',
                      'Deep sterilization of exposed tubules',
                      'Esterilização profunda dos canalículos dentinários'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Tech 2: CBCT 3D */}
            <div className="bg-[#102231] border border-[#1E374D] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-neutral-900 border border-[#23435C]">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/tech_cbct_diagnostics-mobile.webp 600w, /images/tech_cbct_diagnostics.webp 1200w"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <img
                      src="/images/tech_cbct_diagnostics.jpg"
                      alt={l3(
                        language,
                        'CBCT 3D томографска диагностика',
                        'CBCT 3D volumetric diagnostic scan suite',
                        'Diagnóstico tomográfico volumétrico CBCT 3D'
                      )}
                      width={1200}
                      height={896}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute top-3 left-3 bg-[#0A1926]/90 px-3 py-1 rounded text-[11px] font-mono text-teal-400 border border-teal-500/30">
                    ULTRA LOW-DOSE 3D
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  CBCT 3D Volumetric Imaging
                </h3>
                <p className="text-xs text-[#B8924B] font-medium mb-4">
                  {l3(
                    language,
                    'Конично-лъчева компютърна томография',
                    'Cone beam computed tomography',
                    'Tomografia computorizada de feixe cónico'
                  )}
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {l3(
                    language,
                    'Триизмерно дигитално картографиране на костния обем, кореновите канали и синусите с до 90% по-ниска доза радиация спрямо стандартните медицински скенери.',
                    'Three-dimensional volumetric mapping of alveolar bone, root anatomy, and sinus cavities with up to 90% reduced exposure compared to medical CT scanners.',
                    'Mapeamento volumétrico tridimensional do osso alveolar, canais radiculares e seios maxilares com até 90% menos radiação em comparação com os exames médicos convencionais.'
                  )}
                </p>
              </div>

              <ul className="space-y-2 border-t border-[#1C364C] pt-6 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Виртуално навигирано имплантиране',
                      'Computer-guided 3D surgical planning',
                      'Planeamento cirúrgico de implantes guiado por computador'
                    )}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Откриване на скрити допълнителни канали',
                      'Detection of complex MB2 root anatomy',
                      'Deteção de anatomias radiculares complexas (ex: canal MB2)'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Tech 3: Intraoral 3D Digital Scanning */}
            <div className="bg-[#102231] border border-[#1E374D] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-neutral-900 border border-[#23435C]">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/intraoral_3d_scanning-mobile.webp 720w, /images/intraoral_3d_scanning.webp 1600w"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <img
                      src="/images/intraoral_3d_scanning.webp"
                      alt={l3(
                        language,
                        'Дигитално 3D интраорално оптично сканиране',
                        'Intraoral 3D digital optical scanning',
                        'Scanner intraoral digital 3D de alta precisão'
                      )}
                      width={1600}
                      height={900}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute top-3 left-3 bg-[#0A1926]/90 px-3 py-1 rounded text-[11px] font-mono text-[#B8924B] border border-[#B8924B]/30">
                    OPTICAL 3D SCAN
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Intraoral 3D Digital Scanning
                </h3>
                <p className="text-xs text-[#B8924B] font-medium mb-4">
                  {l3(
                    language,
                    'Дигитален оптичен отпечатък с точност до микрон',
                    'Micron-accurate optical impression without silicone paste',
                    'Moldagem ótica digital sem pasta de silicone'
                  )}
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {l3(
                    language,
                    'Премахва дискомфорта от класическите отпечатъчни лъжици и силиконови пасти. Създава незабавен, милиметрово точен виртуален 3D модел на зъбните дъги и динамичната оклузия.',
                    'Eliminates gag reflex associated with traditional silicone impression trays. Creates an instantaneous, micron-accurate virtual 3D model of your dental arches and dynamic occlusion.',
                    'Elimina o reflexo de vómito associado às moldagens tradicionais com pasta. Gera de imediato um modelo 3D virtual das arcadas dentárias e da oclusão dinâmica com rigor micrométrico.'
                  )}
                </p>
              </div>

              <ul className="space-y-2 border-t border-[#1C364C] pt-6 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Без неприятно гадене и натиск от пасти',
                      'Zero paste discomfort or gagging',
                      'Sem desconforto com pastas ou náuseas'
                    )}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Директна CAD/CAM интеграция за фрезоване',
                      'Direct CAD/CAM milling integration',
                      'Integração direta com fresagem CAD/CAM'
                    )}
                  </span>
                </li>
              </ul>
            </div>

            {/* Tech 4: Hospital-Grade Sterilization Suite */}
            <div className="bg-[#102231] border border-[#1E374D] rounded-2xl p-8 flex flex-col justify-between">
              <div>
                <div className="relative rounded-xl overflow-hidden mb-6 aspect-video bg-neutral-900 border border-[#23435C]">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet="/images/sterilization_suite-mobile.webp 720w, /images/sterilization_suite.webp 1600w"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <img
                      src="/images/sterilization_suite.webp"
                      alt={l3(
                        language,
                        'Болничен сектор за стерилизация с автоклави клас B',
                        'Hospital-grade sterilization suite with Class B autoclaves',
                        'Central de esterilização hospitalar com autoclaves Classe B'
                      )}
                      width={1600}
                      height={900}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                  </picture>
                  <div className="absolute top-3 left-3 bg-[#0A1926]/90 px-3 py-1 rounded text-[11px] font-mono text-teal-400 border border-teal-500/30">
                    CLASS B AUTOCLAVE
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Hospital-Grade Sterilization
                </h3>
                <p className="text-xs text-[#B8924B] font-medium mb-4">
                  {l3(
                    language,
                    'Сертифициран европейски протокол за биосигурност',
                    'Certified European biosafety and disinfection suite',
                    'Protocolo europeu certificado de biossegurança'
                  )}
                </p>
                <p className="text-sm text-slate-300 font-light leading-relaxed mb-6">
                  {l3(
                    language,
                    'Многостепенна термодезинфекция, вакуумна автоклавация от клас B и индивидуално херметично опаковане на всеки инструмент със стриктно проследяване на партидите.',
                    'Multi-stage thermal disinfection, Class B vacuum sterilization, and individual hermetic sealing of all instruments with complete electronic batch traceability.',
                    'Termodesinfeção em múltiplas fases, esterilização por vácuo fracionado Classe B e selagem individual de todos os instrumentos com rastreabilidade eletrónica integral.'
                  )}
                </p>
              </div>

              <ul className="space-y-2 border-t border-[#1C364C] pt-6 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      '100% защита от кръстосана инфекция',
                      '100% protection against cross-contamination',
                      'Proteção total contra contaminação cruzada'
                    )}
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>
                    {l3(
                      language,
                      'Електронен контрол на всеки цикъл',
                      'Digital monitoring of every sterilization cycle',
                      'Monitorização digital de cada ciclo térmico'
                    )}
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Mandatory Disclosure Banner for Photography */}
          <div className="mt-10">
            <MandatoryDisclosure variant="card" className="bg-[#102231]/80 border-[#1E374D] text-slate-300" />
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/technologies"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#B8924B] hover:text-[#E2C389] transition-colors"
            >
              <span>
                {l3(
                  language,
                  'Разгледайте всички технологии (Diagnocam, Сканиране, PBM)',
                  'Discover all clinical technologies (Diagnocam, Scanning, PBM)',
                  'Conheça todas as tecnologias clínicas (Diagnocam, Scanner 3D, PBM)'
                )}
              </span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </ScrollReveal>

      {/* 6. CLINICAL CASE STUDY FRAMEWORK */}
      <ScrollReveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeScale className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
              {l3(language, 'Клиничен опит & Резултати', 'Clinical Case Framework', 'Metodologia Clínica & Resultados')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight">
              {l3(
                language,
                'Как решаваме сложни интердисциплинарни казуси',
                'How We Resolve Complex Interdisciplinary Cases',
                'Como Abordamos Casos Interdisciplinares Complexos'
              )}
            </h2>
            <p className="mt-2 text-xs text-[#5E6D77] max-w-xl">
              {l3(
                language,
                'Реална клинична методология — структуриран преглед на диагностиката, протоколите и постигнатата биомеханична стабилност.',
                'Scientific clinical methodology — a structured breakdown of diagnostic protocols and achieved biomechanical endpoints.',
                'Metodologia clínica real — uma análise estruturada do diagnóstico, protocolos e estabilidade biomecânica alcançada.'
              )}
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1926] hover:text-[#B8924B] transition-colors"
          >
            <span>{l3(language, 'Към клиничната галерия', 'Visit Clinical Gallery', 'Visitar a Galeria Clínica')}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeScale>

        <StaggerGroup variant="scale" staggerMs={150} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CLINICAL_CASE_FRAMEWORK.map((caseStudy) => (
            <div
              key={caseStudy.id}
              className="bg-white rounded-2xl border border-[#E8E2D8] p-6 sm:p-8 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-[#FAF4EB] text-[#B8924B] text-[11px] font-mono font-semibold rounded-md border border-[#E8D8BF]">
                  {loc(caseStudy.discipline, language)}
                </div>

                <div>
                  <span className="text-[11px] font-mono text-[#5E6D77] uppercase tracking-wider block mb-1">
                    {l3(language, 'Начално състояние:', 'Initial presentation:', 'Apresentação inicial:')}
                  </span>
                  <p className="text-sm font-serif font-bold text-[#0A1926]">
                    {loc(caseStudy.clinicalScenario, language)}
                  </p>
                </div>

                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E8E2D8] space-y-1">
                  <span className="text-[11px] font-semibold text-[#184D58] block">
                    {l3(language, 'Диагностичен протокол:', 'Diagnostic protocol:', 'Protocolo de diagnóstico:')}
                  </span>
                  <p className="text-xs text-[#5E6D77]">
                    {loc(caseStudy.diagnosticProtocol, language)}
                  </p>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#0A1926] block">
                    {l3(language, 'Клинични фази на лечението:', 'Treatment phases:', 'Fases do plano de tratamento:')}
                  </span>
                  <ul className="space-y-2 text-xs text-[#5E6D77]">
                    {locArr(caseStudy.treatmentPhases, language).map((phase, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#B8924B] shrink-0 mt-0.5" />
                        <span>{phase}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#F2ECE4] space-y-1">
                <span className="text-[11px] font-mono text-[#184D58] uppercase tracking-wider block">
                  {l3(language, 'Постигната стабилност', 'Stability Milestone', 'Estabilidade Alcançada')}
                </span>
                <p className="text-xs font-medium text-[#0A1926]">
                  {loc(caseStudy.stabilityMilestone, language)}
                </p>
              </div>
            </div>
          ))}
        </StaggerGroup>

      </ScrollReveal>

      {/* 7. VERIFIED GOOGLE REVIEWS INTEGRATION CONTAINER */}
      <ScrollReveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PopupCard className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 sm:p-12 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B8924B] uppercase tracking-widest mb-1">
                <Star className="w-3.5 h-3.5 fill-[#B8924B] text-[#B8924B]" />
                <span>{REVIEW_FRAMEWORK.verifiedSource}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#0A1926]">
                {l3(
                  language,
                  'Пациентско доверие и верифициран опит',
                  'Patient Trust & Verified Experience',
                  'Confiança dos Pacientes & Experiência Verificada'
                )}
              </h3>
            </div>

            <div className="flex items-center gap-1 text-[#B8924B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B8924B]" />
              ))}
              <span className="text-xs font-bold text-[#0A1926] ml-2">Google Reviews</span>
            </div>
          </div>

          {/* Ethics / Convertix Notice */}
          <div className="p-4 bg-white rounded-xl border border-[#E8E2D8] text-xs text-[#5E6D77] leading-relaxed">
            <span className="font-semibold text-[#0A1926] block mb-1">
              {l3(language, 'Етичен стандарт на демонстрацията:', 'Demonstration Ethics Standard:', 'Padrão Ético da Demonstração:')}
            </span>
            {loc(REVIEW_FRAMEWORK.demonstrationNotice, language)}
          </div>

          {/* 4 Review Evaluation Pillars with Category F StaggerGroup */}
          <StaggerGroup variant="scale" staggerMs={100} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locArr(REVIEW_FRAMEWORK.criteria, language).map((crit, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-[#E8E2D8] text-xs space-y-1">
                <div className="font-mono text-[10px] text-[#B8924B]">CRITERIA 0{idx + 1}</div>
                <div className="font-medium text-[#0A1926]">{crit}</div>
              </div>
            ))}
          </StaggerGroup>

          <div className="text-center pt-2">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#0A1926] hover:text-[#B8924B] transition-colors"
            >
              <span>
                {l3(
                  language,
                  'Започнете вашето лично преживяване с първи преглед',
                  'Begin your personal clinical experience with an initial exam',
                  'Inicie a sua experiência clínica com uma consulta de avaliação'
                )}
              </span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </PopupCard>
      </ScrollReveal>

      {/* 8. PATIENT JOURNEY TEASER */}
      <ScrollReveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeScale className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
            {l3(language, 'Пациентско изживяване', 'Patient Experience', 'Experiência do Paciente')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight">
            {l3(
              language,
              'Вашият път към дългосрочно здраве',
              'Your 4-Stage Pathway to Oral Health',
              'O Seu Percurso em 4 Etapas para a Saúde Oral'
            )}
          </h2>
          <p className="mt-3 text-sm text-[#5E6D77] font-light">
            {l3(
              language,
              'Прозрачен, предвидим и спокоен процес от първия преглед до редовната профилактика.',
              'A transparent, predictable, and reassuring clinical journey from initial scan to structured long-term recall.',
              'Um percurso clínico transparente, previsível e sereno, desde a avaliação inicial até às consultas de manutenção periódica.'
            )}
          </p>
        </FadeScale>

        <StaggerGroup variant="scale" staggerMs={130} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_JOURNEY_STEPS.map((s) => (
            <div key={s.step} className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-4 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl font-bold text-[#B8924B] block mb-2">{s.step}</span>
                <h3 className="font-serif font-bold text-base text-[#0A1926] mb-2">
                  {loc(s.title, language)}
                </h3>
                <p className="text-xs text-[#5E6D77] leading-relaxed">
                  {loc(s.desc, language)}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F2ECE4] text-[11px] font-medium text-[#184D58]">
                {loc(s.short, language)}
              </div>
            </div>
          ))}
        </StaggerGroup>

        <div className="mt-10 text-center">
          <Link
            to="/patient-journey"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A1926] hover:text-[#B8924B] transition-colors"
          >
            <span>
              {l3(
                language,
                'Научете повече за етапите на лечение',
                'Read detailed patient journey breakdown',
                'Ver detalhes de todas as etapas do tratamento'
              )}
            </span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </ScrollReveal>

      {/* 9. CALL TO ACTION / APPOINTMENT BANNER */}
      <ScrollReveal as="section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PopupCard className="bg-[#FAF4EB] border border-[#E8D8BF] rounded-2xl p-8 sm:p-14 relative overflow-hidden">
          
          <div className="max-w-2xl relative z-10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block">
              {l3(language, 'Първа стъпка', 'First Step', 'Primeiro Passo')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight">
              {l3(
                language,
                'Готови ли сте за ново ниво на стоматологична грижа?',
                'Ready to experience modern, gentle dental healthcare?',
                'Pronto para uma nova experiência em medicina dentária?'
              )}
            </h2>
            <p className="text-sm text-[#5E6D77] font-light leading-relaxed">
              {l3(
                language,
                'Заповядайте в Laser Dental Clinic в София на ул. „Чумерна“ 12 за детайлна консултация, 3D диагностика и персонален лечебен план.',
                'Visit Laser Dental Clinic at 12 Chumerna Street, Sofia for thorough 3D diagnostic evaluation and tailored treatment planning.',
                'Visite a Laser Dental Clinic em Sófia, na Rua Chumerna, 12, para uma avaliação diagnóstica 3D detalhada e um plano de tratamento personalizado.'
              )}
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/consultation"
                className="px-6 py-3.5 text-xs font-semibold tracking-wide text-white bg-[#0A1926] rounded-md hover:bg-[#18344A] transition-colors text-center shadow-xs flex items-center justify-center gap-2"
              >
                <span>{l3(language, 'Заявете консултация онлайн', 'Schedule Consultation', 'Marcar Consulta Online')}</span>
                <ArrowRight className="w-4 h-4 text-[#B8924B]" />
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3.5 text-xs font-semibold tracking-wide text-[#0A1926] bg-white border border-[#DCD5CB] hover:bg-[#FAF8F5] rounded-md transition-colors text-center"
              >
                {l3(language, 'Вижте контакти и локация', 'View Location & Contact', 'Ver Localização & Contactos')}
              </Link>
            </div>
          </div>

        </PopupCard>
      </ScrollReveal>

    </div>
  );
};
