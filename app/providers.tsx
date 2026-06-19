"use client";

import * as React from "react";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { CustomCursor } from "@/components/ui/custom-cursor";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      {children}
    </>
  );
}
