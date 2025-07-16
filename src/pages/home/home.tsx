
import Header from "@/components/Header"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// CSS do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Button from '@/components/ButtonWhatsap';
import SliderBanner from '@/components/SliderBanner';
import Footer from "@/components/Footer/indesx";

function Home() {


  return (
    <>
      <div className="flex-col justify-center items-center">
        <Header />
        <SliderBanner />

        <div className="w-full max-w-[1920px] mx-auto flex flex-col items-center justify-center">
          <h2 style={{ fontFamily: 'poppins' }} className="text-center text-3xl m-10 font-poppins md:text-3xl lg:text-5xl">Novidades em alta</h2>
          <div className="flex w-full">
            <img
              src="img/destaque.png"
              alt="imagem destaque"
              className="w-[40%]"
            />

            {/* slider de produtos principal */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={2}
              slidesPerView={3}
              autoplay={{
                delay: 4000,
                // disableOnInteraction: false
              }}
              breakpoints={{
                768: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2,
                }
              }}

              navigation={false}
              pagination={{ clickable: true }}
              className="flex items-center justify-center"
            >

              <SwiperSlide className="bg-[#F2EEEB] cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full py-4">
                  <img
                    src="img/vestido.png"
                    alt=""
                    className="w-[70%]  object-contain mb-2 hover:scale-105 transform transition-transform duration-500"
                  />
                  <div className="text-center">
                    <p className="text-gray-800 font-semibold text-[13px] md:text-base">Vestido Elegante</p>
                    <p className="text-gray-500 font-bold text-[13px] md:text-base mt-1">R$ 200,00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F2EEEB] cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full py-4">
                  <img
                    src="img/vestido.png"
                    alt=""
                      className="w-[70%]  object-contain mb-2 hover:scale-105 transform transition-transform duration-500"
                  />
                  <div className="text-center">
                    <p className="text-gray-800 font-semibold text-[13px] md:text-base">Vestido Elegante</p>
                    <p className="text-gray-500 font-bold text-[13px] md:text-base mt-1">R$ 200,00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F2EEEB] cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full py-4">
                  <img
                    src="img/vestido.png"
                    alt=""
                      className="w-[70%]  object-contain mb-2 hover:scale-105 transform transition-transform duration-500"
                  />
                  <div className="text-center">
                    <p className="text-gray-800 font-semibold text-[13px] md:text-base">Vestido Elegante</p>
                    <p className="text-gray-500 font-bold text-[13px] md:text-base mt-1">R$ 200,00</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="bg-[#F2EEEB] cursor-pointer">
                <div className="flex flex-col items-center justify-center h-full py-4">
                  <img
                    src="img/vestido.png"
                    alt=""
                      className="w-[70%]  object-contain mb-2 hover:scale-105 transform transition-transform duration-500"
                  />
                  <div className="text-center">
                    <p className="text-gray-800 font-semibold text-[13px] md:text-base">Vestido Elegante</p>
                    <p className="text-gray-500 font-bold text-[13px] md:text-base mt-1">R$ 200,00</p>
                  </div>
                </div>
              </SwiperSlide>


            </Swiper>
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

            <Swiper
              modules={[Pagination, Navigation]}
              spaceBetween={10}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="w-full"
            >
              {[...Array(5)].map((_, i) => (
                <SwiperSlide
                  key={i}
                  className="flex justify-center cursor-pointer"
                >
                  <div className="flex flex-col items-center p-5 hover:scale-105 transition-transform duration-300">
                    <img
                      className="w-[50%] object-contain"
                      src="img/vestido.png"
                      alt="Vestido"
                    />
                    <div className="text-center">
                      <p className="text-gray-800 font-semibold text-base">Vestido Elegante</p>
                      <p className="text-gray-500 font-bold text-[13px] md:text-base mt-1">R$ 200,00</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

          </div>
        </div>

        <Button />
        <Footer />
      </div>
    </>
  )
}

export default Home
