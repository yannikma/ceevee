import { ReactNode } from "react";

interface SectionHeaderProps {
    number: string;
    title: string;
    children?: ReactNode;
}

export function SectionHeader({ number, title, children }: SectionHeaderProps) {
    return (
        <div className="mb-10">
            <h2 className="text-3xl font-bold text-white flex items-center">
                <span className="text-emerald-400 mr-3">{number}.</span> {title}
            </h2>
            {children && <div className="mt-4">{children}</div>}
        </div>
    );
}
