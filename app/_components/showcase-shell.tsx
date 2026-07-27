"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { componentPages } from "./showcase-pages";

export function ShowcaseShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="lab-shell">
      <nav className="site-nav" aria-label="Component pages">
        <Link className="site-mark" href="/">Mivama UI</Link>
        <div className="site-nav-links">
          {componentPages.map((page) => (
            <Link
              aria-current={pathname === page.href ? "page" : undefined}
              href={page.href}
              key={page.href}
            >
              {page.label}
            </Link>
          ))}
        </div>
      </nav>
      {children}
      <footer className="footer-note">
        <span>@mivama/ui · installed package exports</span>
        <span>Multi-page component and state reference.</span>
      </footer>
    </div>
  );
}
