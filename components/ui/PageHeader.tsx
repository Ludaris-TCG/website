import { ReactNode } from "react";

type PageHeaderProps = {
    title: string;
    children?: ReactNode;
};

export default function PageHeader({
    title,
    children,
}: PageHeaderProps) {
    return (
        <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight">
                {title}
            </h1>

            {children && (
                <div className="flex items-center gap-3">
                    {children}
                </div>
            )}
        </div>
    );
}