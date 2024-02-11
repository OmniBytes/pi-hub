import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@omnibytes/ui";
import { ThemeProvider, ThemeToggle } from "@omnibytes/ui/theme";
import { Toaster } from "@omnibytes/ui/toaster";

import { env } from "~/env";
import { TRPCReactProvider } from "~/trpc/react";

import "~/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === "production"
      ? "https://hub.omnibytes.io"
      : "http://localhost:3000",
  ),
  title: "Pi Hub",
  description: "Information Hub",
  openGraph: {
    title: "Pi Hub",
    description: "Simple wallpaper and stats display",
    url: "https://hub.omnibytes.io",
    siteName: "Pi Hub",
  },
  twitter: {
    card: "summary_large_image",
    site: "@omnibytes",
    creator: "@funkstyr",
  },
  applicationName: "Pi Hub",
};

export const viewport: Viewport = {
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
          <TRPCReactProvider>{props.children}</TRPCReactProvider>
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
