import Carousel from "@/components/Carousel";
import HeroPage from "./heroSection/page";
import Navbar from "./navbar/page";
import SecondSection from "./secondSection/page";


export default function Home() {
  return (
    <main className="w-full">
      <Navbar />

      <HeroPage />

      <Carousel />

      <SecondSection />
    </main>
  )
}
