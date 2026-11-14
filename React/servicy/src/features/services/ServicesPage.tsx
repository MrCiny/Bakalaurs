
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Group,
  Paper,
  Select,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
  Title
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

import { mockServices } from "../../mocks/services";
import { mockNodes } from "../../mocks/nodes";
import ServiceStatusBadge from "./components/ServiceStatusBadge";

export default function ServicesPage() {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string | null>("all");
    const [nodeFilter, setNodeFilter] = useState<string | null>("all");

    const getNodeName = (nodeId: string) => {
        return mockNodes.find((node) => node.id === nodeId)?.name ?? "Unknown";
    };

    const filteredServices = mockServices.filter((service) => {
        const nodeName = getNodeName(service.nodeId);

        const matchesSearch =
        `${service.name} ${nodeName} ${service.port ?? ""}`
            .toLowerCase()
            .includes(search.toLowerCase());

        const matchesStatus =
        statusFilter === "all" || service.status === statusFilter;

        const matchesNode =
        nodeFilter === "all" || service.nodeId === nodeFilter;

        return matchesSearch && matchesStatus && matchesNode;
    });

    const stats = [
        { label: "Total Services", value: mockServices.length },
        {
            label: "Running",
            value: mockServices.filter((s) => s.status === "running").length
        },
        {
            label: "Stopped",
            value: mockServices.filter((s) => s.status === "stopped").length
        },
        {
            label: "Unknown",
            value: mockServices.filter((s) => s.status === "unknown").length
        }
    ];

    return (
        <Stack>
            <Group justify="space-between">
                <Title order={2}>Services</Title>
                <Text c="dimmed">{mockServices.length} services</Text>
            </Group>

            <SimpleGrid cols={{ base: 2, md: 4 }}>
                {stats.map((stat) => (
                    <Paper key={stat.label} withBorder p="md">
                        <Text size="sm" c="dimmed">
                        {stat.label}
                        </Text>
                        <Title order={2}>{stat.value}</Title>
                    </Paper>
                ))}
            </SimpleGrid>

            <Group grow align="end">
                <TextInput
                    label="Search"
                    placeholder="Search services..."
                    leftSection={<IconSearch size={16} />}
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                />

                <Select
                    label="Status"
                    value={statusFilter}
                    onChange={setStatusFilter}
                    data={[
                        { label: "All statuses", value: "all" },
                        { label: "Running", value: "running" },
                        { label: "Stopped", value: "stopped" },
                        { label: "Unhealthy", value: "unhealthy" },
                        { label: "Unknown", value: "unknown" }
                    ]}
                    allowDeselect={false}
                />

                <Select
                    label="Node"
                    value={nodeFilter}
                    onChange={setNodeFilter}
                    data={[
                        { label: "All nodes", value: "all" },
                        ...mockNodes.map((node) => ({
                        label: node.name,
                        value: node.id
                        }))
                    ]}
                    allowDeselect={false}
                />
            </Group>

            <Paper withBorder>
                <Table.ScrollContainer minWidth={850}>
                    <Table striped highlightOnHover>
                        <Table.Thead>
                        <Table.Tr>
                            <Table.Th>Name</Table.Th>
                            <Table.Th>Type</Table.Th>
                            <Table.Th>Node</Table.Th>
                            <Table.Th>Port</Table.Th>
                            <Table.Th>Status</Table.Th>
                            <Table.Th>Discovery</Table.Th>
                        </Table.Tr>
                        </Table.Thead>

                        <Table.Tbody>
                        {filteredServices.map((service) => (
                            <Table.Tr
                            key={service.id}
                            onClick={() => navigate(`/services/${service.id}`)}
                            style={{ cursor: "pointer" }}
                            >
                            <Table.Td>
                                <Text fw={500}>{service.name}</Text>
                            </Table.Td>

                            <Table.Td>{service.type}</Table.Td>

                            <Table.Td>
                                {getNodeName(service.nodeId)}
                            </Table.Td>

                            <Table.Td>
                                {service.port ?? "-"}
                            </Table.Td>

                            <Table.Td>
                                <ServiceStatusBadge status={service.status} />
                            </Table.Td>

                            <Table.Td>
                                {service.discoverySource}
                            </Table.Td>
                            </Table.Tr>
                        ))}
                        </Table.Tbody>
                    </Table>
                </Table.ScrollContainer>
            </Paper>

            {filteredServices.length === 0 && (
                <Text c="dimmed" ta="center">
                    No services found.
                </Text>
            )}
        </Stack>
    );
}