import { Route, Routes } from 'react-router'
import DashboardLayout from '../layouts/DashboardLayout'
import '../app/App.css'
import DashboardPage from '../features/dashboard/DashboardPage'
import NodesPage from '../features/nodes/NodesPage'
import ServicesPage from '../features/services/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="nodes" element={<NodesPage />} />
        <Route path="services" element={<ServicesPage />} />
      </Route>
    </Routes>
  )
}

export default App
