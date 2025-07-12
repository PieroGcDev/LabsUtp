import {Link} from "react-router-dom"
function ConsultarSala () {
    return (
        <div className="min-h-screen flex flex-col bg-white px-4 py-6 items-center" >
            <form className="w-full max-w-4xl bg-gray-100 rounded-lg shadow-lg">
                <div className=" bg-white flex flex-col items-center justify-start pt-1.8 px-4 text-center">
                    <h1 className="text-3xl font-bold text-[#000000] bg-[#D9D9D9] px-80 py-10 mb-10 whitespace-nowrap">RESERVA DE EQUIPOS DE LABORATORIOS</h1>
                    <p className="text-lg text-[#000000] mb-4 space-y-10">CONSULTA EL ESTADO DE TU RESERVA</p>
                 </div>
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Ingresa el código brindado</label>
                    <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>

                <div className="mt-8 text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded"
                        >
                            Consultar Reserva
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

export default ConsultarSala