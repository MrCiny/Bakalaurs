
import { Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import type { Service } from "../../../types/service";
import { mockNodes } from "../../../mocks/nodes";

interface Props {
    service: Service;
}

export default function ServiceOverview({ service }: Props) {
    const node = mockNodes.find((n) => n.id === service.nodeId);

    return (
        <Paper withBorder p="md">
            <Stack>
                <Title order={4}>Service Information</Title>

                <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    <Text>Name: {service.name}</Text>
                    <Text>Type: {service.type}</Text>
                    <Text>Node: {node?.name ?? "Unknown"}</Text>
                    <Text>Host: {service.host ?? "-"}</Text>
                    <Text>Port: {service.port ?? "-"}</Text>
                    <Text>Image: {service.image ?? "-"}</Text>
                    <Text>Discovery: {service.discoverySource}</Text>
                    <Text>
                        Last Seen: {new Date(service.lastSeenAt).toLocaleString()}
                    </Text>
                </SimpleGrid>
            </Stack>
        </Paper>
    );
}
