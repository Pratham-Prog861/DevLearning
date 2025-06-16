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

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    lenis.on('scroll', (e: ScrollEvent) => {
      // console.log(e);
      // You can handle scroll events here if needed
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