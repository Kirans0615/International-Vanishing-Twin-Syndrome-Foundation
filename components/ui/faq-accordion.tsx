"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={className} role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            role="listitem"
            className="border-b border-line last:border-b-0"
          >
            <button
              type="button"
              className="w-full flex items-center justify-between py-5 text-left gap-4 group"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
            >
              <span className="font-serif text-lg font-medium text-ink leading-snug group-hover:text-brand transition-colors duration-200">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.22, ease: "easeInOut" }}
                className="flex-shrink-0 h-7 w-7 rounded-full flex items-center justify-center border border-brand/30 text-brand bg-brand-soft"
                aria-hidden
              >
                <Plus className="h-3.5 w-3.5" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-muted leading-relaxed text-[0.9375rem] max-w-2xl">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
