"use client";

import { useEffect, useRef } from "react";

/* Dot + ring that follows with lerp, mix-blend difference, grows on
   interactive elements. Disabled on coarse pointers (handled in CSS). */
export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    let rx = window.innerWidth / 2,
      ry = window.innerHeight / 2,
      dx = rx,
      dy = ry;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      dx = e.clientX;
      dy = e.clientY;
      if (dot.current) dot.current.style.transform = `translate(${dx}px,${dy}px) translate(-50%,-50%)`;
    };
    const loop = () => {
      rx += (dx - rx) * 0.18;
      ry += (dy - ry) * 0.18;
      if (ring.current) ring.current.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    const hot = (on: boolean) => ring.current?.classList.toggle("hot", on);
    const onOver = (e: Event) => {
      if ((e.target as Element).closest?.("a,button,.cmd-item,[data-hot]")) hot(true);
    };
    const onOut = (e: Event) => {
      if ((e.target as Element).closest?.("a,button,.cmd-item,[data-hot]")) hot(false);
    };

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    loop();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden />
      <div ref={dot} className="cursor-dot" aria-hidden />
    </>
  );
}
