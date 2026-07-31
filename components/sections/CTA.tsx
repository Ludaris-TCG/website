import Link from "next/link";

export default function CTA() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-32 text-center">
      <h2 className="text-4xl font-bold md:text-5xl">
        Esto es solo el principio.
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        Estamos construyendo Ludaris con la misma ilusión con la que empiezan 
        las mejores colecciones. Muy pronto compartiremos contigo todo lo que
        estamos preparando.
      </p>

      <Link
        href="/contacto"
        className="mt-12 inline-flex rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition hover:scale-105"
      >
        Contactar
      </Link>
    </section>
  );
}