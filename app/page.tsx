import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { TechStack } from "@/components/TechStack";
import { WhyMe } from "@/components/WhyMe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <WhyMe />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} KUBY CODE. Built with care.</p>
        <span aria-hidden="true">♥</span>
      </footer>
    </>
  );
}
