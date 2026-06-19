import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/section-reveal";
import { HeartHandshake, Microscope, Globe } from "lucide-react";

export const metadata = { title: "Treatment of VTS" };

const FACTORS = [
  {
    icon: Microscope,
    title: "Timing and gestational age",
    body: "The gestational age at which the loss occurred significantly shapes clinical management. A first-trimester loss with complete reabsorption requires different consideration than a second-trimester loss with visible remains.",
  },
  {
    icon: Globe,
    title: "Type of multiple pregnancy",
    body: "Whether the pregnancy involved identical (monochorionic) or non-identical (dichorionic) twins affects risk assessment, monitoring protocols, and communication with the family.",
  },
  {
    icon: HeartHandshake,
    title: "Presence or absence of visible remains",
    body: "Cases where remains are detectable — including fetus papyraceus — require additional clinical attention and individualized care plans that consider both physical and emotional dimensions of the experience.",
  },
];

export default function TreatmentPage() {
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
              Treatment of VTS
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              There is currently no universal consensus for the treatment of
              vanishing twin syndrome. Each case must be assessed individually,
              with attention to the full clinical and human picture.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Opening */}
      <section className="container py-16">
        <SectionReveal className="max-w-3xl">
          <p className="text-lg text-muted leading-relaxed pretty mb-5">
            When one baby in a multifetal pregnancy does not survive, the focus
            of care rightly shifts to the baby who continued to develop, and to
            the physical and emotional wellbeing of the carrying parent. In most
            cases of first-trimester VTS with complete reabsorption, no
            additional clinical intervention is required.
          </p>
          <p className="text-lg text-muted leading-relaxed pretty">
            However, "no intervention needed" does not mean "nothing happened."
            Acknowledgment, clear communication, and appropriate follow-up are
            part of compassionate care — regardless of clinical complexity.
          </p>
        </SectionReveal>
      </section>

      {/* Factors */}
      <section className="bg-paper">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-xl mb-12">
            <Badge variant="outline" className="mb-4">
              Clinical Considerations
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink balance">
              Factors that influence management.
            </h2>
          </SectionReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {FACTORS.map((f, i) => {
              const Icon = f.icon;
              return (
                <SectionReveal key={f.title} index={i}>
                  <div className="h-full rounded-2xl border border-line bg-white p-7 shadow-card hover:shadow-soft transition-shadow">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-ink mb-3">
                      {f.title}
                    </h3>
                    <p className="text-muted leading-relaxed">{f.body}</p>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing advocacy */}
      <section className="container py-16 pb-24">
        <SectionReveal>
          <div className="rounded-2xl bg-brand-soft border border-brand/20 px-8 py-8 max-w-3xl">
            <h3 className="font-serif text-lg font-medium text-ink mb-3">
              Our advocacy position
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              IVTSF advocates for individualized, compassionate care and
              improved global guidelines in partnership with medical
              institutions, professional associations, and international bodies
              including ISUOG.
            </p>
            <p className="text-muted leading-relaxed">
              We believe every family who experiences VTS deserves to be told
              what happened, to have that acknowledged as significant, and to be
              offered appropriate resources — regardless of the clinical
              complexity of their particular case.
            </p>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
