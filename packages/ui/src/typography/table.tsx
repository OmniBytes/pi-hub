import type { VariantProps } from "class-variance-authority";
import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "..";

// TODO: document why you would use this over data-table/table

const TypoTableVariants = cva("my-6 ml-6 list-disc [&>li]:mt-2", {
  variants: {},
  defaultVariants: {},
});

export interface TableProps extends VariantProps<typeof TypoTableVariants> {
  children: string;
  className?: string;
}

export function TypographyTable(props: TableProps) {
  const { className, children } = props;

  return (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn(TypoTableVariants({ className }))}>{children}</table>
    </div>
  );
}

const TypoTableHeadVariants = cva(
  "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
  {
    variants: {},
    defaultVariants: {},
  },
);

export interface TableHeadProps
  extends VariantProps<typeof TypoTableHeadVariants> {
  children: string;
  className?: string;
}

export function TypographyTableHead(props: TableHeadProps) {
  const { className, children } = props;

  return (
    <th className={cn(TypoTableHeadVariants({ className }))}>{children}</th>
  );
}

const TypoTableRowVariants = cva("m-0 border-t p-0 even:bg-muted", {
  variants: {},
  defaultVariants: {},
});

export interface TableRowProps
  extends VariantProps<typeof TypoTableRowVariants> {
  children: string;
  className?: string;
}

export function TypographyTableRow(props: TableRowProps) {
  const { className, children } = props;

  return (
    <tr className={cn(TypoTableRowVariants({ className }))}>{children}</tr>
  );
}

const TypoTableCellVariants = cva(
  "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
  {
    variants: {},
    defaultVariants: {},
  },
);

export interface TableCellProps
  extends VariantProps<typeof TypoTableCellVariants> {
  children: string;
  className?: string;
}

export function TypographyTableCell(props: TableCellProps) {
  const { className, children } = props;

  return (
    <td className={cn(TypoTableCellVariants({ className }))}>{children}</td>
  );
}
