"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { features } from "@/lib/brand";
import { useLocale } from "@/lib/i18n/context";
import { LanguageToggle } from "@/components/language-toggle";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const { t } = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 font-semibold tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span>{t.brand.name}</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-1 sm:flex">
            {features.map((feature) => {
              const isActive = pathname.startsWith(feature.href);

              return (
                <Link
                  key={feature.href}
                  href={feature.href}
                  className={cn(
                    "rounded-md px-3 py-1.5 text-sm transition-colors",
                    isActive
                      ? "bg-primary/10 font-medium text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {t.nav[feature.key]}
                </Link>
              );
            })}
          </nav>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
