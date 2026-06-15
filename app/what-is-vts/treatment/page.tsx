import { HeartHandshake, Stethoscope, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = { title: "Treatment" };

const PRINCIPLES = [
  {
    icon: Stethoscope,
    title: "Individualized clinical care",
    body: "There is no universal protocol for managing a vanishing twin pregnancy. Care is shaped by gestational age, parental health, and the specifics of the loss.",
  },
  {
    icon: HeartHandshake,
    title: "Grief-informed conversation",
    body: "Whatever the clinical management plan, families deserve to be told what happened in language that honors the loss — and given space to ask questions.",
  },
  {
    icon: Users,
    title: "Continuity of follow-up",
    body: "Follow-up imaging, mental-health screening, and connection to peer support all belong in the care plan, not just at the moment of discovery.",
  },
];

export default function TreatmentPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              What is VTS / Treatment
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-6">
              There is no single answer. There is good care.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              No universal medical consensus exists for the treatment of
              Vanishing Twin Syndrome. Every case is assessed individually, and
              the best care often comes from a team that takes time to listen.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <SectionReveal className="max-w-3xl mx-auto mb-14">
          <p className="text-brand-muted leading-relaxed text-lg">
            In most cases involving a first-trimester loss, no intervention is
            medically necessary, and the surviving fetus continues to develop
            normally. Later losses or rarer presentations may call for closer
            monitoring. Across all cases, the consistent element is the human
            one: clear, compassionate, ongoing communication with the family.
          </p>
        </SectionReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => {
            const Icon = p.icon;
            return (
              <SectionReveal key={p.title} index={i}>
                <Card className="h-full p-7">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-ink mb-3">
                      {p.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed text-sm">
                      {p.body}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
