import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/views/Home.jsx'
import Productos from './components/views/Products.jsx'
import Equipment from './components/views/Equipment.jsx'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="/equipos" element={<Equipment/>} />
    </Routes>
  </Router>
  )
}

export default App