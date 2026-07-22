import TopBar from '../layout/TopBar'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import FloatingButtons from '../layout/FloatingButtons'
import ScrollToTop from '../layout/ScrollToTop'

const SiteLayout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06110d] text-white">
      <TopBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingButtons />
      <ScrollToTop />
    </div>
  )
}

export default SiteLayout
