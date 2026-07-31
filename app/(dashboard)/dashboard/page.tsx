import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Productos"
          value="0"
        />

        <StatCard
          title="Pedidos"
          value="0"
        />

        <StatCard
          title="Jugadores"
          value="0"
        />

        <StatCard
          title="Facturación"
          value="0 €"
        />
      </div>

      <div className="mt-10 rounded-2xl border border-dashed border-white/10 p-12 text-center text-zinc-500">
        Bienvenido al backoffice de Ludaris.
      </div>
    </>
  );
}