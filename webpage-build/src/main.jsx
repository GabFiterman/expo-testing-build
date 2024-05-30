import React from 'react'
import ReactDOM from 'react-dom/client'

import { GlobalContextProvider } from '@/contexts'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
)
