import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "..";

const blockQuoteVariants = cva("mt-6 border-l-2 pl-6 italic", {
  variants: {},
  defaultVariants: {},
});

export interface BlockQuoteProps
  extends VariantProps<typeof blockQuoteVariants> {
  children: string;
  className?: string;
}

function BlockQuote(props: BlockQuoteProps) {
  const { children, className, ...rest } = props;

  return (
    <blockquote {...rest} className={cn(blockQuoteVariants({ className }))}>
      {children}
    </blockquote>
  );
}

BlockQuote.displayName = "BlockQuote";

export { BlockQuote, blockQuoteVariants };
