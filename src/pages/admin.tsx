import useCategories from "@/hooks/useCategories";
import useColor from "@/hooks/useColor";
import useSize from "@/hooks/useSize";
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { GiPlainCircle } from "react-icons/gi";
import UploadImage from "@/components/UploadImage/uploadImage";
import { toast } from "sonner"
import Modal from "@/components/Modal";
import useCreateCategory from "@/hooks/useMutation/useCreateCategory";



type FormData = {
    name: string;
    lastprice: number;
    price: number;
    description: string;
    category: number;
    news: boolean

};

type Variation = {
    colorId: number;
    imageUrl: string;
    sizes: number[];
};

export default function Admin() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>
        ();;
    const { data: categories, isLoading, error } = useCategories();
    const { data: colors, isLoading: isLoadingColor, error: errorColor } = useColor()
    const { data: sizes, isLoading: isLoadingSize, error: errorSize } = useSize()
    const { mutate } = useCreateCategory()
    const [sizeSelected, setSizeSelected] = useState<number[]>([])
    const [colorSelected, setColorSelected] = useState<number[]>([])
    const [imageUrl, setImageUrl] = useState<string>('');
    const token = localStorage.getItem("token")
    const [modalvisible, setModalVisible] = useState<boolean>(false)
    const [category, setCategory] = useState('')
    const [variation, setVariation] = useState<Variation[]>([])

    console.log(token)
    console.log(variation)
    const addSize = (id: number, colorId: number) => {
        setVariation(variation.map(v => {
            if (v.colorId === colorId) {
                const hasSize = v.sizes.includes(id)
                return {
                    ...v,
                    sizes: hasSize
                        ? v.sizes.filter(s => s !== id)
                        : [...v.sizes, id]
                };
            }
            return v;
        }))
    };

    const addColor = (id: number) => {
        if (colorSelected.includes(id)) {
            const update = colorSelected.filter(item => item !== id);
            setColorSelected(update)
            setVariation(variation.filter(v => v.colorId !== id));
        } else {
            setColorSelected([...colorSelected, id])
            setVariation([...variation, { colorId: id, sizes: [], imageUrl: "" }]);

        }
    }


    const registerProduct = async (data: FormData) => {
        console.log(variation)
        const payload = {
            name: data.name,
            description: data.description,
            price: data.price,
            lastPrice: data.lastprice,
            idCategory: data.category,
            news: data.news,
            variation
        }
        console.log(data)
        try {
            const res = await fetch('http://127.0.0.1:8000/api/adm/registerProduct', {
                method: "post",
                headers: {
                    'Accept': "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            })

            const data = await res.json()

            if (res.ok) {
                return toast.success("produto cadastrado")
            }
            console.log(data)
            return toast.error("você não tem autorização ")
        } catch (error) {
            console.log(error)
        } finally {

            reset();
        }


    }

    const registerCategory = () => {
        mutate(category, {
            onSuccess: (response) => {
                toast(response.message);
                setCategory('');
                setModalVisible(false)
            }
        })
    }

    const setImageForColor = (colorId: number, url: string) => {
        setVariation(variation.map(v =>
            v.colorId === colorId ? { ...v, imageUrl: url } : v
        ));
    };

    return (
        <div >
            <h1 className="text-center m-3 text-4xl">Cadastrar Produto</h1>

            <div className="items-center justify-center flex">
                <button
                    onClick={() => setModalVisible(true)}
                    className="bg-black text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:bg-gray-800 transition duration-300 ease-in-out cursor-pointer"
                >
                    Criar Categoria
                </button>
            </div>
            <Modal openModal={modalvisible} onClose={() => setModalVisible(false)} title="criar categoria" >
                <input
                    placeholder="Digite o nome da categoria"
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none "
                    onChange={(e) => setCategory(e.target.value)}
                />
                <button
                    onClick={registerCategory}
                    className="mt-4 bg-[#252A32] text-white py-2 px-4 rounded-lg cursor-pointer">
                    Criar Categoria
                </button>
            </Modal>
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
                        {/* <div className="flex-1 min-w-[200px]">
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
                        </div> */}
                        {/* Seleção de Cores */}
                        <div className="flex-1 min-w-[200px]">
                            <h2 className="text-lg font-semibold mb-2">Selecione as cores </h2>
                            <div className="flex flex-wrap gap-3 max-w-[250px]">
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
                        <div className="max-w-[400px]">
                            {colorSelected.map((corId) => {
                                const variacao = variation.find(v => v.colorId === corId);
                                return (
                                    <div className="flex-1 min-w-[200px] mb-4">
                                        <h2 className="text-lg font-semibold mb-2">Cor ID: {corId}</h2>
                                        <div className="mb-2">
                                            <UploadImage onUploadComplete={(url) => setImageForColor(corId, url)} />
                                            {variacao?.imageUrl && (
                                                <img src={variacao.imageUrl} alt="Preview" className="w-25 h-25 object-contain  mt-2 rounded" />
                                            )}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {sizes && sizes.map(size => {
                                                const selected = variacao?.sizes.includes(size.id);
                                                return (
                                                    <button
                                                        onClick={() => addSize(size.id, corId)}
                                                        type="button"
                                                        key={size.id}
                                                        className={`px-4 py-2 border border-gray-300 rounded-md shadow-sm transition cursor-pointer
                                             ${selected ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
                                                            }`}
                                                    >
                                                        {size.name}
                                                    </button>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* imagem */}
                        {/* <UploadImage onUploadComplete={(url) => setImageUrl(url)} /> */}
                    </div>
                    {/* Botão de envio */}
                    <div className="mt-4">
                        <button
                            type="submit"

                            className={`px-6 py-2 ${imageUrl ? 'bg-black cursor-pointer' : "bg-gray-600"}  text-white rounded-md transition`}
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}