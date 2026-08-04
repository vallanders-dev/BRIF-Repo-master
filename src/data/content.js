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
  // Formspree / Web3Forms endpoint — paste your key here to make the form live.
  // Until set, the enrolment form falls back to a mailto: link.
  formEndpoint: '',
};

export const content = {
  en: {
    home: {
      heroKicker: 'Bilingual education · Since 2011',
      heroTitle: 'Two languages. One community. Every child.',
      heroText:
        'British & French Academy is a bilingual secondary school in Cotonou where students learn to think, question, and lead — in English and in French.',
      heroCtaPrimary: 'Explore admissions',
      heroCtaSecondary: 'Discover the school',
      statLabel: 'A school that grows with your child',
      stats: [
        { value: '2011', label: 'Founded in Cotonou' },
        { value: '2', label: 'Full curricula, English & French' },
        { value: '5+', label: 'Accreditations', anchor: 'partners' },
        { value: '99%', label: 'Exam success, national & international' },
      ],
      pillarsKicker: 'Why families choose us',
      pillarsTitle: 'An education built on four promises',
      pillars: [
        {
          title: 'Truly bilingual',
          text: 'Students work confidently across English and French every day — not as subjects, but as the languages of real learning.',
        },
        {
          title: 'Small classes, close attention',
          text: 'Teachers know every student by name. We keep classes small so no child slips through the cracks.',
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
      aboutKicker: 'A school founded by parents',
      aboutTitle: 'Born from what families in Cotonou truly needed',
      aboutText:
        'British & French Academy was founded by parents. At a time when no school in Cotonou offered a genuinely complete education in both worlds, they wanted something different: a fully Francophone curriculum and a fully Anglophone one, side by side — so that every child could feel a native connection to the French-speaking and the English-speaking world alike. That conviction is still what we build on today.',
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
      intro:
        'British & French Academy was founded in 2011 — not by a company or a ministry, but by parents who wanted something that did not yet exist in Cotonou.',
      body: [
        'In those years, families faced a hard choice. A child could follow a French curriculum, or an English one — but rarely both done properly, and rarely in a way that let a child feel a true, native connection to either world. The parents who founded this school believed their children deserved better: not a watered-down mix, but a fully Francophone education and a fully Anglophone education, held together under one roof.',
        'That was the founding conviction, and it still guides everything. We are a school where a child can belong to the French-speaking world and the English-speaking world at once — reading, thinking, and dreaming in both. What began as the hope of a handful of families has grown into a community that has kept that promise for more than a decade.',
        'Through that growth, one thing has never changed: we know our students, and we teach them as individuals. We form young people of character — curious, kind, and ready to contribute to Cotonou and to the wider world.',
      ],
      foundersKicker: 'Founded by',
      foundersTitle: 'Two founders, one conviction',
      founders: [
        {
          name: 'Gualbert Adohoueto',
          role: 'Co-founder',
          photo: '/images/founder-gualbert.jpg',
          bio: "Gualbert Adohoueto has spent his career at the intersection of leadership and innovation — working across education, health, commerce, and industry to help drive sustainable development throughout West Africa. It was that same conviction, that Cotonou's children deserved an education without compromise, which led him, alongside his wife Charlotte, to found British & French Academy in 2011.",
        },
        {
          name: 'Charlotte Frédérique De Souza',
          role: 'Co-founder',
          photo: '/images/founder-frederique.jpeg',
          bio: 'Charlotte Frédérique De Souza studied literary arts before going on to pursue language translation — a path that left her with a lifelong sensitivity to language and how it shapes a child’s sense of belonging. That understanding became a conviction: that families in the region deserved a school where children could feel truly at home in both English and French. Alongside her husband Gualbert, she turned that conviction into British & French Academy.',
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
      valuesTitle: 'What we stand for',
      values: [
        { title: 'Integrity', text: 'We do what is right, especially when no one is watching.' },
        { title: 'Excellence', text: 'We ask every student to bring their best, and we help them get there.' },
        { title: 'Community', text: 'Founded by families, we still look after one another, parents and staff alike.' },
        { title: 'Service', text: 'To be salt and light means to give back to Cotonou and beyond.' },
      ],
      mottoTitle: 'Our motto',
      mottoText:
        'Lux Mundi et Sal Terrae — "the Light of the World and the Salt of the Earth." It is a call to live with purpose: to bring light where there is confusion, and to preserve what is good in our community.',
    },
    programs: {
      title: 'Programmes',
      kicker: 'What we teach',
      intro:
        'A continuous bilingual pathway from the early years through to secondary graduation, taught in English and French.',
      items: [
        { title: 'Early Years', text: 'A gentle, playful start where young children build confidence in both languages through stories, songs, and discovery.', image: '/images/1.jpeg' },
        { title: 'Primary School', text: 'Strong foundations in literacy and numeracy across both languages, alongside science, arts, and the beginnings of critical thinking.', image: '/images/2.jpeg' },
        { title: 'Lower Secondary', text: 'A broad curriculum that stretches every student, with growing independence and deeper subject specialism.', image: '/images/3.jpeg' },
        { title: 'Upper Secondary', text: 'Focused preparation for examinations and university, with guidance on pathways in Benin and abroad.', image: '/images/4.jpeg' },
        { title: 'Languages', text: 'English and French at the core, with structured support for students joining from either language background.', image: '/images/5.jpeg' },
        { title: 'Beyond the classroom', text: 'Sports, arts, clubs, and service projects that build character and belonging.', image: '/images/6.jpeg' },
      ],
    },
    life: {
      title: 'Student Life',
      kicker: 'Life at BRIF',
      intro:
        'School is more than lessons. It is friendships, discovery, and finding out who you are.',
      body: [
        'From the first bell to the last, our campus hums with activity. Students move between classrooms, playing fields, and quiet corners for reading — always in a community that feels like family.',
        'Clubs and activities give every child a place to shine, whether on the pitch, on the stage, in the science lab, or in service to others. We believe character is built as much in these moments as in any exam.',
      ],
      highlightsTitle: 'A day in the life',
      highlights: [
        { title: 'Sports & play', text: 'Football, athletics, and team games that build fitness and friendship.' },
        { title: 'Arts & culture', text: 'Music, drama, and visual arts that celebrate two cultures.' },
        { title: 'Clubs & societies', text: 'From debate to coding, spaces for every interest to grow.' },
        { title: 'Service & values', text: 'Projects that connect students to their community in Cotonou.' },
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
        { n: '02', title: 'Visit the school', text: 'Come and see the campus, meet our teachers, and get a feel for the community.' },
        { n: '03', title: 'Submit an application', text: 'Complete the application form and provide your child\u2019s previous school records.' },
        { n: '04', title: 'Assessment & welcome', text: 'A friendly assessment helps us place your child well. Then we welcome you to the BRIF family.' },
      ],
      faqTitle: 'Common questions',
      faqs: [
        { q: 'What ages do you accept?', a: 'We welcome students from the early years through to the end of secondary school.' },
        { q: 'Does my child need to speak both languages?', a: 'No. We support students joining from either an English or French background and build fluency over time.' },
        { q: 'When can we apply?', a: 'Applications are welcome year-round, subject to availability. Contact us to check current openings.' },
        { q: 'How do I arrange a visit?', a: 'Use the contact page or call the school office, and we will arrange a convenient time.' },
        { q: 'What is the fee structure?', a: 'Contact us to get information on fees.' },
        { q: 'What are the school hours?', a: 'School session begins at as early as 7:30 and ends at 15:30.' },
        { q: 'What are PTA meetings?', a: "Parent Teacher Association (PTA) meetings are annual meetings, usually about a month after resumption, which bring together parents/guardians, teachers, and the school's administration. During these 2 hour-long meetings, the school administration presents the school, and its objectives to parents, after which questions from parents are answered." },
        { q: 'Does the school have a transport facility?', a: 'Yes, the school has buses for the transport of students. In addition, the school partners with a transport facility with which parents/guardians can discuss information relative to transportation of their children.' },
        { q: 'Does the school have a canteen?', a: 'Yes, canteen services are available on our premises and offer a variety of meals.' },
      ],
      ctaText: 'Ready to take the first step?',
      ctaButton: 'Contact admissions',
    },
    contact: {
      title: 'Contact',
      kicker: 'Get in touch',
      intro: 'We would love to hear from you — in English or in French.',
      formName: 'Your name',
      formEmail: 'Email address',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send message',
      formNote: 'This form opens your email app. You can also write to us directly.',
      detailsTitle: 'School details',
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
      text: 'See our latest photos, events, and announcements as they happen — and join the conversation with our community.',
      button: 'Visit our Facebook page',
    },
    social: {
      kicker: 'Stay connected',
      title: 'Follow our community',
      text: 'See our latest photos, events, and announcements as they happen — and join the conversation with our community on Facebook and Instagram.',
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
      successThanks: 'Thank you — your enquiry has been sent. Our team will contact you soon.',
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
            { text: 'This website does not set its own cookies to log you in, remember your preferences, or track your usage — for example, the EN/FR language switcher works through the page address itself, not a cookie. The only cookies that may be set when visiting this site come from an embedded third-party feature, described below.' },
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
        "British & French Academy est une école secondaire bilingue à Cotonou où les élèves apprennent à réfléchir, à questionner et à s'affirmer — en anglais et en français.",
      heroCtaPrimary: 'Découvrir les admissions',
      heroCtaSecondary: "Découvrir l'école",
      statLabel: 'Une école qui grandit avec votre enfant',
      stats: [
        { value: '2011', label: 'Fondée à Cotonou' },
        { value: '2', label: 'Cursus complets, anglais & français' },
        { value: '5+', label: 'Accréditations', anchor: 'partners' },
        { value: '99%', label: 'Réussite aux examens, nationale & internationale' },
      ],
      pillarsKicker: 'Pourquoi les familles nous choisissent',
      pillarsTitle: 'Une éducation fondée sur quatre promesses',
      pillars: [
        {
          title: 'Véritablement bilingue',
          text: "Les élèves évoluent avec aisance en anglais et en français chaque jour — non comme des matières, mais comme les langues d'un vrai apprentissage.",
        },
        {
          title: 'Petits effectifs, grande attention',
          text: 'Les enseignants connaissent chaque élève par son nom. Des classes réduites pour que personne ne soit laissé de côté.',
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
      aboutKicker: 'Une école fondée par des parents',
      aboutTitle: 'Née des vrais besoins des familles de Cotonou',
      aboutText:
        "British & French Academy a été fondée par des parents. À une époque où aucune école de Cotonou n'offrait une éducation véritablement complète dans les deux mondes, ils voulaient autre chose : un cursus entièrement francophone et un cursus entièrement anglophone, côte à côte — afin que chaque enfant puisse ressentir un lien naturel avec le monde francophone comme avec le monde anglophone. Cette conviction reste aujourd'hui notre fondation.",
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
      intro:
        "British & French Academy a été fondée en 2011 — non par une entreprise ou un ministère, mais par des parents qui voulaient ce qui n'existait pas encore à Cotonou.",
      body: [
        "À cette époque, les familles faisaient face à un choix difficile. Un enfant pouvait suivre un cursus français, ou un cursus anglais — mais rarement les deux menés correctement, et rarement d'une manière qui lui permette de ressentir un lien véritable et naturel avec l'un ou l'autre monde. Les parents fondateurs de cette école pensaient que leurs enfants méritaient mieux : non pas un mélange dilué, mais une éducation entièrement francophone et une éducation entièrement anglophone, réunies sous un même toit.",
        "Telle était la conviction fondatrice, et elle guide encore tout. Nous sommes une école où un enfant peut appartenir au monde francophone et au monde anglophone à la fois — lire, penser et rêver dans les deux. Ce qui a commencé comme l'espoir de quelques familles est devenu une communauté qui tient cette promesse depuis plus de dix ans.",
        "Au fil de cette croissance, une chose n'a jamais changé : nous connaissons nos élèves et nous les accompagnons comme des individus. Nous formons des jeunes de caractère — curieux, bienveillants et prêts à contribuer à Cotonou et au monde.",
      ],
      valuesTitle: 'Nos valeurs',
      values: [
        { title: 'Intégrité', text: 'Faire ce qui est juste, surtout lorsque personne ne regarde.' },
        { title: 'Excellence', text: 'Demander à chaque élève de donner le meilleur, et l\u2019aider à y parvenir.' },
        { title: 'Communauté', text: 'Fondée par des familles, nous prenons soin les uns des autres, parents et personnel.' },
        { title: 'Service', text: 'Être sel et lumière, c\u2019est rendre à Cotonou et au-delà.' },
      ],
      foundersKicker: 'Fondée par',
      foundersTitle: 'Deux fondateurs, une conviction',
      founders: [
        {
          name: 'Gualbert Adohoueto',
          role: 'Cofondateur',
          photo: '/images/founder-gualbert.jpg',
          bio: 'Gualbert Adohoueto a mené sa carrière à la croisée du leadership et de l’innovation, œuvrant dans l’éducation, la santé, le commerce et l’industrie pour accompagner un développement durable en Afrique de l’Ouest. C’est cette même conviction — que les enfants de Cotonou méritaient une éducation sans compromis — qui l’a conduit, avec son épouse Charlotte, à fonder British & French Academy en 2011.',
        },
        {
          name: 'Charlotte Frédérique De Souza',
          role: 'Cofondatrice',
          photo: '/images/founder-frederique.jpeg',
          bio: 'Charlotte Frédérique De Souza a étudié les lettres avant de se tourner vers la traduction — un parcours qui lui a donné une sensibilité durable à la langue et à la façon dont elle façonne le sentiment d’appartenance d’un enfant. De cette conviction est née une certitude : les familles de la région méritaient une école où chaque enfant se sente pleinement chez lui, en anglais comme en français. Avec son époux Gualbert, elle a transformé cette conviction en British & French Academy.',
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
        'Lux Mundi et Sal Terrae — « la Lumière du monde et le Sel de la terre ». Un appel à vivre avec un sens : apporter la lumière là où règne la confusion, et préserver ce qui est bon dans notre communauté.',
    },
    programs: {
      title: 'Programmes',
      kicker: 'Ce que nous enseignons',
      intro:
        "Un parcours bilingue continu, de la maternelle jusqu'au secondaire, en anglais et en français.",
      items: [
        { title: 'Maternelle', text: 'Un début doux et ludique où les jeunes enfants prennent confiance dans les deux langues à travers histoires, chansons et découvertes.', image: '/images/1.jpeg' },
        { title: 'École primaire', text: 'Des bases solides en lecture, écriture et calcul dans les deux langues, avec sciences, arts et éveil de l\u2019esprit critique.', image: '/images/2.jpeg' },
        { title: 'Collège', text: 'Un programme large qui stimule chaque élève, avec une autonomie croissante et une spécialisation approfondie.', image: '/images/3.jpeg' },
        { title: 'Lycée', text: 'Une préparation ciblée aux examens et à l\u2019université, avec un accompagnement vers le Bénin et l\u2019étranger.', image: '/images/4.jpeg' },
        { title: 'Langues', text: 'L\u2019anglais et le français au cœur du parcours, avec un soutien structuré selon la langue d\u2019origine de l\u2019élève.', image: '/images/5.jpeg' },
        { title: 'Au-delà de la classe', text: 'Sports, arts, clubs et projets de service qui forgent le caractère et l\u2019appartenance.', image: '/images/6.jpeg' },
      ],
    },
    life: {
      title: 'Vie scolaire',
      kicker: 'La vie à la BRIF',
      intro:
        "L'école, c'est bien plus que des cours. Ce sont des amitiés, des découvertes et la construction de soi.",
      body: [
        "De la première à la dernière sonnerie, notre campus vibre d'activité. Les élèves passent des salles de classe aux terrains de sport et aux coins de lecture — toujours au sein d'une communauté qui ressemble à une famille.",
        "Les clubs et les activités offrent à chaque enfant une occasion de briller, sur le terrain, sur scène, au laboratoire ou au service des autres. Le caractère se construit autant dans ces moments que dans les examens.",
      ],
      highlightsTitle: 'Une journée à la BRIF',
      highlights: [
        { title: 'Sport & jeu', text: 'Football, athlétisme et jeux d\u2019équipe qui développent la forme et l\u2019amitié.' },
        { title: 'Arts & culture', text: 'Musique, théâtre et arts visuels qui célèbrent deux cultures.' },
        { title: 'Clubs & sociétés', text: 'Du débat au codage, un espace pour chaque passion.' },
        { title: 'Service & valeurs', text: 'Des projets qui relient les élèves à leur communauté à Cotonou.' },
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
      faqTitle: 'Questions fréquentes',
      faqs: [
        { q: 'Quels âges accueillez-vous ?', a: 'Nous accueillons les élèves de la maternelle jusqu\u2019à la fin du secondaire.' },
        { q: 'Mon enfant doit-il parler les deux langues ?', a: 'Non. Nous accompagnons les élèves venant d\u2019un milieu anglophone ou francophone et développons l\u2019aisance avec le temps.' },
        { q: 'Quand peut-on postuler ?', a: 'Les candidatures sont acceptées toute l\u2019année, selon les places disponibles. Contactez-nous pour vérifier.' },
        { q: 'Comment organiser une visite ?', a: 'Utilisez la page contact ou appelez le secrétariat, et nous fixerons un rendez-vous.' },
        { q: 'Quelle est la structure des frais de scolarité ?', a: 'Contactez-nous pour obtenir des informations sur les frais de scolarité.' },
        { q: 'Quels sont les horaires de l’école ?', a: 'Les cours débutent dès 7h30 et se terminent à 15h30.' },
        { q: 'Que sont les réunions de l’APE ?', a: 'Les réunions de l’Association des Parents d’Élèves (APE) sont des réunions annuelles, organisées généralement environ un mois après la rentrée, qui rassemblent les parents/tuteurs, les enseignants et la direction de l’école. Pendant ces réunions d’une durée de deux heures, la direction présente l’école et ses objectifs aux parents, avant de répondre à leurs questions.' },
        { q: 'L’école propose-t-elle un service de transport ?', a: 'Oui, l’école dispose de bus pour le transport des élèves. De plus, l’école est partenaire d’un service de transport avec lequel les parents/tuteurs peuvent échanger des informations relatives au transport de leurs enfants.' },
        { q: 'L’école dispose-t-elle d’une cantine ?', a: 'Oui, un service de cantine est disponible sur place et propose une variété de repas.' },
      ],
      ctaText: 'Prêt à faire le premier pas ?',
      ctaButton: 'Contacter les admissions',
    },
    contact: {
      title: 'Contact',
      kicker: 'Nous contacter',
      intro: 'Nous serions ravis d\u2019avoir de vos nouvelles — en anglais ou en français.',
      formName: 'Votre nom',
      formEmail: 'Adresse e-mail',
      formSubject: 'Objet',
      formMessage: 'Message',
      formSubmit: 'Envoyer le message',
      formNote: 'Ce formulaire ouvre votre application e-mail. Vous pouvez aussi nous écrire directement.',
      detailsTitle: "Coordonnées de l'école",
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
      text: 'Découvrez nos dernières photos, événements et annonces en temps réel — et rejoignez la conversation avec notre communauté.',
      button: 'Voir notre page Facebook',
    },
    social: {
      kicker: 'Restez connectés',
      title: 'Suivez notre communauté',
      text: 'Découvrez nos dernières photos, événements et annonces en temps réel — et rejoignez la conversation avec notre communauté sur Facebook et Instagram.',
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
      successThanks: 'Merci — votre demande a été envoyée. Notre équipe vous contactera bientôt.',
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
            { text: 'Ce site ne dépose lui-même aucun cookie pour vous connecter, mémoriser vos préférences ou suivre votre navigation — par exemple, le sélecteur de langue EN/FR fonctionne via l’adresse de la page elle-même, et non via un cookie. Les seuls cookies susceptibles d’être déposés lors de votre visite proviennent d’une fonctionnalité tierce intégrée, décrite ci-dessous.' },
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
