import { useQuery } from "@tanstack/react-query";
import type { ProductFeatured } from "@/type/typeProductFeatured";
import url from '../../url.json'
export default function useProductFeatured() {
    return useQuery<ProductFeatured[]>({
        queryKey: ['productFeatured'],
        queryFn: async () => {
            const res = await fetch(`${url.url}/api/productFeatured`);

            if (!res.ok) {
                throw new Error('Erro ao buscar produtos');
            }
            const data = await res.json() as ProductFeatured[];
    
            return data;
        }
    })
}