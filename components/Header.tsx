import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-semibold tracking-wide"
        >
          <span className="text-yellow-400">✦</span>
          <span>Ludaris</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <Link href="/catalogo" className="hover:text-white transition">
            Inicio
          </Link>

          <Link href="/catalogo" className="hover:text-white transition">
            Catálogo
          </Link>

          <Link href="/editoriales" className="hover:text-white transition">
            Editoriales
          </Link>

          <Link href="/sobre" className="hover:text-white transition">
            Sobre
          </Link>

          <Link href="/contacto" className="hover:text-white transition">
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}