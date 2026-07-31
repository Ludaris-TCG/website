export type Product = {
    id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    publisherId: string;
    createdAt: Date;
    updatedAt: Date;
};