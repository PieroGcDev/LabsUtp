import { Link } from "react-router-dom"
function Ayuda () {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-start pt-6 px-4 text-center">
            <h1 className="text-3xl font-bold text-[#000000] bg-[#D9D9D9] px-80 py-10 mb-10 whitespace-nowrap">RESERVA DE EQUIPOS DE LABORATORIOS</h1>
            <p className="text-lg text-gray-600 mb-6">Ayuda al usuario</p>
                    
            <p className="text-lg text-gray-600 mb-6"> ¡Bienvenido(a) al sistema de reserva de laboratorios! 1. En la pantall de inicio te encontrarás con el botón que te llevará a generar una nueva reserva, otro para consultar tu reserva
                y por último ek botón de ayuda o instrucciones al cual acabas de acceder.
                2. En la seccion de nueva reserva pordrás reservar el equipo que desees para tu proyecto, tendrás que llenar todos los recuadros con la información solicitada.
                3. Una vez realizado el formulario, se te brindará un código con el cual podrás consultar el estado de la reserva o cancelarla.
                4. Finalmente acércate a recoger los implementos en el día y fecha seleccionados. Esperemos tengas un grata experiencia. Gracias!!
                </p>

            <div>
                <Link
                to="/"
                className="inline-block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mb-6"
                >
                ← Volver
                </Link>
            </div>
        </div>
    )
}

export default Ayuda