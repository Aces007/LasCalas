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
        price: "PHP 1,500.00 / 30mins",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/waterEqModels/waterEq4.jpg",
    },
    {
        id: 5,
        name: "Banana Boat",
        price: "PHP 4,000.00 / 30mins",
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

    const preview_images = [...Array(5)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/water${i + 1}.jpeg`
    );


    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

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
                <h1 className="font-Raleway font-semibold text-package_details_name">Water Adventure</h1>
                <h2 className="font-Raleway font-semibold text-package_details_price text-secondary/60">Dive into the deep blue</h2>

                <div className="grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px]">
                    <div className="w-full max-w-[600px]">
                        <Swiper
                                grabCursor={true}
                                centeredSlides={true}
                                slidesPerView={1}
                                loop={true}
                                pagination
                                modules={[Pagination, Navigation, Autoplay]}
                                className="w-[300px] pb-[40px]"
                                navigation
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
                                <SwiperSlide key={index} className="flex flex-col items-center">
                                    <img src={src} className="h-[400px] overflow-hidden rounded-md hover:cursor-pointer"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )   
}

const WaterCard = ({ water }) => (
    <div>
        <div className="flex flex-col items-center justify-evenly gap-[8px] bg-main_text/60 p-6 rounded-[16px] h-full hover:scale-105 hover:bg-highlight hover:transition-all">
            <img src={water.model_image} alt={water.name} className="w-[250px]" />
            <h3 className="font-Raleway font-[400] text-background_lightTxt text-water_details_name">{water.name}</h3>
            <p className="font-Nunito font-[800] text-background_lightTxt text-water_details_price">{water.price}</p>
        </div>
    </div>
);

export default WaterAdv;