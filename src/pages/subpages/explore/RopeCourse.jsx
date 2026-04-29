import { Swiper, SwiperSlide } from "swiper/react"; 
import { Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";

const RopeCourse = () => {
    const preview_images = [...Array(8)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/Rope${i + 1}.webp`
    );


    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    // -- STYLING -- //
    const explore_name = "font-Raleway font-semibold text-[48px] resSm:text-[32px] resMd:text-[42px]";
    const explore_subhead = "font-Raleway font-semibold text-secondary/60 text-[24px] resSm:text-[18px] resSm:text-center resMd:text-[22px]";

    const rope_grid_cont = "grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px] resSm:flex resSm:flex-col";
    const rope_tagline = "font-Raleway font-semibold resSm:flex resSm:self-center resSm:text-[20px]";
    const rope_description = "font-Nunito font-regular resSm:text-center";

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

            <div className={`${center_element_col} justify-center resSm:mt-[40px] resMd:mt-[60px]`}>
                <h1 className={`${explore_name}`}>LCR Xtreme Quest</h1>
                <h2 className={`${explore_subhead}`}>The Ultimate Rope & Obstacle Challenge</h2>

                <div className={`${rope_grid_cont}`}>
                    <div className={`${start_element_col} gap-8`}>
                        <h3 className={`${rope_tagline}`}>Conquer the Obstacle Gauntlet</h3>
                        <div className={`${center_element_col} justify-between gap-4`}>
                            <p className={`${rope_description}`}>Conquer our elite Rope and Obstacle Course, originally built by the Philippine Special Forces. Test your strength on high ropes and suspended bridges in an authentic, adrenaline-pumping experience perfect for friends and corporate team building.</p>
                            <p className={`${rope_description}`}>Battlefield-inspired and built for thrill-seekers, our intense Obstacle Course tests your agility, speed, and endurance. From wall climbs to crawling pits, this rugged terrain is the ultimate playground for friends and teams looking to get stronger together.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-[400px] resSm:w-[400px] resSm:h-[300px] resMd:w-[600px]">
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            className="w-[600px] pb-[40px] resSm:w-[400px] resSm:h-[300px] resMd:w-[540px]"
                            navigation
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {preview_images.map((src, index) => (
                                <SwiperSlide key={index} className={`${center_element_col}`}>
                                    <img src={src} className={`${carousel_preview}`} loading="lazy"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )   
}

export default RopeCourse;