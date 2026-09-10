import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const ExploreDasol = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
        //--CONTAINERS--//
        const exploreDasol_cont = "w-full resSm:w-full resMd:w-[500px] resLg:w-[600px] py-[40px]";
        const exploreDasol_label = "font-Nunito hover:cursor-pointer hover:font-semibold hover:scale-105";

         // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const justween_element_row = "flex justify-between";
        const justween_element_col = "flex flex-col justify-between";
        const justcenter_element_row = "flex justify-center";

    const exploreDasol_assets = [
        { id: 1, src: "/lascalas_assets/Website/Dasol/Dasol.jpg", label: "Tambobong Beach", link: "" },
        { id: 2, src: "/lascalas_assets/Website/Dasol/Dasol-1.jpg", label: "Cabongaoan Beach", link: "" },
        { id: 3, src: "/lascalas_assets/Website/Dasol/Dasol-2.jpg", label: "Depth Pool", link: "" },
        { id: 4, src: "/lascalas_assets/Website/Dasol/Dasol-3.jpg", label: "Colibra Island", link: "" },
        { id: 5, src: "/lascalas_assets/Website/Dasol/Dasol-4.jpg", label: "Sand Bar", link: "" },
        { id: 5, src: "/lascalas_assets/Website/Dasol/Dasol-5.jpg", label: "Crocodile Island", link: "" },
        { id: 5, src: "/lascalas_assets/Website/Dasol/Dasol-6.jpg", label: "Balaki Island", link: "" },
        { id: 5, src: "/lascalas_assets/Website/Dasol/Dasol-7.jpg", label: "Osmeña Point", link: "" },
    ]

    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1}
            loop={true}
            breakpoints={{
                360: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1280: { slidesPerView: 3 }
            }}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className={`${exploreDasol_cont}`}
            navigation
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
            }}
        >
            {exploreDasol_assets.map((item) => (
                <SwiperSlide className={`${center_element_col}`}>
                    <a href={item.link || "#"} className={`${center_element_col} group`} target="_blank">
                        <img src={item.src} alt={item.label} className="h-[240px] overflow-hidden rounded-md" loading="lazy"/>
                        <p className={`${exploreDasol_label}`}>{item.label}</p>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ExploreDasol;