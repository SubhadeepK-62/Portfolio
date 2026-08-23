import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      className="
      custom-cursor
      fixed
      w-8
      h-8
      rounded-full
      pointer-events-none
      z-9999
      shadow-[0_0_20px_rgba(212,175,55,0.5)]
      mix-blend-screen
      transition-transform
      duration-75
      "
      style={{
        left: position.x - 20,
        top: position.y - 20,
        width: "40px",
        height: "40px",
        background: "rgba(212,175,55,0.4)",
        filter: "blur(15px)",
      }}
    />
  );
}
