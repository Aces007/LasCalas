import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";
import { MdOutlineChevronRight } from "react-icons/md";


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

    const packages_menu = [
        { id: 1, package_name: "Cove 1 Villa Tent - King Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package1.png", description: "Experience beachfront luxury in the King Villa Tents at Cove 1. Featuring a plush king bed just steps from the waves, wake up to breathtaking sunrise views in your own private, seaside sanctuary.", link: "" },
        { id: 1, package_name: "Cove 1 Villa Tent - Bunk Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package2.png", description: "Elevate your group getaway in the Bunk Villa Tents at Cove 1. Steps from the shore with premium stylish bunks, enjoy the perfect blend of seaside adventure and refined comfort together.", link: "" },
        { id: 1, package_name: "Lascalas Villa Tents - King Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package3.png", description: "Relax in our King Villa Tents, where nature meets luxury. Featuring a plush king bed and modern amenities, it is your private, romantic sanctuary under the stars.", link: "" },
        { id: 1, package_name: "Lascalas Villa Tents - Double Size Bed Bunk", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package4.png", description: "Share the experience in our Double Bunk Villa Tents. With spacious double-sized bunks and modern comforts, it is the ideal outdoor luxury escape for families and friends.", link: "" },
        { id: 1, package_name: "Lascalas Villa Tents - Bunk Bed", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package5.png", description: "Enjoy a fun getaway in our Bunk Villa Tents. With cozy bunk beds and modern comforts, it is the perfect luxury basecamp for friends and families.", link: "" },
        { id: 1, package_name: "Teepee Tents - Camp Cot", src: "/lascalas_assets/Website/MainPages_Content/Packages/Package6.png", description: "Relax at LasCalas Camping Grounds, where you can book a cozy teepee tent, enjoy a campfire under the full moon, and take in stunning beachfront views. Perfect for couples and families looking to unwind.", link: "" },
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

            <div className="flex flex-col items-center gap-[120px] py-32">
                <h2 className="font-Nunito font-bold w-[50%] text-center text-packages_h2 text-main_text/80">LasCalas Resort & Luxury Estate blends premium accommodations with immersive nature, offering exclusive adventures in a luxurious setting.</h2>


                <div className="grid grid-cols-2 items-center justify-center px-24 gap-[200px]">
                {packages_menu.map((item) => (
                    <div key={item.id} className="relative group w-full h-[400px] overflow-hidden rounded-lg">
                            <img src={item.src} alt={item.package_name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>

                            <div className="absolute bottom-0 left-0 w-full p-6 flex justify-center group-hover:opacity-0">
                                <h3 className="font-Montserrat uppercase text-background_lightTxt font-semibold tracking-[5%] text-packages_name">
                                    {item.package_name}
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


export default Packages;