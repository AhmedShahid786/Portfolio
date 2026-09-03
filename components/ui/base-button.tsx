"use client";

import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-muted focus-visible:ring-3 focus-visible:ring-muted/50 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        outline:
          "border-control bg-control/30 shadow-xs hover:bg-control/50 hover:text-primary aria-expanded:bg-control/50 aria-expanded:text-primary",
      },
      size: {
        "icon-sm": "size-8 rounded-[min(var(--radius-lg),10px)]",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "icon-sm",
    },
  }
);

function Button({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
