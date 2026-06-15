"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08 + 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Contact
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-5">
              We would love to hear from you.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              Whether you are a family with questions, a clinician seeking
              resources, or a researcher looking to collaborate — write to us.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-semibold text-brand-ink mb-5">
              Reach out directly
            </h2>
            <ul className="space-y-5 mb-10">
              <li className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-soft text-brand-deep flex-shrink-0">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">
                    Email
                  </div>
                  <a
                    href="mailto:contact@vanishingtwinsyndrome.org"
                    className="text-brand-ink hover:text-brand transition-colors font-medium"
                  >
                    contact@vanishingtwinsyndrome.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-soft text-brand-deep flex-shrink-0">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-muted mb-1">
                    Location
                  </div>
                  <div className="text-brand-ink font-medium">
                    United States — fully remote
                  </div>
                </div>
              </li>
            </ul>

            <div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-brand-line bg-gradient-to-br from-brand-soft via-white to-violet-50"
              aria-hidden
            >
              <svg
                viewBox="0 0 400 300"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  <radialGradient id="dot" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(109,40,217,0.5)" />
                    <stop offset="100%" stopColor="rgba(109,40,217,0)" />
                  </radialGradient>
                </defs>
                <g fill="none" stroke="rgba(109,40,217,0.18)" strokeWidth="1">
                  <path d="M0,80 Q120,40 200,90 T400,80" />
                  <path d="M0,140 Q140,110 220,150 T400,140" />
                  <path d="M0,210 Q120,180 200,220 T400,210" />
                </g>
                <circle cx="200" cy="150" r="60" fill="url(#dot)" />
                <circle cx="200" cy="150" r="8" fill="#6D28D9" />
              </svg>
              <div className="absolute bottom-4 left-4 right-4 text-xs text-brand-muted bg-white/80 backdrop-blur-sm rounded-lg px-3 py-2">
                A growing, US-based community.
              </div>
            </div>
          </div>

          <Card className="p-8 md:p-10">
            <CardContent className="p-0">
              <form className="space-y-5">
                {[
                  { id: "c-name", label: "Name", type: "text", required: true },
                  {
                    id: "c-email",
                    label: "Email",
                    type: "email",
                    required: true,
                  },
                  { id: "c-subject", label: "Subject", type: "text" },
                ].map((field, i) => (
                  <motion.div
                    key={field.id}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                    variants={fieldVariants}
                    className="space-y-2"
                  >
                    <Label htmlFor={field.id}>{field.label}</Label>
                    <Input
                      id={field.id}
                      type={field.type}
                      required={field.required}
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
                  <Label htmlFor="c-msg">Message</Label>
                  <Textarea id="c-msg" rows={5} required />
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
