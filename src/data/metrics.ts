import type { ImpactMetric } from "@/types/portfolio";


export const impactMetrics: ImpactMetric[] = [
  {
    id: "architecture",
    label: "Reusable UI Architecture",
    value: "39",
    subtext:
      "Developed 39 UI component modules, with 28 reused across multiple source files to support consistent application interfaces.",
    change: "28 Reused Component Modules",
    icon: "Layers",
  },
  {
    id: "integration",
    label: "API Integration",
    value: "16",
    subtext:
      "Implemented frontend API clients for 16 distinct HTTP operations covering employee records, role assignments, audit history, and tracking controls.",
    change: "16 Defined API Operations",
    icon: "Network",
  },
  {
    id: "reliability",
    label: "Data Fetching Reliability",
    value: "5",
    subtext:
      "Implemented response caching, in-flight request deduplication, and stale-response protection across five employee data domains.",
    change: "5 Cached Data Domains",
    icon: "Zap",
  },
  {
    id: "adoption",
    label: "Internal Platform Adoption",
    value: "25+",
    subtext:
      "Developed an internal employee management platform used by 25+ organizational users, supporting centralized employee records and administrative workflows.",
    change: "25+ Internal Users",
    icon: "Users",
}
];

