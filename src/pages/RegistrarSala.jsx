import { Link } from "react-router-dom"
function RegistrarSala() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <form className="w-full max-w-4xl bg-gray-100 p-1.8 rounded-lg shadow-lg">
        <div className=" bg-white flex flex-col items-center justify-start pt-6 px-4 text-center">
          <h1 className="text-3xl font-bold text-[#000000] bg-[#D9D9D9] px-80 py-10 mb-10 whitespace-nowrap">RESERVA DE EQUIPOS DE LABORATORIOS</h1>
          <p className="text-lg text-[#000000] mb-4 space-y-10">Nueva Reserva</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Nombre completo</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Código de estudiante</label>
            <input
              type="number"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Carrera Universitaria</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="">Seleccione</option>
              <option value="aula">Ingeniería Civil</option>
              <option value="laboratorio">Ingeniería de Sistemas e Informática</option>
              <option value="sala de reuniones">Ingeniería Industrial</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Curso</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="">Seleccione</option>
              <option value="aula">Por ver</option>
              <option value="laboratorio">Por ver</option>
              <option value="sala de reuniones">Por ver</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Correo académico</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Selección de equipo</label>
            <select className="w-full p-2 border border-gray-300 rounded">
              <option value="">Por ver</option>
              <option value="aula">Por ver </option>
              <option value="laboratorio">Por ver</option>
              <option value="sala de reuniones">Por ver</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Fecha deseada</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Propósito</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
          >
            Enviar
          </button>
        </div>

        <div>
          <Link
          to="/"
          className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mb-6"
          >
          ← Volver
          </Link>
        </div>

      </form>
    </div>
  )
}

export default RegistrarSala
