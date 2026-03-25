import { IoMdClose } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow, Keyboard } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { useEffect } from "react";

const GalleryModal = ({ isOpen, onClose, galleryItems, currentImg }) => {
    if (!isOpen) return null;
    
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
        //--CONTAINERS--//
        const modalCont = "bg-main_text/90 fixed z-50 inset-0 flex flex-col items-center justify-center gap-16 text-gal_modal_close";
        const sliderCont_galModal = "pb-[64px] resSm:w-[380px] resSm:h-[400px] resMd:w-[1040px] resMd:h-[540px] resLg:w-[1400px]";
        const sliderContent_galModal = "h-[400px] overflow-hidden rounded-md hover:cursor-pointer";
        
        //--TEXTS--//
        const modalCloseButton = "flex items-center justify-center text-accent font-Montserrat uppercase hover:text-highlight hover:font-semibold resSm:text-[24px] resMd:text-[26px] resLg:text-[32px]";
        const modalH1 = "font-Libre text-background_lightTxt/90 font-semibold resSm:text-[24px] resMd:text-[32px] resLg:text-[40px]";
        
        // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const justween_element_row = "flex justify-between";
        const justween_element_col = "flex flex-col justify-between";
        const justcenter_element_row = "flex justify-center";

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    // Using keybinding to close modal using ESCAPE key
    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleEscapeKey);
        return () => window.removeEventListener("keydown", handleEscapeKey)
    }, [onClose]);

    return (
        <div className={`${modalCont}`}>
            <button className={`${modalCloseButton}`} onClick={onClose}>
                Close<IoMdClose /> 
            </button>

            <h1 className={`${modalH1}`}>A New Standard of Luxury</h1>

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
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
                modules={[EffectCoverflow, Navigation, Autoplay, Keyboard]}
                className={`${sliderCont_galModal}`}
                navigation
                keyboard={{
                    enabled: true,
                    onlyInViewport: false
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {galleryItems.map((item) => (
                    <SwiperSlide key={item.id}  className={`${center_element_col}`}>
                        <img src={item.src} className={`${sliderContent_galModal}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default GalleryModal;