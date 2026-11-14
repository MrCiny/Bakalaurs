
import { useNavigate, useParams } from "react-router";
import {
    Button,
    Group,
    Stack,
    Tabs,
    Text,
    Title
} from "@mantine/core";
import {
    IconArrowLeft,
    IconInfoCircle,
    IconFileText,
    IconActivity,
    IconSettings,
    IconBrain
} from "@tabler/icons-react";

import { mockServices } from "../../mocks/services";
import ServiceStatusBadge from "./components/ServiceStatusBadge";
import ServiceOverview from "./components/ServiceOverview";
import ServiceLogs from "./components/ServiceLogs";
import ServiceMetrics from "./components/ServiceMetrics";
import ServiceConfiguration from "./components/ServiceConfiguration";
import ServiceAIAnalysis from "./components/ServiceAIAnalysis";

export default function ServiceDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const service = mockServices.find((s) => s.id === id);

    if (!service)
        return <Text>Service not found.</Text>;

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

            <Tabs
                defaultValue="overview"
                keepMounted={false}
            >
                <Tabs.List>
                    <Tabs.Tab
                        value="overview"
                        leftSection={<IconInfoCircle size={16} />}
                    >
                        Overview
                    </Tabs.Tab>

                    <Tabs.Tab
                        value="logs"
                        leftSection={<IconFileText size={16} />}
                    >
                        Logs
                    </Tabs.Tab>

                    <Tabs.Tab
                        value="metrics"
                        leftSection={<IconActivity size={16} />}
                    >
                        Metrics
                    </Tabs.Tab>

                    <Tabs.Tab
                        value="configuration"
                        leftSection={<IconSettings size={16} />}
                    >
                        Configuration
                    </Tabs.Tab>

                    <Tabs.Tab
                        value="ai"
                        leftSection={<IconBrain size={16} />}
                    >
                        AI Analysis
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel
                    value="overview"
                    pt="md"
                >
                    <ServiceOverview service={service} />
                </Tabs.Panel>

                <Tabs.Panel
                    value="logs"
                    pt="md"
                >
                    <ServiceLogs service={service} />
                </Tabs.Panel>

                <Tabs.Panel
                    value="metrics"
                    pt="md"
                >
                    <ServiceMetrics service={service} />
                </Tabs.Panel>

                <Tabs.Panel
                    value="configuration"
                    pt="md"
                >
                    <ServiceConfiguration service={service} />
                </Tabs.Panel>

                <Tabs.Panel
                    value="ai"
                    pt="md"
                >
                    <ServiceAIAnalysis service={service} />
                </Tabs.Panel>
            </Tabs>
        </Stack>
    );
}
