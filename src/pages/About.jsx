import { motion } from "framer-motion";
import NavHead from "../reusables/NavHead";

const About = () => {
    // -- CONTAINERS -- //
    const about_cont = "grid grid-cols-[1fr_2fr_1fr] min-h-[600px] w-full items-stretch pb-12";
    const main_content_wrapper = "flex flex-col gap-[24px] p-[16px]";
    const section_stack = "flex flex-col items-center gap-[16px]";
    const divider = "border-main_text/60 border-b-2";
    const moments_cont = "grid grid-cols-5 gap-4 resSm:grid-cols-1";
    const moment_item_stack = "flex flex-col items-center gap-[8px]";
    const moment_img_frame = "aspect-square overflow-hidden rounded-[16px] hover:scale-110";

    // -- TEXTS -- //
    const story_h1 = "font-Raleway font-semibold text-[40px] resSm:text-[32px]";
    const story_p = "font-nunito text-[20px] text-main_text/70 text-center resSm:text-[16px]";
    const brand_span = "text-primary";
    const moments_h2 = "font-Raleway font-semibold text-[28px] text-main_text/60 resSm:text-[24px]";
    const moment_label = "font-Raleway text-main_text text-[16px] font-[400] hover:font-[600] resMd:text-[12px]";

    // -- FLEX STYLING -- //
    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";
    const between_element_row = "flex justify-between";

    const moments_assets = [
        { id: 1, src: "/lascalas_assets/Website/About/Moments1.png", label: "Beach Pergola" },
        { id: 2, src: "/lascalas_assets/Website/About/Moments2.png", label: "La Cueva" },
        { id: 3, src: "/lascalas_assets/Website/About/Moments3.png", label: "La Batanes" },
        { id: 4, src: "/lascalas_assets/Website/About/Moments4.png", label: "Event Pavilion" },
        { id: 5, src: "/lascalas_assets/Website/About/Moments5.png", label: "Polaris" },
    ];

    const pageVariants = {
        unmounted: { opacity: 0, y: 20 },
        mounted: { opacity: 1, y: 0 },
        beingUnmounted: { opacity: 0, y: -20 }
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
            
            <div className={about_cont}>
                {/* Left Image */}
                <div>
                    <img src="/lascalas_assets/Website/About/About1.png" alt="About Image 1" className="w-full h-full object-cover" />
                </div>

                {/* Center Content */}
                <div className={main_content_wrapper}>
                    <div className={section_stack}>
                        <h1 className={story_h1}>Our Story</h1>
                        <p className={story_p}>
                            Experience elevated luxury at <span className={brand_span}>LasCalas</span>, an exclusive sanctuary in Dasol. Designed as a haven for special children and their families, we blend modern amenities with nature for a truly unforgettable escape.
                            <br /><br />
                            Our vision is to curate an extraordinary sanctuary where luxury meets nature. We blend world-class comfort with eco-conscious adventure to create deeply personalized experiences for every guest.
                        </p>
                    </div>

                    <div className={divider}></div> 

                    <div className={section_stack}>
                        <h2 className={moments_h2}>Moments Await</h2>
                        <div className={moments_cont}>
                            {moments_assets.map((item) => (
                                <div key={item.id} className={moment_item_stack}> 
                                    <div className={moment_img_frame}> 
                                        <img src={item.src} alt={item.label} className="w-full h-full object-cover" />
                                    </div> 
                                    <span className={moment_label}>
                                        {item.label}
                                    </span>
                                </div> 
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div>
                    <img src="/lascalas_assets/Website/About/About2.png" alt="About Image 2" className="w-full h-full object-cover" />
                </div>
            </div>
        </motion.div>
    );
};

export default About;