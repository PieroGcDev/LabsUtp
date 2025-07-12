import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

function Home() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-6 px-4 text-center">
      <div className="relative bg-[#D9D9D9] py-10 mb-10">
        <img
          src="/utplogonuevo.png"
          alt="Logo"
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-32 h-12"
        />
        <h1 className="text-3xl font-bold text-[#000000] text-center px-80 whitespace-nowrap">
          RESERVA DE EQUIPOS DE LABORATORIOS
        </h1>
      </div>
      <p className="text-lg text-[#000000] mb-12">¡Bienvenido al sistema de reservas de laboratorios! Aquí puedes reservar equipos para tus proyectos finales.</p>

      <div className="flex flex-col items-center space-y-10 w-full max-w-xs">

        <Link to="/registrar-sala" className="bg-[#D9D9D9] hover:bg-[#8d8282] text-[#000000] font-semibold py-4 px-36 rounded-2xl whitespace-nowrap shadow-inner">
            NUEVA RESERVA
        </Link>
        
        <Link to="/consultar-sala" className="bg-[#D9D9D9] hover:bg-[#8d8282] text-[#000000] font-semibold py-4 px-32 rounded-2xl whitespace-nowrap shadow-inner">
            CONSULTAR RESERVA
        </Link>

        <Link to="/ayuda" className="bg-[#D9D9D9] hover:bg-[#8d8282] text-[#000000] font-semibold py-4 px-28 rounded-2xl whitespace-nowrap shadow-inner">
            AYUDA / INSTRUCCIONES
        </Link>

      </div>
    </div>
  )
}

export default Home
