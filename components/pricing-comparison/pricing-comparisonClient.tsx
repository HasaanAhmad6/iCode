"use client";

import { useEffect, useState } from "react";

export function PricingComparisonClient() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="relative">
      {isLoading && (
        <div
          id="preloader"
          className="fixed inset-0 z-60 flex h-dvh w-full items-center justify-center bg-white"
        >
          <span className="from-background to-background absolute inset-0 animate-pulse bg-linear-to-br via-white" />
          <div className="border-t-gray/70 border-b-gray-light absolute top-1/2 left-1/2 grid size-10 -translate-1/2 animate-spin place-content-center rounded-full border-y-8 sm:size-14" />
        </div>
      )}
    </div>
  );
}
