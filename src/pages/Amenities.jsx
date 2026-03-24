        
import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";


const Amenities = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
    
        //--CONTAINERS--//
        const main_page_grid_cont = "grid resSm:grid-cols-1 resMd:grid-cols-2 resLg:grid-cols-2 items-center justify-center px-6 resSm:px-6 resMd:px-12 resLg:px-24 gap-6 resSm:gap-8 resMd:gap-12 resLg:gap-[200px]";
        const main_page_content_cont = "relative group w-full h-[300px] resSm:h-[250px] resMd:h-[350px] resLg:h-[400px] overflow-hidden rounded-lg";
        const main_page_cards_img = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110";
        const main_page_content_name_cont = "absolute bottom-0 left-0 w-full p-6 flex justify-center group-hover:opacity-0";
        const main_page_desc_cont = "absolute inset-0 left-0 bg-cards_overlay/80 opacity-0 flex flex-col items-center justify-center gap-[40px] group-hover:opacity-100 transition-opacity duration-800 ease-in-out";

        //--TEXTS--//
        const main_page_content_name = "font-Montserrat uppercase text-center text-background_lightTxt font-semibold tracking-[5%] resSm:text-[14px] resMd:text-[15px] resLg:text-[17px]";
        const main_page_desc = "text-center w-[90%] font-Nunito font-medium text-background_lightTxt resSm:text-[14px] resMd:text-[20px] resLg:text-[22px]";
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

    const amenities_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities5.png" },
        { id: 6, src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities6.png" },
        { id: 7, src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities7.png" },
    ]

    const packages_menu = [
        { id: 1, amenity_name: "Gaming Villa", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities1.png", description: "Unwind in the Gaming Villa, a tranquil retreat designed for slow-paced leisure. From a quiet game of Billiards or Chess to nostalgic Arcade classics, this sanctuary offers a relaxing indoor escape to enjoy shared moments and gentle fun." },
        { id: 2, amenity_name: "Pool Area", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities2.png", description: "Unwind at our Pool Area, a serene oasis designed for quiet relaxation. Whether you're lounging by the water or enjoying a gentle evening swim under the stars, this tranquil space offers the perfect atmosphere to refresh your mind and body in total peace." },
        { id: 3, amenity_name: "Steam Sauna", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities3.png", description: "Rejuvenate your senses in our restorative Steam Sauna. A private, barrel-style sanctuary nestled in nature, it offers a gentle, purifying heat designed to detoxify your body and provide a deep sense of calm and well-being" },
        { id: 4, amenity_name: "Cove 1 Beach Front", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities4.png", description: "Embrace seaside serenity at Cove 1. Whether you're lounging with a fresh coconut or listening to the gentle rhythm of the waves, this premier beachfront sanctuary offers an exclusive space to bask in the sun and unwind in total comfort." },
        { id: 5, amenity_name: "Obstacle Course", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities5.png", description: "Find your balance on our nature-integrated Obstacle Course. A low-impact way to enjoy the outdoors, this space encourages mindful movement and playful coordination amidst the resort's greenery." },
        { id: 6, amenity_name: "Rope Course", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities6.png", description: "Experience a fresh perspective from our Rope Course. Nestled within the canopy, this guided adventure offers a calm way to reconnect with nature while enjoying a scenic view of the estate." },
        { id: 7, amenity_name: "Cove 2", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities7.png", description: "Discover the vibrant waters of Cove 2. Perfect for a peaceful paddle or a slow boat ride, this crystal-clear lagoon is your gateway to exploring the gentle rhythms of the sea." },
        { id: 7, amenity_name: "Cove 3", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities8.png", description: "Escape to the expansive beauty of Cove 3. This panoramic coastal stretch offers a quiet sanctuary for those looking to soak in the vast ocean horizon and the lush island landscape." },
        { id: 7, amenity_name: "Cove 4", src: "/lascalas_assets/Website/Slideshows/Amenities_Slideshow/Amenities9.png", description: "Discover the breathtaking heights of Cove 4, where our exclusive Cliff Dining area offers a front-row seat to the horizon. Enjoy a serene, open-air meal perched above the waves, the perfect setting for a tranquil sunset or a private, starlit dinner." },
    ]

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Amenities" slideContent={amenities_slideshow} />

            <div className={`${center_element_col} gap-[120px] py-32`}>
                <div className={`${main_page_grid_cont}`}>
                {packages_menu.map((item) => (
                    <div key={item.id} className={`${main_page_content_cont}`}>
                        <img src={item.src} alt={item.amenity_name} className={`${main_page_cards_img}`}/>

                        <div className={`${main_page_content_name_cont}`}>
                            <h3 className={`${main_page_content_name}`}>
                                {item.amenity_name}
                            </h3>
                        </div>
                        
                        <div className={`${main_page_desc_cont}`}>
                            <p className={`${main_page_desc}`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}


export default Amenities;