import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi";

// Change toggleSidebar to onClose to match NavHead, or update NavHead to match this
const SideBar = ({ isOpen, toggleSidebar }) => { 
    const sideBarLinks = [
        { name: "Packages", path: "/packagesmenu" },
        { name: "Explore", path: "/explore" },
        { name: "Celebrations", path: "/celebrations" },
        { name: "Amenities", path: "/amenities" },
        // { name: "Reach Out To Us!", path: "/faqs" },
    ]

    // -- STYLING -- //
        //--CONTAIENRS--//
        const overlay_cont = "fixed inset-0 bg-black/60 z-[100] backdrop-blur-sm";
        const sidebar_cont = "fixed left-0 top-0 h-full w-[300px] bg-background_lightTxt z-[200] p-8 shadow-2xl";

        //--TEXTS--//
        const reachOut_btn_sidebar = "font-Raleway text-xl font-semibold text-main_text hover:text-highlight transition-colors";
        const booking_btn_sidebar = "font-Montserrat font-extrabold uppercase p-4 rounded-[8px] border-[3px] border-main_text text-main_text hover:bg-highlight hover:border-highlight hover:text-background_lightTxt transition-all duration-300 text-center";
        const sidebarLinks_btns = "font-Raleway text-xl font-semibold text-main_text hover:text-highlight transition-colors";

    // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const justween_element_row = "flex justify-between";
        const justween_element_col = "flex flex-col justify-between";
        const justcenter_element_row = "flex justify-center";
    
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={toggleSidebar}
                    className={`${overlay_cont}`}
                />
                
                <motion.div
                    initial={{ x: "-100%" }} // Start off-screen to the LEFT
                    animate={{ x: 0 }}      // Slide into view
                    exit={{ x: "-100%" }}    // Slide back out to the LEFT
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    // Changed right-0 to left-0
                    className={`${sidebar_cont}`}
                >
                    <div className={`${justween_element_col} h-full`}>
                        {/* Close Button */}
                        <button onClick={toggleSidebar} className="self-end text-main_text text-2xl"><FiChevronsLeft size={28} className="hover:text-highlight" /></button>

                        {/* Navigation Links */}
                        <nav className="flex flex-col gap-6">
                            {sideBarLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    to={link.path}
                                    className={sidebarLinks_btns}
                                    onClick={toggleSidebar}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a href="https://www.facebook.com/lascalasresortluxuryestate/" className={`${reachOut_btn_sidebar}`}>Reach Out To Us!</a>
                        </nav>

                        {/* Book Now Button */}
                        <a href="https://us2.cloudbeds.com/reservation/10IVXw" target="_blank" className={`${booking_btn_sidebar}`}>Book Now</a>
                    </div>
                </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default SideBar;