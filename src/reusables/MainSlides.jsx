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

    return (
        <div className="grid grid-cols-1 grid-rows-1 w-full overflow-hidden relative group">
            <div className="col-start-1 row-start-1 w-full h-full z-0">
                <Swiper
                    centeredSlides={true}
                    slidesPerView={1}
                    loop={true}
                    modules={[Autoplay]}
                    className="w-full h-full"
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
                                className="h-[80vh] resSm:h-[30vh] w-full overflow-hidden hover:cursor-pointer"
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsOpen(true);
                                }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="col-start-1 row-start-1 w-full h-full z-50 flex flex-col justify-between gap-8 resMd:gap-32">
                <div>
                    <NavHead theme={`${theme}`} />
                </div>

                <div className="flex-grow flex justify-center">
                    <h1 className="font-AnticDidone text-background_lightTxt resSm:text-[48px] resMd:text-[80px] resLg:text-[104px]">{pageTitle}</h1>
                </div>
            </div>
        </div>
    )
}


export default MainSlides;