import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination, Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";


const WaterAdv = () => {
    const menu_data = [
    {
        id: 1,
        name: "Jetski Seadoo Spark",
        price: "PHP 8,000.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq1.jpg",
    },
    {
        id: 2,
        name: "Jetski Seadoo GTX Pro",
        price: "PHP 10,000.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq2.jpg",
    },
    {
        id: 3,
        name: "Sportyak",
        price: "PHP 1,500.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq3.jpg",
    },
    {
        id: 4,
        name: "Crystal Kayak",
        price: "PHP 1,500.00 / 30m",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq4.jpg",
    },
    {
        id: 5,
        name: "Banana Boat",
        price: "PHP 4,000.00 / 30m",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq5.jpg",
    },
    {
        id: 6,
        name: "Pedal Bike",
        price: "Free upon check-in",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq6.jpg",
    },
    {
        id: 7,
        name: "Standard Kayak",
        price: "Free upon check-in",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq7.jpg",
    },
    
    ]

    const preview_images = [...Array(10)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/water${i + 1}.jpeg`
    );


    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    // -- STYLING -- //
    const explore_name = "font-Raleway font-semibold text-package_details_name";
    const explore_subhead = "font-Raleway font-semibold text-package_details_price text-secondary/60";

    const water_grid_cont = "grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px]";

    const carousel_preview = "h-[400px] overflow-hidden rounded-md hover:cursor-pointer";

    // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const between_element_row = "flex justify-between";



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
                <h1 className={`${explore_name}`}>Water Adventure</h1>
                <h2 className={`${explore_subhead}`}>Dive into the deep blue</h2>

                <div className={`${water_grid_cont}`}>
                    <div className={`w-full max-w-[600px] ${center_element_col}`}>
                        <p className="font-Nunito text-main_text/60">Drag to view the variations</p>
                        <Swiper
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={1}
                                loop={true}
                                modules={[Autoplay]}
                                className="w-[300px] pb-[40px]"
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                            >
                                {menu_data.map((water) => (
                                    <SwiperSlide key={water.id} className="h-auto flex">
                                        <WaterCard water={water} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                    </div>


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
            </div>
        </motion.div>
    )   
}

const WaterCard = ({ water }) => {
    const waterCard_cont  = "flex flex-col items-center gap-[8px] bg-main_text/60 p-6 rounded-[16px] hover:scale-105 hover:bg-highlight hover:transition-all"
    const waterCard_name = "font-Raleway font-[400] text-background_lightTxt text-water_details_name";
    const waterCard_price = "font-Nunito font-[800] text-background_lightTxt text-water_details_price";

    return (
        <div>
            <div className={`${waterCard_cont}`}>
                <img src={water.model_image} alt={water.name} className="w-[250px]" />
                <h3 className={`${waterCard_name}`}>{water.name}</h3>
                <p className={`${waterCard_price}`}>{water.price}</p>
            </div>
        </div>
    )
};

export default WaterAdv;