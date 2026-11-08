
import {
  Paper,
  SimpleGrid,
  Stack,
  Text,
  Title
} from "@mantine/core";

import { mockNodes } from "../../mocks/nodes";
import { mockServices } from "../../mocks/services";

export default function DashboardPage() {
  const onlineNodes = mockNodes.filter(
    (node) => node.status === "online"
  ).length;

  const stats = [
    { label: "Total Nodes", value: mockNodes.length },
    { label: "Online Nodes", value: onlineNodes },
    { label: "Offline Nodes", value: mockNodes.length - onlineNodes },
    { label: "Total Services", value: mockServices.length }
  ];

  return (
    <Stack>
      <Title order={2}>Dashboard</Title>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
        {stats.map((stat) => (
          <Paper key={stat.label} withBorder p="md">
            <Text size="sm" c="dimmed">
              {stat.label}
            </Text>

            <Title order={2}>{stat.value}</Title>
          </Paper>
        ))}
      </SimpleGrid>
    </Stack>
  );
}