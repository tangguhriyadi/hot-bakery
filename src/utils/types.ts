export type SourceType = "whatsapp" | "call" | "email";

export type Order = {
    source: SourceType;
    name: string;
    phone: string;
    quantity: number;
    description: string;
};
