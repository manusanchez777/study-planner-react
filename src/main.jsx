//aqui se importan las dependencias necesarias //
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './assets/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
//este es el punto de entrada de la aplicacion, aqui se renderiza el componente principal App//