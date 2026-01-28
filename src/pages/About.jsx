import { motion } from "framer-motion";

import NavHead from "../reusables/NavHead";

const About = () => {

    const moments_assets = [
        { id: 1, src: "/lascalas_assets/Website/About/Moments1.png", label: "Beach Pergola" },
        { id: 2, src: "/lascalas_assets/Website/About/Moments2.png", label: "La Cueva" },
        { id: 1, src: "/lascalas_assets/Website/About/Moments3.png", label: "La Batanes" },
        { id: 1, src: "/lascalas_assets/Website/About/Moments4.png", label: "Event Pavilion" },
        { id: 1, src: "/lascalas_assets/Website/About/Moments5.png", label: "Polaris" },
    ]

    // Styling Variables
    const About_Cont = "grid grid-cols-[1fr_2fr_1fr] min-h-[600px] w-full items-stretch pb-12";

    const Moments_cont = "grid grid-cols-5 gap-4";

    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };


    return (
        <motion.div
            className=""
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <NavHead theme="dark" />
            
            <div className={About_Cont}>
                <div>
                    <img src="/lascalas_assets/Website/About/About1.png" alt="About Image 1" />
                </div>

                <div className="flex flex-col gap-[24px] p-[16px]">
                    <div className="flex flex-col items-center gap-[16px]">
                        <h1 className="font-Raleway font-semibold text-[40px]">Our Story</h1>
                        <p className="font-nunito text-[20px] text-main_text/70 text-center">Experience elevated luxury at <span className="text-primary">LasCalas</span>, an exclusive sanctuary in Dasol. Designed as a haven for special children and their families, we blend modern amenities with nature for a truly unforgettable escape.
                           <br /><br />Our vision is to curate an extraordinary sanctuary where luxury meets nature. We blend world-class comfort with eco-conscious adventure to create deeply personalized experiences for every guest.
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="border-main_text/60 border-b-2"></div> 

                    <div className="flex flex-col items-center gap-[16px]">
                        <h2 className="font-Raleway font-semibold text-[28px] text-main_text/60">Moments Await</h2>
                        <div className={Moments_cont}>

                            {moments_assets.map((item) => (
                                <div key={item.id} className="flex flex-col items-center gap-[8px]"> 
                                    
                                    <div className="aspect-square overflow-hidden rounded-[16px] hover:scale-110"> 
                                        <img src={item.src} alt={item.label} />
                                    </div> 
                                    
                                    <span className="font-Raleway text-main_text text-[16px] font-[400] hover:font-[600]">
                                        {item.label}
                                    </span>

                                </div> 
                            ))}

                        </div>
                    </div>
                </div>

                <div>
                    <img src="/lascalas_assets/Website/About/About2.png" alt="About Image 2" />
                </div>
            </div>

        </motion.div>
    )
}


export default About;