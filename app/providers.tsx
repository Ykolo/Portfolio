"use client";

import { ThemeProvider } from "next-themes";
import { I18nProvider } from "@/lib/i18n";
import { UIProvider } from "@/lib/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      storageKey="pf-theme"
      disableTransitionOnChange
    >
      <I18nProvider>
        <UIProvider>{children}</UIProvider>
      </I18nProvider>
    </ThemeProvider>
  );
}
