import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Button } from "react-day-picker";

import { cn } from "..";
import { buttonVariants } from "../button";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "leading-7 [&:not(:first-child)]:mt-6",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  children: string;
  className?: string;
}

function Text(props: TextProps) {
  const { children, className, variant, ...rest } = props;

  return (
    <p {...rest} className={cn(textVariants({ variant, className }))}>
      {children}
    </p>
  );
}

Text.displayName = "Text";

export { Text, textVariants };
