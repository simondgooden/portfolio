import { ArrowUp, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-border mt-12 pt-8 flex justify-between items-center">
      <p className="text-sm text-muted-forground">
        &copy;
        {new Date().getFullYear()} Simon Gooden
      </p>

      <div className="flex items-center space-x-4">
        <span className="text-sm font-medium">Connect With me</span>
        <a
          href="https://www.linkedin.com/in/simon-gooden/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/simondgooden"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Github size={20} />
        </a>
      </div>

      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp />
      </a>
    </footer>
  );
};
