import useCategories from "@/hooks/useCategories";
import useColor from "@/hooks/useColor";
import useSize from "@/hooks/useSize";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { GiPlainCircle } from "react-icons/gi";
import UploadImage from "@/components/UploadImage/uploadImage";


type FormData = {
    name: string;
    lastprice: number;
    price: number;
    description: string;
    category: number;
    news: boolean

};


export default function Admin() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>
        ();;

    const { data: categories, isLoading, error } = useCategories();
    const { data: colors, isLoading: isLoadingColor, error: errorColor } = useColor()
    const { data: sizes, isLoading: isLoadingSize, error: errorSize } = useSize()
    const [sizeSelected, setSizeSelected] = useState<number[]>([])
    const [colorSelected, setColorSelected] = useState<number[]>([])
    const [imageUrl, setImageUrl] = useState<string>('');


    const addSize = (id: number) => {
        if (sizeSelected.includes(id)) {

            const update = sizeSelected.filter(item => item !== id);
            setSizeSelected(update);
        } else {
            // Adiciona o tamanho
            setSizeSelected([...sizeSelected, id]);
        }

    };

    const addColor = (id: number) => {
        if (colorSelected.includes(id)) {
            const update = colorSelected.filter(item => item !== id);
            setColorSelected(update)
        } else {
            setColorSelected([...colorSelected, id])
        }
    }


    const registerProduct = async (data: FormData) => {
        console.log(sizeSelected)
        const payload = {
            name: data.name,
            description: data.description,
            price: data.price,
            lastPrice: data.lastprice,
            idCategory: data.category,
            colors: colorSelected,
            sizes: sizeSelected,
            image: imageUrl,
            news: data.news
        }
        console.log(data)
        try {
            const res = await fetch('http://127.0.0.1:8000/api/registerProduct', {
                method: "post",
                headers: {
                    'Accept': "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })

            const data = await res.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        } finally {
            setSizeSelected([]);
            setColorSelected([]);
            setImageUrl('');
            reset();
        }


    }

    return (
        <div className="flex items-center justify-center">
            <form
                onSubmit={handleSubmit(registerProduct)}
                className="w-[60%] mt-9"
            >
                {/* Nome do produto  e preço */}
                <div className="flex flex-wrap gap-4 ">
                    <div className="flex-1 min-w-[200px]">
                        <input
                            {...register("name", { required: "O nome é obrigatório" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    placeholder-gray-400 transition duration-150 ease-in-out"
                            type="text"
                            placeholder="Nome do produto"
                        />
                        {errors.name?.message && (
                            <p className="text-[14px] text-red-600 mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    {/* Preço */}
                    <div className="flex-1 min-w-[200px]">
                        <input
                            {...register("lastprice")}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    placeholder-gray-400 transition duration-150 ease-in-out"
                            placeholder="preço antigo"
                            type="text"
                        />

                    </div>
                    <div className="flex-1 min-w-[200px]">
                        <input
                            {...register("price", { required: "O preço é obrigatório" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    placeholder-gray-400 transition duration-150 ease-in-out"
                            placeholder="novo preço"
                            type="text"
                        />
                        {errors.price?.message && (
                            <p className="text-[14px] text-red-600 mt-1">{errors.price.message}</p>
                        )}
                    </div>
                </div>

                {/* descrição  categoria */}
                <div className="flex flex-wrap gap-4 mt-5">
                    <div className="flex-1 min-w-[200px]">
                        <textarea
                            {...register("description", { required: "adicione uma descrição a o produto" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    placeholder-gray-400 transition duration-150 ease-in-out"
                            placeholder="digite uma descrição a o produto"
                        />

                        {errors.description?.message && (
                            <p className="text-[14px] text-red-600 mt-1">{errors.description.message}</p>
                        )}
                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <select
                            {...register("category", { required: "selecione uma categoria" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    placeholder-gray-400 transition duration-150 ease-in-out"
                        >

                            <option value="" disabled selected>
                                Selecione a categoria
                            </option>

                            {categories && categories.map((category: any) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        {errors.category && (
                            <p className="text-[14px] text-red-600 mt-1">{errors.category.message}</p>
                        )}

                    </div>

                    <div className="flex-1 min-w-[200px]">
                        <select
                            {...register("news", { required: "selecione se o produto é destaque" })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm 
                    focus:outline-none focus:ring-2 focus:ring-gray-500
                    placeholder-gray-400 transition duration-150 ease-in-out"
                        >

                            <option value="" disabled selected>
                                destacar produto
                            </option>

                            <option value={1}>
                                Sim
                            </option>
                            <option value={0}>
                                Não
                            </option>
                        </select>
                        {errors.category && (
                            <p className="text-[14px] text-red-600 mt-1">{errors.category.message}</p>
                        )}

                    </div>

                </div>


                <div className="flex flex-wrap gap-10 mt-5">

                    {/* Seleção de Tamanhos */}
                    <div className="flex-1 min-w-[200px]">
                        <h2 className="text-lg font-semibold mb-2">Selecione o tamanho</h2>
                        <div className="flex flex-wrap gap-2">
                            {sizes && sizes.map((item) => (
                                <button
                                    onClick={() => addSize(item.id)}
                                    type="button"
                                    key={item.id}
                                    className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm transition cursor-pointer
                                     ${sizeSelected.includes(item.id) ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Seleção de Cores */}
                    <div className="flex-1 min-w-[200px]">
                        <h2 className="text-lg font-semibold mb-2">Selecione as cores </h2>
                        <div className="flex flex-wrap gap-3">
                            {colors && colors.map((item) => (
                                <button
                                    onClick={() => addColor(item.id)}
                                    type="button"
                                    key={item.id}
                                    className={`w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 shadow hover:opacity-70 transition cursor-pointer ${colorSelected.includes(item.id) ? 'bg-gray-800' : 'bg-white'}`}


                                    title={item.name}
                                >
                                    <GiPlainCircle size={24} color={item.name} />
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* imagem */}

                    <UploadImage onUploadComplete={(url) => setImageUrl(url)} />

                </div>

                {/* Botão de envio */}
                <div className="mt-4">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-black cursor-pointer text-white rounded-md transition"
                    >
                        Enviar
                    </button>
                </div>
            </form>
        </div>
    )
}