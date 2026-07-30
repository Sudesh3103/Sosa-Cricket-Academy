import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home/Home'))
const About = lazy(() => import('../pages/About/About'))
const Academy = lazy(() => import('../pages/Academy/Academy'))
const Facilities = lazy(() => import('../pages/Facilities/Facilities'))
const Gallery = lazy(() => import('../pages/Gallery/Gallery'))
const Ground = lazy(() => import('../pages/Ground/Ground'))
const Contact = lazy(() => import('../pages/Contact/Contact'))

const PageFallback = () => (
  <div className="flex min-h-screen items-center justify-center bg-[#06110d] px-6 text-center text-white">
    <div>
      <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-[#ffca28]">Loading</p>
      <p className="mt-3 text-2xl font-black uppercase tracking-[-0.03em]">Preparing SOSA experience...</p>
    </div>
  </div>
)

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/ground" element={<Ground />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes
