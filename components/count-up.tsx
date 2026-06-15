"use client";

import * as React from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  duration = 1.6,
  suffix = "",
  prefix = "",
  className,
}: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  });
  const [display, setDisplay] = React.useState(0);

  React.useEffect(() => {
    if (inView) motionValue.set(end);
  }, [inView, end, motionValue]);

  React.useEffect(() => {
    const unsubscribe = spring.on("change", (v) =>
      setDisplay(Math.round(v))
    );
    return () => unsubscribe();
  }, [spring]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
