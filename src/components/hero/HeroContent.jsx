import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="hero-content">
    <motion.div
      className="absolute
    bottom-10
    left-15
    z-150"
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
      <h2 className="uppercase italic text-xl md:text-1xl text-yellow-400 tracking-[6px] mb-3">
        Everything is a Copy
      </h2>

      <h2 className="uppercase text-xl font-extrabold md:text-1xl text-white tracking-[6px] mb-3">
        Of a Copy of a Copy...
      </h2>

      <div className="mt-5 flex flex-col sm:flex-row gap-3">
        <a href="#projects" className="hero-btn-primary">
          Explore Projects
        </a>

        <a href="#contact" className="hero-btn-secondary">
          Contact Me
        </a>
      </div>
    </motion.div>
    </div>
  );
}
