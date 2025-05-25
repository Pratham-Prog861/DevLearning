"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

interface ScrollEvent {
  animatedScroll: number;
  dimensions: {
    scrollHeight: number;
    scrollWidth: number;
  };
  direction: number;
  progress: number;
  scroll: number;
  velocity: number;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e: ScrollEvent) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);
  return <>{children}</>;;
}