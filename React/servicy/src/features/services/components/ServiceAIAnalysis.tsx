
import {
    Alert,
    Button,
    Paper,
    Stack,
    Text,
    Title
} from "@mantine/core";
import { IconBrain } from "@tabler/icons-react";
import type { Service } from "../../../types/service";

interface Props {
    service: Service;
}

export default function ServiceAIAnalysis({ service }: Props) {
    return (
        <Paper
            withBorder
            p="md"
        >
            <Stack>
                <Title order={4}>AI Analysis</Title>

                <Text c="dimmed">
                    Analyze {service.name} using artificial intelligence.
                </Text>

                <Alert
                    icon={<IconBrain size={18} />}
                    color="blue"
                >
                    AI analysis is not available yet.
                    This feature will be implemented when the backend
                    and AI Orchestrator are ready.
                </Alert>

                <Button
                    disabled
                    leftSection={
                        <IconBrain size={18} />
                    }
                >
                    Analyze Service
                </Button>
            </Stack>
        </Paper>
    );
}
