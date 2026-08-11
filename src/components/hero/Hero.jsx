import "./hero.css";

import HeroBackground from "./HeroBackground";
import HeroName from "./HeroName";
import HeroImage from "./HeroImage";
import HeroContent from "./HeroContent";
import HeroSocials from "./HeroSocials";
import HeroScroll from "./HeroScroll";

import useSectionObserver from "../../hooks/useSectionObserver";

export default function Hero() {
  const ref = useSectionObserver("home");

  return (
    
    <section
      ref={ref}
      id="home"
      className="hero-section"
    >
      <HeroBackground />

      <HeroSocials />

      <div className="hero-grid">

        <HeroName />

        <HeroImage />

        <HeroContent />

      </div>

      <HeroScroll />
    <div className="hero-bottom-gradient"></div>
    </section>
  );
}