import { FcGoogle } from "react-icons/fc"; // Importamos el icono de Google

export default function Contacto() {
  return (
    <div className="bg-gray-100 flex justify-center items-center min-h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Registro de Usuario
        </h2>
        {/* Nombre Completo */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Nombre Completo
          </label>
          <input
            type="text"
            placeholder="Ingrese su nombre completo"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Correo Electrónico */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="example@correo.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Contraseña */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        {/* Número de Teléfono */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Número de Teléfono
          </label>
          <input
            type="tel"
            placeholder="Ingrese su teléfono"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Botón de Envío */}
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Registrarse
            </button>
          </div>
          {/* Botón de Google con ícono */}
          <div className="text-center">
            <button
              type="button"
              onClick={() => alert("Google Sign-In")}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center justify-center gap-2 focus:outline-none focus:shadow-outline"
            >
              <FcGoogle size={24} /> Registrarse con Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
