import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBed, FaBath, FaGift } from "react-icons/fa";

import NavHead from "../../../reusables/NavHead";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';



const PackageDetails = () => {
    const menu_data = [
    {
        id: 1,
        name: "Executive Villa",
        price: "PHP 31,000 /night",
        details: {
            inclusions: [
                "All Meals Included",
                "Unlimited Access to LasCalas Coves",
                "Unlimited Access to the Gaming Villa",
                "Unlimited Access to the Infinity Pool",
                "Unlimited Use of Standard Kayaks and Other Beach Facilities",
                "Guided Use of the LasCalas Rope Course",
                "Guided Use of the LasCalas Obstacle Course",
            ],
            bed: [
                "1 Bedroom Studio Suite with Balcony",
                "Maximum occupancy: 2",
                "2 Bunk Bed",
                "Pillowtop mattress and Duvet",
                "Free WiFi Connection",
                "16\" Smart TV", // Note: The backslash \ is needed to escape the inch symbol
                "Fully Air-conditioned",
                "Intercom Device",
                "Mini Refrigerator",
                "Coffee Maker",
                "Heater",
                "Microwave",
            ],
            bath: [
                "Marble bathroom",
                "Hairdryer",
                "Complimentary Robe and Slippers",
            ],
        },
        preview_images: Array.from({ length: 6 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Packages/PackagePreview/Executive/EX${i + 1}.jpg`
        ),
    },
    {
        id: 2,
        name: "Cove 1 Villa Tent - King Bed",
        price: "PHP 23,000 /night",
        details: {
            inclusions: [
                "All Meals Included",
                "Unlimited Access to LasCalas Coves",
                "Unlimited Access to the Gaming Villa",
                "Unlimited Access to the Infinity Pool",
                "Unlimited Use of Standard Kayaks and Other Beach Facilities",
                "Guided Use of the LasCalas Rope Course",
                "Guided Use of the LasCalas Obstacle Course",
            ],
            bed: [
                "1 Bedroom Studio Suite with Balcony",
                "Maximum occupancy: 2",
                "2 Bunk Bed",
                "Pillowtop mattress and Duvet",
                "Free WiFi Connection",
                "16\" Smart TV", // Note: The backslash \ is needed to escape the inch symbol
                "Fully Air-conditioned",
                "Intercom Device",
                "Mini Refrigerator",
                "Coffee Maker",
                "Heater",
                "Microwave",
            ],
            bath: [
                "Marble bathroom",
                "Hairdryer",
                "Complimentary Robe and Slippers",
            ],
        },
        preview_images: Array.from({ length: 11 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Packages/PackagePreview/C1VT/C1VT${i + 1}.jpg`
        ),
    },
    {
        id: 3,
        name: "Cove 1 Villa Tent - Bunk Bed",
        price: "PHP 26,000 /night",
        details: {
            inclusions: [
                "All Meals Included",
                "Unlimited Access to LasCalas Coves",
                "Unlimited Access to the Gaming Villa",
                "Unlimited Access to the Infinity Pool",
                "Unlimited Use of Standard Kayaks and Other Beach Facilities",
                "Guided Use of the LasCalas Rope Course",
                "Guided Use of the LasCalas Obstacle Course"
            ],
            bed: [
                "1 Bedroom Studio Suite with Balcony",
                "Maximum occupancy: 4",
                "2 Bunk Bed",
                "Pillowtop mattress and Duvet",
                "Free WiFi Connection",
                "16\" Smart TV", // Note: The backslash \ is needed to escape the inch symbol
                "Fully Air-conditioned",
                "Intercom Device",
                "Mini Refrigerator",
                "Coffee Maker",
                "Heater",
                "Microwave"
            ],
            bath: [
                "Marble bathroom",
                "Hairdryer",
                "Complimentary Robe and Slippers",
            ],
        },
        preview_images: Array.from({ length: 6 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Packages/PackagePreview/C1VT_BB/C1VT_BB${i + 1}.png`
        ),
    },
    {
        id: 4,
        name: "Lascalas Villa Tents - King Bed",
        price: "PHP 18,500 /night",
        details: {
            inclusions: [
                "All Meals Included",
                "Unlimited Access to LasCalas Coves",
                "Unlimited Access to the Gaming Villa",
                "Unlimited Access to the Infinity Pool",
                "Unlimited Use of Standard Kayaks and Other Beach Facilities",
                "Guided Use of the LasCalas Rope Course",
                "Guided Use of the LasCalas Obstacle Course"
            ],
            bed: [
                "1 Bedroom Studio Suite with Balcony",
                "Maximum occupancy: 4",
                "1 Bunk Bed",
                "Free WiFi Connection",
                "16\" Smart TV", // Escaped the inch symbol again
                "Fully Air-conditioned",
                "Intercom Device",
                "Mini Refrigerator",
                "Coffee Maker",
                "Heater",
                "Microwave"
            ],
            bath: [
                "Hot/Cold Shower",
                "Marble bathroom",
                "Hair Dryer",
                "Complimentary Robe and Slippers"
            ],
        },
        preview_images: Array.from({ length: 4 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Packages/PackagePreview/LC_Villa_KB/LC_Villa_KB${i + 1}.jpg`
        ),
    },
    {
        id: 5,
        name: "Lascalas Villa Tents - Double Size Bunk Bed",
        price: "PHP 21,000 /night",
        details: {
            inclusions: [
                "All Meals Included",
                "Unlimited Access to LasCalas Coves",
                "Unlimited Access to the Gaming Villa",
                "Unlimited Access to the Infinity Pool",
                "Unlimited Use of Standard Kayaks and Other Beach Facilities",
                "Guided Use of the LasCalas Rope Course",
                "Guided Use of the LasCalas Obstacle Course"
            ],
            bed: [
                "1 Bedroom Studio Suite with Balcony",
                "Maximum occupancy: 4",
                "1 Bunk Bed",
                "Free WiFi Connection",
                "16\" Smart TV", // Escaped the inch symbol again
                "Fully Air-conditioned",
                "Intercom Device",
                "Mini Refrigerator",
                "Coffee Maker",
                "Heater",
                "Microwave"
            ],
            bath: [
                "Hot/Cold Shower",
                "Marble bathroom",
                "Hair Dryer",
                "Complimentary Robe and Slippers"
            ],
        },
        preview_images: Array.from({ length: 11 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Packages/PackagePreview/LC_Villa_DSBB/DS${i + 1}.jpg`
        ),
    },
    {
        id: 6,
        name: "Lascalas Villa Tents - Bunk Bed",
        price: "PHP 21,000 /night",
        details: {
            inclusions: [
                "All Meals Included",
                "Unlimited Access to LasCalas Coves",
                "Unlimited Access to the Gaming Villa",
                "Unlimited Access to the Infinity Pool",
                "Unlimited Use of Standard Kayaks and Other Beach Facilities",
                "Guided Use of the LasCalas Rope Course",
                "Guided Use of the LasCalas Obstacle Course"
            ],
            bed: [
                "1 Bedroom Studio Suite with Balcony",
                "Maximum occupancy: 4",
                "1 Bunk Bed",
                "Free WiFi Connection",
                "16\" Smart TV", // Escaped the inch symbol again
                "Fully Air-conditioned",
                "Intercom Device",
                "Mini Refrigerator",
                "Coffee Maker",
                "Heater",
                "Microwave"
            ],
            bath: [
                "Hot/Cold Shower",
                "Marble bathroom",
                "Hair Dryer",
                "Complimentary Robe and Slippers"
            ],
        },
        preview_images: Array.from({ length: 9 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Packages/PackagePreview/LC_Villa_BB/BB${i + 1}.jpg`
        ),
    },
    {
        id: 7,
        name: "Teepee Tents - Camp Cot",
        price: "PHP 7,500 /night",
        details: {
            inclusions: [
                "All Meals Included",
                "Unlimited Access to LasCalas Coves",
                "Unlimited Access to the Gaming Villa",
                "Unlimited Access to the Infinity Pool",
                "Unlimited Use of Standard Kayaks and Other Beach Facilities",
                "Guided Use of the LasCalas Rope Course",
                "Guided Use of the LasCalas Obstacle Course"
            ],
            bed: [
                "1 Bedroom Studio Suite with Balcony",
                "Maximum occupancy: 4",
                "1 Bunk Bed",
                "Free WiFi Connection",
                "16\" Smart TV", // Escaped the inch symbol again
                "Fully Air-conditioned",
                "Intercom Device",
                "Mini Refrigerator",
                "Coffee Maker",
                "Heater",
                "Microwave"
            ],
            bath: [
                "Hot/Cold Shower",
                "Marble bathroom",
                "Hair Dryer",
                "Complimentary Robe and Slippers"
            ],
        },
        preview_images: Array.from({ length: 3 }, (_, i) => 
            `/lascalas_assets/Website/MainPages_Content/Packages/PackagePreview/Teepee/TEE${i + 1}.jpg`
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
    const package_details_cont = "grid grid-cols-2 gap-8 justify-center w-full px-6 mt-[40px] resSm:flex resSm:flex-col";
    const package_name = "font-Raleway font-semibold text-[48px] resSm:text-[24px] resMd:text-[42px]";
    const package_price = "font-Raleway font-semibold text-secondary/60 text-[24px] resSm:text-[26px] resMd:text-[22px]";

    const detPaneButton = "flex-1 py-4 flex items-center justify-center transition-all";
    const detPaneActiveStyle = "bg-primary text-white";
    const detPaneInActiveStyle = "text-gray-400 hover:text-primary hover:bg-gray-100";

    const bullet_cont = "space-y-3 border-2 border-accent p-4 min-h-[350px] rounded-b-[8px]";
    const bullet_text = "font-Nunito font-[700] text-base leading-relaxed";
    const bullet_points = "mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0 border";

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
                <h1 className={`${package_name}`}>{selectedPackage?.name}</h1>
                <h2 className={`${package_price}`}>{selectedPackage?.price}</h2>

                <div className={`${package_details_cont}`}>
                    <div className={`w-full max-w-[400px]`}>
                        <div className="flex bg-gray-50 border-b border-gray-200">
                            {[
                                { id: "inclusions", icon: <FaGift size={20} /> },
                                { id: "bed", icon: <FaBed size={20} /> },
                                { id: "bath", icon: <FaBath size={20} /> }
                            ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setDetPaneActive(tab.id)}
                                className={`${detPaneButton}
                                ${detPaneActive === tab.id ? `${detPaneActiveStyle}` : `${detPaneInActiveStyle}`}`}
                            >
                                {tab.icon}
                            </button>
                            ))}
                        </div>

                        <ul className={`${bullet_cont}`}>
                            {selectedPackage?.details[detPaneActive].map((item, index) => (
                                <li key={index} className={`${start_element_row}`}>
                                    <span className={`${bullet_points}`} />
                                    <span className={`${bullet_text}`}>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-full max-w-[400px] resSm:w-[500px] resMd:w-[600px]">
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
                            className="w-[600px] pb-[40px] resSm:w-[400px] resMd:w-[540px]"
                            navigation
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            {selectedPackage?.preview_images.map((src, index) => (
                                <SwiperSlide key={index}  className={`${center_element_col}`}>
                                    <img src={src} className={`${carousel_preview}`}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}


export default PackageDetails;