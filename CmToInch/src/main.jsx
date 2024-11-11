import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Isodd from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Isodd />
  </StrictMode>,
)
