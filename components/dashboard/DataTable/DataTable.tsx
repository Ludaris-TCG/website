import { Column } from "./types";
import DataTableEmpty from "./DataTableEmpty";

type Props<T> = {
    columns: Column<T>[];
    data: T[];
    emptyTitle: string;
};

export default function DataTable<T extends object>({
    columns,
    data,
    emptyTitle,
}: Props<T>) {
    if (data.length === 0) {
        return (
            <DataTableEmpty
                title={emptyTitle}
            />
        );
    }

    return (
        <div className="overflow-hidden rounded-2xl border border-zinc-800">

            <table className="w-full">

                <thead className="bg-zinc-950">

                    <tr>

                        {columns.map((column) => (
                            <th
                                key={String(column.key)}
                                className="px-6 py-4 text-left text-sm font-medium text-zinc-400"
                            >
                                {column.title}
                            </th>
                        ))}

                    </tr>

                </thead>

                <tbody>

                    {data.map((row, index) => (

                        <tr
                            key={index}
                            className="border-t border-zinc-900 hover:bg-zinc-950"
                        >

                            {columns.map((column) => (

                                <td
                                    key={String(column.key)}
                                    className="px-6 py-5"
                                >

                                    {column.render
                                        ? column.render(row[column.key], row)
                                        : String(row[column.key])}

                                </td>

                            ))}

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}