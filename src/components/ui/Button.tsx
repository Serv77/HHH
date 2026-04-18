import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-[13px] font-bold uppercase tracking-[0.1em] transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-brand-green text-white hover:bg-brand-dark shadow-[0_10px_30px_rgba(18,66,44,0.15)] hover:shadow-[0_15px_40px_rgba(18,66,44,0.25)] hover:-translate-y-0.5",
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-sm hover:shadow-md",
        outline: "border border-brand-light-gray bg-white text-brand-dark hover:border-brand-dark hover:bg-brand-bg hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)]",
        secondary: "bg-white text-brand-dark shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 hover:text-brand-green",
        accent: "bg-brand-gold text-white hover:bg-[#b09265] shadow-[0_10px_30px_rgba(198,168,124,0.2)] hover:shadow-[0_15px_40px_rgba(198,168,124,0.3)] hover:-translate-y-0.5",
        ghost: "hover:bg-brand-light-gray/50 text-brand-dark",
        link: "text-brand-green underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6",
        lg: "h-14 px-10 text-[14px]",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
