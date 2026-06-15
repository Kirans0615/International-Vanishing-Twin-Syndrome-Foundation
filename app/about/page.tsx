import {
  Microscope,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  BookMarked,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = { title: "About" };

const PILLARS = [
  {
    icon: Microscope,
    title: "Research",
    body: "We fund and partner on studies that deepen the medical understanding of VTS. Evidence is the foundation for everything we build.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "We translate complex research into accessible resources for families. Knowledge should never be locked behind a paywall or a jargon barrier.",
  },
  {
    icon: HeartHandshake,
    title: "Family Support",
    body: "We hold space for grief that is often dismissed or unnamed. Peer connection, grief-informed materials, and pathways to professional care.",
  },
  {
    icon: ShieldCheck,
    title: "Medical Guidelines",
    body: "We advocate for evidence-based clinical guidelines on how VTS is identified, communicated, and followed. Care should never depend on the ultrasound room.",
  },
  {
    icon: BookMarked,
    title: "Knowledge Translation",
    body: "We close the gap between bench, bedside, and bedside table. Findings reach providers, providers reach families, families reach community.",
  },
];

const TEAM = [
  { name: "Dr. Amara Chen", role: "Founder & President" },
  { name: "Maya Reyes", role: "Director of Family Programs" },
  { name: "Dr. Jordan Patel", role: "Research Director" },
  { name: "Lily Okafor", role: "Community Engagement Lead" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              About IVTSF
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-ink leading-[1.05] mb-6">
              Built by the families and providers who needed it.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              The International Vanishing Twin Syndrome Foundation is a
              parent- and provider-led 501(c)(3) nonprofit. We exist to advance
              research, raise awareness, and offer compassionate support for
              everyone touched by VTS — because too many families have walked
              this path without language for it.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            Mission Pillars
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            Five commitments guide our work.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <SectionReveal key={pillar.title} index={i}>
                <Card className="h-full p-7 hover:shadow-soft transition-shadow">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-ink mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed">
                      {pillar.body}
                    </p>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-paper py-20 md:py-28">
        <div className="container">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="outline" className="mb-4">
              Who We Are
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-4">
              Parent- and provider-led, US-based.
            </h2>
            <p className="text-brand-muted text-lg leading-relaxed">
              A small team of researchers, clinicians, and parents — many of
              whom have lived this loss — building the resources we wish had
              existed for our own families.
            </p>
          </SectionReveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, i) => (
              <SectionReveal
                key={member.name}
                index={i}
                className="text-center"
              >
                <div
                  className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-brand to-brand-accent flex items-center justify-center text-white font-semibold text-2xl mb-4"
                  aria-hidden
                >
                  {member.name
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <h3 className="font-semibold text-brand-ink">{member.name}</h3>
                <p className="text-sm text-brand-muted mt-1">{member.role}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
