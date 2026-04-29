        
import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";


const PackagesMenu = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
    
        //--CONTAINERS--//
        const main_page_grid_cont = "grid resSm:grid-cols-1 resMd:grid-cols-2 resLg:grid-cols-2 items-center justify-center px-6 resSm:px-6 resMd:px-12 resLg:px-24 gap-6 resSm:gap-8 resMd:gap-12 resLg:gap-[200px]";
        const main_page_content_cont = "relative group w-full h-[300px] resSm:h-[250px] resMd:h-[350px] resLg:h-[400px] overflow-hidden rounded-lg";
        const main_page_cards_img = "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110";
        const main_page_content_name_cont = "absolute bottom-0 left-0 w-full p-6 flex justify-center group-hover:opacity-0";
        const main_page_desc_cont = "absolute inset-0 left-0 bg-cards_overlay/80 opacity-0 flex flex-col items-center justify-center gap-[40px] group-hover:opacity-100 transition-opacity duration-800 ease-in-out";
        
        //--TEXTS--//
        const packages_h2 = "font-Nunito font-bold w-[50%] text-center text-main_text/80 resSm:text-[14px] resSm:w-[90%]";
        const main_page_content_name = "font-Montserrat uppercase text-center text-background_lightTxt font-semibold tracking-[5%] resSm:text-[14px] resMd:text-[15px] resLg:text-[17px]";
        const main_page_desc = "text-center w-[90%] font-Nunito font-medium text-background_lightTxt resSm:text-[14px] resMd:text-[20px] resLg:text-[22px]";
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

    const packages_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider1.webp" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider2.webp" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider3.webp" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider4.webp" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider5.webp" },
    ]

    const packages_menu = [
        { id: 1, package_name: "Executive Villa", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package1.webp", description: "Experience beachfront luxury in the King Villa Tents at Cove 1. Featuring a plush king bed just steps from the waves, wake up to breathtaking sunrise views in your own private, seaside sanctuary." },
        { id: 2, package_name: "Executive Villa 2", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package2.webp", description: "Experience beachfront luxury in the King Villa Tents at Cove 1. Featuring a plush king bed just steps from the waves, wake up to breathtaking sunrise views in your own private, seaside sanctuary." },
        { id: 3, package_name: "Cove 1 Villa Tent - King Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package3.webp", description: "Experience beachfront luxury in the King Villa Tents at Cove 1. Featuring a plush king bed just steps from the waves, wake up to breathtaking sunrise views in your own private, seaside sanctuary." },
        { id: 4, package_name: "Cove 1 Villa Tent - Bunk Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package4.webp", description: "Elevate your group getaway in the Bunk Villa Tents at Cove 1. Steps from the shore with premium stylish bunks, enjoy the perfect blend of seaside adventure and refined comfort together." },
        { id: 5, package_name: "Lascalas Villa Tents - King Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package5.webp", description: "Relax in our King Villa Tents, where nature meets luxury. Featuring a plush king bed and modern amenities, it is your private, romantic sanctuary under the stars." },
        { id: 6, package_name: "Lascalas Villa Tents - Double Size Bed Bunk", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package6.webp", description: "Share the experience in our Double Bunk Villa Tents. With spacious double-sized bunks and modern comforts, it is the ideal outdoor luxury escape for families and friends." },
        { id: 7, package_name: "Lascalas Villa Tents - Bunk Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package7.webp", description: "Enjoy a fun getaway in our Bunk Villa Tents. With cozy bunk beds and modern comforts, it is the perfect luxury basecamp for friends and families." },
        // { id: 8, package_name: "Teepee Tents - Camp Cot", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package7.webp", description: "Relax at LasCalas Camping Grounds, where you can book a cozy teepee tent, enjoy a campfire under the full moon, and take in stunning beachfront views. Perfect for couples and families looking to unwind." },
    ]

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Packages" slideContent={packages_slideshow} />

            <div className={`${center_element_col} gap-[120px] py-32`}>
                <h2 className={`${packages_h2}`}>LasCalas Resort & Luxury Estate blends premium accommodations with immersive nature, offering exclusive adventures in a luxurious setting.</h2>


                <div className={`${main_page_grid_cont}`}>
                {packages_menu.map((item) => (
                    <div key={item.id} className={`${main_page_content_cont}`}>
                        <img src={item.src} alt={item.package_name} className={`${main_page_cards_img}`} loading="lazy" />

                        <div className={`${main_page_content_name_cont}`}>
                            <h3 className={`${main_page_content_name}`}>
                                {item.package_name}
                            </h3>
                        </div>
                        
                        <div className={`${main_page_desc_cont}`}>
                            <p className={`${main_page_desc}`}>
                                {item.description}
                            </p>

                            <Link to={`/packagedetails/${item.id}`} className={`${know_more_btn}`}>Know More <MdOutlineChevronRight className="resSm:text-[20px] resMd:text-[24px] resLg:text-[32px]" /></Link>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}


export default PackagesMenu;