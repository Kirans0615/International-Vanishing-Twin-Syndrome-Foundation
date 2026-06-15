import { AlertTriangle, Calendar, MessageCircle, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = { title: "Diagnosing VTS" };

const HURDLES = [
  {
    icon: Calendar,
    title: "Timing of ultrasounds",
    body: "Many losses occur before the standard first-trimester scan window, leaving them undetected. Earlier or repeat imaging is rarely routine.",
  },
  {
    icon: Search,
    title: "Lack of universal guidelines",
    body: "Professional bodies do not yet share a unified protocol for identifying, recording, or following VTS, leading to wide variation in care.",
  },
  {
    icon: MessageCircle,
    title: "Provider communication gaps",
    body: "Many clinicians have never been trained on how to talk about VTS with families, particularly in the language of grief.",
  },
];

export default function DiagnosingVtsPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              What is VTS / Diagnosing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-6">
              Why VTS is missed, miscommunicated, or left unspoken.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              Identifying a vanishing twin is not always straightforward. The
              barriers are clinical, structural, and human — and they shape what
              families know about their own pregnancy.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {HURDLES.map((h, i) => {
            const Icon = h.icon;
            return (
              <SectionReveal key={h.title} index={i}>
                <Card className="h-full p-7">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-ink mb-3">
                      {h.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed text-sm">
                      {h.body}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>

        <SectionReveal>
          <div
            role="note"
            className="rounded-2xl border border-amber-200 bg-amber-50 p-7 md:p-8 flex gap-5"
          >
            <AlertTriangle
              className="h-7 w-7 text-amber-700 flex-shrink-0 mt-0.5"
              aria-hidden
            />
            <div>
              <h3 className="text-lg font-semibold text-amber-900 mb-2">
                Families are often not told.
              </h3>
              <p className="text-amber-900/90 leading-relaxed">
                In many cases, a vanishing twin is noted in the medical record
                but never discussed with the parents. Whether the omission is
                from caution, time pressure, or lack of guidance, the silence
                itself carries a cost. If you suspect a vanishing twin in your
                pregnancy or in your record, you can ask your provider directly
                — and you are entitled to the answer.
              </p>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
