import {
    Code,
    Paper,
    Stack,
    Text,
    Title
} from "@mantine/core";
import type { Service } from "../../../types/service";

interface Props {
    service: Service;
}

export default function ServiceConfiguration({ service }: Props) {
    return (
        <Paper
            withBorder
            p="md"
        >
            <Stack>
                <Title order={4}>Configuration</Title>

                <Text>Service Type: {service.type}</Text>
                <Text>Docker Image: {service.image ?? "Not available"}</Text>
                <Text>Host: {service.host ?? "Not available"}</Text>
                <Text>Port: {service.port ?? "Not available"}</Text>

                <Title order={5}>Raw Configuration</Title>

                <Code block>
                    {JSON.stringify(
                        {
                        name: service.name,
                        type: service.type,
                        image: service.image,
                        port: service.port,
                        nodeId: service.nodeId
                        },
                        null,
                        2
                    )}
                </Code>
            </Stack>
        </Paper>
    );
}
