import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Building2,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

export const dashboardNavigation = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/dashboard/productos",
    label: "Productos",
    icon: Package,
  },
  {
    href: "/dashboard/editoriales",
    label: "Editoriales",
    icon: Building2,
  },
  {
    href: "/dashboard/pedidos",
    label: "Pedidos",
    icon: ClipboardList,
  },
  {
    href: "/dashboard/jugadores",
    label: "Jugadores",
    icon: Users,
  },
  {
    href: "/dashboard/analiticas",
    label: "Analíticas",
    icon: BarChart3,
  },
  {
    href: "/dashboard/configuracion",
    label: "Configuración",
    icon: Settings,
  },
];