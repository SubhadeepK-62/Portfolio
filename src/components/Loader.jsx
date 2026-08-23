import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="
      fixed
      inset-0
      z-9999
      bg-[#090909]
      flex
      flex-col
      items-center
      justify-center
      "
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        text-5xl
        md:text-8xl
        text-yellow-400
        font-black
        tracking-wider
        "
        style={{
          fontFamily: "Bebas Neue",
        }}
      >
        BLENDING
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="
        text-4xl
        md:text-7xl
        text-white
        font-black
        "
        style={{
          fontFamily: "Bebas Neue",
        }}
      >
        PIXELS
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="
        mt-8
        text-gray-500
        tracking-[8px]
        uppercase
        "
      >
        Just a second...
      </motion.p>
    </motion.div>
  );
}