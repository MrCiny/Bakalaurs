
import { useState } from "react";
import { Button, Group, Paper, Stack, Text, Title } from "@mantine/core";
import type { Service } from "../../../types/service";

interface Props {
    service: Service;
}

export default function ServiceLogs({ service }: Props) {
    const [logs, setLogs] = useState([
        "[14:30:01] Service started",
        "[14:30:02] Initializing components",
        "[14:30:03] Listening for connections",
        "[14:30:04] Service ready"
    ]);

    const refreshLogs = () => {
        setLogs([...logs, "[14:35:00] Mock logs refreshed"]);
    };

    return (
        <Stack>
            <Group justify="space-between">
                <Title order={4}>Logs - {service.name}</Title>
                <Button
                    variant="light"
                    onClick={refreshLogs}
                >
                    Refresh
                </Button>
            </Group>

            <Paper
                withBorder
                p="md"
                bg="dark.8"
            >
                <Text
                    ff="monospace"
                    size="sm"
                    style={{ whiteSpace: "pre-wrap" }}
                >
                    {logs.join("\n")}
                </Text>
            </Paper>
        </Stack>
    );
}
