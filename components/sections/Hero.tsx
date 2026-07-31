import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
        Próximamente
      </span>

      <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
        Donde comienza tu
        <span className="block text-yellow-400">
          próxima colección.
        </span>
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        Ludaris será una tienda especializada en juegos de cartas
        coleccionables, accesorios y una comunidad pensada para
        jugadores y coleccionistas.
      </p>

      <div className="mt-10 flex gap-4">
        <Link href="/nuestra-historia">
          <button className="rounded-full bg-yellow-400 px-6 py-3 font-semibold text-black transition hover:scale-105">
            Descubrir Ludaris
          </button>
        </Link>

        <Link href="/contacto">
          <button className="rounded-full border border-white/15 px-6 py-3 transition hover:border-white">
            Contacto
          </button>
        </Link>
      </div>
    </section>
  );
}