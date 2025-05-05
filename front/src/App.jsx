import { useState } from 'react'
import './App.css'
import Home from './pages/home'
import Nosotras from './pages/Nosotras'
import Servicios from './pages/Servicios'
import Trabajos from './pages/Trabajos'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
     <Home/>
     <Nosotras/>
     <Servicios/>
     <Trabajos/>
     <Contacto/>
    </>
  )
}

export default App
