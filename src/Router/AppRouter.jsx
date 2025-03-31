import { Routes, Route, Navigate } from "react-router-dom"
import Inicio from "../pages/Inicio"
import Nosotros from "../pages/Nosotros"    
import Contacto from "../pages/Contacto"



export default function AppRouter() {
  return (
    <Routes>
    <Route path="/" element={<Inicio/>} />
    <Route path="/nosotros" element={<Nosotros/>} />
    <Route path="/contacto" element={<Contacto/>} />
   
    {/* Redirige a la página de inicio si la ruta no coincide */}
    <Route path="/*" element={<Navigate to="/" />} />
  </Routes>
  )
}