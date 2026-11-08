
export type ServiceType =
  | "docker"
  | "systemd"
  | "http"
  | "unknown";

export type ServiceStatus =
  | "running"
  | "stopped"
  | "unhealthy"
  | "unknown";

export type DiscoverySource =
  | "docker"
  | "systemd"
  | "network_scan"
  | "ai"
  | "manual";

export interface Service {
  id: string;
  nodeId: string;
  name: string;
  type: ServiceType;
  status: ServiceStatus;
  discoverySource: DiscoverySource;

  host?: string;
  port?: number;
  image?: string;

  cpuUsage?: number;       // Percentage
  memoryUsage?: number;    // MB
  uptimeSeconds?: number;

  createdAt: string;
  lastSeenAt: string;
}