import Card from "@/components/ui/Card";

export default function ActivityCard() {
    return (
        <Card className="h-full">
            <h2 className="text-lg font-semibold">
                Actividad reciente
            </h2>

            <div className="mt-10 flex h-48 items-center justify-center rounded-xl border border-dashed border-zinc-800">
                <p className="text-zinc-500">
                    Todavía no hay actividad registrada.
                </p>
            </div>
        </Card>
    );
}