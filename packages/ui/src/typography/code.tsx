import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "..";

const codeVariants = cva(
  "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  {
    variants: {},
    defaultVariants: {},
  },
);

export interface CodeProps extends VariantProps<typeof codeVariants> {
  children: string;
  className?: string;
}

function Code(props: CodeProps) {
  const { children, className, ...rest } = props;

  return (
    <code {...rest} className={cn(codeVariants({ className }))}>
      {children}
    </code>
  );
}

Code.displayName = "Code";

export { Code, codeVariants };
