import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CoreValues from "@/components/CoreValues";
import Portfolio from "@/components/Portfolio";
import GlobalNetwork from "@/components/GlobalNetwork";
import Partners from "@/components/Partners";
import Resources from "@/components/Resources";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-unibridge-light text-unibridge-dark w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <CoreValues />
      <Portfolio />
      <GlobalNetwork />
      <Partners />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
