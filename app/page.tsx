import { Nav } from "@/components/portfolio/nav";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { SelectedWork } from "@/components/portfolio/selected-work";
import { Contact } from "@/components/portfolio/contact";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <SelectedWork />
        <Contact />
      </main>
    </>
  );
}
