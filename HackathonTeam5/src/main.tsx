import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'normalize.css'
import App from './App'
//import App from './App.tsx'
//import InputBar from './components/inputBar/InputBar.tsx'
//import Reaction from './pages/reaction/Reaction.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
