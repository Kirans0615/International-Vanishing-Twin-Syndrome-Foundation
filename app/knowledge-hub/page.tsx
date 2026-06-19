"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Microscope,
  Stethoscope,
  HeartHandshake,
  BookOpen,
  ExternalLink,
  Users,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { SectionReveal, staggerVariants, childVariants } from "@/components/section-reveal";

type Category = "research" | "providers" | "families" | "language";

interface Resource {
  category: Category;
  icon: LucideIcon;
  badge: string;
  title: string;
  body: string;
}

const RESOURCES: Resource[] = [
  {
    category: "research",
    icon: Microscope,
    badge: "Research summary",
    title: "Incidence of VTS in First-Trimester Ultrasound",
    body: "A meta-analysis of imaging studies on early multiple-pregnancy loss across global populations.",
  },
  {
    category: "research",
    icon: FileText,
    badge: "Literature review",
    title: "Developmental Outcomes After VTS",
    body: "What the evidence shows — and doesn't show — about long-term outcomes for children born from pregnancies involving VTS.",
  },
  {
    category: "providers",
    icon: Stethoscope,
    badge: "Clinical guidance",
    title: "Talking About VTS: A Communication Framework",
    body: "Practical, grief-informed language for first-trimester ultrasound conversations and follow-up care.",
  },
  {
    category: "providers",
    icon: BookOpen,
    badge: "Provider toolkit",
    title: "Documentation and Follow-up Standards",
    body: "Templates and checklists for consistent, trauma-informed care across the prenatal journey.",
  },
  {
    category: "families",
    icon: HeartHandshake,
    badge: "For families",
    title: "Understanding Your Ultrasound Results",
    body: "A plain-language guide to what providers may or may not say about VTS, and what questions to ask.",
  },
  {
    category: "families",
    icon: Users,
    badge: "For families",
    title: "Grief Responses After VTS",
    body: "There is no single way to grieve. This resource honors the full range of experiences families report.",
  },
  {
    category: "language",
    icon: MessageSquare,
    badge: "Terminology guide",
    title: "Language That Honors Experience",
    body: "Why the words used to describe VTS matter — and what IVTSF recommends for clinical, media, and personal use.",
  },
  {
    category: "language",
    icon: FileText,
    badge: "Press resource",
    title: "Media Style Guide for Reporting on VTS",
    body: "Guidance for journalists and content creators on accurate, ethical, trauma-informed VTS coverage.",
  },
];

const TABS: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "research", label: "Research" },
  { value: "providers", label: "For Providers" },
  { value: "families", label: "For Families" },
  { value: "language", label: "Terminology & Language" },
];

export default function KnowledgeHubPage() {
  const [active, setActive] = React.useState<Category | "all">("all");
  const filtered =
    active === "all"
      ? RESOURCES
      : RESOURCES.filter((r) => r.category === active);

  return (
    <>
      <section className="gradient-soft">
        <div className="container py-20 md:py-28">
          <SectionReveal className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Knowledge Hub
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-ink leading-[1.05] mb-6 balance">
              Knowledge Hub
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed pretty">
              Evidence-based resources for families, providers, and researchers.
              Carefully curated, plainly written, freely shared.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as Category | "all")}
        >
          <div className="flex justify-center mb-12 overflow-x-auto">
            <TabsList>
              {TABS.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={active}>
            <motion.div
              key={active}
              variants={staggerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((r) => {
                const Icon = r.icon;
                return (
                  <motion.div key={r.title} variants={childVariants} className="group">
                    <Card
                      className="h-full p-6 hover:shadow-soft hover:-translate-y-1 transition-all border-line border-l-[3px]"
                      style={{
                        borderImage:
                          "linear-gradient(to bottom, #6B2DB5, #4DB8E8) 1",
                        borderLeftStyle: "solid",
                      }}
                    >
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between mb-5">
                          <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-soft text-brand-deep">
                            <Icon className="h-5 w-5" aria-hidden />
                          </div>
                          <ExternalLink
                            className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-hidden
                          />
                        </div>
                        <Badge variant="muted" className="mb-3">
                          {r.badge}
                        </Badge>
                        <h3 className="font-serif text-lg font-medium text-ink leading-snug mb-2 group-hover:text-brand-deep transition-colors">
                          {r.title}
                        </h3>
                        <p className="text-sm text-muted leading-relaxed">
                          {r.body}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </TabsContent>
        </Tabs>

        <SectionReveal>
          <div className="mt-16 rounded-2xl bg-cloud border border-line px-7 py-6 max-w-3xl mx-auto text-center">
            <p className="text-sm text-muted leading-relaxed">
              <strong className="text-ink">Our editorial standard:</strong> Our
              knowledge base is intentionally curated. We do not publish
              unverified, AI-generated, or commercially driven content.
            </p>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
