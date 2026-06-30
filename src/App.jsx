import ScrollProgress from './components/ScrollProgress.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Stats from './components/Stats.jsx'
import Features from './components/Features.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import Statement from './components/Statement.jsx'
import Testimonial from './components/Testimonial.jsx'
import Faq from './components/Faq.jsx'
import Download from './components/Download.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <HowItWorks />
      <Statement />
      <Testimonial />
      <Faq />
      <Download />
      <Footer />
    </>
  )
}
