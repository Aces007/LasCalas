import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";

const Packages = () => {
    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const packages_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider5.png" },
        { id: 6, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider6.png" },
        { id: 7, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider7.png" },
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

        </motion.div>
    )
}


export default Packages;