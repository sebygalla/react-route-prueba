import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logo.png"; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
         
          <Link to="/">
          <img src={Logo} className="w-40" alt="" />
          </Link>
        </div>
        {/* Secciones en dispositivos grandes */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-400">
            Inicio
          </Link>
          <Link to="/nosotros" className="hover:text-gray-400">
            Nosotros
          </Link>
          <Link to="/contacto" className="hover:text-gray-400">
            Contacto
          </Link>
        </div>
        {/* Menú Hamburguesa */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
            aria-label="Abrir menú"
          >
            ☰
          </button>
        </div>
      </div>
      {/* Menú desplegable para dispositivos pequeños */}
      <div
        className={`md:hidden bg-gray-800 px-4 pb-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <Link
          to="/"
          className="block py-2 hover:text-gray-400"
          onClick={toggleMenu}
        >
          Inicio
        </Link>
        <Link
          to="/nosotros"
          className="block py-2 hover:text-gray-400"
          onClick={toggleMenu}
        >
          Nosotros
        </Link>
        <Link
          to="/contacto"
          className="block py-2 hover:text-gray-400"
          onClick={toggleMenu}
        >
          Contacto
        </Link>
      </div>
    </nav>
  );
}
