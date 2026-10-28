import MainSlides from "../reusables/MainSlides";
import { AnimatePresence, motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";


const Wellness = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size
        //--CONTAINERS--//
        const main_page_grid_cont = "grid resSm:grid-cols-1 resMd:grid-cols-2 resLg:grid-cols-2 items-center justify-center px-6 resSm:px-6 resMd:px-12 resLg:px-24 gap-6 resSm:gap-8 resMd:gap-12 resLg:gap-[200px]";
        const main_page_content_cont = "relative group w-full h-[300px] resSm:h-[250px] resMd:h-[350px] resLg:h-[400px] overflow-hidden rounded-lg";
        const main_page_cards_img = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110";
        const main_page_content_name_cont = "absolute bottom-0 left-0 w-full p-6 flex justify-center group-hover:opacity-0";
        const main_page_desc_cont = "absolute inset-0 left-0 bg-cards_overlay/80 opacity-0 flex flex-col items-center justify-center gap-[40px] group-hover:opacity-100 transition-opacity duration-800 ease-in-out hover:cursor-pointer hover:cursor-pointer";

        //--TEXTS--//
        const wellness_h2 = "font-Nunito font-bold w-[50%] text-center text-main_text/80 resSm:text-[14px] resSm:w-[90%]";
        const main_page_content_name = "font-Montserrat uppercase text-center text-background_lightTxt font-semibold tracking-[5%] resSm:text-[14px] resMd:text-[15px] resLg:text-[17px]";
        const main_page_desc = "text-center w-[90%] font-Nunito font-medium text-background_lightTxt resSm:text-[14px] resMd:text-[20px] resLg:text-[22px] select-none";
        const know_more_btn = "font-Montserrat font-medium uppercase text-background_lightTxt/60 absolute bottom-8 flex flex-row items-center justify-center hover:gap-[4px] text-packages_btn font-semibold resSm:text-[16px] resSm:mt-[40px] resMd:text-[20px] resLg:text-[22px] hover:text-highlight hover:scale-105";
    
        // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const between_element_row = "flex justify-between";

    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const wellness_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Wellness_Slideshow/Wellness1.webp" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Wellness_Slideshow/Wellness2.webp" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Wellness_Slideshow/Wellness3.webp" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Wellness_Slideshow/Wellness4.webp" },
    ]

    const wellness_menu = [
        { id: 1, wellness_name: "Exomind", src: "/lascalas_assets/Website/MainPages_Content/Wellness/1.webp", description: "Non-invasive neuro-stimulation platform using targeted magnetic pulses to enhance cognitive clarity, focus, and mental well-being." },
        { id: 2, wellness_name: "Exion", src: "/lascalas_assets/Website/MainPages_Content/Wellness/2.webp", description: "Combines RF and targeted ultrasound to boost natural hyaluronic acid, collagen, and elastin for total skin tightening and rejuvenation." },
        { id: 3, wellness_name: "NEO Emsculpt", src: "/lascalas_assets/Website/MainPages_Content/Wellness/3.webp", description: "Blends radiofrequency and HIFEM+ energy to burn fat and build muscle simultaneously in a single 30-minute session." },
        { id: 4, wellness_name: "Emface", src: "/lascalas_assets/Website/MainPages_Content/Wellness/4.webp", description: "Needle-free facial lifting that pairs RF with HIFES technology to tighten skin and tone delicate facial elevator muscles." },
        { id: 5, wellness_name: "Emsella", src: "/lascalas_assets/Website/MainPages_Content/Wellness/5.webp", description: "A breakthrough chair device using focused electromagnetic energy to rehabilitate the pelvic floor and treat incontinence while fully clothed." },
        { id: 6, wellness_name: "Facial", src: "/lascalas_assets/Website/MainPages_Content/Wellness/6.webp", description: "A 3-in-1 medical facial using vortex suction to deeply cleanse, extract impurities, and infuse hydrating serums for an instant glow." },
        { id: 7, wellness_name: "Hifu", src: "/lascalas_assets/Website/MainPages_Content/Wellness/7.webp", description: "Uses focused ultrasound to target deep SMAS tissue layers, delivering non-surgical lifting and tightening for the face, neck, and jawline." },
        { id: 8, wellness_name: "Pico Laser", src: "/lascalas_assets/Website/MainPages_Content/Wellness/8.webp", description: "Employs ultra-fast picosecond pulses to shatter pigment, melasma, and tattoo ink into dust without heat damage." },
    ]

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Wellness" slideContent={wellness_slideshow}/>

            <div className={`${center_element_col} gap-[120px] py-32`}>
                <h2 className={`${wellness_h2}`}>LasCalas Resort & Luxury Estate unites cutting-edge BTL aesthetic technologies, non-invasive body sculpting, and restorative massage therapy in a tranquil wellness sanctuary.</h2>

                <div className={`${main_page_grid_cont}`}>
                    {wellness_menu.map((item) => (
                        <div key={item.id} className={`${main_page_content_cont}`}>
                            <img src={item.src} alt={item.wellness_name}  className={main_page_cards_img} loading="lazy"/>

                            <div className={`${main_page_content_name_cont}`}>
                                <h3 className={`${main_page_content_name}`}>{item.wellness_name}</h3>
                            </div>
                            
                            <div className={`${main_page_desc_cont}`}>
                                <p className={`${main_page_desc}`}>{item.description}</p>

                                <Link to={`/wellnessdetails/${item.id}`} className={`${know_more_btn}`}>Know More <MdOutlineChevronRight className="resSm:text-[20px] resMd:text-[24px] resLg:text-[32px]" /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}

export default Wellness;