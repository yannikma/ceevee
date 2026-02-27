import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className = "" }: CardProps) {
    return (
        <div className={`bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:bg-neutral-800/80 transition-colors ${className}`}>
            {children}
        </div>
    );
}
