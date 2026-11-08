
import type { Node } from "../types/node";

export const mockNodes: Node[] = [
  {
    id: "node-01",
    name: "Main Server",
    hostname: "server-main",
    ipAddress: "192.168.1.10",
    operatingSystem: "Ubuntu 24.04",
    status: "online",
    cpuUsage: 24,
    memoryUsage: 48,
    agentVersion: "0.1.0",
    lastSeen: "2026-11-08T14:55:00Z"
  },
  {
    id: "node-02",
    name: "Raspberry Pi",
    hostname: "raspberrypi",
    ipAddress: "192.168.1.20",
    operatingSystem: "Raspberry Pi OS",
    status: "online",
    cpuUsage: 15,
    memoryUsage: 62,
    agentVersion: "0.1.0",
    lastSeen: "2026-11-08T14:54:00Z"
  },
  {
    id: "node-03",
    name: "Media Server",
    hostname: "media-server",
    ipAddress: "192.168.1.30",
    operatingSystem: "Debian 12",
    status: "online",
    cpuUsage: 71,
    memoryUsage: 80,
    agentVersion: "0.1.0",
    lastSeen: "2026-11-08T14:52:00Z"
  },
  {
    id: "node-04",
    name: "Development Server",
    hostname: "dev-server",
    ipAddress: "192.168.1.40",
    operatingSystem: "Ubuntu 22.04",
    status: "offline",
    cpuUsage: 0,
    memoryUsage: 0,
    agentVersion: "0.1.0",
    lastSeen: "2026-11-07T20:30:00Z"
  },
  {
    id: "node-05",
    name: "Database Server",
    hostname: "db-server",
    ipAddress: "192.168.1.50",
    operatingSystem: "Debian 12",
    status: "online",
    cpuUsage: 34,
    memoryUsage: 55,
    agentVersion: "0.1.0",
    lastSeen: "2026-11-08T14:53:00Z"
  }
];
