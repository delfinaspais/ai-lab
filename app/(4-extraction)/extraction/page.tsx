"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarAppointment } from "./calendar-appointment";
import { extractAppointment } from "./actions";
import { type AppointmentDetails } from "./schemas";
import { PageHeader } from "@/components/page-header";
import { useLocale } from "@/lib/i18n/context";

export default function Page() {
  const { t } = useLocale();
  const [loading, setLoading] = useState(false);
  const [appointment, setAppointment] = useState<AppointmentDetails | null>(
    null,
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setAppointment(null);

    const formData = new FormData(e.target as HTMLFormElement);
    const input = formData.get("appointment") as string;

    try {
      const result = await extractAppointment(input);
      setAppointment(result);
    } catch (error) {
      console.error("Extraction failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-8">
      <PageHeader
        title={t.extraction.title}
        description={t.extraction.description}
      />

      <div className="flex flex-col gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{t.extraction.cardTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="appointment"
                placeholder={t.extraction.placeholder}
                className="w-full"
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? t.extraction.extracting : t.extraction.extract}
              </Button>
            </form>
          </CardContent>
        </Card>

        <CalendarAppointment appointment={appointment} />
      </div>
    </div>
  );
}
