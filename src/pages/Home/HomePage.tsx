import { Hero } from "@/features/hero/Hero";
import About from "@/features/about/About";
import { Projects } from "@/features/projects/Projects";

export function HomePage() {
  return (
    <main  
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-page text-ink">
      <Hero/>
      <About/>
      <Projects/>
    </main>
  );
}