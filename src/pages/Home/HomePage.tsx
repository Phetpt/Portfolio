import { Hero } from "@/features/hero/Hero";
import About from "@/features/about/About";

export function HomePage() {
  return (
    <main  
      id="main-content"
      tabIndex={-1}
      className="min-h-screen bg-[#f9fafc] text-[#18181a]">
      <Hero/>
      <About/>
    </main>
  );
}