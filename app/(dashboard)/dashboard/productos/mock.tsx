import type { Product } from "@/types";

export const products: Product[] = [
    {
        id: "1",
        name: "Disney Lorcana - The First Chapter Booster",
        slug: "lorcana-the-first-chapter-booster",
        description: "Sobre de 12 cartas.",
        price: 5.99,
        stock: 42,
        image: "/images/products/lorcana-first-chapter-booster.webp",
        publisherId: "ravensburger",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        name: "Star Wars Unlimited - Spark of Rebellion Booster",
        slug: "spark-of-rebellion-booster",
        description: "Sobre de la colección Spark of Rebellion.",
        price: 4.99,
        stock: 27,
        image: "/images/products/spark-of-rebellion-booster.webp",
        publisherId: "fantasy-flight-games",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];