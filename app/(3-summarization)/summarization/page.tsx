"use client";

import { MessageList } from "./message-list";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/page-header";
import messages from "./messages.json";
import { useState } from "react";
import { generateSummary } from "./actions";
import { SummaryCard } from "./summary-card";
import { useLocale } from "@/lib/i18n/context";

type Summary = Awaited<ReturnType<typeof generateSummary>>;

export default function Home() {
  const { t } = useLocale();
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState<Summary | null>(null);

  return (
    <main className="mx-auto max-w-2xl px-4 py-8">
      <PageHeader
        title={t.summarization.title}
        description={t.summarization.description}
      />

      <div className="flex items-center gap-4 mb-4">
        <h3 className="font-semibold">{t.summarization.comments}</h3>
        <Button
          variant={"secondary"}
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            setSummary(null);

            try {
              const result = await generateSummary(messages);
              setSummary(result);
            } catch (error) {
              console.error("Summarization failed:", error);
            } finally {
              setLoading(false);
            }
          }}
        >
          {loading ? t.summarization.generating : t.summarization.generate}
        </Button>
      </div>

      {summary && <SummaryCard {...summary} />}

      <MessageList messages={messages} />
    </main>
  );
}
