import profileImage from "../assets/images/profile.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import useSectionObserver from "../hooks/useSectionObserver";

export default function Hero() {
  const ref = useSectionObserver("home");

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
              Hello, I'm
            </p>

            <h1
              className="text-6xl md:text-8xl font-bold leading-none"
              style={{ fontFamily: "Bebas Neue" }}
            >
              SUBHADEEP
              <br />
              KARMAKAR
            </h1>

            <p className="mt-6 text-xl text-gray-400">
              B.Tech CSE Student • Web Developer • AI Enthusiast
            </p>

            <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
              I build modern web experiences, explore AI technologies, and blend
              development with creativity through design, photography, and
              problem-solving.
            </p>

            <div className="flex gap-4 mt-10">
              <button className="px-8 py-3 rounded-full bg-yellow-400 text-black font-semibold">
                View Projects
              </button>

              <button className="px-8 py-3 rounded-full border border-yellow-400 text-yellow-400">
                Contact Me
              </button>
            </div>
            <div className="flex gap-6 mt-8 text-2xl">
              <a
                href="https://github.com/SubhadeepK-62"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/subhadeepkarmakar"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:subhadeep24400123072@gmail.com"
                className="text-gray-400 hover:text-yellow-400 transition"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-80 h-80 object-cover rounded-full border-4 border-yellow-400
              hover:scale-105
              transition-all
              duration-500
              shadow-[0_0_50px_rgba(255,204,0,0.15)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
