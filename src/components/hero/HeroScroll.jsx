export default function HeroScroll() {
  return (
    <div className="absolute bottom-8 right-1/2 z-150 translate-x-1">
      <a
        href="#about"
        className="flex flex-col items-center text-white transition hover:text-yellow-400"
      >
        <span className="mb-2 text-xs uppercase tracking-[0.3em]">
          Scroll
        </span>

        <span className="animate-bounce text-2xl">
          ↓
        </span>
      </a>
    </div>
  );
}