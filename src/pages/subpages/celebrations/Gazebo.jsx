import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";


const Gazebo = () => {
    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const menu_data = [
    {
        id: 1,
        name: "Pool Party",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gaming_Pool/menu_data/1.jpg",
    },
    {
        id: 2,
        name: "Arcade Fun",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gaming_Pool/menu_data/2.jpg",
    },
    {
        id: 3,
        name: "Exclusive Dining",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gaming_Pool/menu_data/3.jpg",
    },
    {
        id: 4,
        name: "Billiard Games",
        model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gaming_Pool/menu_data/4.jpg",
    },
    
    ]
    
    const preview_images = [...Array(5)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gazebo/${i + 1}.jpg`
    );
    

    // -- STYLING -- //
    const space_name = "font-Raleway font-semibold text-package_details_name";
    const space_price = "font-Raleway font-semibold text-package_details_price text-secondary/60";

    const gamPool_grid_cont = "grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px]";
    const gamPoolCard_grid_cont = "grid grid-cols-2 gap-[8px] items-stretch";
    const gamPool_tagline = "font-Raleway font-bold text-atv_tagline text-main_text/60 tracking-tight uppercase";

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
                <h1 className={`${space_name}`}>Gazebo</h1>
                <h2 className={`${space_price}`}>Starting at PHP 30,000 for duration of 2 hours exclusive use</h2>

                <div className={`${gamPool_grid_cont}`}>
                    <div className={`${gamPoolCard_grid_cont}`}>
                        {menu_data.slice(0,2).map((gamPool) => (
                            <GamingPoolCard key={gamPool.id} gamPool={gamPool} />
                        ))}
                        <div className={`col-span-2 ${justcenter_element_row} py-6`}>
                            <h1 className={`${gamPool_tagline}`}>
                                Events We Cater For
                            </h1>
                        </div>
                        {menu_data.slice(2,4).map((gamPool) => (
                            <GamingPoolCard key={gamPool.id} gamPool={gamPool} />
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

const GamingPoolCard = ({ gamPool }) => {
    const gamPoolCard_cont  = "flex flex-col items-center h-full gap-[8px] bg-main_text/60 p-6 rounded-[12px] hover:scale-105 hover:bg-highlight hover:transition-all"
    const gamPoolCard_name = "font-Nunito font-[800] text-background_lightTxt text-gamPool_details_price";
    
    return (
        <div className="h-full">
            <div className={`${gamPoolCard_cont}`}>
                <img src={gamPool.model_image} alt={gamPool.name} className="w-[160px]" />
                <h3 className={`${gamPoolCard_name}`}>{gamPool.name}</h3>
            </div>
        </div>
    )
};

export default Gazebo;

