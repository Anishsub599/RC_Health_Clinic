import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Packages from './components/Packages.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import BookAppointment from './components/BookAppointment.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'

export default function App() {
  // `overflow-x-clip` prevents horizontal scroll without forcing `overflow-y: auto`,
  // which would create a scroll container and break the sticky navbar.
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Packages />
      <WhyChooseUs />
      <BookAppointment />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
