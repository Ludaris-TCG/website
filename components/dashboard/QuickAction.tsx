import Link from "next/link";
import { LucideIcon } from "lucide-react";
import Card from "@/components/ui/Card";

type Props = {
    href: string;
    title: string;
    description: string;
    icon: LucideIcon;
};

export default function QuickAction({
    href,
    title,
    description,
    icon: Icon,
}: Props) {
    return (
        <Link href={href}>
            <Card className="transition-all duration-200 hover:border-amber-500 hover:-translate-y-1">
                <Icon
                    className="text-amber-400"
                    size={28}
                />

                <h3 className="mt-5 text-lg font-semibold">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-zinc-500">
                    {description}
                </p>
            </Card>
        </Link>
    );
}