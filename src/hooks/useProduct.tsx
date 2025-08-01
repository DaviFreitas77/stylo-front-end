import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/type/typeProduct";

export default function useProducts(id:number){
    return useQuery<Product>({
        queryKey:['products',id],
        enabled: !!id,
        queryFn:async()=>{
            const res = await fetch(`http://192.168.15.9:8000/api/product/${id}`)

            if(!res.ok){
                throw new Error("erro ao buscar produtos")
            }
            const data = await res.json()

            return data;
            

        }
    })
}