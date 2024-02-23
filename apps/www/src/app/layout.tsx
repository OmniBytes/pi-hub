import type { Metadata, Viewport } from "next";

import { Body } from "~/app/_components/body";
import { env } from "~/env";

import "~/app/globals.css";

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

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout(props: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="manifest" href="/manifest.json" />

      <Body>{props.children}</Body>
    </html>
  );
}
