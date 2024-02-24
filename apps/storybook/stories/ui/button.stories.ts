import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@omnibytes/ui/button";

const meta = {
  title: "ui/button",
  component: Button,
  parameters: {
    layour: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const DefaultSize: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const SmallSize: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Button",
  },
};

export const LargeSize: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Button",
  },
};

export const IconSize: Story = {
  args: {
    variant: "default",
    size: "icon",
    children: "x",
  },
};
