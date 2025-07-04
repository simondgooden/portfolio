import { Section } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PassPal",
    image: "/projects/bn",
    tags: ["Flutter ", "MongoDB", "OAuth", "Firebase", "Node.js"],
    overviewUrl: "https://codelabdavis.medium.com/passpal-9e46496ce71e",
    githubUrl: "https://github.com/Codelab-Davis/password-manager",
  },
  {
    id: 2,
    title: "Skinscreen",
    image: "/projects/bn",
    tags: ["Flutter", "Firebase", "PyTorch", "iOS Development"],
    overviewUrl: "https://devpost.com/software/skinscreen",
    githubUrl: "https://github.com/simondgooden/SkinScreen",
  },
  {
    id: 3,
    title: "Brand Networks Dashboard",
    image: "/projects/bn",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
      "PostgresSQL",
    ],
    overviewUrl: "https://codelabdavis.medium.com/brand-networks-701c9a3a08b9",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Solidigm",
    image: "/projects/bn",
    tags: ["TODO:"],
    overviewUrl: "https://codelabdavis.medium.com/solidigm-ai-25f524fdce2a",
    githubUrl: "",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md: text-4xl font-bol mb-4 text-center">
          Feature <span className="text-primary"> Projects </span>
        </h2>
      </div>
    </section>
  );
};
