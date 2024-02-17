import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "..";

const titleVariants = cva("scroll-m-20", {
  variants: {
    order: {
      one: "text-4xl font-extrabold tracking-tight lg:text-5xl",
      two: "border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      three: "text-2xl font-semibold tracking-tight",
      four: "text-xl font-semibold tracking-tight",
      five: "text-lg font-semibold tracking-tight",
      six: "text-md font-semibold tracking-tight",
    },
  },
  defaultVariants: {
    order: "one",
  },
});

export interface TitleProps extends VariantProps<typeof titleVariants> {
  children: string;
  className?: string;
}

function Title(props: TitleProps) {
  const { children, className, order, ...rest } = props;
  const name = cn(titleVariants({ order, className }));

  switch (order) {
    case "two":
      return (
        <h2 {...rest} className={name}>
          {children}
        </h2>
      );

    case "three":
      return (
        <h3 {...rest} className={name}>
          {children}
        </h3>
      );

    case "four":
      return (
        <h4 {...rest} className={name}>
          {children}
        </h4>
      );

    case "five":
      return (
        <h5 {...rest} className={name}>
          {children}
        </h5>
      );

    case "six":
      return (
        <h6 {...rest} className={name}>
          {children}
        </h6>
      );

    default:
      return (
        <h1 {...rest} className={name}>
          {children}
        </h1>
      );
  }
}

Title.displayName = "Title";

export { Title, titleVariants };
