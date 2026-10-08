export type ArchitectureLayer = 'edge' | 'gateway' | 'compute' | 'messaging' | 'storage';

export interface ArchitectureNode {
  id: string;
  name: string;
  shortRole: string;
  layer: ArchitectureLayer;
  tech: string;
  qps: string;
  latency: string;
  sla: string;
  failoverStrategy: string;
  tradeoffs: string;
  keyResponsibilities: string[];
  connectionsTo: string[];
}