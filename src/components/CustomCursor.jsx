import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorType, setCursorType] = useState("default");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for tracking coordinates
  const springConfig = { damping: 35, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const type = target.getAttribute("data-cursor");
        const text = target.getAttribute("data-cursor-text") || "";
        setCursorType(type);
        setCursorText(text);
      } else {
        setCursorType("default");
        setCursorText("");
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  // Base styling for different states
  const cursorStyles = {
    default: {
      backgroundColor: "rgba(255, 90, 0, 1)",
      border: "0px solid transparent",
      scale: 1,
    },
    pointer: {
      backgroundColor: "rgba(255, 90, 0, 0.15)",
      border: "2px solid rgba(255, 90, 0, 1)",
      scale: 3,
    },
    accent: {
      backgroundColor: "rgba(204, 255, 0, 0.15)",
      border: "2px solid rgba(204, 255, 0, 1)",
      scale: 3.5,
    },
    text: {
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      border: "none",
      scale: 5,
    },
  };

  const activeStyle = cursorStyles[cursorType] || cursorStyles.default;

  return (
    <motion.div
      className="hidden md:flex fixed top-0 left-0 pointer-events-none z-[9999] rounded-full items-center justify-center -translate-x-1/2 -translate-y-1/2"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        width: 16,
        height: 16,
      }}
      animate={{
        ...activeStyle,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.8,
      }}
    >
      {cursorType === "text" && (
        <span className="text-[2px] font-bold tracking-widest text-brand-dark uppercase select-none text-center leading-tight scale-[4]">
          {cursorText}
        </span>
      )}
    </motion.div>
  );
}
