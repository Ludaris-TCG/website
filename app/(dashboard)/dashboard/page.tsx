import {
  Building2,
  Package,
  ShoppingCart,
} from "lucide-react";

import PageHeader from "@/components/ui/PageHeader";

import StatCard from "@/components/dashboard/StatCard";
import ActivityCard from "@/components/dashboard/ActivityCard";
import QuickAction from "@/components/dashboard/QuickAction";

export default function DashboardPage() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Dashboard"
        description="Resumen general de Ludaris."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Productos" value="0" />
        <StatCard title="Pedidos" value="0" />
        <StatCard title="Jugadores" value="0" />
        <StatCard title="Ventas" value="0 €" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <ActivityCard />

        <div className="space-y-4">

          <QuickAction
            href="/dashboard/productos"
            title="Nuevo producto"
            description="Añade un nuevo producto al catálogo."
            icon={Package}
          />

          <QuickAction
            href="/dashboard/editoriales"
            title="Nueva editorial"
            description="Registra una nueva editorial."
            icon={Building2}
          />

          <QuickAction
            href="/dashboard/pedidos"
            title="Ver pedidos"
            description="Consulta los pedidos pendientes."
            icon={ShoppingCart}
          />

        </div>

      </div>

    </div>
  );
}