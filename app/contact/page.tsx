"use client";

import { motion } from "framer-motion";
import { Mail, Globe, Facebook, Instagram, Linkedin, Send, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SectionReveal } from "@/components/section-reveal";

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 + 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/vanishingtwinsyndromefoundation",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.instagram.com/vanishingtwinsyndrome",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://www.linkedin.com/company/ivtsf",
    label: "LinkedIn",
    Icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Contact
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-ink leading-[1.05] mb-6 balance">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              Whether you are a family with questions, a clinician seeking
              resources, or a researcher looking to collaborate — we would love
              to hear from you.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] max-w-6xl mx-auto">
          {/* Left — contact info */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-ink mb-6">
              Reach us directly
            </h2>
            <ul className="space-y-5 mb-8">
              <li className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-soft text-brand-deep flex-shrink-0">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:contact@vanishingtwinsyndrome.org"
                    className="text-ink hover:text-brand transition-colors font-medium"
                  >
                    contact@vanishingtwinsyndrome.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-soft text-brand-deep flex-shrink-0">
                  <Globe className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
                    Website
                  </div>
                  <a
                    href="https://www.vanishingtwinsyndrome.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-brand transition-colors font-medium"
                  >
                    www.vanishingtwinsyndrome.org
                  </a>
                </div>
              </li>
            </ul>

            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-3">
                Follow us
              </p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white border border-line text-muted hover:text-brand hover:border-brand/30 transition-colors"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                  </a>
                ))}
              </div>
            </div>

            {/* Crisis note */}
            <div className="rounded-xl border border-line bg-cloud px-5 py-5 flex gap-3">
              <AlertCircle
                className="h-5 w-5 text-rose flex-shrink-0 mt-0.5"
                aria-hidden
              />
              <p className="text-sm text-muted leading-relaxed">
                IVTSF does not provide crisis counseling. If you need immediate
                support, please contact a licensed mental health professional or
                crisis line in your region. We are happy to provide relevant
                referrals upon request.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <Card className="p-8 md:p-10 border-line">
            <CardContent className="p-0">
              <form className="space-y-5">
                {[
                  { id: "c-name", label: "Name", type: "text", required: true, placeholder: "Your name" },
                  {
                    id: "c-email",
                    label: "Email",
                    type: "email",
                    required: true,
                    placeholder: "you@email.com",
                  },
                  { id: "c-subject", label: "Subject", type: "text", required: false, placeholder: "What is this about?" },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fieldVariants}
                    className="space-y-2"
                  >
                    <Label htmlFor={field.id}>
                      {field.label}
                      {field.required && (
                        <span className="text-rose ml-1" aria-hidden>*</span>
                      )}
                    </Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      required={field.required}
                      placeholder={field.placeholder}
                    />
                  </motion.div>
                ))}
                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fieldVariants}
                  className="space-y-2"
                >
                  <Label htmlFor="c-msg">
                    Message <span className="text-rose" aria-hidden>*</span>
                  </Label>
                  <Textarea
                    id="c-msg"
                    rows={5}
                    required
                    placeholder="Tell us how we can help, or share what you are looking for."
                  />
                </motion.div>
                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={fieldVariants}
                >
                  <Button type="submit" size="lg" className="w-full">
                    <Send className="h-4 w-4" aria-hidden />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
