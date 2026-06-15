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
import { cn } from "@/lib/utils";

const PRESET_AMOUNTS = [10, 25, 50, 100] as const;

export default function DonatePage() {
  const [amount, setAmount] = React.useState<number | "custom">(50);
  const [custom, setCustom] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <>
      <section className="relative isolate overflow-hidden gradient-soft">
        <FlickeringGrid
          color="rgb(124, 58, 237)"
          maxOpacity={0.3}
          flickerChance={0.2}
        />
        <div className="container py-20 md:py-28 relative text-center">
          <Badge variant="soft" className="mb-5">
            Donate
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-brand-ink leading-[1.05] mb-5">
            Your Gift Saves Families.
          </h1>
          <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Every dollar funds research, family resources, and the medical
            guidance that closes the silence around Vanishing Twin Syndrome.
          </p>
        </div>
      </section>

      <section className="container py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] items-start max-w-6xl mx-auto">
          <Card className="p-8 md:p-10">
            <CardContent className="p-0">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand mb-5">
                    <Heart className="h-7 w-7" aria-hidden />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-ink mb-3">
                    Thank you for your gift.
                  </h2>
                  <p className="text-brand-muted max-w-md mx-auto">
                    A receipt is on its way. Your support keeps this work
                    possible.
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
                    <h2 className="text-xl font-semibold text-brand-ink mb-4">
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
                              "relative h-12 rounded-xl border font-semibold transition-colors",
                              active
                                ? "border-brand text-white"
                                : "border-brand-line text-brand-ink hover:border-brand/40"
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
                          "relative h-12 rounded-xl border font-semibold transition-colors",
                          amount === "custom"
                            ? "border-brand text-white"
                            : "border-brand-line text-brand-ink hover:border-brand/40"
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
                        <span className="relative">Custom</span>
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
                          placeholder="Enter amount"
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

                  <Button type="submit" size="lg" className="w-full">
                    <Heart className="h-4 w-4" aria-hidden />
                    Give{" "}
                    {amount === "custom"
                      ? custom
                        ? `$${custom}`
                        : "Custom"
                      : `$${amount}`}
                  </Button>

                  <p className="text-xs text-brand-muted leading-relaxed">
                    IVTSF is a registered 501(c)(3) nonprofit. Your contribution
                    is tax-deductible to the extent allowed by law. You will
                    receive a receipt by email.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          <div>
            <Badge variant="outline" className="mb-4">
              Where your gift goes
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-ink mb-4">
              Research, resources, and human connection.
            </h2>
            <p className="text-brand-muted leading-relaxed mb-6">
              Most of every dollar funds programs directly. We invest in studies
              that fill the evidence gap, in plain-language resources for
              families navigating loss, and in provider education that changes
              what happens in the ultrasound room.
            </p>
            <ul className="space-y-3 text-brand-ink">
              {[
                "$10 prints and ships a family resource booklet",
                "$50 sponsors a peer-support session for two families",
                "$100 funds an hour of provider education",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span
                    className="mt-1 h-2 w-2 rounded-full bg-brand flex-shrink-0"
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-3 text-sm text-brand-muted">
              <ShieldCheck
                className="h-5 w-5 text-brand flex-shrink-0"
                aria-hidden
              />
              <span>
                Secure processing. We do not sell or share donor information.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
