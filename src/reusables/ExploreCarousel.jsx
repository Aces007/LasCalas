import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import Moments1 from "/public/lascalas_assets/Website/About/Moments1.png"
import Moments2 from "/public/lascalas_assets/Website/About/Moments2.png"
import Moments3 from "/public/lascalas_assets/Website/About/Moments3.png"
import Moments4 from "/public/lascalas_assets/Website/About/Moments4.png"
import Moments5 from "/public/lascalas_assets/Website/About/Moments5.png"


import 'swiper/css';
import 'swiper/css/navigation';

const ExploreCarousel = ( { data, title} ) => {

    const exploreDasol_assets = [
        { id: 1, src: Moments1, label: "Beach Pergola" },
        { id: 2, src: Moments2, label: "Beach Pergola" },
        { id: 3, src: Moments3, label: "Beach Pergola" },
        { id: 4, src: Moments4, label: "Beach Pergola" },
        { id: 5, src: Moments5, label: "Beach Pergola" },

    ]


    return (
        <div>
            <Swiper
                modules={[Navigation]}
                navigation={true}
                spaceBetween={20}
                slidesPerView={5}
                // Add Here Other Screen Sizes LIKE THIS 640: { slidesPerView: 2 },  // Tablet 1024: { slidesPerView: 5 }, // Desktop
                breakpoints=""
            >
                {exploreDasol_assets.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div key={item.id} className="flex flex-col items-center gap-[8px]"> 
                                    
                            <div className="aspect-square overflow-hidden rounded-[16px] hover:scale-110"> 
                                <img src={item.src} alt={item.label} />
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