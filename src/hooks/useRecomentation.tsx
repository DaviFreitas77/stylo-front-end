import { useQuery } from "@tanstack/react-query";
import type { ProductFeatured } from "@/type/typeProductFeatured";
import url from '../../url.json'
export default function useRecomendation(id: number) {
    return useQuery<ProductFeatured[]>({
        queryKey: ['ProductRecomended'],
        enabled:!!id,
        queryFn: async () => {
            const res = await fetch(`${url.url}/api/recomendatation/${id}`);

            if (!res.ok) {
                throw new Error('Erro ao buscar produtos');
            }
            const data = await res.json();
            return data;
        }
    })
}