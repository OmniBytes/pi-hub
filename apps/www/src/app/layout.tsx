import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@omnibytes/ui";
import { ThemeProvider } from "@omnibytes/ui/theme";
import { Toaster } from "@omnibytes/ui/toaster";

import { env } from "~/env";
import styles from "./page.module.css";

import "~/app/globals.css";

import { ThemeToggle } from "./_components/theme-toggle";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://omnibytes.io"
      : "http://localhost:3000",
  ),
  title: "Omnibytes",
  description: "",
  openGraph: {
    title: "Omnibytes",
    description: "",
    url: "https://omnibytes.io",
    siteName: "Omnibytes",
  },
  twitter: {
    card: "summary_large_image",
    site: "@omnibytes",
    creator: "@funkstyr",
  },
  applicationName: "Omnibytes",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  // userScalable: false,

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="manifest" href="/manifest.json" />

      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-white text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50">
            <div className="mx-auto max-w-2xl px-4 py-10">
              <header className="flex content-center justify-between pb-10">
                <ThemeToggle />

                <div className="flex items-center justify-between">
                  <nav className="ml-auto space-x-6 text-sm font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/about">About</Link>
                  </nav>
                </div>
              </header>

              <main className={styles.main}>{props.children}</main>

              <footer>
                <div className={styles.grid}>
                  <Link
                    href="https://hub.omnibytes.io"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Hub <span>-&gt;</span>
                    </h2>
                    <p>Hub like app for raspberry-pi</p>
                  </Link>

                  <Link
                    href="/blog"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>
                      Blog <span>-&gt;</span>
                    </h2>
                    <p>Posts about this journey</p>
                  </Link>

                  <Link
                    href="/about"
                    className={styles.card}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h2>
                      About <span>-&gt;</span>
                    </h2>
                    <p>Learn more about the journey</p>
                  </Link>
                </div>
              </footer>
            </div>
          </div>

          <Toaster />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
