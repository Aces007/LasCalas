import { MdOutlineLocalPhone, MdOutlineEmail  } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";

import { Link } from "react-router-dom";


const NavFoot = () => {
    // Styling Variables
    const foot_cont = "flex flex-col items-center px-[32px] py-[56px] w-full border-4";
    const foot_content = "flex justify-between gap-[40px] w-full py-[40px] px-[72px]";


    const locationContact = "flex items-center gap-[24px]";
    const location_explore = "flex flex-col items-start gap-[40px]";
    const location_info_cont = "flex flex-col items-start gap-[16px]";

    const location_info_content = "flex flex-col items-start gap-[16px]"
    const foot_location_p = "w-[70%] text-main_text/60 text-location_p";
    const foot_contacts_p = "text-main_text/60 text-contacts_p";

    const foot_display = "font-Libre text-primary";
    const foot_h3s = "font-Raleway font-medium text-foot_h3s";


    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";

    // Map Iframe Resource
    const foot_map = {
            title: "LasCalas Location",
            src: "/lascalas_assets/Website/Map/map.png",
            class: "w-[400px] h-[500px] rounded-[8px] hover:scale-105",
        }

    return (
        <div className={foot_cont}>

            <div className={foot_content}>

                <div className={location_explore}>
                    <div className={location_info_cont}>
                        <h1 className="font-Raleway text-[32px]">Our Location</h1>

                        <div className={location_info_content}>
                            <p className={foot_location_p}><span className="text-accent">LasCalas Resort and Luxury Estate</span>, Barangay Osmena, Dasol, 2411 Pangasinan</p>
                            
                            <div className="flex flex-col items-start gap-[8px]">
                                <div className={locationContact}>
                                    <MdOutlineLocalPhone size={24} className="text-main_text/60"/>
                                    <p className={foot_contacts_p}>(+63) 917 707 3891</p>
                                </div>
                                <div className={locationContact}>
                                    <MdOutlineLocalPhone size={24} className="text-main_text/60"/>
                                    <p className={foot_contacts_p}>(+63) 2 8531 3008</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full overflow-hidden relative">
                        <h1 className="font-Raleway text-[32px]">Explore <span className="hover:text-highlight hover:font-semibold hover:cursor-pointer">Dasol</span></h1>
                        {/* <ExploreCarousel />  */}
                    </div>
                </div>

                <div className="flex flex-col gap-[24px]">
                    <div className="flex items-center justify-between">
                        <h1 className="font-Raleway text-[32px]">Map</h1>
                        <a href="https://maps.app.goo.gl/1gqmxGKsbwLfq4bo9" className="font-Montserrat text-accent hover:text-highlight hover:underline" target="_blank">View On Google Maps</a>
                    </div>
                    <img 
                        src={foot_map.src} 
                        title={foot_map.title}
                        className={foot_map.class}
                    ></img>
                </div>
            </div>

            <div></div>

            <div className={`${center_element_row} gap-40`}>
                <div className={`${center_element_col} gap-[4px]`}>
                    <img src="/lascalas_assets/lascalasBlue.png" alt="LasCalas Logo Blue" className="w-[120px]" />
                    <div className={`${center_element_col}`}>
                        <h1 className={`${foot_display} text-foot_display`}>LasCalas</h1>
                        <h2 className={`${foot_display} text-foot_display2`}>Resort & LUXURY ESTATE</h2>
                    </div>

                    <p className={`${foot_display} text-foot_display3`}><span className="text-main_text">Indulge in</span> Serenity | <span className="text-main_text">Discover Your Sanctuary of</span> Luxury</p>
                </div>

                <div className={`${start_element_row} gap-24`}>
                    <div className={`${start_element_col} gap-8`}>
                        <h3 className={`${foot_h3s}`}>Navigation</h3>

                        <div className={`${start_element_col} gap-[16px]`}>
                            <Link to="/packages" className={`font-Montserrat text-foot_body_links`}>Packages</Link>
                            <Link to="/explore" className={`font-Montserrat text-foot_body_links`}>Explore</Link>
                            <Link to="/celeb" className={`font-Montserrat text-foot_body_links`}>Celebrations</Link>
                        </div>
                    </div>

                    <div className={`${start_element_col} gap-8`}>
                        <h3 className={`${foot_h3s}`}>Contact Information</h3>

                        <div className={`${start_element_col} gap-[16px]`}>
                            <div className={`${center_element_row} gap-[8px]`}>
                                <FiFacebook size={24}/>
                                <a href="" className="font-Nunito text-foot_body_links">Facebook</a>
                            </div>

                            <div className={`${center_element_row} gap-[8px]`}>
                                <FaInstagram size={24}/>
                                <a href="" className="font-Nunito text-foot_body_links">Instagram</a>
                            </div>

                            <div className={`${center_element_row} gap-[8px]`}>
                                <MdOutlineEmail  size={24}/>
                                <a href="" className="font-Nunito text-foot_body_links">lascalasresort@gmail.com</a>
                            </div>

                            <div className={`${center_element_row} gap-[8px]`}>
                                <MdOutlineLocalPhone size={24}/>
                                <a href="" className="font-Nunito text-foot_body_links">(+63) 917 707 3891</a>
                            </div>
                            
                            <div className={`${center_element_row} gap-[8px]`}>
                                <MdOutlineLocalPhone size={24}/>
                                <a href="" className="font-Nunito text-foot_body_links">(+63) 2 8531 3008</a>
                            </div>
                        </div>
                    </div>

                    <div className={`${start_element_col} gap-[32px]`}>
                        <div className={`${start_element_col} gap-[8px]`}>
                            <h3 className={`${foot_h3s}`}>Newsletter</h3>
                            
                            <div>
                                <img src="/lascalas_assets/Website/Placeholders/Placeholders1.png" alt="" className="w-[360px]"/>
                            </div>
                        </div>
                        
                        <div className={`${start_element_col} gap-[8px]`}>
                            <h3 className={`${foot_h3s}`}>Email Us</h3>
                            
                            <div>
                                <img src="public/lascalas_assets/Website/Placeholders/Placeholders2.png" alt="" className="w-[360px]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


export default NavFoot;