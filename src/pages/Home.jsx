import { StarBackground } from "@/components/StarBackground";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectSection } from "@/components/ProjectSection";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ThemeToggle />

      <StarBackground />

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </main>
    </div>
  );
};
