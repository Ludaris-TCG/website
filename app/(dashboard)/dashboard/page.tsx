import StatCard from "@/components/dashboard/StatCard";
import PageHeader from "@/components/ui/PageHeader";

export default function DashboardPage() {
  return (
    <>
      <PageHeader title="Dashboard" />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Productos" value="0" />
        <StatCard title="Pedidos" value="0" />
        <StatCard title="Jugadores" value="0" />
        <StatCard title="Facturación" value="0 €" />
      </div>
    </>
  );
}