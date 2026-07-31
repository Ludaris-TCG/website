export type OrderStatus =
    | "pending"
    | "paid"
    | "shipped"
    | "delivered"
    | "cancelled";

export type Order = {
    id: string;
    playerId: string;
    total: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
};