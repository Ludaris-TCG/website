import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export default function Card({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                "rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-sm",
                className
            )}
            {...props}
        />
    );
}