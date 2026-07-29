"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes } from "react";

interface ButtonBaseProps {
  variant?: "primary" | "secondary";
  size?: "default" | "lg" | "sm";
}

type ButtonAsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", ...props }, ref) => {
    const baseClasses =
      "inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-[2px] select-none whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-screed-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      primary:
        "bg-safety-amber text-ink-navy hover:brightness-110 hover:-translate-y-0.5 active:translate-y-0",
      secondary:
        "border-2 border-ink-navy text-ink-navy bg-transparent hover:bg-ink-navy hover:text-slab-white active:bg-ink-navy/90",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      default: "px-6 py-3 text-[15px]",
      lg: "px-8 py-4 text-base",
    };

    const classes = cn(baseClasses, variants[variant], sizes[size], className);

    if ("href" in props && props.href) {
      const { href, ...rest } = props as ButtonAsLink;
      return (
        <Link
          href={href}
          className={classes}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...rest}
        />
      );
    }

    return (
      <button
        className={classes}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as ButtonAsButton)}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
