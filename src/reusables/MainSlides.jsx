import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import 'swiper/css';

import NavHead from "./NavHead";

const MainSlides = ({
    pageTitle,
    slideContent,
    theme="light",
    autoplay_delay=3000,
}) => {

    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
        //--CONTAINERS--//
        const mainSlides_cont = "grid grid-cols-1 grid-rows-1 w-full overflow-hidden relative group";
        const mainSlides_content = "col-start-1 row-start-1 w-full h-full z-0";
        const mainSlides_slide_contents = "h-[80vh] resSm:h-[40vh] w-full overflow-hidden hover:cursor-pointer";
        const mainSlides_head_cont = "col-start-1 row-start-1 w-full h-full z-50 flex flex-col justify-between gap-8 resMd:gap-32";
        const mainSlides_title_cont = "flex-grow flex justify-center resMd:relative resMd:bottom-[80px]";
        
        //--TEXTS--//
        const mainSlides_titles = "font-AnticDidone text-background_lightTxt resSm:text-[48px] resMd:text-[80px] resMd:relative resMd:top-[80px] resLg:text-[96px]";

        
    return (
        <div className={`${mainSlides_cont}`}>
            <div className={`${mainSlides_content}`}>
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay]}
                    className="w-full h-full resSm:w-[100vw] resSm:h-[40vh]"
                    autoplay={{
                        delay: autoplay_delay,
                        disableOnInteraction: false,
                    }}
                    speed={1000}
                >
                    {slideContent.map((item) => (
                        <SwiperSlide>
                            <img
                                src={item.src}
                                className={`${mainSlides_slide_contents}`}
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsOpen(true);
                                }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className={`${mainSlides_head_cont}`}>
                <div>
                    <NavHead theme={`${theme}`} />
                </div>

                <div className={`${mainSlides_title_cont}`}>
                    <h1 className={`${mainSlides_titles}`}>{pageTitle}</h1>
                </div>
            </div>
        </div>
    )
}


export default MainSlides;