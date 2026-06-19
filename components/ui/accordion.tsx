"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  value: string;
  trigger: React.ReactNode;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  type?: "single" | "multiple";
}

export function Accordion({ items, className, type = "single" }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>([]);

  const toggle = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    } else {
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    }
  };

  const isOpen = (value: string) => openItems.includes(value);

  return (
    <div className={cn("divide-y divide-line", className)}>
      {items.map((item) => (
        <div key={item.value} className="py-1">
          <button
            type="button"
            onClick={() => toggle(item.value)}
            aria-expanded={isOpen(item.value)}
            className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-ink hover:text-brand transition-colors"
          >
            <span className="flex-1">{item.trigger}</span>
            <motion.span
              animate={{ rotate: isOpen(item.value) ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 text-muted"
            >
              <ChevronDown className="h-4 w-4" aria-hidden />
            </motion.span>
          </button>
          <AnimatePresence initial={false}>
            {isOpen(item.value) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="pb-4 text-muted leading-relaxed">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
