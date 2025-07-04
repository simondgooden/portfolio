import { Clapperboard, Code, FileTerminal, Brain, BrainCircuit } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

export const AboutSection = () => {
  const { isDarkMode } = useTheme();

  const cards = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Web & Mobile Development",
      description:
        "Creating scalable and responsive application using modern frameworks.",
    },
    {
      icon: <BrainCircuit className="h-6 w-6 text-primary" />,
      title: "Machine Learning",
      description: "Building, training, and incoporating models into software.",
    },
    {
      icon: <Clapperboard className="h-6 w-6 text-primary" />,
      title: "Video Editing",
      description:
        "Crafting compelling visuals and stories through modern editing tools.",
    }
  ];

  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4-xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              I'm a 4th year Computer Science student at{" "}
              <span className="text-primary">UC Davis</span>, and interested in
              exploring software development
            </h3>
            {/* TO DO: Add text for all this*/}
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="button text-background">
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/133sPBOFN3hXQMw0ZCKtBtkKqzni-5_X7/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-background transition-colors duration-300"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right side cards */}
          <div className="grid grid-cols-1 gap-6">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`gradient-border p-6 card-hover bg-background text-background"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left text">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
