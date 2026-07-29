import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Academy from '../pages/Academy/Academy'
import Facilities from '../pages/Facilities/Facilities'
import Gallery from '../pages/Gallery/Gallery'
import Ground from '../pages/Ground/Ground'
import Contact from '../pages/Contact/Contact'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/academy" element={<Academy />} />
      <Route path="/ground" element={<Ground />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default AppRoutes
