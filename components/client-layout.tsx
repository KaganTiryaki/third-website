"use client";

import { ScrollProgress } from "@/components/scroll-progress";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}
