import { useMutation } from "@tanstack/react-query";



export default function UseCreateUser() {
    return useMutation({
        mutationFn: async (newUser: { email: string, name: string, password: string }) => {
            const res = await fetch('http://127.0.0.1:8000/api/registerUser', {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    "Accept":"application/json"
                },
                body: JSON.stringify(newUser)
            })
            if (!res.ok) {
                throw new Error('Erro ao criar usuario');
            }
            
            const data = await res.json();
            
            return data; 
            
        }
    })
}