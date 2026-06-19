import { TriangleAlert, Clock, Globe, MessageSquareOff } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = { title: "Diagnosing VTS" };

const CHALLENGES = [
  {
    icon: Clock,
    title: "Timing",
    body: "Early ultrasounds are not always available or scheduled before the baby who did not continue to develop has been fully reabsorbed. By the time a family has their first scan, evidence of a multifetal pregnancy may no longer be visible — leaving the loss undetected.",
  },
  {
    icon: Globe,
    title: "No Universal Guidelines",
    body: "Diagnostic criteria for VTS vary significantly by country, institution, and provider. In some regions, there are no established guidelines at all. What constitutes a reportable VTS diagnosis — and how it should be communicated — remains inconsistent globally.",
  },
  {
    icon: MessageSquareOff,
    title: "Communication Gaps",
    body: "Families are often not informed about VTS — either because providers do not view the loss as clinically significant, or because communication is unclear, brief, or absent altogether. This silence can deepen confusion and prevent families from accessing appropriate support.",
  },
];

export default function DiagnosingVtsPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              What is VTS
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-ink leading-[1.05] mb-6 balance">
              Diagnosing VTS
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              Vanishing twin syndrome is often difficult to detect — and harder
              still to communicate well. Understanding the barriers to diagnosis
              is essential to improving care for all families.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="container py-16">
        <SectionReveal className="max-w-3xl">
          <p className="text-lg text-muted leading-relaxed pretty mb-4">
            There is currently no universally agreed-upon definition or
            diagnostic protocol for vanishing twin syndrome. What a provider
            documents, communicates, and follows up on varies enormously — by
            institution, by country, and by individual clinical judgment.
          </p>
          <p className="text-lg text-muted leading-relaxed pretty">
            The result is that many families never learn that their pregnancy
            involved more than one baby, or learn about it only incidentally and
            without context or support.
          </p>
        </SectionReveal>
      </section>

      {/* Challenges */}
      <section className="bg-paper">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-xl mb-12">
            <Badge variant="outline" className="mb-4">
              Diagnostic Barriers
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink balance">
              Three core challenges in diagnosis.
            </h2>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {CHALLENGES.map((c, i) => {
              const Icon = c.icon;
              return (
                <SectionReveal key={c.title} index={i}>
                  <Card className="h-full p-7 shadow-card hover:shadow-soft transition-shadow border-line">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <h3 className="font-serif text-xl font-medium text-ink mb-3">
                        {c.title}
                      </h3>
                      <p className="text-muted leading-relaxed">{c.body}</p>
                    </CardContent>
                  </Card>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Callout */}
      <section className="container py-16 pb-24">
        <SectionReveal>
          <div className="rounded-2xl bg-gold-soft border border-gold/25 px-8 py-8 max-w-3xl flex gap-5">
            <TriangleAlert
              className="h-6 w-6 text-gold flex-shrink-0 mt-0.5"
              aria-hidden
            />
            <div>
              <h3 className="font-serif text-lg font-medium text-ink mb-2">
                The cost of these gaps
              </h3>
              <p className="text-muted leading-relaxed">
                These gaps create confusion — and sometimes silence — around
                what research shows many families experience as a meaningful and
                lasting event. Families deserve to know what happened in their
                pregnancy, to have that acknowledged, and to receive support
                when they need it. IVTSF is working to close these gaps through
                guideline development, provider education, and advocacy.
              </p>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
