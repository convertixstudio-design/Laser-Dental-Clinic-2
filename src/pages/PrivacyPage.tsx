import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useSEO } from '../hooks/useSEO';
import { CLINIC_INFO } from '../data/clinicData';
import { l3 } from '../utils/localize';
import { ShieldCheck, FileText, AlertTriangle, Lock } from 'lucide-react';
import {
  ScrollReveal,
  PopupCard,
  FadeScale
} from '../components/animations/GlobalAnimations';

export const PrivacyPage: React.FC = () => {
  const { language } = useLanguage();

  useSEO({
    title: {
      bg: 'Правна рамка & Поверителност | Laser Dental Clinic София',
      en: 'Legal & Privacy Disclosures | Laser Dental Clinic Sofia',
      pt: 'Enquadramento Legal & Privacidade | Laser Dental Clinic Sófia'
    },
    description: {
      bg: 'Правна информация, статут на демонстрационния проект на Convertix_studio и политика за защита на личните данни за Laser Dental Clinic.',
      en: 'Statutory disclosures, Convertix_studio demonstration concept status, and data protection terms for Laser Dental Clinic.',
      pt: 'Informações jurídicas, estatuto do projeto conceptual da Convertix_studio e política de proteção de dados da Laser Dental Clinic.'
    }
  });

  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      
      {/* Header */}
      <FadeScale>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B8924B] block mb-2">
          {l3(language, 'Правна рамка', 'Legal & Privacy Framework', 'Enquadramento Legal & Privacidade')}
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#0A1926] tracking-tight mb-4">
          {l3(
            language,
            'Правна информация и защита на личните данни (Демонстрационен проект)',
            'Legal Disclosures & Data Protection (Demonstration Draft)',
            'Informações Jurídicas e Proteção de Dados (Projeto Demonstrativo)'
          )}
        </h1>
        <p className="text-sm text-[#5E6D77] font-light leading-relaxed">
          {l3(
            language,
            'Този раздел съдържа предвидената структура за официални правни документи, политика за поверителност и декларации за съответствие с GDPR.',
            'This section delineates the planned architecture for statutory legal documentation, GDPR compliance disclosures, and clinical regulatory terms.',
            'Esta secção descreve a estrutura planeada para a documentação jurídica estatutária, declarações de conformidade com o RGPD e termos regulamentares clínicos.'
          )}
        </p>
      </FadeScale>

      {/* Prominent Non-Fabrication Notice with Category B PopupCard */}
      <PopupCard delayMs={100} className="bg-[#FAF4EB] border border-[#E8D8BF] rounded-xl p-6 flex items-start gap-4">
        <AlertTriangle className="w-5 h-5 text-[#B8924B] shrink-0 mt-0.5" />
        <div className="text-xs text-[#5D4E37] space-y-2">
          <p className="font-semibold text-sm text-[#3D301F]">
            {l3(
              language,
              'Статус на правната информация (Convertix_studio):',
              'Statutory Documentation Status (Convertix_studio):',
              'Estatuto da Documentação Estatutária (Convertix_studio):'
            )}
          </p>
          <p className="leading-relaxed">
            {l3(
              language,
              'В съответствие с изискванията за етично проектиране, този демонстрационен уебсайт не фабрикува юридически регистрационни номера (ЕИК/БУЛСТАТ), медицински акредитационни лицензи или фиктивни търговски клаузи. Официалните регистрирани данни на лечебното заведение ще бъдат въведени от юридическия екип на Laser Dental Clinic при финалното въвеждане на платформата в реална експлоатация.',
              'In adherence to design integrity principles, this demonstration does not synthesize mock corporate registration IDs (EIK/VAT), fabricated healthcare accreditation licenses, or fictitious commercial clauses. Formal registered corporate records will be integrated by Laser Dental Clinic’s legal counsel prior to commercial launch.',
              'Em estrita conformidade com os princípios de integridade ética, este website demonstrativo não sintetiza números de identificação fiscal fictícios (EIK/NIF), licenças de acreditação médica inventadas ou cláusulas comerciais simuladas. Os dados jurídicos oficiais da unidade de saúde serão integrados pela assessoria jurídica da Laser Dental Clinic antes do lançamento operacional.'
            )}
          </p>
        </div>
      </PopupCard>

      {/* Structured Legal Framework Placeholders with Category A ScrollReveal */}
      <ScrollReveal as="div" className="space-y-8 bg-white border border-[#E8E2D8] rounded-2xl p-6 sm:p-10 shadow-xs">
        
        {/* Section 1: Concept Status */}
        <div className="space-y-3 pb-6 border-b border-[#F2ECE4]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B8924B]" />
            <h2 className="font-serif font-bold text-lg text-[#0A1926]">
              {l3(
                language,
                '1. Характер на уебсайта и авторство на концепцията',
                '1. Nature of Website & Conceptual Authorship',
                '1. Natureza do Website e Autoria da Proposta'
              )}
            </h2>
          </div>
          <p className="text-xs text-[#5E6D77] leading-relaxed">
            {l3(
              language,
              `Настоящият уебсайт представлява независим творчески и технологичен прототип, изработен от агенция ${CLINIC_INFO.agencyCredit}. Той има за цел да илюстрира визуалното оформление, функционалната навигация и информационната архитектура за евентуална бъдеща реализация.`,
              `This web demonstration constitutes an independent creative and technical prototype engineered by ${CLINIC_INFO.agencyCredit}. Its primary intent is to present visual design benchmarks, intuitive clinical pathways, and architectural structure for future deployment.`,
              `O presente website constitui um protótipo criativo e tecnológico independente desenvolvido pela agência ${CLINIC_INFO.agencyCredit}. O seu objetivo primordial é ilustrar os padrões visuais, percursos clínicos intuitivos e a arquitetura de informação para uma futura implementação.`
            )}
          </p>
        </div>

        {/* Section 2: Data Privacy & No-Storage Policy */}
        <div className="space-y-3 pb-6 border-b border-[#F2ECE4]">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#B8924B]" />
            <h2 className="font-serif font-bold text-lg text-[#0A1926]">
              {l3(
                language,
                '2. Защита на личните данни и отсъствие на съхранение',
                '2. Data Protection & Zero Storage Architecture',
                '2. Proteção de Dados e Arquitetura Sem Armazenamento'
              )}
            </h2>
          </div>
          <p className="text-xs text-[#5E6D77] leading-relaxed">
            {l3(
              language,
              'В този демонстрационен режим не се събират, записват в бази данни или предават на трети страни каквито и да е лични, контактни или здравни данни на потребителите. Формулярите за консултация и контакт функционират в клиентска изолирана среда за тестване на интерфейса.',
              'In this demonstration environment, zero personal, medical, or contact records are collected, persisted to databases, or shared with third parties. All booking and inquiry interfaces execute solely within a sandboxed client-side runtime for UX verification.',
              'Neste ambiente de demonstração, não são recolhidos, armazenados em bases de dados ou partilhados com terceiros quaisquer dados pessoais, clínicos ou de contacto dos utilizadores. Todos os formulários operam exclusivamente em ambiente local isolado no navegador para validação de usabilidade.'
            )}
          </p>
        </div>

        {/* Section 3: Final Production Compliance */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#B8924B]" />
            <h2 className="font-serif font-bold text-lg text-[#0A1926]">
              {l3(
                language,
                '3. Предстояща финална документация',
                '3. Pending Commissioned Documentation',
                '3. Documentação Definitiva de Produção'
              )}
            </h2>
          </div>
          <p className="text-xs text-[#5E6D77] leading-relaxed">
            {l3(
              language,
              'При финализиране на проекта от Laser Dental Clinic, тази страница ще включва: Общи условия за ползване на медицински услуги, Декларация за поверителност съгласно Регламент (ЕС) 2016/679 (GDPR), Информирано съгласие за диагностични и лазерни интервенции и официални лицензи от Регионална здравна инспекция (РЗИ).',
              'Upon official commissioning by Laser Dental Clinic, this repository will feature: General Medical Service Terms, Privacy Policy pursuant to EU Regulation 2016/679 (GDPR), Informed Clinical Consent Documentation for Hydrokinetic Laser Procedures, and statutory licenses issued by the Regional Health Inspectorate (RZI).',
              'Aquando da entrada em produção oficial pela Laser Dental Clinic, este repositório integrará: Termos Gerais de Prestação de Cuidados de Saúde, Política de Privacidade em conformidade com o Regulamento (UE) 2016/679 (RGPD), Documentação de Consentimento Clínico Informado para intervenções laser e licenças estatutárias emitidas pelas entidades competentes.'
            )}
          </p>
        </div>

      </ScrollReveal>

    </div>
  );
};
