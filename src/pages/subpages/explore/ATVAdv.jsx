import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination, Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";

const ATVAdv = () => {
    const menu_data = [
    {
        id: 1,
        name: "ATV Scorpion 150 cc",
        price: "PHP 1,000.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/atvModels/1.png",
    },
    {
        id: 2,
        name: "ATV Mseries 210 cc",
        price: "PHP 1,500.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/atvModels/2.png",
    },
    {
        id: 3,
        name: "ATV TGB Target/Blade 600 cc",
        price: "PHP 2,000.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/atvModels/3.png",
    },
    {
        id: 4,
        name: "ATV TGB Target/Blade 1000 cc",
        price: "PHP 4,000.00 / hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/atvModels/4.png",
    },
    
    ]

    const preview_images = [...Array(6)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/atv${i + 1}.jpg`
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
                <h1 className="font-Raleway font-semibold text-package_details_name">ATV Adventure</h1>
                <h2 className="font-Raleway font-semibold text-package_details_price text-secondary/60">Built for Every Landscape</h2>

                <div className="grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px]">
                    <div className="grid grid-cols-2 gap-[8px]">
                        {menu_data.slice(0,2).map((atv) => (
                            <ATVCard key={atv.id} atv={atv} />
                        ))}
                        <div className="col-span-2 flex justify-center py-6">
                            <h1 className="text-[24px] font-bold text-[#666] tracking-tight uppercase">
                                Choose Your Adventure
                            </h1>
                        </div>
                        {menu_data.slice(2,4).map((atv) => (
                            <ATVCard key={atv.id} atv={atv} />
                        ))}
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

const ATVCard = ({ atv }) => (
    <div>
        <div className="flex flex-col items-center gap-[8px] bg-main_text/60 p-6 rounded-[16px] hover:scale-105 hover:bg-highlight hover:transition-all">
            <img src={atv.model_image} alt={atv.name} className="w-[160px]" />
            <h3 className="font-Raleway font-[400] text-background_lightTxt text-atv_details_name">{atv.name}</h3>
            <p className="font-Nunito font-[800] text-background_lightTxt text-atv_details_price">{atv.price}</p>
        </div>
    </div>
);

export default ATVAdv;