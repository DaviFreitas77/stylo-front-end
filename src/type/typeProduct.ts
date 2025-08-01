export type Product = {
  id: number,
  name: string,
  price: string,
  lastPrice: string,
  image: string | null,
  description: string,
  variations: {
    image:string,
    color: {    
      id: number;
      name: string;
    },
    sizes: {
      id: number;
      name: string;
    }[];
  }[];
}
