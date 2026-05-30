"use client"

import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/shared/lib"
import { Loader2 } from "lucide-react"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 outline-none select-none active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        amber:
          "bg-brand-amber text-white hover:bg-brand-amber-hover shadow-sm hover:shadow-md",
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        outline:
          "border border-border bg-surface text-text-secondary hover:bg-surface-secondary hover:text-text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "text-text-secondary hover:bg-surface-tertiary hover:text-text-primary",
        destructive:
          "bg-danger text-white hover:bg-danger/90 shadow-sm",
      },
      size: {
        default: "h-9 gap-1.5 px-4",
        sm: "h-8 gap-1 px-3 text-xs",
        lg: "h-11 gap-2 px-5",
        icon: "size-9",
        "icon-sm": "size-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

interface ButtonProps
  extends ButtonPrimitive.Props,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

function Button({
  className,
  variant = "default",
  size = "default",
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      data-slot="button"
      disabled={disabled || isLoading}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {isLoading && <Loader2 className="size-4 animate-spin shrink-0" />}
      {children}
    </ButtonPrimitive>
  )
}

export { Button, buttonVariants }
