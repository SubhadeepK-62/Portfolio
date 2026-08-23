import useSectionObserver from "../hooks/useSectionObserver";
import { motion } from "framer-motion";

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
      <motion.div
        className="max-w-6xl mx-auto w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
        }}
      >
        <h2
          className="text-5xl md:text-7xl mb-8"
          style={{ fontFamily: "Bebas Neue" }}
        >
          WHO I AM
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Hey folks, this is Subhadeep Karmakar, a final year student from West Bengal, India. I'm a frontend developer specializing in React. Apart from that, I'm also a video editor and UI/UX designer.
            </p>

            <p className="text-gray-400 mt-6 leading-relaxed">
              When I'm offline I'm probably sleeping or watching movies, yeah those are the things I love to do. Along with that, I enjoy my hobby of photography and playing badminton. <br /> A guy who loves to stay fit and always have the curiosity to learn new things.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-yellow-400 font-semibold">Education</h3>
              <p className="text-gray-400 leading-9 max-w-xl">
                B.Tech in Computer Science & Engineering
                <br />
                from Techno Engineering College Banipur
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 font-semibold">Interests</h3>
              <p className="text-gray-400 leading-9 max-w-xl">
                Web Development, UI/UX, Video Editing
              </p>
            </div>

            <div>
              <h3 className="text-yellow-400 font-semibold">Current Focus</h3>
              <p className="text-gray-400 leading-9 max-w-xl">
                Building projects and strengthening skills to secure financial freedom and a good career
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
