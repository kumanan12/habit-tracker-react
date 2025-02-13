import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import HabitTable from './HabitTable'
import HabitInput from './HabitInput'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HabitTable />
    <HabitInput />
  </StrictMode>
)
