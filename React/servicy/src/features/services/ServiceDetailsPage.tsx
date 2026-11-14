
import { useNavigate, useParams } from "react-router";
import {
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

import { mockServices } from "../../mocks/services";
import { mockNodes } from "../../mocks/nodes";
import ServiceStatusBadge from "./components/ServiceStatusBadge";

export default function ServiceDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const service = mockServices.find((s) => s.id === id);

    if (!service) {
        return <Text>Service not found.</Text>;
    }

    const node = mockNodes.find((n) => n.id === service.nodeId);

    return (
        <Stack>
            <Group>
                <Button
                    variant="subtle"
                    leftSection={<IconArrowLeft size={16} />}
                    onClick={() => navigate("/services")}
                >
                    Back
                </Button>
            </Group>

            <Group justify="space-between">
                <Title order={2}>{service.name}</Title>
                <ServiceStatusBadge status={service.status} />
            </Group>

            <Paper withBorder p="md">
                <Title order={4} mb="md">
                    Service Information
                </Title>

                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    <Text>Type: {service.type}</Text>
                    <Text>Node: {node?.name ?? "Unknown"}</Text>
                    <Text>Host: {service.host ?? "—"}</Text>
                    <Text>Port: {service.port ?? "—"}</Text>
                    <Text>Image: {service.image ?? "—"}</Text>
                    <Text>Discovery: {service.discoverySource}</Text>
                    <Text>
                        Last Seen: {new Date(service.lastSeenAt).toLocaleString()}
                    </Text>
                </SimpleGrid>
            </Paper>

            <SimpleGrid cols={{ base: 1, sm: 2 }}>
                <Paper withBorder p="md">
                    <Text fw={500} mb="sm">CPU Usage</Text>
                    <Progress value={service.cpuUsage ?? 0} />
                    <Text mt="xs">
                        {service.cpuUsage !== undefined
                        ? `${service.cpuUsage}%`
                        : "No data"}
                    </Text>
                </Paper>

                <Paper withBorder p="md">
                    <Text fw={500} mb="sm">Memory Usage</Text>
                    <Text size="xl" fw={600}>
                        {service.memoryUsage !== undefined
                        ? `${service.memoryUsage} MB`
                        : "No data"}
                    </Text>
                </Paper>
            </SimpleGrid>
        </Stack>
    );
}
