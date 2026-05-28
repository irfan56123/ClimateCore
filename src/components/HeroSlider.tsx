"use client";

import Slider from "react-slick";
import Image from "next/image";

const images = [
    "/heroworker.PNG",

];

export default function HeroSlider() {

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true
    };

    return (
        <div className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px]">
            <Slider {...settings}>
                {images.map((img, i) => (
                    <div key={i} className="relative w-full h-[280px] sm:h-[350px] lg:h-[420px]">
                        <Image
                            src={img}
                            alt="HVAC Service"
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}