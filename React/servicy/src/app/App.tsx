
import { Route, Routes } from "react-router";

import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../features/dashboard/DashboardPage";
import NodesPage from "../features/nodes/NodesPage";
import NodeDetailsPage from "../features/nodes/NodeDetailsPage";
import ServicesPage from "../features/services/ServicesPage";
import PlaceholderPage from "../features/shared/PlaceholderPage";

export default function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />

        <Route path="nodes" element={<NodesPage />} />
        <Route path="nodes/:id" element={<NodeDetailsPage />} />
        <Route path="services" element={<ServicesPage />} />

        <Route path="*" element={<PlaceholderPage title="404 - Page not found" />} />
      </Route>
    </Routes>
  );
}