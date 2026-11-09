import { Discipline, Technology, Article, MaintenanceProgram, GalleryItem, ScientificProtocol, PatientNeedProfile, CaseStudyFramework, ReviewFramework } from '../types';

export const CLINIC_INFO = {
  name: 'Laser Dental Clinic',
  city: 'София / Sofia',
  addressBg: 'ул. „Чумерна“ 12, 1000 София, България',
  addressEn: '12 Chumerna Street, Sofia 1000, Bulgaria',
  addressPt: 'Rua Chumerna 12, Sófia 1000, Bulgária',
  email: 'info@laserdentalclinic-bg.com',
  workingHoursBg: 'Понеделник – Петък: 09:00 – 19:00',
  workingHoursEn: 'Monday – Friday: 09:00 – 19:00',
  workingHoursPt: 'Segunda – Sexta: 09:00 – 19:00',
  disclaimerBg: 'Демонстрационна концепция от Convertix_studio — Не е официален уебсайт на Laser Dental Clinic.',
  disclaimerEn: 'Demonstration concept by Convertix_studio — Not the official clinic website.',
  disclaimerPt: 'Conceito demonstrativo por Convertix_studio — Não é o website oficial da Laser Dental Clinic.',
  agencyCredit: 'Convertix_studio'
};

export const CLINICAL_DISCIPLINES: Discipline[] = [
  {
    id: 'periodontology',
    name: {
      bg: 'Пародонтология',
      en: 'Periodontology',
      pt: 'Periodontologia'
    },
    category: {
      bg: 'Тъканно здраве и лазерна деконтаминация',
      en: 'Tissue Health & Laser Decontamination',
      pt: 'Saúde Tecidual e Descontaminação a Laser'
    },
    shortDesc: {
      bg: 'Лазерно-асистирано лечение на гингивит и пародонтит с пълна микробиална деконтаминация на пародонталните джобове.',
      en: 'Laser-assisted management of gingivitis and periodontitis with complete microbial decontamination of periodontal pockets.',
      pt: 'Tratamento de gengivite e periodontite assistido por laser com descontaminação microbiana integral das bolsas periodontais.'
    },
    fullDesc: {
      bg: 'Пародонтологията в нашата клиника стъпва върху концепцията за щадяща лазерна аблация и антибактериална фотодинамична терапия. Чрез прецизно таргетиране на гранулационната тъкан и патогенните анаеробни колонии се стимулира естествената тъканна регенерация без травматичен хирургичен кюретаж.',
      en: 'Periodontology in our clinic is grounded in gentle laser ablation and antibacterial photodynamic therapy. By selectively targeting diseased granulation tissue and pathogenic anaerobic colonies, we stimulate natural periodontal reattachment without aggressive surgical curettage.',
      pt: 'A periodontologia na nossa clínica fundamenta-se na ablação a laser suave e na terapia fotodinâmica antibacteriana. Ao visar seletivamente o tecido de granulação doente e as colónias anaeróbias patogénicas, estimulamos a regeneração e inserção periodontal natural sem recurso a curetagem cirúrgica agressiva.'
    },
    keyBenefits: {
      bg: [
        'Елиминиране на субгингивалната инфекция без скалпел',
        'Стимулиране на фибробластния растеж и регенерация',
        'Значително редуциране на кървенето и дълбочината на джобовете',
        'Минимален постоперативен дискомфорт и бързо възстановяване'
      ],
      en: [
        'Scalpel-free elimination of subgingival infection',
        'Bio-stimulation of fibroblasts and connective tissue reattachment',
        'Substantial reduction in pocket depths and bleeding on probing',
        'Minimal post-procedure discomfort and accelerated recovery'
      ],
      pt: [
        'Eliminação da infeção subgengival sem recurso a bisturi',
        'Bioestimulação de fibroblastos e regeneração do tecido conjuntivo',
        'Redução substancial da profundidade das bolsas e do sangramento à sondagem',
        'Desconforto pós-procedimento mínimo e recuperação acelerada'
      ]
    },
    technologiesUsed: ['WATERLASE', 'Photobiomodulation', 'KaVo Diagnocam'],
    indications: {
      bg: ['Кървене на венците', 'Разклащане на зъби', 'Пародонтални джобове > 4mm', 'Периимплантит'],
      en: ['Bleeding gums', 'Tooth mobility', 'Periodontal pockets > 4mm', 'Peri-implantitis'],
      pt: ['Sangramento gengival', 'Mobilidade dentária', 'Bolsas periodontais > 4mm', 'Peri-implantite']
    }
  },
  {
    id: 'restorative',
    name: {
      bg: 'Възстановителна дентална медицина',
      en: 'Restorative Dentistry',
      pt: 'Medicina Dentária Restauradora'
    },
    category: {
      bg: 'Биомиметично възстановяване',
      en: 'Biomimetic Restoration',
      pt: 'Restauração Biomimética'
    },
    shortDesc: {
      bg: 'Микро-инвазивно възстановяване на твърдите зъбни тъкани чрез лазерна препарираща прецизност и висок клас керамика.',
      en: 'Micro-invasive restoration of dental hard tissues using hydrokinetic laser preparation and high-strength ceramics.',
      pt: 'Restauração microinvasiva dos tecidos dentários duros mediante preparação de precisão a laser hidrocinético e cerâmicas de alta resistência.'
    },
    fullDesc: {
      bg: 'Възстановителната терапия прилага строги биомиметични протоколи, които максимално съхраняват здравата зъбна субстанция. Благодарение на хидрокинетичния лазер отпада нуждата от агресивно изпиляване с турбина, емайловите призми остават ненарушени от микропукнатини, а адхезивната връзка е несравнимо по-силна.',
      en: 'Restorative therapy follows strict biomimetic principles to preserve every micron of sound dental substance. With hydrokinetic laser preparation, vibration-induced micro-fractures of the enamel rods are avoided, resulting in vastly superior adhesive bonding and durable longevity.',
      pt: 'A terapia restauradora segue rigorosos protocolos biomiméticos para preservar cada mícron de substância dentária saudável. Graças à preparação com laser hidrocinético, evitam-se as microfraturas nos prismas de esmalte induzidas por vibração mecânica, proporcionando uma adesão amplamente superior e uma longevidade duradoura.'
    },
    keyBenefits: {
      bg: [
        'Препариране без вибрации, нагряване и микропукнатини',
        'Често без необходимост от местна анестезия',
        'Анатомични фотополимерни и керамични инлеи/онлеи',
        'Дълготрайна херметичност и устойчивост на маргинално оцветяване'
      ],
      en: [
        'Cavity preparation without vibration, friction heat, or micro-cracks',
        'Frequently performed without local anaesthesia',
        'Anatomic composite or ceramic inlays/onlays',
        'Long-term marginal seal and resistance to microleakage'
      ],
      pt: [
        'Preparação cavitária sem vibração, aquecimento por fricção ou microfissuras',
        'Realizada frequentemente sem necessidade de anestesia local',
        'Inlays e onlays anatómicos em resina composta ou cerâmica pura',
        'Selamento marginal duradouro e elevada resistência a microinfiltrações'
      ]
    },
    technologiesUsed: ['WATERLASE', 'Intraoral 3D Scanning', 'KaVo Diagnocam'],
    indications: {
      bg: ['Дълбок и апроксимален кариес', 'Счупени обтурации', 'Ерозии и абразии', 'Естетични дефекти'],
      en: ['Deep and interproximal caries', 'Fractured restorations', 'Erosion and wear', 'Aesthetic defects'],
      pt: ['Cárie profunda e interproximal', 'Restaurações fraturadas', 'Erosão e desgaste dentário', 'Imperfeições estéticas']
    }
  },
  {
    id: 'endodontics',
    name: {
      bg: 'Ендодонтия',
      en: 'Endodontics',
      pt: 'Endodontia'
    },
    category: {
      bg: 'Микроскопско канално лечение',
      en: 'Microscopic Root Canal Therapy',
      pt: 'Tratamento Radicular Microscópico'
    },
    shortDesc: {
      bg: 'Прецизно кореново лечение под операционен микроскоп с лазерно дезинфекциране на сложната корено-канална анатомия.',
      en: 'Precision root canal therapy under surgical microscope with hydro-photonic laser disinfection of intricate canal anatomy.',
      pt: 'Desvitalização de precisão sob microscópio operatório com desinfeção a laser hidro-fotónica da anatomia complexa dos canais.'
    },
    fullDesc: {
      bg: 'Успехът на ендодонтското лечение зависи от степента на ерадикация на бактериалните колонии от дентиновите тубули. Лазерният импулс генерира акустични ударни вълни и фотоакустично почистване, което прониква до над 1000 µm в дентина — дълбочина, недостижима за стандартните химични промивки.',
      en: 'Endodontic success relies directly on bacterial eradication deep within the dentinal tubules. Laser-activated photon-induced acoustic streaming delivers superior cleaning, penetrating over 1000 µm into lateral tubules—far beyond the reach of conventional chemical irrigation protocols.',
      pt: 'O sucesso do tratamento endodôntico depende diretamente da erradicação bacteriana no interior dos túbulos dentinários. A ativação a laser gera ondas de choque acústicas e fluxo fotoacústico que penetram a mais de 1000 µm nos túbulos laterais — uma profundidade inalcançável para as irrigações químicas convencionais.'
    },
    keyBenefits: {
      bg: [
        'Пълна 3D визуализация под микроскоп с висока резолюция',
        'Лазерно елиминиране на биофилма в странични и апикални каналчета',
        'Минимално отнемане на коренов дентин',
        'Висок процент на успеваемост при релечение и периапикални лезии'
      ],
      en: [
        'High-resolution microscopic magnification and illumination',
        'Laser eradication of bacterial biofilm in lateral and apical ramifications',
        'Maximal conservation of structural root dentin',
        'Superior success rate in complex retreatments and periapical lesions'
      ],
      pt: [
        'Visualização 3D completa sob microscópio cirúrgico de alta resolução',
        'Erradicação a laser do biofilme bacteriano em ramificações laterais e apicais',
        'Preservação máxima da dentina radicular estrutural',
        'Elevada taxa de sucesso em retratamentos complexos e lesões periapicais'
      ]
    },
    technologiesUsed: ['CBCT 3D', 'WATERLASE', 'Photobiomodulation'],
    indications: {
      bg: ['Пулпит и периодонтит', 'Грануломи и кисти', 'Неуспешни предишни лечения', 'Травми на зъбите'],
      en: ['Pulpitis and apical periodontitis', 'Granulomas and radicular cysts', 'Failed root canals', 'Dental trauma'],
      pt: ['Pulpites e periodontite apical', 'Granulomas e quistos radiculares', 'Tratamentos endodônticos prévios falhados', 'Traumatismos dentários']
    }
  },
  {
    id: 'orthodontics',
    name: {
      bg: 'Ортодонтия',
      en: 'Orthodontics',
      pt: 'Ortodontia'
    },
    category: {
      bg: 'Дигитална подредба и алайнери',
      en: 'Digital Alignment & Clear Aligners',
      pt: 'Alinhamento Digital e Alinhadores Transparentes'
    },
    shortDesc: {
      bg: 'Съвременна дигитално планирана ортодонтия с прозрачни алайнери и самолигиращи естетични системи.',
      en: 'Modern digitally planned orthodontics with clear aligners and aesthetic self-ligating appliance systems.',
      pt: 'Ortodontia moderna planeada digitalmente com alinhadores invisíveis removíveis e sistemas autoligáveis estéticos.'
    },
    fullDesc: {
      bg: 'Ортодонтското лечение в клиниката започва с пълно 3D сканиране и софтуерно симулиране на зъбните премествания. Прозрачните алайнери осигуряват предвидим, естетичен и хигиеничен комфорт без метални дъги, като същевременно поддържат оптимален контрол върху всяко микродвижение.',
      en: 'Orthodontic therapy begins with full 3D intraoral mapping and digital kinematic simulation. Clear aligners deliver predictable, discreet, and hygienic teeth alignment without brackets, ensuring precise biological force control across every step of tooth repositioning.',
      pt: 'O tratamento ortodôntico na clínica inicia-se com mapeamento intraoral 3D completo e simulação cinemática digital das movimentações dentárias. Os alinhadores transparentes proporcionam um alinhamento estético, previsível e higiénico sem braquetes nem arcos metálicos, garantindo controlo biológico rigoroso a cada etapa.'
    },
    keyBenefits: {
      bg: [
        'Напълно прозрачни, снемаеми и незабележими алайнери',
        'Предварителен 3D виртуален план на крайния резултат',
        'Лесна орална хигиена без задържане на плака',
        'Комфорт без остри ръбове и спешни посещения'
      ],
      en: [
        'Virtually invisible, removable, custom aligners',
        'Predictable 3D virtual treatment outcome simulation',
        'Seamless oral hygiene maintenance throughout treatment',
        'Superior patient comfort with fewer emergency visits'
      ],
      pt: [
        'Alinhadores totalmente transparentes, removíveis e impercetíveis',
        'Simulação virtual 3D prévia do resultado clínico final',
        'Higiene oral simplificada e sem retenção de placa bacteriana',
        'Conforto superior sem arestas cortantes nem consultas de urgência'
      ]
    },
    technologiesUsed: ['Intraoral 3D Scanning', 'CBCT 3D', 'Functional Diagnostics'],
    indications: {
      bg: ['Струпани или разредени зъби', 'Ротирани зъби', 'Кръстосана или дълбока захапка', 'Подготовка за протетика'],
      en: ['Crowded or spaced teeth', 'Rotated teeth', 'Crossbite and deep bite', 'Pre-prosthetic alignment'],
      pt: ['Dentes apinhados ou espaçados', 'Dentes com rotação', 'Mordida cruzada e sobremordida profunda', 'Alinhamento pré-protético']
    }
  },
  {
    id: 'functional-orthodontics',
    name: {
      bg: 'Функционална ортодонтия и гнатология',
      en: 'Functional Orthodontics & Gnathology',
      pt: 'Ortodontia Funcional e Gnatologia'
    },
    category: {
      bg: 'Хармония на захапката и ставите (ТМС)',
      en: 'Jaw Joint Harmony (TMJ) & Biomechanics',
      pt: 'Harmonia da Oclusão e Articulações (ATM)'
    },
    shortDesc: {
      bg: 'Комплексен биомеханичен анализ на темпоромандибуларните стави, мускулния тонус, дихателните пътища и позата.',
      en: 'Comprehensive biomechanical evaluation of temporomandibular joints (TMJ), muscular balance, airway, and posture.',
      pt: 'Avaliação biomecânica abrangente das articulações temporomandibulares (ATM), equilíbrio muscular, vias aéreas e postura.'
    },
    fullDesc: {
      bg: 'Функционалната ортодонтия не се ограничава само до визуално прави зъби. Ние анализираме позицията на долната челюст спрямо черепната база, състоянието на темпоромандибуларната става (ТМС) и баланса на дъвкателната мускулатура, за да предотвратим хронични болки в главата, шията и износване на зъбите.',
      en: 'Functional orthodontics transcends superficial cosmetic alignment. We evaluate mandibular trajectory relative to the cranial base, TMJ condylar position, and masticatory muscle synchrony to relieve chronic craniofacial tension, headaches, and premature dental attrition.',
      pt: 'A ortodontia funcional transcende o mero alinhamento estético superficial dos dentes. Analisamos a trajetória mandibular em relação à base craniana, a posição condilar na ATM e a sincronia muscular mastigatória, prevenindo cefaleias de tensão crónicas, dores cervicais e desgaste dentário precoce.'
    },
    keyBenefits: {
      bg: [
        'Осигуряване на стабилен ставен центрик и отпуснати мускули',
        'Премахване на пукане, болка и щракане в ТМС',
        'Оптимизиране на дихателните пътища и съня',
        'Дългосрочна стабилност на ортодонтския резултат'
      ],
      en: [
        'Achievement of stable centric relation and neuromuscular relaxation',
        'Alleviation of TMJ clicking, pain, and restricted opening',
        'Optimization of airway volume and breathing patterns',
        'Guaranteed biomechanical stability of finished restorations'
      ],
      pt: [
        'Obtenção de uma relação cêntrica estável e relaxamento neuromuscular',
        'Alívio de estalidos, dor e limitações de abertura na ATM',
        'Otimização do volume das vias aéreas e dos padrões respiratórios',
        'Estabilidade biomecânica duradoura dos resultados ortodônticos e protéticos'
      ]
    },
    technologiesUsed: ['Functional Diagnostics', 'CBCT 3D', 'Photobiomodulation'],
    indications: {
      bg: ['Бруксизъм (скърцане със зъби)', 'Пукане в челюстната става', 'Хронично главоболие и мигрена', 'Асиметрия на лицето'],
      en: ['Bruxism (teeth grinding)', 'TMJ clicking and jaw lock', 'Chronic tension headaches', 'Facial asymmetry'],
      pt: ['Bruxismo (ranger e apertar os dentes)', 'Estalidos na articulação mandibular', 'Cefaleias e enxaquecas tensionais crónicas', 'Assimetria facial']
    }
  },
  {
    id: 'prosthetics',
    name: {
      bg: 'Протетика и естетична рехабилитация',
      en: 'Prosthetics & Full Rehabilitation',
      pt: 'Prótese Dentária e Reabilitação Estética'
    },
    category: {
      bg: 'Прецизна дигитална реконструкция',
      en: 'Precision Digital Reconstruction',
      pt: 'Reconstrução Digital de Precisão'
    },
    shortDesc: {
      bg: 'Циркониеви и прес-керамични фасети, коронки и мостове с индивидуален микро-релеф и естествена транслуцентност.',
      en: 'Zirconia and lithium disilicate veneers, crowns, and bridges with custom micro-texture and natural light refraction.',
      pt: 'Facetas, coroas e pontes em zircónia e dissilicato de lítio com microtextura personalizada e reflexão de luz natural.'
    },
    fullDesc: {
      bg: 'Протетичната рехабилитация съчетава цифрово сканиране с прецизен анализ на дъвкателната функция. Изработваните циркониеви и литиево-дисиликатни конструкции се характеризират с абсолютна маргинална точност, пълна тъканна биопоносимост и естетично сливане със съседните структури.',
      en: 'Prosthetic reconstruction pairs intraoral digital capture with functional gnathological calibration. Monolithic zirconia and layered lithium disilicate restorations deliver sub-micron marginal adaptation, complete biocompatibility, and lifelike polychromatic vitality.',
      pt: 'A reabilitação protética alia a captura intraoral digital à calibração gnatológica funcional. As estruturas confeccionadas em zircónia monolítica e cerâmica prensada caracterizam-se por uma adaptação marginal micrométrica, total biocompatibilidade tecidular e integração cromática natural com as estruturas vizinhas.'
    },
    keyBenefits: {
      bg: [
        'Без метални основи и без посиняване на венеца',
        'Високо биосъвместими безметални материали',
        'Дигитален дизайн на усмивката (Digital Smile Design)',
        'Перфектна оклузална интеграция без травматичен контакт'
      ],
      en: [
        'High biocompatibility metal-free ceramic matrices with no dark margins',
        'Premium high-translucency zirconia and ceramic matrices',
        'Digital smile design tailored to individual facial symmetry',
        'Harmonized occlusal contact distribution preventing fractures'
      ],
      pt: [
        'Ausência de metal e eliminação de linhas escuras junto à gengiva',
        'Materiais cerâmicos de alta translucidez e biocompatibilidade superior',
        'Design Digital do Sorriso (Digital Smile Design) adaptado à simetria facial',
        'Integração oclusal harmoniosa evitando forças de contacto traumáticas'
      ]
    },
    technologiesUsed: ['Intraoral 3D Scanning', 'Functional Diagnostics', 'CBCT 3D'],
    indications: {
      bg: ['Силно разрушени зъби', 'Липсващи зъби', 'Патологично изтриване на съзъбието', 'Естетични несъвършенства'],
      en: ['Extensively damaged teeth', 'Missing teeth', 'Severe generalized attrition', 'Aesthetic imperfections'],
      pt: ['Dentes severamente danificados', 'Dentes ausentes', 'Desgaste dentário generalizado e atrito', 'Imperfeições estéticas do sorriso']
    }
  },
  {
    id: 'oral-surgery',
    name: {
      bg: 'Орална хирургия',
      en: 'Oral Surgery',
      pt: 'Cirurgia Oral'
    },
    category: {
      bg: 'Минимално инвазивна лазерна хирургия',
      en: 'Minimally Invasive Laser Surgery',
      pt: 'Cirurgia a Laser Minimamente Invasiva'
    },
    shortDesc: {
      bg: 'Атравматични екстракции, френулотомия и костни корекции с лазерен скалпел за ускорено зарастване без шевове.',
      en: 'Atraumatic extractions, frenectomies, and bone recontouring using precision laser wavelengths for suture-free healing.',
      pt: 'Extrações atraumáticas, frenectomias e remodelação óssea com laser de precisão para cicatrização acelerada sem suturas.'
    },
    fullDesc: {
      bg: 'Оралната хирургия при нас се провежда с минимална травма на меките и твърди тъкани. Лазерният лъч едновременно коагулира кръвоносните съдове и запечатва нервните окончания, което значително ограничава кървенето, спомага за редуциране на следоперативния оток и осигурява по-комфортно и щадящо възстановяване.',
      en: 'Oral surgical procedures are conducted with minimal tissue trauma. The laser wavelength simultaneously cuts and coagulates micro-vessels while sealing severed nerve endings—significantly mitigating intraoperative bleeding and postoperative edema, supporting a more comfortable recovery.',
      pt: 'Os procedimentos cirúrgicos orais são realizados com traumatismo mínimo dos tecidos moles e duros. O feixe de laser corta e coagula simultaneamente os microvasos sanguíneos, selando as terminações nervosas. Isto reduz significativamente o sangramento intraoperatório e o edema pós-operatório, proporcionando uma recuperação tranquila.'
    },
    keyBenefits: {
      bg: [
        'Безкръвни разрези и липса на нужда от конци при много процедури',
        'Стерилно оперативно поле с унищожаване на бактериите',
        'Бързо епителизиране и минимален следоперативен оток',
        'Атравматично запазване на костния гребен при екстракции'
      ],
      en: [
        'Bloodless incisions, frequently requiring zero surgical sutures',
        'Sterile operative field with immediate bacterial elimination',
        'Rapid epithelialization and reduced postoperative swelling',
        'Atraumatic extraction protocols preserving alveolar ridge width'
      ],
      pt: [
        'Incisões limpas e ausência frequente de necessidade de pontos cirúrgicos',
        'Campo operatório estéril com eliminação imediata de bactérias',
        'Epitelização rápida e edema pós-operatório acentuadamente reduzido',
        'Preservação alveolar atraumática durante a extração dentária'
      ]
    },
    technologiesUsed: ['WATERLASE', 'Photobiomodulation', 'CBCT 3D'],
    indications: {
      bg: ['Ретинирани мъдреци', 'Къси юздички (френулум)', 'Апикална остеотомия', 'Прединсталационна подготовка'],
      en: ['Impacted third molars', 'Frenulum anomalies', 'Apicoectomies', 'Pre-prosthetic tissue preparation'],
      pt: ['Dentes do siso inclusos', 'Anomalias de freio labial ou lingual', 'Apicectomias e osteotomias', 'Preparação tecidular pré-protética']
    }
  },
  {
    id: 'implantology',
    name: {
      bg: 'Имплантология',
      en: 'Implantology',
      pt: 'Implantologia'
    },
    category: {
      bg: 'Навигирано 3D имплантиране',
      en: 'Guided 3D Implant Placement',
      pt: 'Colocação de Implantes 3D Guiada'
    },
    shortDesc: {
      bg: 'Премиум титаниеви и керамични импланти с навигационни 3D водачи за безопасно и дълготрайно заместване на зъби.',
      en: 'Premium titanium and ceramic implants positioned with custom 3D surgical guides for secure, lifelong stability.',
      pt: 'Implantes premium de titânio e cerâmica posicionados através de guias cirúrgicos 3D para segurança e estabilidade duradoura.'
    },
    fullDesc: {
      bg: 'Имплантирането се планира изцяло виртуално върху триизмерната томография на пациента. Чрез индивидуални хирургични шаблони имплантът се поставя под точен ъгъл и дълбочина, осигурявайки идеално натоварване, отлична остеоинтеграция и естествена естетика на меките тъкани.',
      en: 'Implant positioning is planned virtually on patient 3D volumetric CBCT data. Using custom-printed surgical guides, every implant is seated with micron precision, maximizing primary stability, bone preservation, and natural gingival emergence profiles.',
      pt: 'A colocação de implantes é planeada integralmente de forma virtual sobre o exame tomográfico 3D (CBCT) do paciente. Mediante guias cirúrgicos computorizados personalizados, cada implante é posicionado com precisão micrométrica, assegurando distribuição ideal de cargas mastigatórias, excelente osteointegração e perfil de emergência natural.'
    },
    keyBenefits: {
      bg: [
        'Компютърно навигирана прецизност без засягане на нерви и синуси',
        'Премиум швейцарски и немски имплантни системи',
        'Опции за незабавно натоварване при подходящи условия',
        'Лазерно кондициониране на имплантното легло'
      ],
      en: [
        'Computer-guided positioning safeguarding adjacent nerves and sinuses',
        'Validated premium implant systems with lifelong track records',
        'Immediate loading protocols where biological criteria permit',
        'Laser bio-activation of the osteotomy site'
      ],
      pt: [
        'Precisão guiada por computador, salvaguardando nervos e seios maxilares',
        'Sistemas de implantes suíços e alemães de padrão internacional comprovado',
        'Protocolos de carga imediata quando os critérios biológicos o permitem',
        'Bioativação e condicionamento a laser do leito ósseo receptor'
      ]
    },
    technologiesUsed: ['CBCT 3D', 'WATERLASE', 'Intraoral 3D Scanning', 'Photobiomodulation'],
    indications: {
      bg: ['Единичен липсващ зъб', 'Множествени дефекти', 'Напълно обеззъбена челюст', 'Нестабилни протези'],
      en: ['Single missing tooth', 'Multiple gaps', 'Complete edentulism', 'Unstable removable dentures'],
      pt: ['Perda de dente unitário', 'Ausência múltipla de dentes', 'Desdentação total da arcada', 'Próteses removíveis instáveis']
    }
  },
  {
    id: 'paediatric',
    name: {
      bg: 'Детска дентална медицина',
      en: 'Paediatric Dentistry',
      pt: 'Odontopediatria'
    },
    category: {
      bg: 'Щадяща превантивна грижа за деца',
      en: 'Minimally Invasive Gentle Care for Children',
      pt: 'Cuidados Pediátricos Suaves e Preventivos'
    },
    shortDesc: {
      bg: 'Лечение на детски кариеси с хидрокинетичен лазер без механични вибрации и с намалена нужда от инжекционна анестезия.',
      en: 'Gentle paediatric caries treatment using hydrokinetic laser minimizing mechanical vibration and reducing the need for needle injections.',
      pt: 'Tratamento de cáries infantis com laser hidrocinético sem vibrações mecânicas e com menor necessidade de anestesia injetável.'
    },
    fullDesc: {
      bg: 'Ние превръщаме посещението при зъболекар в позитивно преживяване за детето. Хидрокинетичният лазер премахва кариозната тъкан чрез микро-капки вода и светлинна енергия, без пронизващия звук на бормашина и без загряване, което в много случаи свежда до минимум необходимостта от поставяне на упойка.',
      en: 'We transform children’s dental visits into a comfortable, fear-free milestone. The hydrokinetic laser vaporizes carious tissue via gentle water-atomized light energy, minimizing bone vibration, drill whine, and the necessity for conventional local injections in many common interventions.',
      pt: 'Transformamos a consulta de medicina dentária infantil numa experiência acolhedora e positiva para a criança. O laser hidrocinético remove o tecido cariado mediante microgotículas de água e energia luminosa suave, sem o ruído agudo da broca e sem atrito térmico, reduzindo em grande número de casos a necessidade de injeções locais.'
    },
    keyBenefits: {
      bg: [
        'Без неприятна вибрация и пищящ звук на турбина',
        'Възможност за работа без упойка при подходящи клинични показания',
        'Запечатване на дълбоки фисури с лазерна дезинфекция',
        'Изграждане на трайно доверие към денталната медицина'
      ],
      en: [
        'Zero tactile vibration and no loud mechanical drill whine',
        'Potential for needle-free preparation in appropriate clinical indications',
        'Fissure sealing supported by preventative laser decontamination',
        'Cultivation of positive lifelong oral hygiene attitudes'
      ],
      pt: [
        'Zero vibrações desagradáveis e sem o ruído estridente da turbina mecânica',
        'Possibilidade de tratamento sem anestesia em indicações clínicas adequadas',
        'Selamento de fissuras profundas com desinfeção preventiva a laser',
        'Construção de uma relação de confiança duradoura com a saúde oral'
      ]
    },
    technologiesUsed: ['WATERLASE', 'KaVo Diagnocam', 'Photobiomodulation'],
    indications: {
      bg: ['Кариес на млечни и постоянни зъби', 'Профилактично силанизиране', 'Френулотомия при бебета и деца', 'Травми на предни зъби'],
      en: ['Decay on primary and permanent teeth', 'Fissure sealants', 'Infant frenectomy for speech and feeding', 'Childhood dental injuries'],
      pt: ['Cáries em dentes decíduos e permanentes', 'Selamento profilático de fissuras', 'Frenectomia em bebés e crianças', 'Traumatismos dentários infantis']
    }
  },
  {
    id: 'sports-dentistry',
    name: {
      bg: 'Спортна стоматология',
      en: 'Sports Dentistry',
      pt: 'Medicina Dentária Desportiva'
    },
    category: {
      bg: 'Защита и оклузална ергономия',
      en: 'Athletic Protection & Occlusal Performance',
      pt: 'Proteção Atlética e Ergonomia Oclusal'
    },
    shortDesc: {
      bg: 'Индивидуални многослойни предпазни шини и гнатологична стабилизация за професионални и любителски спортисти.',
      en: 'Custom multi-laminate protective mouthguards and occlusal stabilization for professional and recreational athletes.',
      pt: 'Goteiras de proteção multilaminadas personalizadas e estabilização gnatológica para atletas profissionais e amadores.'
    },
    fullDesc: {
      bg: 'Спортната стоматология осигурява максимална защита на зъбите, челюстите и мозъка от сътресения при контактни спортове. Освен механична защита, балансираната оклузия подобрява мускулната кинематика на цялото тяло, кислородния поток и силовата издръжливост.',
      en: 'Sports dentistry delivers essential impact protection for teeth, alveolar bone, and concussion mitigation in contact athletics. Beyond impact absorption, an ergonomically balanced dental occlusion optimizes full-body kinetic alignment and oxygen intake.',
      pt: 'A medicina dentária desportiva assegura proteção máxima aos dentes, arcadas maxilares e atenuação do risco de concussão em desportos de contacto. Além da absorção do impacto mecânico, uma oclusão equilibrada otimiza o alinhamento cinemático corporal, o fluxo respiratório e a performance muscular.'
    },
    keyBenefits: {
      bg: [
        'Многослойни вакуум-пресовани предпазни шини по индивидуален 3D скан',
        'Не пречат на дишането и ясния говор по време на състезание',
        'Абсорбират до 85% от кинетичния удар в лицевата област',
        'Оклузален баланс за повишаване на нервно-мускулната ефективност'
      ],
      en: [
        'Multi-laminated pressure-formed mouthguards tailored to 3D scans',
        'Unobstructed respiration and verbal communication during play',
        'Absorption of up to 85% of direct facial impact force',
        'Occlusal harmony supporting enhanced neuromuscular power'
      ],
      pt: [
        'Goteiras de proteção prensadas sob vácuo adaptadas a escaneamento 3D individual',
        'Sem interferência na respiração nem na comunicação verbal em competição',
        'Absorção de até 85% da força de impacto cinético na zona facial',
        'Equilíbrio oclusal favorecendo maior eficiência neuromuscular'
      ]
    },
    technologiesUsed: ['Intraoral 3D Scanning', 'Functional Diagnostics'],
    indications: {
      bg: ['Бойни спортове, ръгби, хокей', 'Баскетбол и футбол', 'Колоездене и екстремни спортове', 'Спортен бруксизъм при натоварване'],
      en: ['Martial arts, rugby, hockey', 'Basketball and football', 'Cycling and extreme sports', 'Exertion-related teeth clenching'],
      pt: ['Artes marciais, râguebi, hóquei', 'Basquetebol e futebol', 'Ciclismo e desportos radicais', 'Apertamento dentário e bruxismo associado ao esforço']
    }
  }
];

export const TECHNOLOGIES: Technology[] = [
  {
    id: 'waterlase',
    name: 'WATERLASE Er,Cr:YSGG Laser',
    type: {
      bg: 'Хидрокинетичен лазер за твърди и меки тъкани',
      en: 'Hydrokinetic Hard & Soft Tissue Laser',
      pt: 'Laser Hidrocinético para Tecidos Duros e Moles'
    },
    tagline: {
      bg: 'Прецизна лазерна терапия с минимален дискомфорт и без ротационни вибрации',
      en: 'Precision laser therapy with minimized discomfort and zero mechanical vibrations',
      pt: 'Terapia laser de alta precisão com mínimo desconforto e sem vibrações rotatórias'
    },
    description: {
      bg: 'Технологията WATERLASE комбинира водна струя и лазерна фотонна енергия (дължина на вълната 2780 nm). Водните капки абсорбират лазерната енергия и предизвикват микро-експлозии, които прецизно премахват кариозен дентин и емайл без механично триене и с предпазване на зъбния пулп от термичен шок.',
      en: 'WATERLASE technology couples pressurized water droplets with Er,Cr:YSGG photon energy (2780 nm wavelength). Water molecules absorb laser energy to perform micro-ablation of hard and soft tissue without mechanical friction, preserving surrounding dental pulp from thermal shock.',
      pt: 'A tecnologia WATERLASE combina um spray de água atomizada com energia fotónica de laser Er,Cr:YSGG (comprimento de onda de 2780 nm). As moléculas de água absorvem a energia e realizam microablação precisa do esmalte e da dentina cariada sem atrito mecânico, preservando a polpa dentária de choques térmicos.'
    },
    clinicalAdvantage: {
      bg: [
        'Липса на микропукнатини в емайла в сравнение с механичните ротационни пилители',
        'Стерилизиращо действие върху дентиновите тубули по време на подготовка',
        'Значително намалена необходимост от анестезия при рутинни манипулации',
        'Безкръвни манипулации при работа върху венец с бързо зарастване'
      ],
      en: [
        'Elimination of enamel micro-fracturing typical of rotary diamond burs',
        'Simultaneous deep sterilization of exposed dentinal tubules',
        'Significantly reduced local anaesthetic requirement in routine clinical indications',
        'Hemostatic, bloodless soft-tissue interventions with rapid healing'
      ],
      pt: [
        'Eliminação de microfraturas no esmalte em comparação com brocas rotatórias convencionais',
        'Efeito esterilizante e desinfeção profunda dos túbulos dentinários durante a preparação',
        'Redução acentuada da necessidade de anestesia local em procedimentos clínicos de rotina',
        'Procedimentos cirúrgicos hemostáticos em tecidos moles com cicatrização acelerada'
      ]
    },
    specs: {
      bg: ['Дължина на вълната: 2780 nm', 'Импулсен режим: YSGG кристал', 'Приложение: Твърди и меки тъкани'],
      en: ['Wavelength: 2780 nm', 'Pulsed mode: Er,Cr:YSGG crystal', 'Application: Hard and soft tissue'],
      pt: ['Comprimento de onda: 2780 nm', 'Modo pulsado: Cristal Er,Cr:YSGG', 'Aplicação: Tecidos duros e moles']
    },
    imageKey: 'waterlase'
  },
  {
    id: 'cbct-3d',
    name: 'CBCT 3D Volumetric Imaging',
    type: {
      bg: 'Конично-лъчева компютърна томография с ниска доза',
      en: 'Ultra Low-Dose 3D Cone Beam Computed Tomography',
      pt: 'Tomografia Computorizada de Feixe Cónico de Baixa Dose (CBCT 3D)'
    },
    tagline: {
      bg: 'Субмилиметрова триизмерна анатомична прецизност',
      en: 'Sub-millimetre three-dimensional diagnostic certainty',
      pt: 'Certeza diagnóstica tridimensional com resolução submilimétrica'
    },
    description: {
      bg: 'CBCT осигурява фотореалистична 3D реконструкция на челюстните кости, зъбните корени, синусите и нервните канали. В сравнение с конвенционалните медицински скенери, апаратът работи с до 90% по-ниско лъчево натоварване чрез протоколи за зелена томография.',
      en: 'CBCT provides ultra-sharp 3D volumetric reconstructions of alveolar bone volume, root canal architecture, maxillary sinuses, and mandibular nerve pathways with up to 90% reduced radiation exposure compared to conventional medical CT scanners.',
      pt: 'O sistema CBCT fornece reconstruções volumétricas 3D ultraprecisas do osso alveolar, raízes dentárias, seios maxilares e canais nervosos. Funciona com protocolos de dose ultrabaixa (Ultra Low Dose), reduzindo a exposição à radiação em até 90% em comparação com tomografias médicas convencionais.'
    },
    clinicalAdvantage: {
      bg: [
        'Безопасно виртуално планиране на импланти с хирургични шаблони',
        'Откриване на скрити допълнителни коренови канали и фрактури',
        'Оценка на костната плътност преди регенеративни процедури',
        'Диагностика на темпоромандибуларната става (ТМС) в реални пропорции'
      ],
      en: [
        'Safe guided implant planning avoiding anatomical structures',
        'Detection of undetected accessory canals, root cracks, and cysts',
        'Bone density and volume assessment before augmentation',
        'High-resolution evaluation of TMJ condylar position'
      ],
      pt: [
        'Planeamento virtual seguro de implantes dentários com guias cirúrgicos',
        'Deteção precoce de canais radiculares acessórios (MB2), fissuras e quistos',
        'Avaliação detalhada da densidade e volume ósseo antes de procedimentos regenerativos',
        'Avaliação morfológica de alta definição da articulação temporomandibular (ATM)'
      ]
    },
    specs: {
      bg: ['Резолюция: До 75 µm воксел', 'Лъчево натоварване: Ultra Low Dose', 'Време за сканиране: < 15 сек'],
      en: ['Resolution: Down to 75 µm voxel', 'Radiation: Ultra Low Dose protocol', 'Scan duration: < 15 seconds'],
      pt: ['Resolução: Até 75 µm de vóxel', 'Dose de radiação: Protocolo Ultra Low Dose', 'Tempo de aquisição: < 15 segundos']
    },
    imageKey: 'cbct'
  },
  {
    id: 'intraoral-scanning',
    name: 'Intraoral 3D Scanning',
    type: {
      bg: 'Прецизен оптичен дигитален отпечатък',
      en: 'High-Speed Optical Intraoral Digital Impression',
      pt: 'Impressão Óptica Digital Intraoral de Alta Velocidade'
    },
    tagline: {
      bg: 'Край на неприятните отпечатъчни силикони и позивите за гадене',
      en: 'Complete elimination of messy impression trays and gag reflexes',
      pt: 'Eliminação total de moldeiras desconfortáveis e reflexos de náusea'
    },
    description: {
      bg: 'Интраоралното оптично сканиране заснема хиляди кадри в секунда, генерирайки кристално чист 3D дигитален модел на съзъбието за под 2 минути. Получените данни се изпращат мигновено към зъботехническата CAD/CAM лаборатория.',
      en: 'Intraoral digital optical scanning records thousands of frames per second to construct a full 3D color model of your dentition in under two minutes, transmitting exact digital files directly to precision dental milling laboratories.',
      pt: 'O escaneamento óptico intraoral captura milhares de fotogramas por segundo, construindo um modelo digital 3D a cores fidedigno da arcada dentária em menos de dois minutos. Os dados são transferidos instantaneamente para o laboratório de prótese CAD/CAM.'
    },
    clinicalAdvantage: {
      bg: [
        'Субмикронна точност без деформации от гипс и силикон',
        'Максимален комфорт за пациента без позиви за повръщане',
        'Възможност за проследяване на изтриването на зъбите във времето',
        'Моментална дигитална симулация на усмивката'
      ],
      en: [
        'Sub-micron accuracy free from elastomer distortion or shrinkage',
        'Unmatched patient comfort with zero tray-induced nausea',
        'Time-lapse tracking of enamel wear and gum recession',
        'Real-time simulation of orthodontic alignment and restorative smile design'
      ],
      pt: [
        'Precisão submicrométrica sem deformações típicas dos gessos e silicones',
        'Conforto absoluto para o paciente sem indução de náuseas',
        'Monitorização comparativa do desgaste do esmalte e recessão gengival ao longo do tempo',
        'Simulação digital em tempo real do sorriso e do alinhamento ortodôntico'
      ]
    },
    specs: {
      bg: ['Точност: < 10 микрона', 'Цвят: Реален фотореалистичен спектър', 'Време: Пълна челюст за 60 секунди'],
      en: ['Accuracy: < 10 microns', 'Color: True-shade polychromatic capture', 'Duration: Full arch in 60 seconds'],
      pt: ['Precisão: < 10 mícrons', 'Cor: Captura fotográfica policromática real', 'Tempo: Arcada completa em 60 segundos']
    },
    imageKey: 'scanner'
  },
  {
    id: 'diagnocam',
    name: 'KaVo Diagnocam',
    type: {
      bg: 'Трансилюминационна лазерна диагностика без радиация',
      en: 'Zero-Radiation Transillumination Caries Detection',
      pt: 'Deteção de Cáries por Transiluminação a Laser Sem Radiação'
    },
    tagline: {
      bg: 'Ранно откриване на кариес между зъбите без рентгенови лъчи',
      en: 'Early detection of interproximal decay without X-ray radiation',
      pt: 'Deteção precoce de lesões interproximais sem emissão de raios X'
    },
    description: {
      bg: 'Diagnocam използва трансилюминация с лазерна светлина, при която зъбът се осветява като прозрачен кристал. Здравият емайл пропуска светлината, докато кариозните зони я абсорбират и се виждат като тъмни сенки на видеомонитора.',
      en: 'Diagnocam harnesses laser transillumination where dental enamel behaves as a light guide. Intact enamel transmits light freely, whereas carious demineralized lesions absorb the wavelength and appear as unmistakable high-contrast shadows.',
      pt: 'O Diagnocam utiliza tecnologia de transiluminação por luz laser, através da qual a estrutura dentária atua como um condutor de luz natural. O esmalte são transmite o feixe livremente, enquanto as zonas desmineralizadas de cárie o absorvem, surgindo como sombras escuras e nítidas no ecrã.'
    },
    clinicalAdvantage: {
      bg: [
        'Беземисионна оптична технология без йонизираща радиация, подходяща за бременни и деца',
        'Открива ранни скрити кариеси между зъбите преди да се образува кухина',
        'Позволява микро-инвазивна реминерализация вместо изпиляване',
        'Дигитален видеозапис за точно сравнение през шест месеца'
      ],
      en: [
        'Zero ionizing radiation (DIFOTI technology), suitable for pregnant patients and young children',
        'Detects hidden interdental lesions before irreversible cavitations occur',
        'Enables minimally invasive remineralization instead of drilling',
        'Provides repeatable video archives for precise interval comparison'
      ],
      pt: [
        'Tecnologia óptica sem radiação ionizante (DIFOTI), segura para grávidas e crianças',
        'Identifica lesões interdentárias precoces antes da formação de cavidades irreversíveis',
        'Permite intervenções de remineralização microinvasiva em vez de desgaste mecânico',
        'Registo de vídeo digital para comparação comparativa precisa em consultas periódicas'
      ]
    },
    specs: {
      bg: ['Принцип: Лазерна трансилюминация (DIFOTI)', 'Радиация: 0 µSv', 'Камера: HD дигитален сензор'],
      en: ['Principle: Digital Transillumination (DIFOTI)', 'Radiation: 0 µSv', 'Sensor: HD macro imaging'],
      pt: ['Princípio: Transiluminação laser digital (DIFOTI)', 'Radiação: 0 µSv', 'Sensor: Sensor digital de alta definição (HD)']
    },
    imageKey: 'diagnocam'
  },
  {
    id: 'photobiomodulation',
    name: 'Photobiomodulation (PBM / LLLT)',
    type: {
      bg: 'Нискоинтензивна лазерна клетъчна терапия',
      en: 'Low-Level Laser Therapy & Cellular Bio-stimulation',
      pt: 'Fotobiomodulação a Laser e Bioestimulação Celular (PBM / LLLT)'
    },
    tagline: {
      bg: 'Ускорена регенерация на клетките и намаляване на болката',
      en: 'Accelerated cellular ATP synthesis and pain suppression',
      pt: 'Regeneração tecidular acelerada e alívio natural da dor'
    },
    description: {
      bg: 'Фотобиомодулацията въздейства върху митохондриите в клетките, стимулирайки производството на АТФ (клетъчна енергия). Това драстично намалява възпалителните цитокини, подобрява микроциркулацията и стимулира неоангиогенезата след хирургични намеси.',
      en: 'Photobiomodulation acts directly on mitochondrial cytochrome c oxidase to boost ATP synthesis. This bio-energetic stimulation dramatically downregulates inflammatory cytokines, promotes microcirculation, and accelerates healing following oral interventions.',
      pt: 'A fotobiomodulação atua diretamente sobre a enzima mitocondrial citocromo c oxidase, estimulando a síntese de ATP (energia celular). Este processo mitiga mediadores inflamatórios, melhora a microcirculação e acelera a neoangiogénese após intervenções orais.'
    },
    clinicalAdvantage: {
      bg: [
        'Намалява следоперативната болка и нуждата от аналгетици',
        'Ускорява оздравяването на меките тъкани с до 50%',
        'Облекчава спазми в дъвкателната мускулатура и болки в ТМС',
        'Ефективна терапия при афти, херпеси и невралгии'
      ],
      en: [
        'Substantially lowers post-surgical discomfort and analgesic dependency',
        'Shortens soft-tissue healing windows by up to 50%',
        'Relieves masticatory muscle spasms and acute TMJ arthralgia',
        'Rapidly resolves aphthous ulcers, herpes simplex, and paresthesias'
      ],
      pt: [
        'Reduz substancialmente o desconforto pós-operatório e a dependência de analgésicos',
        'Acelera a cicatrização dos tecidos moles em até 50%',
        'Alivia espasmos da musculatura mastigatória e queixas álgicas na ATM',
        'Tratamento eficaz para aftas recorrentes, herpes labial e parestesias'
      ]
    },
    specs: {
      bg: ['Спектър: Близък инфрачервен и червен спектър (660–980 nm)', 'Ефект: Нетермична фотохимия', 'Продължителност: 5–10 мин'],
      en: ['Spectrum: Near-infrared & red spectrum (660–980 nm)', 'Action: Athermal photochemistry', 'Duration: 5–10 minutes per session'],
      pt: ['Espetro: Luz vermelha e infravermelho próximo (660–980 nm)', 'Ação: Fotoquímica atérmica não invasiva', 'Duração: 5–10 minutos por sessão']
    },
    imageKey: 'pbm'
  },
  {
    id: 'functional-diagnostics',
    name: 'Functional Diagnostics & Jaw Kinesiography',
    type: {
      bg: 'Компютърна диагностика на захапката и ставите (ТМС)',
      en: 'Computerized Occlusal & Jaw Joint Kinesiography',
      pt: 'Diagnóstico Computorizado da Oclusão e Cinesiografia Mandibular'
    },
    tagline: {
      bg: 'Прецизен динамичен баланс между зъби, мускули и стави',
      en: 'Dynamic biomechanical balance between teeth, muscles, and TMJ',
      pt: 'Equilíbrio dinâmico rigoroso entre dentes, músculos e articulações (ATM)'
    },
    description: {
      bg: 'Чрез специализирани сензори и дигитален анализ на оклузията измерваме силата и времето на контакт на всеки отделен зъб с точност до стотни от секундата. Това позволява разкриване на преждевременни контакти, които причиняват изтриване, фрактури и болки в ставите.',
      en: 'Utilizing digital occlusal sensors and mandibular jaw tracking, we measure the force distribution and timing sequence of every individual tooth contact to within hundredths of a second. This identifies harmful premature interferences before crowns break or joints degenerate.',
      pt: 'Através de sensores oclusais de alta resolução e registo digital da mastigação, quantificamos a força e o tempo de contacto de cada dente com precisão de centésimos de segundo. Isto permite neutralizar interferências prematuras antes que provoquem fraturas ou sobrecarga articular.'
    },
    clinicalAdvantage: {
      bg: [
        'Премахва претоварването върху отделни зъби и импланти',
        'Диагностицира първопричината за скърцане (бруксизъм)',
        'Осигурява стабилност на цялостни протетични конструкции',
        'Подобрява симетрията на лицето и облекчава шийния тонус'
      ],
      en: [
        'Eliminates traumatic load concentrations on natural teeth and implants',
        'Pinpoints the underlying mechanical trigger of clenching and bruxism',
        'Guarantees long-term survival of veneers, crowns, and bridges',
        'Harmonizes neuromuscular posture and cervical tension'
      ],
      pt: [
        'Elimina concentrações de carga traumática sobre dentes naturais e implantes',
        'Diagnostica a causa biomecânica subjacente ao bruxismo e apertamento',
        'Assegura a estabilidade e sobrevivência a longo prazo de reabilitações protéticas',
        'Harmoniza a postura neuromuscular e reduz tensões na coluna cervical'
      ]
    },
    specs: {
      bg: ['Сензори: Мулти-пикселни ултратънки мембрани', 'Честота: 100 Hz динамичен запис', 'Анализ: 3D визуализация на силите'],
      en: ['Sensors: Multi-pixel pressure-sensitive foils', 'Frequency: 100 Hz dynamic sampling', 'Output: 3D vector force distribution'],
      pt: ['Sensores: Membranas oclusais multipíxel ultrafinas', 'Frequência: Amostragem dinâmica a 100 Hz', 'Análise: Mapeamento vetorial tridimensional de forças']
    }
  }
];

export const PATIENT_JOURNEY_STEPS = [
  {
    step: '01',
    title: {
      bg: 'Комплексна 3D и функционална диагностика',
      en: 'Comprehensive 3D & Functional Assessment',
      pt: 'Diagnóstico 3D e Funcional Completo'
    },
    short: {
      bg: 'Дигитална карта на оралното здраве',
      en: 'Digital blueprint of your oral health',
      pt: 'Mapeamento digital da saúde oral'
    },
    desc: {
      bg: 'Първото посещение включва нискодозова 3D томография (CBCT), дигитално цветно интраорално сканиране, беземисионна трансилюминация с Diagnocam и фотопротокол. Ние не оценяваме само отделни зъби, а цялата дъвкателна система.',
      en: 'Your initial consultation comprises low-dose 3D volumetric CBCT imaging, high-precision intraoral scanning, zero-radiation Diagnocam transillumination, and a full clinical photographic series to capture complete masticatory health.',
      pt: 'A consulta inicial engloba tomografia volumétrica 3D de dose ultrabaixa (CBCT), escaneamento intraoral a cores de alta resolução, transiluminação Diagnocam sem radiação e protocolo fotográfico clínico completo para analisar a globalidade do sistema mastigatório.'
    },
    deliverables: {
      bg: ['3D модел на челюстите', 'Пародонтален статус', 'Оклузален анализ', 'Скрининг за ранен кариес'],
      en: ['3D jaw reconstructions', 'Periodontal chart', 'Occlusal force map', 'Early caries screening'],
      pt: ['Reconstrução 3D dos maxilares', 'Status periodontal detalhado', 'Mapeamento de forças oclusais', 'Rastreio precoce de cáries ocultas']
    }
  },
  {
    step: '02',
    title: {
      bg: 'Индивидуален интердисциплинарен план',
      en: 'Interdisciplinary Digital Treatment Planning',
      pt: 'Plano Interdisciplinar Digital Personalizado'
    },
    short: {
      bg: 'Персонализирана стратегия и прозрачност',
      en: 'Personalized strategy and full clarity',
      pt: 'Estratégia personalizada e transparência total'
    },
    desc: {
      bg: 'На базата на събраните диагностични данни се изготвя детайлен клиничен план с виртуална симулация на резултата. Пациентът получава пълна яснота относно последователността, времетраенето и очаквания биологичен ефект на всяка фаза.',
      en: 'Synthesizing all digital diagnostic records, we engineer a tailored treatment pathway with virtual outcome simulations. You receive absolute clarity on sequence, clinical rationale, timeframes, and long-term biological prognoses.',
      pt: 'Com base no conjunto de dados recolhidos, estruturamos um plano terapêutico individualizado com simulação virtual do resultado final. O paciente obtém clareza absoluta sobre as etapas, durações estimadas e o prognóstico biológico de cada fase.'
    },
    deliverables: {
      bg: ['Виртуален модел на усмивката', 'Етапна програма на лечението', 'Пълна информираност', 'Избор на биосъвместими материали'],
      en: ['Virtual smile simulation', 'Staged treatment roadmap', 'Comprehensive consent clarity', 'Biocompatible material selection'],
      pt: ['Simulação virtual do sorriso', 'Cronograma faseado de tratamento', 'Esclarecimento clínico transparente', 'Seleção de materiais biocompatíveis']
    }
  },
  {
    step: '03',
    title: {
      bg: 'Микро-инвазивна лазерна терапия',
      en: 'Micro-Invasive Laser-Assisted Treatment',
      pt: 'Tratamento a Laser Microinvasivo'
    },
    short: {
      bg: 'Щадящо лечение с максимално съхранение',
      en: 'Gentle, tooth-preserving clinical execution',
      pt: 'Cuidados suaves com preservação máxima'
    },
    desc: {
      bg: 'Всички процедури се провеждат под микроскопско увеличение и с помощта на WATERLASE лазер. Избягва се ненужното отнемане на здрава тъкан, а фотобиомодулацията намалява постоперативния стрес на организма до минимум.',
      en: 'Therapeutic interventions are performed under high optical magnification using WATERLASE precision. Healthy tooth structure is strictly conserved, while intraoperative photobiomodulation expedites cellular regeneration.',
      pt: 'Todos os procedimentos clínicos decorrem sob magnificação óptica e com tecnologia WATERLASE. Evita-se o desgaste desnecessário de tecido dentário saudável, enquanto a fotobiomodulação minimiza o stress tecidular pós-operatório.'
    },
    deliverables: {
      bg: ['Безвибрационна работа', 'Лазерна деконтаминация', 'Атравматични манипулации', 'Комфорт без стрес'],
      en: ['Vibration-free preparation', 'Laser sterilization', 'Atraumatic procedures', 'Stress-free clinical experience'],
      pt: ['Preparação sem vibrações mecânicas', 'Desinfeção fotónica profunda', 'Intervenções cirúrgicas atraumáticas', 'Experiência clínica serena']
    }
  },
  {
    step: '04',
    title: {
      bg: 'Дългосрочна профилактична поддръжка',
      en: 'Structured Preventive Recall & Maintenance',
      pt: 'Manutenção Preventiva e Controlo Periódico'
    },
    short: {
      bg: 'Гаранция за дълготрайно орално здраве',
      en: 'Safeguarding your long-term oral stability',
      pt: 'Garantia de estabilidade biológica a longo prazo'
    },
    desc: {
      bg: 'Здравето на зъбите и венците изисква периодичен мониторинг. Индивидуалната програма за поддръжка включва лазерно почистване на плака, контролни дигитални сканирания и навременна превенция на всеки 6 месеца.',
      en: 'Sustainable oral vitality demands structured periodic maintenance. Personalized recall intervals combine laser pocket decontamination, interval 3D scan comparisons, and preventative tissue stabilization every 6 months.',
      pt: 'A vitalidade dos dentes e gengivas requer acompanhamento periódico estruturado. O programa de manutenção individual combina desinfeção de bolsas a laser, escaneamentos digitais de controlo e prevenção ativa a cada 6 meses.'
    },
    deliverables: {
      bg: ['Индивидуален график за прегледи', 'Лазерна хигиенизация', 'Мониторинг на рехабилитациите', 'Спокойствие за цял живот'],
      en: ['Personalized recall schedule', 'Laser maintenance hygiene', 'Prosthetic & implant surveillance', 'Lifelong peace of mind'],
      pt: ['Calendário de consultas individualizado', 'Higienização e profilaxia a laser', 'Monitorização de implantes e próteses', 'Tranquilidade duradoura']
    }
  }
];

export const MAINTENANCE_PROGRAMS: MaintenanceProgram[] = [
  {
    id: 'perio-care',
    title: {
      bg: 'Пародонтална профилактична програма',
      en: 'Periodontal Health Preservation Protocol',
      pt: 'Protocolo de Preservação Periodontal'
    },
    targetGroup: {
      bg: 'Пациенти с прекаран или овладян пародонтит и предразположеност към гингивит',
      en: 'Patients with treated periodontitis or genetic predisposition to gingivitis',
      pt: 'Pacientes com histórico de periodontite tratada ou predisposição a gengivite'
    },
    frequency: {
      bg: 'На всеки 3 до 4 месеца',
      en: 'Every 3 to 4 months',
      pt: 'A cada 3 a 4 meses'
    },
    description: {
      bg: 'Специализиран поддържащ протокол за контрол на патогенния субгингивален биофилм. Лазерната антимикробна деконтаминация предотвратява рецидива на възпалителния процес и предпазва алвеоларната кост от загуба.',
      en: 'Specialized supportive maintenance protocol controlling pathogenic subgingival biofilm. Laser-assisted antimicrobial decontamination halts inflammatory relapses and protects alveolar bone levels.',
      pt: 'Protocolo especializado de suporte para controlo do biofilme patogénico subgengival. A descontaminação antimicrobiana a laser previne recidivas inflamatórias e protege o nível ósseo alveolar de reabsorções.'
    },
    procedures: {
      bg: [
        'Ултразвуково и ръчно субгингивално почистване с деликатни карбонови кюрети',
        'Лазерна деконтаминация на пародонталните джобове',
        'Прецизно полиране с микродисперсни глицинови прахове',
        'Локална реминерализираща и защитна терапия'
      ],
      en: [
        'Ultrasonic and fine hand debridement with gentle carbon-fiber curettes',
        'Laser decontamination of residual periodontal crevices',
        'Subgingival polishing with low-abrasive glycine air-polishing',
        'Targeted remineralization and tissue-strengthening application'
      ],
      pt: [
        'Desbridamento ultrassónico e manual com curetas de carbono de alta precisão',
        'Descontaminação a laser de sulcos e bolsas periodontais residuais',
        'Polimento subgengival delicado com jato de pós de glicina microdispersa',
        'Aplicação de terapia remineralizante e protetora dos tecidos'
      ]
    },
    clinicalAim: {
      bg: 'Запазване на естествените зъби и стабилност на венците за десетилетия напред.',
      en: 'Lifelong retention of natural dentition with firm, healthy periodontal attachments.',
      pt: 'Preservação dos dentes naturais e sustentabilidade das inserções gengivais por décadas.'
    }
  },
  {
    id: 'implant-care',
    title: {
      bg: 'Имплантологична грижа и мониторинг',
      en: 'Dental Implant Maintenance & Longevity Care',
      pt: 'Manutenção e Monitorização de Implantes Dentários'
    },
    targetGroup: {
      bg: 'Пациенти с единични или множествени зъбни импланти',
      en: 'Patients with single or multiple dental implants',
      pt: 'Pacientes com implantes dentários unitários, múltiplos ou reabilitações totais'
    },
    frequency: {
      bg: 'На всеки 6 месеца',
      en: 'Every 6 months',
      pt: 'A cada 6 meses'
    },
    description: {
      bg: 'Имплантите изискват специализирана поддръжка, различна от тази при естествените зъби. Протоколът елиминира риска от периимплантит (възпаление около импланта) без надраскване на титаниевата или циркониева повърхност.',
      en: 'Implant-supported reconstructions require specialized maintenance distinct from natural teeth. This protocol mitigates peri-implantitis risk without abrading sensitive titanium or zirconia collar surfaces.',
      pt: 'Os implantes dentários necessitam de manutenção preventiva diferenciada dos dentes naturais. Este protocolo previne o risco de peri-implantite sem danificar ou arranhar a superfície de titânio ou zircónia.'
    },
    procedures: {
      bg: [
        'Контролна дигитална проверка на стабилността и оклузията',
        'Почистване със специални пластмасови и карбонови накрайници',
        'Лазерна фототерапия за поддържане на здрава съединителнотъканна връзка',
        'Периодична рентгенологична оценка на маргиналната кост'
      ],
      en: [
        'Digital occlusal calibration and prosthetic torque surveillance',
        'Debridement with non-scratching polymer and carbon instruments',
        'Laser phototherapy maintaining robust peri-implant mucosal seals',
        'Low-dose radiographic verification of crestal bone stability'
      ],
      pt: [
        'Verificação oclusal digital e controlo do torque das próteses',
        'Limpeza profilática com pontas específicas de carbono e polímeros não abrasivos',
        'Fototerapia a laser para manter o selamento mucoso peri-implantar saudável',
        'Avaliação radiográfica periódica de dose reduzida do osso marginal'
      ]
    },
    clinicalAim: {
      bg: 'Пълна защита на инвестицията в импланти и предотвратяване на загуба на кост.',
      en: 'Complete preservation of implant investments and total prevention of peri-implant bone loss.',
      pt: 'Proteção integral do investimento em implantes e prevenção de perda óssea peri-implantar.'
    }
  },
  {
    id: 'ortho-retention',
    title: {
      bg: 'Ортодонтска ретенция и стабилизация',
      en: 'Orthodontic Retention & Alignment Stability',
      pt: 'Retenção Ortodôntica e Estabilização Oclusal'
    },
    targetGroup: {
      bg: 'Пациенти след завършено лечение с алайнери или брекети',
      en: 'Patients following completion of aligner or bracket treatment',
      pt: 'Pacientes após conclusão de tratamento com alinhadores ou aparelhos fixos'
    },
    frequency: {
      bg: 'На 1, 3, 6 и 12 месеца след завършване',
      en: 'At 1, 3, 6, and 12 months post-treatment',
      pt: 'Aos 1, 3, 6 e 12 meses após conclusão'
    },
    description: {
      bg: 'Костта и периодонталните влакна имат памет и естествена склонност към рецидив. Програмата осигурява безупречна интеграция на ретенционните апарати и контролира фината биомеханика на новата захапка.',
      en: 'Bone and periodontal ligament fibers retain cellular memory and a natural tendency to relapse. This protocol verifies retention appliance integrity and monitors dynamic chewing forces.',
      pt: 'O osso alveolar e as fibras do ligamento periodontal possuem memória celular e tendência natural à recidiva. O protocolo assegura a integridade dos aparelhos de contenção e monitoriza as forças dinâmicas da nova oclusão.'
    },
    procedures: {
      bg: [
        '3D контролно сканиране за засичане на нежелани микродвижения',
        'Проверка и почистване на фиксираните лингвални ретайнери',
        'Оклузален T-Scan тест за балансиран контакт на зъбите',
        'Корекция или подмяна на нощни ретенционни шини при необходимост'
      ],
      en: [
        'Comparative 3D intraoral scans detecting sub-millimetre micromovements',
        'Inspection and ultrasonic cleaning around bonded lingual retainers',
        'Occlusal dynamic testing ensuring balanced jaw contacts',
        'Recalibration or fabrication of fresh nocturnal retention appliances'
      ],
      pt: [
        'Escaneamento 3D comparativo para deteção precoce de micromovimentações indesejadas',
        'Inspeção e higienização dos retentores linguais fixos colados',
        'Teste oclusal T-Scan para conferir contactos mastigatórios perfeitamente distribuídos',
        'Ajuste ou substituição de goteiras noturnas de contenção conforme necessário'
      ]
    },
    clinicalAim: {
      bg: 'Подпомагане на дългосрочната стабилност на подредените зъби и оклузалния баланс.',
      en: 'Support for sustained long-term alignment stability and balanced masticatory forces.',
      pt: 'Apoio à estabilidade a longo prazo do alinhamento dentário e equilíbrio oclusal.'
    }
  },
  {
    id: 'paediatric-prevention',
    title: {
      bg: 'Детска превантивна програма „Здрава усмивка“',
      en: 'Paediatric Preventative "Healthy Smile" Protocol',
      pt: 'Programa Preventivo Infantil «Sorriso Saudável»'
    },
    targetGroup: {
      bg: 'Деца от 3 до 16 години',
      en: 'Children and adolescents aged 3 to 16',
      pt: 'Crianças e jovens dos 3 aos 16 anos'
    },
    frequency: {
      bg: 'На всеки 4 до 6 месеца',
      en: 'Every 4 to 6 months',
      pt: 'A cada 4 a 6 meses'
    },
    description: {
      bg: 'Превантивна грижа за здрави постоянни зъби в спокойна и подкрепяща среда. Ранна диагностика с безвредна светлина (Diagnocam), лазерна дезинфекция и запечатване на фисурите за висока устойчивост срещу кариес.',
      en: 'Fostering long-term healthy dentition in a positive, reassuring setting. Early diagnosis via zero-radiation Diagnocam transillumination and laser-assisted fissure sealing.',
      pt: 'Cuidados preventivos para garantir dentes permanentes fortes e saudáveis num ambiente acolhedor. Diagnóstico precoce com transiluminação sem radiação (Diagnocam) e selamento de fissuras assistido por laser.'
    },
    procedures: {
      bg: [
        'Неинвазивен Diagnocam преглед без йонизиращо лъчение',
        'Атравматично почистване на плака с деликатни полирни пасти',
        'Лазерна дезинфекция и запечатване на дълбоки фисури (силанизиране)',
        'Индивидуално обучение на детето и родителите за правилно четкане'
      ],
      en: [
        'Non-invasive Diagnocam transillumination with zero ionizing radiation',
        'Atraumatic biofilm removal with gentle child-friendly polishing pastes',
        'Laser decontamination and deep fissure sealing of newly erupted molars',
        'Hands-on interactive brushing education for children and parents'
      ],
      pt: [
        'Exame não invasivo com Diagnocam sem recurso a radiação ionizante',
        'Remoção atraumática de placa bacteriana com pastas de polimento suaves infantis',
        'Desinfeção a laser e selamento de fissuras profundas em molares recém-erupcionados',
        'Instrução pedagógica interativa sobre técnicas corretas de escovagem para crianças e pais'
      ]
    },
    clinicalAim: {
      bg: 'Превенция на кариеса и изграждане на позитивно отношение към денталното здраве.',
      en: 'Cavity-free development and an empowering relationship with oral wellness.',
      pt: 'Prevenção ativa da cárie e desenvolvimento de uma relação positiva e segura com a saúde oral.'
    }
  }
];

export const SCIENTIFIC_ARTICLES: Article[] = [
  {
    id: 'waterlase-hydrokinetic-ablation',
    title: {
      bg: 'Механизъм на хидрокинетичната лазерна аблация (Waterlase) при твърди и меки зъбни тъкани',
      en: 'The Biophysical Mechanism of Hydrokinetic Laser Ablation (Waterlase) in Hard and Soft Dental Tissues',
      pt: 'Mecanismo Biofísico da Ablação a Laser Hidrocinética (Waterlase) em Tecidos Dentários Duros e Moles'
    },
    category: {
      bg: 'Лазерна биофизика',
      en: 'Laser Biophysics',
      pt: 'Biofísica Laser'
    },
    readTime: '6 мин / min read',
    date: 'Ноември 2026',
    summary: {
      bg: 'Научен обзор върху термомеханичните свойства на Er,Cr:YSGG лазерите (2780 nm) при селективно отстраняване на кариозна тъкан без микропукнатини в емайла.',
      en: 'A scientific analysis of thermomechanical dynamics in Er,Cr:YSGG laser ablation (2780 nm) for selective caries removal without enamel rod fracturing.',
      pt: 'Revisão científica detalhada sobre a dinâmica termomecânica na ablação com laser Er,Cr:YSGG (2780 nm) para remoção seletiva de cárie sem fratura dos prismas de esmalte.'
    },
    content: {
      bg: [
        'Хидрокинетичната аблация се основава на изключително високото поглъщане на дължината на вълната от 2780 nm от водните молекули и хидроксиапатита. Когато лазерният импулс се насочи през фината водна струя, той възбужда водните капки, предизвиквайки микро-експлозивно изпарение на кариозната структура.',
        'За разлика от конвенционалните високооборотни турбини, които създават локални температури над 200°C и вибрационни микропукнатини по ръбовете на кавитета, хидрокинетичният процес поддържа температурата на дентина под критичния праг от 5°C повишение. Това значително ограничава риска от термичен пулпит и съхранява зъбния пулп.',
        'Клиничните сканиращи електронно-микроскопски (SEM) изследвания доказват, че обработеният с Waterlase дентин притежава отворени дентинови тубули без остатъчен размазан слой (smear layer), което увеличава якостта на адхезивната връзка с до 40% спрямо механичното изпиляване.'
      ],
      en: [
        'Hydrokinetic ablation relies on the pronounced absorption peak of the 2780 nm Er,Cr:YSGG laser wavelength by water molecules and hydroxyapatite matrices. Energized water droplets undergo explosive vaporization, dislodging tissue with pinpoint microscopic precision.',
        'In contrast to conventional rotary turbine handpieces, which generate frictional temperatures exceeding 200°C and propagate micro-cracks throughout enamel prisms, hydrokinetic interactions maintain dentinal temperature well below the critical 5°C threshold, preserving pulpal vitality.',
        'Scanning electron microscopy (SEM) evaluations corroborate that laser-conditioned dentin exhibits wide-open dentinal tubules devoid of an amorphous smear layer, enhancing resin adhesive micro-mechanical bonding by up to 40% over standard burs.'
      ],
      pt: [
        'A ablação hidrocinética baseia-se no pico pronunciado de absorção do comprimento de onda de 2780 nm do laser Er,Cr:YSGG pelas moléculas de água e matrizes de hidroxiapatite. As gotículas de água energizadas sofrem vaporização microexplosiva, removendo o tecido com rigor microscópico.',
        'Ao contrário das turbinas rotatórias mecânicas convencionais, que geram temperaturas friccionais superiores a 200°C e propagam microfissuras ao longo do esmalte, a interação hidrocinética mantém a temperatura da dentina muito abaixo do limiar crítico de 5°C de elevação, salvaguardando a vitalidade pulpar.',
        'Avaliações por microscopia eletrónica de varrimento (MEV) comprovam que a dentina tratada com Waterlase apresenta túbulos dentinários abertos e desobstruídos, sem camada residual amorfa de esfregaço (smear layer), aumentando a força de adesão micromecânica das resinas em até 40% em relação às brocas convencionais.'
      ]
    },
    scientificReferences: [
      'Hadley J, et al. Laser-Assisted Dentistry: Hard Tissue Applications. J Clin Laser Med Surg. 2021.',
      'Rizoiu I, et al. The effect of Er,Cr:YSGG laser on human dentin and enamel morphology. Lasers Surg Med.',
      'Sasaki KM, et al. Scanning electron microscopic study of laser-ablated enamel margins. J Dent Res.'
    ]
  },
  {
    id: 'cbct-precision-implantology',
    title: {
      bg: '3D CBCT томография при комплексни ендодонтски състояния и навигирана хирургия',
      en: '3D CBCT Volumetric Diagnostics in Complex Endodontics and Guided Implantology',
      pt: 'Diagnóstico Volumétrico 3D por CBCT em Endodontia Complexa e Cirurgia de Implantes Guiada'
    },
    category: {
      bg: 'Образна диагностика',
      en: 'Diagnostic Imaging',
      pt: 'Imagiologia de Diagnóstico'
    },
    readTime: '7 мин / min read',
    date: 'Октомври 2026',
    summary: {
      bg: 'Ролята на субмилиметровата конично-лъчева томография за откриване на скрити анатомични структури, MB2 канали и изработка на хирургични шаблони.',
      en: 'The diagnostic role of sub-millimetre CBCT for unmasking MB2 canals, vertical root fractures, and producing computer-guided surgical templates.',
      pt: 'O papel do CBCT submilimétrico na identificação de canais anatómicos acessórios (MB2), fraturas radiculares e fabrico de guias cirúrgicos computorizados.'
    },
    content: {
      bg: [
        'Двуизмерните панорамни и сегментни рентгенографии страдат от геометрични проекционни изкривявания и припокриване на анатомични структури. Конично-лъчевата томография (CBCT) осигурява триизмерна вокселна резолюция до 75 µm без деформация.',
        'В ендодонтията CBCT разкрива четвъртия (MB2) канал в горните кътници в над 93% от случаите, където конвенционалната снимка го пропуска. Това драматично повишава успеваемостта на лечението на зъби с периапикални възпаления.',
        'В хирургията и имплантологията комбинирането на CBCT данните с оптичен интраорален отпечатък (DICOM + STL сливане) позволява виртуално моделиране на имплантирането с хирургичен водач, свеждайки ъгловото отклонение до под 1.2 градуса.'
      ],
      en: [
        'Two-dimensional panoramic radiographs are inherently limited by geometric distortion and structural anatomical superimposition. Modern high-resolution CBCT delivers true 1:1 isometric voxel imaging down to 75 µm without magnitudinal artifacts.',
        'In microscopic endodontics, volumetric CBCT exposes missed second mesiobuccal (MB2) canals in over 93% of maxillary molars—substantially reducing persistent post-treatment periapical pathologies.',
        'In oral implantology, co-registering CBCT DICOM datasets with intraoral optical STL surface scans facilitates precision-guided surgical stent manufacturing, limiting angular insertion deviation to under 1.2 degrees.'
      ],
      pt: [
        'As radiografias bidimensionais panorâmicas e periapicais sofrem invariavelmente de distorção geométrica e sobreposição de estruturas anatómicas. O CBCT moderno de alta resolução proporciona imagens volumétricas isométricas reais à escala 1:1 com vóxeis de até 75 µm sem artefactos de ampliação.',
        'Na endodontia microscópica, o CBCT volumétrico revela o canal mésio-vestibular secundário (MB2) em mais de 93% dos molares superiores, reduzindo drasticamente patologias periapicais persistentes que passam despercebidas na radiografia convencional.',
        'Na implantologia oral, o alinhamento de ficheiros DICOM do CBCT com escaneamentos ópticos intraorais em formato STL permite planear a cirurgia virtualmente e produzir guias impressos em 3D, limitando o desvio angular de inserção a menos de 1,2 graus.'
      ]
    },
    scientificReferences: [
      'Patel S, et al. European Society of Endodontology position statement on CBCT in Endodontics. Int Endod J.',
      'Tahmaseb A, et al. Computer-guided implant surgery: Accuracy and clinical outcomes. Clin Oral Implants Res.',
      'Scarfe WC, et al. Maxillofacial Cone Beam Computed Tomography: Principles, Techniques and Clinical Applications.'
    ]
  },
  {
    id: 'photobiomodulation-cellular-atp',
    title: {
      bg: 'Фотобиомодулация: Клетъчна стимулация на АТФ и ускорено постоперативно възстановяване',
      en: 'Photobiomodulation: Mitochondrial ATP Upregulation and Post-Surgical Tissue Acceleration',
      pt: 'Fotobiomodulação: Estimulação Mitocondrial de ATP e Recuperação Acelerada dos Tecidos Pós-Cirúrgicos'
    },
    category: {
      bg: 'Клетъчна биология',
      en: 'Cellular Biology',
      pt: 'Biologia Celular'
    },
    readTime: '5 мин / min read',
    date: 'Септември 2026',
    summary: {
      bg: 'Биохимичен механизъм на нискоинтензивната лазерна светлина върху цитохром c-оксидазата за потискане на острите възпаления и болка.',
      en: 'Biochemical pathways of near-infrared photons activating cytochrome c oxidase to mitigate acute inflammatory cascades and pain.',
      pt: 'Vias bioquímicas da luz no infravermelho próximo e vermelho ativando o citocromo c oxidase para mitigar cascatas inflamatórias agudas e a dor.'
    },
    content: {
      bg: [
        'Фотобиомодулацията (PBM), известна в миналото като нискоинтензивна лазерна терапия (LLLT), действа чрез нетермичен фотохимичен механизъм. Фотоните в спектъра между 660 nm и 980 nm се абсорбират от фоторецептора цитохром c-оксидаза в дихателната верига на митохондриите.',
        'Това води до незабавно разпадане на инхибиращия комплекс с азотен оксид, рязко повишаване на мембранния потенциал и ускорено синтезиране на аденозинтрифосфат (АТФ). Клетките получават енергиен ресурс за бързо делене и синтез на нов колаген.',
        'Клиничните проучвания показват намаление на постоперативния едем с 45% и понижение на оценката по визуално-аналоговата скала за болка (VAS) с над 60% още в първите 24 часа след екстракция или имплантиране.'
      ],
      en: [
        'Photobiomodulation (PBM) functions via athermal photochemical mechanics. Photons within the 660–980 nm optical window are absorbed by mitochondrial cytochrome c oxidase during cellular respiration.',
        'This reaction displaces inhibitory nitric oxide, hyperpolarizing the mitochondrial membrane and driving rapid adenosine triphosphate (ATP) synthesis, supplying surrounding fibroblasts with energetic substrates for extracellular matrix production.',
        'Controlled clinical trials demonstrate a 45% reduction in postoperative edema and over 60% drop in Visual Analogue Scale (VAS) pain indices within the initial 24 hours following surgical interventions.'
      ],
      pt: [
        'A fotobiomodulação (PBM), anteriormente denominada terapia laser de baixa intensidade (LLLT), atua através de mecanismos fotoquímicos atérmicos. Os fotões na janela óptica entre 660 nm e 980 nm são captados pela enzima fotorrecetora citocromo c oxidase na cadeia respiratória mitocondrial.',
        'Esta interação dissocia o óxido nítrico inibitório, hiperpolariza a membrana mitocondrial e estimula uma síntese rápida de trifosfato de adenosina (ATP), fornecendo aos fibroblastos energia vital para a proliferação celular e secreção de colagénio.',
        'Ensaios clínicos controlados evidenciam uma redução de 45% no edema pós-operatório e um decréscimo superior a 60% na escala visual analógica de dor (EVA) logo nas primeiras 24 horas após cirurgias de extração ou colocação de implantes.'
      ]
    },
    scientificReferences: [
      'Hamblin MR. Mechanisms and applications of the anti-inflammatory effects of photobiomodulation. AIMS Biophys.',
      'de Freitas LF, et al. Proposed Mechanisms of Photobiomodulation or Low-Level Light Therapy. IEEE J Sel Top Quantum Electron.',
      'Carroll PR, et al. Clinical application of photobiomodulation in modern oral and maxillofacial therapy.'
    ]
  },
  {
    id: 'functional-gnathology-tmj',
    title: {
      bg: 'Функционална гнатология и стабилност на ТМС: Взаимовръзка между оклузия и постура',
      en: 'Functional Gnathology and TMJ Stability: The Interplay Between Dental Occlusion and Posture',
      pt: 'Gnatologia Funcional e Estabilidade da ATM: A Inter-relação Entre Oclusão Dentária e Postura'
    },
    category: {
      bg: 'Гнатология и биомеханика',
      en: 'Gnathology & Biomechanics',
      pt: 'Gnatologia e Biomecânica'
    },
    readTime: '8 мин / min read',
    date: 'Август 2026',
    summary: {
      bg: 'Влиянието на преждевременните зъбни контакти върху позицията на кондила в ставната ямка и мускулния тонус на шията и главата.',
      en: 'The impact of premature occlusal interferences on condylar displacement, masticatory hypertonicity, and cervical posture.',
      pt: 'O impacto das interferências oclusais prematuras no deslocamento condilar, na hipertonia mastigatória e na tensão muscular cervico-craniana.'
    },
    content: {
      bg: [
        'Зъбната оклузия определя крайната позиция на долната челюст. Когато има отклонение между максималното зъбно зацепване (интеркуспидация) и централната релация в ставата, дъвкателните мускули са принудени да поддържат постоянен компенсаторен спазъм.',
        'Този хроничен мускулен спазъм е водеща причина за т.нар. тензионно главоболие, болки в шията, щракане в темпоромандибуларната става и патологично изтриване на емайла при бруксизъм.',
        'Дигиталната оклузална диагностика с T-Scan и ставна кинезиография позволява откриване на силовия дисбаланс с точност до 0.01 секунди, което осигурява стабилна основа за всяка протетична или ортодонтска корекция.'
      ],
      en: [
        'Dental occlusion governs spatial mandibular seating. When discrepancy occurs between maximum intercuspation and centric condylar relation, masticatory musculature remains locked in sustained compensatory spasticity.',
        'This continuous hypertonicity is the predominant instigator of tension migraines, cervical pain, TMJ disk clicking, and nocturnal teeth clenching (bruxism).',
        'Digital occlusal analysis utilizing synchronized T-Scan pressure profiling uncovers millisecond contact imbalances, establishing an aligned foundation for all prosthetic rehabilitations.'
      ],
      pt: [
        'A oclusão dentária dita o posicionamento espacial final da mandíbula. Quando existe discrepância entre a intercuspidação máxima dos dentes e a relação cêntrica dos côndilos na cavidade articular, os músculos mastigatórios entram num estado contínuo de espasmo compensatório.',
        'Esta hipertonia muscular crónica é a causa primordial de cefaleias de tensão recorrentes, dores na coluna cervical, estalidos discais na ATM e desgaste severo por bruxismo noturno.',
        'A análise oclusal digital computorizada com T-Scan e a cinesiografia articular permitem identificar desequilíbrios de contacto com resolução temporal de centésimos de segundo, estabelecendo uma base biomecânica estável para reabilitações protéticas e ortodônticas.'
      ]
    },
    scientificReferences: [
      'Dawson PE. Functional Occlusion: From TMJ to Smile Design. Mosby Elsevier.',
      'Kerstein RB. Handbook of Research on Computerized Occlusal Analysis Technology Applications in Dental Medicine.',
      'Okeson JP. Management of Temporomandibular Disorders and Occlusion. Elsevier Health Sciences.'
    ]
  },
  {
    id: 'minimally-invasive-periodontology',
    title: {
      bg: 'Микро-инвазивна лазерна терапия при хроничен пародонтит и периимплантит',
      en: 'Minimally Invasive Laser Decontamination in Chronic Periodontitis and Peri-Implantitis',
      pt: 'Terapia a Laser Minimamente Invasiva na Periodontite Crónica e Peri-implantite'
    },
    category: {
      bg: 'Клинична пародонтология',
      en: 'Clinical Periodontology',
      pt: 'Periodontologia Clínica'
    },
    readTime: '6 мин / min read',
    date: 'Юли 2026',
    summary: {
      bg: 'Сравнителен анализ на лазерната деконтаминация спрямо механичното остъргване на кореновата повърхност при дълбоки костни джобове.',
      en: 'Comparative analysis of laser photo-acoustic pocket decontamination versus conventional mechanical root planing.',
      pt: 'Análise comparativa da descontaminação fotoacústica de bolsas periodontais versus curetagem e alisamento radicular mecânico convencional.'
    },
    content: {
      bg: [
        'Хроничният пародонтит се предизвиква от сложен анаеробен биофилм (Porphyromonas gingivalis, Treponema denticola), който се колонизира в микронеравностите на кореновия цимент и дълбоките костни джобове.',
        'Механичното остъргване с метални кюрети води до нежелано отнемане на здрав коренов цимент и оставя микроорганизми в дънните зони. Лазерният лъч на WATERLASE селективно разрушава гранулационната тъкан и унищожава бактериите чрез фотоакустична кавитация без хирургичен срез.',
        'Дългосрочните клинични параметри показват намаляване на дълбочината на джобовете с 3.5 до 5 mm и стабилно формиране на ново съединителнотъканно прикрепване (LAPT протокол).'
      ],
      en: [
        'Chronic periodontitis is triggered by virulent anaerobic biofilm taxa colonizing root cementum micro-irregularities and deep infra-bony pockets.',
        'Conventional mechanical instrumentation frequently leads to unnecessary cementum loss while failing to eradicate deep tubule colonization. WATERLASE photo-acoustic cavitation dissolves diseased granulation tissue and sterilizes root surfaces without scalpel flap reflection.',
        'Longitudinal clinical metrics document probing depth reductions of 3.5 to 5.0 mm and de novo clinical attachment gains according to laser-assisted periodontal protocols (LAPT).'
      ],
      pt: [
        'A periodontite crónica é desencadeada por um biofilme anaeróbio virulento (Porphyromonas gingivalis, Treponema denticola) que coloniza as microirregularidades do cemento radicular e as bolsas intraósseas profundas.',
        'A instrumentação mecânica convencional com curetas metálicas conduz amiúde à remoção excessiva de cemento saudável e não consegue erradicar as bactérias nas ramificações mais profundas. O feixe hidrocinético WATERLASE dissolve o tecido de granulação doente e esteriliza as bolsas por cavitação fotoacústica sem necessidade de retalho cirúrgico com bisturi.',
        'Parâmetros clínicos longitudinais documentam reduções na profundidade de sondagem de 3,5 a 5,0 mm e ganho duradouro de nova inserção conjuntiva através do protocolo periodontal assistido por laser (LAPT).'
      ]
    },
    scientificReferences: [
      'Yukna RA, et al. Histologic Evaluation of an Er,Cr:YSGG Laser-Assisted New Attachment Procedure in Humans. Int J Periodontics Restorative Dent.',
      'Cobb CM. Lasers in Periodontics: A review of the literature. J Periodontol.',
      'Schwarz F, et al. Laser application in the treatment of peri-implantitis: A systematic review.'
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'operatory-laser',
    title: {
      bg: 'Премиум лазерен кабинет с Waterlase',
      en: 'Premium Operatory with Waterlase Laser Suite',
      pt: 'Gabinete Clínico Premium com Laser Waterlase'
    },
    category: 'operatory',
    categoryLabel: {
      bg: 'Клиничен кабинет',
      en: 'Clinical Operatory',
      pt: 'Gabinete Clínico'
    },
    description: {
      bg: 'Стерилна, спокойна работна среда с ергономичен стол и естествена светлина за максимален пациентски комфорт.',
      en: 'Sterile, tranquil clinical setting with ergonomic patient seating and abundant daylight.',
      pt: 'Ambiente operatório sereno e estéril com cadeira ergonómica de última geração e luz natural para conforto integral do paciente.'
    },
    imageUrl: '/images/hero_clinic_interior.webp',
    isIllustrative: true
  },
  {
    id: 'waterlase-detail',
    title: {
      bg: 'Прецизна лазерна конзола за микро-хирургия',
      en: 'Micro-Surgical Laser Console',
      pt: 'Consola de Laser Cirúrgico de Alta Precisão'
    },
    category: 'technology',
    categoryLabel: {
      bg: 'Технологии',
      en: 'Technology',
      pt: 'Tecnologias'
    },
    description: {
      bg: 'Хидрокинетична лазерна система за безвибрационно препариране и мекотъканна биостимулация.',
      en: 'Hydrokinetic laser platform for vibration-free preparation and soft tissue biostimulation.',
      pt: 'Sistema laser hidrocinético avançado para preparação dentária sem vibrações e bioestimulação tecidular profunda.'
    },
    imageUrl: '/images/tech_waterlase_laser.webp',
    isIllustrative: true
  },
  {
    id: 'cbct-suite',
    title: {
      bg: '3D CBCT диагностичен комплекс',
      en: '3D CBCT Diagnostic Imaging Suite',
      pt: 'Unidade de Diagnóstico Tomográfico CBCT 3D'
    },
    category: 'technology',
    categoryLabel: {
      bg: 'Технологии',
      en: 'Technology',
      pt: 'Tecnologias'
    },
    description: {
      bg: 'Субмилиметрова триизмерна конично-лъчева томография с протокол за ниска доза радиация.',
      en: 'Sub-millimetre 3D cone beam tomography operating on ultra low-dose radiation protocols.',
      pt: 'Tomógrafo computorizado de feixe cónico tridimensional submilimétrico com protocolos de dose de radiação ultrabaixa.'
    },
    imageUrl: '/images/tech_cbct_diagnostics.webp',
    isIllustrative: true
  },
  {
    id: 'lounge-interior',
    title: {
      bg: 'Консултативно фоайе и зона за релакс',
      en: 'Patient Consultation & Welcome Lounge',
      pt: 'Área de Acolhimento e Consulta Individual'
    },
    category: 'spaces',
    categoryLabel: {
      bg: 'Пространства',
      en: 'Spaces',
      pt: 'Espaços'
    },
    description: {
      bg: 'Елегантно интериорно пространство от естествен травертин и дърво, осигуряващо уединение и спокойствие.',
      en: 'Contemporary architectural sanctuary crafted from travertine and warm timber for privacy and calm.',
      pt: 'Espaço arquitetónico contemporâneo com acabamentos em travertino natural e madeira nobre, desenhado para máxima privacidade e serenidade.'
    },
    imageUrl: '/images/clinic_reception_lounge.webp',
    isIllustrative: true
  },
  {
    id: 'clinical-operatory-laser',
    title: {
      bg: 'Специализирана лазерна операционна',
      en: 'Specialized Clinical Operatory Suite',
      pt: 'Consultório Clínico Especializado com Consola Laser'
    },
    category: 'operatory',
    categoryLabel: {
      bg: 'Клиничен кабинет',
      en: 'Clinical Operatory',
      pt: 'Gabinete Clínico'
    },
    description: {
      bg: 'Индивидуален хирургичен кабинет с висок клас ергономичен юнит, прецизна лазерна конзола и естествено осветление.',
      en: 'Individual surgical operatory featuring ergonomic chair, precision laser console, and soothing natural light.',
      pt: 'Gabinete cirúrgico individual com cadeira ergonómica de última geração, consola laser de precisão e iluminação natural.'
    },
    imageUrl: '/images/clinical_operatory_laser.webp',
    isIllustrative: true
  },
  {
    id: 'intraoral-scanner-cart',
    title: {
      bg: 'Дигитална 3D интраорална оптична станция',
      en: '3D Intraoral Digital Scanning Suite',
      pt: 'Estação de Scanner Intraoral Digital 3D'
    },
    category: 'technology',
    categoryLabel: {
      bg: 'Технологии',
      en: 'Technology',
      pt: 'Tecnologias'
    },
    description: {
      bg: 'Оптичен скенер за мигновено дигитализиране на зъбните редици без неприятни силиконови отпечатъчни пасти.',
      en: 'High-speed optical scanner for immediate digital replication of dental arches without impression paste.',
      pt: 'Scanner ótico de alta velocidade para replicação digital instantânea das arcadas sem pastas de moldagem.'
    },
    imageUrl: '/images/intraoral_3d_scanning.webp',
    isIllustrative: true
  },
  {
    id: 'sterilization-biosafety',
    title: {
      bg: 'Болничен стерилизационен сектор с клас B автоклави',
      en: 'Hospital-Grade Class B Sterilization Suite',
      pt: 'Central de Esterilização Hospitalar Classe B'
    },
    category: 'spaces',
    categoryLabel: {
      bg: 'Пространства',
      en: 'Spaces',
      pt: 'Espaços'
    },
    description: {
      bg: 'Сертифициран европейски сектор за многостепенна термодезинфекция и стерилизация с електронно проследяване.',
      en: 'Certified European facility for multi-stage thermal disinfection and vacuum autoclaving with full batch tracking.',
      pt: 'Área certificada segundo as normas europeias para termodesinfeção e autoclavagem com rastreabilidade total.'
    },
    imageUrl: '/images/sterilization_suite.webp',
    isIllustrative: true
  }
];

export const TEAM_PLACEHOLDERS = [
  {
    id: 'lead-gnathologist',
    role: {
      bg: 'Главен дентален лекар & Специалист по лазерна дентална медицина и гнатология',
      en: 'Lead Dental Clinician & Specialist in Laser Dentistry and Gnathology',
      pt: 'Médico Dentista Coordenador & Especialista em Medicina Dentária a Laser e Gnatologia'
    },
    department: {
      bg: 'Диагностика, лазерна терапия и комплексни оклузални рехабилитации',
      en: 'Diagnostics, Laser Therapy & Complex Occlusal Rehabilitations',
      pt: 'Diagnóstico Avançado, Terapia Laser e Reabilitações Oclusais Complexas'
    },
    placeholderNote: {
      bg: 'Клинична позиция — Името и детайлната квалификационна биография ще бъдат публикувани при финално въвеждане в експлоатация.',
      en: 'Clinical position — Doctor identity and verified qualifications will be populated upon final commissioning.',
      pt: 'Posição clínica — Identidade médica e qualificações formais serão publicadas aquando da entrada em funcionamento comercial.'
    },
    focusAreas: {
      bg: ['WATERLASE лазерна хирургия', 'Компютърна гнатология и ТМС', 'Цялостни естетични рехабилитации'],
      en: ['WATERLASE laser surgery', 'Computerized gnathology & TMJ', 'Full-mouth aesthetic rehabilitations'],
      pt: ['Cirurgia laser WATERLASE', 'Gnatologia computorizada e ATM', 'Reabilitações estéticas integrais']
    }
  },
  {
    id: 'periodontist-implantologist',
    role: {
      bg: 'Специалист пародонтолог и хирург-имплантолог',
      en: 'Periodontist & Implant Surgeon',
      pt: 'Especialista em Periodontologia e Cirurgião de Implantes'
    },
    department: {
      bg: 'Пародонтология, костна регенерация и 3D навигирано имплантиране',
      en: 'Periodontology, Bone Regeneration & 3D Guided Implantology',
      pt: 'Periodontologia, Regeneração Óssea e Implantologia 3D Guiada'
    },
    placeholderNote: {
      bg: 'Клинична позиция — Професионалните медицински лицензи и сертификати се верифицират с официалния регистър на БЗС.',
      en: 'Clinical position — Professional medical credentials verified against official national dental registry.',
      pt: 'Posição clínica — Credenciais médicas profissionais verificadas no registo deontológico oficial.'
    },
    focusAreas: {
      bg: ['Лазерна деконтаминация на джобове', 'Навигирана имплантология с CBCT', 'Мекотъканна микро-хирургия'],
      en: ['Laser pocket decontamination', 'CBCT guided implantology', 'Soft-tissue microsurgery'],
      pt: ['Descontaminação de bolsas a laser', 'Implantologia guiada por CBCT', 'Microcirurgia de tecidos moles']
    }
  },
  {
    id: 'endodontist',
    role: {
      bg: 'Микроскопски ендодонтист',
      en: 'Microscopic Endodontist',
      pt: 'Especialista em Endodontia Microscópica'
    },
    department: {
      bg: 'Кореново лечение под операционен микроскоп с лазерна дезинфекция',
      en: 'High-Resolution Microscopic Root Canal Therapy & Laser Disinfection',
      pt: 'Desvitalização de Alta Resolução sob Microscópio Cirúrgico e Desinfeção a Laser'
    },
    placeholderNote: {
      bg: 'Клинична позиция — Попълва се съобразно официалната номенклатура на клиниката.',
      en: 'Clinical position — Verified credentials populated according to the clinic nomenclature.',
      pt: 'Posição clínica — Credenciais preenchidas em estrita conformidade com a estrutura médica da clínica.'
    },
    focusAreas: {
      bg: ['Сложни коренови канали под микроскоп', 'Лазерна фотоакустична промивка', 'Релечение на периапикални лезии'],
      en: ['Complex anatomy under microscope', 'Laser photo-acoustic streaming', 'Periapical lesion retreatments'],
      pt: ['Anatomia radicular complexa sob microscópio', 'Irrigação fotoacústica a laser', 'Retratamento de lesões periapicais']
    }
  },
  {
    id: 'orthodontist',
    role: {
      bg: 'Специалист ортодонт & Алайнер координатор',
      en: 'Specialist Orthodontist & Clear Aligner Coordinator',
      pt: 'Especialista em Ortodontia & Coordenador de Alinhadores Invisíveis'
    },
    department: {
      bg: 'Дигитално ортодонтско планиране, прозрачни алайнери и функционално позициониране',
      en: 'Digital Orthodontic Planning, Clear Aligners & Functional Alignment',
      pt: 'Planeamento Ortodôntico Digital, Alinhadores Transparentes e Alinhamento Funcional'
    },
    placeholderNote: {
      bg: 'Клинична позиция — Името и сертификатите ще бъдат добавени след потвърждение от клиниката.',
      en: 'Clinical position — Doctor name and certifications will be added upon final verification.',
      pt: 'Posição clínica — Nome e certificações adicionados após validação final da clínica.'
    },
    focusAreas: {
      bg: ['Прозрачни алайнери за възрастни и тийнейджъри', '3D симулация на оклузията', 'Ставна хармония'],
      en: ['Clear aligners for adults and teens', '3D occlusal kinematics', 'TMJ-friendly alignment'],
      pt: ['Alinhadores transparentes para adultos e jovens', 'Cinemática oclusal tridimensional 3D', 'Alinhamento com estabilidade da ATM']
    }
  },
  {
    id: 'hygienist',
    role: {
      bg: 'Клиничен дентален хигиенист & Превантивен терапевт',
      en: 'Clinical Dental Hygienist & Prevention Specialist',
      pt: 'Higienista Oral Clínico & Especialista em Medicina Preventiva'
    },
    department: {
      bg: 'Лазерна профилактика, пародонтална поддръжка и пациентско обучение',
      en: 'Laser Hygiene, Periodontal Recall Protocols & Patient Education',
      pt: 'Higiene Preventiva a Laser, Protocolos Periódicos de Manutenção e Educação para a Saúde Oral'
    },
    placeholderNote: {
      bg: 'Клинична позиция — Демонстрационен профил за представяне на екипната структура.',
      en: 'Clinical position — Demonstration profile illustrating clinical team hierarchy.',
      pt: 'Posição clínica — Perfil demonstrativo estrutural da hierarquia clínica interdisciplinar.'
    },
    focusAreas: {
      bg: ['Air-polishing с глицин', 'Фотобиомодулация при възпаления', 'Индивидуални профилактични планове'],
      en: ['Glycine air-polishing', 'Photobiomodulation for gingivitis', 'Custom preventative regimens'],
      pt: ['Polimento por jato de ar com glicina', 'Fotobiomodulação em gengivite', 'Planos preventivos individualizados']
    }
  }
];

export const SCIENTIFIC_PROTOCOLS: ScientificProtocol[] = [
  {
    id: 'mfsp',
    code: 'MFSP™',
    trademark: 'Medical Functional Stability Protocol',
    title: {
      bg: 'MFSP™ — Медицински протокол за функционална стабилност',
      en: 'MFSP™ — Medical Functional Stability Protocol',
      pt: 'MFSP™ — Protocolo Médico de Estabilidade Funcional'
    },
    subtitle: {
      bg: 'Биомеханична стабилност между зъби, темпоромандибуларна става (ТМС) и постурална хармония',
      en: 'Biomechanical equilibrium uniting dental occlusion, temporomandibular joint (TMJ), and cranial harmony',
      pt: 'Equilíbrio biomecânico unindo oclusão dentária, articulação temporomandibular (ATM) e postura craniana'
    },
    accessibleSummary: {
      bg: 'MFSP™ цели всяко дентално лечение (коронка, пломба, алайнер или имплант) да бъде прецизно синхронизирано с вашите челюстни стави и мускули, като спомага за намаляване риска от счупвания, износване на зъбите и тензионно главоболие.',
      en: 'MFSP™ aims to synchronize every restorative or orthodontic intervention (crown, filling, aligner, or implant) with your jaw joints and muscles, supporting risk reduction for fractures, wear, and tension headaches.',
      pt: 'O protocolo MFSP™ visa sincronizar cada intervenção restauradora ou ortodôntica (coroa, restauração, alinhador ou implante) com as articulações e músculos da mastigação, reduzindo o risco de fraturas, desgaste dentário e cefaleias tensionais.'
    },
    clinicalPurpose: {
      bg: 'Защо го прилагаме: Конвенционалната стоматология често лекува отделен зъб изолирано. Без анализ на общата дъвкателна кинематика, новите коронки и пломби се претоварват и разрушават. MFSP™ подпомага продължителната биологична устойчивост на възстановяванията.',
      en: 'Clinical Purpose: Standard dentistry frequently treats single teeth in isolation. Without calibrated masticatory kinematics, fresh restorations undergo traumatic overload. MFSP™ promotes long-term biological survival.',
      pt: 'Objetivo Clínico: A medicina dentária convencional trata frequentemente dentes isolados. Sem análise da cinemática mastigatória global, restaurações recentes sofrem sobrecarga oclusal e fraturam. O MFSP™ proporciona sustentabilidade biológica a longo prazo.'
    },
    scientificDepth: {
      bg: 'Биомеханична дълбочина: Протоколът интегрира динамична Т-Scan компютърна аксиография, ставен кондилографски анализ и депрограмиране на хипертоничната дъвкателна мускулатура. Чрез намиране на истинската централна релация (Centric Relation) на кондила в ямката се постига балансирано векторно натоварване (< 0.02s дисбаланс при захапване).',
      en: 'Scientific Depth: The protocol synthesizes dynamic digital T-Scan force profiling, condylar axiography, and neuromuscular de-programming. By seating the mandibular condyle into true Centric Relation, occlusal load vectors are harmonized to within 0.02-second contact synchrony.',
      pt: 'Profundidade Científica: O protocolo integra perfilometria oclusal dinâmica computorizada T-Scan, axiografia condilar e desprogramação da musculatura mastigatória hipertónica. Ao posicionar o côndilo mandibular em Relação Cêntrica verdadeira, os vetores de força são equilibrados com sincronia de contacto inferior a 0,02 segundos.'
    },
    pillars: {
      bg: [
        'Дигитален компютърен T-Scan анализ на силата на захапване',
        '3D CBCT оценка на ставната ямка и кондиларния наклон',
        'Миофункционално депрограмиране на дъвкателните мускули',
        'Елиминиране на паразитни странични приплъзвания и микро-травми'
      ],
      en: [
        'Dynamic digital T-Scan occlusal force mapping',
        '3D CBCT radiographic evaluation of condylar fossa seating',
        'Neuromuscular de-programming of hypertonic musculature',
        'Eradication of destructive lateral interferences and micro-trauma'
      ],
      pt: [
        'Mapeamento digital computorizado T-Scan da força de mordida',
        'Avaliação tomográfica 3D CBCT do assentamento condilar na fossa',
        'Desprogramação neuromuscular da musculatura hipertónica',
        'Eliminação de interferências laterais destrutivas e microtraumatismos'
      ]
    },
    indications: {
      bg: ['Бруксизъм (скърцане и стискане)', 'Щракане и болка в челюстната става', 'Чести счупвания на пломби и коронки', 'Тензионно главоболие'],
      en: ['Bruxism and nocturnal clenching', 'TMJ clicking, locking, or pain', 'Frequent breakage of fillings and crowns', 'Chronic tension migraines'],
      pt: ['Bruxismo e apertamento dentário noturno', 'Estalidos, dor ou bloqueio na ATM', 'Fraturas frequentes de restaurações e coroas', 'Cefaleias e enxaquecas tensionais crónicas']
    }
  },
  {
    id: 'bosync',
    code: 'BOSYNC™',
    trademark: 'Biological & Occlusal Synchronization',
    title: {
      bg: 'BOSYNC™ — Биологична & Оклузална Синхронизация',
      en: 'BOSYNC™ — Biological & Occlusal Synchronization',
      pt: 'BOSYNC™ — Sincronização Biológica & Oclusal'
    },
    subtitle: {
      bg: 'Едновременно хармонизиране на живата пародонтална тъкан и дъвкателните сили',
      en: 'Simultaneous harmonization of living periodontal biology and dynamic chewing forces',
      pt: 'Harmonização simultânea da biologia periodontal viva e das forças dinâmicas da mastigação'
    },
    accessibleSummary: {
      bg: 'BOSYNC™ свързва здравето на венците и костта със силата, с която зъбите се допират. Дори най-чистият венец ще се възпали и костта ще се стопи, ако зъбът получава неправилен натиск при дъвчене.',
      en: 'BOSYNC™ connects gum and bone health with the precision of your bite. Even thoroughly cleaned gums suffer recession and bone loss if individual teeth absorb uneven mechanical stress during chewing.',
      pt: 'O BOSYNC™ interliga a saúde das gengivas e do osso alveolar com a precisão do contacto dentário. Mesmo gengivas perfeitamente higienizadas sofrerão retração e reabsorção óssea se os dentes receberem forças assimétricas durante a mastigação.'
    },
    clinicalPurpose: {
      bg: 'Защо го прилагаме: Когато има възпаление на венеца, съчетано с травматична захапка, загубата на кост се ускорява тройно. BOSYNC™ спомага за овладяване на този разрушителен процес чрез едновременна лазерна деконтаминация и оклузален баланс.',
      en: 'Clinical Purpose: When periodontal inflammation coexists with traumatic bite overload, alveolar bone resorption accelerates threefold. BOSYNC™ aids in halting this destruction through concurrent laser pocket decontamination and occlusal balancing.',
      pt: 'Objetivo Clínico: Quando a inflamação periodontal coexiste com trauma oclusal por sobrecarga mecânica, a reabsorção do osso alveolar acelera até três vezes. O BOSYNC™ apoia o controlo deste processo através de descontaminação a laser e ajuste oclusal concomitante.'
    },
    scientificDepth: {
      bg: 'Биомеханична дълбочина: Протоколът контролира механотрансдукцията в периодонталния лигамент. Чрез отстраняване на субгингивалния анаеробен биофилм с Waterlase и минимизиране на хоризонталния огъващ момент се възстановява физиологичното кръвоснабдяване на костния гребен.',
      en: 'Scientific Depth: Regulates mechanotransduction within the periodontal ligament. Eradicating subgingival biofilm via hydrokinetic Waterlase while neutralizing lateral bending moments restores micro-vascular blood supply to the alveolar crest.',
      pt: 'Profundidade Científica: Controla a mecanotransdução no ligamento periodontal. A erradicação do biofilme bacteriano subgengival com o laser Waterlase, aliada à anulação de momentos de flexão horizontal, restabelece a microcirculação fisiológica na crista óssea.'
    },
    pillars: {
      bg: [
        'Лазерна микробиална деконтаминация с WATERLASE (2780 nm)',
        'Премахване на травматични контактни точки при странични движения',
        'Стимулиране на тъканната регенерация чрез фотобиомодулация (PBM)',
        'Биосъвместими циркониеви и керамични конструкции без метал'
      ],
      en: [
        'Microbial decontamination via hydrokinetic WATERLASE (2780 nm)',
        'Neutralization of traumatic contacts during dynamic mastication',
        'Periodontal tissue bio-stimulation via Photobiomodulation (PBM)',
        'Metal-free biocompatible zirconia and lithium disilicate materials'
      ],
      pt: [
        'Descontaminação microbiana a laser com WATERLASE (2780 nm)',
        'Neutralização de contactos oclusais traumáticos em movimentos excêntricos',
        'Estimulação da regeneração dos tecidos através de Fotobiomodulação (PBM)',
        'Materiais cerâmicos e zircónia biocompatíveis de alta resistência isentos de metal'
      ]
    },
    indications: {
      bg: ['Дълбоки пародонтални джобове с травма', 'Разклатени зъби от претоварване', 'Периимплантит', 'Отдръпване на венците (рецесии)'],
      en: ['Deep periodontal pockets with trauma', 'Teeth mobilized by occlusal stress', 'Peri-implantitis', 'Gingival clefts and receding gumlines'],
      pt: ['Bolsas periodontais profundas com trauma associado', 'Dentes com mobilidade por sobrecarga oclusal', 'Peri-implantite ativa', 'Retrações gengivais e perda de inserção']
    }
  },
  {
    id: 'initial-therapy',
    code: 'Initial Therapy',
    title: {
      bg: 'Начална терапия & Пропедевтична подготовка',
      en: 'Initial Therapy & Preparatory Foundation',
      pt: 'Terapia Inicial & Preparação Propedêutica'
    },
    subtitle: {
      bg: 'Задължителната биологична база преди всяко протетично, ортодонтско или хирургично лечение',
      en: 'The mandatory biological foundation prior to any restorative, orthodontic, or implant rehabilitation',
      pt: 'A base biológica obrigatória prévia a qualquer tratamento protético, ortodôntico ou cirúrgico'
    },
    accessibleSummary: {
      bg: 'Никога не поставяме коронки, фасети или импланти върху възпалени венци или инфектирана среда. Началната терапия почиства, дезинфекцира и подготвя устата за предвидимо и биологично съобразено лечение.',
      en: 'We never seat crowns, veneers, or implants on inflamed gums or active oral infection. Initial Therapy cleanses, decontaminates, and prepares your oral environment for predictable, biologically sound care.',
      pt: 'Nunca cimentamos coroas, facetas ou implantes sobre gengivas inflamadas ou num meio oral infetado. A Terapia Inicial higieniza, desinfeta e prepara a cavidade oral para tratamentos previsíveis e biologicamente seguros.'
    },
    clinicalPurpose: {
      bg: 'Защо го прилагаме: Поставянето на зъбни конструкции в бактериално замърсена уста води до усложнения. Началната терапия минимизира риска от периимплантит, вторичен кариес и компрометиране на възстановяванията.',
      en: 'Clinical Purpose: Placing advanced dental work into an active bacterial ecosystem results in early biological failure. Initial Therapy substantially reduces the risk of peri-implant breakdown, secondary caries, and prosthetic margin compromise.',
      pt: 'Objetivo Clínico: A colocação de estruturas dentárias num ecossistema bacteriano ativo conduz a falências biológicas prematuras. A Terapia Inicial minimiza substancialmente o risco de peri-implantite, cáries secundárias e degradação marginal protética.'
    },
    scientificDepth: {
      bg: 'Биомеханична дълбочина: Протоколът включва субгингивален дебридмънт с нискоабразивен глицинов прах (Air-polishing), селективна фотоакустична лазерна стерилизация и контрол на възпалителните цитокини (IL-1β, TNF-α). Едва след постигане на индекс на кървене < 10% се преминава към окончателно възстановяване.',
      en: 'Scientific Depth: Encompasses subgingival glycine air-polishing, hydro-photonic laser pocket decontamination, and downregulation of crevicular inflammatory cytokines (IL-1β, TNF-α). Definitive restorative phases commence only once bleeding on probing drops below 10%.',
      pt: 'Profundidade Científica: Inclui desbridamento subgengival com pó de glicina de baixa abrasividade (Air-polishing), esterilização fototérmica e fotoacústica a laser das bolsas e redução das citocinas pró-inflamatórias (IL-1β, TNF-α). Apenas após atingir um índice de sangramento à sondagem < 10% se avança para a reabilitação definitiva.'
    },
    pillars: {
      bg: [
        'Цялостно лазерно и ултразвуково отстраняване на субгингивален зъбен камък',
        'Деликатно отстраняване на микробния биофилм с микродисперсен глицин с минимален дискомфорт',
        'Локална реминерализация и кондициониране на венците',
        'Контролен преглед и повторно 3D сканиране преди същинската фаза'
      ],
      en: [
        'Complete laser and ultrasonic subgingival calculus removal',
        'Gentle biofilm disruption with low-abrasive glycine air-polishing minimizing discomfort',
        'Targeted enamel remineralization and mucosal conditioning',
        'Interval verification and follow-up 3D scan before definitive work'
      ],
      pt: [
        'Remoção ultrassónica e a laser do tártaro subgengival e cálculo profundo',
        'Eliminação delicada do biofilme com glicina microdispersa com mínimo desconforto',
        'Remineralização dirigida do esmalte e condicionamento da mucosa gengival',
        'Consulta de controlo e novo escaneamento 3D antes da fase definitiva'
      ]
    },
    indications: {
      bg: ['Подготовка за фасети и коронки', 'Преди поставяне на зъбни импланти', 'Преди стартиране на алайнери', 'Хроничен гингивит и кървене'],
      en: ['Pre-prosthetic tissue preparation', 'Pre-implant site preparation', 'Prior to clear aligner therapy', 'Chronic gingivitis and active bleeding'],
      pt: ['Preparação tecidular prévia a facetas e coroas', 'Preparação do leito ósseo antes de implantes dentários', 'Antes do início de tratamentos com alinhadores', 'Gengivite crónica e sangramento ativo']
    }
  }
];

export const PATIENT_PROFILES: PatientNeedProfile[] = [
  {
    id: 'anxiety-needle-free',
    title: {
      bg: 'Страх от машинки, шум и игли',
      en: 'Dental Anxiety & Drill Sensitivity',
      pt: 'Medo de brocas dentárias, ruídos e agulhas'
    },
    subtitle: {
      bg: 'Щадящо лазерно лечение в спокойна среда с минимален дискомфорт',
      en: 'Gentle, reduced-discomfort laser therapy in a calm sanctuary',
      pt: 'Tratamento a laser suave em ambiente sereno com desconforto minimizado'
    },
    symptoms: {
      bg: ['Силна тревожност преди зъболекар', 'Паника от звука на турбината', 'Непоносимост към болезнени упойки с игла', 'Отлагане на лечението с години'],
      en: ['Severe pre-appointment anxiety', 'Sensory distress from drill whine', 'Intolerance to mechanical needle injections', 'Postponing dental care for years'],
      pt: [
        'Ansiedade pronunciada antes da consulta dentária',
        'Desconforto sensorial intenso com o som da turbina',
        'Intolerância a injeções mecânicas com agulha',
        'Adiamento de consultas e tratamentos durante anos'
      ]
    },
    clinicSolution: {
      bg: 'Хидрокинетичният лазер WATERLASE премахва кариеса чрез микро-капки вода и светлина. Работи без механични вибрации и без нагряване, което в редица клинични случаи значително намалява или изключва необходимостта от упойка.',
      en: 'The WATERLASE hydrokinetic laser evaporates decay through water-atomized light energy. Zero bone vibrations, zero drill whine, no thermal friction, and frequently minimizes or eliminates the need for conventional injection anaesthesia.',
      pt: 'O laser hidrocinético WATERLASE vaporiza a cárie através de microgotículas de água e energia luminosa. Funciona sem vibrações ósseas, sem zumbidos estridentes, sem atrito térmico e reduz ou elimina frequentemente a necessidade de anestesia infiltrativa convencional.'
    },
    recommendedProtocol: 'WATERLASE & PBM',
    recommendedDisciplineId: 'restorative'
  },
  {
    id: 'tmj-bruxism-tension',
    title: {
      bg: 'Болки в челюстта, щракане и скърцане със зъби',
      en: 'Jaw Pain, TMJ Clicking & Bruxism',
      pt: 'Dor mandibular, estalidos na articulação e ranger de dentes'
    },
    subtitle: {
      bg: 'Цялостен гнатологичен баланс на ставите и мускулите (MFSP™)',
      en: 'Comprehensive gnathological joint and bite harmony (MFSP™)',
      pt: 'Harmonia gnatológica global das articulações e mastigação (MFSP™)'
    },
    symptoms: {
      bg: ['Пукане или щракане при отваряне на устата', 'Сутрешна скованост и болка в челюстта', 'Изтрити, нащърбени зъби от бруксизъм', 'Хронично главоболие и напрежение в шията'],
      en: ['Clicking or popping when opening the mouth', 'Morning jaw stiffness and muscle tightness', 'Flattened, chipped teeth from clenching', 'Chronic tension headaches and cervical strain'],
      pt: [
        'Estalidos ou estalos ao abrir e fechar a boca',
        'Rigidez e dor muscular matinal na mandíbula',
        'Dentes desgastados, encurtados ou lascados por bruxismo',
        'Cefaleias tensionais crónicas e rigidez nos músculos do pescoço'
      ]
    },
    clinicSolution: {
      bg: 'Чрез протокола MFSP™ и компютърен T-Scan анализ откриваме точните точки на претоварване на захапката и позиционираме долната челюст в хармония със ставите.',
      en: 'Through the MFSP™ framework and dynamic T-Scan occlusal force mapping, we isolate premature contact points and align the mandible in physiological equilibrium with the TMJ.',
      pt: 'Através do protocolo MFSP™ e do mapeamento digital computorizado T-Scan, isolamos os pontos exatos de interferência oclusal e realinhamos a mandíbula em harmonia fisiológica com as articulações temporomandibulares.'
    },
    recommendedProtocol: 'MFSP™ & Functional Diagnostics',
    recommendedDisciplineId: 'functional-orthodontics'
  },
  {
    id: 'gum-bleeding-periodontitis',
    title: {
      bg: 'Кървящи венци, лош дъх и подвижност',
      en: 'Bleeding Gums & Chronic Periodontitis',
      pt: 'Gengivas a sangrar, mobilidade dentária e mau hálito'
    },
    subtitle: {
      bg: 'Микро-инвазивна лазерна деконтаминация без хирургични срезове',
      en: 'Scalpel-free laser decontamination preserving natural bone',
      pt: 'Descontaminação a laser microinvasiva sem incisões cirúrgicas'
    },
    symptoms: {
      bg: ['Кървене при миене на зъби', 'Отдръпване на венеца и оголване на корените', 'Разклащане на зъби', 'Неприятен дъх въпреки миенето'],
      en: ['Bleeding upon brushing or flossing', 'Gum recession exposing sensitive roots', 'Progressive tooth mobility', 'Persistent bad breath despite oral hygiene'],
      pt: [
        'Sangramento gengival na escovagem ou uso de fio dentário',
        'Recessão gengival com exposição das raízes dentárias sensíveis',
        'Mobilidade progressiva dos dentes',
        'Mau hálito persistente apesar da higiene diária'
      ]
    },
    clinicSolution: {
      bg: 'Лазерът унищожава анаеробните бактерии в дълбочина до над 1000 µm в джобовете без разрязване на венеца със скалпел, стимулирайки естествено стягане на тъканите.',
      en: 'Laser wavelengths penetrate deep into contaminated pockets, eradicating virulent anaerobes up to 1000 µm without scalpel surgery and stimulating natural connective reattachment.',
      pt: 'O laser elimina as bactérias anaeróbias patogénicas em profundidades superiores a 1000 µm no interior das bolsas sem necessidade de incisões ou bisturi, estimulando a reinserção biológica natural dos tecidos.'
    },
    recommendedProtocol: 'BOSYNC™ & Initial Therapy',
    recommendedDisciplineId: 'periodontology'
  },
  {
    id: 'complex-restoration-implants',
    title: {
      bg: 'Сложни възстановявания и липсващи зъби',
      en: 'Complex Aesthetic & Implant Rehabilitation',
      pt: 'Reabilitações complexas, perda de dentes e estética'
    },
    subtitle: {
      bg: '3D навигирана прецизност и биосъвместима безметална керамика',
      en: '3D guided surgical certainty and metal-free biocompatibility',
      pt: 'Precisão cirúrgica 3D guiada e cerâmicas biocompatíveis sem metal'
    },
    symptoms: {
      bg: ['Липсващи единични или множествени зъби', 'Стари неестетични металокерамични коронки', 'Затруднено дъвчене и смущаваща усмивка', 'Предишни неуспешни зъбни лечения'],
      en: ['Single or multiple missing teeth', 'Outdated metal-ceramic restorations with dark margins', 'Compromised chewing efficiency', 'History of recurrent restoration failure'],
      pt: [
        'Ausência de dentes unitários ou múltiplos',
        'Coroas metalocerâmicas antigas com margens escuras inestéticas',
        'Dificuldade na mastigação e insatisfação com a harmonia do sorriso',
        'Histórico de falhas em restaurações dentárias anteriores'
      ]
    },
    clinicSolution: {
      bg: 'Планираме всяка коронка, фасета и имплант върху 3D томография с хирургични водачи, използвайки високочист цирконий за висока естетика и дълготрайна функционална стабилност.',
      en: 'We plan every restoration and implant on low-dose 3D volumetric CBCT with custom printed surgical stents, utilizing ultra-pure zirconia for lifelike aesthetics and long-term functional stability.',
      pt: 'Planeamos cada restauração e implante sobre tomografia 3D de baixa dose com recurso a guias cirúrgicos impressos, utilizando zircónia de ultra-alta pureza para estética de aspeto natural e estabilidade mastigatória duradoura.'
    },
    recommendedProtocol: 'MFSP™ & 3D Guided Placement',
    recommendedDisciplineId: 'implantology'
  },
  {
    id: 'children-fearless',
    title: {
      bg: 'Деликатна детска грижа с индивидуален подход',
      en: 'Gentle Paediatric Dentistry with Reassuring Approach',
      pt: 'Cuidados pediátricos delicados com abordagem tranquila'
    },
    subtitle: {
      bg: 'Приятелска атмосфера, лазерна дезинфекция и щадящо лечение',
      en: 'Child-friendly environment with gentle laser caries treatment and low discomfort',
      pt: 'Ambiente descontraído, tratamento a laser e mínimo desconforto'
    },
    symptoms: {
      bg: ['Първи кариеси на млечни зъби', 'Страх на детето от минали травматични прегледи', 'Дълбоки фисури, склонни към бързо разрушаване', 'Нужда от френулотомия (къса юздичка)'],
      en: ['Early childhood dental decay', 'Child anxiety from past medical encounters', 'Deep fissures susceptible to rapid cavitation', 'Need for infant or child frenectomy'],
      pt: [
        'Primeiras lesões de cárie em dentes de leite',
        'Ansiedade infantil originada por experiências médicas prévias',
        'Fissuras anatómicas profundas propensas a cárie rápida',
        'Necessidade de frenectomia labial ou lingual infantil'
      ]
    },
    clinicSolution: {
      bg: 'Процедурата протича без силния пищящ звук на механичната турбина и без вибрации, осигурявайки значително по-спокойна среда за детето. С лазера Waterlase запечатваме фисури и третираме кариеси деликатно.',
      en: 'The child avoids high-pitched mechanical drills and bone vibration, supporting a calmer, more comfortable experience. With Waterlase, we seal fissures and treat caries gently.',
      pt: 'O procedimento decorre sem o som estridente da turbina mecânica e sem vibração, proporcionando uma experiência tranquila e segura para a criança. Com o laser Waterlase selamos fissuras e tratamos cáries com extrema delicadeza.'
    },
    recommendedProtocol: 'WATERLASE Paediatric Care',
    recommendedDisciplineId: 'paediatric'
  }
];

export const CLINICAL_CASE_FRAMEWORK: CaseStudyFramework[] = [
  {
    id: 'case-tmj-rehab',
    discipline: {
      bg: 'Комплексна рехабилитация & Гнатология',
      en: 'Full Rehabilitation & Gnathology',
      pt: 'Reabilitação Oral Complexa & Gnatologia'
    },
    clinicalScenario: {
      bg: 'Пациент с генерализирано изтриване на съзъбието, хронично главоболие и щракане в дясната челюстна става.',
      en: 'Patient presenting with severe generalized attrition, chronic tension headaches, and unilateral TMJ clicking.',
      pt: 'Paciente com desgaste severo generalizado da dentição, cefaleias tensionais frequentes e estalidos na ATM direita.'
    },
    diagnosticProtocol: {
      bg: '3D CBCT на ставите + Дигитален T-Scan оклузален анализ + Фотопротокол на лицевата естетика.',
      en: 'Low-dose TMJ volumetric CBCT + dynamic T-Scan occlusal force mapping + facial photographic analysis.',
      pt: 'CBCT 3D de baixa dose das ATMs + Análise oclusal dinâmica computorizada T-Scan + Protocolo fotográfico estético facial.'
    },
    treatmentPhases: {
      bg: [
        'Начална терапия: Лазерна деконтаминация на биофилма и глициново полиране',
        'MFSP™ фаза: Ставно депрограмиране и носене на индивидуален ортотик за 8 седмици',
        'Биомиметично възстановяване: 3D сканирани литиево-дисиликатни онлеи и циркониеви конструкции'
      ],
      en: [
        'Initial Therapy: Laser biofilm debridement and subgingival glycine air-polishing',
        'MFSP™ Phase: Neuromuscular de-programming and custom orthotic stabilization for 8 weeks',
        'Biomimetic Restoration: 3D scanned lithium disilicate onlays and biocompatible zirconia'
      ],
      pt: [
        'Terapia Inicial: Descontaminação do biofilme a laser e polimento subgengival com glicina',
        'Fase MFSP™: Desprogramação neuromuscular e estabilização com ortótico oclusal por 8 semanas',
        'Restauração Biomimética: Onlays em dissilicato de lítio escaneados em 3D e cerâmicas biocompatíveis em zircónia'
      ]
    },
    stabilityMilestone: {
      bg: 'Значително облекчаване на тензионните главоболия, стабилизирана ставна кинематика и физиологично разпределение на дъвкателните сили.',
      en: 'Marked reduction in tension-type headaches, stabilized joint kinematics, and balanced occlusal contact distribution.',
      pt: 'Alívio expressivo das cefaleias de tensão, cinemática articular estabilizada e distribuição fisiológica equilibrada das forças mastigatórias.'
    }
  },
  {
    id: 'case-perio-laser',
    discipline: {
      bg: 'Лазерна пародонтология & Регенерация',
      en: 'Laser Periodontology & Regeneration',
      pt: 'Periodontologia a Laser & Regeneração'
    },
    clinicalScenario: {
      bg: 'Пациент с дълбоки пародонтални джобове (6-8 мм), обилно кървене и начална подвижност на фронтални зъби.',
      en: 'Patient with advanced periodontal pockets (6-8 mm), spontaneous bleeding, and early incisor mobility.',
      pt: 'Paciente com bolsas periodontais profundas (6–8 mm), sangramento espontâneo e mobilidade inicial dos dentes anteriores.'
    },
    diagnosticProtocol: {
      bg: '3D томографска оценка на костната загуба + Микробиален скрининг + KaVo Diagnocam анализ.',
      en: '3D CBCT alveolar bone resorption mapping + microbial charting + zero-radiation transillumination.',
      pt: 'Avaliação tomográfica 3D da perda óssea alveolar + Rastreio microbiano + Transiluminação KaVo Diagnocam sem radiação.'
    },
    treatmentPhases: {
      bg: [
        'BOSYNC™ Протокол: Лазерно почистване с WATERLASE (2780 nm) без хирургични срезове',
        'Фотобиомодулация (PBM): Нискоинтензивно стимулиране на фибробластите и колагена',
        'Оклузална корекция: Елиминиране на травматичното претоварване върху разклатените зъби'
      ],
      en: [
        'BOSYNC™ Protocol: Scalpel-free hydrokinetic WATERLASE (2780 nm) deep pocket sterilization',
        'Photobiomodulation (PBM): Low-level cellular stimulation of fibroblasts and extracellular matrix',
        'Occlusal Calibration: Eradication of traumatic bite forces concentrated on mobile teeth'
      ],
      pt: [
        'Protocolo BOSYNC™: Descontaminação profunda das bolsas com laser WATERLASE (2780 nm) sem cortes cirúrgicos',
        'Fotobiomodulação (PBM): Estimulação celular de baixa intensidade de fibroblastos e matriz colagénica',
        'Calibração Oclusal: Neutralização da sobrecarga mastigatória traumática concentrada nos dentes com mobilidade'
      ]
    },
    stabilityMilestone: {
      bg: 'Намаляване на дълбочината на джобовете, стабилизиране на зъбната подвижност и овладяване на възпалителното кървене.',
      en: 'Reduction of probing pocket depths, stabilization of tooth mobility, and clinical resolution of gingival bleeding.',
      pt: 'Redução comprovada da profundidade de sondagem das bolsas, estabilização da mobilidade dentária e resolução clínica do sangramento inflamatório.'
    }
  }
];

export const REVIEW_FRAMEWORK: ReviewFramework = {
  verifiedSource: 'Google Reviews / Verified Healthcare Registry',
  demonstrationNotice: {
    bg: 'Архитектурен модул за автентични пациентски отзиви — В съответствие с етичните изисквания на Convertix_studio, тук ще бъде свързана директна верифицирана интеграция с Google Reviews при официалното внедряване на уебсайта. Не се генерират измислени цитати или фалшиви оценки.',
    en: 'Curated module for authentic patient experiences — In adherence to Convertix_studio medical ethics, an official verified Google Reviews connection will be activated upon commercial commissioning. Zero fabricated testimonials or simulated ratings are published.',
    pt: 'Módulo arquitetónico para experiências autênticas de pacientes — Em conformidade com os princípios éticos da Convertix_studio, uma integração oficial e verificada com o Google Reviews será conectada aquando do lançamento formal do website. Não são produzidos testemunhos fictícios nem classificações artificiais.'
  },
  criteria: {
    bg: [
      'Автентични пациентски отзиви с верифициран Google профил',
      'Оценка на комфорта при лазерните манипулации',
      'Проследяване на дългосрочното здраве и удовлетвореност',
      'Пълна прозрачност без модерация на негативни отзиви'
    ],
    en: [
      'Authentic patient feedback verified via official Google profiles',
      'Clinical comfort assessment during laser interventions',
      'Longitudinal tracking of functional stability and satisfaction',
      'Transparent uncurated patient communication'
    ],
    pt: [
      'Testemunhos autênticos de pacientes verificados através de perfis Google',
      'Avaliação clínica do conforto durante procedimentos assistidos por laser',
      'Acompanhamento longitudinal da estabilidade funcional e satisfação',
      'Transparência integral e comunicação sem moderação de opiniões'
    ]
  }
};
