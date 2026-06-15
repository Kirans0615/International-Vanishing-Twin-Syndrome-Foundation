"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContainerScrollProps {
  titleComponent: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ContainerScroll({
  titleComponent,
  children,
  className,
}: ContainerScrollProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 0.4], [20, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.4],
    isMobile ? [0.85, 1] : [1.05, 1]
  );
  const translate = useTransform(scrollYProgress, [0, 0.4], [0, -60]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex items-center justify-center py-12 md:py-20",
        className
      )}
      style={{ perspective: "1200px" }}
    >
      <div className="relative w-full max-w-6xl mx-auto px-4">
        <motion.div style={{ translateY: translate }} className="text-center">
          {titleComponent}
        </motion.div>
        <motion.div
          style={{
            rotateX: rotate,
            scale,
            boxShadow:
              "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
          }}
          className="mt-10 mx-auto rounded-3xl border border-brand-line bg-white p-3 md:p-5"
        >
          <div className="h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-soft to-white">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
