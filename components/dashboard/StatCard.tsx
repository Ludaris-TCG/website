import Card from "@/components/ui/Card";

type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <Card>
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-4 text-4xl font-bold">
        {value}
      </h3>
    </Card>
  );
}