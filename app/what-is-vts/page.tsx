import Link from "next/link";
import {
  ArrowRight,
  Eye,
  EyeOff,
  Layers,
  Stethoscope,
  Microscope,
  TriangleAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";
import { CountUp } from "@/components/count-up";

export const metadata = { title: "What is VTS" };

const MILESTONES = [
  {
    year: "1945",
    title: "First clinical identification",
    body: "Vanishing Twin Syndrome is first described in clinical literature, naming a loss that had long gone unrecognized. Yet for decades, it remained poorly understood and rarely communicated to families.",
  },
  {
    year: "First trimester",
    title: "Most common timing",
    body: "The majority of VTS cases occur in the first trimester, often before families have processed the news of a multifetal pregnancy. Many losses occur before a first ultrasound appointment.",
  },
  {
    year: "Modern ultrasound era",
    title: "Detection became possible — but inconsistent",
    body: "Widespread first-trimester ultrasound made VTS detectable for the first time. However, detection depends on timing, access, and clinical practice — and many cases are never identified.",
  },
  {
    year: "Present",
    title: "Research gaps persist",
    body: "Despite decades of documented occurrence, globally consistent guidelines for the diagnosis, communication, and support around VTS are still under development. IVTSF is part of that work.",
  },
];

const OUTCOMES = [
  {
    icon: EyeOff,
    title: "No visible remains",
    badge: "Most common",
    body: "The most frequent outcome. The tissue of the baby who did not continue to develop is fully reabsorbed early in the pregnancy — often only visible on a first-trimester scan, and absent by later appointments.",
    gradientFrom: "#6B2DB5",
    gradientTo: "#8B3FD4",
  },
  {
    icon: Eye,
    title: "Partial remains visible",
    badge: "Occurs in some cases",
    body: "A small cystic area, gestational sac, or partial remains may be visible on later scans. This is sometimes referred to as a blighted ovum if the sac is empty. The baby who continued to develop is typically unaffected.",
    gradientFrom: "#4DB8E8",
    gradientTo: "#87CEEB",
  },
  {
    icon: Layers,
    title: "Fetal remains at delivery",
    badge: "Later-pregnancy loss",
    body: "When loss occurs later in pregnancy, fetal remains may be present at delivery — sometimes referred to as fetus papyraceus (calcified remains). Care is individualized and should be grief-informed.",
    gradientFrom: "#C2408C",
    gradientTo: "#9B2D6E",
  },
];

export default function WhatIsVtsPage() {
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
              Vanishing Twin Syndrome: What We Know
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              Vanishing twin syndrome describes the early death of one baby in a
              multifetal pregnancy — most often before the pregnancy is even
              fully established in a family&rsquo;s awareness. It is not rare.
              It is not always visible. And it deserves to be understood.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Intro */}
      <section className="container py-16 md:py-20">
        <SectionReveal className="max-w-3xl">
          <p className="text-lg text-muted leading-relaxed pretty mb-4">
            Vanishing twin syndrome (VTS) occurs when one fetus in a multiple
            pregnancy does not survive and is fully or partially reabsorbed by
            the body, the placenta, or the other baby. The loss may be detected
            on an early ultrasound — or may never be identified at all.
          </p>
          <p className="text-lg text-muted leading-relaxed pretty mb-4">
            VTS affects more than 35% of twin pregnancies and more than 50% of
            triplet pregnancies based on available evidence. Rates are thought
            to be significantly higher due to limited early detection globally.
          </p>
          <p className="text-lg text-muted leading-relaxed pretty">
            The primary suspected cause is chromosomal or genetic abnormality in
            the baby who did not continue to develop. Further research is needed
            to fully understand contributing factors.
          </p>
        </SectionReveal>
      </section>

      {/* Discovery timeline */}
      <section className="bg-[#FAF8FF]">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-2xl mb-14">
            <Badge variant="outline" className="mb-4">
              Discovery &amp; History
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink balance">
              From 1945 to today.
            </h2>
          </SectionReveal>
          <div className="relative max-w-3xl">
            <div
              className="absolute left-6 top-2 bottom-2 w-px bg-line"
              aria-hidden
            />
            <ol className="space-y-10">
              {MILESTONES.map((m, i) => (
                <SectionReveal key={m.year} index={i}>
                  <li className="relative pl-16">
                    <div
                      className="absolute left-[18px] top-1.5 h-4 w-4 rounded-full bg-brand ring-4 ring-brand-soft"
                      aria-hidden
                    />
                    <p className="text-xs font-semibold uppercase tracking-widest text-[#4DB8E8] mb-1">
                      {m.year}
                    </p>
                    <h3 className="font-serif text-xl font-medium text-ink mb-2">
                      {m.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{m.body}</p>
                  </li>
                </SectionReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Outcomes — with gradient top bars */}
      <section className="bg-[#F0EBF8]">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-2xl mb-14">
            <Badge variant="outline" className="mb-4">
              Outcomes
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink mb-4 balance">
              Possible Outcomes of VTS
            </h2>
            <p className="text-muted leading-relaxed pretty">
              How a loss presents depends on when in the pregnancy it occurs and
              what imaging is able to detect. All three presentations are
              meaningful — and families deserve to understand them.
            </p>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {OUTCOMES.map((o, i) => {
              const Icon = o.icon;
              return (
                <SectionReveal key={o.title} index={i}>
                  <Card className="h-full overflow-hidden shadow-card ivtsf-glow-hover border-line">
                    {/* Gradient top bar */}
                    <div
                      className="h-1.5 w-full"
                      style={{
                        background: `linear-gradient(to right, ${o.gradientFrom}, ${o.gradientTo})`,
                      }}
                    />
                    <CardContent className="p-7">
                      <div className="flex items-start justify-between mb-5">
                        <div
                          className="inline-flex items-center justify-center h-12 w-12 rounded-xl"
                          style={{
                            background: `${o.gradientFrom}18`,
                            color: o.gradientFrom,
                          }}
                        >
                          <Icon className="h-6 w-6" aria-hidden />
                        </div>
                        <Badge variant="muted" className="text-xs">
                          {o.badge}
                        </Badge>
                      </div>
                      <h3 className="font-serif text-xl font-medium text-ink mb-3">
                        {o.title}
                      </h3>
                      <p className="text-muted leading-relaxed">{o.body}</p>
                    </CardContent>
                  </Card>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Occurrence rates */}
      <section className="bg-[#FAF8FF]">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-xl mb-12">
            <Badge variant="outline" className="mb-4">
              Occurrence
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink balance">
              How often does VTS occur?
            </h2>
          </SectionReveal>
          <div className="max-w-3xl space-y-8">
            {[
              { label: "Twin pregnancies", value: 35, note: "35%+" },
              { label: "Triplet pregnancies", value: 50, note: "50%+" },
            ].map((s, i) => (
              <SectionReveal key={s.label} index={i}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-ink font-medium">{s.label}</span>
                  <span className="font-mono text-3xl font-medium text-[#6B2DB5]">
                    <CountUp end={s.value} suffix="%" />+
                  </span>
                </div>
                <div
                  className="h-3 rounded-full overflow-hidden"
                  style={{ background: "#DDD6EE" }}
                  aria-hidden
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${s.value}%`,
                      background:
                        "linear-gradient(to right, #6B2DB5, #4DB8E8)",
                      transition: "width 1.4s ease-out",
                    }}
                  />
                </div>
              </SectionReveal>
            ))}
            <SectionReveal index={2}>
              <div className="flex items-start gap-3 mt-4 rounded-xl bg-gold-soft border border-gold/20 px-5 py-4">
                <TriangleAlert
                  className="h-5 w-5 text-gold flex-shrink-0 mt-0.5"
                  aria-hidden
                />
                <p className="text-sm text-ink leading-relaxed">
                  Rates are conservative estimates. Actual occurrence is thought
                  to be higher due to limited access to early ultrasound
                  globally and inconsistent diagnostic criteria.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Language matters */}
      <section className="bg-[#F0EBF8]">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-2xl mb-12">
            <Badge variant="rose" className="mb-5">
              Language Matters
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink mb-4 balance">
              Language shapes experience.
            </h2>
            <p className="text-muted leading-relaxed pretty">
              How VTS is described — by providers, researchers, and media —
              shapes how families understand and process their experience. IVTSF
              uses flexible, inclusive terminology that honors clinical precision
              and family autonomy equally.
            </p>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 max-w-5xl">
            <SectionReveal>
              <div className="rounded-2xl border border-line bg-white p-7 h-full">
                <h3 className="font-serif text-lg font-medium text-ink mb-4">
                  Clinical terminology
                </h3>
                <p className="text-xs text-muted uppercase tracking-wider mb-4">
                  Used in research and medical contexts
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  {[
                    "Embryonic demise",
                    "Fetal demise",
                    "Early gestational loss",
                    "Retention of embryonic or fetal tissue",
                    "Deceased co-twin",
                  ].map((term) => (
                    <li key={term} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand flex-shrink-0" />
                      {term}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted mt-5 italic">
                  These terms are used in clinical and research contexts — they
                  are not imposed on bereaved families.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal index={1}>
              <div className="rounded-2xl border border-line bg-white p-7 h-full">
                <h3 className="font-serif text-lg font-medium text-ink mb-4">
                  IVTSF preferred phrasing
                </h3>
                <p className="text-xs text-muted uppercase tracking-wider mb-4">
                  Instead of &ldquo;surviving twin&rdquo;
                </p>
                <ul className="space-y-2 text-sm text-muted">
                  {[
                    "The living twin",
                    "The living child",
                    "The remaining baby",
                    "The twin who continued to develop",
                    "The child born from a multifetal pregnancy where another baby did not continue",
                  ].map((term) => (
                    <li key={term} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose flex-shrink-0" />
                      {term}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted mt-5 italic">
                  Family preference is always most important. These are offered
                  as defaults, not directives.
                </p>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal index={2}>
            <div className="max-w-5xl mt-6 rounded-xl bg-gold-soft border border-gold/25 px-6 py-5">
              <p className="text-sm text-ink leading-relaxed">
                <strong>Why this matters:</strong> Language shapes how families
                understand and process their experience. We use trauma-informed
                language to reduce harm — and we always defer to the terms that
                feel right for each individual family.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Sub-page links */}
      <section className="bg-[#FAF8FF]">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-xl mb-10">
            <h2 className="font-serif text-2xl font-medium text-ink">
              Explore further
            </h2>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl">
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
                title: "Treatment of VTS",
                body: "There is no universal consensus. We explore what compassionate, individualized care looks like.",
              },
            ].map((link, i) => {
              const Icon = link.icon;
              return (
                <SectionReveal key={link.href} index={i}>
                  <Link
                    href={link.href}
                    className="group block h-full p-8 rounded-2xl border border-line bg-white shadow-card ivtsf-glow-hover"
                  >
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5 group-hover:scale-105 transition-transform">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-ink mb-3">
                      {link.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-4">
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
        </div>
      </section>
    </>
  );
}
