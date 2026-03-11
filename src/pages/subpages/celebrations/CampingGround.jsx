import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";


const CampingGround = () => {
    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const menu_data = [
    {
        id: 1,
        name: "Romantic Dates",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Teepee/menu_data/1.jpg",
    },
    {
        id: 2,
        name: "Bonfire Gatherings",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Teepee/menu_data/2.jpg",
    },
    {
        id: 3,
        name: "Campsite Dinner",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Teepee/menu_data/3.jpg",
    },
    {
        id: 4,
        name: "Sunset Views",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Teepee/menu_data/4.jpg",
    },
   
    ]
    
    const preview_images = [...Array(5)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Teepee/${i + 1}.jpg`
    );
    

    // -- STYLING -- //
    const space_name = "font-Raleway font-semibold text-package_details_name";
    const space_price = "font-Raleway font-semibold text-package_details_price text-secondary/60";

    const camp_grid_cont = "grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px]";
    const campCard_grid_cont = "grid grid-cols-2 gap-[8px] items-stretch";
    const camp_tagline = "font-Raleway font-bold text-atv_tagline text-main_text/60 tracking-tight uppercase";

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

            <div className={`${center_element_col} justify-center`}>
                <h1 className={`${space_name}`}>Camping Grounds</h1>
                <h2 className={`${space_price}`}>Offered alongside Teepee Tents</h2>

                <div className={`${camp_grid_cont}`}>
                    <div className={`${campCard_grid_cont}`}>
                        {menu_data.slice(0,2).map((camp) => (
                            <CampingCard key={camp.id} camp={camp} />
                        ))}
                        <div className={`col-span-2 ${justcenter_element_row} py-6`}>
                            <h1 className={`${camp_tagline}`}>
                                Activities & Experiences
                            </h1>
                        </div>
                        {menu_data.slice(2,4).map((camp) => (
                            <CampingCard key={camp.id} camp={camp} />
                        ))}
                    </div>
                    
                    <div className="w-full max-w-[400px]">
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}
                            modules={[Navigation, Autoplay]}
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
            </div>

        </motion.div>
    )
}

const CampingCard = ({ camp }) => {
    const campCard_cont  = "flex flex-col items-center h-full gap-[8px] bg-main_text/60 p-6 rounded-[12px] hover:scale-105 hover:bg-highlight hover:transition-all"
    const campCard_name = "font-Nunito font-[800] text-background_lightTxt text-camp_details_price";
    
    return (
        <div className="h-full">
            <div className={`${campCard_cont}`}>
                <img src={camp.model_image} alt={camp.name} className="w-[160px]" />
                <h3 className={`${campCard_name}`}>{camp.name}</h3>
            </div>
        </div>
    )
};

export default CampingGround;

