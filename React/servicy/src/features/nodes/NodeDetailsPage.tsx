
import { useNavigate, useParams } from "react-router";
import {
  Badge,
  Button,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";

import { mockNodes } from "../../mocks/nodes";

export default function NodeDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const node = mockNodes.find((item) => item.id === id);

  if (!node) {
    return <Text>Node not found.</Text>;
  }

  return (
    <Stack>
      <Group>
        <Button
          variant="subtle"
          leftSection={<IconArrowLeft size={16} />}
          onClick={() => navigate("/nodes")}
        >
          Back
        </Button>
      </Group>

      <Group justify="space-between">
        <Title order={2}>{node.name}</Title>

        <Badge color={node.status === "online" ? "green" : "red"}>
          {node.status}
        </Badge>
      </Group>

      <Paper withBorder p="md">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          <Text>Hostname: {node.hostname}</Text>
          <Text>IP Address: {node.ipAddress}</Text>
          <Text>OS: {node.operatingSystem}</Text>
          <Text>Agent Version: {node.agentVersion}</Text>
          <Text>Last Seen: {new Date(node.lastSeen).toLocaleString()}</Text>
        </SimpleGrid>
      </Paper>

      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <Paper withBorder p="md">
          <Text fw={500} mb="sm">CPU Usage</Text>
          <Progress value={node.cpuUsage} size="lg" />
          <Text mt="xs">{node.cpuUsage}%</Text>
        </Paper>

        <Paper withBorder p="md">
          <Text fw={500} mb="sm">Memory Usage</Text>
          <Progress value={node.memoryUsage} size="lg" />
          <Text mt="xs">{node.memoryUsage}%</Text>
        </Paper>
      </SimpleGrid>
    </Stack>
  );
}