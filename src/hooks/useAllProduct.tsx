import { useQuery } from "@tanstack/react-query";
import type { AllProduct } from "@/type/typeAllProduct";
import url from '../../url.json'
export default function useAllProduct() {
    return useQuery<AllProduct[]>({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch(`${url.url}/api/products`)

            if (!res.ok) {
                throw new Error("erro ao buscar produtos")
            }
            const data = await res.json()
           
            return data;


        }
    })
}