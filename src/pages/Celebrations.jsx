import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

const Celebrations = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size
    const packages_h2 = "font-Nunito font-bold w-[50%] text-center text-packages_h2 text-main_text/80";

    const main_page_grid_cont = "grid grid-cols-2 items-center justify-center px-24 gap-[200px]";
    const main_page_content_cont = "relative group w-full h-[400px] overflow-hidden rounded-lg";
    const main_page_cards_img = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110";
    const main_page_content_name_cont = "absolute bottom-0 left-0 w-full p-6 flex justify-center group-hover:opacity-0";
    const main_page_content_name = "font-Montserrat uppercase text-background_lightTxt font-semibold tracking-[5%] text-packages_name";
    const main_page_desc_cont = "absolute inset-0 left-0 bg-cards_overlay/80 opacity-0 flex flex-col items-center justify-center gap-[40px] group-hover:opacity-100 transition-opacity duration-800 ease-in-out";
    const main_page_desc = "text-center w-[90%] font-Nunito font-medium text-background_lightTxt text-packages_hover_p";
    const know_more_btn = "font-Montserrat font-medium uppercase text-background_lightTxt/60 absolute bottom-8 flex flex-row items-center justify-center hover:gap-[4px] text-packages_btn font-semibold text-packages_hover_a hover:text-highlight hover:scale-105";

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

    const celebrations_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations5.png" },
    ]

     const celebrations_menu = [
        { id: 1, celebration_name: "Event Pavilion", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations1.png", description: "Host the grandest celebration in the North. Our 800 sqm Pavilion is the region's only fully air-conditioned beachfront venue. Capable of hosting up to 500 guests, it offers a majestic setting where grand events meet the serenity of the sea.", link: "/eventPav" },
        { id: 2, celebration_name: "Beach Pergola", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations2.png", description: "Al fresco luxury. Our beautifully designed Beach Pergola offers a chic, open-air sanctuary where shaded comfort meets the sound of the waves—the ultimate spot for scenic dining and seaside relaxation.", link: "/pergola" },
        { id: 3, celebration_name: "Gaming Villa & Infinity Pool", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations3.png", description: "Play, party, and plunge. Elevate your gathering in our luxurious Gaming Villa, fully equipped with arcade games and billiards, just steps away from the serene Infinity Pool. It’s the ultimate entertainment hub for weddings, reunions, and lively celebrations.", link: "/gamPool" },
        { id: 4, celebration_name: "Camping Ground", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations4.png", description: "Under the stars, by the sea. Gather around a crackling bonfire at the Las Calas Camping Grounds. Whether you're sipping wine or sharing stories, the cool ocean breeze and open skies create the perfect night to remember.", link: "/campGround" },
        { id: 5, celebration_name: "Gazebo", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations5.png", description: "A vow with a view. The Las Calas Gazebo provides an intimate, romantic backdrop for your ceremony. Perfectly positioned near the Event Tent, it ensures a seamless flow from your heartfelt 'I do' to your grand reception.", link: "/gaze" },
    ]

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Celebrations" slideContent={celebrations_slideshow} />

            <div className={`${center_element_col} gap-[120px] py-32`}>
                <h2 className={`${packages_h2}`}>Las Calas Resort & Luxury Estate blends premium event spaces with immersive nature, offering an exclusive backdrop for your most unforgettable celebrations.</h2>


                <div className={`${main_page_grid_cont}`}>
                {celebrations_menu.map((item) => (
                    <div key={item.id} className={`${main_page_content_cont}`}>
                            <img src={item.src} alt={item.celebration_name} className={`${main_page_cards_img}`}/>

                            <div className={`${main_page_content_name_cont}`}>
                                <h3 className={`${main_page_content_name}`}>
                                    {item.celebration_name}
                                </h3>
                            </div>
                            
                            <div className={`${main_page_desc_cont}`}>
                                <p className={`${main_page_desc}`}>
                                    {item.description}
                                </p>

                                <Link to={item.link} className={`${know_more_btn}`}>Know More <MdOutlineChevronRight size={40} /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}


export default Celebrations;