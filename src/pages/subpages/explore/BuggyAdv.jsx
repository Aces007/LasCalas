import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";

const BuggyAdv = () => {
    const menu_data = [
    {
        id: 1,
        name: "Kayo Buggy 200cc",
        price: "PHP 2,000 /hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/buggyModels/Pola1.jpg",
    },
    {
        id: 2,
        name: "Sand Buggy 200cc",
        price: "PHP 4,000 /hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/buggyModels/Pola2.jpg",
    },
    {
        id: 3,
        name: "Polaris Turbo XP 1000 cc",
        price: "PHP 15,000 /hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/buggyModels/Pola3.jpg",
    },
    {
        id: 4,
        name: "Polaris RZR XP 4 1000 cc",
        price: "PHP 20,000 /hr",
        model_image: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/buggyModels/Pola4.jpg",
    },
    
    ]

    const preview_images = [...Array(14)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/buggy${i + 1}.jpg`
    );


    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    // -- STYLING -- //
    const explore_name = "font-Raleway font-semibold text-[48px] resSm:text-[28px] resMd:text-[42px]";
    const explore_subhead = "font-Raleway font-semibold text-secondary/60 text-[24px] resSm:text-[18px] resMd:text-[22px]";

    const buggy_grid_cont = "grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px] resSm:flex resSm:flex-col";
    const buggyCard_grid_cont = "grid grid-cols-2 gap-[8px]";
    const buggy_tagline = "font-Raleway font-bold text-main_text/60 tracking-tight uppercase text-[32px] resSm:text-[20px] resMd:text-[26px]";

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
                <h1 className={`${explore_name}`}>Buggy & Polaris Adventure</h1>
                <h2 className={`${explore_subhead}`}>Built for Every Landscape</h2>

                <div className={`${buggy_grid_cont}`}>
                    <div className={`${buggyCard_grid_cont}`}>
                        {menu_data.slice(0,2).map((buggy) => (
                            <BuggyCard key={buggy.id} buggy={buggy} />
                        ))}
                        <div className={`${justcenter_element_row} col-span-2 py-6`}>
                            <h1 className={`${buggy_tagline}`}>
                                Choose Your Adventure
                            </h1>
                        </div>
                        {menu_data.slice(2,4).map((buggy) => (
                            <BuggyCard key={buggy.id} buggy={buggy} />
                        ))}
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

const BuggyCard = ({ buggy }) => {
    const buggyCard_cont  = "flex flex-col items-center justify-evenly gap-[8px] bg-main_text/60 p-6 rounded-[16px] h-full hover:scale-105 hover:bg-highlight hover:transition-all"
    const buggyCard_name = "font-Raleway font-[400] text-background_lightTxt text-[14px] resSm:text-[14px] resSm:text-center";
    const buggyCard_price = "font-Nunito font-[800] text-background_lightTxt text-[20px] resSm:text-[18px] resSm:text-center";

    return (
        <div>
            <div className={`${buggyCard_cont}`}>
                <img src={buggy.model_image} alt={buggy.name} className="w-[160px]" />
                <h3 className={`${buggyCard_name}`}>{buggy.name}</h3>
                <p className={`${buggyCard_price}`}>{buggy.price}</p>
            </div>
        </div>
    )
};

export default BuggyAdv;