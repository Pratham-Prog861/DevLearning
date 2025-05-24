import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: "default" | "sm" | "lg";
  variant?: "default" | "outline" | "ghost";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50",
          size === "default" && "h-9 px-4 py-2",
          size === "sm" && "h-8 px-3 text-xs",
          size === "lg" && "h-10 px-8",
          variant === "default" && "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90",
          variant === "outline" && "border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900",
          variant === "ghost" && "hover:bg-neutral-100 hover:text-neutral-900",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };