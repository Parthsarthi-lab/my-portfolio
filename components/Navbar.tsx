"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/lib/site";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto flex w-[min(1140px,calc(100%-2rem))] items-center justify-between py-4">
        <Link href="/" className="min-w-0">
          <p className="truncate text-xl font-medium text-[color:var(--foreground)]">
            {siteConfig.name}
          </p>
        </Link>

        <nav className="flex flex-wrap items-center gap-5 text-sm text-[color:var(--muted)]">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "text-[color:var(--foreground)]" : "hover:text-[color:var(--foreground)]"}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
