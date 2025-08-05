import { useQuery } from "@tanstack/react-query";
import type { Color } from "@/type/typeColor";
import url from '../../url.json'
export default function useColor() {
    return useQuery<Color[]>({
        queryKey: ['colors'],
        queryFn: async () => {
            const res = await fetch(`${url.url}/api/colors`)
            if (!res.ok) {
                throw new Error('Erro ao buscar categorias');
            }
            return res.json() as Promise<Color[]>;
        }

    })
}