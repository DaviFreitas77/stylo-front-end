import { useQuery } from "@tanstack/react-query";
import type { ProductFeatured } from "@/type/typeProductFeatured";
export default function useProductFeatured() {
    return useQuery<ProductFeatured[]>({
        queryKey: ['productFeatured'],
        queryFn: async () => {
            const res = await fetch('http://127.0.0.1:8000/api/productFeatured');

            if (!res.ok) {
                throw new Error('Erro ao buscar produtos');
            }
            const data = await res.json() as ProductFeatured[];
            return data;
        }
    })
}