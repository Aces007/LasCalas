import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";


const EventPavilion = () => {
    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const menu_data = [
    {
        id: 1,
        name: "Wedding Reception",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Event_Pavilion/menu_data/1.jpg",
    },
    {
        id: 2,
        name: "Corporate Gatherings",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Event_Pavilion/menu_data/2.jpg",
    },
    {
        id: 3,
        name: "Birthday Celebrations",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Event_Pavilion/menu_data/3.jpg",
    },
    {
        id: 4,
        name: "Debut Celebrations",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Event_Pavilion/menu_data/4.jpg",
    },
    
    ]
    
    const preview_images = [...Array(6)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Event_Pavilion/${i + 1}.jpg`
    );
    

    // -- STYLING -- //
    const space_name = "font-Raleway font-semibold text-[48px] resSm:text-[28px] resMd:text-[42px]";
    const space_price = "font-Raleway font-semibold text-secondary/60 text-[24px] resSm:text-[18px] resMd:text-[22px]";

    const pav_grid_cont = "grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px] resSm:flex resSm:flex-col";
    const pavCard_grid_cont = "grid grid-cols-2 gap-[8px] items-stretch";
    const pav_tagline = "font-Raleway font-bold text-main_text/60 tracking-tight uppercase text-[32px] resSm:text-[20px] resMd:text-[26px]";

    const carousel_preview = "h-[400px] overflow-hidden rounded-md hover:cursor-pointer";

    // -- FLEX STYLING -- //
    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";
    const justween_element_row = "flex justify-between";
    const justcenter_element_row = "flex justify-center";


    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <NavHead theme="dark" />

            <div className={`${center_element_col} justify-center resSm:mt-[40px] resMd:mt-[60px]`}>
                <h1 className={`${space_name}`}>Event Pavilion</h1>
                <h2 className={`${space_price}`}>Starting at PHP 150,000 for exclusive use</h2>

                <div className={`${pav_grid_cont}`}>
                    <div className={`${pavCard_grid_cont}`}>
                        {menu_data.slice(0,2).map((pav) => (
                            <PavilionCard key={pav.id} pav={pav} />
                        ))}
                        <div className={`col-span-2 ${justcenter_element_row} py-6`}>
                            <h1 className={`${pav_tagline}`}>
                                Events We Cater For
                            </h1>
                        </div>
                        {menu_data.slice(2,4).map((pav) => (
                            <PavilionCard key={pav.id} pav={pav} />
                        ))}
                    </div>
                    
                    <div className="w-full max-w-[400px] resSm:w-[500px] resMd:w-[600px]">
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            className="w-[600px] pb-[40px] resSm:w-[400px] resMd:w-[540px]"
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
            </div>

        </motion.div>
    )
}

const PavilionCard = ({ pav }) => {
    const pavilionCard_cont  = "flex flex-col items-center h-full gap-[8px] bg-main_text/60 p-6 rounded-[12px] hover:scale-105 hover:bg-highlight hover:transition-all"
    const pavilionCard_name = "font-Nunito font-[600] text-background_lightTxt text-[18px] resSm:text-[14px] resSm:text-center";
    
    return (
        <div className="h-full">
            <div className={`${pavilionCard_cont}`}>
                <img src={pav.model_image} alt={pav.name} className="w-[160px]" />
                <h3 className={`${pavilionCard_name}`}>{pav.name}</h3>
            </div>
        </div>
    )
};

export default EventPavilion;

