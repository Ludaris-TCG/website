import DataTable from "@/components/dashboard/DataTable/DataTable";

export default function ProductosPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Productos
      </h1>

      <DataTable
        columns={columns}
        data={[]}
        emptyTitle="Productos"
      />
    </div>
  );
}