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


    const gallery_assets = [...Array(145)].map((_, i) => ({
        id: i + 1,
        src: `/lascalas_assets/Website/Gallery/${i + 1}.png`
    }));

    return (
        <>
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
                depth: 140,
                modifier: 1,
                slideShadows: false,
                }}
                modules={[Navigation, Autoplay]}
                className="w-full resSm:w-full resMd:w-[1100px] resLg:w-[1400px] py-[56px]"
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