import { useQuery } from "@tanstack/react-query";
import type { Size } from "@/type/typeSize";
import url from '../../url.json'
export default function useSize(){
    return useQuery<Size[]>({
        queryKey:['size'],
        queryFn:async()=>{
            const res = await fetch(`${url.url}/api/sizes`)

            if(!res.ok){
                  throw new Error('Erro ao buscar categorias');
            }
            return res.json() as Promise<Size[]>
        }
    })
}