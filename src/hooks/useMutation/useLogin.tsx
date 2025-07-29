
import { useMutation } from "@tanstack/react-query";



export default function useLogin() {
    return useMutation({
        mutationFn: async (newUser: { email: string, password: string }) => {
            const res = await fetch('http://127.0.0.1:8000/api/auth/login', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
            const data = await res.json();

            if (!res.ok) {
              throw new Error(data.message);
            }
            return data;

        }
    })
}