"use client";

import { Mail, Globe, CheckSquare, XCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Accordion } from "@/components/ui/accordion";
import { SectionReveal } from "@/components/section-reveal";

const ETHICS = [
  {
    value: "1",
    trigger: "Use the full, accurate name of the organization.",
    content:
      "Please refer to us as the International Vanishing Twin Syndrome Foundation (IVTSF) on first reference. Do not abbreviate without first introducing the full name. Do not refer to us simply as a support group -- we are a research and education nonprofit.",
  },
  {
    value: "2",
    trigger: "Do not conflate VTS with general pregnancy loss or miscarriage.",
    content:
      "Vanishing twin syndrome is a specific phenomenon that occurs in multifetal pregnancies. While grief responses may overlap, VTS involves distinct biological, emotional, and clinical realities. Conflation undermines accurate understanding.",
  },
  {
    value: "3",
    trigger: "Avoid sensationalized or romanticized language.",
    content:
      "Terms such as miracle survivor, angel baby, lost their angel, or special bond with a ghost twin may be meaningful to some families privately, but should not be imposed editorially. Use neutral, accurate language unless directly quoting a family.",
  },
  {
    value: "4",
    trigger: "Do not refer to the living child as the surviving twin.",
    content:
      "IVTSF does not use the phrase surviving twin in our materials. Preferred terms include: the living twin, the child who continued to develop, the remaining baby, or the twin born from this pregnancy. Always defer to individual family preference.",
  },
  {
    value: "5",
    trigger: "Do not imply that children born from VTS pregnancies are inherently traumatized.",
    content:
      "Research does not support the claim that all or most children born from VTS pregnancies experience identifiable psychological trauma as a result of that loss. Reporting that implies this conflates grief, speculation, and anecdote with clinical evidence. Note emerging research as preliminary and appropriately contextualized.",
  },
  {
    value: "6",
    trigger: "Distinguish between embryonic loss, fetal loss, and neonatal loss.",
    content:
      "VTS can occur across different gestational windows, and the type of loss carries distinct clinical and emotional significance. Embryonic loss (before 10 weeks), fetal loss (10 weeks onward), and losses involving visible remains at delivery are meaningfully different. Do not conflate these.",
  },
  {
    value: "7",
    trigger: "Do not describe VTS as rare.",
    content:
      "VTS occurs in more than 35% of twin pregnancies and more than 50% of triplet pregnancies, according to available research. It is common and significantly underrecognized, in part due to limited early ultrasound access globally. Describing VTS as rare perpetuates this underrecognition.",
  },
];

const RED_FLAGS = [
  "Requests with AI-generated portfolios as writing credentials",
  "Promises of follower growth or exposure in lieu of transparent editorial oversight",
  "Outlets that cannot name an editor, reviewer, or publication outlet",
  "Projects with clearly commercial intent disguised as editorial content",
  "Requests for personal family stories without media ethics context",
  "Projects that present VTS primarily as entertainment or feel-good content",
];

const REQUIREMENTS = [
  "Name of the author, journalist, or content creator",
  "Outlet name, website, and editorial oversight structure",
  "Intended use of interview content (article, podcast, video, documentary)",
  "Platform and estimated audience size and demographic",
  "Anticipated publication or broadcast date",
  "Interview questions submitted in advance",
  "Recording and publication disclosure agreements",
  "Confirmation that editorial review is available before publication",
];

const MISCONCEPTIONS = [
  {
    claim: "VTS is rare.",
    fact: "VTS occurs in more than 35% of twin pregnancies and more than 50% of triplet pregnancies. It is common and significantly underrecognized globally.",
  },
  {
    claim: "Loss can only occur in early pregnancy.",
    fact: "While most VTS losses occur in the first trimester, they can occur at any point in a multifetal pregnancy. Gestational timing shapes clinical presentation and experience.",
  },
  {
    claim: "Children born from VTS pregnancies are predetermined to feel trauma.",
    fact: "Research does not support this claim. Grief responses -- in children and parents -- vary widely. None should be pathologized or assumed.",
  },
];

export default function PressPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Press &amp; Media
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-ink leading-[1.05] mb-6 balance">
              Press &amp; Media
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              Accurate, ethical reporting on VTS begins with good information.
              We welcome collaboration with journalists, educators, and
              researchers who share our commitment to truth and care.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Press-approved descriptions */}
      <section className="container py-20 md:py-24">
        <div className="max-w-3xl mx-auto space-y-10">
          <SectionReveal>
            <Badge variant="outline" className="mb-5">
              Short Description
            </Badge>
            <blockquote className="border-l-4 border-brand pl-6 font-serif text-xl text-ink leading-relaxed italic">
              &ldquo;The International Vanishing Twin Syndrome Foundation (IVTSF)
              is the leading global nonprofit dedicated to improving
              understanding, communication, and support around vanishing twin
              syndrome (VTS) across all gestational ages and life stages.&rdquo;
            </blockquote>
            <p className="text-xs text-muted mt-3 pl-6">
              Approved for use in media materials &mdash; please attribute to IVTSF.
            </p>
          </SectionReveal>

          <SectionReveal index={1}>
            <Badge variant="outline" className="mb-5">
              Extended Description
            </Badge>
            <blockquote className="border-l-4 border-brand pl-6 font-serif text-lg text-ink leading-relaxed italic">
              &ldquo;The International Vanishing Twin Syndrome Foundation (IVTSF)
              is a 501(c)(3) nonprofit organization based in the United States.
              Led by parents who have experienced VTS and providers who have
              witnessed the gaps in care, IVTSF advances research, develops
              clinical and public education resources, advocates for globally
              consistent diagnostic guidelines, and works to ensure that all
              families affected by VTS receive accurate, trauma-informed support.
              IVTSF operates through research partnerships, cross-sector
              advocacy, and direct collaboration with medical organizations,
              academic institutions, and global bereavement networks.&rdquo;
            </blockquote>
            <p className="text-xs text-muted mt-3 pl-6">
              Approved for use in media materials &mdash; please attribute to IVTSF.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Working with us */}
      <section className="bg-cloud">
        <div className="container py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <Badge variant="soft" className="mb-5">
                Collaboration
              </Badge>
              <h2 className="font-serif text-display-3 font-medium text-ink mb-4 balance">
                Working With Us
              </h2>
              <p className="text-muted mb-8 leading-relaxed pretty">
                To ensure responsible coverage of VTS and those it affects, we
                ask media collaborators to provide the following before we
                confirm a partnership.
              </p>
              <ul className="space-y-3">
                {REQUIREMENTS.map((req) => (
                  <li key={req} className="flex items-start gap-3">
                    <CheckSquare
                      className="h-5 w-5 text-brand flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <span className="text-ink leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Red flags */}
      <section className="container py-20 md:py-24">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <Badge variant="rose" className="mb-5">
              Boundaries
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink mb-4 balance">
              We Decline Collaborations That&hellip;
            </h2>
            <p className="text-muted mb-8 leading-relaxed">
              Our mission depends on the integrity of the information that
              reaches families and providers. We do not work with projects that
              compromise this.
            </p>
            <ul className="space-y-3">
              {RED_FLAGS.map((flag) => (
                <li key={flag} className="flex items-start gap-3">
                  <XCircle
                    className="h-5 w-5 text-rose flex-shrink-0 mt-0.5"
                    aria-hidden
                  />
                  <span className="text-ink leading-relaxed">{flag}</span>
                </li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </section>

      {/* Ethical guardrails accordion */}
      <section className="bg-paper">
        <div className="container py-20 md:py-24">
          <div className="max-w-3xl mx-auto">
            <SectionReveal>
              <Badge variant="gold" className="mb-5">
                Editorial Ethics
              </Badge>
              <h2 className="font-serif text-display-3 font-medium text-ink mb-3 balance">
                Ethical Guardrails for Journalists
              </h2>
              <p className="text-muted mb-8 leading-relaxed pretty">
                These guidelines reflect our commitment to accurate, respectful
                reporting on VTS and those it affects.
              </p>
              <Accordion items={ETHICS} />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Misconceptions */}
      <section className="bg-cloud">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-xl mb-12">
            <Badge variant="outline" className="mb-5">
              Common Misconceptions
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink balance">
              Setting the record straight.
            </h2>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {MISCONCEPTIONS.map((m, i) => (
              <SectionReveal key={m.claim} index={i}>
                <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-card space-y-4">
                  <div className="flex items-start gap-2">
                    <XCircle
                      className="h-4 w-4 text-rose flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <p className="text-sm font-semibold text-rose-deep">
                      Misconception: &ldquo;{m.claim}&rdquo;
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckSquare
                      className="h-4 w-4 text-brand flex-shrink-0 mt-0.5"
                      aria-hidden
                    />
                    <p className="text-sm text-muted leading-relaxed">
                      <strong className="text-ink">Reality:</strong> {m.fact}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
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
