export default function HeroContent() {
  return (
    <div
      className="
      absolute
    left-20
    bottom-10
    z-150
    w-520px
    text-left
    "
    >
      <h2 className="uppercase italic text-xl md:text-1xl text-yellow-400 tracking-[6px] mb-3">
        Everything is a Copy
      </h2>

      <h2 className="uppercase text-xl font-extrabold md:text-1xl text-white tracking-[6px] mb-3">
        Of a Copy of a Copy...
      </h2>

      <div className="mt-5 flex gap-5">
        <a href="#projects" className="hero-btn-primary">
          Explore Projects
        </a>

        <a href="#contact" className="hero-btn-secondary">
          Contact Me
        </a>
      </div>
    </div>
  );
}