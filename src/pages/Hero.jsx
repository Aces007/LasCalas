import NavHead from "../reusables/NavHead";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
        //--CONTAINERS--//
        const hero_cont = "hero_cont bg-[url('/lascalas_assets/Hero.png')] bg-cover bg-center bg-no-repeat pb-24 resSm:min-h-[100px]";
        const hero_content = "flex flex-col items-center justify-center gap-[120px]";
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

    return (
        <motion.div 
            className={hero_cont}
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <NavHead theme="light" />

            <div className={hero_content}>
                <div className={hero_display_cont}>
                    <h1 className={hero_display_h1}>Lascalas</h1>
                    <h2 className={hero_display_h2}>Resort And Luxury State</h2>
                    <div className={hero_display_h3_cont}>
                        <h3 className={hero_display_h3}>Indulge in <span className="text-highlight">Serenity</span></h3>
                        <h3 className={hero_display_h3}>Discover Your Sanctuary of <span className="text-highlight">Luxury</span></h3>
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