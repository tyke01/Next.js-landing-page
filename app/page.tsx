import Carousel from "@/components/Carousel";
import HeroPage from "./heroSection/page";
import Navbar from "./navbar/page";
import SecondSection from "./secondSection/page";
import ThirdSection from "./thirdSection/page";
import ForthSection from "./forthSection/page";
import Pricing from "./pricing/page";
import ContactSection from "./contact/page";
import Footer from "./footer/page";



export default function Home() {
  return (
    <main className="w-full">
      <Navbar />

      <HeroPage />

      <Carousel />

      <SecondSection />

      <ThirdSection />

      <ForthSection />

      <Pricing />

      <ContactSection />

      <Footer />
      
    </main>
  )
}
