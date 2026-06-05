"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useRef, useEffect, useCallback } from "react";
import { navGroups } from "@/data/navigation.data";
import { cn } from "@/lib/cn";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);
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

  // Close dropdown on outside click
  useEffect(() => {
    if (!openGroupId) return;
    const handler = (e: MouseEvent) => {
      if (!navRef.current?.contains(e.target as Node)) {
        setOpenGroupId(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openGroupId]);

  // First click → open dropdown · Second click → navigate to path
  const handleGroupClick = useCallback(
    (groupId: string, groupPath: string) => {
      if (openGroupId === groupId) {
        router.push(groupPath);
        setOpenGroupId(null);
      } else {
        setOpenGroupId(groupId);
      }
    },
    [openGroupId, router]
  );

  const close = () => {
    setMobileOpen(false);
    setOpenGroupId(null);
  };

  return (
    <nav
      ref={navRef}
      className={cn(styles.nav, !visible && styles.navHidden)}
      aria-label="Navegación principal"
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={close}>
          <span className={styles.brandBrace} aria-hidden="true">{"{"}</span>
          {" Carlos Martínez "}
          <span className={styles.brandBrace} aria-hidden="true">{"}"}</span>
        </Link>

        {/* ── Desktop ───────────────────────────────────────────── */}
        <div className={styles.desktopNav}>
          {navGroups.map((group) => {
            const isOpen = openGroupId === group.id;
            const isActive =
              group.path === "/"
                ? pathname === "/"
                : pathname.startsWith(group.path);
            return (
              <div key={group.id} className={styles.groupWrapper}>
                <button
                  className={cn(
                    styles.link,
                    (isOpen || isActive) && styles.linkActive
                  )}
                  onClick={() => handleGroupClick(group.id, group.path)}
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  title={
                    isOpen
                      ? `Ir a ${group.label}`
                      : `${group.label} — click de nuevo para ir a la sección`
                  }
                >
                  {group.label}
                  <span
                    className={cn(styles.chevron, isOpen && styles.chevronOpen)}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className={styles.dropdown} role="menu">
                    {group.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownItem}
                        role="menuitem"
                        onClick={close}
                      >
                        {item.label}
                        {item.core && (
                          <span className={styles.dropdownItemCore}>core</span>
                        )}
                      </Link>
                    ))}
                    <div className={styles.dropdownDivider} aria-hidden="true" />
                    <Link
                      href={group.path}
                      className={styles.dropdownPathLink}
                      role="menuitem"
                      onClick={close}
                    >
                      Ver {group.label} →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
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
            <div key={group.id} className={styles.mobileGroup}>
              <Link
                href={group.path}
                className={styles.mobileSectionLink}
                onClick={close}
              >
                {group.label}
              </Link>
              {group.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(styles.mobileLink, styles.mobileSub)}
                  onClick={close}
                >
                  {item.label}
                  {item.core && (
                    <span className={styles.dropdownItemCore}>core</span>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
