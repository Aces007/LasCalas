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
        { id: 1, src: "/lascalas_assets/Website/Dasol/Dasol1.jpg", label: "Tambobong Beach", link: "https://www.tripadvisor.com.ph/Attraction_Review-g294248-d2081254-Reviews-Tambobong_Beach-Luzon.html" },
        { id: 2, src: "/lascalas_assets/Website/Dasol/Dasol2.png", label: "Cabongaoan Beach", link: "https://www.tripadvisor.com.ph/Attraction_Review-g2559454-d6608888-Reviews-Cabongaoan_Beach-Burgos_Ilocos_Norte_Province_Ilocos_Region_Luzon.html" },
        { id: 3, src: "/lascalas_assets/Website/Dasol/Dasol3.jpg", label: "Depth Pool", link: "https://ilovepangasinan.com/cabongaoan-beach-death-pool-in-burgos-pangasinan/" },
        { id: 4, src: "/lascalas_assets/Website/Dasol/Dasol4.png", label: "Colibra Island", link: "https://ilovepangasinan.com/colibra-island-in-dasol-pangasinan/" },
        { id: 5, src: "/lascalas_assets/Website/Dasol/Dasol5.png", label: "Sand Bar", link: "" },
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
                        <img src={item.src} alt={item.label} className="h-[240px] overflow-hidden rounded-md" />
                        <p className={`${exploreDasol_label}`}>{item.label}</p>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ExploreDasol;