import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GaleriaProvider } from './context/GaleriaProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GaleriaProvider>
      <App />
    </GaleriaProvider>
  </React.StrictMode>,
)
