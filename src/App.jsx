import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/views/Home.jsx'
import Productos from './components/views/Products.jsx'

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/productos" element={<Productos/>} />
    </Routes>
  </Router>
  )
}

export default App