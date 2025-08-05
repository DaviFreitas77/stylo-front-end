import { CiSearch } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const [down, setDown] = useState(false)
    const [up, setUp] = useState(false)



    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY
        setScrollY(currentScroll)

        if (currentScroll > scrollY) {
            setDown(true)
            setUp(false)
        }

        if (currentScroll < scrollY) {
            setDown(false)
            setUp(true)
        }
    })

    const name = localStorage.getItem("name")
    const firstLetter = name?.charAt(0)


    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-md transform transition-transform duration-500 ${down ? '-translate-y-full' : 'translate-y-0 '} ${scrollY} `}>
                <div className="p-3 flex items-center justify-between relative">

                    <div className="flex items-center max-w-[300px] px-3 py-2">
                        <CiSearch size={30} color="black" />
                        <input
                            type="search"
                            placeholder="ex: moletom"
                            className="ml-2 w-full bg-transparent outline-none placeholder:text-gray-400 hidden md:flex"
                        />
                    </div>


                    <img
                        className="absolute left-1/2 transform -translate-x-1/2 w-[120px] sm:w-[150px]"
                        src="/img/logo.png"
                        alt="Logo"
                    />


                    <Avatar className="bg-[#F2EEEB]">
                        <AvatarFallback >{firstLetter}</AvatarFallback>
                    </Avatar>
                </div>


                <div className="bg-black text-center">
                    <p className="text-white text-[12px]">
                        Compre direto pelo whatsApp
                    </p>
                </div>
            </header>

            {/* Espaço para não cobrir conteúdo */}
            <div className="h-[85px] md:h-[95px]"></div>
        </>
    );
}
