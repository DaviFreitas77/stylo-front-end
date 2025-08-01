import { useQuery } from "@tanstack/react-query";
import type { Size } from "@/type/typeSize";

export default function useSize(){
    return useQuery<Size[]>({
        queryKey:['size'],
        queryFn:async()=>{
            const res = await fetch('http://192.168.15.9:8000/api/sizes')

            if(!res.ok){
                  throw new Error('Erro ao buscar categorias');
            }
            return res.json() as Promise<Size[]>
        }
    })
}