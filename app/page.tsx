import Header from "./components/Header"
import Hero from "./components/Hero"
import WhyMcodev from "./components/WhyMcodev"
import Services from "./components/Services"
import DevelopmentProcess from "./components/DevelopmentProcess"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhyMcodev />
      <Services />
      <DevelopmentProcess />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
