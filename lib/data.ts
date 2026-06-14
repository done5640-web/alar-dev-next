export type Lang = "en" | "sq";

export const PROJECTS = [
  {
    id: 1,
    name: "KD Auto Car",
    cat: "Car Rental",
    catKey: "Web App",
    url: "https://www.kdautocar.al",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    desc: {
      en: "Modern car rental platform with online booking, fleet catalog, and real-time availability management system.",
      sq: "Platformë moderne për qiramarrje makinash me rezervim online, katalog flotash dhe sistem menaxhimi të disponueshmërisë.",
    },
    tech: ["React", "Next.js", "Node.js", "PostgreSQL"],
    grad: "linear-gradient(90deg,#06B6D4,#2563EB)",
    long: {
      en: "KD Auto Car is a modern car rental platform built for the Albanian market. Customers can browse the full fleet, check real-time availability, and complete bookings online — all from any device.\n\nWe built a clean, fast frontend with React and Next.js, backed by a Node.js API and PostgreSQL database to handle reservations, fleet status, and customer management.",
      sq: "KD Auto Car është një platformë moderne për qiramarrje makinash e ndërtuar për tregun shqiptar. Klientët mund të shfletojnë flotën e plotë, të kontrollojnë disponueshmërinë në kohë reale dhe të kryejnë rezervimet online.\n\nNdërtuam një frontend të shpejtë me React dhe Next.js, të mbështetur nga një API Node.js dhe bazë të dhënash PostgreSQL.",
    },
  },
  {
    id: 2,
    name: "Luna Grup",
    cat: "Construction",
    catKey: "Web App",
    url: "https://www.lunagrup.al",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop",
    desc: {
      en: "Professional construction company website with project portfolio, services showcase, and client inquiry system.",
      sq: "Faqe profesionale për kompani ndërtimi me portofol projektesh, shërbime dhe formë kontakti për klientë të rinj.",
    },
    tech: ["React", "Next.js", "EmailJS", "Tailwind CSS"],
    grad: "linear-gradient(90deg,#F59E0B,#EA580C)",
    long: {
      en: "Luna Grup is a construction company based in Albania. We built them a professional website to showcase their completed projects, list their services, and make it easy for potential clients to get in touch.\n\nThe site features a responsive project portfolio gallery, a services section, and an integrated contact form — all designed to convert visitors into leads.",
      sq: "Luna Grup është një kompani ndërtimi me bazë në Shqipëri. Ndërtuam për ta një faqe profesionale për të shfaqur projektet e kryera, shërbimet dhe për të lehtësuar kontaktin me klientë të rinj.\n\nFaqja ka një galeri projektuese responsive, seksion shërbimesh dhe formë kontakti të integruar.",
    },
  },
  {
    id: 3,
    name: "Sensea Massage",
    cat: "Wellness & Spa",
    catKey: "Web App",
    url: "https://www.senseamassage.al",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1200&auto=format&fit=crop",
    desc: {
      en: "Elegant massage center website with online appointment booking, service showcase, and seamless payment integration.",
      sq: "Faqe elegante për qendër masazhi me sistem rezervimesh online, paraqitje shërbimesh dhe integrimi i pagesave.",
    },
    tech: ["React", "Next.js", "Stripe", "Tailwind CSS"],
    grad: "linear-gradient(90deg,#14B8A6,#10B981)",
    long: {
      en: "Sensea Massage is a premium wellness center in Albania. We designed and developed an elegant website that reflects their brand — with online appointment booking, a full service catalog, and integrated payment processing.\n\nThe booking flow was built to minimize friction: clients pick a service, choose a time slot, and pay — all in under two minutes.",
      sq: "Sensea Massage është një qendër mirëqenie premium në Shqipëri. Dizajnuam dhe zhvilluam një faqe elegante që pasqyron markën e tyre — me rezervime online, katalog të plotë shërbimesh dhe pagesa të integruara.\n\nFluksi i rezervimit u ndërtua për të minimizuar fërkimin: klientët zgjedhin shërbimin, orarin dhe paguajnë — brenda dy minutave.",
    },
  },
  {
    id: 4,
    name: "Stacioni i Librarise",
    cat: "Online Bookstore",
    catKey: "Platform",
    url: "https://www.stacionilibrarise.al",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1200&auto=format&fit=crop",
    desc: {
      en: "Full-featured online bookstore with complete catalog, advanced search, shopping cart, and integrated payment system.",
      sq: "Dyqan librash online me katalog të plotë, kërkim të avancuar, shportë blerjesh dhe sistem pagesash të integruar.",
    },
    tech: ["Next.js", "PostgreSQL", "Stripe", "TypeScript"],
    grad: "linear-gradient(90deg,#8B5CF6,#6366F1)",
    long: {
      en: "Stacioni i Librasise is an online bookstore serving Albanian readers. We built a full e-commerce platform with a complete book catalog, advanced search and filtering, a shopping cart, and Stripe payment integration.\n\nThe platform handles inventory management, order tracking, and customer accounts — giving the business full control over their operations.",
      sq: "Stacioni i Librasise është një dyqan librash online që u shërben lexuesve shqiptarë. Ndërtuam një platformë të plotë e-commerce me katalog librash, kërkim të avancuar, shportë blerjesh dhe integrim pagesash me Stripe.\n\nPlatforma menaxhon inventarin, gjurmimin e porosive dhe llogaritë e klientëve.",
    },
  },
  {
    id: 5,
    name: "Hana Car Rental",
    cat: "Car Rental",
    catKey: "Web App",
    url: "https://www.hana-car-rental.al",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
    desc: {
      en: "Elegant car rental platform with online booking, multilingual support, and a curated fleet showcase for Albanian travelers.",
      sq: "Platformë elegante për qiramarrje makinash me rezervim online, mbështetje shumëgjuhëshe dhe shfaqje të flotës për udhëtarët shqiptarë.",
    },
    tech: ["React", "Next.js", "Tailwind CSS", "EmailJS"],
    grad: "linear-gradient(90deg,#8B5CF6,#06B6D4)",
    long: {
      en: "Hana Car Rental is a premium car rental service in Albania. We built them a sleek, modern platform focused on converting visitors into bookings — with a curated fleet gallery, multilingual content, and an intuitive online inquiry system.\n\nThe site is fully responsive, fast-loading, and optimized for both local and international travelers searching for rental options in Albania.",
      sq: "Hana Car Rental është një shërbim premium qiramarrje makinash në Shqipëri. Ndërtuam për ta një platformë moderne dhe elegante të fokusuar në konvertimin e vizitorëve në rezervime — me galeri flotash, përmbajtje shumëgjuhëshe dhe sistem rezervimi online.\n\nFaqja është plotësisht responsive, me ngarkim të shpejtë dhe e optimizuar për udhëtarë vendas dhe ndërkombëtarë.",
    },
  },
  {
    id: 6,
    name: "Shehu Dekor",
    cat: "Interior Decor",
    catKey: "Web App",
    url: "https://www.shehudekor.al",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    desc: {
      en: "Modern website for an interior decoration and construction company, featuring a project portfolio, services showcase, and client inquiry system.",
      sq: "Faqe moderne për kompani dekorimi dhe ndërtimi të brendshëm, me portofol projektesh, shërbime dhe sistem kontakti për klientë të rinj.",
    },
    tech: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
    grad: "linear-gradient(90deg,#F43F5E,#EC4899)",
    long: {
      en: "Shehu Dekor is an interior decoration and construction company in Albania. We built them a modern, visually rich website to showcase their portfolio of completed projects and attract new clients.\n\nThe site features smooth animations, a full project gallery, a services breakdown, and an inquiry form — all optimized for lead generation.",
      sq: "Shehu Dekor është një kompani dekorimi dhe ndërtimi të brendshëm në Shqipëri. Ndërtuam për ta një faqe moderne dhe vizualisht të pasur për të shfaqur portofolin e projekteve të kryera dhe tërhequr klientë të rinj.\n\nFaqja ka animacione të buta, galeri të plotë projektesh, shpjegim shërbimesh dhe formë kontakti.",
    },
  },
];

export const SERVICES = [
  {
    title: { en: "Software Development", sq: "Zhvillim Software" },
    desc: {
      en: "Fast, responsive, conversion-optimized applications. React, Vue, Next.js — we choose the right tech for your problem.",
      sq: "Aplikacione të shpejta, responsive, dhe të optimizuara për konversion. React, Vue, Next.js — zgjedhim teknologjinë e duhur.",
    },
    tech: ["React", "Next.js", "Vue", "TypeScript"],
    incl: {
      en: ["Custom design systems", "SSR & edge deployment", "Accessibility (WCAG AA)", "Performance optimized", "CI/CD pipelines"],
      sq: ["Sisteme dizajni të personalizuara", "SSR dhe lansim në edge", "Aksesueshmëri (WCAG AA)", "Performance e optimizuar", "Pipeline CI/CD"],
    },
    cases: { en: ["SaaS product", "Internal tool", "E-commerce"], sq: ["Produkt SaaS", "Mjet i brendshëm", "E-commerce"] },
  },
  {
    title: { en: "Business Websites", sq: "Website për Biznes" },
    desc: {
      en: "Professional websites for local businesses — from restaurants and hotels, to shops and services. Modern design, easy to manage.",
      sq: "Website profesionale për bizneset lokale — nga restorante dhe hotele, deri te dyqane dhe shërbime. Dizajn modern dhe i lehtë për t'u menaxhuar.",
    },
    tech: ["Next.js", "React", "Tailwind CSS", "CMS"],
    incl: {
      en: ["Mobile-first responsive design", "SEO optimization", "Fast loading", "Contact & booking forms", "Easy content management"],
      sq: ["Dizajn responsive mobile-first", "Optimizim SEO", "Ngarkim i shpejtë", "Forma kontakti dhe rezervimi", "Menaxhim i lehtë i përmbajtjes"],
    },
    cases: { en: ["Restaurant", "Hotel", "Local service"], sq: ["Restorant", "Hotel", "Shërbim lokal"] },
  },
  {
    title: { en: "Mobile Applications", sq: "Aplikacione Mobile" },
    desc: {
      en: "Native-quality iOS and Android apps built with Flutter. One codebase, two platforms — no compromise on speed or experience.",
      sq: "Aplikacione mobile me cilësi native për iOS dhe Android me Flutter. Një bazë kodi, dy platforma — pa kompromis.",
    },
    tech: ["Flutter", "Dart", "Firebase", "React Native"],
    incl: {
      en: ["iOS & Android from one codebase", "Offline-first architecture", "Push notifications", "App Store & Play Store submission", "In-app payments"],
      sq: ["iOS & Android nga një bazë kodi", "Arkitekturë offline-first", "Njoftime push", "Dorëzim në App Store & Play Store", "Pagesa brenda aplikacionit"],
    },
    cases: { en: ["Consumer app", "Booking app", "Business tool"], sq: ["Aplikacion konsumi", "Aplikacion rezervimi", "Mjet biznesi"] },
  },
  {
    title: { en: "App Maintenance", sq: "Menaxhim Aplikacionesh" },
    desc: {
      en: "Maintenance and support for your existing applications. Updates, improvements, and quick problem solving.",
      sq: "Mirëmbajtje dhe mbështetje për aplikacionet tuaja ekzistuese. Update, përmirësime, dhe zgjidhje të shpejta të problemeve.",
    },
    tech: ["Node.js", "Docker", "PostgreSQL", "CI/CD"],
    incl: {
      en: ["Regular updates & patches", "Performance monitoring", "Bug fixes", "Feature additions", "24h support"],
      sq: ["Përditësime dhe patch-e të rregullta", "Monitorim performance", "Rregullim bug-esh", "Shtim funksionalitetesh", "Mbështetje 24 orë"],
    },
    cases: { en: ["Legacy system", "Growing startup", "Enterprise app"], sq: ["Sistem i vjetër", "Startup në rritje", "Aplikacion enterprise"] },
  },
];

export const PROCESS = [
  {
    n: "01",
    t: { en: "Discover", sq: "Zbulim" },
    d: { en: "Requirements, scope, timeline, and technical planning.", sq: "Kërkesat, qëllimi, afatet dhe planifikimi teknik." },
  },
  {
    n: "02",
    t: { en: "Design", sq: "Dizajn" },
    d: { en: "Wireframes, prototypes, and design approval before a single line of code.", sq: "Prototipe dhe aprovim para se të shkruhet ndonjë kod." },
  },
  {
    n: "03",
    t: { en: "Build", sq: "Zhvillim" },
    d: { en: "Iterative sprints with weekly progress updates and open communication.", sq: "Sprinte iterative me njoftime javore dhe komunikim të hapur." },
  },
  {
    n: "04",
    t: { en: "Launch", sq: "Lansim" },
    d: { en: "QA, deployment, handoff, and ongoing support.", sq: "QA, lansim, dorëzim dhe mbështetje e vazhdueshme." },
  },
];

export const VALUES = [
  {
    t: { en: "Innovation", sq: "Inovacion" },
    d: { en: "Modern technology and creative solutions for every challenge.", sq: "Teknologji moderne dhe zgjidhje kreative për çdo sfidë." },
  },
  {
    t: { en: "Results Focused", sq: "Fokus në Rezultate" },
    d: { en: "Measurable solutions that bring real value to your business.", sq: "Zgjidhje të matshme që sjellin vlerë reale për biznesin tuaj." },
  },
  {
    t: { en: "Sustainable Growth", sq: "Rritje e Qëndrueshme" },
    d: { en: "Scalable code that grows together with your business.", sq: "Kod i shkallëzueshëm që rritet bashkë me biznesin tuaj." },
  },
  {
    t: { en: "Trusted Partner", sq: "Partner i Besueshëm" },
    d: { en: "Complete dedication and support throughout the journey.", sq: "Përkushtim i plotë dhe mbështetje gjatë gjithë rrugëtimit." },
  },
];

export const TEAM = [
  {
    init: "AD",
    name: "Alar Dev",
    role: { en: "Lead Engineer", sq: "Inxhinier Kryesor" },
    bio: { en: "Building digital products that stand out. Architecture, APIs, and everything that needs to scale.", sq: "Duke ndërtuar produkte digjitale që dallohen. Arkitekturë, API dhe çdo gjë që kërkon shkallëzim." },
  },
  {
    init: "UI",
    name: "Design Team",
    role: { en: "UI/UX & Frontend", sq: "UI/UX dhe Frontend" },
    bio: { en: "Modern design systems and interfaces that feel effortless to use.", sq: "Sisteme dizajni moderne dhe ndërfaqe që duken pa mund." },
  },
  {
    init: "BE",
    name: "Backend Team",
    role: { en: "Backend & DevOps", sq: "Backend dhe DevOps" },
    bio: { en: "Scalable infrastructure, zero-downtime deployments, and databases that never sleep.", sq: "Infrastrukturë e shkallëzueshme, lansime pa ndërprerje dhe baza të dhënash që nuk flenë." },
  },
];
