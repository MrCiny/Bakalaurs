
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Badge,
  Group,
  Paper,
  Progress,
  Stack,
  Table,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { mockNodes } from "../../mocks/nodes";

export default function NodesPage() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredNodes = mockNodes.filter((node) =>
    `${node.name} ${node.hostname} ${node.ipAddress}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <Stack>
      <Group justify="space-between">
        <Title order={2}>Nodes</Title>
        <Text c="dimmed">{mockNodes.length} nodes</Text>
      </Group>

      <TextInput
        placeholder="Search nodes..."
        leftSection={<IconSearch size={16} />}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />

      <Paper withBorder>
        <Table.ScrollContainer minWidth={800}>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>IP Address</Table.Th>
                <Table.Th>Operating System</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>CPU</Table.Th>
                <Table.Th>Memory</Table.Th>
              </Table.Tr>
            </Table.Thead>

            <Table.Tbody>
              {filteredNodes.map((node) => (
                <Table.Tr
                  key={node.id}
                  onClick={() => navigate(`/nodes/${node.id}`)}
                  style={{ cursor: "pointer" }}
                >
                  <Table.Td>
                    <Text fw={500}>{node.name}</Text>
                    <Text size="xs" c="dimmed">
                      {node.hostname}
                    </Text>
                  </Table.Td>

                  <Table.Td>{node.ipAddress}</Table.Td>
                  <Table.Td>{node.operatingSystem}</Table.Td>

                  <Table.Td>
                    <Badge color={node.status === "online" ? "green" : "red"}>
                      {node.status}
                    </Badge>
                  </Table.Td>

                  <Table.Td>
                    <Progress value={node.cpuUsage} size="sm" />
                    <Text size="xs">{node.cpuUsage}%</Text>
                  </Table.Td>

                  <Table.Td>
                    <Progress value={node.memoryUsage} size="sm" />
                    <Text size="xs">{node.memoryUsage}%</Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Table.ScrollContainer>
      </Paper>

      {filteredNodes.length === 0 && (
        <Text c="dimmed" ta="center">
          No nodes found.
        </Text>
      )}
    </Stack>
  );
}