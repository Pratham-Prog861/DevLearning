"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({
  className = "",
  fill = "white",
}: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!divRef.current) return;
      const { clientX, clientY } = e;
      const { left, top, } = divRef.current.getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      divRef.current.style.setProperty("--mouse-x", `${x}px`);
      divRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={divRef}
      className={cn(
        "pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute",
        className
      )}
      style={{
        background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${fill}/0.075, transparent 40%)`,
      }}
    />
  );
}