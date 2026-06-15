"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FlickeringGridProps extends React.HTMLAttributes<HTMLCanvasElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  maxOpacity?: number;
}

export function FlickeringGrid({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = "rgb(109, 40, 217)",
  maxOpacity = 0.3,
  className,
  ...props
}: FlickeringGridProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let cols = 0;
    let rows = 0;
    let opacities: Float32Array = new Float32Array(0);
    let raf = 0;
    let lastTime = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      cols = Math.floor(width / (squareSize + gridGap));
      rows = Math.floor(height / (squareSize + gridGap));
      opacities = new Float32Array(cols * rows);
      for (let i = 0; i < opacities.length; i++) {
        opacities[i] = Math.random() * maxOpacity;
      }
    };

    const draw = (time: number) => {
      const delta = (time - lastTime) / 1000;
      lastTime = time;
      ctx.clearRect(0, 0, width, height);
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = y * cols + x;
          if (Math.random() < flickerChance * delta) {
            opacities[i] = Math.random() * maxOpacity;
          }
          ctx.fillStyle = color;
          ctx.globalAlpha = opacities[i];
          ctx.fillRect(
            x * (squareSize + gridGap),
            y * (squareSize + gridGap),
            squareSize,
            squareSize
          );
        }
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };

    resize();
    raf = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(container);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [squareSize, gridGap, flickerChance, color, maxOpacity]);

  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 pointer-events-none", className)}
      aria-hidden
    >
      <canvas ref={canvasRef} className="mask-radial" {...props} />
    </div>
  );
}
