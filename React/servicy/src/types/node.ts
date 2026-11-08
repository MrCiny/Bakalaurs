
export type NodeStatus = "online" | "offline";

export interface Node {
  id: string;
  name: string;
  hostname: string;
  ipAddress: string;
  operatingSystem: string;
  status: NodeStatus;
  cpuUsage: number;
  memoryUsage: number;
  agentVersion: string;
  lastSeen: string;
}