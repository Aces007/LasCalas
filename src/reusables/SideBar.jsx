import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Change toggleSidebar to onClose to match NavHead, or update NavHead to match this
const SideBar = ({ isOpen, toggleSidebar }) => { 
    const sideBarLinks = [
        { name: "Amenities", path: "/amenities" },
        { name: "FAQs", path: "/faqs" },
    ]
    
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
                />
                
                <motion.div
                    initial={{ x: "-100%" }} // Start off-screen to the LEFT
                    animate={{ x: 0 }}      // Slide into view
                    exit={{ x: "-100%" }}    // Slide back out to the LEFT
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    // Changed right-0 to left-0
                    className="fixed left-0 top-0 h-full w-[300px] bg-background_lightTxt z-50 p-8 shadow-2xl"
                >
                    <div className="flex flex-col gap-8">
                        {/* Ensure this button calls the correct function */}
                        <button onClick={toggleSidebar} className="self-end text-main_text text-2xl">✕</button>

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