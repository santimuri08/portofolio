import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intermission from "@/components/Intermission";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import CurrentlyLooking from "@/components/CurrentlyLooking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Intermission />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <CurrentlyLooking />
      <Footer />
    </main>
  );
}