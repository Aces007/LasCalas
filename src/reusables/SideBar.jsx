import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiChevronsLeft } from "react-icons/fi";

// Change toggleSidebar to onClose to match NavHead, or update NavHead to match this
const SideBar = ({ isOpen, toggleSidebar }) => { 
    const sideBarLinks = [
        { name: "Amenities", path: "/amenities" },
        { name: "FAQs", path: "/faqs" },
    ]

    // -- STYLING -- //
    const overlay_cont = "fixed inset-0 bg-black/50 z-40 backdrop-blur-sm";
    const sidebar_cont = "fixed left-0 top-0 h-full w-[300px] bg-background_lightTxt z-50 p-8 shadow-2xl";
    const space_name = "font-Raleway font-semibold text-event_dets_name";
    const space_price = "font-Raleway font-semibold text-event_dets_price text-secondary/60";

    const camp_grid_cont = "grid grid-cols-2 gap-12 items-center w-full max-w-6xl px-6 my-[80px]";
    const campCard_grid_cont = "grid grid-cols-2 gap-[8px] items-stretch";
    const camp_tagline = "font-Raleway font-bold text-atv_tagline text-main_text/60 tracking-tight uppercase";

    const carousel_preview = "h-[400px] overflow-hidden rounded-md hover:cursor-pointer";
    // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const justween_element_row = "flex justify-between";
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
                    <div className="flex flex-col justify-between gap-14">
                        {/* Ensure this button calls the correct function */}
                        <button onClick={toggleSidebar} className="self-end text-main_text text-2xl"><FiChevronsLeft size={28} className="hover:text-highlight" /></button>

                        <nav className="flex flex-col gap-6">
                            {sideBarLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    to={link.path}
                                    className="font-Raleway text-xl font-semibold text-main_text hover:text-highlight transition-colors"
                                    onClick={toggleSidebar}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default SideBar;