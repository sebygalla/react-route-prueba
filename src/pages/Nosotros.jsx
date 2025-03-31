import Avatar from "../assets/images/avatar.jpg"; // Asegúrate de que la ruta sea correcta

export default function Nosotros() {
  return (
    <section className="bg-gray-100 py-16">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
      {/* Título */}
      <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
        Sobre Nosotros
      </h2>
      {/* Descripción */}
      <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-12">
        Somos un equipo apasionado que busca ofrecer soluciones innovadoras
        y transformar ideas en realidades. Nos dedicamos a crear experiencias
        únicas y significativas para nuestros clientes.
      </p>
      {/* Miembros del equipo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Tarjeta de miembro */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src={Avatar}
            alt="Miembro del Equipo"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Juan Pérez</h3>
          <p className="text-gray-600">CEO & Fundador</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src={Avatar}
            alt="Miembro del Equipo"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Ana Gómez</h3>
          <p className="text-gray-600">Diseñadora Creativa</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <img
            src={Avatar}
            alt="Miembro del Equipo"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-bold text-gray-800">Carlos Ruiz</h3>
          <p className="text-gray-600">Desarrollador Frontend</p>
        </div>
      </div>
    </div>
  </section>

  )
}


