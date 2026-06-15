import Link from "next/link";
import {
  Microscope,
  HeartHandshake,
  GraduationCap,
  ArrowRight,
  BookOpen,
  FileText,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { VideoHero } from "@/components/video-hero";
import { SectionImage } from "@/components/section-image";
import { CountUp } from "@/components/count-up";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { SectionReveal } from "@/components/section-reveal";

export default function HomePage() {
  return (
    <>
      {/* Hero with background video */}
      <VideoHero
        videoSrc="/13072016_3840_2160_25fps.mp4"
        posterSrc="/pexels-katya-puzanova-133963158-13601359.jpg"
        posterAlt="Soft natural light through trees"
      >
        <Badge
          variant="soft"
          className="bg-white/15 text-white border-white/25 backdrop-blur-sm mb-6"
        >
          A 501(c)(3) nonprofit
        </Badge>
        <h1 className="font-serif text-display-2 font-medium leading-[1.05] tracking-tight balance">
          You are not alone in this loss.
        </h1>
        <p className="mt-7 text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl pretty">
          The International Vanishing Twin Syndrome Foundation provides
          research, education, and support for individuals and families touched
          by vanishing twin syndrome and other forms of multifetal loss.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-deep hover:bg-paper"
          >
            <Link href="/contact">
              Get Support
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/40 bg-white/5 text-white hover:bg-white/15"
          >
            <Link href="/what-is-vts">Learn About VTS</Link>
          </Button>
        </div>
      </VideoHero>

      {/* Mission / About VTS */}
      <section className="bg-ivory">
        <div className="container py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
            <SectionReveal>
              <SectionImage
                src="/pexels-rdne-9214966.jpg"
                alt="A parent holding their newborn, close and quiet"
                aspect="4/3"
              />
            </SectionReveal>
            <SectionReveal index={1} className="max-w-prose">
              <Badge variant="soft" className="mb-5">
                About VTS
              </Badge>
              <h2 className="font-serif text-display-3 font-medium text-ink mb-6 balance">
                A loss that is common, quiet, and often unspoken.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-5 pretty">
                Vanishing twin syndrome occurs when one fetus in a multiple
                pregnancy is lost very early — sometimes before a family even
                knows. It happens in as many as 36% of twin pregnancies, and yet
                most parents are never told what to do with the grief that
                follows.
              </p>
              <p className="text-muted text-lg leading-relaxed mb-8 pretty">
                We exist to change that — to fund the research, write the
                resources, and hold the space that families and clinicians have
                long been missing.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-9">
                <div>
                  <div className="font-serif text-4xl md:text-5xl font-medium text-brand-deep">
                    <CountUp end={36} />%
                  </div>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    of twin pregnancies affected
                  </p>
                </div>
                <div>
                  <div className="font-serif text-4xl md:text-5xl font-medium text-sage-deep">
                    <CountUp end={50} />%
                  </div>
                  <p className="text-sm text-muted mt-2 leading-relaxed">
                    of triplet pregnancies affected
                  </p>
                </div>
              </div>
              <Button asChild variant="ghost" className="-ml-3">
                <Link href="/what-is-vts">
                  Learn more about VTS
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-paper">
        <div className="container py-24 md:py-32">
          <SectionReveal className="max-w-2xl mb-16">
            <Badge variant="outline" className="mb-5">
              What We Do
            </Badge>
            <h2 className="font-serif text-display-3 font-medium text-ink mb-5 balance">
              Three commitments that hold our work together.
            </h2>
            <p className="text-muted text-lg leading-relaxed pretty">
              Each program is built in close collaboration with the families and
              clinicians who know this loss most intimately.
            </p>
          </SectionReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                eyebrow: "Research",
                title: "Advancing the evidence.",
                body: "We fund and synthesize studies on prevalence, outcomes, and the long-term experience of the surviving twin and the carrying parent.",
                image: "/pexels-karola-g-4046971.jpg",
                imageAlt: "Hands open above an open notebook in soft light",
                href: "/knowledge-hub",
                icon: <Microscope className="h-5 w-5" aria-hidden />,
              },
              {
                eyebrow: "Education",
                title: "Translating the science.",
                body: "Plain-language guides for families. Clinical communication frameworks for providers. The bridge between bench and bedside.",
                image: "/pexels-ai25studioai-7345441.jpg",
                imageAlt:
                  "A pair of pregnancy ultrasound photographs on a soft background",
                href: "/knowledge-hub",
                icon: <GraduationCap className="h-5 w-5" aria-hidden />,
              },
              {
                eyebrow: "Support",
                title: "Holding space for grief.",
                body: "Peer connection, grief-informed resources, and pathways to professional care for the loss that often has no language.",
                image: "/pexels-rdne-9214966.jpg",
                imageAlt: "A parent and child resting forehead-to-forehead",
                href: "/volunteer",
                icon: <HeartHandshake className="h-5 w-5" aria-hidden />,
              },
            ].map((card, i) => (
              <SectionReveal key={card.title} index={i}>
                <article className="group h-full flex flex-col rounded-3xl overflow-hidden bg-ivory border border-line shadow-card hover:shadow-soft transition-shadow">
                  <SectionImage
                    src={card.image}
                    alt={card.imageAlt}
                    aspect="4/3"
                    className="rounded-none shadow-none ring-0"
                  />
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-deep mb-3">
                      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-brand-soft">
                        {card.icon}
                      </span>
                      {card.eyebrow}
                    </div>
                    <h3 className="font-serif text-2xl text-ink mb-3 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-muted leading-relaxed flex-1 pretty">
                      {card.body}
                    </p>
                    <Link
                      href={card.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep hover:gap-2.5 transition-all"
                    >
                      Read more
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-ivory">
        <div className="container py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-start">
            <SectionReveal className="max-w-prose lg:sticky lg:top-28">
              <Badge variant="soft" className="mb-5">
                Resources
              </Badge>
              <h2 className="font-serif text-display-3 font-medium text-ink mb-5 balance">
                Where to find guidance you can trust.
              </h2>
              <p className="text-muted text-lg leading-relaxed pretty">
                A library that grows with the families and clinicians we serve.
                Each resource is reviewed, plain-language, and free.
              </p>
              <Button asChild variant="outline" className="mt-7">
                <Link href="/knowledge-hub">
                  Open the Knowledge Hub
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Button>
            </SectionReveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: <BookOpen className="h-5 w-5" aria-hidden />,
                  title: "Family guides",
                  body: "Honest, gentle reading on diagnosis, grief, and the days after.",
                  tag: "For families",
                },
                {
                  icon: <FileText className="h-5 w-5" aria-hidden />,
                  title: "Clinical briefs",
                  body: "Communication frameworks and documentation templates for clinicians.",
                  tag: "For providers",
                },
                {
                  icon: <Microscope className="h-5 w-5" aria-hidden />,
                  title: "Research summaries",
                  body: "Curated literature on prevalence, outcomes, and the surviving twin.",
                  tag: "For researchers",
                },
                {
                  icon: <MessageCircle className="h-5 w-5" aria-hidden />,
                  title: "Peer stories",
                  body: "First-person accounts from families and providers, in their own words.",
                  tag: "Community",
                },
              ].map((card, i) => (
                <SectionReveal key={card.title} index={i}>
                  <Card className="h-full p-7 hover:shadow-soft transition-shadow border-line bg-paper/60">
                    <CardContent className="p-0">
                      <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-soft text-brand-deep mb-5">
                        {card.icon}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                        {card.tag}
                      </div>
                      <h3 className="font-serif text-xl text-ink mb-2 leading-snug">
                        {card.title}
                      </h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {card.body}
                      </p>
                    </CardContent>
                  </Card>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stories / Community — image + carousel */}
      <section className="bg-paper">
        <div className="container py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] items-center">
            <SectionReveal>
              <SectionImage
                src="/pexels-ai25studioai-7345441.jpg"
                alt="A quiet moment of remembrance"
                aspect="3/4"
                className="max-w-md"
              />
            </SectionReveal>
            <SectionReveal index={1}>
              <Badge variant="outline" className="mb-5">
                Voices
              </Badge>
              <h2 className="font-serif text-display-3 font-medium text-ink mb-7 balance">
                The families and providers walking this with us.
              </h2>
              <TestimonialCarousel />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Contact / Support CTA */}
      <section className="bg-ivory">
        <div className="container py-20 md:py-28">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep via-brand to-sage-deep px-8 py-16 md:px-16 md:py-20 shadow-soft">
            <div
              className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
              aria-hidden
            />
            <div
              className="absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-sage/20 blur-3xl"
              aria-hidden
            />
            <div className="relative max-w-2xl text-white">
              <Badge
                variant="soft"
                className="bg-white/15 text-white border-white/20 mb-5"
              >
                We are here
              </Badge>
              <h2 className="font-serif text-display-3 font-medium leading-tight mb-5 balance">
                Reach out when you need us.
              </h2>
              <p className="text-white/85 text-lg leading-relaxed mb-9 max-w-xl pretty">
                Whether you are a family with questions, a clinician seeking
                resources, or a researcher looking to collaborate — we&apos;ll
                reply within two business days.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-brand-deep hover:bg-paper"
                >
                  <Link href="/contact">
                    <Mail className="h-4 w-4" aria-hidden />
                    Get in touch
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-white/40 bg-white/5 text-white hover:bg-white/15"
                >
                  <Link href="/donate">
                    <HeartHandshake className="h-4 w-4" aria-hidden />
                    Support the work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-paper">
        <div className="container py-20">
          <div className="max-w-3xl mx-auto text-center">
            <Badge variant="outline" className="mb-5">
              Stay close
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl font-medium text-ink mb-4 balance">
              Quarterly updates from the foundation.
            </h2>
            <p className="text-muted mb-7 max-w-xl mx-auto leading-relaxed pretty">
              New research, resources, and notes from the families we serve.
              Unsubscribe any time.
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
          </div>
        </div>
      </section>
    </>
  );
}
