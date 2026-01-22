import NavHead from "../reusables/NavHead";
import { motion } from "framer-motion";
import { FaAngleDown } from "react-icons/fa6";

const Hero = () => {
    // Styling Variables
    const hero_cont = "hero_cont bg-[url('/lascalas_assets/Hero.png')] bg-cover bg-center bg-no-repeat min-h-screen";
    const hero_content = "flex flex-col items-center justify-center gap-[120px]";
    const hero_display_cont = "flex flex-col items-center"


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
                    <h1 className="font-AnticDidone uppercase text-[160px] text-background_lightTxt">Lascalas</h1>
                    <h2 className="font-Montserrat uppercase font-Regular text-[56px] text-background_lightTxt relative top-[-24px]">Resort And Luxury State</h2>
                    <div className="flex flex-col items-center">
                        <h3 className="font-Libre font-Regular text-[24px] text-background_lightTxt">Indulge in <span className="text-highlight">Serenity</span></h3>
                        <h3 className="font-Libre font-Regular text-[24px] text-background_lightTxt">Discover Your Sanctuary of <span className="text-highlight">Luxury</span></h3>
                    </div>
                </div>

                <div>
                    <button className="flex flex-col items-center gap-[8px] font-Montserrat text-background_lightTxt font-bold text-[24px] tracking-[5%]">About Us <FaAngleDown size={24} className=""/></button>
                </div>
            </div>
        </motion.div>
    )
}


export default Hero;