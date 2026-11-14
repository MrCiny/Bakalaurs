
import {
    Paper,
    Progress,
    SimpleGrid,
    Stack,
    Text,
    Title
} from "@mantine/core";
import type { Service } from "../../../types/service";

interface Props {
    service: Service;
}

export default function ServiceMetrics({ service }: Props) {
    const uptimeHours = service.uptimeSeconds !== undefined
        ? Math.floor(service.uptimeSeconds / 3600)
        : null;

    return (
        <Stack>
            <Title order={4}>Resource Usage</Title>

            <SimpleGrid cols={{ base: 1, sm: 3 }}>
                <Paper
                    withBorder
                    p="md"
                >
                    <Text
                        fw={500}
                        mb="sm"
                    >
                        CPU Usage
                    </Text>
                    <Progress value={service.cpuUsage ?? 0} />
                    <Text mt="xs">
                        {service.cpuUsage !== undefined
                        ? `${service.cpuUsage}%`
                        : "No data"}
                    </Text>
                </Paper>

                <Paper
                    withBorder
                    p="md"
                >
                    <Text fw={500}>Memory Usage</Text>
                    <Title
                        order={3}
                        mt="sm"
                    >
                        {service.memoryUsage !== undefined
                        ? `${service.memoryUsage} MB`
                        : "No data"}
                    </Title>
                </Paper>

                <Paper
                    withBorder
                    p="md"
                >
                    <Text fw={500}>Uptime</Text>
                    <Title
                        order={3}
                        mt="sm"
                    >
                        {uptimeHours !== null ? `${uptimeHours} hours` : "No data"}
                    </Title>
                </Paper>
            </SimpleGrid>
        </Stack>
    );
}
