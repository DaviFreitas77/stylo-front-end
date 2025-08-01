import { useQuery } from "@tanstack/react-query";



export default function useCategories() {
    return useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('http://192.168.15.9:8000/api/categories');
            if (!res.ok) {
                throw new Error('Erro ao buscar categorias');
            }
            return res.json();
        },
    });
}