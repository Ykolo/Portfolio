"use client";

import { Switch } from "@/components/luxe/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={isDark}
        onCheckedChange={(checked: any) => setTheme(checked ? "dark" : "light")}
      />
    </div>
  );
}
