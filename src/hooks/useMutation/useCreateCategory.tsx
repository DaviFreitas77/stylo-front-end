import { useMutation } from "@tanstack/react-query";



export default function useCreateCategory() {
    return useMutation({
        mutationFn: async (category:string) => {
            const res = await fetch('http://127.0.0.1:8000/api/registerCategory', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({name:category})
            })
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Erro desconhecido");
            }

            
            return data;

        }
    })
}