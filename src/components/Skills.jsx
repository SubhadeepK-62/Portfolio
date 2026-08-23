import { skills } from "../data/skills";
import useSectionObserver from "../hooks/useSectionObserver";
import { motion } from "framer-motion";

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
        <h2
          className="text-5xl md:text-7xl mb-12"
          style={{ fontFamily: "Bebas Neue" }}
        >
          WHAT I USE
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="
      rounded-3xl
      border
      border-yellow-400/10
      bg-[#0d0d0d]/20
      backdrop-blur-sm
      p-6 md:p-8
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
                  <div
                    key={skill.name}
                    className="
      flex items-center gap-3
      px-4 py-3 rounded-xl
      border border-yellow-400/10
      text-gray-300
      transition-all duration-300
      hover:border-yellow-400/40
      hover:text-yellow-400
    "
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5"
                    />

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
