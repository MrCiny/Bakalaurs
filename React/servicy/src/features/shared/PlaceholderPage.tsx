
import { Stack, Text, Title } from "@mantine/core";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <Stack gap="xs">
      <Title order={2}>{title}</Title>
      <Text c="dimmed">
        This section will be implemented later.
      </Text>
    </Stack>
  );
}