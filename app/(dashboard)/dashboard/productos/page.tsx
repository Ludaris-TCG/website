import Button from "@/components/ui/Button";
import PageHeader from "@/components/ui/PageHeader";

import DataTable from "@/components/dashboard/DataTable/DataTable";

import { products } from "./mock";
import { columns } from "./columns";

export default function ProductosPage() {
  return (
    <>
      <PageHeader title="Productos">
        <Button>
          Nuevo producto
        </Button>
      </PageHeader>

      <DataTable
        columns={columns}
        data={products}
        emptyTitle="Productos"
      />
    </>
  );
}