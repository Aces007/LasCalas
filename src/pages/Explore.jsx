import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";


const Explore = () => {
    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const explore_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore5.png" },
    ]

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Explore" slideContent={explore_slideshow} />

        </motion.div>
    )
}


export default Explore;