import { useQuery } from "@tanstack/react-query";
import type { Color } from "@/type/typeColor";

export default function useColor() {
    return useQuery<Color[]>({
        queryKey: ['colors'],
        queryFn: async () => {
            const res = await fetch('http://127.0.0.1:8000/api/colors')
            if (!res.ok) {
                throw new Error('Erro ao buscar categorias');
            }
            return res.json() as Promise<Color[]>;
        }

    })
}