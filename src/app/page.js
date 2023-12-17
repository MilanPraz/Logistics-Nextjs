import Navbar from "../../components/main/Navbar";
import Hero from "../../components/main/Hero";
import Services from "../../components/main/Services";
import CountDown from "../../components/sub/CountDown";
import About from "../../components/main/About";
import Contact from "../../components/main/Contact";
import Footer from "../../components/main/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <div className="">
        <Hero />
        <CountDown />
        <Services />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
