import Link from "next/link";

import { cn } from "@omnibytes/ui";
import { buttonVariants } from "@omnibytes/ui/button";

export default async function RootPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href="https://twitter.com/omnibytes"
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
              href="https://github.com/omnnibytes/pi-hub"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>

      <section id="open-source" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Proudly Open Source
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Omnibytes is open source and powered by open source software. <br />
            <br /> The code is available on{" "}
            <Link
              href="https://github.com/omnnibytes/pi-hub"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4"
            >
              GitHub
            </Link>
            .{" "}
          </p>
        </div>
      </section>
    </>
  );
}
