"use client";

import { useEffect } from "react";
import styles from "./LocalNav.module.css";

export interface LocalNavItem {
  label: string;
  href: string;
}

interface LocalNavProps {
  items: LocalNavItem[];
  homeHref?: string;
  homeLabel?: string;
}

export function LocalNav({ items, homeHref, homeLabel }: LocalNavProps) {
  useEffect(() => {
    document.documentElement.style.setProperty("--local-nav-height", "3rem");
    return () => {
      document.documentElement.style.setProperty("--local-nav-height", "0px");
    };
  }, []);

  return (
    <nav className={styles.localNav} aria-label="Navegación de sección">
      <div className={styles.inner}>
        {homeHref && homeLabel && (
          <a href={homeHref} className={styles.brand}>
            {homeLabel}
          </a>
        )}
        {items.map((item) => (
          <a key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
