const promises = [
  {
    title: "Selección cuidada",
    text: "No queremos tener miles de productos. Queremos ofrecer aquellos que realmente recomendaríamos.",
  },
  {
    title: "Preparado con mimo",
    text: "Cada pedido se preparará con el mismo cuidado con el que nos gustaría recibir el nuestro.",
  },
  {
    title: "Pensado para coleccionistas",
    text: "Desde las fundas hasta el embalaje, cada detalle estará pensado para proteger tu colección.",
  },
  {
    title: "Una comunidad",
    text: "Queremos construir un lugar donde descubrir, aprender y compartir esta afición.",
  },
];

export default function Promise() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-4xl font-bold">
        Lo que puedes esperar de Ludaris
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {promises.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 p-8"
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>

            <p className="mt-4 leading-8 text-gray-400">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}