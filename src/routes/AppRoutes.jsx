import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Academy from '../pages/Academy/Academy'
import Facilities from '../pages/Facilities/Facilities'
import Gallery from '../pages/Gallery/Gallery'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="*" element={<Home />} />
    </Routes>
  )
}

export default AppRoutes
