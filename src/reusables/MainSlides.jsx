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
                                className="w-full overflow-hidden rounded-md hover:cursor-pointer"
                                onClick={() => {
                                    setActiveIndex(index);
                                    setIsOpen(true);
                                }} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="col-start-1 row-start-1 w-full h-full z-50 flex flex-col justify-between">
                <div>
                    <NavHead theme={`${theme}`} />
                </div>

                <div className="flex-grow flex justify-center pb-20">
                    <h1 className="font-AnticDidone text-background_lightTxt text-slide_h1">{pageTitle}</h1>
                </div>
            </div>
        </div>
    )
}


export default MainSlides;