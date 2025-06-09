import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Producto, ListaDeProductos } from './Productos.jsx'

function App() {

  return (
    <>
      <ListaDeProductos arr={[{nombre:"Plátano", precio: "2€", descripcion:"Plátano"},{nombre:"Plátano2", precio: "22€", descripcion:"Plátano2"}]}></ListaDeProductos>
    </>
  )
}

export default App
