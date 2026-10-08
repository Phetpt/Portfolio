
import type { SkillCategory, TechCategory } from '@/types/portfolio';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend & Web Engineering',
    description:
      'Building scalable, maintainable web applications with component-driven architectures, type-safe development, and modern state management.',
    skills: [
      'React',
      'TypeScript',
      'JavaScript',
      'HTML5 & CSS3',
      'Reusable Component Architecture',
      'TanStack Query',
      'React Hook Form',
      'Zod'
    ]
  },
  {
    category: 'Mobile Application Development',
    description:
      'Developing cross-platform mobile applications with reusable interfaces, structured navigation, and backend-integrated user workflows.',
    skills: [
      'React Native',
      'Expo',
      'Expo Router',
      'TypeScript',
      'Mobile UI Architecture',
      'REST API Integration',
      'Asynchronous State Management'
    ]
  },
  {
    category: 'Backend & API Engineering',
    description:
      'Working with backend services, API contracts, authentication, and data access patterns to support reliable application workflows.',
    skills: [
      'Node.js',
      'NestJS',
      'RESTful API Design',
      'Axios',
      'JWT Authentication',
      'Role-Based Access Control',
      'PostgreSQL'
    ]
  },
  {
    category: 'Software Architecture & Design',
    description:
      'Applying software engineering principles to structure modular systems, evaluate technical trade-offs, and improve long-term maintainability.',
    skills: [
      'Software Architecture',
      'Separation of Concerns',
      'Modular Design',
      'C4 Modeling',
      'Architecture Decision Records',
      'API Service Layer Design',
      'Caching & Request Deduplication'
    ]
  },
  {
    category: 'Software Testing & Quality',
    description:
      'Applying testing, validation, and engineering practices to improve software correctness, reliability, and maintainability.',
    skills: [
      'Software Testing',
      'Unit Testing',
      'Integration Testing',
      'Form Validation',
      'API Mocking',
      'Mock Service Worker',
      'Git & Version Control'
    ]
  }
];

export const techCategory: TechCategory[] = [
  {
    title: 'Languages',
    skills: [
      {
        name: 'JavaScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      },
      {
        name: 'TypeScript',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      },
      {
        name: 'Python',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
      {
        name: 'HTML5',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      },
      {
        name: 'CSS3',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      {
        name: 'React',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      },
      {
        name: 'Next.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      },
      {
        name: 'NestJS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
      },
      {
        name: 'Node.js',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      },
      {
        name: 'Tailwind CSS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        name: 'Framer Motion',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg',
      },
    ],
  },
  {
    title: 'Databases',
    skills: [
      {
        name: 'PostgreSQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
      {
        name: 'MongoDB',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      },
      {
        name: 'Redis',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
      },
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      {
        name: 'Git',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      },
      {
        name: 'Docker',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      },
      {
        name: 'AWS',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      },
      {
        name: 'Vercel',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original-wordmark.svg',
      },
      {
        name: 'Linux',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg',
      },
      {
        name: 'Figma',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg',
      },
      {
        name: 'Cloudflare',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg',
      },
      {
        name: 'GraphQL',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
      },
    ],
  },
];
