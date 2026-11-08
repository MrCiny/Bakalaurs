import {
  IconLayoutDashboard,
  IconServer,
  IconBox
} from "@tabler/icons-react";

export const navigation = [
  { label: "Dashboard", path: "/", icon: IconLayoutDashboard },
  { label: "Nodes", path: "/nodes", icon: IconServer },
  { label: "Services", path: "/services", icon: IconBox },
];