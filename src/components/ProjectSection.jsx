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
    description:
      "Won Best Health Hack at HackDavis 2024 for developing a mobile skin cancer screening prototype. Built an app that enables users to scan skin images and leverage a large AI model to assist with early detection.",
    image: "/projects/bn.jpg",
    tags: ["Flutter", "Firebase", "PyTorch", "iOS Development"],
    overviewUrl: "https://devpost.com/software/skinscreen",
    githubUrl: "https://github.com/simondgooden/SkinScreen",
  },
  {
    id: 3,
    title: "Brand Networks Dashboard",
    description:
      "Created a Fullstack Web Dashboard for Digital Advertisement Optimization",
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
    description:
      "Developed an applied machine learning and retrieval-augmented generation (RAG) pipeline integrated into companies existing ecosystem.",
    image: "/projects/bn.jpg",
    tags: ["TODO:"],
    overviewUrl: "https://codelabdavis.medium.com/solidigm-ai-25f524fdce2a",
    githubUrl: "",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-4 px-4 relative scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md: text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Checkout some of my recent professional projects, personal projects,
          and everything in between!
        </p>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/3">
                <div
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                  onClick={() => {
                    window.open(project.overviewUrl, "_blank");
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      window.open(project.overviewUrl, "_blank");
                    }
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/50 text-white px-4 py-2 rounded-lg text-sm font-medium">
                      Click to view project
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/3 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex space-x-4">
                  <a
                    href={project.overviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                    <span className="text-sm font-medium">View Project</span>
                  </a>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                      <span className="text-sm font-medium">View Code</span>
                    </a>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
