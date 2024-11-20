// import components
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contributors from "./components/Contributors";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Services />
      <Contributors />
      <Portfolio />
      <Contact />
      <ScrollToTop />
    </main>
  );
}
