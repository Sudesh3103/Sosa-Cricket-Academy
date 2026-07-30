import TopBar from '../layout/TopBar'
import Navbar from '../layout/Navbar'
import Footer from '../layout/Footer'
import FloatingButtons from '../layout/FloatingButtons'
import ScrollToTop from '../layout/ScrollToTop'
import Seo from './Seo'

const SiteLayout = ({ children, seo }) => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#06110d] text-white">
      <Seo {...seo} />
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
