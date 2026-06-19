import {
  Microscope,
  Megaphone,
  MessageSquare,
  Calendar,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "@/components/section-reveal";

export const metadata = { title: "Volunteer" };

const ROLES = [
  {
    icon: Microscope,
    title: "Research Assistant",
    body: "Support literature reviews, data synthesis, and resource development. Remote, approximately 5 hours per month. Background in life sciences, health, or research methodology is helpful.",
  },
  {
    icon: Megaphone,
    title: "Community Outreach",
    body: "Help build relationships with hospitals, bereaved parent groups, and partner organizations. People skills and patience are what we need most.",
  },
  {
    icon: MessageSquare,
    title: "Social Media Support",
    body: "Shape our voice across platforms. Plan content, amplify research findings in accessible language, and help us reach families who need us.",
  },
  {
    icon: Calendar,
    title: "Event & Advocacy Support",
    body: "Help organize awareness events, fundraisers, and parent meetups — both virtual and in-person. No prior event experience required.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Volunteer
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-ink leading-[1.05] mb-6 balance">
              Join Our Mission.
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              IVTSF is built by people who care — clinicians, parents,
              researchers, writers, and organizers. Whatever you bring, there is
              a place for it here.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Roles */}
      <section className="container py-20 md:py-24">
        <SectionReveal className="max-w-xl mb-12">
          <Badge variant="outline" className="mb-4">
            Open Roles
          </Badge>
          <h2 className="font-serif text-display-3 font-medium text-ink balance">
            Where you can contribute.
          </h2>
        </SectionReveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {ROLES.map((role, i) => {
            const Icon = role.icon;
            return (
              <SectionReveal key={role.title} index={i}>
                <Card className="h-full p-7 hover:shadow-soft transition-shadow border-line">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="font-serif text-xl font-medium text-ink mb-3">
                      {role.title}
                    </h3>
                    <p className="text-muted leading-relaxed flex-1">{role.body}</p>
                    <Button variant="ghost" className="mt-5 -ml-3 self-start">
                      Express Interest
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Button>
                  </CardContent>
                </Card>
              </SectionReveal>
            );
          })}
        </div>

        {/* Vetting note */}
        <SectionReveal>
          <div className="mt-10 flex items-start gap-4 rounded-xl bg-brand-soft border border-brand/20 px-6 py-5 max-w-2xl">
            <ShieldCheck className="h-5 w-5 text-brand flex-shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-ink leading-relaxed">
              All volunteers are vetted to ensure alignment with IVTSF&apos;s
              mission and ethical standards. We serve a vulnerable population
              and take our responsibility to them seriously.
            </p>
          </div>
        </SectionReveal>
      </section>

      {/* Interest form */}
      <section className="bg-cloud">
        <div className="container py-20 md:py-24">
          <SectionReveal>
            <Card className="max-w-2xl mx-auto p-8 md:p-10 border-line">
              <CardContent className="p-0">
                <Badge variant="outline" className="mb-5">
                  Interest Form
                </Badge>
                <h2 className="font-serif text-2xl font-medium text-ink mb-3">
                  Tell us about yourself.
                </h2>
                <p className="text-muted mb-7 leading-relaxed">
                  We will follow up within a few business days. No prior
                  experience with VTS is required — only a genuine interest in
                  the work.
                </p>
                <form className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vol-name">Name</Label>
                      <Input id="vol-name" name="name" required placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vol-email">Email</Label>
                      <Input
                        id="vol-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vol-role">Role of interest</Label>
                    <select
                      id="vol-role"
                      name="role"
                      className="flex h-11 w-full rounded-xl border border-line bg-white px-4 py-2 text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
                    >
                      <option value="">Select a role...</option>
                      <option value="research">Research Assistant</option>
                      <option value="outreach">Community Outreach</option>
                      <option value="social">Social Media Support</option>
                      <option value="events">Event &amp; Advocacy Support</option>
                      <option value="other">Other / General Interest</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vol-msg">Tell us about you</Label>
                    <Textarea
                      id="vol-msg"
                      name="message"
                      rows={4}
                      placeholder="Share your background, skills, time availability, or anything you would like us to know."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Expression of Interest
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
