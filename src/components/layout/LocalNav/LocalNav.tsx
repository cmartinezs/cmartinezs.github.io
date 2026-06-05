"use client";

import { useEffect } from "react";
import styles from "./LocalNav.module.css";

export interface LocalNavItem {
  label: string;
  href: string;
}

interface LocalNavProps {
  items: LocalNavItem[];
}

export function LocalNav({ items }: LocalNavProps) {
  useEffect(() => {
    document.documentElement.style.setProperty("--local-nav-height", "3rem");
    return () => {
      document.documentElement.style.setProperty("--local-nav-height", "0px");
    };
  }, []);

  return (
    <nav className={styles.localNav} aria-label="Navegación de sección">
      <div className={styles.inner}>
        {items.map((item) => (
          <a key={item.href} href={item.href} className={styles.link}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
