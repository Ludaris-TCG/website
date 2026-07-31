import Card from "@/components/ui/Card";

type Props = {
    title: string;
};

export default function DataTableEmpty({
    title,
}: Props) {
    return (
        <Card className="py-16 text-center">

            <h3 className="text-lg font-semibold">
                Nada por aquí
            </h3>

            <p className="mt-2 text-zinc-500">
                No hay {title.toLowerCase()} todavía.
            </p>

        </Card>
    );
}