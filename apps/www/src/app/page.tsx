import Link from "next/link";

import { cn } from "@omnibytes/ui";
import { buttonVariants } from "@omnibytes/ui/button";

const GITHUB_URL = "https://github.com/omnibytes/pi-hub";
const TWITTER_URL = "https://twitter.com/funkstyr";

export default async function RootPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={TWITTER_URL}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Omnibytes
          </h1>

          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            So eclectic, must be electric ⚡
          </p>

          <div className="space-x-4">
            <Link
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
