import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary" | "ghost" | "danger";
};

export default function Button({
    className,
    variant = "primary",
    ...props
}: ButtonProps) {
    return (
        <button
            className={cn(
                "inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:pointer-events-none disabled:opacity-50",
                {
                    "bg-amber-500 text-black hover:bg-amber-400":
                        variant === "primary",

                    "bg-zinc-900 text-white hover:bg-zinc-800":
                        variant === "secondary",

                    "hover:bg-zinc-900 text-zinc-300":
                        variant === "ghost",

                    "bg-red-600 text-white hover:bg-red-500":
                        variant === "danger",
                },
                className
            )}
            {...props}
        />
    );
}