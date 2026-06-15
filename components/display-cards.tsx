"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface DisplayCardItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  accent?: string;
}

interface DisplayCardsProps {
  cards: DisplayCardItem[];
  className?: string;
}

export function DisplayCards({ cards, className }: DisplayCardsProps) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-3 perspective-[1000px]",
        className
      )}
    >
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 24, rotateY: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
          whileHover={{
            y: -8,
            rotateY: 4,
            rotateX: -4,
            transition: { duration: 0.25 },
          }}
          className="group relative rounded-2xl border border-brand-line bg-white p-7 shadow-card hover:shadow-soft transition-shadow"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className={cn(
              "inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 transition-transform group-hover:scale-110",
              card.accent ?? "bg-brand-soft text-brand-deep"
            )}
          >
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold text-brand-ink mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-brand-muted leading-relaxed">
            {card.description}
          </p>
          <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-brand to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      ))}
    </div>
  );
}
