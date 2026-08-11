import useSectionObserver from "../hooks/useSectionObserver";

export default function About() {
  const ref = useSectionObserver("about");

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen flex items-center px-6 py-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <h1
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      text-[22vw] font-black uppercase text-yellow-400/5 whitespace-nowrap"
          style={{ fontFamily: "Bebas Neue" }}
        >
          ABOUT
        </h1>
      </div>
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
          About Me
        </p>

        <h2
          className="text-5xl md:text-7xl mb-8"
          style={{ fontFamily: "Bebas Neue" }}
        >
          WHO I AM
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 leading-relaxed">
              I'm Subhadeep Karmakar, a B.Tech CSE student passionate about web
              development, AI, and creating meaningful digital products.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              I enjoy building modern applications, learning new technologies,
              participating in hackathons, and continuously improving my
              problem-solving skills.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-yellow-400 font-semibold">Education</h3>
              <p className="text-gray-400 leading-9 max-w-xl">
                B.Tech in Computer Science & Engineering
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 font-semibold">Interests</h3>
              <p className="text-gray-400 leading-9 max-w-xl">
                Web Development, AI/ML, UI Design, Photography
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 font-semibold">Current Focus</h3>
              <p className="text-gray-400 leading-9 max-w-xl">
                Building projects and strengthening full-stack development
                skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
