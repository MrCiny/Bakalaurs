import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core'
import { Notifications } from "@mantine/notifications";

import App from './app/App.tsx'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <Notifications />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
)