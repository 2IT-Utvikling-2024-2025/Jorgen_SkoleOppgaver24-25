import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import checkOddOrEven from './comps/isEven'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <checkOddOrEven></checkOddOrEven>
  </StrictMode>,
)
