import {Link} from "react-router-dom"
function ConsultarSala () {
    return (
        <div className="min-h-screen flex flex-col bg-white px-4 py-6" >
            <form className="w-full max-w-4xl bg-gray-100 p-8 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-[#000000] bg-[#D9D9D9] px-64 py-10 mb-10 whitespace-nowrap">RESERVA DE EQUIPOS DE LABORATORIOS</h1>
                <p className="text-lg text-[#000000] mb-12">Consulta el estado de tu reserva</p>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Ingresa el código de tu reserva</label>
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