"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FlickeringGrid } from "@/components/flickering-grid";
import { SectionReveal } from "@/components/section-reveal";
import { cn } from "@/lib/utils";

const PRESET_AMOUNTS = [10, 25, 50, 100] as const;

const IMPACT = [
  {
    amount: "$10",
    desc: "supports one family resource packet — delivered at no cost to the family",
  },
  {
    amount: "$25",
    desc: "supports a literature review contribution — keeping our research current",
  },
  {
    amount: "$50",
    desc: "supports guideline advocacy work — improving clinical communication globally",
  },
  {
    amount: "$100",
    desc: "sponsors a session of provider education — changing what happens in the exam room",
  },
];

export default function DonatePage() {
  const [amount, setAmount] = React.useState<number | "custom">(50);
  const [custom, setCustom] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-brand">
        <FlickeringGrid
          color="#FAF8F5"
          maxOpacity={0.06}
          squareSize={4}
          gridGap={6}
          flickerChance={0.1}
          className="absolute inset-0"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 70% at center, rgba(8,92,82,0.4) 0%, transparent 80%)",
          }}
          aria-hidden
        />
        <div className="container relative z-10 py-24 md:py-32 text-center max-w-3xl">
          <SectionReveal>
            <Badge
              variant="soft"
              className="mb-5 bg-white/15 text-white border-white/20"
            >
              Donate
            </Badge>
            <h1 className="font-serif text-display-2 font-medium text-white leading-[1.05] mb-5 balance">
              Your Support Matters.
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed pretty">
              Help us advance research, support families, and improve how VTS is
              communicated worldwide.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Donation form + impact */}
      <section className="container py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start max-w-6xl mx-auto">
          {/* Form */}
          <Card className="p-8 md:p-10 border-line">
            <CardContent className="p-0">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand mb-5">
                    <Heart className="h-7 w-7" aria-hidden />
                  </div>
                  <h2 className="font-serif text-2xl font-medium text-ink mb-3">
                    Thank you for your gift.
                  </h2>
                  <p className="text-muted max-w-md mx-auto leading-relaxed">
                    A receipt is on its way to your inbox. Your support keeps
                    this work possible.
                  </p>
                  <Button
                    variant="ghost"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Make another gift
                  </Button>
                </div>
              ) : (
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <div>
                    <h2 className="font-serif text-xl font-medium text-ink mb-4">
                      Choose your amount
                    </h2>
                    <div className="grid grid-cols-5 gap-2">
                      {PRESET_AMOUNTS.map((v) => {
                        const active = amount === v;
                        return (
                          <button
                            key={v}
                            type="button"
                            onClick={() => setAmount(v)}
                            className={cn(
                              "relative h-12 rounded-xl border font-semibold text-sm transition-colors",
                              active
                                ? "border-brand text-white"
                                : "border-line text-ink hover:border-brand/40 bg-white"
                            )}
                          >
                            {active && (
                              <motion.span
                                layoutId="donate-highlight"
                                className="absolute inset-0 rounded-xl bg-brand"
                                transition={{
                                  type: "spring",
                                  duration: 0.4,
                                  bounce: 0.25,
                                }}
                              />
                            )}
                            <span className="relative">${v}</span>
                          </button>
                        );
                      })}
                      <button
                        type="button"
                        onClick={() => setAmount("custom")}
                        className={cn(
                          "relative h-12 rounded-xl border font-semibold text-sm transition-colors",
                          amount === "custom"
                            ? "border-brand text-white"
                            : "border-line text-ink hover:border-brand/40 bg-white"
                        )}
                      >
                        {amount === "custom" && (
                          <motion.span
                            layoutId="donate-highlight"
                            className="absolute inset-0 rounded-xl bg-brand"
                            transition={{
                              type: "spring",
                              duration: 0.4,
                              bounce: 0.25,
                            }}
                          />
                        )}
                        <span className="relative">Other</span>
                      </button>
                    </div>
                    {amount === "custom" && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-3"
                      >
                        <Input
                          type="number"
                          min="1"
                          placeholder="Enter amount (USD)"
                          value={custom}
                          onChange={(e) => setCustom(e.target.value)}
                          required
                          aria-label="Custom donation amount"
                        />
                      </motion.div>
                    )}
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="donor-name">Full name</Label>
                      <Input
                        id="donor-name"
                        name="name"
                        required
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donor-email">Email</Label>
                      <Input
                        id="donor-email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="donor-msg">
                      Optional message{" "}
                      <span className="text-muted font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="donor-msg"
                      name="message"
                      placeholder="Dedications, notes, or anything you would like us to know."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Heart className="h-4 w-4" aria-hidden />
                    Give{" "}
                    {amount === "custom"
                      ? custom
                        ? `$${custom}`
                        : "Custom Amount"
                      : `$${amount}`}
                  </Button>

                  <p className="text-xs text-muted leading-relaxed">
                    IVTSF is a registered 501(c)(3) nonprofit. Donations may be
                    tax-deductible to the extent allowed by law. You will
                    receive a receipt by email.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Impact */}
          <SectionReveal index={1}>
            <Badge variant="outline" className="mb-5">
              Where your gift goes
            </Badge>
            <h2 className="font-serif text-2xl font-medium text-ink mb-5 balance">
              Every dollar has a purpose.
            </h2>
            <p className="text-muted leading-relaxed mb-7 pretty">
              Most of every dollar funds programs directly. We invest in
              studies that fill the evidence gap, in plain-language resources
              for families navigating loss, and in provider education that
              changes what happens in the clinical encounter.
            </p>
            <ul className="space-y-4 mb-8">
              {IMPACT.map((item) => (
                <li key={item.amount} className="flex items-start gap-4">
                  <span className="flex-shrink-0 font-serif font-semibold text-brand text-lg w-12">
                    {item.amount}
                  </span>
                  <span className="text-muted leading-relaxed text-sm">
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3 text-sm text-muted">
              <ShieldCheck
                className="h-5 w-5 text-brand flex-shrink-0"
                aria-hidden
              />
              <span>
                Secure. We do not sell or share donor information.
              </span>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
