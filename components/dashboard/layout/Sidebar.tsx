"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ClipboardList,
  Building2,
  Users,
  BarChart3,
  Settings,
} from "lucide-react";

const links = [
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

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 border-r border-white/10 bg-zinc-950">
      <div className="p-8">
        <h1 className="text-2xl font-bold tracking-tight text-amber-400">
          Ludaris
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Backoffice
        </p>
      </div>

      <nav className="px-4 space-y-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                active
                  ? "bg-amber-500 text-black"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}