import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { cn } from "@omnibytes/ui";
import { ThemeProvider } from "@omnibytes/ui/theme";
import { Toaster } from "@omnibytes/ui/toaster";

import { Footer } from "~/app/_components/footer";
import { Header } from "~/app/_components/header";

interface BodyProps {
  children: React.ReactNode;
}

export function Body(props: BodyProps) {
  return (
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
            <Header />

            <main className="min-h-screen md:p-24">{props.children}</main>

            <Footer />
          </div>
        </div>

        <Toaster />
      </ThemeProvider>

      <Analytics />
      <SpeedInsights />
    </body>
  );
}
