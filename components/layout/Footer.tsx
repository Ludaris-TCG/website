import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-2xl font-semibold tracking-wide"
          >
            <span className="text-yellow-400">✦</span>
            <span>Ludaris</span>
          </Link>

          {/* Claim */}
          <p className="mt-4 max-w-md text-gray-400">
            Donde comienza tu próxima colección.
          </p>

          {/* Navegación */}
          <nav className="mt-10 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">
              Inicio
            </Link>

            <Link href="/catalogo" className="hover:text-white transition">
              Catálogo
            </Link>

            <Link href="/editoriales" className="hover:text-white transition">
              Editoriales
            </Link>

            <Link href="/nuestra-historia" className="hover:text-white transition">
              Nuestra historia
            </Link>

            <Link href="/contacto" className="hover:text-white transition">
              Contacto
            </Link>
          </nav>

          {/* Email */}
          <a
            href="mailto:ludaris.tcg@gmail.com"
            className="mt-10 text-sm text-gray-500 transition hover:text-yellow-400"
          >
            ludaris.tcg@gmail.com
          </a>

          {/* Copyright */}
          <p className="mt-8 text-xs text-gray-600">
            Hecho con cariño para jugadores y coleccionistas.
            © {new Date().getFullYear()} Ludaris.
          </p>

        </div>
      </section>
    </footer>
  );
}