
import type { ADR } from '@/types/portfolio';

export const adrsList: ADR[] = [
  {
    id: 'ADR-001',
    projectId: 'hr-management-platform',
    title: 'Shared Response Caching and In-Flight Request Deduplication',
    context:
      'Employee detail views retrieve related information from multiple API endpoints, including salary, tax deductions, leave balances, personal information, and documents. Independent component-level requests can trigger redundant network calls and introduce race conditions when asynchronous responses arrive out of order.',
    decision:
      'Implement shared response caching and in-flight request deduplication across five employee data domains. Requests with identical cache keys reuse pending operations or cached responses, while stale-response protection prevents outdated requests from overwriting newer employee data.',
    consequencesPositive: [
      'Reduced redundant network activity by sharing pending requests and cached responses across employee data consumers.',
      'Improved asynchronous data consistency by preventing stale responses from overwriting more recent state.',
      'Centralized request coordination across five employee data domains, simplifying data retrieval behavior across related interfaces.'
    ],
    consequencesNegative: [
      'Introduced additional complexity in cache lifecycle management, invalidation, and request coordination.',
      'Required careful handling of data mutations and cache freshness to avoid displaying outdated employee information.'
    ],
    alternativesConsidered: [
      'Independent component-level API fetching (simpler local implementation but risks duplicate requests and fragmented asynchronous state management).',
      'Fetching all employee information in a single aggregated request (simplifies request coordination but increases coupling between independently maintained data domains).'
    ]
  },
  {
    id: 'ADR-002',
    projectId: 'hr-management-platform',
    title: 'Reusable Component Architecture for Administrative Workflows',
    context:
      'The HR management platform contains multiple administrative workflows requiring consistent forms, data tables, dialogs, navigation, and feedback states. Implementing similar interface elements independently across pages would increase duplication and make organization-specific customization harder to maintain.',
    decision:
      'Adopt a modular React and TypeScript component architecture with shared UI primitives and domain-specific feature modules. Reuse common interaction patterns while keeping employee-related business logic separated from general-purpose presentation components.',
    consequencesPositive: [
      'Established a frontend architecture containing 39 UI component modules, with 28 modules referenced by multiple source files, including development showcases.',
      'Improved consistency across administrative interfaces through shared form, table, dialog, and navigation patterns.',
      'Reduced duplicated presentation logic and supported maintainable customization of organization-specific workflows.'
    ],
    consequencesNegative: [
      'Required additional design effort to define reusable component interfaces and responsibility boundaries.',
      'Introduced a risk of over-generalization when shared components need to support significantly different business workflows.'
    ],
    alternativesConsidered: [
      'Page-specific UI implementations (reduce initial abstraction overhead but increase duplication and maintenance costs).',
      'Highly configurable universal components (maximize reuse but can introduce excessive configuration complexity and obscure domain-specific behavior).'
    ]
  },
  {
    id: 'ADR-003',
    projectId: 'hr-management-platform',
    title: 'Client-Side Thai-Language Field Search vs Server-Side Search',
    context:
      'Employee information is distributed across multiple record sections, making specific fields difficult to locate through manual navigation. Thai-language queries require text normalization and flexible matching to support accurate information discovery within an employee record.',
    decision:
      'Implement client-side field-level search across six employee record sections using Thai text normalization, multi-token matching, relevance ranking, and direct navigation to matching fields. Search operates on employee information available within the current detail workflow.',
    consequencesPositive: [
      'Enabled field-level information discovery across six employee record sections without requiring users to navigate each section manually.',
      'Supported Thai-language queries with normalized text matching and relevance-ranked results.',
      'Avoided additional search-specific API operations for employee information already available on the client.'
    ],
    consequencesNegative: [
      'Client-side search performance depends on the amount of employee data available for processing.',
      'Search indexing rules and field mappings must be maintained as employee record structures evolve.'
    ],
    alternativesConsidered: [
      'Server-side search with dedicated indexing endpoints (supports larger datasets but introduces additional backend dependencies and network requests).',
      'Basic section-level filtering (simpler implementation but provides less precise navigation to individual employee fields).'
    ]
  },
  {
    id: 'ADR-004',
    projectId: 'hr-management-platform',
    title: 'Contextual Dialogs and Dedicated Pages for HR Workflows',
    context:
      'HR administration involves both focused interactions and complex employee record management. A single navigation pattern cannot efficiently accommodate lightweight actions, detailed forms, and multi-section employee information while preserving appropriate user context.',
    decision:
      'Use reusable dialog components for focused interactions and dedicated application pages for complex employee management workflows. Organize detailed employee records into domain-specific sections with clear navigation boundaries.',
    consequencesPositive: [
      'Preserved user context for focused administrative interactions through contextual dialogs.',
      'Provided dedicated navigation and screen space for complex employee record workflows.',
      'Supported consistent interaction patterns while allowing different workflows to use appropriate presentation structures.'
    ],
    consequencesNegative: [
      'Required consistent state management and navigation behavior across multiple presentation patterns.',
      'Dialog-based interactions require careful handling of validation, dismissal, and unsaved changes.'
    ],
    alternativesConsidered: [
      'Modal dialogs for every workflow (preserve page context but constrain complex forms and multi-section interfaces).',
      'Dedicated pages for every interaction (provide clear navigation but interrupt context for lightweight actions).',
      'Drawer-based interfaces for contextual editing (preserve surrounding content but introduce additional overlay and state-management complexity).'
    ]
  },
  {
    id: 'ADR-005',
    projectId: 'learning-platform',
    title: 'Shared API Service Layer for React Native Data Access',
    context:
      'Course browsing, course details, enrollment, and learning progress require communication with shared backend services. Placing HTTP requests directly inside React Native screens would couple presentation logic to endpoint contracts and duplicate request handling across related learning workflows.',
    decision:
      'Organize backend communication into shared API service modules using Axios. Keep screen components responsible for navigation, user interactions, and rendering while centralizing course-related request logic and API integration.',
    consequencesPositive: [
      'Separated presentation concerns from backend communication through clear service boundaries.',
      'Enabled reuse of API operations across course discovery, enrollment, and learning progress workflows.',
      'Improved maintainability by reducing direct dependencies between screen components and backend endpoint details.'
    ],
    consequencesNegative: [
      'Introduced an additional abstraction layer between UI components and backend services.',
      'Required clear ownership of response transformation, error handling, and asynchronous state management.'
    ],
    alternativesConsidered: [
      'Direct HTTP requests inside screen components (simpler initially but increase coupling and duplicated request logic).',
      'A single centralized application-wide data controller (consolidates access but risks excessive responsibility and tighter coupling between unrelated features).'
    ]
  },
  {
    id: 'ADR-006',
    projectId: 'learning-platform',
    title: 'Server-Authoritative Learning Progress vs Optimistic UI Updates',
    context:
      'Learning progress must remain consistent with lesson completion data persisted by the backend. Continue-learning and reset operations modify progress state, creating a risk of inconsistency if the mobile interface assumes successful updates before receiving server confirmation.',
    decision:
      'Refresh course data after continue-learning and reset mutations, using the backend-confirmed response as the authoritative learning state. Display loading, disabled-action, and error feedback while asynchronous operations are processed.',
    consequencesPositive: [
      'Maintained consistency between displayed learning progress and backend-persisted lesson completion data.',
      'Avoided complex rollback and conflict-resolution logic for failed progress mutations.',
      'Provided explicit feedback during asynchronous updates and synchronized the interface with server-confirmed state.'
    ],
    consequencesNegative: [
      'Required additional network requests after progress mutations.',
      'Introduced a short delay before updated learning progress could be displayed.'
    ],
    alternativesConsidered: [
      'Optimistic UI updates with rollback handling (provide faster perceived feedback but require additional synchronization and failure recovery logic).',
      'Updating local progress without server revalidation (reduces network requests but risks divergence from persisted backend state).'
    ]
  },
  {
    id: 'ADR-007',
    projectId: 'learning-platform',
    title: 'Duration-Based Learning Progress Calculation',
    context:
      'Course lessons can vary in duration, making equal weighting potentially misleading when interpreting cumulative learning progress. The mobile interface must determine completed lessons, identify the current lesson, and display meaningful progress from stored completion information.',
    decision:
      'Calculate lesson completion using cumulative lesson duration and backend-stored progress values. Apply a small tolerance for rounded progress values when identifying completed lessons and determining the current learning position.',
    consequencesPositive: [
      'Accounted for differences in lesson duration when interpreting course completion.',
      'Enabled the interface to identify completed lessons and the current learning position from cumulative progress.',
      'Supported consistent presentation of completion percentages and remaining learning state.'
    ],
    consequencesNegative: [
      'Introduced additional calculation logic and rounding tolerance handling.',
      'Depended on accurate lesson duration metadata and consistent progress values from the backend.'
    ],
    alternativesConsidered: [
      'Equal weighting for every lesson (simplifies calculation but can misrepresent progress when lesson durations differ).',
      'Tracking only the number of completed lessons (provides simple completion counts but does not account for differences in learning duration).'
    ]
  },
  {
    id: 'ADR-008',
    projectId: 'learning-platform',
    title: 'Reusable React Native Components vs Screen-Specific UI',
    context:
      'The mobile learning platform includes course browsing, course details, and learning progress screens that share visual patterns while supporting different interactions. Repeated screen-specific implementations would increase UI duplication and complicate future interface changes.',
    decision:
      'Separate reusable course cards, headers, and supporting interface components from route-based screen implementations. Organize shared theme constants and navigation logic to maintain consistent presentation across student workflows.',
    consequencesPositive: [
      'Established reusable interface patterns across three core student screens.',
      'Reduced duplicated presentation logic and simplified updates to shared UI elements.',
      'Supported a modular frontend structure that can accommodate additional learning workflows.'
    ],
    consequencesNegative: [
      'Required additional component boundaries, props, and shared styling conventions.',
      'Shared components must balance reusability with screen-specific interaction requirements.'
    ],
    alternativesConsidered: [
      'Implementing all UI elements directly within individual screens (simplifies initial development but increases duplication).',
      'Building a highly generalized component framework (provides extensive configurability but adds unnecessary abstraction for the current application scope).'
    ]
  }
];
