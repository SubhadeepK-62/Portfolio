import { projects } from "../data/projects";
import useSectionObserver from "../hooks/useSectionObserver";

export default function Projects() {
  const ref = useSectionObserver("projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="min-h-screen flex items-center px-6 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
          Projects
        </p>

        <h2
          className="text-5xl md:text-7xl mb-12"
          style={{ fontFamily: "Bebas Neue" }}
        >
          MY WORK
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                bg-[#1a1a1a]
                border
                border-yellow-400/20
                rounded-3xl
                p-6
                transition-all
                duration-300
                hover:border-yellow-400
              "
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="
                      px-3
                      py-1
                      text-sm
                      rounded-full
                      bg-black
                      border
                      border-yellow-400/20
                      text-yellow-400
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-400"
                  >
                    GitHub
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-400"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}