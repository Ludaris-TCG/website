type Props = {
  title: string;
  value: string;
};

export default function StatCard({
  title,
  value,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6">
      <p className="text-sm text-zinc-500">
        {title}
      </p>

      <h3 className="mt-4 text-4xl font-bold">
        {value}
      </h3>
    </div>
  );
}