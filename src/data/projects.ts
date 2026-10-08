import type { CaseStudy } from "@/types/portfolio";

export const caseStudy: CaseStudy[] = [
  {
    id: 'hr-management-platform',
    featured: true,
    title: 'HR Management Platform — Employee Administration & Records',
    subtitle: 'An internal HR management platform featuring reusable React components, role-based access control, efficient employee data management, and Thai-language search across employee records.',
    role: 'Frontend Developer Intern',
    period: 'Jun 2026 - Jul 2026',
    scale: '7 Application Pages • 7 Employee Detail Sections • 39 UI Components • 25+ people',
    summary: 'Developed React and TypeScript interfaces for an internal HR management platform, emphasizing reusable component architecture, RESTful API integration, role-based access control, and reliable employee data management. Implemented response caching, request deduplication, asynchronous state handling, and Thai-language field-level search to support administrative workflows.',
    tags: ['React', 'TypeScript', 'REST APIs', 'JWT', 'RBAC', 'React Hook Form', 'Zod', 'Mock Service Worker', 'Response Caching'],
    impactStats: [
    { label: 'UI Components', value: '39 Modules' },
    { label: 'Reused Components', value: '28 Modules' },
    { label: 'API Operations', value: '16 Defined' },
    { label: 'Cached Data Domains', value: '5 Domains' }
  ],
  problem: 'Existing HR operations relied heavily on manual processes and a third-party management system with limited customization capabilities, numerous unnecessary features, and restricted access to reusable organizational data. These limitations hindered workflow efficiency, system flexibility, and the ability to leverage employee information for future operational needs.',
  architectureDetails: [
    'Designed a modular React and TypeScript frontend architecture with reusable UI components, supporting consistent interaction patterns and maintainable employee management workflows.',

    'Integrated RESTful API clients for employee records, role assignments, and administrative operations, incorporating permission-aware interfaces and client-side route protection.',

    'Engineered shared response caching and in-flight request deduplication across five employee data domains, with stale-response protection to maintain consistent asynchronous data states.',

    'Implemented Thai-language field-level search using text normalization, multi-token matching, relevance ranking, and deep linking across six employee record sections.',

    'Structured employee management interfaces into dedicated application pages and domain-specific sections, separating authentication, employee navigation, and detailed record workflows.'
  ],
  tradeoffs: [
    {
      choice: 'Reusable Component Architecture vs Page-Specific Components',
      why: 'Established shared UI abstractions to improve consistency, maintainability, and code reuse across administrative workflows, while keeping domain-specific behavior within feature modules.',
      alternativeRejected: 'Page-specific implementations offer greater local flexibility but increase code duplication, maintenance overhead, and the risk of inconsistent UI behavior.'
    },
    {
      choice: 'Shared Request Caching vs Independent Data Fetching',
      why: 'Centralized response caching and in-flight request deduplication to reduce redundant API calls, coordinate asynchronous operations, and protect data consistency through stale-response handling.',
      alternativeRejected: 'Independent component-level fetching simplifies local implementation but can introduce duplicate requests, fragmented loading states, and race conditions when responses arrive out of order.'
    },
    {
      choice: 'Client-Side Field-Level Search vs Server-Side Search',
      why: 'Implemented Thai text normalization, multi-token matching, and result ranking within the employee detail view to provide precise field navigation without requiring additional search-specific API operations.',
      alternativeRejected: 'Server-side search can support larger datasets and centralized indexing but introduces additional backend dependencies and request latency for searching data already available in the current employee record.'
    },
    {
      choice: 'Contextual Overlays vs Dedicated Page Navigation',
      why: 'Evaluated modal dialogs, side panels, and dedicated pages based on workflow complexity, navigation context, and state management requirements. Modal dialogs suit focused interactions, drawers preserve the surrounding page context, while dedicated pages provide clearer navigation and sufficient space for complex, multi-section workflows.',
      alternativeRejected: 'Using a single presentation pattern for every workflow was avoided because modals can constrain complex forms, drawers introduce additional overlay and state-management complexity, and dedicated pages can interrupt the context of lightweight tasks.'
    }

  ],
  
  keyOutcomes: [
    'Established a foundation for replacing third-party HR software for 25+ internal users, with the potential to avoid ฿15,000+ in estimated annual subscription costs.',

    'Consolidated fragmented HR workflows into a centralized platform spanning 7 employee record sections, supporting the transition from manual administration to standardized digital processes.',

    'Reduced reliance on vendor-controlled functionality by enabling organization-specific workflows, greater control over employee data, and future system extensibility.',

    'Improved employee information accessibility through Thai-language search across 6 record sections, reducing the need for manual navigation through complex employee records.'
  ],
  },


  {
    id: 'learning-platform',
    featured: true,
    title: 'Learning Platform — Course Discovery & Learning Progress',
    subtitle:
      'A mobile learning platform featuring reusable React Native components, RESTful API integration, course enrollment, and lesson-level progress tracking, supported by a shared backend and web administration panel.',
    role: 'Mobile Frontend Developer',
    period: 'Feb 2026 - Apr 2026',
    scale:
      '3 Core Student Screens • 3 User Roles • Mobile & Web Clients • 5 Team Members',
    summary:
      'Developed React Native and TypeScript interfaces for a university learning platform, focusing on course browsing, course details, and learning progress. Built reusable UI components, integrated RESTful APIs, and implemented enrollment-aware navigation, asynchronous data handling, and progress updates. Collaborated within a five-member team delivering a mobile application, NestJS backend, and React administration panel.',
    tags: [
      'React Native',
      'TypeScript',
      'Expo',
      'Expo Router',
      'REST APIs',
      'Axios',
      'Reusable Components',
      'Learning Progress',
      'C4 Modeling'
    ],
    impactStats: [
      { label: 'Core Student Screens', value: '3 Screens' },
      { label: 'Platform User Roles', value: '3 Roles' },
      { label: 'Application Layers', value: '3 Layers' },
      { label: 'Team Members', value: '5 Members' }
    ],
    problem:
      'The project addressed the need for a connected learning workflow in which students could discover courses, review lesson information, enroll, and track their progress. Teachers needed course creation and publishing tools, while administrators needed centralized record management. The design challenge was to connect these workflows through a shared backend while keeping mobile navigation clear and separating presentation logic from data access.',
    architectureDetails: [
      'Structured the mobile frontend into route-based screens, reusable UI components, shared theme constants, and API service modules, separating presentation, navigation, and backend communication.',

      'Developed course browsing and detail screens with reusable course cards, dynamic course routes, pull-to-refresh, and data reloading when the detail screen regains focus.',

      'Integrated course detail and enrollment APIs through a shared Axios client, adapting the primary action to registration and payment states before navigating to the payment screen.',

      'Implemented learning progress interfaces that derive completed lessons from cumulative lesson duration and stored progress, displaying the current lesson, completion percentage, and remaining learning state.',

      'Connected continue-learning and reset actions to the backend progress endpoint, sending lesson completion flags, refreshing server data after updates, and providing loading states, disabled actions, and error feedback.'
    ],
    tradeoffs: [
      {
        choice: 'Reusable UI Components vs Screen-Specific Implementations',
        why:
          'Separated course cards, headers, and supporting UI elements from screen layouts to encourage consistent presentation and simplify future interface changes.',
        alternativeRejected:
          'Building every element directly inside each screen would simplify initial implementation but increase duplication and make shared visual changes harder to maintain.'
      },
      {
        choice: 'Shared API Services vs Direct Requests Within Screens',
        why:
          'Organized course operations within a shared API service so screens could focus on user interaction and rendering while reusing backend request logic.',
        alternativeRejected:
          'Placing HTTP requests directly throughout screen components would couple presentation to endpoint details and duplicate request handling across related workflows.'
      },
      {
        choice: 'Server Refresh After Progress Updates vs Optimistic Updates',
        why:
          'Reloaded course data after continue-learning and reset actions to display the progress returned by the backend and keep the interface aligned with persisted state.',
        alternativeRejected:
          'Optimistic updates could provide faster visual feedback but require rollback handling and careful synchronization when a request fails or the backend calculates a different progress value.'
      },
      {
        choice: 'Duration-Based Progress vs Equal Weight Per Lesson',
        why:
          'Used cumulative lesson duration to interpret progress and identify completed lessons, with a small tolerance to accommodate rounded progress values returned by the backend.',
        alternativeRejected:
          'Treating every lesson as equally weighted would simplify calculations but could misrepresent progress when lesson durations differ.'
      }
    ],
    keyOutcomes: [
      'Delivered three core student screens covering course browsing, course details, and learning progress within the team learning platform.',

      'Connected course discovery to enrollment and payment navigation, using registration and payment states to determine the available course action.',

      'Enabled students to continue learning and reset progress through backend-persisted lesson completion updates with visible progress feedback.',

      'Established reusable mobile UI components and a separate API service layer to support further development across student and teacher workflows.'
    ]
  }
];
