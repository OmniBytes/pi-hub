import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "..";

const listVariants = cva("my-6 ml-6 list-disc [&>li]:mt-2", {
  variants: {},
  defaultVariants: {},
});

export interface ListProps extends VariantProps<typeof listVariants> {
  children: string;
  className?: string;
}

function UnorderedList(props: ListProps) {
  const { children, className, ...rest } = props;

  return (
    <ul {...rest} className={cn(listVariants({ className }))}>
      {children}
    </ul>
  );
}

UnorderedList.displayName = "UnorderedList";

function OrderedList(props: ListProps) {
  const { children, className, ...rest } = props;

  return (
    <ol {...rest} className={cn(listVariants({ className }))}>
      {children}
    </ol>
  );
}

OrderedList.displayName = "OrderedList";

export { OrderedList, UnorderedList, listVariants };
