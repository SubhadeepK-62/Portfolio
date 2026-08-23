import vector from "../../assets/images/vector2.png";
import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="hero-image-wrapper">
      
      <div className="hero-glow" />

      <motion.img
        src={vector}
        alt="Subhadeep"
        className="hero-image"
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
      />

    </div>
  );
}
