export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-white">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-amber-400">
          Próximamente
        </p>

        <h1 className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl">
          LUDARIS
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
          Especialistas en <span className="text-white">Trading Card Games</span>.
        </p>

        <div className="mt-10 flex items-center justify-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          <span>Star Wars Unlimited</span>
          <span className="text-amber-400">✦</span>
          <span>Lorcana</span>
        </div>

        <div className="mx-auto mt-16 h-px w-24 bg-zinc-800" />

        <p className="mt-8 text-lg text-zinc-400">
          Por jugadores. Para jugadores.
        </p>

        <footer className="mt-20 text-sm text-zinc-600">
          © {new Date().getFullYear()} Ludaris
        </footer>
      </section>
    </main>
  );
}
