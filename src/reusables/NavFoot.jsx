import { MdOutlineLocalPhone } from "react-icons/md";

import ExploreCarousel from "./ExploreCarousel";

const NavFoot = () => {

    const locationContact = "flex items-center gap-[24px]"
    const location_explore = "flex flex-col items-start gap-[40px]";
    const location_info_cont = "flex flex-col items-start gap-[16px]";

    return (
        <div className="flex flex-col items-center px-[32px] py-[56px] w-full border-4">

            <div className="flex justify-between gap-[40px] w-full py-[40px] px-[72px]">

                <div className={location_explore}>
                    <div className={location_info_cont}>
                        <h1 className="font-Raleway text-[32px]">Our Location</h1>

                        <div className="flex flex-col items-start gap-[16px]">
                            <p className="w-[60%] text-main_text/60"><span className="text-accent">LasCalas Resort and Luxury Estate</span>, Barangay Osmena, Dasol, 2411 Pangasinan</p>
                            
                            <div className="flex flex-col items-start gap-[8px]">
                                <div className={locationContact}>
                                    <MdOutlineLocalPhone size={24} className="text-main_text/60"/>
                                    <p className="text-main_text/60">(+63) 917 707 3891</p>
                                </div>
                                <div className={locationContact}>
                                    <MdOutlineLocalPhone size={24} className="text-main_text/60"/>
                                    <p className="text-main_text/60">(+63) 2 8531 3008</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-Raleway text-[32px]">Explore <span className="hover:text-highlight hover:font-semibold hover:cursor-pointer">Dasol</span></h1>
                        {/* <ExploreCarousel />  */}
                    </div>
                </div>

                <div className="">
                    <h1 className="font-Raleway text-[32px]">Map</h1>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3996.5647398879482!2d119.80186907531028!3d15.92466758473409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3393f335067c7aef%3A0x94f902849dcb5bf!2sLasCalas%20Resort%20and%20Luxury%20Estate!5e1!3m2!1sen!2sph!4v1769501313567!5m2!1sen!2sph" 
                        title="LasCalas Location"
                        className="w-[400px] h-[400px] rounded-[8px]"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div></div>

            <div></div>

        </div>
    )
}


export default NavFoot;