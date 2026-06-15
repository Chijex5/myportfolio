import { ScrollProgress } from "@/components/ui";
import { Nav, Hero, Marquee, Work, About, Contact } from "@/components/sections";

export default function Page() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <ScrollProgress />
      <Nav />
      <Hero />
      <Marquee />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
