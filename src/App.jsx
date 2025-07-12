import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import RegistrarSala from './pages/RegistrarSala'
import ConsultarSala from './pages/ConsultarSala'
import Ayuda from './pages/Ayuda'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registrar-sala" element={<RegistrarSala />} />
      <Route path="/consultar-sala" element={<ConsultarSala />} />
      <Route path="/ayuda" element={<Ayuda/>}/>
    </Routes>
  )
}

export default App