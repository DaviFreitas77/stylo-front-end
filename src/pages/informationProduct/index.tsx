import { useParams } from "react-router-dom"
import Header from "@/components/Header"
import { FaCircle } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import useProducts from "@/hooks/useProduct"
import { useEffect, useState } from "react"

export default function InfoProduct() {
    const { id } = useParams()
    const formatId = Number(id)
    const { data: product, isLoading, error } = useProducts(formatId)
    const [selectedColorId, setSelectedColorId] = useState<number | null>(null)


    useEffect(() => {
        if (product?.variations?.length) {
            setSelectedColorId(product.variations[0].color.id);
        }
    }, [product])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const filteredSizes = product?.variations.find(variation => variation.color.id === selectedColorId)?.sizes || []

    const filteredImage = product?.variations.find(variation => variation.color.id === selectedColorId)?.image || null;

    const formtatNumber = () => {
        const price = Number(product?.price)
        const lastPrice = Number(product?.lastPrice)
    }


    return (
        <div>
            <Header />
            <div className="flex flex-col lg:flex-row max-w-[1920px]">

                <div className="w-full lg:w-1/2 flex items-center justify-center gap-6 p-6">

                    {/* Thumbnails */}
                    <div className="flex flex-col gap-3 max-h-[500px]">
                        {product?.variations?.map((item) => (
                            <img
                                key={item.image}
                                src={item.image}
                                alt=""
                                className={`
                                            w-[100px] h-[150px] object-contain rounded-lg cursor-pointer 
                                            border transition-all
                                            hover:scale-105 hover:border-gray-400
                                ${filteredImage === item.image ? "border-black scale-105" : "border-transparent"}
                                `}
                                onClick={() => setSelectedColorId(item.color.id)}
                            />
                        ))}
                    </div>


                    {filteredImage && (
                        <div className="flex items-center justify-center w-[60%] max-w-[400px] aspect-[3/4] bg-white rounded-xl shadow-md">
                            <img
                                src={filteredImage}
                                alt="Produto"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    )}

                </div>


                <div className="w-full lg:w-1/2 px-6 lg:px-12 py-6">
                    <p className="text-3xl lg:text-4xl font-semibold">{product?.name}</p>
                    <p className="mt-4 text-gray-500 max-w-2xl">
                        {product?.description}
                    </p>

                    <div className="mt-6">
                        <h2 className="text-xl font-medium">Cores</h2>
                        <div className="flex gap-3 mt-2">
                            {product?.variations && product.variations.map((item) => (
                                <button
                                    onClick={() => setSelectedColorId(item.color.id)}
                                    key={item.color.id} className={`border rounded-full p-1 hover:opacity-80 cursor-pointer ${selectedColorId === item.color.id ? 'border-2' : ''}`}>
                                    <FaCircle size={30} color={item.color.name} />
                                </button>
                            ))}

                        </div>
                    </div>

                    <div className="mt-4">
                        <del className="text-gray-600">
                            {product?.lastPrice
                                ? Number(product.lastPrice).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })
                                : null}
                        </del>
                        <p className="text-3xl font-bold text-black">
                            {product?.price
                                ? Number(product.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })
                                : null}
                        </p>
                    </div>

                    <div className="mt-5">
                        <p className="text-xl font-medium mb-2">Tamanho</p>
                        <select className="border w-[150px] rounded px-2 py-1">
                            <option disabled selected>Escolha o tamanho</option>
                            {filteredSizes.map((item) => (
                                <option key={item.id} value={item.id}>{item.name}</option>
                            ))}



                        </select>
                    </div>

                    <div className="mt-6">
                        <Button className="bg-black text-white w-full h-12">Comprar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
