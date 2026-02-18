import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination, Navigation, Autoplay } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import NavHead from "../../../reusables/NavHead";

const RopeCourse = () => {
    const preview_images = [...Array(8)].map((_, i) => 
        `/lascalas_assets/Website/MainPages_Content/Explore/Activities/activities/Rope${i + 1}.jpg`
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
                <h1 className="font-Raleway font-semibold text-package_details_name">LCR Xtreme Quest</h1>
                <h2 className="font-Raleway font-semibold text-package_details_price text-secondary/60">The Ultimate Rope & Obstacle Course Challenge at LasCalas</h2>

                <div className="grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px]">
                    <div className="flex flex-col items-start gap-8">
                        <h3 className="font-Raleway font-semibold text-package_details_price text-rope_description_head">Conquer the Obstacle Gauntlet</h3>
                        <div className="flex flex-col items-start justify-betwee gap-4">
                            <p className="font-Nunito font-regular text-rope_description_text">Conquer our elite Rope and Obstacle Course, originally built by the Philippine Special Forces. Test your strength on high ropes and suspended bridges in an authentic, adrenaline-pumping experience perfect for friends and corporate team building.</p>
                            <p className="font-Nunito font-regular text-rope_description_text">Battlefield-inspired and built for thrill-seekers, our intense Obstacle Course tests your agility, speed, and endurance. From wall climbs to crawling pits, this rugged terrain is the ultimate playground for friends and teams looking to get stronger together.</p>
                        </div>
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

export default RopeCourse;