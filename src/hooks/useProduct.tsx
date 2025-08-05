import { useQuery } from "@tanstack/react-query";
import type { Product } from "@/type/typeProduct";
import url from '../../url.json'
export default function useProducts(id:number){
    return useQuery<Product>({
        queryKey:['products',id],
        enabled: !!id,
        queryFn:async()=>{
            const res = await fetch(`${url.url}/api/product/${id}`)

            if(!res.ok){
                throw new Error("erro ao buscar produtos")
            }
            const data = await res.json()

            return data;
            

        }
    })
}