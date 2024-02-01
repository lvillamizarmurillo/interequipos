import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/views/Home.jsx'
import Productos from './components/views/Products.jsx'
import Equipment from './components/views/Equipment.jsx'
import Login from './components/views/Login.jsx'
import Admin from './components/views/Admin.jsx'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productos" element={<Productos/>} />
      <Route path="/equipos" element={<Equipment/>} />
      <Route path="/login/admin" element={<Login/>} />
      <Route path="/panel/admin" element={<Admin/>} />
    </Routes>
  </Router>
  )
}

export default App