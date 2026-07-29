export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Hero */}
      <div className="mb-12 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-yellow-600 text-xl font-bold text-slate-950 shadow-lg shadow-amber-500/30">
          L
        </div>
      
        <span className="text-3xl font-bold tracking-wider">
          Ludaris
        </span>
      </div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-slate-950 to-slate-950" />
        
          <div className="absolute left-1/2 top-20 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/20 blur-[140px]" />
        
          <div className="absolute left-20 top-40 h-64 w-64 rounded-full bg-indigo-500/20 blur-[120px]" />
        
          <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="mb-4 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-sm text-amber-300">
            Próximamente
          </span>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            Tu nueva tienda de
            <span className="block text-amber-400">
              juegos de cartas.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            En <strong>Ludaris</strong> estamos construyendo una tienda
            especializada para jugadores y coleccionistas de TCG.
            Empezamos con <strong>Star Wars: Unlimited</strong> y{" "}
            <strong>Disney Lorcana</strong>, con la idea de seguir creciendo
            junto a la comunidad.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#newsletter"
              className="rounded-xl bg-amber-400 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-amber-300"
            >
              Quiero enterarme
            </a>
          </div>
        </div>
      </section>

      {/* Juegos */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Juegos disponibles en el lanzamiento
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-amber-400">
            <p className="mb-3 text-sm uppercase tracking-widest text-amber-400">
              TCG
            </p>

            <h3 className="text-3xl font-bold">
              Star Wars: Unlimited
            </h3>

            <p className="mt-4 text-slate-400">
              Sobres, mazos, accesorios y todo lo necesario para vivir las
              mejores batallas de la galaxia.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 transition hover:border-indigo-400">
            <p className="mb-3 text-sm uppercase tracking-widest text-indigo-300">
              TCG
            </p>

            <h3 className="text-3xl font-bold">
              Disney Lorcana
            </h3>

            <p className="mt-4 text-slate-400">
              Descubre el universo de Lorcana con productos para jugadores,
              coleccionistas y nuevos invocadores.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <h2 className="mb-12 text-center text-4xl font-bold">
            ¿Por qué Ludaris?
          </h2>

          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="mb-4 text-4xl">🎴</div>

              <h3 className="mb-2 text-xl font-semibold">
                Catálogo seleccionado
              </h3>

              <p className="text-slate-400">
                Solo los juegos y productos que realmente nos apasionan.
              </p>
            </div>

            <div>
              <div className="mb-4 text-4xl">🚚</div>

              <h3 className="mb-2 text-xl font-semibold">
                Envíos rápidos
              </h3>

              <p className="text-slate-400">
                Queremos que recibas tus cartas cuanto antes para empezar
                a jugar.
              </p>
            </div>

            <div>
              <div className="mb-4 text-4xl">🤝</div>

              <h3 className="mb-2 text-xl font-semibold">
                Comunidad
              </h3>

              <p className="text-slate-400">
                Porque los mejores recuerdos siempre empiezan alrededor de
                una mesa de juego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="newsletter" className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Sé el primero en enterarte.
        </h2>

        <p className="mt-4 text-slate-400">
          Déjanos tu correo y te avisaremos cuando abramos nuestras puertas.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 outline-none placeholder:text-slate-500 focus:border-amber-400"
          />

          <button className="rounded-xl bg-amber-400 px-8 py-4 font-semibold text-slate-950 transition hover:bg-amber-300">
            Avisadme
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Ludaris · Colecciona. Juega. Comparte.
      </footer>
    </main>
  );
}
