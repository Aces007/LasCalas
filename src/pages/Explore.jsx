import MainSlides from "../reusables/MainSlides";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";


const Explore = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size
        //--CONTAINERS--//
        const main_page_grid_cont = "grid resSm:grid-cols-1 resMd:grid-cols-2 resLg:grid-cols-2 items-center justify-center px-6 resSm:px-6 resMd:px-12 resLg:px-24 gap-6 resSm:gap-8 resMd:gap-12 resLg:gap-[200px]";
        const main_page_content_cont = "relative group w-full h-[300px] resSm:h-[250px] resMd:h-[350px] resLg:h-[400px] overflow-hidden rounded-lg";
        const main_page_cards_img = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110";
        const main_page_content_name_cont = "absolute bottom-0 left-0 w-full p-6 flex justify-center group-hover:opacity-0";
        const main_page_desc_cont = "absolute inset-0 left-0 bg-cards_overlay/80 opacity-0 flex flex-col items-center justify-center gap-[40px] group-hover:opacity-100 transition-opacity duration-800 ease-in-out hover:cursor-pointer";

        //--TEXTS--//
        const main_page_content_name = "font-Montserrat uppercase text-center text-background_lightTxt font-semibold tracking-[5%] resSm:text-[14px] resMd:text-[15px] resLg:text-[17px]";
        const main_page_desc = "text-center w-[90%] font-Nunito font-medium text-background_lightTxt resSm:text-[14px] resMd:text-[20px] resLg:text-[22px]";
        const know_more_btn = "font-Montserrat font-medium uppercase text-background_lightTxt/60 absolute bottom-8 flex flex-row items-center justify-center hover:gap-[4px] text-packages_btn font-semibold resSm:text-[16px] resSm:mt-[40px] resMd:text-[20px] resLg:text-[22px] hover:text-highlight hover:scale-105";
    
        // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const between_element_row = "flex justify-between";

        
    const [activeTab, setActiveData] = useState("Activities")

    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const exploreVariants = {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.9 }
    }

    const explore_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore5.png" },
    ]

    const explore_menu = {
        Attractions: [
            { id: 1, name: "Coves", src: "/lascalas_assets/Website/MainPages_Content/Explore/Attractions/Attractions1.png", description: "Discover the edge of paradise. Explore the hidden beaches and tranquil inlets of Las Calas Coves. Enclosed by majestic cliffs, it is the ultimate setting for private escapes and nature’s purest serenity.", link: "#" },
            { id: 2, name: "Gazebo", src: "/lascalas_assets/Website/MainPages_Content/Explore/Attractions/Attractions2.png", description: "Unwind in style. The Las Calas Gazebo offers a haven of peace surrounded by nature’s beauty. With the gentle sound of the waves as your soundtrack, it’s the perfect spot for romance, luxury, and unforgettable sunsets.", link: "#" },
            { id: 3, name: "Lucky Park", src: "/lascalas_assets/Website/MainPages_Content/Explore/Attractions/Attractions3.png", description: "Walk on the bright side. Step into Lucky Park, a whimsical garden designed to inspire joy and prosperity. From vibrant wishing ribbons to playful lucky charms, every corner radiates positive energy and a touch of magic.", link: "#" },
            { id: 4, name: "Mango Tree", src: "/lascalas_assets/Website/MainPages_Content/Explore/Attractions/Attractions4.png", description: "Rooted in magic. Experience the quiet power of the Millennium Mango Tree. This ancient wonder offers a unique blend of nature and luxury, a perfect, opulent spot to pause and embrace the soul of Las Calas.", link: "#" },
            { id: 5, name: "Pearl Collections", src: "/lascalas_assets/Website/MainPages_Content/Explore/Attractions/Attractions5.png", description: "Treasures of the deep. Explore the Las Calas Pearl Collection, an exclusive showcase of rare, elegant gems that perfectly reflect the timeless beauty of the sea.", link: "#" },
            { id: 6, name: "Swing", src: "/lascalas_assets/Website/MainPages_Content/Explore/Attractions/Attractions6.png", description: "Swing into paradise. Hover above crystal-clear shallows on our iconic overwater swing. With the ocean breeze in your hair and endless blue horizons, it’s the ultimate spot for romance and unforgettable photos.", link: "#" },
            { id: 7, name: "Wishing Well", src: "/lascalas_assets/Website/MainPages_Content/Explore/Attractions/Attractions7.png", description: "A sanctuary for your dreams. Hidden within our lush greenery, the Wishing Well offers a moment of pure serenity. Embrace the magic of the moment in this elegant setting, where every wish feels a little closer to coming true.", link: "#" },
        ],
        Activities: [
            { id: 1, name: "ATV Adventure", src: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/Activities1.png", description: "Ready to ride? Ignite your spirit of adventure and go off the beaten path! Whether you're chasing an adrenaline rush or just chasing views, our ATV tour is the ultimate way to experience the wild beauty of Las Calas.", link: "/exploreATV" },
            { id: 2, name: "Water Adventure", src: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/Activities2.png", description: "Dive into adventure with the LasCalas Jetski and Kayak Ride Experience, where the thrill of the open water meets the beauty of nature.", link: "/exploreWater" },
            { id: 3, name: "Buggy And Polaris Ride", src: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/Activities3.png", description: "Buckle up for the ultimate joyride! Gather your squad and tear up the trails in our heavy-duty Buggies and Polaris RZRs. It’s loud, it’s muddy, and it’s the most fun you’ll have on four wheels.", link: "/exploreBug" },
            { id: 4, name: "Rope Course & Obstacle Course", src: "/lascalas_assets/Website/MainPages_Content/Explore/Activities/Activities4.png", description: "Do you have what it takes? Designed by the Special Forces of the Philippines, our authentic Rope and Obstacle Course tests your strength and teamwork in the heart of nature. Step up and conquer the challenge!", link: "/exploreRope" },
        ],
        Experiences: [
            { id: 1, name: "Day Tour", src: "/lascalas_assets/Website/MainPages_Content/Explore/Experiences/Experiences1.png", description: "Step into a living postcard. With breathtaking views and romantic hideaways at every turn, Las Calas is the ultimate backdrop for your special moments. Come for the day, and take home memories that last forever.", link: "#" },
            { id: 2, name: "Island Hopping", src: "/lascalas_assets/Website/MainPages_Content/Explore/Experiences/Experiences2.png", description: "Explore the unseen. Drift through turquoise waters and discover secret beaches on our premium Island Hopping tour. It’s the perfect blend of luxury, nature, and unforgettable adventure.", link: "#" },
            { id: 3, name: "La Batanes", src: "/lascalas_assets/Website/MainPages_Content/Explore/Experiences/Experiences3.png", description: "Adventure meets awe. Drive through rugged terrain on our Buggies or Polaris and emerge at 'La Batanes', a breathtaking coastal treasure hidden within Las Calas. It’s a view you have to earn, and one you’ll never forget.", link: "#" },
            { id: 4, name: "La Cueva", src: "/lascalas_assets/Website/MainPages_Content/Explore/Experiences/Experiences4.png", description: "Unveil the secret of La Cueva. Navigate a thrilling path of twists and turns to discover a hidden sanctuary of crystal-clear turquoise waters. Nestled deep in the rocks, it’s a natural masterpiece waiting to be found.", link: "#" },
            { id: 5, name: "Polaris", src: "/lascalas_assets/Website/MainPages_Content/Explore/Experiences/Experiences5.png", description: "Dominate the terrain in ultimate style. Our elite Polaris RZRs are built for extreme performance without compromising on comfort. This isn't just an off-road ride; it’s luxury unleashed on the wild.", link: "#" },
            { id: 6, name: "Prenup Shoot", src: "/lascalas_assets/Website/MainPages_Content/Explore/Experiences/Experiences6.png", description: "Create magic in every shot. From dramatic cliffs to serene sunsets, Las Calas offers an ambiance of pure romance. It’s more than a venue; it’s the canvas for your most unforgettable milestones.", link: "#" },
        ],
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Explore" slideContent={explore_slideshow} />

            <div className={`${center_element_col} gap-[40px]`}>
                <div className={`${center_element_row} justify-center w-full`}>
                    {Object.keys(explore_menu).map((category) => {
                        const tab_styling = `font-Montserrat text-explore_label transition-all duration-300 w-full text-[40px] resSm:text-[12px] resSm:p-3 resMd:text-[24px] resMd:p-6 resLg:text-[32px] resLg:p-6 ${activeTab === category ? "text-background_lightTxt bg-highlight font-bold text-explore_tab_active" : "bg-secondary/60 text-background_lightTxt font-[500] text-explore_tab_inactive"}`;
                                                
                        return (
                            <button key={category}
                                onClick={() => setActiveData(category)}
                                className={tab_styling}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                <motion.div
                    layout
                    className={`${main_page_grid_cont} py-32`}
                >
                    <AnimatePresence mode="popLayout">
                        {explore_menu[activeTab].map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={exploreVariants.initial}
                                animate={exploreVariants.animate}
                                exit={exploreVariants.exit}
                                transition={{ duration: 0.4 }}
                                className={`${main_page_content_cont}`}
                            >
                                <img src={item.src} alt={item.name} className={`${main_page_cards_img}`} />
                                
                                <div className={`${main_page_content_name_cont}`}>
                                    <h3 className={`${main_page_content_name}`}>
                                        {item.name}
                                    </h3>
                                </div>
                                
                                <div className={`${main_page_desc_cont}`}>
                                    <p className={`${main_page_desc}`}>
                                        {item.description}
                                    </p>
    
                                    {activeTab === "Activities" && (
                                        <Link to={`${item.link}`} className={`${know_more_btn}`}>Know More <MdOutlineChevronRight className="resSm:text-[20px] resMd:text-[24px] resLg:text-[32px]" /></Link>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </motion.div>
    )
}


export default Explore;