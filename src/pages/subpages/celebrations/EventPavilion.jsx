import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination, Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";


const EventPavilion = () => {
    const menu_data = [
        {
            id: 1,
            name: "ATV Scorpion 150 cc",
            price: "PHP 1,000.00 / hr",
            model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/atvModels/1.png",
        },
        {
            id: 2,
            name: "",
            price: "PHP 1,000.00 / hr",
            model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/atvModels/1.png",
        },
        {

        },
    ]

    const preview_images = [...Array(6)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/atv${i + 1}.jpg`
    );

    return (
        <div>
            


             <div className="w-full max-w-[400px]">
                <Swiper
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    pagination
                    modules={[Pagination, Navigation, Autoplay]}
                    className="w-[600px] pb-[40px]"
                    navigation
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >
                    {preview_images.map((src, index) => (
                        <SwiperSlide key={index} className={`${center_element_col}`}>
                            <img src={src} className={`${carousel_preview}`}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default EventPavilion;