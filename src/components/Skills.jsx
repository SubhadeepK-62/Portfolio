import { skills } from "../data/skills";
import useSectionObserver from "../hooks/useSectionObserver";

export default function Skills() {
  const ref = useSectionObserver("skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <h1
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      text-[22vw] font-black uppercase text-yellow-400/10 whitespace-nowrap"
          style={{ fontFamily: "Bebas Neue" }}
        >
          SKILLS
        </h1>
      </div>
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
          Skills
        </p>

        <h2
          className="text-5xl md:text-7xl mb-12"
          style={{ fontFamily: "Bebas Neue" }}
        >
          WHAT I USE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group) => (
            <div
              key={group.category}
              className="
        rounded-3xl
         border
         border-yellow-400/10
         bg-[#0d0d0d]/20
         backdrop-blur-sm
          p-8
          min-h-340px

          flex
          flex-col

          transition-all
          duration-300

         hover:border-yellow-400/40
          hover:-translate-y-2
          hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]
        "
            >
              <h3 className="text-yellow-400 text-xl font-semibold mb-6">
                {group.category}
              </h3>

              <div className="flex flex-col gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="
                   px-4
                   py-3
                   rounded-xl

                   border
                   border-yellow-400/10

                   text-gray-300

                  transition-all
                    duration-300

                   hover:border-yellow-400/40
                   hover:text-yellow-400
                  "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
