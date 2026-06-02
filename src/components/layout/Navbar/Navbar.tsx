"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navPages } from "@/data/navigation.data";
import { cn } from "@/lib/cn";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${styles.navbar} navbar navbar-expand-lg fixed-top`}>
      <div className="container">
        <Link className="navbar-brand" href="/" style={{ fontWeight: 800, letterSpacing: "-0.04em" }}>
          Carlos Martínez
        </Link>

        <button
          className="navbar-toggler border-0"
          type="button"
          aria-label="Abrir navegación"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={cn("collapse navbar-collapse", open && "show")}>
          <ul className="navbar-nav ms-auto gap-lg-3">
            <li className="nav-item">
              <Link
                className={cn("nav-link", pathname === "/" && "active")}
                href="/"
                style={{ color: "var(--muted)", fontWeight: 500 }}
                onClick={() => setOpen(false)}
              >
                Inicio
              </Link>
            </li>

            <li className="nav-item dropdown">
              <button
                className={cn(
                  "nav-link dropdown-toggle",
                  styles.dropdownToggle,
                  navPages.some((p) => p.href !== "/" && pathname.startsWith(p.href)) && "active"
                )}
                type="button"
                aria-expanded="false"
                style={{ color: "var(--muted)", fontWeight: 500, background: "none", border: 0 }}
              >
                Explorar
              </button>
              <ul className={cn("dropdown-menu dropdown-menu-dark dropdown-menu-end", styles.dropdownMenu)}>
                {navPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      className={cn(
                        "dropdown-item",
                        pathname === page.href && "active"
                      )}
                      href={page.href}
                      onClick={() => setOpen(false)}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
