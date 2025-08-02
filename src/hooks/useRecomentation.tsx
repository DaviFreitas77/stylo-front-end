import { useQuery } from "@tanstack/react-query";
import type { ProductFeatured } from "@/type/typeProductFeatured";
export default function useRecomendation(id: number) {
    return useQuery<ProductFeatured[]>({
        queryKey: ['ProductRecomended'],
        enabled:!!id,
        queryFn: async () => {
            const res = await fetch(`http://192.168.15.9:8000/api/recomendatation/${id}`);

            if (!res.ok) {
                throw new Error('Erro ao buscar produtos');
            }
            const data = await res.json();
            return data;
        }
    })
}