const features = [
  {
    title: "Juegos",
    description:
      "Una selección cuidada de juegos de cartas coleccionables para jugadores y coleccionistas.",
    icon: "🎴",
  },
  {
    title: "Accesorios",
    description:
      "Fundas, álbumes y todo lo necesario para proteger y disfrutar tu colección.",
    icon: "✨",
  },
  {
    title: "Comunidad",
    description:
      "Queremos construir un espacio donde descubrir, aprender y compartir esta afición junto a otros jugadores y coleccionistas.",
    icon: "🤝",
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">
        ¿Qué encontrarás en Ludaris?
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 p-8"
          >
            <div className="text-4xl">{feature.icon}</div>

            <h3 className="mt-6 text-2xl font-semibold">
              {feature.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}