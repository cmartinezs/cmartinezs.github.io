"use client";

import { useEffect } from "react";

interface PageWrapperProps {
  pageClass?: string;
  children: React.ReactNode;
}

export function PageWrapper({ pageClass, children }: PageWrapperProps) {
  useEffect(() => {
    if (!pageClass) return;
    document.body.classList.add(pageClass);
    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [pageClass]);

  return <>{children}</>;
}
