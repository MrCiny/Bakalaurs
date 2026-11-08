
import { useState } from "react";
import {
  AppShell,
  Burger,
  Group,
  NavLink,
  ScrollArea,
  Text
} from "@mantine/core";
import { NavLink as RouterNavLink, Outlet } from "react-router";
import { navigation } from "../app/navigation";

export default function DashboardLayout() {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 250,
        breakpoint: "sm",
        collapsed: { mobile: !opened }
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            hiddenFrom="sm"
            size="sm"
          />

          <Text fw={700} size="lg">
            Service Manager
          </Text>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p="md">
        <ScrollArea p="md">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                component={RouterNavLink}
                to={item.path}
                label={item.label}
                leftSection={<Icon size={18} />}
                onClick={() => setOpened(false)}
              />
            );
          })}
        </ScrollArea>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}