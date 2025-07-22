export type Product = {
    id: number,
    name: string,
    price: string,
    lastPrice: string,
    image: string,
    description:string,
    colors: {
        id: number;
        name: string;
    }[];
    sizes: {
        id: number;
        name: string;
    }[];
}