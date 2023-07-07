import { useState, useLayoutEffect } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useLayoutEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  const cursorSize = 200; // Adjust the size of the cursor here

  const cursorStyle: React.CSSProperties = {
    width: `${cursorSize}px`,
    height: `${cursorSize}px`,
    position: "fixed",
    pointerEvents: "none",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(105, 193, 255, 0.1) 0%, transparent 70%)",
    transform: `translate(${position.x - cursorSize / 2}px, ${position.y - cursorSize / 2}px)`,
    visibility:
      position.x > 0 &&
      position.y > 0 &&
      position.x < window.innerWidth - cursorSize / 2 &&
      position.y < window.innerHeight - cursorSize / 2
        ? "visible"
        : "hidden",
  };

  return <div style={cursorStyle} />;
};

export default Cursor;
