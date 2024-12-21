import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'; // Import the i18n configuration file
import "bootstrap/dist/css/bootstrap.min.css";

import App from './App';

createRoot(document.getElementById('root')!).render(
  <div className="container">
    <App />
  </div>,
)
