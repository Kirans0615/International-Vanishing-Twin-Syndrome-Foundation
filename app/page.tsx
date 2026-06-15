import Link from "next/link";
import {
  Microscope,
  HeartHandshake,
  Stethoscope,
  BookOpen,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { FlickeringGrid } from "@/components/flickering-grid";
import { DisplayCards } from "@/components/display-cards";
import { CountUp } from "@/components/count-up";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { SectionReveal } from "@/components/section-reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <FlickeringGrid
          color="rgb(109, 40, 217)"
          squareSize={4}
          gridGap={6}
          flickerChance={0.25}
          maxOpacity={0.35}
        />
        <div className="absolute inset-0 -z-10 gradient-soft" aria-hidden />
        <div className="container py-20 md:py-32 text-center relative">
          <Badge variant="soft" className="mb-6">
            A 501(c)(3) nonprofit
          </Badge>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-brand-ink leading-[1.05]">
            You Are <span className="text-brand">Not Alone.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Supporting families and advancing research for Vanishing Twin
            Syndrome — with warmth, evidence, and community.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg">
              <Link href="/what-is-vts">
                Learn About VTS
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/donate">Donate Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission strip */}
      <section className="container py-20 md:py-24">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-12">
          <Badge variant="outline" className="mb-4">
            Our Mission
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            Three pillars guide every program we build.
          </h2>
        </SectionReveal>
        <DisplayCards
          cards={[
            {
              icon: <Microscope className="h-6 w-6" aria-hidden />,
              title: "Research & Awareness",
              description:
                "Funding studies and translating findings so families and clinicians can make informed decisions.",
              accent: "bg-brand-soft text-brand-deep",
            },
            {
              icon: <HeartHandshake className="h-6 w-6" aria-hidden />,
              title: "Family Support",
              description:
                "Compassionate resources, peer connection, and grief-informed guidance for every stage of the journey.",
              accent: "bg-violet-100 text-violet-700",
            },
            {
              icon: <Stethoscope className="h-6 w-6" aria-hidden />,
              title: "Medical Advocacy",
              description:
                "Building the clinical guidelines and language providers need to talk about VTS with care.",
              accent: "bg-fuchsia-100 text-fuchsia-700",
            },
          ]}
        />
      </section>

      {/* What is VTS teaser */}
      <section className="bg-brand-paper py-20 md:py-28">
        <div className="container grid gap-16 lg:grid-cols-2 items-center">
          <SectionReveal>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-brand">
                  <CountUp end={36} />%
                </div>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  of twin pregnancies are affected by Vanishing Twin Syndrome
                </p>
              </Card>
              <Card className="p-8 text-center">
                <div className="text-5xl md:text-6xl font-bold text-brand-accent">
                  <CountUp end={50} />%
                </div>
                <p className="text-sm text-brand-muted mt-3 leading-relaxed">
                  of triplet pregnancies experience the loss of one fetus
                </p>
              </Card>
            </div>
          </SectionReveal>
          <SectionReveal index={1}>
            <Badge variant="soft" className="mb-5">
              What is VTS?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-ink mb-5">
              A quiet loss with profound impact.
            </h2>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-4">
              Vanishing Twin Syndrome occurs when one fetus in a multiple
              pregnancy is miscarried very early — sometimes without any visible
              remains. Families are often left with grief that has no name, and
              providers without consensus on how to communicate it.
            </p>
            <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-7">
              We exist to change that.
            </p>
            <Button asChild variant="ghost" className="-ml-3">
              <Link href="/what-is-vts">
                Learn More
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Button>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container py-20 md:py-28">
        <SectionReveal className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            Voices
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            The families and providers we walk with.
          </h2>
        </SectionReveal>
        <TestimonialCarousel />
      </section>

      {/* Research banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-violet -z-10" aria-hidden />
        <div className="container py-20 md:py-24 text-white relative">
          <div className="max-w-3xl mx-auto text-center">
            <Badge
              variant="soft"
              className="mb-5 bg-white/15 text-white border-white/20"
            >
              Research Spotlight
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-5">
              VTS occurs in over 35% of twin pregnancies.
            </h2>
            <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Recent first-trimester ultrasound data continues to reveal how
              common this loss truly is — and how many families navigate it
              without guidance.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-brand-deep hover:bg-brand-soft"
            >
              <Link href="/knowledge-hub">
                <BookOpen className="h-4 w-4" aria-hidden />
                Explore the Knowledge Hub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="bg-brand-soft py-20">
        <div className="container">
          <Card className="max-w-3xl mx-auto p-8 md:p-12 text-center border-brand/15">
            <CardContent className="p-0">
              <Mail
                className="h-10 w-10 text-brand mx-auto mb-5"
                aria-hidden
              />
              <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-3">
                Stay close to the work.
              </h2>
              <p className="text-brand-muted mb-7 max-w-xl mx-auto">
                Quarterly updates on research, resources, and the families we
                serve. Unsubscribe anytime.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                aria-label="Newsletter signup"
              >
                <Input
                  type="email"
                  required
                  placeholder="you@email.com"
                  aria-label="Email address"
                  className="flex-1"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
