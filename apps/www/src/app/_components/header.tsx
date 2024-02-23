import Link from "next/link";

import { ThemeToggle } from "~/app/_components/theme-toggle";

export function Header() {
  return (
    <header className="flex content-center justify-between pb-10">
      <ThemeToggle />

      <div className="flex items-center justify-between">
        <nav className="ml-auto space-x-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
        </nav>
      </div>
    </header>
  );
}
