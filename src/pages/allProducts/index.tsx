import { useLocation } from "react-router-dom"
import Card from "@/components/Card";
import type { CardProps } from "@/components/Card";
import Header from "@/components/Header";
import Footer from "@/components/Footer/indesx";
import { useEffect } from "react";
export default function AllProduct() {

    const location = useLocation()
    const products = location.state?.products || [];
   
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    return (
        <div className="w-full max:w-[1920px] flex flex-col justify-center items-center">
            <Header/>
      
           <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 grid-cols-2 gap-2">
                {products && products.map((item: CardProps) => {
                    return (
                        <Card name={item.name} image={item.image} price={Number(item.price)} lastPrice={Number(item.lastPrice)} id={item.id} />
                    )
                })}
            </div>
            <Footer/>
        </div>
    )
}