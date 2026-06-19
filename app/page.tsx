"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FlaskConical,
  BookOpen,
  HeartHandshake,
  FileText,
  MessageSquare,
  Lightbulb,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ButterflyHero } from "@/components/ui/butterfly-hero";
import { DisplayCards } from "@/components/display-cards";
import { CountUp } from "@/components/count-up";
import { SectionReveal } from "@/components/section-reveal";

const PILLARS = [
  {
    icon: <FlaskConical className="h-6 w-6" aria-hidden />,
    title: "Research & Awareness",
    description:
      "We support and disseminate scientific studies on VTS and its psychological, medical, and developmental implications.",
  },
  {
    icon: <BookOpen className="h-6 w-6" aria-hidden />,
    title: "Education & Resources",
    description:
      "We develop materials for healthcare providers, patients, and the public to increase understanding of vanishing twin syndrome.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" aria-hidden />,
    title: "Family & Provider Support",
    description:
      "We offer information on support resources for those affected by VTS. The Foundation does not provide counseling or support groups directly.",
  },
];

const KEY_MESSAGES = [
  {
    icon: <Lightbulb className="h-5 w-5 text-[#4DB8E8]" aria-hidden />,
    heading: "VTS is common.",
    body: "It affects more than 35% of twin pregnancies and more than 50% of triplet pregnancies — not a rare occurrence.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5 text-[#C2408C]" aria-hidden />,
    heading: "Grief responses vary — all are valid.",
    body: "There is no single way to experience a pregnancy in which one baby did not survive. All responses deserve acknowledgment.",
  },
  {
    icon: <MessageSquare className="h-5 w-5 text-[#8B3FD4]" aria-hidden />,
    heading: "Clear language reduces harm.",
    body: "How VTS is communicated by providers shapes how families understand and process their experience. Words matter.",
  },
  {
    icon: <FileText className="h-5 w-5 text-[#6B2DB5]" aria-hidden />,
    heading: "Research gaps persist.",
    body: "We advocate for expanded investigation into VTS across all gestational ages, with globally consistent diagnostic criteria.",
  },
];

export default function HomePage() {
  const [email, setEmail] = React.useState("");

  return (
    <>
      {/* ── Butterfly Hero ────────────────────────────── */}
      <ButterflyHero />

      {/* ── Vision bar ───────────────────────────────── */}
      <SectionReveal>
        <div
          className="w-full py-8 px-4 text-center"
          style={{
            background: "linear-gradient(135deg, #6B2DB5 0%, #4A1A8C 100%)",
          }}
        >
          <p className="font-serif italic text-white text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            &ldquo;A world where VTS is recognized, supported, and accurately
            communicated.&rdquo;
          </p>
        </div>
      </SectionReveal>

      {/* ── Three pillars ────────────────────────────── */}
      <section className="bg-[#FAF8FF]">
        <div className="container py-24 md:py-32">
          <SectionReveal className="max-w-2xl mx-auto text-center mb-16">
            <Badge variant="outline" className="mb-5">
              What We Do
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink balance">
              Three pillars that anchor our work.
            </h2>
          </SectionReveal>
          <DisplayCards cards={PILLARS} />
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="bg-[#1A0A3D]">
        <div className="container py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-3 text-center">
            {[
              {
                value: 35,
                suffix: "%+",
                label: "of twin pregnancies",
                sub: "may involve VTS",
              },
              {
                value: 50,
                suffix: "%+",
                label: "of triplet pregnancies",
                sub: "are estimated to involve VTS",
              },
              {
                value: 1945,
                suffix: "",
                label: "Year VTS first identified",
                sub: "yet research gaps persist today",
              },
            ].map((stat, i) => (
              <SectionReveal key={stat.label} index={i}>
                <div className="space-y-2">
                  <div className="font-mono text-5xl md:text-6xl font-medium text-[#4DB8E8]">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[#8B3FD4] font-medium text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {stat.sub}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <p className="text-center text-xs text-white/40 mt-10 max-w-xl mx-auto leading-relaxed">
              Rates are thought to be significantly higher due to limited early
              detection globally. VTS is not rare — it is underrecognized.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── Key messages ─────────────────────────────── */}
      <section className="bg-[#F0EBF8]">
        <div className="container py-24 md:py-28">
          <SectionReveal className="max-w-xl mb-14">
            <Badge variant="gold" className="mb-5">
              What We Know
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink balance">
              Key messages that guide our work.
            </h2>
          </SectionReveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {KEY_MESSAGES.map((msg, i) => (
              <SectionReveal key={msg.heading} index={i}>
                <div className="h-full flex gap-5 p-6 rounded-2xl border border-line bg-white shadow-card ivtsf-glow-hover">
                  <div className="flex-shrink-0 mt-0.5">{msg.icon}</div>
                  <div>
                    <h3 className="font-serif font-medium text-ink mb-1.5">
                      {msg.heading}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {msg.body}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Press-approved quote ─────────────────────── */}
      <section className="bg-[#F8E8F2]">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-3xl mx-auto text-center">
            <blockquote className="font-serif italic text-xl md:text-2xl text-ink leading-relaxed mb-5">
              &ldquo;The International Vanishing Twin Syndrome Foundation (IVTSF)
              is the leading global nonprofit dedicated to improving
              understanding, communication, and support around vanishing twin
              syndrome (VTS) across all gestational ages and life
              stages.&rdquo;
            </blockquote>
            <cite className="not-italic text-sm text-muted font-medium">
              &mdash; IVTSF Press Kit
            </cite>
          </SectionReveal>
        </div>
      </section>

      {/* ── Newsletter ───────────────────────────────── */}
      <section className="bg-[#FAF8FF]">
        <div className="container py-20">
          <SectionReveal className="max-w-2xl mx-auto text-center">
            <Badge variant="soft" className="mb-5">
              Stay Informed
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-4 balance">
              Stay Informed
            </h2>
            <p className="text-muted mb-8 leading-relaxed pretty">
              Receive updates on research, resources, and advocacy. We send only
              what matters.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              aria-label="Newsletter signup"
              onSubmit={(e) => {
                e.preventDefault();
                setEmail("");
              }}
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                aria-label="Email address"
                className="flex-1"
              />
              <Button
                type="submit"
                className="border-0 text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #6B2DB5 0%, #C2408C 100%)",
                }}
              >
                <Mail className="h-4 w-4" aria-hidden />
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
