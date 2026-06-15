"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  attribution: string;
  context: string;
}

const DEFAULT_TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "No one prepared us for what a vanishing twin really meant. Finding a community that understood the loss — that we weren't imagining the weight of it — changed everything.",
    attribution: "Sarah M.",
    context: "Mother of a surviving twin",
  },
  {
    quote:
      "As a maternal-fetal medicine specialist, I see how often families are left without language for this loss. IVTSF gives both providers and parents the resources to navigate it with care.",
    attribution: "Dr. Elena Ruiz",
    context: "Maternal-Fetal Medicine",
  },
  {
    quote:
      "We learned about our twin at the 12-week ultrasound. There was no warning, no guide, no follow-up. The Knowledge Hub gave us the answers our doctor couldn't.",
    attribution: "James & Priya K.",
    context: "Parents",
  },
];

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
  interval?: number;
}

export function TestimonialCarousel({
  testimonials = DEFAULT_TESTIMONIALS,
  interval = 6500,
}: TestimonialCarouselProps) {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, interval);
    return () => clearInterval(t);
  }, [interval, testimonials.length]);

  return (
    <div className="relative min-h-[280px] md:min-h-[220px]">
      <Quote
        className="absolute -top-2 left-1/2 -translate-x-1/2 h-10 w-10 text-brand/20"
        aria-hidden
      />
      <AnimatePresence mode="wait">
        <motion.figure
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center px-6 pt-10"
        >
          <blockquote className="text-lg md:text-xl text-brand-ink leading-relaxed">
            &ldquo;{testimonials[index].quote}&rdquo;
          </blockquote>
          <figcaption className="mt-6">
            <div className="font-semibold text-brand-deep">
              {testimonials[index].attribution}
            </div>
            <div className="text-sm text-brand-muted mt-1">
              {testimonials[index].context}
            </div>
          </figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        {testimonials.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-brand" : "w-2 bg-brand/30 hover:bg-brand/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
