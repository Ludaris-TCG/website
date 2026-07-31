export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 px-10">
      <div>
        <h2 className="text-xl font-semibold">
          Dashboard
        </h2>

        <p className="text-sm text-zinc-500">
          Bienvenido de nuevo.
        </p>
      </div>

      <div className="rounded-full bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
        Ludaris v0.1
      </div>
    </header>
  );
}