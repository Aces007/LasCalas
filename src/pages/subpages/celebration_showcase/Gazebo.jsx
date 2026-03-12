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
            name: "Wedding Reception",
            description: "An intimate, elegant gazebo venue beside our grand event tent, the perfect blend of charm and romance for your ceremony.",
            model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gazebo/menu_data/1.jpg",
        },
        {
            id: 2,
            name: "Custom Packages",
            description: "Design your dream event with our customizable packages. Whether it's a corporate gathering, birthday, or any special occasion, we tailor every detail to your needs.",
            model_image: "/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gazebo/menu_data/2.jpg",
        },
    ]
    
    const preview_images = [...Array(5)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Celebrations/EventSpacePreviews/Gazebo/${i + 1}.jpg`
    );
    

    // -- STYLING -- //
    const space_name = "font-Raleway font-semibold text-event_dets_name";
    const space_price = "font-Raleway font-semibold text-event_dets_price text-secondary/60";

    const gazeBo_grid_cont = "grid grid-cols-2 gap-12 items-start w-full max-w-6xl px-6 my-[80px]";
    const gazeBoCard_grid_cont = "grid grid-cols-2 gap-[8px] items-stretch";
    const gazeBo_tagline = "font-Raleway font-bold text-atv_tagline text-main_text/60 tracking-tight uppercase";

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

                <div className={`${gazeBo_grid_cont}`}>
                    <div className={`${gazeBoCard_grid_cont}`}>
                        {menu_data.slice(0,2).map((gazeBo) => (
                            <GazeboCard key={gazeBo.id} gazeBo={gazeBo} />
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

const GazeboCard = ({ gazeBo }) => {
    const gazeBoCard_cont  = "flex flex-col items-center h-full gap-[8px] bg-main_text/60 p-6 rounded-[12px] hover:scale-105 hover:bg-highlight hover:transition-all"
    const gazeBoCard_name = "font-Nunito font-[700] text-background_lightTxt text-events_h3 hover:font-[800] hover:cursor-pointer";
    const gazeBoCard_desc = "font-Nunito font-[400] text-background_lightTxt text-events_dets text-center";
    
    return (
        <div className="h-full">
            <div className={`${gazeBoCard_cont}`}>
                <img src={gazeBo.model_image} alt={gazeBo.name} className="w-[160px] h-[160px] aspect-square object-cover rounded-md" />
                <h3 className={`${gazeBoCard_name}`}>{gazeBo.name}</h3>
                <p className={`${gazeBoCard_desc}`}>{gazeBo.description}</p>
            </div>
        </div>
    )
};

export default Gazebo;