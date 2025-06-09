import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './Button.jsx'
import { Form } from './Form.jsx'
import { ListaDeTareas } from './Tareas.jsx'
import { Semaforo } from './Semaforo.jsx'

function App() {

  return (
    <>
      <div>
        <Button></Button>
      </div>
      <div><Form></Form></div>
      <div><ListaDeTareas></ListaDeTareas></div>
      <div><Semaforo></Semaforo></div>
    </>
  )
}

export default App
