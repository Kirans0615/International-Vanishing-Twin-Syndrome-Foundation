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
    <div className={cn("grid gap-6 md:grid-cols-3", className)}>
      {cards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.22 } }}
          whileTap={{ scale: 0.98 }}
          className="group relative rounded-2xl border border-line bg-white p-7 shadow-card hover:shadow-soft transition-shadow"
        >
          <div
            className={cn(
              "inline-flex items-center justify-center h-12 w-12 rounded-xl mb-5 transition-transform group-hover:scale-110",
              card.accent ?? "bg-brand-soft text-brand-deep"
            )}
          >
            {card.icon}
          </div>
          <h3 className="text-lg font-semibold text-ink mb-2 font-serif">
            {card.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">
            {card.description}
          </p>
          <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-brand to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.div>
      ))}
    </div>
  );
}
