import { projects } from "../data/projects";
import useSectionObserver from "../hooks/useSectionObserver";

export default function Projects() {
  const ref = useSectionObserver("projects");

  return (
    <section
      id="projects"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <h1
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      text-[22vw] font-black uppercase text-yellow-400/20 whitespace-nowrap"
          style={{ fontFamily: "Bebas Neue" }}
        >
          PROJECTS
        </h1>
      </div>
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
                group
                relative
                overflow-hidden
               bg-[#111111]/70
                backdrop-blur-md
                border
               border-yellow-400/20
                rounded-32px
                p-6
                transition-all
                duration-500
               hover:border-yellow-400/50
                hover:-translate-y-2
                hover:shadow-[0_0_40px_rgba(212,175,55,0.08)]
                min-h-260px flex flex-col justify-between
              "
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.08),transparent_50%)]"></div>

              <div className="mb-6 overflow-hidden rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="relative text-2xl font-bold text-white mb-5">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-5 leading-relaxed relative">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-xs rounded-full bg-black/50 backdrop-blur-md border border-yellow-400/20 text-yellow-400 transition-all duration-300 hover:border-yellow-400"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex gap-6 mt-auto relative">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-400 font-medium hover:translate-x-1 transition-all flex"
                  >
                    GitHub <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="20px" fill="#FACC15"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white flex font-medium hover:translate-x-1 transition-all"
                  >
                    Live Demo <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
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
