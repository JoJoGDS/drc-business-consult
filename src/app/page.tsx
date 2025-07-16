import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import WhyChooseUs from "@/components/WhyChooseUs"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <main className="font-['Work_Sans','Noto_Sans',sans-serif] bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  )
}
