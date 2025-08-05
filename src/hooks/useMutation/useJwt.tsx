import { useMutation } from "@tanstack/react-query";
import url from '../../../url.json'

export default function useJwt() {
    return useMutation({
        mutationFn: async (token: string) => {
            const res = await fetch(`${url.url}/api/auth/loginGoogle`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({ token: token })
            })
            const data = await res.json()

            if (!res.ok) {
                throw new Error(data.message || "Erro desconhecido");
            }


            return data;
        }
    })
}