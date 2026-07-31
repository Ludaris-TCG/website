import type { Column } from "@/components/dashboard/DataTable/types";
import type { Product } from "@/types";

export const columns: Column<Product>[] = [
    {
        key: "name",
        title: "Producto",
    },
    {
        key: "price",
        title: "Precio",
        render: (value) => `${Number(value).toFixed(2)} €`,
    },
    {
        key: "stock",
        title: "Stock",
    },
];