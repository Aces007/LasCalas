import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";


const WaterAdv = () => {
    const menu_data = [
    {
        id: 1,
        name: "Jetski Seadoo Spark",
        price: "PHP 8,000.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq1.webp",
    },
    {
        id: 2,
        name: "Jetski Seadoo GTX Pro",
        price: "PHP 10,000.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq2.webp",
    },
    {
        id: 3,
        name: "Sportyak",
        price: "PHP 1,500.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq3.webp",
    },
    {
        id: 4,
        name: "Crystal Kayak",
        price: "PHP 1,500.00 / 30m",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq4.webp",
    },
    {
        id: 5,
        name: "Banana Boat",
        price: "PHP 4,000.00 / 30m",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq5.webp",
    },
    {
        id: 6,
        name: "Pedal Bike",
        price: "Free upon check-in",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq6.webp",
    },
    {
        id: 7,
        name: "Standard Kayak",
        price: "Free upon check-in",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq7.webp",
    },
    
    ]

    const preview_images = [...Array(10)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/water${i + 1}.webp`
    );


    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    // -- STYLING -- //
    const explore_name = "font-Raleway font-semibold text-[48px] resSm:text-[28px] resMd:text-[42px]";
    const explore_subhead = "font-Raleway font-semibold text-secondary/60 text-[24px] resSm:text-[18px] resMd:text-[22px]";

    const water_grid_cont = "grid grid-cols-2 gap-10 resMd:gap-[4px] items-center w-full max-w-6xl px-6 my-[80px]  resSm:flex resSm:flex-col";

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

            <div className={`${center_element_col} justify-center  resSm:mt-[40px] resMd:mt-[60px]`}>
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


                    <div className="w-full max-w-[400px] resSm:w-[500px] resMd:w-[600px]">
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}
                            modules={[ Navigation, Autoplay]}
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

const WaterCard = ({ water }) => {
    const waterCard_cont  = "flex flex-col items-center gap-[8px] bg-main_text/60 p-6 rounded-[16px] hover:scale-105 hover:bg-highlight hover:transition-all"
    const waterCard_name = "font-Raleway font-[400] text-background_lightTxt text-[14px] resSm:text-[14px] resSm:text-center resMd:text-[18px]";
    const waterCard_price = "font-Nunito font-[800] text-background_lightTxt text-[20px] resSm:text-[16px] resMd:text-[22px]";

    return (
        <div>
            <div className={`${waterCard_cont}`}>
                <img src={water.model_image} alt={water.name} className="w-[250px] h-[180px]" />
                <h3 className={`${waterCard_name}`}>{water.name}</h3>
                <p className={`${waterCard_price}`}>{water.price}</p>
            </div>
        </div>
    )
};

export default WaterAdv;