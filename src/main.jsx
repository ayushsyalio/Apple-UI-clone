import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://e545bc1db3f387c165179a2bac2ad580@o4509420816367616.ingest.us.sentry.io/4509420828426240",

  
  
  sendDefaultPii: true
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
