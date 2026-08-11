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
    <div className="absolute bottom-10 right-16 z-200 flex items-center gap-6">

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
        href="https://facebook.com/YOUR_FACEBOOK"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaFacebook />
      </a>

      <a
        href="https://x.com/YOUR_X"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://instagram.com/YOUR_INSTAGRAM"
        target="_blank"
        rel="noreferrer"
        className="hero-social"
      >
        <FaInstagram />
      </a>

      <a
        href="mailto:subhadeep24400123072@gmail.com"
        className="hero-social"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}