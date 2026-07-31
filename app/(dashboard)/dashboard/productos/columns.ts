import { Column } from "@/components/dashboard/DataTable/types";
import type { Product } from "@/types/product";

const columns = [
    {
        key: "name",
        title: "Nombre",
    },
    {
        key: "price",
        title: "Precio",
    },
] satisfies Column<Product>[];