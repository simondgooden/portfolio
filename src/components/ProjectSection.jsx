import { ExternalLink, Github, Section } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "PassPal",
    description:
      "Worked in a cross-functional team with seven others to create a secure mobile password manager app that had complete user login, password storage, and temporary one time password (TOTP) generation, using Flutter, Node.js, and MongoDB.",
    image: "/projects/bn.jpg",
    tags: ["Flutter ", "MongoDB", "OAuth", "Firebase", "Node.js"],
    overviewUrl: "https://codelabdavis.medium.com/passpal-9e46496ce71e",
    githubUrl: "https://github.com/Codelab-Davis/password-manager",
  },
  {
    id: 2,
    title: "Skinscreen",
    description: "Won Best Health Hack at HackDavis 2024 for developing a mobile skin cancer screening prototype. Built an app that enables users to scan skin images and leverage a large AI model to assist with early detection.",
    image: "/projects/bn.jpg",
    tags: ["Flutter", "Firebase", "PyTorch", "iOS Development"],
    overviewUrl: "https://devpost.com/software/skinscreen",
    githubUrl: "https://github.com/simondgooden/SkinScreen",
  },
  {
    id: 3,
    title: "Brand Networks Dashboard",
    description: "Created a Fullstack Web Dashboard for Digital Advertisement Optimization",
    image: "/projects/bn.jpg",
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
    description: "Developed an applied machine learning and retrieval-augmented generation (RAG) pipeline integrated into companies existing ecosystem.",
    image: "/projects/bn.jpg",
    tags: ["TODO:"],
    overviewUrl: "https://codelabdavis.medium.com/solidigm-ai-25f524fdce2a",
    githubUrl: "",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md: text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Checkout some of my recent professional projects, personal projects,
          and everything in between!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects.tags.map((tags) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tags}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {projects.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 px-2">
                  {projects.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={projects.overviewUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink />
                    </a>
                    <a
                      href={projects.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
