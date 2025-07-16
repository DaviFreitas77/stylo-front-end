import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"

export default function SliderBanner() {
    return (
        <Carousel
            opts={{
                align: 'center'
            }}
            className="w-full">
            <CarouselContent>
                <CarouselItem className="sm:hidden"><img src="img/bannermobile.png" alt="" /></CarouselItem>
                <CarouselItem className="hidden sm:block"><img src="img/banner2.png" alt="" /></CarouselItem>
                <CarouselItem className="hidden sm:block"><img src="img/capa.jpeg" alt="" /></CarouselItem>
                <CarouselItem className="hidden sm:block"><img src="img/capa.jpeg" alt="" /></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            {/* <CarouselNext /> */}
        </Carousel>

    )
}