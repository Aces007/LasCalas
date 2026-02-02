import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";

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

     const celebrations_menu = [
        { id: 1, celebration_name: "Event Pavilion", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations1.png", description: "Host the grandest celebration in the North. Our 800 sqm Pavilion is the region's only fully air-conditioned beachfront venue. Capable of hosting up to 500 guests, it offers a majestic setting where grand events meet the serenity of the sea.", link: "" },
        { id: 1, celebration_name: "Beach Pergola", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations2.png", description: "Al fresco luxury. Our beautifully designed Beach Pergola offers a chic, open-air sanctuary where shaded comfort meets the sound of the waves—the ultimate spot for scenic dining and seaside relaxation.", link: "" },
        { id: 1, celebration_name: "Gaming Villa & Infinity Pool", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations3.png", description: "Play, party, and plunge. Elevate your gathering in our luxurious Gaming Villa, fully equipped with arcade games and billiards, just steps away from the serene Infinity Pool. It’s the ultimate entertainment hub for weddings, reunions, and lively celebrations.", link: "" },
        { id: 1, celebration_name: "Camping Ground", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations4.png", description: "Under the stars, by the sea. Gather around a crackling bonfire at the Las Calas Camping Grounds. Whether you're sipping wine or sharing stories, the cool ocean breeze and open skies create the perfect night to remember.", link: "" },
        { id: 1, celebration_name: "Gazebo", src: "/lascalas_assets/Website/MainPages_Content/Celebrations/Celebrations5.png", description: "A vow with a view. The Las Calas Gazebo provides an intimate, romantic backdrop for your ceremony. Perfectly positioned near the Event Tent, it ensures a seamless flow from your heartfelt 'I do' to your grand reception.", link: "" },
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

            <div className="flex flex-col items-center gap-[120px] py-32">
                <h2 className="font-Nunito font-bold w-[50%] text-center text-packages_h2 text-main_text/80">Las Calas Resort & Luxury Estate blends premium event spaces with immersive nature, offering an exclusive backdrop for your most unforgettable celebrations.</h2>


                <div className="grid grid-cols-2 items-center justify-center px-24 gap-[200px]">
                {celebrations_menu.map((item) => (
                    <div key={item.id} className="relative group w-full h-[400px] overflow-hidden rounded-lg">
                            <img src={item.src} alt={item.celebration_name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>

                            <div className="absolute bottom-0 left-0 w-full p-6 flex justify-center group-hover:opacity-0">
                                <h3 className="font-Montserrat uppercase text-background_lightTxt font-semibold tracking-[5%] text-packages_name">
                                    {item.celebration_name}
                                </h3>
                            </div>
                            
                            <div className="absolute inset-0 left-0 bg-cards_overlay/80 opacity-0 flex flex-col items-center justify-center gap-[40px] group-hover:opacity-100 transition-opacity duration-800 ease-in-out">
                                <p className="text-center w-[90%] font-Nunito font-medium text-background_lightTxt text-packages_hover_p">
                                    {item.description}
                                </p>

                                <a href={item.link} className="font-Montserrat font-medium uppercase text-background_lightTxt/60 absolute bottom-8 flex flex-row items-center justify-center text-packages_btn font-semibold text-packages_hover_a hover:text-highlight hover:scale-105">Know More <MdOutlineChevronRight size={40}  /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </motion.div>
    )
}


export default Celebrations;