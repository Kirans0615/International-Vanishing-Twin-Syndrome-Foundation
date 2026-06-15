import {
  Microscope,
  Megaphone,
  MessageSquare,
  Calendar,
  ArrowRight,
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
    body: "Support literature reviews, data synthesis, and resource translation. Remote, ~5 hours/month. Background in life sciences or health helpful.",
  },
  {
    icon: Megaphone,
    title: "Community Outreach",
    body: "Help build relationships with hospitals, support groups, and partner organizations. People-skills and patience welcome.",
  },
  {
    icon: MessageSquare,
    title: "Social Media",
    body: "Shape our voice across platforms. Plan content, share family voices, and lift research findings into accessible posts.",
  },
  {
    icon: Calendar,
    title: "Event Support",
    body: "Help organize awareness events, fundraisers, and parent meetups — both virtual and in-person.",
  },
];

export default function VolunteerPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-24">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Volunteer
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-5">
              Join Our Mission.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              IVTSF is built by people who care — clinicians, parents,
              researchers, designers, and organizers. Whatever you bring, there
              is a place for it here.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="outline" className="mb-4">
            Open Roles
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-ink">
            Where you can plug in.
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {ROLES.map((role, i) => {
            const Icon = role.icon;
            return (
              <SectionReveal key={role.title} index={i}>
                <Card className="h-full p-7 hover:shadow-soft transition-shadow">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-brand-soft text-brand-deep mb-5">
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <h3 className="text-xl font-semibold text-brand-ink mb-3">
                      {role.title}
                    </h3>
                    <p className="text-brand-muted leading-relaxed flex-1">
                      {role.body}
                    </p>
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
      </section>

      <section className="bg-brand-paper py-20 md:py-24">
        <div className="container">
          <SectionReveal>
            <Card className="max-w-2xl mx-auto p-8 md:p-10">
              <CardContent className="p-0">
                <Badge variant="outline" className="mb-4">
                  Interest Form
                </Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-3">
                  Tell us a little about you.
                </h2>
                <p className="text-brand-muted mb-7">
                  We will follow up within a few business days.
                </p>
                <form className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vol-name">Name</Label>
                      <Input id="vol-name" name="name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vol-email">Email</Label>
                      <Input
                        id="vol-email"
                        name="email"
                        type="email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vol-role">Role of interest</Label>
                    <Input
                      id="vol-role"
                      name="role"
                      placeholder="Research Assistant, Outreach, …"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vol-msg">Tell us about you</Label>
                    <Textarea
                      id="vol-msg"
                      name="message"
                      rows={4}
                      placeholder="Share your skills, time availability, or anything you would like us to know."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Interest
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
