import { ReactNode } from "react";

interface BadgeProps {
    children: ReactNode;
    variant?: "solid" | "subtle" | "outline";
    className?: string;
}

export function Badge({ children, variant = "subtle", className = "" }: BadgeProps) {
    let variantStyles = "";

    switch (variant) {
        case "solid":
            variantStyles = "bg-neutral-800 text-neutral-300 border border-neutral-700/50 shadow-sm";
            break;
        case "subtle":
            variantStyles = "bg-emerald-400/10 text-emerald-400";
            break;
        case "outline":
            variantStyles = "border border-neutral-700 text-neutral-400";
            break;
    }

    return (
        <span className={`px-3 py-1.5 text-xs md:text-sm font-medium rounded-md ${variantStyles} ${className}`}>
            {children}
        </span>
    );
}
