import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

const ExploreDasol = () => {

    // Not accurate data yet, change this as soon as possible
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
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 50,
            modifier: 1,
            slideShadows: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="w-[600px] py-[40px]"
            navigation
            autoplay={{
                delay: 500,
                disableOnInteraction: false,
            }}
        >
            {exploreDasol_assets.map((item) => (
                <SwiperSlide className="flex flex-col items-center">
                    <a href={item.link || "#"} className="flex flex-col items-center group" target="_blank">
                        <img src={item.src} alt={item.label} className="h-[240px] overflow-hidden rounded-md" />
                        <p className="font-Nunito hover:cursor-pointer hover:font-semibold hover:scale-105">{item.label}</p>
                    </a>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default ExploreDasol;