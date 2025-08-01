import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import Card from '../Card'

type Product = {
    id: number
    name: string
    image: string
    price: string | number;
    lastPrice: string | number;
}

type CardSliderProps = {
    products: Product[]
}

export default function CardSlider({ products }: CardSliderProps) {

    return (
        <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={10}
            pagination
            breakpoints={{
                0: { slidesPerView: 2 },
                640: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 4 },
            }}
            autoplay
            className="w-[100%]"
        >
            {products.map(product => (
                <SwiperSlide key={product.id} className="flex justify-center">
                    <Card
                        id={product.id}
                        name={product.name}
                        image={product.image}
                        price={Number(product.price)}
                        lastPrice={Number(product.lastPrice)}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}
