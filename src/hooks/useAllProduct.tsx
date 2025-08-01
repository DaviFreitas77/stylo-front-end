import { useQuery } from "@tanstack/react-query";
import type { AllProduct } from "@/type/typeAllProduct";

export default function useAllProduct() {
    return useQuery<AllProduct[]>({
        queryKey: ['allProducts'],
        queryFn: async () => {
            const res = await fetch(`http://192.168.15.9:8000/api/products`)

            if (!res.ok) {
                throw new Error("erro ao buscar produtos")
            }
            const data = await res.json()

            return data;


        }
    })
}