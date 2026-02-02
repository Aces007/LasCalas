import { IoMdClose } from "react-icons/io";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import { img } from "framer-motion/client";
import { useEffect } from "react";

const GalleryModal = ({ isOpen, onClose, galleryItems, currentImg }) => {
    if (!isOpen) return null;
    

    const modalCont = "bg-main_text/90 fixed z-50 inset-0 flex flex-col items-center justify-center gap-16 text-gal_modal_close";
    const modalCloseButton = "flex items-center justify-center text-accent font-Montserrat uppercase hover:text-highlight hover:font-semibold";
    const modalH1 = "font-Libre text-background_lightTxt/90 font-semibold text-gal_modal_h1";

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    useEffect(() => {
        const handleEscapeKey = (e) => {
            if (e.key === "Escape") OnClose();
        };

        window.addEventListener("keydown", handleEscapeKey);
        return () => window.removeEventListener("keydown", handleEscapeKey)
    }, [onClose]);

    return (
        // inset-0 = "top:0,bottom:0,left:0,right:0"
        <div className={`${modalCont}`}>
            <button className={`${modalCloseButton}`} onClick={onClose}>
                Close<IoMdClose size={32} /> 
            </button>

            <h1 className={`${modalH1}`}>A New Standard of Luxury</h1>

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
                pagination={pagination}
                modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                className="w-[1500px] pb-[64px]"
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                {galleryItems.map((item) => (
                    <SwiperSlide key={item.id}  className="flex flex-col items-center">
                        <img src={item.src} className="h-[400px] overflow-hidden rounded-md hover:cursor-pointer"/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

        
    )
}

export default GalleryModal;