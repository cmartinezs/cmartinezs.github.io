"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navPages, pageAnchors } from "@/data/navigation.data";
import { cn } from "@/lib/cn";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [explorarOpen, setExplorarOpen] = useState(false);

  const sectionLinks = pageAnchors[pathname] ?? [];
  const close = () => { setMobileOpen(false); setExplorarOpen(false); };

  return (
    <nav className={cn(styles.nav, "fixed top-0 inset-x-0 z-50")}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close}>
          Carlos Martínez
        </Link>

        {/* Desktop nav */}
        <div className={styles.desktopNav}>
          {sectionLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}

          <div
            className={styles.explorarWrapper}
            onMouseLeave={() => setExplorarOpen(false)}
          >
            <button
              className={styles.link}
              onClick={() => setExplorarOpen(!explorarOpen)}
              aria-expanded={explorarOpen}
            >
              Explorar ▾
            </button>
            {explorarOpen && (
              <div className={styles.dropdown}>
                {navPages.map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={cn(
                      styles.dropdownItem,
                      pathname === page.href && styles.dropdownItemActive
                    )}
                    onClick={close}
                  >
                    {page.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Hamburger */}
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

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu}>
          {sectionLinks.length > 0 && (
            <>
              <span className={styles.mobileSectionLabel}>Secciones</span>
              {sectionLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.mobileLink} onClick={close}>
                  {link.label}
                </a>
              ))}
              <hr className={styles.mobileDivider} />
            </>
          )}
          <span className={styles.mobileSectionLabel}>Explorar</span>
          {navPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className={cn(
                styles.mobileLink,
                styles.mobileSub,
                pathname === page.href && styles.dropdownItemActive
              )}
              onClick={close}
            >
              {page.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
