import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useState } from "react";

import GalleryModal from "./GalleryModal";

const Gallery = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)

    // MODAL STATES
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


    const gallery_assets = [
        { id: 1, src: "/lascalas_assets/Website/Gallery/1.png" },
        { id: 2, src: "/lascalas_assets/Website/Gallery/2.png" },
        { id: 3, src: "/lascalas_assets/Website/Gallery/3.png" },
        { id: 4, src: "/lascalas_assets/Website/Gallery/4.png" },
        { id: 5, src: "/lascalas_assets/Website/Gallery/5.png" },
        { id: 6, src: "/lascalas_assets/Website/Gallery/6.png" },
        { id: 7, src: "/lascalas_assets/Website/Gallery/7.png" },
        { id: 8, src: "/lascalas_assets/Website/Gallery/8.png" },
        { id: 9, src: "/lascalas_assets/Website/Gallery/9.png" },
        { id: 10, src: "/lascalas_assets/Website/Gallery/10.png" },
        { id: 11, src: "/lascalas_assets/Website/Gallery/11.jpg" },
        { id: 12, src: "/lascalas_assets/Website/Gallery/12.png" },
        { id: 13, src: "/lascalas_assets/Website/Gallery/13.png" },
        { id: 14, src: "/lascalas_assets/Website/Gallery/14.png" },
        { id: 15, src: "/lascalas_assets/Website/Gallery/15.png" },
        { id: 16, src: "/lascalas_assets/Website/Gallery/16.png" },
        { id: 17, src: "/lascalas_assets/Website/Gallery/17.png" },
        { id: 18, src: "/lascalas_assets/Website/Gallery/18.png" },
        { id: 19, src: "/lascalas_assets/Website/Gallery/19.png" },
        { id: 20, src: "/lascalas_assets/Website/Gallery/20.png" },
        { id: 21, src: "/lascalas_assets/Website/Gallery/21.png" },
        { id: 22, src: "/lascalas_assets/Website/Gallery/22.png" },
    ]

    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 140,
                modifier: 1,
                slideShadows: false,
                }}
                modules={[Navigation, Autoplay]}
                className="w-[1400px] py-[56px]"
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {gallery_assets.map((item, index) => (
                    <SwiperSlide className="flex flex-col items-center">
                    <img 
                        src={item.src}  
                        alt={item.label} 
                        className="h-[240px] overflow-hidden rounded-md hover:cursor-pointer"
                        onClick={() => { 
                            setActiveIndex(index);
                            setIsOpen(true);
                        }} />
                    </SwiperSlide>
                ))}
            </Swiper>

            <GalleryModal 
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                galleryItems={gallery_assets}
                currentImg={activeIndex}
            />
        </>
    )
}

export default Gallery;