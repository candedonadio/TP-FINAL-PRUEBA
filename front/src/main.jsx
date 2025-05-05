import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Index from '@pages/index/Index.jsx'
import Nosotras from '@pages/Nosotras/Nosotras.jsx'
import Servicios from '@pages/Servicios/Servicios.jsx'
import Trabajos from '@pages/Trabajos/Trabajos.jsx'
import Contacto from '@pages/Contacto/Contacto.jsx'
import './App.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Index />} />
      <Route path="Nosotras" element={<Nosotras />} />
      <Route path="Servicios" element={<Servicios />} />
      <Route path="Trabajos" element={<Trabajos />} />
      <Route path="Contacto" element={<Contacto />} />
    </Routes>
  </BrowserRouter>,
)
