"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { navGroups } from "@/data/navigation.data";
import { cn } from "@/lib/cn";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const navRef = useRef<HTMLElement>(null);

  // Hide on any scroll, show only at top
  useEffect(() => {
    const sync = () => {
      const atTop = window.scrollY === 0;
      setVisible(atTop);
      document.documentElement.style.setProperty(
        "--header-offset",
        atTop ? "var(--header-height)" : "0px"
      );
    };
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => {
      window.removeEventListener("scroll", sync);
      document.documentElement.style.setProperty("--header-offset", "var(--header-height)");
    };
  }, []);

  const close = () => {
    setMobileOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={cn(styles.nav, !visible && styles.navHidden)}
      aria-label="Navegación principal"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close}>
          <span className={styles.brandTitle}>
            <span className={styles.brandBrace} aria-hidden="true">{"{"}</span>
            <span className={styles.brandName}>Carlos Martínez</span>
            <span className={styles.brandBrace} aria-hidden="true">{"}"}</span>
          </span>
          <span className={styles.brandSubtitle}>
            Software con criterio, aprendizaje e IA
          </span>
        </Link>

        {/* ── Desktop ───────────────────────────────────────────── */}
        <div className={styles.desktopNav}>
          {navGroups.map((group) => {
            const isActive = pathname.startsWith(group.path);
            return (
              <Link
                key={group.id}
                href={group.path}
                className={cn(styles.link, isActive && styles.linkActive)}
                onClick={close}
              >
                {group.label}
              </Link>
            );
          })}
          <Link
            href="/contacto/"
            className={styles.ctaLink}
            onClick={close}
          >
            Hablemos
          </Link>
        </div>

        {/* ── Hamburger ─────────────────────────────────────────── */}
        <button
          className={styles.hamburger}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir navegación"
          aria-expanded={mobileOpen}
        >
          <span className={cn(styles.hamburgerLine, mobileOpen && styles.open)} />
          <span className={cn(styles.hamburgerLine, mobileOpen && styles.open)} />
          <span className={cn(styles.hamburgerLine, mobileOpen && styles.open)} />
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────────── */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {navGroups.map((group) => (
            <Link
              key={group.id}
              href={group.path}
              className={styles.mobileSectionLink}
              onClick={close}
            >
              {group.label}
            </Link>
          ))}
          <Link
            href="/contacto/"
            className={styles.mobileCtaLink}
            onClick={close}
          >
            Hablemos
          </Link>
        </div>
      )}
    </nav>
  );
}
