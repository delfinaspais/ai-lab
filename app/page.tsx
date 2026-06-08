"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { features } from "@/lib/brand";
import { useLocale } from "@/lib/i18n/context";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-background to-background"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-primary/5 blur-3xl"
      />

      <main className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-12 max-w-2xl">
          <Badge variant="secondary" className="mb-4">
            {t.home.badge}
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {t.brand.name}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">{t.brand.tagline}</p>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {t.brand.description}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            const copy = t.features[feature.key];

            return (
              <Link
                key={feature.href}
                href={feature.href}
                className="group relative flex flex-col rounded-xl border border-border/80 bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <div
                  className={`mb-4 flex size-11 items-center justify-center rounded-lg bg-gradient-to-br ${feature.accent} text-white shadow-sm`}
                >
                  <Icon className="size-5" />
                </div>
                <h2 className="text-lg font-semibold">{copy.title}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {copy.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {t.home.openTool}
                  <ArrowUpRight className="size-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <p className="mt-16 text-center text-xs text-muted-foreground">
          {t.home.footer}
        </p>
      </main>
    </div>
  );
}
