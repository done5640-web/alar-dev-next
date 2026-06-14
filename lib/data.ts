export type Lang = "en" | "sq";

export const PROJECTS = [
  {
    id: 1,
    name: "NexaHR Portal",
    cat: "Web App",
    catKey: "Web App",
    desc: {
      en: "Enterprise HR management SaaS with role-based access, payroll, and analytics.",
      sq: "SaaS i menaxhimit të HR me akses sipas rolit, listëpagesa dhe analitikë.",
    },
    tech: ["React", "Node.js", "PostgreSQL", "Redis"],
    grad: "linear-gradient(90deg,#FF3CAC,#A855F7)",
    long: {
      en: "NexaHR is an enterprise-grade HR platform consolidating payroll, performance reviews, time-off, and analytics into a single workspace. Built to handle organizations from 50 to 5,000 employees with granular role-based permissions.\n\nWe rebuilt the legacy system from scratch with a modern React frontend, a Node.js API layer, and a PostgreSQL/Redis backing store — cutting average page loads from 4.2s to 380ms.",
      sq: "NexaHR është një platformë HR e nivelit korporativ që konsolidon listëpagesat, vlerësimet dhe analitikën në një hapësirë të vetme.",
    },
  },
  {
    id: 2,
    name: "TrackFlow",
    cat: "Mobile App",
    catKey: "Mobile App",
    desc: {
      en: "Real-time delivery tracking for logistics companies, built for iOS and Android.",
      sq: "Gjurmim i dërgesave në kohë reale për kompanitë logjistike, për iOS dhe Android.",
    },
    tech: ["Flutter", "Firebase", "Google Maps API", "Dart"],
    grad: "linear-gradient(90deg,#A855F7,#F97316)",
    long: {
      en: "TrackFlow gives dispatchers and customers live visibility into every delivery across a fleet — with route optimization, ETA predictions, and proof-of-delivery capture.\n\nA single Flutter codebase ships to iOS and Android with near-native performance, backed by Firebase for realtime sync and Google Maps for geospatial intelligence.",
      sq: "TrackFlow ofron dukshmëri të drejtpërdrejtë për çdo dërgesë në flotë.",
    },
  },
  {
    id: 3,
    name: "LexVault",
    cat: "Platform",
    catKey: "Platform",
    desc: {
      en: "Legal document intelligence platform with AI-assisted search and version control.",
      sq: "Platformë inteligjence dokumentesh ligjore me kërkim me ndihmë AI.",
    },
    tech: ["Next.js", "Prisma", "AWS S3", "TypeScript"],
    grad: "linear-gradient(90deg,#06B6D4,#A855F7)",
    long: {
      en: "LexVault lets law firms index, search, and version thousands of contracts and case files using semantic AI search. Lawyers find the right clause in seconds instead of hours.\n\nThe stack pairs a Next.js frontend with a Prisma/PostgreSQL backbone and AWS S3 storage, with a custom embeddings pipeline for cross-document retrieval.",
      sq: "LexVault lejon firmat e avokatisë të indeksojnë mijëra dokumente me kërkim semantik.",
    },
  },
  {
    id: 4,
    name: "ClimaGrid",
    cat: "Dashboard",
    catKey: "Dashboard",
    desc: {
      en: "Energy consumption monitoring and forecasting dashboard for industrial clients.",
      sq: "Panel monitorimi i konsumit të energjisë për klientët industrialë.",
    },
    tech: ["Vue", "Python", "InfluxDB", "D3.js"],
    grad: "linear-gradient(90deg,#F97316,#FF3CAC)",
    long: {
      en: "ClimaGrid ingests millions of meter readings per day and turns them into actionable forecasts for plant managers — flagging anomalies, predicting load spikes, and optimizing tariffs.\n\nBuilt on Vue with a Python/InfluxDB backend and D3-powered visualizations that stay smooth even at 100k+ data points.",
      sq: "ClimaGrid përpunon miliona lexime në ditë dhe i kthen në parashikime praktike.",
    },
  },
  {
    id: 5,
    name: "PulseBoard",
    cat: "Dashboard",
    catKey: "Dashboard",
    desc: {
      en: "Real-time analytics dashboard with live charts and alert systems.",
      sq: "Panel analitik në kohë reale me grafikë të drejtpërdrejtë dhe sisteme alarmi.",
    },
    tech: ["React", "WebSockets", "Redis", "Chart.js"],
    grad: "linear-gradient(90deg,#FF3CAC,#06B6D4)",
    long: {
      en: "PulseBoard is a real-time operations dashboard delivering sub-second updates across hundreds of KPIs. Teams configure alerts, drill into anomalies, and share live views across departments.",
      sq: "PulseBoard ofron panele operacionesh në kohë reale me përditësime nën një sekondë.",
    },
  },
  {
    id: 6,
    name: "FormForge",
    cat: "Platform",
    catKey: "Platform",
    desc: {
      en: "No-code form builder SaaS with logic branching and webhook integrations.",
      sq: "SaaS ndërtimi formash pa kod me logjikë degëzimi dhe integrime webhook.",
    },
    tech: ["Vue", "MongoDB", "AWS S3", "Node.js"],
    grad: "linear-gradient(90deg,#A855F7,#22C55E)",
    long: {
      en: "FormForge lets non-technical teams build complex multi-step forms with conditional logic, file uploads, and webhook delivery into any downstream system.",
      sq: "FormForge u mundëson ekipeve të ndërtojnë forma të avancuara pa shkruar kod.",
    },
  },
];

export const SERVICES = [
  {
    title: { en: "Web Applications", sq: "Aplikacione Web" },
    desc: {
      en: "Performant, accessible, and beautifully crafted web apps built with modern frameworks. From MVPs to enterprise-grade platforms.",
      sq: "Aplikacione web të shpejta dhe të aksesueshme, ndërtuar me teknologjitë më moderne.",
    },
    tech: ["React", "Next.js", "Vue", "TypeScript"],
    incl: {
      en: ["Custom design systems", "SSR & edge deployment", "Accessibility (WCAG AA)", "Performance budgets", "CI/CD pipelines"],
      sq: ["Sisteme dizajni të personalizuara", "SSR dhe lansim në edge", "Aksesueshmëri (WCAG AA)", "Buxhete performance", "Pipeline CI/CD"],
    },
    cases: { en: ["SaaS product", "Internal tool", "E-commerce"], sq: ["Produkt SaaS", "Mjet i brendshëm", "E-commerce"] },
  },
  {
    title: { en: "Mobile Apps", sq: "Aplikacione Mobile" },
    desc: {
      en: "Native-quality iOS and Android apps built with Flutter. One codebase, two platforms, zero compromise on performance.",
      sq: "Aplikacione mobile me cilësi native për iOS dhe Android, ndërtuar me Flutter.",
    },
    tech: ["Flutter", "Dart", "Firebase", "App Store / Play Store"],
    incl: {
      en: ["Single Flutter codebase", "Offline-first architecture", "Push notifications", "In-app analytics", "Store submission"],
      sq: ["Një bazë kodi Flutter", "Arkitekturë offline-first", "Njoftime push", "Analitikë në aplikacion", "Dorëzim në dyqane"],
    },
    cases: { en: ["Consumer app", "Field tool", "Marketplace"], sq: ["Aplikacion konsumi", "Mjet në terren", "Marketplace"] },
  },
  {
    title: { en: "Custom Software", sq: "Softuer i Personalizuar" },
    desc: {
      en: "Bespoke backend systems, APIs, automation pipelines, and internal tools engineered to scale with your business.",
      sq: "Sisteme backend, API dhe mjete të brendshme të personalizuara për biznesin tuaj.",
    },
    tech: ["Node.js", "Python", "PostgreSQL", "Docker"],
    incl: {
      en: ["REST & GraphQL APIs", "Background job systems", "Data pipelines", "Auth & RBAC", "Observability"],
      sq: ["API REST dhe GraphQL", "Sisteme job-esh në background", "Pipeline të dhënash", "Auth dhe RBAC", "Observueshmëri"],
    },
    cases: { en: ["Custom backend", "Integration layer", "Internal dashboard"], sq: ["Backend i personalizuar", "Shtresë integrimi", "Panel i brendshëm"] },
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
    t: { en: "Speed without shortcuts", sq: "Shpejtësi pa kompromis" },
    d: { en: "We move fast because we plan well — not because we skip steps.", sq: "Lëvizim shpejt sepse planifikojmë mirë — jo sepse anashkalojmë hapa." },
  },
  {
    t: { en: "Precision engineering", sq: "Inxhinieri e saktë" },
    d: { en: "Clean architecture, readable code, zero technical debt handed off.", sq: "Arkitekturë e pastër, kod i lexueshëm, zero borxh teknik." },
  },
  {
    t: { en: "Transparent communication", sq: "Komunikim transparent" },
    d: { en: "Weekly updates, open channels, and no surprises.", sq: "Njoftime javore, kanale të hapura dhe pa surpriza." },
  },
  {
    t: { en: "Long-term thinking", sq: "Mendim afatgjatë" },
    d: { en: "We build for maintainability, not just the demo.", sq: "Ndërtojmë për qëndrueshmëri, jo vetëm për demonstrim." },
  },
];

export const TEAM = [
  {
    init: "AL",
    name: "Alex L.",
    role: { en: "Lead Engineer", sq: "Inxhinier Kryesor" },
    bio: { en: "10 years building products people actually use. Architecture, APIs, and anything that needs to scale.", sq: "10 vite duke ndërtuar produkte. Arkitekturë, API dhe çdo gjë që kërkon shkallëzim." },
  },
  {
    init: "RK",
    name: "Rina K.",
    role: { en: "UI/UX & Frontend", sq: "UI/UX dhe Frontend" },
    bio: { en: "Design systems, component libraries, and interfaces that feel effortless to use.", sq: "Sisteme dizajni, biblioteka komponentësh dhe ndërfaqe që duken pa mund." },
  },
  {
    init: "DM",
    name: "Dan M.",
    role: { en: "Backend & DevOps", sq: "Backend dhe DevOps" },
    bio: { en: "Scalable infrastructure, zero-downtime deployments, and databases that never sleep.", sq: "Infrastrukturë e shkallëzueshme, lansime pa ndërprerje dhe baza të dhënash që nuk flenë." },
  },
];
