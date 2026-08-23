import { motion } from "framer-motion";

export default function HeroScroll() {
  return (
    <motion.div
      className="absolute bottom-8 right-1/2 z-150 translate-x-1/2"
      animate={{
        y: [0, 12, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
        ease: "easeInOut",
      }}
    >
      <a
        href="#about"
        className="flex flex-col items-center text-white transition hover:text-yellow-400"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.3em]">Scroll</span>

        <span className="animate-bounce text-2xl">↓</span>
      </a>
    </motion.div>
  );
}
