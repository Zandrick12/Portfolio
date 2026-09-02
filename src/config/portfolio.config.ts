import { PortfolioConfig } from "../types/portfolio";

export interface ExtendedPortfolioConfig extends PortfolioConfig {
  person: PortfolioConfig["person"] & {
    facebookUrl: string;
  };
}

export const portfolioConfig: ExtendedPortfolioConfig = {
  person: {
    name: "Zandrick Quiloña",
    handle: "Zandrick12",
    university: "Eastern Samar State University (ESSU)",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    role: "IT Student • Software Developer • Technology Enthusiast",
    subRole: "Building systems, exploring technology, and turning ideas into working solutions.",
    location: "Dolores, Eastern Samar, Philippines",
    availability: "Open for Software Internships, ROTC Systems & IT Collaboration",
    bioSummary:
      "I am a BSIT student at Eastern Samar State University (ESSU) focused on software engineering, backend APIs, database design, and spatial data systems. From mobile terminal scripting to architecting full-stack web applications like the ROTC QR Attendance platform, I build software to solve real-world organizational challenges.",
    heroHeadline: "Building systems. Exploring technology. Turning ideas into working solutions.",
    heroSubtext:
      "BSIT Student at Eastern Samar State University (ESSU) • ROTC Bn S7 Cadet Officer • Full-Stack Developer exploring APIs, Databases, GIS Spatial Analysis, and Computer Science fundamentals.",
    photoUrl: "/zandrick-photo.jpg",
    githubUsername: "Zandrick12",
    githubUrl: "https://github.com/Zandrick12",
    linkedinUrl: "https://www.linkedin.com/in/zandrick-quilona-421a693b4/",
    facebookUrl: "https://www.facebook.com/zandrick.quilona",
    email: "zandrickquilona0@gmail.com",
    resumeUrl: "/Zandrick_Quilona_Resume.pdf",
    hardwareSpecs: {
      os: "Windows 11 Home (64-bit)",
      processor: "Intel Core i5-1135G7",
      ram: "16 GB RAM",
      storage: "1 TB Storage",
      tools: ["VS Code", "Git / GitHub", "Docker", "Python", "FastAPI", "Node.js", "Termux", "Acode", "QGIS"],
    },
  },

  terminalCommands: [
    {
      command: "whoami",
      response: [
        "Identity: Zandrick Quiloña",
        "Institution: Eastern Samar State University (ESSU) — BSIT",
        "ROTC Unit: ESSU ROTC Maragap Unit (Bn S7 Designation)",
        "Email: zandrickquilona0@gmail.com",
        "Socials: GitHub @Zandrick12 • LinkedIn • Facebook",
      ],
    },
    {
      command: "cat current_stack.txt",
      response: [
        "> Core Dev: React • TypeScript • Vite • Python • FastAPI • Uvicorn",
        "> Databases: PostgreSQL • MySQL • SQLite • MongoDB • Redis",
        "> Spatial & GIS: QGIS • GPS Coordinate Mapping • EPSG:4326 / EPSG:25393",
        "> Dev Tools: VS Code • Git/GitHub • Docker • Termux & Acode",
      ],
    },
    {
      command: "rotc --status",
      response: [
        "[SYS.OK] Flagship App: ROTC QR Attendance Monitoring System",
        "[SYS.ACTIVE] Managing Cadets (1CL, 2CL, Aspirants) & Officer Roster",
        "[SYS.LIVE] Backend running at 127.0.0.1:8000 (FastAPI + React)",
      ],
    },
  ],

  featuredProjectSlugs: [
    "rotc-qr-attendance",
    "gis-spatial-disaster-analysis",
    "social-media-utilization-survey",
    "nexscan-api",
  ],

  projects: [
    {
      id: "rotc-qr-attendance",
      title: "ROTC QR Attendance System",
      slug: "rotc-qr-attendance",
      subtitle: "Automated Cadet Attendance & Officer Battalion Monitoring Platform",
      category: "Full Stack",
      featured: true,
      isFlagship: true,
      shortDescription:
        "Web-based QR code attendance monitoring system engineered for ROTC battalion personnel, cadet officers, and student classifications (1CL, 2CL, Aspirants).",
      problemStatement:
        "Manual ROTC cadet attendance tracking in formations suffers from paper record loss, slow proxy check-in bottlenecks, and delayed battalion summary reporting across multi-tier cadet ranks.",
      solutionSummary:
        "Built a high-performance web platform featuring a React + Vite + TypeScript frontend with dynamic camera QR scanning, connected to a Python FastAPI backend running async Pydantic validation and structured database logging.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Python",
        "FastAPI",
        "Uvicorn",
        "SQLite",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/Zandrick12/essuc-rotc-portal.git",
      liveDemoUrl: "http://127.0.0.1:8000",
      updatedAt: "2026-08-28",
      stars: 14,
      forks: 3,
      architectureDiagram: {
        flowDescription:
          "Cadet Present Dynamic QR -> Web Worker Scanner -> FastAPI Validation Endpoint -> SQLite/PostgreSQL Roster Log -> Battalion Officer Dashboard",
        nodes: [
          {
            id: "client-scanner",
            label: "React + Vite Scanner",
            type: "client",
            description: "Front-end camera scanner with client-side barcode worker and officer management views.",
          },
          {
            id: "fastapi-backend",
            label: "FastAPI REST API",
            type: "api",
            description: "Async Python service running Uvicorn workers, Pydantic schemas, and cadet auth endpoints.",
          },
          {
            id: "rotc-db",
            label: "Cadet Database",
            type: "db",
            description: "Stores cadet rosters, officer designations, 1CL/2CL/Aspirant ranks, and attendance logs.",
          },
          {
            id: "officer-dash",
            label: "Officer Monitoring UI",
            type: "service",
            description: "Real-time summary dashboard for battalion officers to view formation stats and export logs.",
          },
        ],
      },
      technicalHighlights: [
        "Architected multi-tier classification logic for cadet officers, 1CL, 2CL, and aspirants.",
        "Implemented fast client-side barcode scanning passing verified tokens to FastAPI backend handlers.",
        "Built CRUD management interfaces for officer assignment, cadet registration, and formation reporting.",
        "Ran local FastAPI development backend at 127.0.0.1:8000 with Swagger API documentation.",
      ],
      challenges: [
        "Designing scalable data models that distinguish officer personnel from student cadet ranks.",
        "Ensuring smooth camera barcode parsing without taxing mobile hardware.",
      ],
      lessonsLearned: [
        "Decoupling scanner state from REST transaction handlers prevents UI lockup during mass formation check-ins.",
        "Pydantic data validation in FastAPI catches invalid payloads before database entry.",
      ],
      futureImprovements: [
        "Add offline PWA support with local IndexedDB queuing for remote field formations.",
        "Integrate automated SMS/notification alerts for unexcused cadet absences.",
      ],
    },

    {
      id: "gis-spatial-disaster-analysis",
      title: "GIS & Spatial Disaster Risk Analysis",
      slug: "gis-spatial-disaster-analysis",
      subtitle: "Distance-Based Spatial Analysis & DRRM Coordinate Mapping",
      category: "GIS & Spatial Data",
      featured: true,
      isFlagship: false,
      shortDescription:
        "Geographic Information System (GIS) project analyzing spatial coordinate data and disaster risk reduction maps for Dolores, Eastern Samar.",
      problemStatement:
        "Disaster Risk Reduction and Management (DRRM) teams require accurate GPS spatial mapping to analyze community hazard zones, distance boundaries, and emergency evacuation routes.",
      solutionSummary:
        "Utilized QGIS, smartphone GPS coordinate collection, and spatial projection transformations (WGS 84 / EPSG:4326, PRS92 / Philippines Zone III EPSG:25393, UTM Zone 51N EPSG:32651) to compute distance-based spatial risk vectors.",
      techStack: [
        "QGIS",
        "GPS Coordinates",
        "Spatial Data Analysis",
        "WGS 84 (EPSG:4326)",
        "PRS92 (EPSG:25393)",
        "Map Analysis",
        "DRRM",
      ],
      githubUrl: "https://github.com/Zandrick12",
      updatedAt: "2026-07-20",
      stars: 9,
      forks: 2,
      technicalHighlights: [
        "Collected real-world GPS coordinates across field locations in Dolores, Eastern Samar.",
        "Performed coordinate reference system (CRS) transformations between WGS 84, PRS92, and UTM Zone 51N.",
        "Generated distance-based buffer zones and spatial hazard maps for disaster preparedness reporting.",
      ],
      challenges: ["Handling CRS projection discrepancies when converting raw smartphone GPS data into local grid zones."],
      lessonsLearned: ["Understood how precise spatial reference systems impact emergency response boundary mapping."],
      futureImprovements: ["Integrate web map rendering using Leaflet.js or OpenLayers for interactive web GIS views."],
    },

    {
      id: "social-media-utilization-survey",
      title: "Social Media Utilization Survey & Data Analysis",
      slug: "social-media-utilization-survey",
      subtitle: "Quantitative Statistical Analysis of ESSU BSIT Student Data",
      category: "Data & Systems",
      featured: true,
      isFlagship: false,
      shortDescription:
        "Quantitative research study evaluating social media usage patterns among ESSU BSIT students using statistical distribution metrics.",
      problemStatement:
        "Understanding student digital habits requires objective data collection, numerical mapping, Likert-scale interpretation, and statistical outlier identification.",
      solutionSummary:
        "Designed survey instruments, collected student response data, and analyzed distributions using sample mean, standard deviation, interquartile range (IQR), and upper/lower fence outlier boundaries.",
      techStack: [
        "Data Analysis",
        "Quantitative Methods",
        "Statistical Calculation",
        "Likert Scale Mapping",
        "Survey Analytics",
      ],
      githubUrl: "https://github.com/Zandrick12",
      updatedAt: "2026-06-15",
      stars: 8,
      forks: 1,
      technicalHighlights: [
        "Calculated mean, standard deviation, and IQR values across Likert-scale student survey datasets.",
        "Applied upper and lower fence calculations to isolate and interpret statistical outliers.",
        "Prepared structured data interpretation reports for ESSU academic research presentation.",
      ],
      challenges: ["Ensuring consistent numerical encoding across multi-choice student survey responses."],
      lessonsLearned: ["Quantitative data rigor enhances software product requirement gathering and user behavioral analysis."],
      futureImprovements: ["Automate survey statistical processing using Python pandas and matplotlib."],
    },

    {
      id: "nexscan-api",
      title: "Nexscan Inspection Microservice",
      slug: "nexscan-api",
      subtitle: "Backend REST API Service for Data Inspection & Parsing",
      category: "Backend",
      featured: true,
      isFlagship: false,
      shortDescription:
        "Python FastAPI microservice handling security token verification, request middleware, and payload logging for mobile applications.",
      problemStatement:
        "Client scanner tools require a reliable, low-latency API backend to validate payload metadata and persist audit trails.",
      solutionSummary:
        "Developed modular FastAPI routes with Pydantic request models, CORS handling, and SQLite connection handlers.",
      techStack: ["Python", "FastAPI", "Uvicorn", "Pydantic", "SQLite", "Git"],
      githubUrl: "https://github.com/Zandrick12/Nexscan.git",
      updatedAt: "2026-08-10",
      stars: 11,
      forks: 2,
      technicalHighlights: [
        "Configured async request handling with Uvicorn server processes.",
        "Implemented structured JSON logging and custom error handlers for API endpoints.",
      ],
      challenges: ["Managing database transactions during rapid sequential API requests."],
      lessonsLearned: ["Pydantic schemas enforce type safety at the network boundary."],
      futureImprovements: ["Containerize API service using Docker Compose."],
    },
  ],

  skills: [
    { name: "JavaScript", category: "Programming", proficiency: "Building With", description: "ES6+, Async, DOM Manipulation, Web APIs" },
    { name: "TypeScript", category: "Programming", proficiency: "Building With", description: "Strict Typing, Interfaces, Component Props" },
    { name: "Python", category: "Programming", proficiency: "Building With", description: "FastAPI, Scripting, Data Structures, Automation" },
    { name: "PHP", category: "Programming", proficiency: "Building With", description: "Server Scripting, Laravel Controllers, Web Backend" },
    { name: "C++", category: "Programming", proficiency: "Familiar", description: "CS Fundamentals, Pointers, Memory Models" },
    { name: "Java", category: "Programming", proficiency: "Familiar", description: "OOP Principles, Data Structures, Classes" },
    { name: "C#", category: "Programming", proficiency: "Familiar", description: "Basic Desktop & Web Application Logic" },
    { name: "HTML5 / CSS3", category: "Programming", proficiency: "Building With", description: "Semantic Markup, Responsive Styling" },

    { name: "React", category: "Frameworks / Web", proficiency: "Building With", description: "Hooks, Component State, QR Scanner UI" },
    { name: "Next.js", category: "Frameworks / Web", proficiency: "Building With", description: "App Router, Server Components, SSR" },
    { name: "Vue.js", category: "Frameworks / Web", proficiency: "Familiar", description: "Reactive Components, Options/Composition API" },
    { name: "Tailwind CSS", category: "Frameworks / Web", proficiency: "Building With", description: "Utility Styling, Glassmorphism, Responsive Grid" },

    { name: "FastAPI", category: "Backend & Runtime", proficiency: "Building With", description: "Async REST APIs, Pydantic, Swagger Documentation" },
    { name: "Python / Uvicorn", category: "Backend & Runtime", proficiency: "Building With", description: "Async Server Execution, Scripting" },
    { name: "Node.js / Express", category: "Backend & Runtime", proficiency: "Building With", description: "JavaScript Runtime, Express Server Routes" },
    { name: "Laravel", category: "Backend & Runtime", proficiency: "Familiar", description: "PHP MVC Framework, Eloquent ORM, Blade" },
    { name: "Django", category: "Backend & Runtime", proficiency: "Learning", description: "Python Web Framework, ORM, Views" },

    { name: "PostgreSQL", category: "Databases", proficiency: "Building With", description: "Relational Schemas, Indexing, SQL Queries" },
    { name: "MySQL", category: "Databases", proficiency: "Building With", description: "Relational Database Design, Tables, Joins" },
    { name: "MongoDB", category: "Databases", proficiency: "Familiar", description: "Document Collections, NoSQL Aggregations" },
    { name: "Redis", category: "Databases", proficiency: "Learning", description: "In-Memory Caching & Key-Value Store" },

    { name: "Git & GitHub", category: "Auth & DevOps", proficiency: "Building With", description: "Version Control, Repositories, Commits, PRs" },
    { name: "VS Code", category: "Auth & DevOps", proficiency: "Building With", description: "Primary IDE Environment on Windows 11" },
    { name: "Termux & Acode", category: "Auth & DevOps", proficiency: "Building With", description: "Android Mobile CLI Scripting & Code Editing Foundation" },
    { name: "Docker", category: "Auth & DevOps", proficiency: "Learning", description: "Containerization Basics, Dockerfiles" },
    { name: "Supabase / Firebase", category: "Auth & DevOps", proficiency: "Familiar", description: "Cloud Auth, Realtime DB, Storage" },

    { name: "QGIS", category: "GIS & Data Analysis", proficiency: "Building With", description: "Geographic Information System, Spatial Layers, Coordinate Systems" },
    { name: "GPS Coordinate Mapping", category: "GIS & Data Analysis", proficiency: "Building With", description: "Smartphone GPS Data Collection, WGS 84 / PRS92 / UTM Zone 51N" },
    { name: "Quantitative Data Analysis", category: "GIS & Data Analysis", proficiency: "Building With", description: "Mean, Standard Deviation, IQR Outlier Detection, Likert Scale Analysis" },
  ],

  rotcExperience: [
    {
      id: "rotc-1",
      role: "Bn S7 Designation & Cadet Officer",
      unit: "ESSU ROTC Maragap Unit",
      period: "2024 - Present",
      description:
        "Serving as Cadet Officer with Bn S7 designation at ESSU ROTC Maragap Unit. Responsible for coordination, reporting, documentation, event organization, and instruction activities.",
      highlights: [
        "Organized and documented Saturday cadet instruction formations and official battalion reporting.",
        "Managed communication and coordination across cadet officers, tactical NCOs, and battalion leadership.",
        "Architected the ROTC QR Attendance Monitoring System to streamline cadet check-ins.",
      ],
      skills: ["Leadership", "Cadet Organization", "Documentation", "Communication", "Event Planning"],
    },
    {
      id: "rotc-2",
      role: "Instruction & Community Service Lead",
      unit: "ESSU ROTC Cadre & Community Activities",
      period: "2024 - 2025",
      description:
        "Participated in and facilitated military instruction, field exercises, and community development activities.",
      highlights: [
        "Facilitated instructions in Basic Signal Communication, Basic Map Reading, and Orienteering.",
        "Coordinated student participation in Boy Scouts / Girl Scouts Camporee events and cadet training.",
        "Led community service initiatives including campus clean-up drives and blood donation activities.",
      ],
      skills: ["Instruction", "Signal Communication", "Map Reading", "Orienteering", "Community Service"],
    },
  ],

  journey: [
    {
      period: "Early Phase",
      phase: "Android & Termux",
      title: "Mobile Scripting & Programming Basics",
      description:
        "Began my development journey on Android using Termux and Acode editor. Practiced C++, Python, and HTML/CSS logic directly on mobile before transitioning to dedicated desktop environments.",
      keySkills: ["Termux", "Acode", "C++", "HTML/CSS", "Python Basics"],
      status: "Completed",
    },
    {
      period: "2023 - 2024",
      phase: "Setup & Tools",
      title: "Windows 11 Workspace & Computer Science Foundation",
      description:
        "Upgraded to Windows 11 laptop environment (Intel Core i5-1135G7, 16GB RAM). Mastered VS Code, Git, GitHub workflows, Data Structures & Algorithms, Java, and CS50 study tracks.",
      keySkills: ["VS Code", "Git/GitHub", "Data Structures", "Java", "CS50 Study"],
      status: "Completed",
    },
    {
      period: "2024 - Present",
      phase: "Building & ROTC System",
      title: "Full-Stack Development & ROTC QR System",
      description:
        "Building real-world IT applications at ESSU. Engineered the ROTC QR Attendance platform (React + TypeScript + FastAPI), explored QGIS spatial analysis, and developed full-stack web solutions.",
      keySkills: ["React", "TypeScript", "FastAPI", "PostgreSQL", "QGIS", "ROTC QR System"],
      status: "Current Focus",
    },
    {
      period: "2026+",
      phase: "Future Engineering",
      title: "Professional IT & Software Engineering Career",
      description:
        "Growing into professional software development, cloud technologies, Docker containerization, backend system architecture, and technology leadership.",
      keySkills: ["Backend Systems", "Docker", "Cloud", "Distributed Systems", "IT Leadership"],
      status: "Target Goal",
    },
  ],

  exploring: [
    {
      id: "ex-1",
      code: "01",
      title: "Data Structures & Algorithms (DSA)",
      description: "Trees, graphs, dynamic programming, and algorithm efficiency for software problem-solving.",
      category: "Computer Science",
      tags: ["Trees", "Graphs", "Big-O", "LeetCode"],
    },
    {
      id: "ex-2",
      code: "02",
      title: "Backend Architecture & REST APIs",
      description: "FastAPI endpoints, middleware authentication, rate limiting, and relational database ORMs.",
      category: "Backend",
      tags: ["FastAPI", "Uvicorn", "Pydantic", "REST APIs"],
    },
    {
      id: "ex-3",
      code: "03",
      title: "Linux & System Administration",
      description: "Exploring Linux installation, bash terminal workflows, permissions, and POSIX environments.",
      category: "Systems",
      tags: ["Linux", "Bash", "Shell Scripts", "POSIX"],
    },
    {
      id: "ex-4",
      code: "04",
      title: "GIS & Spatial Coordinate Systems",
      description: "Advanced spatial data transformations, QGIS buffers, GPS mapping, and WGS 84 projections.",
      category: "GIS",
      tags: ["QGIS", "EPSG:4326", "PRS92", "Spatial DRRM"],
    },
    {
      id: "ex-5",
      code: "05",
      title: "Docker & Containerization",
      description: "Packaging Python APIs and React web apps into isolated Docker container images.",
      category: "DevOps",
      tags: ["Docker", "Containers", "Dockerfiles"],
    },
    {
      id: "ex-6",
      code: "06",
      title: "Cybersecurity Fundamentals",
      description: "Understanding network protocols, web security risks (OWASP Top 10), and defensive coding.",
      category: "Security",
      tags: ["Cybersecurity", "OWASP", "Auth Security"],
    },
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Bn S7 Designation & ROTC Cadet Officer",
      organization: "ESSU ROTC Maragap Unit",
      date: "2024 - Present",
      type: "ROTC Leadership",
      description: "Designated as Bn S7, overseeing cadet coordination, documentation, instruction, and attendance systems.",
    },
    {
      id: "ach-2",
      title: "Lead Developer — ROTC QR Attendance Platform",
      organization: "Eastern Samar State University (ESSU)",
      date: "2026",
      type: "Project Achievement",
      description: "Designed and built an automated QR monitoring system managing cadet officers, 1CL, 2CL, and aspirants.",
    },
    {
      id: "ach-3",
      title: "GIS Spatial Analysis & DRRM Project",
      organization: "Dolores, Eastern Samar DRRM Study",
      date: "2026",
      type: "Project Achievement",
      description: "Mapped spatial GPS coordinates and computed distance-based risk zones using QGIS and WGS 84 projections.",
    },
  ],

  techConstellationNodes: [
    {
      id: "python",
      label: "Python",
      group: "language",
      connections: ["fastapi", "sqlite", "docker"],
      details: "Primary language for FastAPI backend services, scripting, and data algorithms.",
    },
    {
      id: "fastapi",
      label: "FastAPI",
      group: "framework",
      connections: ["postgresql", "react", "python"],
      details: "High-performance Python framework powering the ROTC QR Attendance API at 127.0.0.1:8000.",
    },
    {
      id: "typescript",
      label: "TypeScript",
      group: "language",
      connections: ["react", "nextjs"],
      details: "Typed JavaScript dialect ensuring runtime reliability across frontend components.",
    },
    {
      id: "react",
      label: "React",
      group: "framework",
      connections: ["typescript", "tailwind", "fastapi"],
      details: "UI library used for constructing the ROTC QR camera scanner frontend and dashboards.",
    },
    {
      id: "nextjs",
      label: "Next.js",
      group: "framework",
      connections: ["typescript", "tailwind", "github"],
      details: "Production React framework powering Zandrick's personal portfolio application.",
    },
    {
      id: "postgresql",
      label: "PostgreSQL",
      group: "database",
      connections: ["fastapi", "docker"],
      details: "Relational database engine for structured cadet records and application data.",
    },
    {
      id: "qgis",
      label: "QGIS",
      group: "gis",
      connections: ["python"],
      details: "Spatial analysis desktop software used for Dolores, Eastern Samar DRRM coordinate mapping.",
    },
    {
      id: "docker",
      label: "Docker",
      group: "tool",
      connections: ["python", "postgresql", "github"],
      details: "Containerization tool for packaging API microservices and web applications.",
    },
    {
      id: "tailwind",
      label: "Tailwind CSS",
      group: "tool",
      connections: ["react", "nextjs"],
      details: "Utility CSS framework providing clean light mode glassmorphism styles.",
    },
    {
      id: "github",
      label: "GitHub",
      group: "tool",
      connections: ["docker", "nextjs"],
      details: "Version control platform housing @Zandrick12 repositories.",
    },
  ],
};
