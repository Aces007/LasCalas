import NavHead from "../reusables/NavHead";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
    // Styling Variables
    const hero_cont = "hero_cont bg-[url('/lascalas_assets/Hero.png')] bg-cover bg-center bg-no-repeat min-h-screen pb-24";
    const hero_content = "flex flex-col items-center justify-center gap-[120px]";
    const hero_display_cont = "flex flex-col items-center"

        // Display Content    
        const hero_display_h1 = "font-AnticDidone uppercase text-[160px] text-background_lightTxt";
        const hero_display_h2 = "font-Montserrat uppercase font-Regular text-[56px] text-background_lightTxt relative top-[-24px]";
        const hero_display_h3_cont = "flex flex-col items-center";
        const hero_display_h3 = "font-Libre font-Regular text-[24px] text-background_lightTxt";

        const hero_about_us_btn = "flex flex-col items-center gap-[8px] font-Montserrat text-background_lightTxt font-bold text-[24px] tracking-[5%] hover:text-highlight";

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