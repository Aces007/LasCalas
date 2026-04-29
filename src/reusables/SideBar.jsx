import { createPortal } from "react-dom"; // 1. Essential for the teleport
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi";

const SideBar = ({ isOpen, toggleSidebar }) => { 
    const sideBarLinks = [
        { name: "Packages", path: "/packagesmenu" },
        { name: "Explore", path: "/explore" },
        { name: "Celebrations", path: "/celebrations" },
        { name: "Amenities", path: "/amenities" },
    ]

    // -- STYLING -- //
    // Added 'h-[100dvh]' to ensure it fills the iPhone 13 Pro Max screen perfectly
    // Increased z-indices to be safely above most UI frameworks
    const overlay_cont = "fixed inset-0 bg-black/60 z-[9998] backdrop-blur-sm";
    const sidebar_cont = "fixed left-0 top-0 h-[100dvh] w-[300px] bg-background_lightTxt z-[9999] p-8 shadow-2xl";

    const reachOut_btn_sidebar = "font-Raleway text-xl font-semibold text-main_text hover:text-highlight transition-colors";
    const booking_btn_sidebar = "font-Montserrat font-extrabold uppercase p-4 rounded-[8px] border-[3px] border-main_text text-main_text hover:bg-highlight hover:border-highlight hover:text-background_lightTxt transition-all duration-300 text-center";
    const sidebarLinks_btns = "font-Raleway text-xl font-semibold text-main_text hover:text-highlight transition-colors";

    const justween_element_col = "flex flex-col justify-between";

    // 2. Define the content to be rendered
    const sideBarContent = (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleSidebar}
                        className={overlay_cont}
                    />
                    
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={sidebar_cont}
                    >
                        <div className={`${justween_element_col} h-full`}>
                            {/* Close Button */}
                            <button onClick={toggleSidebar} className="self-end text-main_text text-2xl">
                                <FiChevronsLeft size={28} className="hover:text-highlight" />
                            </button>

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
                                <a href="https://www.facebook.com/lascalasresortluxuryestate/" className={reachOut_btn_sidebar}>
                                    Reach Out To Us!
                                </a>
                            </nav>

                            {/* Book Now Button */}
                            <a href="https://us2.cloudbeds.com/reservation/10IVXw" target="_blank" className={booking_btn_sidebar}>
                                Book Now
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );

    // 3. Return the Portal
    return createPortal(sideBarContent, document.body);
}

export default SideBar;