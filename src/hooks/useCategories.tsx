import { useQuery } from "@tanstack/react-query";
import url from '../../url.json'


export default function useCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`${url.url}/api/categories`);
            if (!res.ok) {
                throw new Error('Erro ao buscar categorias');
            }
            return res.json();
        },
    });
}