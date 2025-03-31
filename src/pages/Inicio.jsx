import { Link } from "react-router-dom";
import Portada from "../assets/images/alabanza.jpg";

export default function Inicio() {
  return (
    <>
      <main className="bg-gray-100">
        <div className="relative">
          {/* Imagen de portada */}
          <img
            src={Portada}
            alt="Imagen de Portada"
            className="w-full h-screen object-cover"
          />
          <div className="bg-black absolute inset-0 opacity-80"></div>
          {/* Contenido superpuesto */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
              ¡Bienvenido!
            </h1>
            <p className="text-white text-lg md:text-xl mb-6">
              Descubre algo extraordinario con nosotros. Explora y crea juntos.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded transition-all duration-300 cursor-pointer">
              <Link to="/nosotros" className="hover:text-gray-400">
                Nosotros
              </Link>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
