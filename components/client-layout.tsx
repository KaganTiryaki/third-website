"use client";

import { WaterWasteCounter } from "@/components/water-waste-counter";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WaterWasteCounter />
      {children}
    </>
  );
}
