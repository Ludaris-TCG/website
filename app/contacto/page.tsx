import Link from "next/link";

export default function Contacto() {
  return (
    <main className="mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center px-6 py-24 text-center">
      <span className="text-sm uppercase tracking-[0.3em] text-yellow-400">
        Contacto
      </span>

      <h1 className="mt-6 text-5xl font-bold md:text-6xl">
        Hablemos.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        Tanto si eres jugador, coleccionista, editorial o distribuidor,
        estaremos encantados de conocerte y escuchar tus ideas.
      </p>

      <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8">
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Correo electrónico
        </p>

        <a
          href="mailto:ludaris.tcg@gmail.com"
          className="mt-3 block text-2xl font-semibold text-yellow-400 transition hover:text-yellow-300"
        >
          ludaris.tcg@gmail.com
        </a>
      </div>

      <div className="mt-12 max-w-2xl text-gray-400">
        <p>
          Mientras terminamos de preparar Ludaris, el correo electrónico es la
          mejor forma de ponerte en contacto con nosotros. Responderemos lo antes 
          posible.
        </p>
      </div>

      <p className="mt-16 text-gray-500">
        Gracias por formar parte del comienzo de Ludaris. Estamos deseando conocerte y compartir esta afición contigo.
      </p>

      <Link
        href="/"
        className="mt-12 rounded-full border border-white/15 px-6 py-3 transition hover:border-white"
      >
        Volver al inicio
      </Link>
    </main>
  );
}