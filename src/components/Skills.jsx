import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center px-6 py-20"
    >
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

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="
                px-6
                py-3
                rounded-full
                border
                border-yellow-400/30
                bg-[#1a1a1a]
                text-gray-300
                hover:border-yellow-400
                hover:text-yellow-400
                transition-all
                duration-300
              "
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}