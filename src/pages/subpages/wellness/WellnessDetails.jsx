import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";

import NavHead from "../../../reusables/NavHead";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { tr } from "framer-motion/client";



const WellnessDetails = () => {
    const menu_data = [
    {
        id: 1,
        name: "Exomind",
        category: "Neuro-Cognitive Wellness",
        subtitle: "Non-Invasive Brain Stimulation & Mental Optimization",
        table_detals: [
            { indications: "Protocol 1 & 2", price: "PHP 35,000" },
            { indications: "Protocol 3", price: "PHP 40,000" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/Exomind/EXO${i + 1}.webp`
        ),
    },
    {
        id: 2,
        name: "Exion",
        category: "Collagen & Hyaluronic Acid Synthesis",
        subtitle: "Radiofrequency & Targeted Ultrasound for Face & Body",
        table_detals: [
            // Face Areas
            { indications: "Whole Face", price: "PHP 10,000" },
            { indications: "Eyes", price: "PHP 3,000" },
            { indications: "Lower Face", price: "PHP 7,000" },
            { indications: "Neck", price: "PHP 4,000" },
            { indications: "Upper Face", price: "PHP 7,000" },
            { indications: "Neck & Face", price: "PHP 12,000" },
            // Body Areas
            { indications: "Arms", price: "PHP 7,000" },
            { indications: "Tummy", price: "PHP 7,000" },
            { indications: "Love Handles", price: "PHP 4,000" },
            { indications: "Buttocks", price: "PHP 4,000" },
            { indications: "Thighs Inner", price: "PHP 6,000" },
            { indications: "Thighs Outer", price: "PHP 6,000" },
            { indications: "Hands", price: "PHP 3,000" },
            { indications: "Microneedling", price: "PHP 25,000" },
            { indications: "Clear RF", price: "PHP 25,000" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/Exion/EXI${i + 1}.webp`
        ),
    },
    {
        id: 3,
        name: "NEO Emsculpt",
        category: "Body Sculpting & Rehabilitation",
        subtitle: "HIFEM+ & RF Energy for Muscle Building and Fat Reduction",
        table_detals: [
            // Muscle Building & Fat Reduction
            { indications: "Abdominal", price: "PHP 15,000" },
            { indications: "Buttocks", price: "PHP 15,000" },
            { indications: "Front Thighs", price: "PHP 15,000" },
            { indications: "Back Thighs", price: "PHP 15,000" },
            { indications: "Outer Thighs", price: "PHP 15,000" },
            { indications: "Inner Thighs", price: "PHP 15,000" },
            { indications: "Biceps", price: "PHP 15,000" },
            { indications: "Triceps", price: "PHP 15,000" },
            { indications: "Calves", price: "PHP 15,000" },
            { indications: "Love Handles", price: "PHP 15,000" },
            // Functional Wellness
            { indications: "Elbow", price: "PHP 15,000" },
            { indications: "Forearm", price: "PHP 15,000" },
            { indications: "Wrist", price: "PHP 15,000" },
            { indications: "Back", price: "PHP 15,000" },
            { indications: "Hip", price: "PHP 15,000" },
            { indications: "Knee", price: "PHP 15,000" },
            { indications: "Ankle", price: "PHP 15,000" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/NEOEmsculpt/NEO${i + 1}.webp`
        ),
    },
    {
        id: 4,
        name: "Emface",
        category: "Needle-Free Facial Sculpting",
        subtitle: "Synchronized RF & HIFES Muscle Toning & Skin Tightening",
        table_detals: [
            { indications: "Upperface (Forehead & Eyes)", price: "PHP 40,000" },
            { indications: "Lower Face", price: "PHP 40,000" },
            { indications: "Eyes", price: "PHP 18,000" },
            { indications: "Submentum", price: "PHP 18,000" },
            { indications: "Classic (Forehead & Cheeks)", price: "PHP 35,000" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/Emface/EMF${i + 1}.webp`
        ),
    },
    {
        id: 5,
        name: "Emsella",
        category: "Pelvic Floor & Intimate Health",
        subtitle: "Electromagnetic Pelvic Floor Rehabilitation",
        table_detals: [
            { indications: "Protocol 1 & 2", price: "PHP 10,000" },
            { indications: "Protocol 3", price: "PHP 15,000" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/Emsella/EMS${i + 1}.webp`
        ),
    },
    {
        id: 6,
        name: "Hydra Facial",
        category: "Medical-Grade Skin Hydration",
        subtitle: "Deep Hydro-Dermabrasion, Extraction & Infusion",
        table_detals: [
            { indications: "Hydra Facial", price: "PHP 1,899" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/HydraFacial/HYD${i + 1}.webp`
        ),
    },
    {
        id: 7,
        name: "HIFU",
        category: "Non-Surgical SMAS Lifting",
        subtitle: "High-Intensity Focused Ultrasound for Face & Body",
        table_detals: [
            { indications: "Cheek & Jaw", price: "PHP 3,950" },
            { indications: "Forehead", price: "PHP 3,950" },
            { indications: "Jaw", price: "PHP 1,500" },
            { indications: "Double Chin", price: "PHP 3,950" },
            { indications: "Full Face", price: "PHP 7,000" },
            { indications: "Full Lift", price: "PHP 15,000" },
            { indications: "Inner Thighs", price: "PHP 2,500" },
            { indications: "Arms", price: "PHP 2,000" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/HIFU/HIFU${i + 1}.webp`
        ),
    },
    {
        id: 8,
        name: "Pico Laser",
        category: "Advanced Pigment & Skin Resurfacing",
        subtitle: "Picosecond Acoustic Precision Skin Clearing",
        table_detals: [
            { indications: "Full Face", price: "PHP 1,999" },
            { indications: "Underarm", price: "PHP 1,499" },
            { indications: "Elbow/Knee", price: "PHP 1,200" },
            { indications: "Bikini Area", price: "PHP 3,500" },
            { indications: "Full Legs", price: "PHP 3,500" },
            { indications: "Full Arms", price: "PHP 2,500" },
            { indications: "Half Legs", price: "PHP 2,999" },
        ],
        preview_images: Array.from({ length: 2 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Wellness/WellnessPreview/PicoLaser/PIC${i + 1}.webp`
        ),
    },
    
    ];

    const [detPaneActive, setDetPaneActive] = useState("inclusions");
    const { id } = useParams();

    const selectedPackage = menu_data.find((pkg) => pkg.id === Number(id));

    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    // -- STYLING -- //
    const wellness_details_cont = "grid grid-cols-2 gap-8 justify-between w-full px-[200px] mt-[40px] resSm:flex resSm:flex-col resSm:items-center";
    const wellness_name = "font-Raleway font-semibold text-[48px] resSm:text-[24px] resMd:text-[42px]";
    const wellness_price = "font-Raleway font-semibold text-secondary/60 text-[24px] resSm:text-[26px] resMd:text-[22px]";

    const tableHead_style = "py-3 px-4 font-Nunito font-bold text-sm uppercase tracking-wide"
    const tableContent_style = "py-2.5 px-4 font-bold text-sm"

    const carousel_preview = "h-[400px] overflow-hidden rounded-md hover:cursor-pointer";

    // -- FLEX STYLING -- //
    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";
    const between_element_row = "flex justify-between";
   

    return (
        <motion.div 
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <NavHead theme="dark" />

            <div className={`${center_element_col} justify-center`}>
                <h1 className={`${wellness_name}`}>{selectedPackage?.name}</h1>
                <h2 className={`${wellness_price}`}>{selectedPackage?.price}</h2>

                <div className={`${wellness_details_cont}`}>
                    <div className={`w-full max-w-[400px] resSm:w-[360px] overflow-hidden rounded-md border-2 border-accent min-h-[350px]`}>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-primary text-white">
                                    <th className={`${tableHead_style}`}>
                                        Treatment Indication
                                    </th>
                                    <th className={`${tableHead_style} text-right`}>
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-accent/30 font-Nunito">
                                {selectedPackage?.table_detals?.map((row, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                                    >
                                        <td className={`${tableContent_style} text-gray-500`}>{row.indications}</td>
                                        <td className={`${tableContent_style} text-primary text-right whitespace-nowrap`}>{row.price}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full max-w-[400px] resMd:w-[600px] resSm:w-[360px] resSm:h-[280px]">
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={1}
                            loop={true}
                            coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 140,
                            modifier: 1,
                            slideShadows: false,
                            }}
                            modules={[Navigation, Autoplay]}
                            className="w-[600px] pb-[40px] resSm:w-[360px] resSm:h-[300px] resMd:w-[540px]"
                            navigation
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {selectedPackage?.preview_images.map((src, index) => (
                                <SwiperSlide key={index}  className={`${center_element_col}`}>
                                    <img src={src} className={`${carousel_preview}`} loading="lazy"/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default WellnessDetails;