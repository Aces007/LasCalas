import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";

const Celebrations = () => {
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

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Celebrations" slideContent={celebrations_slideshow} />

        </motion.div>
    )
}


export default Celebrations;