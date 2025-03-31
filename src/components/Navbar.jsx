import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/images/logoBlanco.png"; // Asegúrate de que la ruta sea correcta

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white pt-4 absolute top-0 w-full z-10">
      <div className="container flex justify-between pr-6 pl-3 items-center bg-amber-400 mx-auto">
        {/* Logo */}
        
          <Link to="/">
          <img src={Logo} className="w-15" alt="" />
          </Link>
        
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
        className={`md:hidden bg-gray-800 text-center px-4 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-70 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
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
