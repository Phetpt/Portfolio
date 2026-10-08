import type { ExperienceItem } from "@/types/portfolio"


export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Frontend Developer Intern",
    company: "IFCG",
    location: "Bangkok, Thailand / On-site",
    period: "Jun 2026 - Jul 2026",
    teamSize: "Frontend Development Team",
    summary:
      "Engineered React and TypeScript interfaces for an internal employee management platform, emphasizing reusable component architecture, RESTful API integration, role-based access control, and reliable asynchronous data management to support streamlined administrative workflows.",
    bullets: [
      "Built React and TypeScript interfaces for employee, role, and permission management within an internal operations platform, enabling administrators to manage user access through a consistent, unified workflow.",

      "Developed a reusable component library (forms, data tables, dialogs, navigation) that standardized behavior and interaction patterns across administrative screens.",

      "Integrated frontend interfaces with backend APIs for authentication, employee data, and role management, implementing loading, empty, error, and revalidation states to ensure a reliable user experience.",

      "Implemented schema-based form validation with React Hook Form and Zod, and enforced role-based access control on the client through route guards and permission-aware actions.",

      "Engineered search, filtering, sorting, and pagination with URL-synchronized state, allowing users to bookmark and share specific administrative views.",

      "Designed cross-section employee record search with Thai text normalization and deep-linking to matching fields, improving data discoverability for Thai-language records."
    ],
    technologies: [
      "React",
      "TypeScript",
      "REST APIs",
      "React Hook Form",
      "Zod",
      "JWT",
      "RBAC",
      "Mock Service Worker"
    ]
  },
  {
    id: "edu-1",
    role: "Master of Science in Software Engineering",
    company: "Chulalongkorn University",
    location: "Bangkok, Thailand",
    period: "Jan 2026 - Present",
    summary:
      "Pursuing a Master of Science in Software Engineering, advancing expertise in software design, development methodologies, software evolution, and maintainability, with an emphasis on engineering principles for building reliable and sustainable software systems.",
    bullets: [
      "Studying software design and development principles for building reliable, maintainable software systems.",

      "Exploring software evolution and maintenance strategies to support sustainable application development.",

      "Strengthening knowledge of software engineering methodologies, architectural thinking, and systematic problem-solving."
    ],
    technologies: [
      "Software Engineering",
      "Software Design",
      "Software Development",
      "Software Evolution",
      "Software Maintenance"
    ]
  },
  {
    id: "exp-2",
    role: "Research Intern",
    company: "Petroleum and Energy Institute of Thailand (PTIT)",
    location: "Thailand",
    period: "Apr 2023 - Jun 2023",
    teamSize: "Research & Technical Analysis",
    summary:
      "Conducted carbon data research and industrial process assessments, designed environmental monitoring strategies, and developed data-driven recommendations to support emissions reduction and informed decision-making.",
    bullets: [
      "Researched and compiled carbon data, including carbon credit markets and corporate carbon footprints, and produced data visualizations and presentation materials to communicate findings to stakeholders.",

      "Designed a monitoring plan to determine the number and optimal placement of sensors for measuring regional carbon levels.",

      "Conducted on-site assessments of factory operations to identify process inefficiencies and waste sources, and developed emission reduction strategies to lower the project's environmental carbon impact."
    ],
    technologies: [
      "Data Analysis",
      "Technical Research",
      "Technical Documentation",
      "Environmental Data",
      "Process Analysis"
    ]
  },
  {
    id: "edu-2",
    role: "Bachelor of Engineering in Industrial Engineering",
    company: "Kasetsart University",
    location: "Bangkok, Thailand",
    period: "Jul 2020 - Apr 2024",
    summary:
      "Earned a Bachelor of Engineering in Industrial Engineering, establishing a foundation in systems analysis, mathematical modeling, computational problem-solving, and process optimization through engineering methodologies and quantitative approaches.",
    bullets: [
      "Studied operations research, simulation, systems engineering, and applied mathematics to analyze and optimize complex processes.",

      "Developed foundational programming and computational problem-solving skills through computer applications and programming coursework.",

      "Participated in organizing university orientation activities, collaborating with student teams on planning and coordination."
    ],
    technologies: [
      "Industrial Engineering",
      "Systems Engineering",
      "Operations Research",
      "Simulation",
      "Applied Mathematics",
      "Programming Fundamentals"
    ]
  }
];
