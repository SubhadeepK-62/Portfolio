import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
  FaXTwitter,
} from "react-icons/fa6";

export default function HeroSocials() {
  return (
    <motion.div
      className="hero-socials"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 0.8,
        duration: 0.8,
      }}
    >
      <a
        href="https://github.com/SubhadeepK-62"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/subhadeepkarmakar"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://www.facebook.com/subha.deep.111609"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaFacebook />
      </a>

      {/* <a
        href="https://x.com/YOUR_X"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaXTwitter />
      </a> */}

      <a
        href="https://www.instagram.com/themavericksky?igsi=bTkxajY4Z29yNGF4"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaInstagram />
      </a>

      <a href="mailto:subhadeep24400123072@gmail.com" className="hero-social">
        <FaEnvelope />
      </a>
    </motion.div>
  );
}
