// =========================================================================
// Page content for British & French Academy, in EN and FR.
// Edit copy here — components read from this file. Keeps text out of markup.
// =========================================================================

export const site = {
  name: 'British & French Academy',
  shortName: 'BRIF',
  since: 2011,
  motto: 'Lux Mundi et Sal Terrae',
  mottoGloss: {
    en: 'The Light of the World and the Salt of the Earth',
    fr: 'La Lumière du monde et le Sel de la terre',
  },
  city: 'Cotonou, Benin',
  email: 'info@brif.one',
  phonePrimary: '+229 01 96 78 28 00',
  phoneSecondary: '+229 01 97 20 95 88',
  whatsapp: '22996782800',
  facebook: 'https://www.facebook.com/brif.one',
  instagram: 'https://www.instagram.com/brif.one/',
  mapUrl: 'https://www.google.com/maps/place/British+%26+French+Academy/@6.359877,2.454785,14z/data=!4m5!3m4!1s0x0:0x9025b9029d51e561!8m2!3d6.3597875!4d2.4545405',
  address: {
    en: 'Quartier JAK, 06 BP 129, Cotonou, Republic of Benin',
    fr: 'Quartier JAK, 06 BP 129, Cotonou, République du Bénin',
  },
  // Web3Forms access key for the enrolment form (host-agnostic: works on
  // Netlify now and on OVH after the move, no backend of our own needed).
  // Tied to info@brif.one via https://web3forms.com.
  formAccessKey: 'e014b612-b7e6-42c7-ba89-d8aaab9a7a06',
};

// Curriculum comparison tables (Programmes overview page). Class/year names
// are the proper terms of each system and don't translate, so this data is
// shared across languages — only surrounding labels in `content[lang]` do.
export const curriculumTracks = [
  {
    key: 'british',
    label: 'British Curriculum',
    subtitle: '',
    stages: [
      {
        key: 'lower-school',
        title: 'Lower School',
        subtitle: 'Nurseries',
        accent: 'navy',
        tables: [
          {
            rows: [
              ['6 months – 2 years', 'Crèche', ''],
              ['2+', 'Pre-Nursery', ''],
              ['3+', 'Nursery 1', ''],
              ['4+', 'Nursery 2', ''],
            ],
          },
        ],
      },
      {
        key: 'middle-school',
        title: 'Middle School',
        subtitle: 'Primary',
        accent: 'yellow',
        tables: [
          {
            header: 'yearClass',
            rows: [
              ['5+', 'Year 1', ''],
              ['6+', 'Year 2', 'Standard Attainment Tests (SATs) (English, Mathematics & Science)'],
              ['7+', 'Year 3', 'Progression Test (English, Mathematics & Science)'],
              ['8+', 'Year 4', 'Progression Test (English, Mathematics & Science)'],
              ['9+', 'Year 5', 'Progression Test (English, Mathematics & Science)'],
              ['10+', 'Year 6', 'Primary Exam (English, Mathematics & Science)'],
            ],
          },
        ],
      },
      {
        key: 'upper-school',
        title: 'Upper School',
        accent: 'blue',
        tables: [
          {
            subheading: 'Secondary 1',
            header: 'yearClass',
            rows: [
              ['11+', 'Year 7', 'Progression Test (English, Mathematics & Science)'],
              ['12+', 'Year 8', 'Progression Test (English, Mathematics & Science)'],
              ['13+', 'Year 9', 'Progression Test (English, Mathematics & Science)'],
              ['14+', 'Year 10', ''],
            ],
          },
          {
            subheading: 'Secondary 2',
            header: 'yearClass',
            rows: [
              ['15+', 'Year 11', ''],
              ['16+', 'Year 12', ''],
              ['17+', 'Year 13', ''],
            ],
          },
        ],
      },
    ],
  },
  {
    key: 'french',
    label: 'French Curriculum',
    subtitle: 'Republic of Benin standard programme | Available in France and French countries',
    stages: [
      {
        key: 'maternelles',
        title: 'Maternelles',
        accent: 'navy',
        tables: [
          {
            rows: [
              ['6 months – 2 years', 'Crèche', ''],
              ['3+', 'Maternelle 1', ''],
              ['4+', 'Maternelle 2', ''],
            ],
          },
        ],
      },
      {
        key: 'primary',
        title: 'Primary',
        accent: 'yellow',
        tables: [
          {
            rows: [
              ['5+', 'CP 1', ''],
              ['6+', 'CP 2', ''],
              ['7+', 'CE 1', ''],
              ['8+', 'CE 2', ''],
              ['9+', 'CM 1', ''],
              ['10+', 'CM 2', 'CEP — Certificat d’Étude Primaire — Exam'],
            ],
          },
        ],
      },
      {
        key: 'secondary',
        title: 'Secondary',
        accent: 'red',
        tables: [
          {
            subheading: '1st Degree',
            rows: [
              ['11+', 'Sixième (6ème)', ''],
              ['12+', 'Cinquième (5ème)', ''],
              ['13+', 'Quatrième (4ème)', ''],
              ['14+', 'Troisième (3ème)', 'BEPC — Brevet d’Étude du Premier Cycle — Exam'],
            ],
          },
          {
            subheading: '2nd Degree',
            rows: [
              ['15+', 'Seconde (2nde)', ''],
              ['16+', 'Première (1ère)', ''],
              ['17+', 'Terminale (Tle)', 'BAC — Baccalauréat — Exam'],
            ],
          },
        ],
      },
    ],
  },
];

// School calendar events, shared across languages — dates are facts, only the
// label translates, so they can't drift between the EN and FR pages. This is
// also the shape a future ERP/API would return, so swapping this array for a
// fetch later is a data-source change, not a component rewrite.
// Only school-confirmed dates belong here. Term breaks, holidays, exam dates,
// and PTA meeting dates get added as the school confirms each one — do not
// invent plausible-looking dates to fill this out.
// `type` is one of: 'term' | 'holiday' | 'exam' | 'pta' | 'event'.
export const schoolCalendar = [
  {
    date: '2026-09-14',
    type: 'term',
    label: { en: 'First day of the 2026–2027 school year', fr: 'Rentrée scolaire 2026-2027' },
  },
];

// Règlement Intérieur / Internal Regulations — the source PDF is already a
// single bilingual document (EN/FR side by side on every page), rendered here
// as page images rather than linked as a downloadable file. Shared across
// languages for the same reason as schoolCalendar: one set of pages, not two.
export const reglementInterieurPages = Array.from(
  { length: 14 },
  (_, i) => `/images/reglement-interieur/page-${String(i + 1).padStart(2, '0')}.png`
);

export const content = {
  en: {
    home: {
      heroKicker: 'Bilingual education · Since 2011',
      heroTitle: 'Two languages. One community. Every child.',
      heroText:
        'Preparing global leaders through a British, Cambridge, and bilingual education of international excellence.',
      heroCtaPrimary: 'Apply Now',
      heroCtaSecondary: 'Book a School Tour',
      tourWhatsappMessage: "Hello! I'd like to book a school tour of British & French Academy. Could you help me schedule a visit?",
      statLabel: 'Numbers that build trust',
      stats: [
        { value: '2011', label: 'Founded', tooltip: '15+ years of excellence' },
        { value: '100+', label: 'Graduates', tooltip: 'Since 2011, BRIF has seen more than 100 of its students graduate. They now pursue higher education at universities in the United Kingdom, Brazil, and Nigeria — proof that the bilingual education received at BRIF opens doors around the world.' },
        { value: '99%', label: 'Exam success rate', tooltip: 'Fewer than one candidate in a hundred has failed since 2011.' },
        { value: '3', label: 'Educational programmes', tooltip: 'Cambridge International, Classic Programme, and IMI Programme.' },
        { value: '20+', label: 'Nationalities represented', tooltip: 'UK, France, Nigeria, Equatorial Guinea, Senegal, Ghana, Togo, and more.' },
        { value: '15', label: 'Maximum class size', tooltip: 'We keep classes small so no child slips through the cracks.' },
      ],
      pillarsKicker: 'Who we are',
      pillarsTitle: 'Our vision, mission & values',
      pillars: [
        {
          icon: 'vision',
          title: 'Vision',
          text: "At British & French Academy, our vision is to shape tomorrow's decision-makers, versatile international professionals, and leaders. Our qualified teachers awaken each child's gifts, ensuring personalized guidance and nurturing every child's unique potential.",
        },
        {
          icon: 'mission',
          title: 'Mission',
          text: 'British & French Academy (BRIF) was founded by parents and run by educators who share your aspirations. We educate and train your child in a healthy, serene, and secure environment, ensuring each child receives the guidance and support they need.',
        },
        {
          icon: 'values',
          title: 'Values',
          text: "At British & French Academy, our core values shape our educational philosophy. Excellence: striving for the highest standards of education through continuous evaluation. Development: focusing on the holistic growth of each learner, nurturing their unique talents. Responsibility: providing resources to build responsible leaders of tomorrow. Through these values, we create an environment that fosters excellence, nurtures development, and embraces responsibility.",
        },
      ],
      aboutKicker: 'A school founded by parents',
      aboutTitle: 'Born from what families truly needed',
      aboutText:
        'British & French Academy was founded by parents. At a time when no school in Cotonou offered a genuinely complete education in both worlds, they wanted something different: a fully Francophone curriculum and a fully Anglophone one, side by side, so that every child could feel a native connection to the French-speaking and the English-speaking world alike. That conviction is still what we build on today.',
      aboutLink: 'Read our full story',
      newsKicker: 'Latest news',
      newsTitle: "What's happening at BRIF",
      newsLink: 'All news',
      ctaTitle: 'Come and see the school for yourself',
      ctaText: 'Book a visit, meet our teachers, and imagine your child here.',
      ctaButton: 'Start your application',
    },
    about: {
      title: 'About the Academy',
      kicker: 'Our story',
      storyKicker: 'Where we began',
      storyTitle: 'Our History',
      intro:
        "Founded in 2011 by parents, British & French Academy carries a singular conviction: to be the extension of every family in the education of their child.",
      body: [
        "It began with a group of parents united by a single conviction: that a school should not simply pass on knowledge. It should be a place where every child is known, respected, and encouraged with the same care they receive at home.",
        "It was from that search that British & French Academy was born, not as a variation on an existing system, but as the project of parents determined to build, themselves, the school they wanted for their children. More than a decade on, that spirit still shapes our work every day.",
      ],
      visionMissionKicker: 'What guides us',
      visionMissionTitle: 'Our Vision, Our Mission',
      visionMission: [
        {
          icon: 'vision',
          title: 'Our Vision',
          text: "At British & French Academy, our vision is to shape tomorrow's decision-makers, versatile international professionals, and leaders. Our qualified teachers awaken each child's gifts, ensuring personalized guidance and nurturing every child's unique potential.",
        },
        {
          icon: 'mission',
          title: 'Our Mission',
          text: 'British & French Academy (BRIF) was founded by parents and run by educators who share your aspirations. We educate and train your child in a healthy, serene, and secure environment, ensuring each child receives the guidance and support they need.',
        },
      ],
      foundersKicker: 'Founded by',
      foundersTitle: 'A woman’s conviction, a school for everyone',
      founders: [
        {
          name: 'Charlotte Frédérique De Souza',
          role: 'Founder',
          photo: '/images/founder-frederique.png',
          bio: 'Charlotte Frédérique De Souza studied literary arts before going on to pursue language translation, a path that left her with a lifelong sensitivity to language and how it shapes a child’s sense of belonging. She went on to build her career in property and casualty insurance. But it was that first sensitivity, born of literature and translation, that gave rise to a conviction: that families in the region deserved a school where every child could feel truly at home, in English as in French. That conviction led her, in 2011, to found British & French Academy, a school she continues to lead and grow today.',
        },
        {
          name: 'Gualbert Adohoueto',
          role: 'Co-founder',
          photo: '/images/founder-gualbert.jpg',
          bio: 'Gualbert Adohoueto has built his career at the intersection of leadership and innovation, working across education, health, commerce, and industry to help drive sustainable development throughout West Africa. When Charlotte confided in him her ambition for the education of Cotonou’s children, he recognised the same high standards that had always guided his own path. Convinced by her vision, he chose to support her in this venture, offering the confidence and encouragement she needed.',
        },
      ],
      accreditationsKicker: 'Official recognition',
      accreditationsTitle: 'Nationally accredited, internationally recognised',
      accreditations: [
        {
          title: 'National Accreditation',
          text: "British & French Academy is officially recognised by the Government of Benin. Our accreditation is validated by ministerial decree from the Ministère de l'Enseignement Maternel et Primaire (MEMP) for primary education, and the Ministère de l'Enseignement Secondaire, Technique et de la Formation Professionnelle (MESTFP) for secondary education. You can trust our accredited institution to give your children a path to academic excellence.",
        },
        {
          title: 'A Cambridge International School',
          text: "Our school is an approved Cambridge International School, registered to offer education programmes and qualifications from the Cambridge Pathway. We are proud to be part of the world's largest global community of schools.",
        },
      ],
      partnersKicker: 'Accreditations & partners',
      partnersTitle: 'Recognised beyond our walls',
      partnersIntro: 'British & French Academy is proud to be affiliated with the following institutions and accrediting bodies.',
      partners: [
        { name: 'Cambridge International', logo: '/images/cambridge-international.png' },
        { name: 'SAT', logo: '/images/sat.png' },
        { name: 'British Council', logo: '/images/british-council.jpg' },
        { name: 'IronSecur', logo: '/images/ironsecur.jpeg' },
        { name: 'Iteb Africa', logo: '/images/iteb-africa.png' },
      ],
      valuesKicker: 'What we stand for',
      valuesTitle: 'Our Values',
      values: [
        { title: 'Integrity', text: 'We do what is right, especially when no one is watching.' },
        { title: 'Excellence', text: 'We ask every student to bring their best, and we help them get there.' },
        { title: 'Community', text: 'Founded by families, we still look after one another, parents and staff alike.' },
        { title: 'Service', text: 'To be salt and light means to give back to Cotonou and beyond.' },
      ],
      whyKicker: 'What sets us apart',
      whyTitle: 'Why BRIF?',
      whyReasons: [
        {
          title: 'Truly bilingual',
          text: 'Students work confidently across English and French every day, not as subjects, but as the languages of real learning.',
        },
        {
          title: 'Small classes, close attention',
          text: 'Teachers know every student by name. We keep class size to a maximum of 15 students, so no child slips through the cracks.',
        },
        {
          title: 'Rooted in character',
          text: 'Our motto, Lux Mundi et Sal Terrae, guides a culture of integrity, service, and respect for one another.',
        },
        {
          title: 'Ready for the world',
          text: 'From primary through secondary, we prepare students for universities and futures across Benin and beyond.',
        },
      ],
      mottoTitle: 'Our motto',
      mottoText:
        'Lux Mundi et Sal Terrae: "the Light of the World and the Salt of the Earth." It is a call to live with purpose: to bring light where there is confusion, and to preserve what is good in our community.',
    },
    programs: {
      title: 'Classic Programme',
      kicker: 'What we teach',
      intro:
        'A continuous bilingual pathway from the early years through to secondary graduation, taught in English and French.',
      readMoreLabel: 'Read more',
      closeLabel: 'Close',
      items: [
        {
          title: 'Early Years',
          text: 'At British & French Academy (BRIF), children begin as early as Pre-Nursery. The younger the child, the faster they absorb vocabulary and grammar. According to Claude Hagège, linguist and professor at the Collège de France, language-learning ability peaks between ages 3 and 4. It is at this age that the capacity for mimicry, on which most language learning depends, is at its strongest.',
        },
        {
          title: 'Primary School',
          text: 'The primary years at BRIF are an essential stage for building knowledge, ways of working, and each child’s character.',
          more: [
            'As with the Maternelle classes, class sizes are planned for a maximum of 15 children, allowing personalised attention for every student. Each homeroom teacher is English-speaking and stays with their class, delivering the British curriculum. A second teacher, French-speaking, joins for subjects aligned with the French curriculum.',
            'Students are taught the genuine British curriculum, engaging happily with English, Maths, and Science lessons, complemented by French and Mathematics from the authentic French curriculum.',
            'Other core subjects are taught in both languages.',
            'Here too, sports activities bring joy to students, instilling an early love of sport and, for some, a calling.',
            "In CM2 (Year 6), the French curriculum is reinforced for students preparing for Benin's CEP examination. It is worth noting that, since its founding in 2011, British & French Academy has not had a single failed candidate in the CEP and BEPC examinations (French Programme) or in the BECE and Baccalauréat examinations (English/French Programme)!",
          ],
        },
        { title: 'Lower Secondary', text: 'Lower Secondary is made up of the 1st cycle (Collège), then the 2nd cycle (Lycée). Between the two cycles comes the English BECE examination (the equivalent of the French BEPC).' },
        { title: 'Upper Secondary', text: 'Upper Secondary culminates in the BACCALAUREATE before entry into COLLEGE (University).' },
      ],
    },
    programsHub: {
      title: 'Programmes',
      kicker: 'What we teach',
      intro: 'British & French Academy offers three programme tracks under one roof, each preparing students for a different path to excellence.',
      tracks: [
        {
          title: 'Classic Programme',
          text: 'Our core bilingual pathway from Early Years through to Upper Secondary, blending French and English curricula under one roof.',
          routeKey: 'programsClassic',
        },
        {
          title: 'Cambridge International Programme',
          text: "An internationally accredited pathway to IGCSE and A Levels, opening doors to universities worldwide.",
          routeKey: 'programsCambridge',
        },
        {
          title: 'Technical Programme IMI',
          text: "Benin's official technical pathway in computer installation and maintenance, preparing students for the IT workforce.",
          routeKey: 'programsImi',
        },
      ],
      admissionsInfoKicker: 'Before you apply',
      admissionsInfoTitle: 'Fees & Admission Requirements',
      admissionsInfoCards: [
        {
          title: 'Payment Terms',
          variant: 'light',
          items: [
            "School fees are paid directly into the school's bank account. Payment can also be made via Mobile Money.",
            "Parents must pay at least 60% of school fees before the start of their child's classes.",
            'Paying school fees in full before or at the start of the school year comes with a 5% discount. Discounts are not granted on other forms of fee payment.',
          ],
        },
        {
          title: 'Payment Schedule',
          variant: 'gradient',
          items: [
            'At enrolment • 1st payment: 60% of tuition + enrolment fee',
            'Mid-November • 2nd payment: 20% of tuition',
            'Mid-January • 3rd payment: remaining 20% balance',
          ],
        },
        {
          title: 'Admission Requirements',
          variant: 'gradient',
          items: [
            'New students take a separate placement test for English level and French level.',
            'NOTE: Children enter Maternelle 1 (Nursery) at 3 years old, completed by August 31.',
            'A child who has not turned 3 by August 31 cannot enter Maternelle 1, as this could significantly affect their schooling and development.',
            'Crèche: 6 months to 2 years | Pre-Nursery: 2–3 years.',
          ],
        },
        {
          title: 'Documents Required',
          variant: 'light',
          items: [
            'Duly completed and signed registration form (or online registration), with payment of 60% of tuition + enrolment fee.',
            "Child's birth certificate.",
            'Vaccination record.',
            "Previous year's school report cards.",
            'Two (2) passport photos (less than 6 months old).',
            'One (1) document folder with flaps (not black).',
            'Three (3) plastic sleeve folders.',
            'Three (3) packs of A4 paper (80gsm), or the sum of 8,000 F per child.',
          ],
        },
      ],
      curriculumKicker: 'Our curriculum',
      curriculumTitle: 'From crèche to Baccalaureate',
      curriculumIntro: 'Two complete education systems, side by side. Explore the age, class, and assessment structure of our British and French curricula.',
    },
    programsCambridge: {
      title: 'Cambridge International Programme',
      kicker: 'Cambridge Pathway',
      intro: "A rigorous, internationally recognised curriculum that opens doors to the world's leading universities.",
      pathwayTitle: 'The Cambridge Pathway',
      pathway: ['Early Years', 'Primary', 'Lower Secondary', 'IGCSE', 'A Levels', 'University'],
      highlightsTitle: 'Why families choose Cambridge',
      highlights: [
        {
          title: 'Globally recognised',
          text: 'Cambridge qualifications are recognised and respected by universities and employers in over 160 countries, giving students a passport to study and work anywhere in the world.',
        },
        {
          title: 'Built for real understanding',
          text: 'The curriculum is designed to develop skills for life, not just exam success: curiosity, confident communication, and independent thinking.',
        },
        {
          title: 'A trusted global community',
          text: "As an approved Cambridge International School, we are part of the world's largest community of Cambridge schools, all held to the same rigorous standards.",
        },
      ],
      universitiesTitle: 'Where our graduates go',
      universities: [],
      ctaText: 'Ready to explore the Cambridge Pathway for your child?',
      ctaButton: 'Contact admissions',
    },
    programsImi: {
      title: 'Technical Programme IMI',
      kicker: "Benin's national technical pathway",
      sidenote: "IMI is an official technical specialty of the Republic of Benin's education system, part of the Sciences et Techniques Industrielles (STI) track.",
      intro: 'Installation et Maintenance Informatique (IMI) prepares students for direct entry into the IT workforce through a practice-focused, three-year technical curriculum.',
      aboutTitle: 'What is IMI?',
      aboutText: 'IMI stands for Installation et Maintenance Informatique (Computer Installation and Maintenance). Students learn to install, configure, and maintain the computing systems, networks, and equipment that businesses and homes depend on every day.',
      skillsTitle: 'What students learn',
      skills: [
        'Hardware assembly and integration',
        'System troubleshooting and problem-solving',
        'Software installation, updates, and management',
        'Network configuration (Active Directory, Windows and Linux systems)',
        'System security verification',
        'Technical English',
      ],
      structureTitle: 'Programme structure',
      structure: [
        { year: 'Seconde', text: 'Foundations in mathematics, databases, networking, and professional ethics.' },
        { year: 'Première', text: 'Deeper technical study across networking, programming, and legislation.' },
        { year: 'Terminale', text: 'Final-year specialisation, culminating in the mandatory DT IMI examination.' },
      ],
      careersTitle: 'Career opportunities',
      careers: ['Network & systems administrator', 'Security auditor', 'IT asset manager', 'Database administrator', 'Application developer'],
      certificationTitle: 'Certification & progression',
      certificationText: "Graduates earn the Diplôme de Technicien (DT) in IMI, and can go on to pursue professional licences and master's degrees in computing and information technology.",
      ctaText: 'Interested in a hands-on, career-focused technical education?',
      ctaButton: 'Contact admissions',
    },
    life: {
      title: 'Student Life',
      kicker: 'Life at BRIF',
      intro:
        'School is more than lessons. It is friendships, discovery, and finding out who you are.',
      body: [
        'From the first bell to the last, our campus hums with activity. Students move between classrooms, playing fields, and quiet corners for reading, always in a community that feels like family.',
        'Clubs and activities give every child a place to shine, whether on the pitch, on the stage, in the science lab, or in service to others. We believe character is built as much in these moments as in any exam.',
      ],
      highlightsKicker: 'Life of learners at school',
      highlightsTitle: 'Extracurricular Activities',
      highlights: [
        { title: 'Sports & play', text: 'Football, athletics, and team games that build fitness and friendship.', imageAlt: "A BRIF student takes a shot during a football training session on the school's pitch, wearing a British & French Academy kit." },
        { title: 'Arts & culture', text: 'Music, drama, and visual arts that celebrate two cultures.', imageAlt: 'Two BRIF students in traditional dress speak to an audience during a cultural day celebration.' },
        { title: 'Clubs & societies', text: 'From debate to coding, spaces for every interest to grow.', imageAlt: 'A BRIF student holds a quadcopter drone she built as part of a school technology project.' },
        { title: 'Service & values', text: 'Projects that connect students to their communities.', imageAlt: 'BRIF students take part in hands-on first-aid training led by Croix-Rouge Béninoise instructors.' },
      ],
    },
    news: {
      title: 'News',
      kicker: 'From the Academy',
      intro: 'Announcements, events, and stories from our community.',
      readMore: 'Read more',
    },
    admissions: {
      title: 'Admissions',
      kicker: 'Join us',
      intro:
        'We welcome families who want a bilingual, values-led education for their children. Here is how to begin.',
      stepsTitle: 'How to apply',
      steps: [
        { n: '01', title: 'Get in touch', text: 'Contact us to register your interest and ask any questions. We are happy to help in English or French.' },
        { n: '02', title: 'Visit the school', text: 'Come and see the campus, meet our teachers, and get a feel of the BRIF community.' },
        { n: '03', title: 'Submit an application', text: 'Complete the application form and provide your child\u2019s previous school records.' },
        { n: '04', title: 'Assessment & welcome', text: 'A friendly assessment helps us place your child well. Then we welcome you to the BRIF family.' },
      ],
      faqKicker: 'FAQ',
      faqTitle: 'Common questions',
      faqs: [
        { q: 'What ages do you accept?', a: 'We welcome students from the early years through to the end of secondary school.' },
        { q: 'Does my child need to speak both languages?', a: 'No. We support students joining from either an English or French background and build fluency over time.' },
        { q: 'When can we apply?', a: 'Applications are welcome year-round, subject to availability. Contact us to check current openings.' },
        { q: 'Can my child transfer mid-year?', a: "Yes, subject to availability. Contact our admissions team to check current openings for your child's grade." },
        { q: 'How do I arrange a visit?', a: 'Use the contact page or call the school office, and we will arrange a convenient time.' },
        { q: 'What is the fee structure?', a: "Tuition is paid in three installments: 60% at enrolment, 20% in mid-November, and 20% in mid-January. Families who pay in full at enrolment receive a 5% discount. For the exact document checklist and age cutoffs (including the August 31 cutoff for Maternelle 1), see the Fees & Admission Requirements section on the Programmes page." },
        { q: 'When does the school year start and end?', a: 'The 2026–2027 school year begins on 14 September 2026. The end date will be confirmed soon.', linkKey: 'parentsCalendar', linkLabel: 'See the school calendar' },
        { q: 'What are the school hours?', a: 'School session begins at as early as 7:30 and ends at 15:30.' },
        { q: 'What are PTA meetings?', a: "Parent Teacher Association (PTA) meetings are annual meetings, usually about a month after resumption, which bring together parents/guardians, teachers, and the school's administration. During these 2 hour-long meetings, the school administration presents the school, and its objectives to parents, after which questions from parents are answered." },
        { q: 'Does the school have a transport facility?', a: 'Yes, the school has buses for the transport of students. In addition, the school partners with a transport facility with which parents/guardians can discuss information relative to transportation of their children.' },
        { q: 'Does the school have a canteen?', a: 'Yes, canteen services are available on our premises and offer a variety of meals.' },
        { q: 'Does the school have boarding facilities?', a: 'No, the school does not currently offer boarding facilities.' },
      ],
      ctaText: 'Ready to take the first step?',
      ctaButton: 'Contact admissions',
    },
    parentsHub: {
      kicker: 'For BRIF families',
      title: 'Parents',
      intro: 'A single place for the forms, lists, and dates that come up most often once your child is enrolled.',
      communityPhotoAlt: 'Parents and staff seated together at a BRIF school event.',
      communityPhotoCaption: 'Parents and staff at a BRIF school event.',
      documentsTitle: 'Documents & lists',
      documents: [
        { title: 'School supply lists', description: 'Per-level supply lists for the English and French programmes.', status: 'comingSoon' },
        { title: 'Uniform & dress code', description: 'What students wear day-to-day and for special occasions.', status: 'comingSoon' },
        { title: 'Règlement Intérieur (school rules)', description: "The school's internal regulations, shared and signed at enrolment.", status: 'available', href: '/en/parents/internal-regulations/', linkLabel: 'View', external: false },
        { title: 'Transport & bus routes', description: 'Routes, stops, and how to arrange transport for your child.', status: 'comingSoon' },
        { title: 'Canteen information', description: 'Menus and how the canteen works.', status: 'comingSoon' },
      ],
      comingSoonLabel: 'Coming soon',
      downloadLabel: 'Download',
      canteenTitle: 'A look at the canteen',
      canteenIntro: 'The full menu is coming soon — in the meantime, here is a glimpse of a canteen service day.',
      canteenPhotoAlts: [
        'A staff member serves a hot meal at the BRIF canteen.',
        'A plated canteen meal with a starchy side and a meat sauce.',
        'A plated canteen meal with a meat and vegetable sauce.',
      ],
      calendarTeaserKicker: 'Key dates',
      calendarTeaserTitle: 'School calendar',
      calendarTeaserText: 'Term dates, holidays, and key events for the school year.',
      calendarTeaserButton: 'View the calendar',
    },
    parentsCalendar: {
      kicker: 'For BRIF families',
      title: 'School Calendar',
      intro: "Confirmed key dates for the school year. More dates — term breaks, holidays, exams, and PTA meetings — will be added here as they're confirmed.",
      typeLabels: { term: 'Term', holiday: 'Holiday', exam: 'Exam', pta: 'PTA meeting', event: 'Event' },
      backToParents: 'Back to Parents',
    },
    reglementInterieur: {
      kicker: 'For BRIF families',
      title: 'Internal Regulations',
      intro: 'The official Règlement Intérieur / Internal Regulations, shown here in the original bilingual document for reference. Every parent acknowledges these regulations at enrolment.',
      backToParents: 'Back to Parents',
    },
    contact: {
      title: 'Contact',
      kicker: 'Get in touch',
      intro: 'We would love to hear from you, in English or in French.',
      formName: 'Your name',
      formEmail: 'Email address',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send message',
      formNote: 'This form opens your email app. You can also write to us directly.',
      detailsTitle: 'School details',
      bookVisitButton: 'Book a School Tour',
      addressLabel: 'Address',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      hoursLabel: 'Office hours',
      hours: 'Monday to Friday, 8:00 – 16:00',
    },
    notFound: {
      title: 'Page not found',
      text: 'The page you were looking for has moved or never existed. Let us get you back on track.',
      button: 'Back to home',
    },
    fbModule: {
      kicker: 'Stay connected',
      title: 'Follow us on Facebook',
      text: 'See our latest photos, events, and announcements as they happen, and join the conversation with our community.',
      button: 'Visit our Facebook page',
    },
    social: {
      kicker: 'Stay connected',
      title: 'Follow our community',
      text: 'See our latest photos, events, and announcements as they happen, and join the conversation with our community on Facebook and Instagram.',
      fbButton: 'Visit our Facebook page',
      igButton: 'Follow us on Instagram',
      handleFb: '@brif',
      handleIg: '@brif.one',
    },
    enrol: {
      title: 'Enrolment enquiry',
      kicker: 'Join BRIF',
      intro:
        'Interested in enrolling your child at British & French Academy? Share your details below and our admissions team will be in touch. All fields marked * are required.',
      parentName: 'Parent / guardian name *',
      parentEmail: 'Email address *',
      parentPhone: 'Phone number *',
      childName: "Child's name",
      childAge: "Child's age",
      curriculum: 'Preferred curriculum',
      curriculumOptions: ['No preference', 'English curriculum', 'French curriculum', 'Both'],
      entryYear: 'Desired start (year)',
      message: 'Anything else you would like us to know?',
      submit: 'Send enquiry',
      note: 'We treat your information with care and use it only to respond to your enquiry.',
      successThanks: 'Thank you. Your enquiry has been sent. Our team will contact you soon.',
    },
    legal: {
      kicker: 'Legal information',
      title: 'Legal Mentions',
      publisherTitle: 'Publisher',
      publisher: [
        { label: 'Name', value: 'British & French Academy (BRIF)' },
        { label: 'Address', value: '06 BP 129, Quartier JAK, Cotonou, Littoral, Republic of Benin' },
        { label: 'Telephone', value: '+229 96 78 28 00' },
        { label: 'Email', value: 'info@brif.one' },
        { label: 'Responsible for Publication', value: 'Charlotte Frédérique K. De Souza' },
      ],
      hostingTitle: 'Hosting Provider',
      hosting: [
        { label: 'Name', value: 'OVH' },
        { label: 'Address', value: '2 Rue Kellermann, 59100 Roubaix, France' },
        { label: 'Telephone', value: '+33 9 72 10 10 07' },
      ],
      sections: [
        {
          title: 'Intellectual Property',
          text: 'All content on this website, including texts, graphics, logos, images, and other materials, is the property of BRIF or its content suppliers and is protected by international copyright laws. Unauthorized use of any content from this site is strictly prohibited without prior written permission from BRIF.',
        },
        {
          title: 'Personal Data Protection',
          text: 'BRIF is committed to ensuring the privacy and protection of personal data. Any personal information collected through this website will be used solely for educational and administrative purposes. For more information on our data protection policies, please refer to our Privacy Policy.',
          linkKey: 'privacy',
          linkLabel: 'Read our Privacy Policy',
        },
        {
          title: 'Cookies',
          text: 'This website uses cookies to enhance user experience and analyze site traffic. By continuing to use this website, you agree to our use of cookies. For more information, please see our Cookie Policy.',
          linkKey: 'cookies',
          linkLabel: 'Read our Cookie Policy',
        },
        {
          title: 'Liability Disclaimer',
          text: 'BRIF strives to ensure that the information provided on this website is accurate and up to date. However, we cannot guarantee the completeness or accuracy of the information and disclaim any liability for errors or omissions. Users are encouraged to verify any information before relying on it.',
        },
      ],
    },
    privacy: {
      kicker: 'Legal information',
      title: 'Privacy Policy',
      welcomeTitle: 'Welcome to our privacy policy',
      lede: 'Your privacy is important to us.',
      addressIntro: 'British & French Academy is located at the following address:',
      intro: [
        "It is British & French Academy's policy to respect your privacy regarding any information we may collect while operating our website. This privacy policy applies to https://brif.one ('us', 'we', or 'https://brif.one'). We respect your privacy and are committed to protecting any personally identifiable information you may provide to us through the Website. We have adopted this privacy policy ('Privacy Policy') to explain what information may be collected on our website, how we use that information and under what circumstances we may disclose it to third parties. This Privacy Policy applies only to information we collect on the Website and does not apply to the collection of information from other sources.",
        'This privacy policy, together with the terms and conditions published on our website, sets out the general rules and policies governing your use of our website. Depending on your activities during your visit to our website, you may be asked to accept additional terms and conditions.',
      ],
      sections: [
        {
          title: 'Website visitors',
          body: [
            { text: 'Like most website operators, British & French Academy collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. British & French Academy’s purpose in collecting non-personally identifying information is to better understand how British & French Academy’s visitors use its website. From time to time, British & French Academy may release non-personally-identifying information in the aggregate, for example, by publishing a report on trends in the usage of its website.' },
          ],
        },
        {
          title: 'Collection of Personally Identifiable Information',
          body: [
            { text: 'Certain visitors to British & French Academy’s website choose to interact with us in ways that require us to gather personally-identifying information. The amount and type of information we gather depends on the nature of the interaction. For example, we ask visitors who submit our enrolment enquiry form to provide details such as their name, email address, phone number, and information about their child, so that our admissions team can respond to their enquiry.' },
          ],
        },
        {
          title: 'Security',
          body: [
            { text: 'The security of your personal information is important to us, but please remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.' },
          ],
        },
        {
          title: 'Links to external sites',
          body: [
            { text: 'Our service may contain links to external sites that are not operated by us. If you click on a third party’s link, you will be directed to their site. We strongly advise you to read the privacy policy and terms and conditions of each site you visit.' },
            { text: 'We have no control over, and accept no responsibility for, the content, privacy policies or practices of any third party sites, products or services.' },
          ],
        },
        {
          title: 'Aggregate statistics',
          body: [
            { text: 'British & French Academy may collect statistics about the behaviour of visitors to its website. British & French Academy may display this information publicly or provide it to others. However, British & French Academy does not disclose personally-identifying information.' },
          ],
        },
        {
          title: 'Cookies',
          body: [
            { text: 'British & French Academy’s website does not itself set cookies to track your browsing activity. Pages that embed our Facebook feed, such as the News page, load a widget provided by Facebook (Meta Platforms, Inc.), which may set its own cookies on your device. We do not control these cookies, and they are subject to Facebook’s own privacy and cookie policies.' },
            { text: 'By continuing to browse our website, you acknowledge that pages embedding this third-party feature may set cookies as described above.' },
          ],
          linkKey: 'cookies',
          linkLabel: 'Read our Cookie Policy',
        },
        {
          title: 'Changes to Privacy Policy',
          body: [
            { text: 'Although most changes are minor, British & French Academy may change its Privacy Policy from time to time and in British & French Academy’s sole discretion. British & French Academy encourages visitors to frequently check this page for changes to its Privacy Policy. Your continued use of this site following any changes to the Privacy Policy constitutes your acceptance of such changes.' },
          ],
        },
        {
          title: 'Credit and contact information',
          body: [
            { text: 'If you have any questions about this privacy policy, please contact us by e-mail or telephone.' },
          ],
        },
      ],
    },
    cookies: {
      kicker: 'Legal information',
      title: 'Cookie Policy',
      sections: [
        {
          title: 'What are cookies?',
          body: [
            { text: 'Cookies are small text files placed on your computer or mobile device by the websites you visit. They are used to collect information about your browsing habits and preferences, such as the pages you visit, the date and time of your visit and your preferred language.' },
          ],
        },
        {
          title: 'Why do we use cookies?',
          body: [
            { text: 'This website does not set its own cookies to log you in, remember your preferences, or track your usage. For example, the EN/FR language switcher works through the page address itself, not a cookie. The only cookies that may be set when visiting this site come from an embedded third-party feature, described below.' },
          ],
        },
        {
          title: 'Types of cookies',
          body: [
            { text: 'For reference, cookies generally fall into the following categories. Of these, only third-party cookies currently apply to this website, via our embedded Facebook feed.' },
            { label: 'Session cookies', text: 'These are temporary cookies that are deleted when you close your browser. They are used to track your actions during a single visit to a website.' },
            { label: 'Persistent cookies', text: 'These cookies remain on your device for a longer period, such as six months or a year. They are used to remember preferences and login information.' },
            { label: 'Third-party cookies', text: 'These cookies are placed by third-party services embedded in our pages. On this site, that means the Facebook feed on our News page, which may set cookies controlled by Facebook (Meta Platforms, Inc.), not by us.' },
          ],
        },
        {
          title: 'Cookie management',
          body: [
            { text: "You can manage cookies via your browser settings. Most browsers allow you to block or delete cookies, but this may affect your experience on our website. For more information on managing cookies, please consult your browser's help documentation." },
            { label: 'Consent', text: 'By using our website, you consent to the use of cookies as described in this policy. If you do not consent, you can choose to disable cookies in your browser settings.' },
          ],
        },
        {
          title: 'Changes to this policy',
          body: [
            { text: 'We may update this cookie policy from time to time. Any changes will be posted on this page, and we encourage you to check it regularly to stay informed.' },
          ],
        },
        {
          title: 'Contacting us',
          body: [
            { text: 'If you have any questions or concerns about our use of cookies, please contact us at info@brif.one.' },
          ],
        },
      ],
    },
  },

  fr: {
    home: {
      heroKicker: 'Éducation bilingue · Depuis 2011',
      heroTitle: 'Deux langues. Une communauté. Chaque enfant.',
      heroText:
        "Préparer des leaders mondiaux grâce à une éducation britannique, Cambridge et bilingue d'excellence internationale.",
      heroCtaPrimary: 'Postuler maintenant',
      heroCtaSecondary: "Réserver une visite de l'école",
      tourWhatsappMessage: "Bonjour ! Je souhaiterais réserver une visite de l'école British & French Academy. Pourriez-vous m'aider à planifier une visite ?",
      statLabel: 'Les chiffres qui renforcent la confiance',
      stats: [
        { value: '2011', label: 'Fondée', tooltip: "15+ ans d'excellence" },
        { value: '100+', label: 'Diplômés', tooltip: "Depuis 2011, BRIF a vu plus de 100 de ses élèves obtenir leur diplôme. Ils poursuivent aujourd'hui leurs études supérieures dans des universités au Royaume-Uni, au Brésil et au Nigéria. C'est la preuve que la formation bilingue reçue à BRIF ouvre les portes du monde entier." },
        { value: '99%', label: 'Taux de réussite aux examens', tooltip: 'Moins d’un candidat sur cent a échoué depuis 2011.' },
        { value: '3', label: 'Programmes éducatifs', tooltip: 'Cambridge International, Programme Classique et Programme IMI.' },
        { value: '20+', label: 'Nationalités représentées', tooltip: 'Royaume-Uni, France, Nigeria, Guinée Équatoriale, Sénégal, Ghana, Togo, et bien d’autres.' },
        { value: '15', label: 'Effectif maximum par classe', tooltip: 'Nous maintenons des classes réduites pour qu’aucun enfant ne soit laissé de côté.' },
      ],
      pillarsKicker: 'Qui nous sommes',
      pillarsTitle: 'Notre vision, notre mission et nos valeurs',
      pillars: [
        {
          icon: 'vision',
          title: 'Vision',
          text: "British & French Academy, notre vision est de former les décideurs de demain : des professionnels internationaux polyvalents et des leaders accomplis. Nos enseignants qualifiés éveillent les talents de chaque enfant, avec un accompagnement personnalisé qui valorise le potentiel unique de chacun.",
        },
        {
          icon: 'mission',
          title: 'Mission',
          text: "British & French Academy (BRIF) a été fondée par des parents et est dirigée par des éducateurs qui partagent vos aspirations. Nous formons votre enfant dans un environnement sain, serein et sécurisant, en veillant à ce que chacun reçoive l'accompagnement et le soutien dont il a besoin.",
        },
        {
          icon: 'values',
          title: 'Valeurs',
          text: "British & French Academy, nos valeurs fondamentales guident notre philosophie éducative. Excellence : viser les plus hauts standards grâce à une évaluation continue. Épanouissement : favoriser le développement global de chaque élève et cultiver ses talents. Responsabilité : donner aux jeunes les moyens de devenir les leaders responsables de demain. Ensemble, ces valeurs créent un environnement qui allie excellence, épanouissement et responsabilité.",
        },
      ],
      aboutKicker: 'Une école fondée par des parents',
      aboutTitle: 'Née des vrais besoins des familles',
      aboutText:
        "British & French Academy a été fondée par des parents. À une époque où aucune école de Cotonou n'offrait une éducation véritablement complète dans les deux mondes, ils voulaient autre chose : un cursus entièrement francophone et un cursus entièrement anglophone, côte à côte, afin que chaque enfant puisse ressentir un lien naturel avec le monde francophone comme avec le monde anglophone. Cette conviction reste aujourd'hui notre fondation.",
      aboutLink: 'Lire notre histoire',
      newsKicker: 'Actualités',
      newsTitle: 'La vie de la BRIF',
      newsLink: 'Toutes les actualités',
      ctaTitle: "Venez découvrir l'école par vous-même",
      ctaText: 'Réservez une visite, rencontrez nos enseignants et imaginez votre enfant ici.',
      ctaButton: 'Commencer une inscription',
    },
    about: {
      title: "À propos de l'Académie",
      kicker: 'Notre histoire',
      storyKicker: "D'où nous venons",
      storyTitle: 'Notre Histoire',
      intro:
        "Fondée en 2011 par des parents, British & French Academy porte une conviction unique : être le prolongement de chaque famille dans l'éducation de l'enfant.",
      body: [
        "Tout a commencé avec un groupe de parents unis par une même conviction : une école ne devrait pas se limiter à transmettre un savoir. Elle devrait être un lieu où chaque enfant est connu, respecté et encouragé avec la même attention que celle qu'il reçoit chez lui.",
        "C'est de cette recherche qu'est née British & French Academy, non pas comme la déclinaison d'un système préexistant, mais comme le projet de parents décidés à construire eux-mêmes l'école qu'ils souhaitaient pour leurs enfants. Plus de dix ans après, cet esprit continue d'animer notre travail au quotidien.",
      ],
      visionMissionKicker: 'Ce qui nous guide',
      visionMissionTitle: 'Notre Vision, Notre Mission',
      visionMission: [
        {
          icon: 'vision',
          title: 'Notre Vision',
          text: "British & French Academy, notre vision est de former les décideurs de demain : des professionnels internationaux polyvalents et des leaders accomplis. Nos enseignants qualifiés éveillent les talents de chaque enfant, avec un accompagnement personnalisé qui valorise le potentiel unique de chacun.",
        },
        {
          icon: 'mission',
          title: 'Notre Mission',
          text: "British & French Academy (BRIF) a été fondée par des parents et est dirigée par des éducateurs qui partagent vos aspirations. Nous formons votre enfant dans un environnement sain, serein et sécurisant, en veillant à ce que chacun reçoive l'accompagnement et le soutien dont il a besoin.",
        },
      ],
      valuesKicker: 'Ce que nous défendons',
      valuesTitle: 'Nos Valeurs',
      values: [
        { title: 'Intégrité', text: 'Faire ce qui est juste, surtout lorsque personne ne regarde.' },
        { title: 'Excellence', text: 'Demander à chaque élève de donner le meilleur, et l\u2019aider à y parvenir.' },
        { title: 'Communauté', text: 'Fondée par des familles, nous prenons soin les uns des autres, parents et personnel.' },
        { title: 'Service', text: 'Être sel et lumière, c\u2019est rendre à Cotonou et au-delà.' },
      ],
      whyKicker: 'Notre différence',
      whyTitle: 'Pourquoi BRIF ?',
      whyReasons: [
        {
          title: 'Véritablement bilingue',
          text: "Les élèves évoluent avec aisance en anglais et en français chaque jour, non comme des matières, mais comme les langues d'un vrai apprentissage.",
        },
        {
          title: 'Petits effectifs, grande attention',
          text: 'Les enseignants connaissent chaque élève par son nom. Nous limitons chaque classe à 15 élèves maximum, pour que personne ne soit laissé de côté.',
        },
        {
          title: 'Ancrée dans le caractère',
          text: "Notre devise, Lux Mundi et Sal Terrae, inspire une culture d'intégrité, de service et de respect mutuel.",
        },
        {
          title: 'Prête pour le monde',
          text: 'Du primaire au secondaire, nous préparons les élèves aux universités et aux avenirs, au Bénin et au-delà.',
        },
      ],
      foundersKicker: 'Fondée par',
      foundersTitle: 'Une conviction de femme, une école pour tous',
      founders: [
        {
          name: 'Charlotte Frédérique De Souza',
          role: 'Fondatrice',
          photo: '/images/founder-frederique.png',
          bio: 'Charlotte Frédérique De Souza a étudié les lettres avant de se tourner vers la traduction, un parcours qui lui a donné une sensibilité durable à la langue et à la façon dont elle façonne le sentiment d’appartenance d’un enfant. Elle poursuit ensuite son parcours professionnel dans l’assurance IARD. Mais c’est bien cette première sensibilité, née des lettres et de la traduction, qui fait naître en elle une certitude : les familles de la région méritaient une école où chaque enfant se sente pleinement chez lui, en anglais comme en français. C’est cette certitude qui la pousse, en 2011, à fonder British & French Academy, une école qu’elle continue de piloter et de faire grandir aujourd’hui.',
        },
        {
          name: 'Gualbert Adohoueto',
          role: 'Cofondateur',
          photo: '/images/founder-gualbert.jpg',
          bio: 'Gualbert Adohoueto a mené sa carrière à la croisée du leadership et de l’innovation, œuvrant dans l’éducation, la santé, le commerce et l’industrie pour accompagner un développement durable en Afrique de l’Ouest. Lorsque Charlotte lui confie son ambition pour l’éducation des enfants de Cotonou, il y retrouve la même exigence qui a toujours guidé son propre parcours. Convaincu par cette vision, il choisit de la soutenir dans cette aventure, lui apportant la confiance et les encouragements nécessaires.',
        },
      ],
      accreditationsKicker: 'Reconnaissance officielle',
      accreditationsTitle: 'Agréée au niveau national, reconnue à l’international',
      accreditations: [
        {
          title: 'Agrément National',
          text: 'British & French Academy est officiellement reconnue par le Gouvernement du Bénin. Notre agrément est validé par décret ministériel du Ministère de l’Enseignement Maternel et Primaire (MEMP) pour l’école primaire, ainsi que par le Ministère de l’Enseignement Secondaire, Technique et de la Formation Professionnelle (MESTFP) pour l’enseignement secondaire. Faites confiance à notre établissement agréé pour offrir à vos enfants un parcours d’excellence académique.',
        },
        {
          title: 'École Accréditée Cambridge International',
          text: 'Notre école est un établissement Cambridge International agréé, habilité à proposer les programmes et qualifications du Cambridge Pathway. Nous sommes fiers de faire partie de la plus grande communauté scolaire mondiale.',
        },
      ],
      partnersKicker: 'Accréditations & partenaires',
      partnersTitle: 'Reconnue au-delà de nos murs',
      partnersIntro: 'British & French Academy est fière d’être affiliée aux institutions et organismes d’accréditation suivants.',
      partners: [
        { name: 'Cambridge International', logo: '/images/cambridge-international.png' },
        { name: 'SAT', logo: '/images/sat.png' },
        { name: 'British Council', logo: '/images/british-council.jpg' },
        { name: 'IronSecur', logo: '/images/ironsecur.jpeg' },
        { name: 'Iteb Africa', logo: '/images/iteb-africa.png' },
      ],
      mottoTitle: 'Notre devise',
      mottoText:
        'Lux Mundi et Sal Terrae : « la Lumière du monde et le Sel de la terre ». Un appel à vivre avec un sens : apporter la lumière là où règne la confusion, et préserver ce qui est bon dans notre communauté.',
    },
    programs: {
      title: 'Programme Classique',
      kicker: 'Ce que nous enseignons',
      intro:
        "Un parcours bilingue continu, de la maternelle jusqu'au secondaire, en anglais et en français.",
      readMoreLabel: 'Lire la suite',
      closeLabel: 'Fermer',
      items: [
        {
          title: 'Maternelle',
          text: 'À British & French Academy (BRIF), l’enfant commence dès la Pré-Maternelle. Plus l’enfant est jeune, plus l’assimilation du vocabulaire et de la grammaire se fait rapidement. Selon Claude Hagège, linguiste et professeur au Collège de France, la capacité d’apprentissage des langues atteint son apogée entre 3 et 4 ans. C’est à cet âge que les capacités de mimétisme, sur lesquelles repose l’essentiel de l’apprentissage d’une langue, sont à leur maximum.',
        },
        {
          title: 'Primaire',
          text: 'Le cycle primaire à BRIF constitue une étape essentielle dans la construction des savoirs, des méthodes de travail et de la personnalité de chaque élève.',
          more: [
            'Comme pour les Maternelles, l’effectif est planifié pour 15 enfants maximum par classe. Cette disposition permet le suivi personnalisé de chaque élève. Chaque Professeur d’école est anglophone et garde sa classe. Il exerce le programme British. Un deuxième Professeur, francophone, intervient avec des matières conformes au programme Français.',
            'Les élèves sont pris en charge dans le pur programme British. Ils s’activent avec bonheur autour des cours d’Anglais, de Maths et de Sciences, relayés par le Français et les Mathématiques issus du pur programme Français.',
            'Les autres matières classiques sont enseignées dans les deux langues.',
            'Ici aussi, les activités sportives viennent égayer les élèves, leur communiquant très tôt le goût pour le sport et des vocations.',
            'Au CM2, renforcement du programme Français pour les candidats à l’examen du CEP Béninois. Ici, il est opportun de rappeler que, depuis son avènement en 2011, l’école British & French Academy n’a pas connu un seul échec de candidat pour les examens du CEP, du BEPC (Programme Français) et pour les examens du BECE et du Baccalauréat (Programme Français Anglais) !',
          ],
        },
        { title: 'Secondaire Premier Cycle', text: 'Le Secondaire est caractérisé par le 1er cycle ou Collège, puis le 2nd cycle ou Lycée. Entre les deux cycles, interviennent les examens anglais du BECE (l’équivalent français du BEPC).' },
        { title: 'Secondaire Deuxi\u00e8me Cycle', text: 'Le Lyc\u00e9e est sanctionn\u00e9 par le BACCALAUREATE (Baccalaur\u00e9at) avant l\u2019entr\u00e9e au COLLEGE (Universit\u00e9).' },
      ],
    },
    programsHub: {
      title: 'Programmes',
      kicker: 'Ce que nous enseignons',
      intro: "British & French Academy propose trois parcours sous un même toit, chacun préparant les élèves à un chemin d'excellence différent.",
      tracks: [
        {
          title: 'Programme Classique',
          text: 'Notre parcours bilingue fondamental, de la Maternelle au Secondaire Deuxième Cycle, alliant les cursus français et anglais sous un même toit.',
          routeKey: 'programsClassic',
        },
        {
          title: 'Programme International Cambridge',
          text: "Un parcours accrédité à l'international menant à l'IGCSE et aux A Levels, ouvrant les portes des universités du monde entier.",
          routeKey: 'programsCambridge',
        },
        {
          title: 'Programme Technique IMI',
          text: "La filière technique officielle du Bénin en Installation et Maintenance Informatique, qui prépare les élèves au monde professionnel.",
          routeKey: 'programsImi',
        },
      ],
      admissionsInfoKicker: 'Avant de postuler',
      admissionsInfoTitle: "Frais et Conditions d'Admission",
      admissionsInfoCards: [
        {
          title: 'Modalités de paiement',
          variant: 'light',
          items: [
            "Le paiement des frais scolaires s'effectue directement sur le compte bancaire de l'école. Il peut également se faire par Mobile Money.",
            'Les Parents doivent s’acquitter de 60 % au moins des frais de scolarité avant le démarrage des cours de l’enfant.',
            'Le paiement total des frais de scolarité avant ou au début de la Rentrée scolaire donne l’avantage d’une réduction de 5 %. Les réductions ne sont pas accordées sur les autres formes de paiement des frais scolaires.',
          ],
        },
        {
          title: 'Périodes de paiement',
          variant: 'gradient',
          items: [
            'À l’inscription • 1er Paiement : 60 % de la Scolarité + Inscription',
            'Mi-Novembre • 2ème Paiement : 20 % de la Scolarité',
            'Mi-Janvier • 3ème Paiement : solde des 20 % restant',
          ],
        },
        {
          title: 'Conditions d’acceptabilité',
          variant: 'gradient',
          items: [
            'Les nouveaux élèves sont soumis à un Test séparé pour le Niveau d’Anglais et pour le Niveau de Français.',
            'NOTA : Les enfants font leur entrée en classe de Maternelle 1 à l’âge de 3 ans révolus au 31 août.',
            'L’enfant de moins de 3 ans au 31 août ne peut entrer en Maternelle 1, au risque d’affecter considérablement son cursus et son épanouissement.',
            'CRÈCHE : 6 mois à 2 ans | PRÉMATERNELLE : 2-3 ans.',
          ],
        },
        {
          title: 'À fournir',
          variant: 'light',
          items: [
            'Fiche d’enregistrement dûment remplie et signée (ou Enregistrement en ligne) avec Paiement de 60 % de la Scolarité + Frais d’Inscription.',
            'Acte de Naissance de l’Enfant.',
            'Carnet de vaccination.',
            'Bulletins scolaires de l’Année précédente.',
            'Deux (2) photos d’identité (datant de moins de 6 mois).',
            'Une (1) Chemise Dossier à rabats (pas de couleur Noire).',
            'Trois (3) Porte-vues.',
            'Trois (3) paquets de feuilles A4 (80 G) ou la somme de 8 000 F par Enfant.',
          ],
        },
      ],
      curriculumKicker: 'Notre programme',
      curriculumTitle: 'De la crèche au Baccalauréat',
      curriculumIntro: 'Deux systèmes éducatifs complets, côte à côte. Découvrez la structure par âge, classe et évaluation de nos programmes britannique et français.',
    },
    programsCambridge: {
      title: 'Programme International Cambridge',
      kicker: 'Le Cambridge Pathway',
      intro: "Un programme rigoureux et reconnu à l'international, qui ouvre les portes des plus grandes universités du monde.",
      pathwayTitle: 'Le Cambridge Pathway',
      pathway: ['Maternelle', 'Primaire', 'Secondaire Premier Cycle', 'IGCSE', 'A Levels', 'Université'],
      highlightsTitle: 'Pourquoi les familles choisissent Cambridge',
      highlights: [
        {
          title: 'Reconnu dans le monde entier',
          text: 'Les qualifications Cambridge sont reconnues et respectées par les universités et les employeurs dans plus de 160 pays, offrant aux élèves un passeport pour étudier et travailler partout dans le monde.',
        },
        {
          title: 'Conçu pour une compréhension réelle',
          text: 'Le programme est conçu pour développer des compétences pour la vie, pas seulement la réussite aux examens : curiosité, communication assurée et pensée autonome.',
        },
        {
          title: 'Une communauté mondiale de confiance',
          text: "En tant qu'école accréditée Cambridge International, nous faisons partie de la plus grande communauté d'écoles Cambridge au monde, toutes soumises aux mêmes normes rigoureuses.",
        },
      ],
      universitiesTitle: 'Où vont nos diplômés',
      universities: [],
      ctaText: 'Prêt à découvrir le Cambridge Pathway pour votre enfant ?',
      ctaButton: 'Contacter les admissions',
    },
    programsImi: {
      title: 'Programme Technique IMI',
      kicker: 'La filière technique nationale du Bénin',
      sidenote: "L'IMI est une spécialité technique officielle du système éducatif de la République du Bénin, au sein de la filière Sciences et Techniques Industrielles (STI).",
      intro: "L'Installation et Maintenance Informatique (IMI) prépare les élèves à une entrée directe dans le monde professionnel de l'informatique, à travers un parcours technique de trois ans axé sur la pratique.",
      aboutTitle: "Qu'est-ce que l'IMI ?",
      aboutText: "IMI signifie Installation et Maintenance Informatique. Les élèves apprennent à installer, configurer et entretenir les systèmes informatiques, les réseaux et les équipements dont les entreprises et les foyers dépendent au quotidien.",
      skillsTitle: 'Ce que les élèves apprennent',
      skills: [
        'Montage et intégration de matériel informatique',
        'Diagnostic et résolution de pannes',
        'Installation, mise à jour et gestion de logiciels',
        'Configuration réseau (Active Directory, systèmes Windows et Linux)',
        'Vérification de la sécurité des systèmes',
        'Anglais technique',
      ],
      structureTitle: 'Structure du programme',
      structure: [
        { year: 'Seconde', text: 'Bases en mathématiques, bases de données, réseaux et déontologie professionnelle.' },
        { year: 'Première', text: 'Approfondissement technique en réseaux, programmation et législation.' },
        { year: 'Terminale', text: "Spécialisation finale, couronnée par l'examen obligatoire du DT IMI." },
      ],
      careersTitle: 'Débouchés professionnels',
      careers: ['Administrateur réseaux & systèmes', 'Auditeur en sécurité', 'Gestionnaire de parc informatique', 'Administrateur de bases de données', "Développeur d'applications"],
      certificationTitle: "Certification & poursuite d'études",
      certificationText: 'Les diplômés obtiennent le Diplôme de Technicien (DT) en IMI, et peuvent poursuivre vers des licences professionnelles et des masters en informatique.',
      ctaText: "Intéressé par une formation technique concrète et tournée vers l'emploi ?",
      ctaButton: 'Contacter les admissions',
    },
    life: {
      title: 'Vie scolaire',
      kicker: 'La vie à la BRIF',
      intro:
        "L'école, c'est bien plus que des cours. Ce sont des amitiés, des découvertes et la construction de soi.",
      body: [
        "De la première à la dernière sonnerie, notre campus vibre d'activité. Les élèves passent des salles de classe aux terrains de sport et aux coins de lecture, toujours au sein d'une communauté qui ressemble à une famille.",
        "Les clubs et les activités offrent à chaque enfant une occasion de briller, sur le terrain, sur scène, au laboratoire ou au service des autres. Le caractère se construit autant dans ces moments que dans les examens.",
      ],
      highlightsKicker: "La vie des élèves à l'école",
      highlightsTitle: 'Activités Extrascolaires',
      highlights: [
        { title: 'Sport & jeu', text: 'Football, athlétisme et jeux d’équipe qui développent la forme et l’amitié.', imageAlt: 'Un élève de la BRIF s’apprête à frapper le ballon lors d’un entraînement de football sur le terrain de l’école, en tenue British & French Academy.' },
        { title: 'Arts & culture', text: 'Musique, théâtre et arts visuels qui célèbrent deux cultures.', imageAlt: 'Deux élèves de la BRIF en tenue traditionnelle s’expriment devant le public lors d’une journée culturelle.' },
        { title: 'Clubs & sociétés', text: 'Du débat au codage, un espace pour chaque passion.', imageAlt: 'Une élève de la BRIF tient un drone quadricoptère qu’elle a construit dans le cadre d’un projet technologique scolaire.' },
        { title: 'Service & valeurs', text: 'Des projets qui relient les élèves à leur communauté à Cotonou.', imageAlt: 'Des élèves de la BRIF participent à une formation pratique aux premiers secours animée par des instructeurs de la Croix-Rouge Béninoise.' },
      ],
    },
    news: {
      title: 'Actualités',
      kicker: "De l'Académie",
      intro: 'Annonces, événements et histoires de notre communauté.',
      readMore: 'Lire la suite',
    },
    admissions: {
      title: 'Admissions',
      kicker: 'Rejoignez-nous',
      intro:
        "Nous accueillons les familles qui souhaitent une éducation bilingue et porteuse de valeurs pour leurs enfants. Voici comment commencer.",
      stepsTitle: 'Comment postuler',
      steps: [
        { n: '01', title: 'Nous contacter', text: 'Contactez-nous pour manifester votre intérêt et poser vos questions. Avec plaisir, en anglais ou en français.' },
        { n: '02', title: "Visiter l'école", text: 'Venez découvrir le campus, rencontrer nos enseignants et ressentir l\u2019esprit de la communauté.' },
        { n: '03', title: 'Déposer un dossier', text: 'Remplissez le formulaire d\u2019inscription et fournissez les bulletins précédents de votre enfant.' },
        { n: '04', title: 'Évaluation & accueil', text: 'Une évaluation bienveillante nous aide à bien orienter votre enfant. Puis nous vous accueillons dans la famille BRIF.' },
      ],
      faqKicker: 'FAQ',
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Quels âges accueillez-vous ?', a: 'Nous accueillons les élèves de la maternelle jusqu\u2019à la fin du secondaire.' },
        { q: 'Mon enfant doit-il parler les deux langues ?', a: 'Non. Nous accompagnons les élèves venant d\u2019un milieu anglophone ou francophone et développons l\u2019aisance avec le temps.' },
        { q: 'Quand peut-on postuler ?', a: 'Les candidatures sont acceptées toute l\u2019année, selon les places disponibles. Contactez-nous pour vérifier.' },
        { q: "Mon enfant peut-il effectuer un transfert en cours d'année ?", a: "Oui, sous réserve de disponibilité. Contactez notre équipe des admissions pour connaître les places disponibles dans le niveau de votre enfant." },
        { q: 'Comment organiser une visite ?', a: 'Utilisez la page contact ou appelez le secrétariat, et nous fixerons un rendez-vous.' },
        { q: 'Quelle est la structure des frais de scolarité ?', a: "Les frais de scolarité sont payés en trois versements : 60 % à l'inscription, 20 % à la mi-novembre et 20 % à la mi-janvier. Les familles qui règlent l'intégralité à l'inscription bénéficient d'une réduction de 5 %. Pour la liste exacte des documents requis et les dates limites d'âge (dont la date limite du 31 août pour la Maternelle 1), consultez la section « Frais et Conditions d'Admission » de la page Programmes." },
        { q: 'Quand débute l’année scolaire et quand se termine-t-elle ?', a: 'L’année scolaire 2026-2027 débute le 14 septembre 2026. La date de fin sera confirmée prochainement.', linkKey: 'parentsCalendar', linkLabel: 'Voir le calendrier scolaire' },
        { q: 'Quels sont les horaires de l’école ?', a: 'Les cours débutent dès 7h30 et se terminent à 15h30.' },
        { q: 'Que sont les réunions de l’APE ?', a: 'Les réunions de l’Association des Parents d’Élèves (APE) sont des réunions annuelles, organisées généralement environ un mois après la rentrée, qui rassemblent les parents/tuteurs, les enseignants et la direction de l’école. Pendant ces réunions d’une durée de deux heures, la direction présente l’école et ses objectifs aux parents, avant de répondre à leurs questions.' },
        { q: 'L’école propose-t-elle un service de transport ?', a: 'Oui, l’école dispose de bus pour le transport des élèves. De plus, l’école est partenaire d’un service de transport avec lequel les parents/tuteurs peuvent échanger des informations relatives au transport de leurs enfants.' },
        { q: 'L’école dispose-t-elle d’une cantine ?', a: 'Oui, un service de cantine est disponible sur place et propose une variété de repas.' },
        { q: 'L’école dispose-t-elle d’internat ?', a: 'Non, l’école ne propose pas actuellement de service d’internat.' },
      ],
      ctaText: 'Prêt à faire le premier pas ?',
      ctaButton: 'Contacter les admissions',
    },
    parentsHub: {
      kicker: 'Pour les familles de la BRIF',
      title: 'Parents',
      intro: 'Un espace unique pour les formulaires, listes et dates qui reviennent le plus souvent une fois votre enfant inscrit.',
      communityPhotoAlt: 'Parents et personnel réunis lors d’un évènement de la BRIF.',
      communityPhotoCaption: 'Parents et personnel lors d’un évènement de la BRIF.',
      documentsTitle: 'Documents et listes',
      documents: [
        { title: 'Listes de fournitures scolaires', description: 'Listes de fournitures par niveau, pour les programmes anglais et français.', status: 'comingSoon' },
        { title: 'Uniforme et tenue vestimentaire', description: 'La tenue au quotidien et pour les occasions spéciales.', status: 'comingSoon' },
        { title: 'Règlement Intérieur', description: 'Le règlement intérieur de l’école, remis et signé à l’inscription.', status: 'available', href: '/fr/parents/reglement-interieur/', linkLabel: 'Consulter', external: false },
        { title: 'Transport et circuits de bus', description: 'Les circuits, arrêts, et comment organiser le transport de votre enfant.', status: 'comingSoon' },
        { title: 'Informations sur la cantine', description: 'Les menus et le fonctionnement de la cantine.', status: 'comingSoon' },
      ],
      comingSoonLabel: 'Bientôt disponible',
      downloadLabel: 'Télécharger',
      canteenTitle: 'Un aperçu de la cantine',
      canteenIntro: 'Le menu complet arrive bientôt — en attendant, voici un aperçu d’un service à la cantine.',
      canteenPhotoAlts: [
        'Un membre du personnel sert un repas chaud à la cantine de la BRIF.',
        'Un plat de la cantine, avec un accompagnement et une sauce à la viande.',
        'Un plat de la cantine, avec une sauce à la viande et aux légumes.',
      ],
      calendarTeaserKicker: 'Dates clés',
      calendarTeaserTitle: 'Calendrier scolaire',
      calendarTeaserText: 'Dates de rentrée, vacances et évènements clés de l’année scolaire.',
      calendarTeaserButton: 'Voir le calendrier',
    },
    parentsCalendar: {
      kicker: 'Pour les familles de la BRIF',
      title: 'Calendrier scolaire',
      intro: 'Les dates clés confirmées pour l’année scolaire. D’autres dates — vacances, examens et réunions APE — seront ajoutées ici au fur et à mesure qu’elles seront confirmées.',
      typeLabels: { term: 'Rentrée', holiday: 'Vacances', exam: 'Examen', pta: 'Réunion APE', event: 'Évènement' },
      backToParents: 'Retour à Parents',
    },
    reglementInterieur: {
      kicker: 'Pour les familles de la BRIF',
      title: 'Règlement Intérieur',
      intro: 'Le Règlement Intérieur officiel, présenté ici dans le document bilingue original à titre de référence. Chaque parent en prend connaissance et l’accepte lors de l’inscription.',
      backToParents: 'Retour à Parents',
    },
    contact: {
      title: 'Contact',
      kicker: 'Nous contacter',
      intro: 'Nous serions ravis d\u2019avoir de vos nouvelles, en anglais ou en français.',
      formName: 'Votre nom',
      formEmail: 'Adresse e-mail',
      formSubject: 'Objet',
      formMessage: 'Message',
      formSubmit: 'Envoyer le message',
      formNote: 'Ce formulaire ouvre votre application e-mail. Vous pouvez aussi nous écrire directement.',
      detailsTitle: "Coordonnées de l'école",
      bookVisitButton: "Réserver une visite de l'école",
      addressLabel: 'Adresse',
      emailLabel: 'E-mail',
      phoneLabel: 'Téléphone',
      hoursLabel: 'Heures d\u2019ouverture',
      hours: 'Du lundi au vendredi, 8h00 – 16h00',
    },
    notFound: {
      title: 'Page introuvable',
      text: 'La page que vous cherchez a été déplacée ou n\u2019a jamais existé. Revenons sur le bon chemin.',
      button: 'Retour à l\u2019accueil',
    },
    fbModule: {
      kicker: 'Restez connectés',
      title: 'Suivez-nous sur Facebook',
      text: 'Découvrez nos dernières photos, événements et annonces en temps réel, et rejoignez la conversation avec notre communauté.',
      button: 'Voir notre page Facebook',
    },
    social: {
      kicker: 'Restez connectés',
      title: 'Suivez notre communauté',
      text: 'Découvrez nos dernières photos, événements et annonces en temps réel, et rejoignez la conversation avec notre communauté sur Facebook et Instagram.',
      fbButton: 'Voir notre page Facebook',
      igButton: 'Nous suivre sur Instagram',
      handleFb: '@brif',
      handleIg: '@brif.one',
    },
    enrol: {
      title: 'Demande d\u2019inscription',
      kicker: 'Rejoindre BRIF',
      intro:
        "Vous souhaitez inscrire votre enfant à British & French Academy ? Renseignez vos coordonnées ci-dessous et notre équipe des admissions vous recontactera. Les champs marqués * sont obligatoires.",
      parentName: 'Nom du parent / tuteur *',
      parentEmail: 'Adresse e-mail *',
      parentPhone: 'Numéro de téléphone *',
      childName: "Nom de l'enfant",
      childAge: "Âge de l'enfant",
      curriculum: 'Cursus souhaité',
      curriculumOptions: ['Sans préférence', 'Cursus anglais', 'Cursus français', 'Les deux'],
      entryYear: 'Rentrée souhaitée (année)',
      message: 'Souhaitez-vous nous préciser autre chose ?',
      submit: 'Envoyer la demande',
      note: 'Nous traitons vos informations avec soin et les utilisons uniquement pour répondre à votre demande.',
      successThanks: 'Merci. Votre demande a été envoyée. Notre équipe vous contactera bientôt.',
    },
    legal: {
      kicker: 'Informations légales',
      title: 'Mentions légales',
      publisherTitle: 'Éditeur',
      publisher: [
        { label: 'Nom', value: 'British & French Academy (BRIF)' },
        { label: 'Adresse', value: '06 BP 129, Quartier JAK, Cotonou, Littoral, République du Bénin' },
        { label: 'Téléphone', value: '+229 96 78 28 00' },
        { label: 'E-mail', value: 'info@brif.one' },
        { label: 'Responsable de la publication', value: 'Charlotte Frédérique K. De Souza' },
      ],
      hostingTitle: 'Hébergeur',
      hosting: [
        { label: 'Nom', value: 'OVH' },
        { label: 'Adresse', value: '2 Rue Kellermann, 59100 Roubaix, France' },
        { label: 'Téléphone', value: '+33 9 72 10 10 07' },
      ],
      sections: [
        {
          title: 'Propriété intellectuelle',
          text: 'L’ensemble du contenu de ce site, incluant les textes, graphismes, logos, images et autres éléments, est la propriété de BRIF ou de ses fournisseurs de contenu et est protégé par les lois internationales sur le droit d’auteur. Toute utilisation non autorisée du contenu de ce site est strictement interdite sans l’accord écrit préalable de BRIF.',
        },
        {
          title: 'Protection des données personnelles',
          text: 'BRIF s’engage à assurer la confidentialité et la protection des données personnelles. Toute information personnelle collectée via ce site sera utilisée exclusivement à des fins éducatives et administratives. Pour plus d’informations sur nos politiques de protection des données, veuillez consulter notre Politique de confidentialité.',
          linkKey: 'privacy',
          linkLabel: 'Consulter notre politique de confidentialité',
        },
        {
          title: 'Cookies',
          text: 'Ce site utilise des cookies afin d’améliorer l’expérience utilisateur et d’analyser le trafic du site. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies. Pour plus d’informations, veuillez consulter notre Politique de cookies.',
          linkKey: 'cookies',
          linkLabel: 'Consulter notre politique de cookies',
        },
        {
          title: 'Limitation de responsabilité',
          text: 'BRIF s’efforce de garantir l’exactitude et l’actualité des informations fournies sur ce site. Nous ne pouvons toutefois garantir l’exhaustivité ou l’exactitude de ces informations et déclinons toute responsabilité en cas d’erreurs ou d’omissions. Les utilisateurs sont invités à vérifier toute information avant de s’y fier.',
        },
      ],
    },
    privacy: {
      kicker: 'Informations légales',
      title: 'Politique de confidentialité',
      welcomeTitle: 'Bienvenue sur notre politique de confidentialité',
      lede: 'Votre vie privée est importante pour nous.',
      addressIntro: 'British & French Academy est située à l’adresse suivante :',
      intro: [
        'British & French Academy s’engage à respecter votre vie privée en ce qui concerne toute information que nous pourrions collecter dans le cadre de l’exploitation de notre site. Cette politique de confidentialité s’applique à https://brif.one (« nous », « notre » ou « https://brif.one »). Nous respectons votre vie privée et nous engageons à protéger toute information personnelle identifiable que vous pourriez nous fournir via le site. Nous avons adopté cette politique de confidentialité (« Politique de confidentialité ») afin d’expliquer quelles informations peuvent être collectées sur notre site, comment nous les utilisons et dans quelles circonstances nous pouvons les divulguer à des tiers. Cette politique de confidentialité s’applique uniquement aux informations que nous collectons sur le site et ne s’applique pas à la collecte d’informations provenant d’autres sources.',
        'Cette politique de confidentialité, ainsi que les conditions générales publiées sur notre site, définissent les règles générales régissant votre utilisation de notre site. Selon vos activités lors de votre visite, il pourra vous être demandé d’accepter des conditions supplémentaires.',
      ],
      sections: [
        {
          title: 'Visiteurs du site',
          body: [
            { text: 'Comme la plupart des exploitants de sites web, British & French Academy collecte des informations non identifiantes que les navigateurs et serveurs mettent habituellement à disposition, telles que le type de navigateur, la langue préférée, le site référent, ainsi que la date et l’heure de chaque requête. L’objectif de cette collecte est de mieux comprendre comment les visiteurs utilisent notre site. British & French Academy peut ponctuellement publier des informations agrégées non identifiantes, par exemple sous la forme d’un rapport sur les tendances d’utilisation du site.' },
          ],
        },
        {
          title: 'Collecte d’informations personnelles identifiables',
          body: [
            { text: 'Certains visiteurs du site de British & French Academy choisissent d’interagir avec nous d’une manière qui nécessite la collecte d’informations personnelles identifiables. La quantité et le type d’informations collectées dépendent de la nature de l’interaction. Par exemple, nous demandons aux visiteurs qui soumettent notre formulaire de demande d’inscription de fournir des informations telles que leur nom, leur adresse e-mail, leur numéro de téléphone et des renseignements sur leur enfant, afin que notre équipe des admissions puisse répondre à leur demande.' },
          ],
        },
        {
          title: 'Sécurité',
          body: [
            { text: 'La sécurité de vos informations personnelles est importante pour nous, mais aucune méthode de transmission sur Internet ni aucun procédé de stockage électronique n’est sûr à 100 %. Bien que nous nous efforcions d’utiliser des moyens commercialement acceptables pour protéger vos informations personnelles, nous ne pouvons garantir leur sécurité absolue.' },
          ],
        },
        {
          title: 'Liens vers des sites externes',
          body: [
            { text: 'Notre service peut contenir des liens vers des sites externes que nous n’exploitons pas. Si vous cliquez sur le lien d’un tiers, vous serez dirigé vers son site. Nous vous conseillons vivement de consulter la politique de confidentialité et les conditions générales de chaque site que vous visitez.' },
            { text: 'Nous n’exerçons aucun contrôle sur le contenu, les politiques de confidentialité ou les pratiques des sites, produits ou services de tiers, et déclinons toute responsabilité à cet égard.' },
          ],
        },
        {
          title: 'Statistiques agrégées',
          body: [
            { text: 'British & French Academy peut collecter des statistiques sur le comportement des visiteurs de son site. Ces informations peuvent être rendues publiques ou communiquées à des tiers. Toutefois, British & French Academy ne divulgue aucune information personnelle identifiante.' },
          ],
        },
        {
          title: 'Cookies',
          body: [
            { text: 'Le site de British & French Academy ne dépose lui-même aucun cookie destiné à suivre votre navigation. Les pages qui intègrent notre fil Facebook, comme la page Actualités, chargent un module fourni par Facebook (Meta Platforms, Inc.), susceptible de déposer ses propres cookies sur votre appareil. Nous ne contrôlons pas ces cookies, qui relèvent des politiques de confidentialité et de cookies propres à Facebook.' },
            { text: 'En continuant à naviguer sur notre site, vous reconnaissez que les pages intégrant cette fonctionnalité tierce peuvent déposer des cookies tel que décrit ci-dessus.' },
          ],
          linkKey: 'cookies',
          linkLabel: 'Consulter notre politique de cookies',
        },
        {
          title: 'Modifications de la politique de confidentialité',
          body: [
            { text: 'British & French Academy peut modifier sa politique de confidentialité de temps à autre, à sa seule discrétion. La plupart des modifications sont mineures. Nous encourageons les visiteurs à consulter régulièrement cette page. La poursuite de l’utilisation de ce site après toute modification de la politique de confidentialité vaut acceptation de ces modifications.' },
          ],
        },
        {
          title: 'Informations de contact',
          body: [
            { text: 'Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter par e-mail ou par téléphone.' },
          ],
        },
      ],
    },
    cookies: {
      kicker: 'Informations légales',
      title: 'Politique de cookies',
      sections: [
        {
          title: 'Que sont les cookies ?',
          body: [
            { text: 'Les cookies sont de petits fichiers texte déposés sur votre ordinateur ou appareil mobile par les sites que vous visitez. Ils permettent de collecter des informations sur vos habitudes de navigation et vos préférences, telles que les pages consultées, la date et l’heure de votre visite, ainsi que votre langue préférée.' },
          ],
        },
        {
          title: 'Pourquoi utilisons-nous des cookies ?',
          body: [
            { text: 'Ce site ne dépose lui-même aucun cookie pour vous connecter, mémoriser vos préférences ou suivre votre navigation. Par exemple, le sélecteur de langue EN/FR fonctionne via l’adresse de la page elle-même, et non via un cookie. Les seuls cookies susceptibles d’être déposés lors de votre visite proviennent d’une fonctionnalité tierce intégrée, décrite ci-dessous.' },
          ],
        },
        {
          title: 'Types de cookies',
          body: [
            { text: 'À titre indicatif, les cookies se répartissent généralement selon les catégories suivantes. Parmi elles, seuls les cookies tiers s’appliquent actuellement à ce site, via notre fil Facebook intégré.' },
            { label: 'Cookies de session', text: 'Ce sont des cookies temporaires supprimés à la fermeture du navigateur. Ils permettent de suivre les actions au cours d’une même visite sur un site.' },
            { label: 'Cookies persistants', text: 'Ces cookies restent sur l’appareil pendant une période plus longue, par exemple six mois ou un an. Ils permettent de mémoriser des préférences et des informations de connexion.' },
            { label: 'Cookies tiers', text: 'Ces cookies sont déposés par des services tiers intégrés à nos pages. Sur ce site, il s’agit du fil Facebook présent sur notre page Actualités, susceptible de déposer des cookies contrôlés par Facebook (Meta Platforms, Inc.), et non par nous.' },
          ],
        },
        {
          title: 'Gestion des cookies',
          body: [
            { text: 'Vous pouvez gérer les cookies via les paramètres de votre navigateur. La plupart des navigateurs vous permettent de bloquer ou de supprimer les cookies, mais cela peut affecter votre expérience sur notre site. Pour plus d’informations sur la gestion des cookies, veuillez consulter la documentation d’aide de votre navigateur.' },
            { label: 'Consentement', text: 'En utilisant notre site, vous consentez à l’utilisation de cookies telle que décrite dans cette politique. Si vous ne consentez pas, vous pouvez choisir de désactiver les cookies dans les paramètres de votre navigateur.' },
          ],
        },
        {
          title: 'Modifications de cette politique',
          body: [
            { text: 'Nous pouvons mettre à jour cette politique de cookies de temps à autre. Toute modification sera publiée sur cette page, et nous vous encourageons à la consulter régulièrement pour rester informé.' },
          ],
        },
        {
          title: 'Nous contacter',
          body: [
            { text: 'Pour toute question ou préoccupation concernant notre utilisation des cookies, veuillez nous contacter à l’adresse info@brif.one.' },
          ],
        },
      ],
    },
  },
};

// Shared news items (dates are neutral; edit freely).
export const news = {
  en: [
    { date: '2025-09-02', title: 'Welcome back for the new school year', excerpt: 'Our campus reopens its doors to returning and new families. Here is what to expect in the term ahead.' },
    { date: '2025-07-10', title: 'Celebrating our end-of-year showcase', excerpt: 'Students shared their work in arts, science, and sport at our annual community celebration.' },
    { date: '2025-05-18', title: 'BRIF students shine in regional competition', excerpt: 'A proud moment as our team represented the Academy with distinction and sportsmanship.' },
  ],
  fr: [
    { date: '2025-09-02', title: 'Bonne rentrée pour la nouvelle année scolaire', excerpt: 'Notre campus rouvre ses portes aux familles anciennes et nouvelles. Voici ce qui vous attend ce trimestre.' },
    { date: '2025-07-10', title: 'Notre fête de fin d\u2019année', excerpt: 'Les élèves ont présenté leurs travaux en arts, en sciences et en sport lors de notre célébration annuelle.' },
    { date: '2025-05-18', title: 'Les élèves de la BRIF brillent en compétition régionale', excerpt: 'Un moment de fierté : notre équipe a représenté l\u2019Académie avec distinction et fair-play.' },
  ],
};
