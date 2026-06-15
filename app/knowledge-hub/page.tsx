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
  Newspaper,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { staggerVariants, childVariants } from "@/components/section-reveal";

type Category = "research" | "providers" | "families" | "stories";

interface Resource {
  category: Category;
  icon: LucideIcon;
  badge: string;
  title: string;
  body: string;
  href: string;
}

const RESOURCES: Resource[] = [
  {
    category: "research",
    icon: Microscope,
    badge: "Research summary",
    title: "Incidence of Vanishing Twin Syndrome in First-Trimester Ultrasound",
    body: "A meta-analysis of recent imaging studies on early multiple-pregnancy loss.",
    href: "#",
  },
  {
    category: "research",
    icon: FileText,
    badge: "White paper",
    title: "Long-term Outcomes for the Surviving Twin",
    body: "A literature review on developmental, psychological, and obstetric outcomes.",
    href: "#",
  },
  {
    category: "providers",
    icon: Stethoscope,
    badge: "Clinical guidance",
    title: "Talking About VTS: A Communication Framework",
    body: "Practical, grief-informed scripts for first-trimester ultrasound conversations.",
    href: "#",
  },
  {
    category: "providers",
    icon: BookOpen,
    badge: "Provider toolkit",
    title: "Documentation and Follow-up Best Practices",
    body: "Templates and checklists for consistent care across the prenatal journey.",
    href: "#",
  },
  {
    category: "families",
    icon: HeartHandshake,
    badge: "For families",
    title: "Understanding Your Ultrasound",
    body: "A plain-language guide to what providers may or may not say about VTS.",
    href: "#",
  },
  {
    category: "families",
    icon: Newspaper,
    badge: "Self-care",
    title: "Grieving a Twin You Did Not Get to Meet",
    body: "Honoring a loss that often goes unrecognized — and finding support.",
    href: "#",
  },
  {
    category: "stories",
    icon: Users,
    badge: "Personal story",
    title: "Maya's Story: Learning Mid-Pregnancy",
    body: "What it meant to learn at 14 weeks that one of our twins had vanished.",
    href: "#",
  },
  {
    category: "stories",
    icon: Users,
    badge: "Personal story",
    title: "A Provider Reflects",
    body: "What I wish I had been taught about communicating VTS to families.",
    href: "#",
  },
];

const TABS: { value: Category | "all"; label: string }[] = [
  { value: "all", label: "All" },
  { value: "research", label: "Research" },
  { value: "providers", label: "For Providers" },
  { value: "families", label: "For Families" },
  { value: "stories", label: "Personal Stories" },
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
        <div className="container py-20 md:py-24">
          <div className="max-w-3xl">
            <Badge variant="soft" className="mb-5">
              Knowledge Hub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-brand-ink leading-tight mb-5">
              Evidence, guidance, and stories — gathered in one place.
            </h1>
            <p className="text-lg md:text-xl text-brand-muted leading-relaxed">
              A growing library for families, providers, and researchers. Filter
              by audience, or browse everything.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-16 md:py-20">
        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as Category | "all")}
        >
          <div className="flex justify-center mb-10 overflow-x-auto">
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
                  <motion.a
                    key={r.title}
                    href={r.href}
                    variants={childVariants}
                    className="group block"
                  >
                    <Card className="h-full p-6 hover:shadow-soft hover:-translate-y-1 transition-all">
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between mb-5">
                          <div className="inline-flex items-center justify-center h-11 w-11 rounded-xl bg-brand-soft text-brand-deep">
                            <Icon className="h-5 w-5" aria-hidden />
                          </div>
                          <ExternalLink
                            className="h-4 w-4 text-brand-muted opacity-0 group-hover:opacity-100 transition-opacity"
                            aria-hidden
                          />
                        </div>
                        <Badge variant="muted" className="mb-3">
                          {r.badge}
                        </Badge>
                        <h3 className="text-lg font-semibold text-brand-ink leading-snug mb-2 group-hover:text-brand-deep transition-colors">
                          {r.title}
                        </h3>
                        <p className="text-sm text-brand-muted leading-relaxed">
                          {r.body}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.a>
                );
              })}
            </motion.div>
          </TabsContent>
        </Tabs>
      </section>
    </>
  );
}
