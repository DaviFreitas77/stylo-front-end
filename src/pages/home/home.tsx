
import Header from "@/components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
// CSS do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Button from '@/components/ButtonWhatsap';
import SliderBanner from '@/components/SliderBanner';
import Footer from "@/components/Footer/indesx";
import useProductFeatured from "@/hooks/useProductFeatured";

import Card from "@/components/Card";
import CardSlider from "@/components/CardSlider";
import { useState } from "react";
import useAllProduct from "@/hooks/useAllProduct";
import { Skeleton } from "@/components/ui/skeleton";

function Home() {

  const { data: products, isLoading, error } = useProductFeatured()
  const { data: allProducts } = useAllProduct()

  const limitProduct = products?.slice(0, 6)


  const filteredCategory = allProducts?.filter(product => product.category.name.toLocaleLowerCase() === "camiseta").slice(0, 6)

  return (
    <>
      <div className="flex-col justify-center items-center">
        <Header />
        <SliderBanner />


        <div className="w-full max-w-[1650px] mx-auto flex flex-col items-center justify-center">
          <h2 style={{ fontFamily: 'poppins' }} className="text-center text-3xl m-10 font-poppins md:text-3xl lg:text-5xl">Novidades em alta</h2>

          <div className="flex w-full">
            <img
              src="img/destaque.png"
              alt="imagem destaque"
              className="hidden xl:block object-cover ml-1 w-[40%]"
            />
            <div className="justify-center !xl:w-[100%]  flex-wrap hidden lg:flex gap-3 items-center">
              <div className="justify-center flex  flex-wrap  gap-3">
                {limitProduct ? limitProduct.map((item) => (
                  <Card key={item.id} name={item.name} price={Number(item.price)} image={item.image} lastPrice={Number(item.lastPrice)} id={item.id} />
                )) : (
                  <div className="flex gap-2 flex-wrap items-center justify-center ml-3">

                    <Skeleton className="  w-[240px] h-[370px] rounded-xl bg-gray-200 mb-2" />
                    <Skeleton className="  w-[240px] h-[370px] rounded-xl bg-gray-200 mb-2" />
                    <Skeleton className="  w-[240px] h-[370px] rounded-xl bg-gray-200 mb-2" />
                    <Skeleton className="  w-[240px] h-[370px] rounded-xl bg-gray-200 mb-2" />
                    <Skeleton className="  w-[240px] h-[370px] rounded-xl bg-gray-200 mb-2" />
                    <Skeleton className="  w-[240px] h-[370px] rounded-xl bg-gray-200 mb-2" />
                  </div>
                )}
              </div>

              {limitProduct && limitProduct.length >= 6 && (
                <button className="bg-black text-white h-[40px] w-[270px]  rounded-bl-2xl rounded-tr-2xl cursor-pointer hover:opacity-85 ">Ver todos os produtos</button>
              )}

            </div>

            {/* mostrar em 1024px */}

            <div className="flex items-center justify-center w-[100%] flex-wrap  lg:hidden">
              {products ? (
                <CardSlider products={products} />
              ) : (
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  spaceBetween={10}
                  pagination
                  breakpoints={{
                    0: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 }
                  }}
                  autoplay
                  className="!flex !gap-4 items-center justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <SwiperSlide key={i} >
                      <Skeleton className="lg:w-[240px] lg:h-[380px] md:w-[180px] md:h-[250px] w-[100%] h-[270px] rounded-xl bg-gray-200 mb-2" />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              {limitProduct && limitProduct.length >= 6 && (
                <button className="bg-black text-white h-[40px] w-[270px]  rounded-bl-2xl rounded-tr-2xl cursor-pointer hover:opacity-85 ">Ver todos os produtos</button>
              )}
            </div>
          </div>

          {/* colecao inverno */}
          <div className="gap-5 flex flex-col w-full">
            <img
              src="img/inverno.png"
              className="mt-5 w-full hidden sm:block "
              alt="" />
            <img
              src="img/invernomobile.png"
              className="mt-5 w-full sm:hidden"
              alt="" />
          </div>
          <h2 style={{ fontFamily: 'poppins' }} className="text-center text-3xl m-10 font-poppins md:text-3xl lg:text-5xl">Camisetas que voce vai amar</h2>

          <div className="flex w-full justify-between">
            <div className="justify-center  !xl:w-[100%]  flex-wrap hidden lg:flex gap-3">
              <div className="justify-center  !xl:w-[100%]  flex-wrap hidden lg:flex gap-3">
                {filteredCategory && filteredCategory.map((item) => (
                  <Card key={item.id} name={item.name} price={Number(item.price)} image={item.image} lastPrice={Number(item.lastPrice)} id={item.id} />
                ))}
              </div>
              {filteredCategory && filteredCategory.length >= 6 ? (
                <button className="bg-black text-white h-[40px] w-[270px]  rounded-bl-2xl rounded-tr-2xl cursor-pointer hover:opacity-85 ">Ver todos os produtos</button>
              ) : null}

            </div>

            <div className=" flex items-center justify-center w-[100%] flex-wrap  lg:hidden">
              {filteredCategory && <CardSlider products={filteredCategory} />}
              {filteredCategory && filteredCategory.length >= 6 ? (
                <button className="bg-black text-white h-[40px] w-[270px]  rounded-bl-2xl rounded-tr-2xl cursor-pointer hover:opacity-85 ">Ver todos os produtos</button>
              ) : null}
            </div>
            <img
              src="img/destaque.png"
              alt="imagem destaque"
              className="hidden xl:block object-cover ml-1 w-[40%]"
            />
          </div>
        </div>
        <Button />

        <Footer />
      </div>
    </>
  )
}

export default Home
