import {
  Microscope,
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  BookMarked,
  CheckCircle,
  Mail,
  Globe,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = { title: "About" };

const PILLARS = [
  {
    icon: Microscope,
    title: "Research",
    body: "We support and disseminate scientific studies on VTS, including its psychological, medical, and developmental implications across all gestational ages.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "We develop materials for healthcare providers, patients, and the public that increase understanding of vanishing twin syndrome in accurate, accessible language.",
  },
  {
    icon: HeartHandshake,
    title: "Family & Provider Support",
    body: "We offer information on support resources for those affected by VTS. The Foundation does not provide counseling or support groups directly.",
  },
  {
    icon: ShieldCheck,
    title: "Clinical Guidelines",
    body: "We advocate for evidence-based, globally consistent diagnostic and communication guidelines — in partnership with organizations such as ISUOG and ICOMBO.",
  },
  {
    icon: BookMarked,
    title: "Knowledge Translation",
    body: "We work to close the gap between research and practice: from published evidence to clinical communication to public understanding.",
  },
];

const INITIATIVES = [
  "Peer-reviewed literature reviews on VTS prevalence and outcomes",
  "ISUOG guideline development for VTS diagnosis and communication",
  "Patient-provider communication research and framework development",
  "Mixed-methods studies on family experience of VTS",
  "Bereavement and grief-informed resource development",
  "Partnership with ICOMBO, Miracle of America, and the Butterfly Project",
  "Global coding and classification advocacy for VTS-related losses",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              About IVTSF
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-ink leading-[1.05] mb-6 balance">
              About the IVTSF
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              A global nonprofit led by parents and providers — dedicated to
              improving how vanishing twin syndrome is understood, communicated,
              and supported worldwide.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Mission pillars */}
      <section className="container py-20 md:py-28">
        <SectionReveal className="max-w-2xl mb-14">
          <Badge variant="outline" className="mb-4">
            Mission Pillars
          </Badge>
          <h2 className="font-serif text-display-3 font-medium text-ink mb-4 balance">
            Five pillars guide our work.
          </h2>
          <p className="text-muted text-lg leading-relaxed pretty">
            Every program and initiative at IVTSF traces back to one of these
            five commitments.
          </p>
        </SectionReveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <SectionReveal key={pillar.title} index={i}>
                <Card className="h-full border border-l-4 border-l-brand border-line bg-white p-7 shadow-card hover:shadow-soft transition-shadow">
                  <CardContent className="p-0">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-ink mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{pillar.body}</p>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>
      </section>

      {/* Vision */}
      <section className="bg-brand py-16 md:py-20">
        <div className="container">
          <SectionReveal className="text-center max-w-3xl mx-auto">
            <p className="font-serif italic text-white text-xl md:text-2xl leading-relaxed">
              "A world where VTS is recognized, supported, and accurately communicated."
            </p>
            <p className="text-brand-soft text-sm mt-4 uppercase tracking-wider font-medium">
              IVTSF Vision Statement
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Who we are + initiatives */}
      <section className="bg-paper">
        <div className="container py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-start">
            <SectionReveal>
              <Badge variant="soft" className="mb-5">
                Who We Are
              </Badge>
              <h2 className="font-serif text-display-3 font-medium text-ink mb-5 balance">
                A global, parent- and provider-led organization.
              </h2>
              <p className="text-muted leading-relaxed mb-4 pretty">
                The International Vanishing Twin Syndrome Foundation (IVTSF) is
                a 501(c)(3) nonprofit organization based in the United States.
                We are led by parents who have experienced VTS and clinicians
                who have witnessed the gaps in care and communication.
              </p>
              <p className="text-muted leading-relaxed mb-4 pretty">
                Our work advances research, clinical communication, terminology
                clarity, and support — ensuring that families and providers have
                access to accurate, trauma-informed information.
              </p>
              <p className="text-muted leading-relaxed pretty">
                We operate through partnerships with academic institutions,
                medical organizations, and advocacy networks worldwide.
              </p>
            </SectionReveal>

            <SectionReveal index={1}>
              <Badge variant="outline" className="mb-5">
                Current Initiatives
              </Badge>
              <h2 className="font-serif text-2xl font-medium text-ink mb-6">
                Active areas of work.
              </h2>
              <ul className="space-y-3">
                {INITIATIVES.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="h-5 w-5 text-brand flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span className="text-muted leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Media contact */}
      <section className="container py-12 pb-20">
        <SectionReveal>
          <div className="rounded-2xl bg-brand p-8 md:p-10 max-w-2xl">
            <h3 className="font-serif text-xl font-medium text-white mb-1">
              Media Contact
            </h3>
            <p className="text-brand-soft text-sm mb-6">
              For press inquiries, please reach out directly.
            </p>
            <div className="space-y-2">
              <p className="text-white font-semibold">
                Nichole McTurk Cubbage, DHSc, MS
              </p>
              <p className="text-brand-soft text-sm">
                Founder &amp; Executive Director, IVTSF
              </p>
              <a
                href="mailto:contact@vanishingtwinsyndrome.org"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors mt-2"
              >
                <Mail className="h-4 w-4" aria-hidden />
                contact@vanishingtwinsyndrome.org
              </a>
              <br />
              <a
                href="https://www.vanishingtwinsyndrome.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/90 hover:text-white text-sm transition-colors"
              >
                <Globe className="h-4 w-4" aria-hidden />
                www.vanishingtwinsyndrome.org
              </a>
            </div>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
