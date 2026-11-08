
import { Title, Text, Stack, SimpleGrid, Paper, TextInput, Select, Group, Table, Badge, Anchor } from "@mantine/core";

import { mockServices } from "../../mocks/services";
import { useState } from "react";
import { IconSearch } from "@tabler/icons-react";
import { mockNodes } from "../../mocks/nodes";

export default function ServicesPage() {
    const [search, setSearch] = useState("");
    const [nodeFilter, setNodeFilter] = useState<string | null>("all");
    const [statusFilter, setStatusFilter] = useState<string | null>("all");

    /*const filteredNodes = mockServices.filter((node) =>
        `${node.name} ${node.hostname} ${node.ipAddress}`
          .toLowerCase()
          .includes(search.toLowerCase())
    )*/

    const runningServices = mockServices.filter(
        (service) => service.status === "running"
    ).length;

    const stoppedServices = mockServices.filter(
        (service) => service.status === "stopped"
    ).length;

    const unknownServices = mockServices.filter(
        (service) => service.status === "unknown"
    ).length;

    const unhealthyServices = mockServices.filter(
        (service) => service.status === "unhealthy"
    ).length;
    
    const stats = [
        { label: "Total", value: mockServices.length },
        { label: "Running", value: runningServices },
        { label: "Stopped", value: stoppedServices },
        { label: "Unhealthy", value: unhealthyServices },
        { label: "Unknown", value: unknownServices }
    ];

    const availableNodes = mockNodes.map((node) => ({
        value: node.id,
        label: node.name
    }))

    const statusColors = {
        running: "green",
        stopped: "red",
        unhealthy: "yellow",
        unknown: "gray"
    }

    const normalizedSearch = search.trim().toLowerCase();

    const filteredServices = mockServices.filter((service) => {
        const matchesStatus = statusFilter === "all" || service.status === statusFilter;
        const matchesNode = nodeFilter === "all" || service.nodeId === nodeFilter;
        const matchesSearch = !normalizedSearch ||
            `${service.name} ${service.host} ${service.port} ${service.discoverySource}`
                .toLowerCase()
                .includes(normalizedSearch);

        return matchesStatus && matchesNode && matchesSearch;
    });

    return (
        <Stack>
            <Title order={2}>Services</Title>
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
            <TextInput
                placeholder="Search services..."
                leftSection={<IconSearch size={16} />}
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
            />

            <Group grow>
                <Select
                    placeholder="Filter by status"
                    data={[
                        { value: "all", label: "All statuses" },
                        { value: "running", label: "Running" },
                        { value: "stopped", label: "Stopped" },
                        { value: "unhealthy", label: "Unhealthy" },
                        { value: "unknown", label: "Unknown" }
                    ]}
                    onChange={setStatusFilter}
                />
                <Select
                    placeholder="Filter by node"
                    data={[
                        { value: "all", label: "All nodes" },
                        ...availableNodes
                    ]}
                    onChange={setNodeFilter}
                />
            </Group>

            <Paper withBorder>
                <Table.ScrollContainer minWidth={800}>
                    <Table striped highlightOnHover>
                        <Table.Thead>
                            <Table.Tr>
                            <Table.Th>Service</Table.Th>
                            <Table.Th>Node</Table.Th>
                            <Table.Th>Port</Table.Th>
                            <Table.Th>Status</Table.Th>
                            </Table.Tr>
                        </Table.Thead>
        
                        <Table.Tbody>
                            {filteredServices.map((services) => (
                                <Table.Tr
                                    key={services.id}
                                    //onClick={() => navigate(`/nodes/${node.id}`)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <Table.Td>
                                    <Anchor
                                        fw={500}
                                        href={`http://${services.host}:${services.port}`}
                                        target="_blank"
                                    >
                                        {services.name}
                                    </Anchor>
                                    <Text size="xs" c="dimmed">
                                        {services.discoverySource}
                                    </Text>
                                    </Table.Td>
                
                                    <Table.Td>{services.host}</Table.Td>
                                    <Table.Td>{services.port}</Table.Td>
                
                                    <Table.Td>
                                    <Badge color={statusColors[services.status]}>
                                        {services.status}
                                    </Badge>
                                    </Table.Td>
                                </Table.Tr>
                            ))}
                        </Table.Tbody>
                    </Table>
                </Table.ScrollContainer>
            </Paper>
        </Stack>
    );
}