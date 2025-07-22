import { useParams } from "react-router-dom"
import Header from "@/components/Header"
import { FaCircle } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import useProducts from "@/hooks/useProduct"
import { useEffect } from "react"

export default function InfoProduct() {
    const { id } = useParams()
    const formatId = Number(id)
    const { data: product, isLoading, error } = useProducts(formatId)


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);
    return (
        <div>
            <Header />
            <div className="flex flex-col lg:flex-row max-w-[1920px]">
                {/* Imagem do produto */}
                <div className="bg-[#F2EEEB] w-full lg:w-1/2 flex items-center justify-center p-6">
                    <img src="/img/vestido.png" alt="Vestido elegante" className="w-[50%] max-w-[500px] object-contain" />
                </div>

                {/* Informações do produto */}
                <div className="w-full lg:w-1/2 px-6 lg:px-12 py-6">
                    <p className="text-3xl lg:text-4xl font-semibold">{product?.name}</p>
                    <p className="mt-4 text-gray-500 max-w-2xl">
                        {product?.description}
                    </p>

                    <div className="mt-6">
                        <h2 className="text-xl font-medium">Cores</h2>
                        <div className="flex gap-3 mt-2">
                            {product?.colors && product.colors.map((item) => (
                                <button key={item.id} className="border rounded-full p-1 hover:opacity-80">
                                    <FaCircle size={30} color={item.name} />
                                </button>
                            ))}

                        </div>
                    </div>

                    <div className="mt-4">
                        <del className="text-gray-600">{Number(product?.lastPrice).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}</del>
                        <p className="text-3xl font-bold text-black">{Number(product?.price).toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</p>
                    </div>

                    <div className="mt-5">
                        <p className="text-xl font-medium mb-2">Tamanho</p>
                        <select className="border w-[150px] rounded px-2 py-1">
                            <option disabled selected>Escolha o tamanho</option>
                            {product?.sizes && product.sizes.map((item) => (
                                <option value={item.id}>{item.name}</option>
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
