import { useMutation } from "@tanstack/react-query";
import url from '../../../url.json'


export default function UseCreateUser() {
    return useMutation({
        mutationFn: async (newUser: { email: string, name: string, password: string }) => {
            const res = await fetch(`${url.url}/api/auth/register`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Erro desconhecido");
            }


            return data;

        }
    })
}