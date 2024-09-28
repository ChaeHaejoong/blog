import { useEffect, useState } from "react";

export default function useMouseFollower() {
  const [mousePosition, setMousePosition] = useState<{x: string, y: string}>({x: "0px", y: "0px"});
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({x: `${e.clientX}px`, y: `${e.clientY}px`});
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return { mousePosition, isHovered, handleMouseEnter, handleMouseLeave };
}
