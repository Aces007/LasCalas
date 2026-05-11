import NavHead from "../reusables/NavHead";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-fade';

const Hero = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
        //--CONTAINERS--//
        const hero_cont = "relative w-full overflow-hidden pb-24";
        const hero_bg = "absolute inset-0 z-0";
        const hero_content = "relative z-10 flex flex-col items-center justify-between gap-12 min-screen";
        const hero_display_cont = "flex flex-col items-center resSm:gap-[16px] resSm:mt-[80px] resMd:gap-[32px] resMd:mt-[80px]";

        //--TEXTS--//    
        const hero_display_h1 = "font-Libre uppercase text-background_lightTxt resSm:text-[40px] resMd:text-[120px] resLg:text-[160px]";
        const hero_display_h2 = "font-Montserrat uppercase font-Regular text-background_lightTxt relative top-[-24px] resSm:text-[24px] resMd:text-[50px] resLg:text-[64px]";
        const hero_display_h3_cont = "flex flex-col items-center";
        const hero_display_h3 = "font-Libre font-Regular text-background_lightTxt tracking-[5%] resSm:text-[16px] resMd:text-[24px] resLg:text-[32px]";
        const hero_about_us_btn = "flex flex-col items-center gap-[8px] font-Montserrat text-background_lightTxt font-bold tracking-[5%] hover:text-highlight resSm:text-[18px] resMd:text-[24px] resLg:text-[32px]";


    // Animation variants (initial, animate, and exit) for the header component
    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const heroImages = Array.from({ length: 15 }, (_, i) => ({
        src: `/lascalas_assets/Website/Slideshows/Hero_Slideshow/${i + 1}.webp`
    }));

    return (
        <motion.div 
            className={hero_cont}
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >

            <div className={hero_bg}>
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    speed={5000}
                    autoplay={{delay:1500, disableOnInteraction:false}}
                    loop={true}
                    className="h-[full] resSm:h-[100%] w-full"
                >
                    {heroImages.map((image, index) => (
                        <SwiperSlide key={index}>
                            {/* Overlay to ensure text stays readable */}
                            <div className="absolute inset-0 bg-black/30 z-10" />
                            <img 
                                src={image.src} 
                                className="w-full h-full object-cover" 
                                alt="Resort Preview" 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="relative z-45">
                <NavHead theme="light" />
            </div>

            <div className={hero_content}>

                <div className={hero_display_cont}>
                    <h1 className={hero_display_h1}>Lascalas</h1>
                    <h2 className={hero_display_h2}>Resort And Luxury State</h2>
                    <div className={hero_display_h3_cont}>
                        <h3 className={hero_display_h3}>Indulge in <span className="text-highlight font-[700]">Serenity</span></h3>
                        <h3 className={hero_display_h3}>Discover Your Sanctuary of <span className="text-highlight font-[700]">Luxury</span></h3>
                    </div>
                </div>

                <div>
                    <Link to="/about" className={hero_about_us_btn}>About Us <FaAngleDown size={24}/></Link>
                </div>
            </div>
        </motion.div>
    )
}


export default Hero;