import { useParams } from "react-router-dom"
import Header from "@/components/Header"
import { FaCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
export default function InfoProduct() {
    const { id } = useParams()


    return (
        <div>
            <Header />
            <div className="flex">
                <div className="bg-[#F2EEEB] w-[50%] items-center justify-center flex">
                    <img src="/img/vestido.png" alt="" className="w-[50%]" />
                </div>
                <div className="ml-10 mt-4">
                    <p className="text-4xl">Vestido elegante</p>
                    <p className="mt-4 max-w-[500px] text-gray-500">Este vestido combina elegância e conforto em uma peça única. Confeccionado com tecido leve e fluido, ele possui caimento impecável que valoriza a silhueta com sofisticação. </p>
                    <div>
                        <h2 className="mt-4 text-2xl font-medium">Cores</h2>
                        <div className="flex gap-2.5 mt-2">
                            <button className="border rounded-full p-1 cursor-pointer hover:opacity-80">

                                <FaCircle size={30} color="black" />
                            </button>
                            <button className="border rounded-full p-1 cursor-pointer hover:opacity-80">

                                <FaCircle size={30} color="blue" />
                            </button>
                            <button className="border rounded-full p-1 cursor-pointer hover:opacity-80">

                                <FaCircle size={30} color="yellow" />
                            </button>

                        </div>
                    </div>

                    <div className="mt-3">
                        <del className="text-gray-600">R$ 259,99</del>
                        <p className="text-3xl font-medium">R$ 59,99</p>
                    </div>
                    <div className="mt-3">
                        <p className="text-2xl font-medium mb-3">Tamanho</p>
                      <select name="" id="" className="border w-[150px] rounded-[4px]">
                        
                        <option value="" disabled>escolha o tamanho</option> 
                        <option value="">m</option> 
                        <option value="">m</option>
                        <option value="">m</option>
                      </select>

                    </div>

                    <div className="mt-7">
                        <Button className="bg-black text-white w-full h-12 cursor-pointer" >Comprar</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}