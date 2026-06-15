import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Activity,
  Heart,
  Calendar,
  Stethoscope,
  Microscope,
  BookOpen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";
import { CountUp } from "@/components/count-up";

export const metadata = { title: "What is VTS" };

const MILESTONES = [
  {
    year: "1945",
    title: "First clinical description",
    body: "Stoeckel introduces the term Vanishing Twin Syndrome, formally naming a loss that had long gone unrecognized in clinical literature.",
  },
  {
    year: "1980s",
    title: "Routine first-trimester ultrasound",
    body: "Widespread adoption of early ultrasound makes VTS detectable in real time — and reveals just how common it is.",
  },
  {
    year: "2000s",
    title: "Multiple-pregnancy research expands",
    body: "Studies establish incidence rates and explore the long-term outcomes for the surviving twin and the carrying parent.",
  },
  {
    year: "Today",
    title: "Building the support infrastructure",
    body: "IVTSF and its partners advance evidence-based guidelines, parent resources, and provider education.",
  },
];

const OUTCOMES = [
  {
    icon: Sparkles,
    title: "No visible remains",
    body: "The tissue of the vanished twin is fully reabsorbed early in the pregnancy. Often only identifiable on a first-trimester ultrasound.",
  },
  {
    icon: Activity,
    title: "Some visible remains",
    body: "A gestational sac or partial reabsorption may be visible at later scans, with no impact on the surviving twin's development.",
  },
  {
    icon: Heart,
    title: "Fetal remains visible",
    body: "When loss occurs later in pregnancy, fetal remains may be present at delivery. Care is individualized and grief-informed.",
  },
];

const STATS = [
  { label: "of twin pregnancies", value: 36, suffix: "%" },
  { label: "of triplet pregnancies", value: 50, suffix: "%" },
  { label: "occur in the first trimester", value: 80, suffix: "%" },
];

export default function WhatIsVtsPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              What is VTS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-ink leading-[1.05] mb-6">
              A loss that is common, quiet, and often unspoken.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              Vanishing Twin Syndrome describes the early loss of one fetus in a
              multiple pregnancy. The loss may be discovered at an early
              ultrasound, or only later — and many families learn of it without
              warning or guidance. This page is here to ground you in what is
              known.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            Discovery & Milestones
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            From 1945 to today.
          </h2>
        </div>
        <div className="relative">
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-brand-line -translate-x-1/2"
            aria-hidden
          />
          <ol className="space-y-12">
            {MILESTONES.map((m, i) => (
              <SectionReveal
                key={m.year}
                index={i}
                className={`md:grid md:grid-cols-2 md:gap-12 md:items-center ${
                  i % 2 === 1 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div
                  className={`md:[direction:ltr] ${
                    i % 2 === 1 ? "md:text-right" : ""
                  }`}
                >
                  <div className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-2">
                    {m.year}
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-ink mb-3">
                    {m.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed">{m.body}</p>
                </div>
                <div className="md:[direction:ltr] hidden md:flex items-center justify-center">
                  <div className="relative h-4 w-4 rounded-full bg-brand ring-4 ring-brand-soft" />
                </div>
              </SectionReveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Outcomes */}
      <section className="bg-brand-paper py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4">
              Outcomes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
              Three ways VTS can present.
            </h2>
            <p className="text-brand-muted mt-4 text-lg leading-relaxed">
              How a loss is experienced depends on when it happens and what is
              visible on imaging.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {OUTCOMES.map((o, i) => {
              const Icon = o.icon;
              return (
                <SectionReveal key={o.title} index={i}>
                  <Card className="h-full p-7 hover:shadow-soft transition-shadow">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                        <Icon className="h-6 w-6" aria-hidden />
                      </div>
                      <h3 className="text-xl font-semibold text-brand-ink mb-3">
                        {o.title}
                      </h3>
                      <p className="text-brand-muted leading-relaxed">
                        {o.body}
                      </p>
                    </CardContent>
                  </Card>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Occurrence stats with bars */}
      <section className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">
            Occurrence
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            How often does VTS happen?
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {STATS.map((s, i) => (
            <SectionReveal key={s.label} index={i}>
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-brand-ink font-medium">{s.label}</span>
                <span className="text-3xl font-bold text-brand">
                  <CountUp end={s.value} suffix={s.suffix} />
                </span>
              </div>
              <div
                className="h-3 rounded-full bg-brand-soft overflow-hidden"
                aria-hidden
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand to-brand-accent"
                  style={{
                    width: `${s.value}%`,
                    transition: "width 1.2s ease-out",
                  }}
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Sub-page links */}
      <section className="bg-brand-paper py-20 md:py-24">
        <div className="container grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              href: "/what-is-vts/diagnosing-vts",
              icon: Stethoscope,
              title: "Diagnosing VTS",
              body: "The clinical hurdles, the timing of ultrasounds, and the communication gaps families navigate.",
            },
            {
              href: "/what-is-vts/treatment",
              icon: Microscope,
              title: "Treatment",
              body: "There is no universal consensus. We explore what compassionate, individualized care looks like.",
            },
          ].map((link, i) => {
            const Icon = link.icon;
            return (
              <SectionReveal key={link.href} index={i}>
                <Link
                  href={link.href}
                  className="group block h-full p-8 rounded-2xl border border-brand-line bg-white shadow-card hover:shadow-soft hover:-translate-y-1 transition-all"
                >
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="text-2xl font-semibold text-brand-ink mb-3">
                    {link.title}
                  </h3>
                  <p className="text-brand-muted leading-relaxed mb-4">
                    {link.body}
                  </p>
                  <span className="inline-flex items-center gap-1 text-brand font-semibold text-sm group-hover:gap-2 transition-all">
                    Read more
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </SectionReveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
