import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import { menu_data } from "./packages_data";
import { div } from "framer-motion/m";


const PackagesMenu = () => {
    // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const between_element_row = "flex justify-between";

    

    return (
        <div className={`${center_element_col} justify-center`}>
            <div className="grid grid-cols-2">
                {menu_data.map((item) => (
                    <div>
                        
                    </div>
                ))}
            </div>
        </div>
    )
}