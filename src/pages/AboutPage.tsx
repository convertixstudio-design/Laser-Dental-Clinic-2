import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { CLINIC_INFO, SCIENTIFIC_PROTOCOLS } from '../data/clinicData';
import { loc, locArr, l3 } from '../utils/localize';
import {
  Check,
  Activity,
  Microscope,
  Info,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { TextReveal } from '../components/animations/TextReveal';
import { MandatoryDisclosure } from '../components/common/MandatoryDisclosure';
import {
  ScrollReveal,
  PopupCard,
  ZoomVisual,
  FadeScale,
  StaggerGroup
} from '../components/animations/GlobalAnimations';

export const AboutPage: React.FC = () => {
  const { language } = useLanguage();
  const [selectedLayer, setSelectedLayer] = useState<'plain' | 'clinical' | 'scientific'>('plain');
  const [activeProtocolIndex, setActiveProtocolIndex] = useState<number>(0);

  // Dynamic SEO meta with PT
  useSEO({
    title: {
      bg: 'За Laser Dental Clinic | Научна философия, MFSP™ и BOSYNC™ — София',
      en: 'About Laser Dental Clinic | Scientific Philosophy, MFSP™ & BOSYNC™ — Sofia',
      pt: 'Sobre a Laser Dental Clinic | Filosofia Científica, MFSP™ e BOSYNC™ — Sófia'
    },
    description: {
      bg: 'Запознайте се с научната философия на Laser Dental Clinic в София: трислойни протоколи MFSP™ и BOSYNC™, начална терапия и биологично съхранение на зъбите.',
      en: 'Discover Laser Dental Clinic’s scientific framework in Sofia: 3-layer MFSP™ and BOSYNC™ protocols, initial periodontal therapy, and biological tooth conservation.',
      pt: 'Descubra a filosofia científica da Laser Dental Clinic em Sófia: protocolos em 3 camadas MFSP™ e BOSYNC™, terapia periodontal inicial e conservação biológica dentária.'
    }
  });

  const currentProtocol = SCIENTIFIC_PROTOCOLS[activeProtocolIndex];

  return (
    <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
      
      {/* 1. Header Section */}
      <div className="max-w-3xl">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'За клиниката & Философия', 'About the Practice & Philosophy', 'Sobre a Clínica & Filosofia')}
        </span>
        <TextReveal effect="blur" as="h1" className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1926] tracking-tight leading-tight mb-6">
          {l3(
            language,
            'Преосмисляне на денталната грижа: От механично изпилване към биологично съхранение',
            'Redefining oral healthcare: From mechanical drilling to biological conservation',
            'Redefinir a medicina dentária: Do desgaste mecânico à conservação biológica'
          )}
        </TextReveal>
        <TextReveal effect="paragraph" as="p" className="text-base sm:text-lg text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Laser Dental Clinic в София е създадена около фундаменталната философия, че естественият зъб и живата тъкан нямат равен заместител. Нашата мисия е да съхраним вашето естествено съзъбие в дългосрочен план чрез най-модерните лазерни и функционални протоколи.',
            'Laser Dental Clinic in Sofia was founded on the conviction that natural dentition and biological tissues have no equal substitute. Our mission is to safeguard your natural teeth over the long term through advanced hydrokinetic laser protocols and functional biomechanics.',
            'A Laser Dental Clinic em Sófia foi fundada com base no princípio de que o dente natural e os tecidos biológicos não têm substituto à altura. A nossa missão é salvaguardar a sua dentição natural a longo prazo através de protocolos avançados de laser hidrocinético e biomecânica funcional.'
          )}
        </TextReveal>
      </div>

      {/* 2. Visual Storytelling & Operatory Philosophy */}
      <ScrollReveal as="div" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <ZoomVisual direction="in" className="relative rounded-2xl overflow-hidden border border-[#E8E2D8] shadow-md bg-neutral-100 group">
            <MandatoryDisclosure variant="badge" className="absolute top-4 left-4 z-10" />
            <picture>
              <source
                type="image/webp"
                srcSet="/images/clinic_reception_lounge-mobile.webp 688w, /images/clinic_reception_lounge.webp 1376w"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <img
                src="/images/clinic_reception_lounge.jpg"
                alt={l3(
                  language,
                  'Laser Dental Clinic фоайе и зона за консултации в София',
                  'Laser Dental Clinic welcome lounge and consultation area in Sofia',
                  'Espaço de acolhimento e área de consulta da Laser Dental Clinic em Sófia'
                )}
                width={1376}
                height={768}
                className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </ZoomVisual>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1926]">
            {l3(
              language,
              'Спокойствие, уединение и пълно доверие',
              'Tranquility, privacy, and clinical transparency',
              'Serenidade, privacidade e transparência clínica'
            )}
          </h2>
          <p className="text-sm text-[#5E6D77] leading-relaxed font-light">
            {l3(
              language,
              'Премахваме стреса, който традиционно се свързва с посещението при стоматолог. Интериорът ни е проектиран като спокойно медицинско убежище с естествен камък, дърво и мека светлина, където всеки преглед започва със задълбочен разговор.',
              'We eliminate the anxiety traditionally associated with dental appointments. Our facility is curated as a calm medical sanctuary of warm stone, natural wood, and soft lighting, where each consultation begins with dedicated listening.',
              'Eliminamos a ansiedade habitualmente associada às consultas dentárias. O nosso espaço foi concebido como um refúgio clínico acolhedor em pedra natural, madeira e iluminação suave, onde cada consulta começa por uma escuta atenta.'
            )}
          </p>

          <div className="space-y-3 pt-2">
            {[
              {
                bg: 'Индивидуален диагностичен план преди всяка манипулация',
                en: 'Comprehensive diagnostic plan formulated prior to any procedure',
                pt: 'Plano de diagnóstico individual antes de qualquer procedimento'
              },
              {
                bg: 'Без неприятни вибрации и високи температури на машинките',
                en: 'Zero rotary vibrations and elimination of thermal friction',
                pt: 'Sem vibrações mecânicas e com eliminação do atrito térmico'
              },
              {
                bg: 'Строга антисептична среда и биосъвместими керамични материали',
                en: 'Rigorous antiseptic protocols and high-biocompatibility ceramics',
                pt: 'Protocolos antissépticos rigorosos e cerâmicas de elevada biocompatibilidade'
              }
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs text-[#0A1926]">
                <Check className="w-4 h-4 text-[#B8924B] shrink-0 mt-0.5" />
                <span className="font-medium">{loc(pt, language)}</span>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/consultation"
              className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide text-white bg-[#0A1926] rounded-md hover:bg-[#18344A] transition-colors"
            >
              <span>{l3(language, 'Запишете се за индивидуален преглед', 'Book a Diagnostic Consultation', 'Marcar Consulta de Avaliação')}</span>
              <ArrowRight className="w-4 h-4 text-[#B8924B]" />
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* 3. SCIENTIFIC PROTOCOLS DEEP-DIVE (3-LAYER COMMUNICATION SYSTEM) */}
      <ScrollReveal as="div" className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-2xl p-8 sm:p-12 space-y-10">
        
        <FadeScale className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
            {l3(language, 'Научен стандарт на клиниката', 'Scientific Clinical Foundation', 'Fundamentação Clínica Científica')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight">
            {l3(
              language,
              'Трислойна научна комуникация: От разбираем език до биофизика',
              'Three-Layer Protocol Architecture: Layperson to Biophysics',
              'Comunicação Científica em Três Níveis: Da Linguagem Clara à Biofísica'
            )}
          </h2>
          <p className="mt-3 text-sm text-[#5E6D77] font-light leading-relaxed">
            {l3(
              language,
              'Ние вярваме, че съвременната медицина трябва да бъде кристално ясна за пациента, без да губи научната си строгост. Изберете протокол и превключете между трите нива на дълбочина.',
              'We believe modern healthcare must be fully transparent to patients while maintaining uncompromising scientific rigor. Select a protocol below and toggle between communicative layers.',
              'Acreditamos que a medicina moderna deve ser totalmente compreensível para o paciente, sem abdicar do rigor científico. Selecione um protocolo e alterne entre os três níveis de aprofundamento.'
            )}
          </p>
        </FadeScale>

        {/* Protocol Selector Tabs with Category E StaggerGroup */}
        <StaggerGroup variant="drop-down" staggerMs={100} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCIENTIFIC_PROTOCOLS.map((protocol, idx) => {
            const isSelected = idx === activeProtocolIndex;
            return (
              <button
                key={protocol.id}
                onClick={() => setActiveProtocolIndex(idx)}
                className={`p-5 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-white border-[#B8924B] shadow-sm'
                    : 'bg-[#F4EFEA] border-transparent hover:bg-white text-[#5E6D77]'
                }`}
              >
                <div className="text-[11px] font-mono text-[#B8924B] font-semibold mb-1">
                  PROTOCOL 0{idx + 1} · {protocol.code}
                </div>
                <div className="font-serif font-bold text-base text-[#0A1926] mb-1">
                  {loc(protocol.title, language)}
                </div>
                <div className="text-xs text-[#5E6D77] line-clamp-2">
                  {loc(protocol.clinicalPurpose, language)}
                </div>
              </button>
            );
          })}
        </StaggerGroup>

        {/* Layer Toggle Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E8E2D8]">
          <div className="text-xs font-semibold text-[#0A1926]">
            {l3(language, 'Изберете ниво на детайлност:', 'Select Depth of Information:', 'Selecione o nível de detalhe:')}
          </div>

          <div className="inline-flex rounded-lg bg-[#EFE9DF] p-1 gap-1">
            <button
              onClick={() => setSelectedLayer('plain')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedLayer === 'plain'
                  ? 'bg-white text-[#0A1926] shadow-xs'
                  : 'text-[#5E6D77] hover:text-[#0A1926]'
              }`}
            >
              <Info className="w-3.5 h-3.5 text-[#B8924B]" />
              <span>{l3(language, '1. За пациента', '1. Plain Explanation', '1. Para o Paciente')}</span>
            </button>

            <button
              onClick={() => setSelectedLayer('clinical')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedLayer === 'clinical'
                  ? 'bg-white text-[#0A1926] shadow-xs'
                  : 'text-[#5E6D77] hover:text-[#0A1926]'
              }`}
            >
              <Activity className="w-3.5 h-3.5 text-[#184D58]" />
              <span>{l3(language, '2. Клинична цел', '2. Clinical Purpose', '2. Objetivo Clínico')}</span>
            </button>

            <button
              onClick={() => setSelectedLayer('scientific')}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                selectedLayer === 'scientific'
                  ? 'bg-white text-[#0A1926] shadow-xs'
                  : 'text-[#5E6D77] hover:text-[#0A1926]'
              }`}
            >
              <Microscope className="w-3.5 h-3.5 text-[#0A1926]" />
              <span>{l3(language, '3. Биофизика', '3. Biophysics & Science', '3. Biofísica & Ciência')}</span>
            </button>
          </div>
        </div>

        {/* Selected Layer Display Box */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-[#E8E2D8] space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono text-[#B8924B] uppercase tracking-wider">
                {currentProtocol.code} · {selectedLayer.toUpperCase()} LEVEL
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1926]">
                {loc(currentProtocol.title, language)}
              </h3>
            </div>
            <span className="px-3 py-1 bg-[#FAF4EB] text-[#B8924B] text-xs font-mono font-medium rounded-full border border-[#E8D8BF]">
              {loc(currentProtocol.clinicalPurpose, language)}
            </span>
          </div>

          <div className="p-5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8] text-sm text-[#0A1926] leading-relaxed">
            {selectedLayer === 'plain' && (
              <div>
                <p className="font-light text-[#5E6D77]">
                  {loc(currentProtocol.accessibleSummary, language)}
                </p>
              </div>
            )}
            {selectedLayer === 'clinical' && (
              <div>
                <p className="font-light text-[#5E6D77]">
                  {loc(currentProtocol.clinicalPurpose, language)}
                </p>
              </div>
            )}
            {selectedLayer === 'scientific' && (
              <div>
                <p className="font-light text-[#5E6D77]">
                  {loc(currentProtocol.scientificDepth, language)}
                </p>
              </div>
            )}
          </div>

          {/* Pillars for Current Protocol */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-[#0A1926] uppercase tracking-wider block">
              {l3(language, 'Клинични етапи на протокола:', 'Clinical Protocol Milestones:', 'Fases Clínicas do Protocolo:')}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {locArr(currentProtocol.pillars, language).map((pillar, i) => (
                <div key={i} className="flex items-center gap-2 p-3 bg-[#FAF8F5] rounded-md border border-[#EFE9DF] text-xs text-[#0A1926]">
                  <CheckCircle2 className="w-4 h-4 text-[#B8924B] shrink-0" />
                  <span className="font-medium">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Indications */}
          <div className="pt-4 border-t border-[#E8E2D8] flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-[#5E6D77]">
              {l3(language, 'Индикации:', 'Indications:', 'Indicações:')}
            </span>
            {locArr(currentProtocol.indications, language).map((ind, i) => (
              <span key={i} className="px-2.5 py-1 bg-[#F4EFEA] text-[#184D58] rounded-md text-xs font-medium">
                {ind}
              </span>
            ))}
          </div>

        </div>

      </ScrollReveal>

      {/* 4. The 4 Fundamental Pillars */}
      <ScrollReveal as="div" className="pt-6 space-y-10">
        <FadeScale className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
            {l3(language, 'Основни стълбове', 'Core Clinical Pillars', 'Pilares Clínicos Fundamentais')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1926]">
            {l3(language, 'Стандарти на съвременната европейска практика', 'European Clinical Excellence Standards', 'Padrões Europeus de Excelência Clínica')}
          </h2>
        </FadeScale>

        <StaggerGroup variant="scale" staggerMs={120} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FAF4EB] text-[#B8924B] flex items-center justify-center font-serif font-bold text-lg">
              1
            </div>
            <h3 className="font-serif font-bold text-base text-[#0A1926]">
              {l3(language, 'Лазерна микро-инвазивност', 'Laser Minimally Invasive', 'Micro-Invasividade com Laser')}
            </h3>
            <p className="text-xs text-[#5E6D77] leading-relaxed">
              {l3(
                language,
                'Използваме хидрокинетичния лазер WATERLASE за селективно премахване само на болната тъкан без да засягаме здравия емайл.',
                'Employing Waterlase hydrokinetics to ablate strictly compromised tissue while conserving intact enamel rods.',
                'Utilização do laser hidrocinético WATERLASE para remoção seletiva e exclusiva do tecido afetado, preservando a estrutura de esmalte íntegra.'
              )}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FAF4EB] text-[#B8924B] flex items-center justify-center font-serif font-bold text-lg">
              2
            </div>
            <h3 className="font-serif font-bold text-base text-[#0A1926]">
              {l3(language, 'Функционална гнатология', 'Functional Gnathology', 'Gnatologia Funcional')}
            </h3>
            <p className="text-xs text-[#5E6D77] leading-relaxed">
              {l3(
                language,
                'Балансираме захапката и ставите (ТМС). Коригирането на оклузалните сили предотвратява изтриване на зъбите и болки в главата.',
                'Harmonizing dental occlusion and TMJ dynamics to relieve cranial tension and prevent destructive tooth wear.',
                'Harmonização da oclusão dentária e da dinâmica articular (ATM), aliviando tensões craniais e prevenindo o desgaste dentário.'
              )}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FAF4EB] text-[#B8924B] flex items-center justify-center font-serif font-bold text-lg">
              3
            </div>
            <h3 className="font-serif font-bold text-base text-[#0A1926]">
              {l3(language, 'Биологична съвместимост', 'Biological Biocompatibility', 'Biocompatibilidade Biológica')}
            </h3>
            <p className="text-xs text-[#5E6D77] leading-relaxed">
              {l3(
                language,
                'Работим изключително с високотехнологичен цирконий, литиев дисиликат и безметални структури без алергенен потенциал.',
                'Working strictly with monolithic zirconia, lithium disilicate, and metal-free biocompatible ceramic materials.',
                'Trabalho exclusivo com zircónia monolítica, dissilicato de lítio e estruturas cerâmicas biocompatíveis livres de metal e sem potencial alergénico.'
              )}
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#E8E2D8] space-y-3">
            <div className="w-10 h-10 rounded-md bg-[#FAF4EB] text-[#B8924B] flex items-center justify-center font-serif font-bold text-lg">
              4
            </div>
            <h3 className="font-serif font-bold text-base text-[#0A1926]">
              {l3(language, 'Превантивна поддръжка', 'Preventative Recall', 'Manutenção Preventiva')}
            </h3>
            <p className="text-xs text-[#5E6D77] leading-relaxed">
              {l3(
                language,
                'Лечението завършва с персонална програма за контрол, лазерна деконтаминация и периодични сканирания на всеки шест месеца.',
                'Every treatment culminates in a dedicated recall roadmap featuring laser pocket sanitation and 3D digital monitoring.',
                'Cada plano de tratamento culmina num programa de acompanhamento periódico com descontaminação laser e monitorização digital 3D semestral.'
              )}
            </p>
          </div>

        </StaggerGroup>
      </ScrollReveal>

      {/* Convertix_studio Concept Proposal Notice */}
      <PopupCard delayMs={100} className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-xl p-8 text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-widest text-[#B8924B] font-semibold">
          {CLINIC_INFO.agencyCredit} · Project Brief
        </span>
        <h3 className="text-lg font-serif font-bold text-[#0A1926]">
          {l3(language, 'Концептуален демонстрационен проект за Laser Dental Clinic', 'Demonstration Concept for Laser Dental Clinic', 'Projeto Conceptual de Demonstração para a Laser Dental Clinic')}
        </h3>
        <p className="text-xs text-[#5E6D77] leading-relaxed">
          {l3(
            language,
            'Този сайт е независима дизайн концепция, разработена от Convertix_studio, за да демонстрира модерен визуален стандард и премиум дигитално присъствие за Laser Dental Clinic, София. Всички клинични направления стъпват върху публично верифицирана информация за лазерните и 3D технологии на клиниката.',
            'This website is an independent design proposal authored by Convertix_studio to demonstrate an elevated digital experience for Laser Dental Clinic in Sofia, Bulgaria. Clinical methodologies are synthesized from publicly verifiable technological capabilities.',
            'Este website é uma proposta de design independente desenvolvida pela Convertix_studio para demonstrar uma presença digital de topo para a Laser Dental Clinic em Sófia, Bulgária. As metodologias clínicas baseiam-se em informações publicamente verificáveis sobre o equipamento tecnológico da clínica.'
          )}
        </p>
      </PopupCard>

    </div>
  );
};
