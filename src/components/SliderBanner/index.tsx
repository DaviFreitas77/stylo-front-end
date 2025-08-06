import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function SliderBanner() {
    
    return (
        <Carousel
            opts={{
                align: 'start',
                
            }}
             plugins={[
                Autoplay({ delay: 5000 })
            ]}
            className="w-full">
            <CarouselContent>
                <CarouselItem className="sm:hidden"><img src="/img/bannermobile.png" alt="" /></CarouselItem>


                <CarouselItem className="hidden sm:block"><img src="/img/banner2.png" alt="" /></CarouselItem>
                <CarouselItem className="hidden sm:block"><img src="/img/capa.jpeg" alt="" /></CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious  className="absolute left-2"/>
            <CarouselNext  className="absolute  right-2"/> */}
        </Carousel>

    )
}