
import { AppShell, NavLink, Title } from "@mantine/core";
import { NavLink as RouterNavLink, Outlet } from "react-router";

const navigation = [
  { label: "Dashboard", path: "/" },
  { label: "Nodes", path: "/nodes" },
  { label: "Services", path: "/services" },
];

export default function DashboardLayout() {
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: "sm" }}
      padding="md"
    >
      <AppShell.Header p="md">
        <Title order={3}>AI Service Manager</Title>
      </AppShell.Header>

      <AppShell.Navbar p="sm">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            label={item.label}
            component={RouterNavLink}
            to={item.path}
          />
        ))}
      </AppShell.Navbar>

      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}