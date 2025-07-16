
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Button() {
    return (
        <div>
            <button className="fixed  bottom-10 right-5 z-999 cursor-pointer hover:scale-125 transform transition-transform duration-500">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <img className="w-[60px]" src="img/iconapp.png" alt="" />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p className="text-green-500 font-bold">Compre direto pelo whatsapp</p>
                    </TooltipContent>
                </Tooltip>
            </button>
        </div>
    )

}