import { db } from "@/service/firebaseConnection"
import { push, ref } from "firebase/database"
import { useState } from "react";
import { useForm } from 'react-hook-form';
type FormData = {
    name: string;
    preco: number
    // outros campos
};
export default function Admin() {

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();;



    const registerProduct = async (data: FormData) => {
        console.log(data)
        // const referencia = ref(db, 'produtos');
        // try {
        //     const newProduct = await push(referencia, {
        //         name: name,
        //         tamanho: tamanho,
        //         preco: preco,
        //         image: image,

        //     })
        // } catch (error) {
        //     console.log(error)
        // }

    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(registerProduct)}
            >
                <input
                    {...register("name", { required: "O nome é obrigatório" })}
                    className="input"
                    type="text"
                    placeholder="Nome do produto"
                />
                {errors.name?.message && (
                    <p className="error fs-6 text">{errors.name.message}</p>
                )}

                <input
                    {...register("preco", { required: "o preço é obrigatório" })}
                    className="input"
                    placeholder="ex 299"
                    type="text" />

                {errors.preco?.message && (
                    <p className="error fs-6 text">{errors.preco.message}</p>
                )}
                <button type="submit">Enviar</button>
            </form>

        </div>
    )
}