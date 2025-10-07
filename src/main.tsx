import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/assets/app.css'
import App from './App.tsx'
import { QueryClientProvider } from '@/contexts/QueryClientProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider>
      <App />
    </QueryClientProvider>
  </StrictMode>,
)
