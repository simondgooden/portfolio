import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opactiy-0 animate-fade-in"> Hey! I'm </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Simon{" "}
            </span>
            <span className="text-gradient opacity-0 animate-fade-in-delay-2">
              {" "}
              Gooden{" "}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I’m passionate about web and mobile app development, machine
            learning, and video editing.
          </p>

          <div>
            <a href="#projects" className="button text-background">
              {" "}
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>
          <ArrowDown className="text-primary" />
        </span>
      </div>
    </section>
  );
};
