export type AllProduct = {
  id: number;
  name: string;
  image: string;
  price: string | number;
  description: string,
  lastPrice: string | number;
  category:{
    id:number,
    name:string
  }
 
};
