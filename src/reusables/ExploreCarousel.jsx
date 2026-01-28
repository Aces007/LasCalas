
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';

const ExploreCarousel = ( { data, title} ) => {

    const exploreDasol_assets = [
        { id: 1, src: "/lascalas_assets/Website/Dasol/Dasol1.png", label: "Beach Pergola" },
        { id: 2, src: "/lascalas_assets/Website/Dasol/Dasol2.png", label: "Beach Pergola" },
        { id: 3, src: "/lascalas_assets/Website/Dasol/Dasol3.png", label: "Beach Pergola" },
        { id: 4, src: "/lascalas_assets/Website/Dasol/Dasol4.png", label: "Beach Pergola" },
        { id: 5, src: "/lascalas_assets/Website/Dasol/Dasol5.png", label: "Beach Pergola" },

    ]


    return (
        <div className="w-[90%] py-8 relative">
            <Swiper
                className="w-full h-[320px]"
                modules={[Navigation]}
                navigation={false}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {exploreDasol_assets.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div key={item.id} className="flex flex-col items-center gap-[8px] group cursor-pointer"> 
                                    
                            <div className="aspect-square overflow-hidden rounded-[16px] hover:scale-105"> 
                                <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div> 
                            
                            <span className="font-Raleway text-main_text text-[16px] font-[400] hover:font-[600]">
                                {item.label}
                            </span>

                        </div> 
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    )
}

export default ExploreCarousel;