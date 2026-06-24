"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  return (
    <button
      className="icon-btn"
      aria-label="Theme"
      data-hot
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {mounted ? (isDark ? Icons.sun : Icons.moon) : Icons.moon}
    </button>
  );
}
