
import { Badge } from "@mantine/core";
import type { ServiceStatus } from "../../../types/service";

interface Props {
  status: ServiceStatus;
}

export default function ServiceStatusBadge({ status }: Props) {
  const colors: Record<ServiceStatus, string> = {
    running: "green",
    stopped: "red",
    unhealthy: "orange",
    unknown: "gray"
  };

  return (
    <Badge color={colors[status]}>
      {status}
    </Badge>
  );
}