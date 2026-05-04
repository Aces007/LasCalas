import { MdOutlineLocalPhone, MdOutlineEmail, MdOutlineShareLocation   } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

import { href, Link } from "react-router-dom";

import ExploreDasol from "./ExploreDasol";
import Gallery from "./Gallery";



const NavFoot = () => {
    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)

        //--CONTAINERS--//    
        const foot_cont = "flex flex-col items-center px-[16px] py-[24px] w-full";
        const foot_content = "flex flex-col justify-between gap-[120px] w-full py-[40px] px-[8px]";
        const locationContact = "flex items-center gap-[24px]";
        const location_Map_cont = "flex flex-col resMd:flex-row resLg:flex-row justify-between px-[32px] gap-[40px] resSm:gap-[24px]";
        const foot_loc_explore = "flex flex-col items-start gap-[40px]";
        const foot_location_cont = "flex flex-col items-start gap-[16px]";
        const foot_location_content = "flex flex-col items-start gap-[16px]"
        const foot_explore_cont = "flex flex-col items-start gap-[8px] object-cover overflow-hidden relative";
        const foot_map_cont = "flex flex-col gap-[24px]";
        const mainFooter_cont = "flex flex-col items-center justify-center gap-[24px] px-[24px] resSm:gap-[56px] resSm:px-[24px] resMd:flex-row resMd:gap-[80px] resMd:px-[48px] resLg:flex-row resLg:gap-24 resLg:px-[48px]";
        const newsletter_input_foot = "text-main_text border border-3 border-main_text/70 rounded-[8px] resSm:w-[310px] resSm:h-[60px] resMd:w-[320px] resMd:h-[60px] resLg:w-[310px] py-[20px] px-[24px]";

        // -- TEXTS -- //
        const foot_section_heads = "font-Raleway resSm:text-[20px] resMd:text-[26px] resLg:text-[32px]";
        const foot_location_p = "w-[70%] text-main_text/60 resSm:text-[14px] resSm:w-[90%] resMd:text-[16px] resLg:text-[18px]";
        const foot_contacts_p = "text-main_text/60 resSm:text-[14px] resMd:text-[16px] resLg:text-[18px]";
        const foot_display = "font-Libre text-primary";
        const foot_h3s = "font-Raleway font-medium text-[20px] resSm:text-[18px] resMd:text-[20px]";
        const foot_svgs = "text-main_text/80";
        const navLinks_foot = "font-Montserrat text-main_text/80 resSm:text-[15px] hover:text-highlight";
        const contactLinks_foot = "font-Nunito text-main_text/80 resSm:text-[16px] hover:text-highlight";
        const reachOut_btn_foot = "bg-primary text-background_lightTxt font-Montserrat font-semibold uppercase w-full px-[56px] py-[20px] rounded-[8px] hover:bg-highlight hover:text-background_lightTxt hover:font-bold block text-center resMd:w-[320px] resMd:h-[60px]";

        // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const between_element_row = "flex justify-between";

    
    // Map Iframe Resource
    const foot_map = {
        title: "LasCalas Location",
        src: "/lascalas_assets/Website/Map/map.webp",
        class: "w-[400px] h-[500px] rounded-[8px] hover:scale-105",
    }

    const contact_info_map = [
        "(+63) 917 707 3891",
        "(+63) 2 8531 3008",
    ]

    {/* CONTACT INFORMATION ARRAY */}
    const contact_links_map = [
        {
            id: 1,
            iconPack: <FiFacebook size={24} className={`${foot_svgs} hover:text-highlight`}/>,
            label: "Facebook",
            href: "https://www.facebook.com/lascalasresortluxuryestate/",
            class: "hover:text-highlight",
            target: "_blank",
        },
        {
            id: 2,
            iconPack: <FaInstagram size={24} className={`${foot_svgs} hover:text-highlight`}/>,
            label: "Instagram",
            href: "",
            class: "hover:text-highlight",
            target: "_blank",
        },
        {
            id: 3,
            iconPack: <MdOutlineEmail size={24} className={`${foot_svgs} hover:text-highlight`}/>,
            label: "info@lascalasresort.com",
            href: "mailto:info@lascalasresort.com",
            class: "hover:text-highlight",
            target: "_blank",
        },
        {
            id: 4,
            iconPack: <MdOutlineLocalPhone size={24} className={`${foot_svgs} hover:text-highlight`}/>,
            label: "(+63) 917 707 3891",
            href: "tel:+639177073891",
            class: "hover:text-highlight",
            target: "_blank",
        },
        {
            id: 5,
            iconPack: <MdOutlineLocalPhone size={24} className={`${foot_svgs} hover:text-highlight`}/>,
            label: "(+63) 2 8531 3008",
            href: "tel:+63285313008",
            class: "hover:text-highlight",
            target: "_blank",
        },
    ]

    return (
        <div className={`${foot_cont}`}>
            <div className={`${foot_content}`}>

                {/* LOCATION AND MAP CONTAINER */}
                <div className={`${location_Map_cont}`}>
                    <div className={foot_loc_explore}>
                        <div className={foot_location_cont}>
                            <h1 className={`${foot_section_heads}`}>Our Location</h1>
                            <div className={foot_location_content}>
                                <div className={locationContact}>
                                    <MdOutlineShareLocation size={24} className="text-main_text/60"/>
                                    <p className={foot_location_p}><span className="text-accent">LasCalas Resort and Luxury Estate</span>, Barangay Osmena, Dasol, 2411 Pangasinan</p>
                                </div>
                    
                                {/* Contact Number - Information */}
                                {contact_info_map.map((number, index) => (
                                    <div key={index} className="flex flex-col items-start gap-[8px]">
                                        <div className={locationContact}>
                                            <MdOutlineLocalPhone size={24} className="text-main_text/60"/>
                                            <p className={foot_contacts_p}>{number}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`${foot_explore_cont} resSm:w-[80%]`}>
                            <h1 className={`${foot_section_heads}`}>Explore <a href="https://seepangasinan.com/wheretogo/dasol/" target="_blank" className="hover:text-highlight hover:font-semibold hover:cursor-pointer">Dasol</a></h1>
                            <ExploreDasol />
                        </div>  
                    </div>

                    <div className={`${foot_map_cont}`}>
                        <div className="flex items-center justify-between">
                            <h1 className={`${foot_section_heads}`}>Map</h1>
                            <a href="https://maps.app.goo.gl/1gqmxGKsbwLfq4bo9" className="font-Montserrat text-accent hover:text-highlight hover:underline" target="_blank">View On Google Maps</a>
                        </div>
                        <img
                            src={foot_map.src}
                            title={foot_map.title}
                            className={foot_map.class}
                            loading="lazy"
                        ></img>
                    </div>
                </div>


                {/* GALLERY CONTAINER */}
                <div className={`px-[24px]`}>
                    <h1 className={`${foot_section_heads}`}>Gallery</h1>
                    <Gallery />
                </div>


                {/* FOOTER CONTAINER */}
                <div className={`${center_element_col} gap-24`}>
                    <div className={`${mainFooter_cont}`}>
                        <div className={`${center_element_col} gap-[4px] resSm:w-full resMd:w-[30%] resLg:w-[50%]`}>
                            <img src="/lascalas_assets/lascalasBlue.webp" alt="LasCalas Logo Blue" className="resSm:w-[80px] resMd:w-[120px] resLg:w-[132px]" loading="lazy"/>
                            <div className={`${center_element_col}`}>
                                <h1 className={`${foot_display} resSm:text-[24px] resMd:text-[28px] resLg:text-[28px]`}>LasCalas</h1>
                                <h2 className={`${foot_display} resSm:text-[16px] resMd:text-[16px] resLg:text-[18px]`}>Resort & LUXURY ESTATE</h2>
                            </div>
                            <p className={`${foot_display} text-center resSm:text-[14px] resMd:text-[13px] resLg:text-[17px]`}><span className="text-main_text">Indulge in</span> Serenity | <br /> <span className="text-main_text">Discover Your Sanctuary of</span> Luxury</p>
                        </div>

                        <div className={`${start_element_col} justify-evenly gap-[50px] resSm:gap-[40px] resSm:items-center resMd:flex-row resLg:flex-row resLg:gap-[90px]`}>
                            <div className={`${start_element_col} resSm:items-center gap-8`}>
                                <h3 className={`${foot_h3s}`}>Navigation</h3>
                                <div className={`${start_element_col} resSm:items-center resMd:${start_element_col} gap-[16px]`}>
                                    <Link to="/packagesmenu" className={`${navLinks_foot}`}>Packages</Link>
                                    <Link to="/explore" className={`${navLinks_foot}`}>Explore</Link>
                                    <Link to="/celebrations" className={`${navLinks_foot}`}>Celebrations</Link>
                                </div>
                            </div>

                            <div className={`${start_element_col} resSm:items-center gap-8`}>
                                <h3 className={`${foot_h3s}`}>Contact Information</h3>
                                <div className={`${start_element_col} resSm:items-center gap-[16px]`}>
                                    {contact_links_map.map((item) => (
                                        <div className={`${center_element_row} ${item.class} gap-[8px]`}>
                                            {item.iconPack}
                                            <a href={item.href} className={`${contactLinks_foot}`}>{item.label}</a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={`${start_element_col} gap-[32px] resSm:items-center resSm:w-full resMd:w-full resLg:w-[360px]`}>
                                <div className={`hidden ${start_element_col} resSm:items-center gap-[8px]`}>
                                    <h3 className={`${foot_h3s}`}>Newsletter</h3>
                    
                                    {/* PLACEHOLDER 1 - Space for Newsletter field */}
                                    <div className={`${center_element_row} justify-center`}> 
                                        <input type="text" placeholder="Email for newsletter" className={`${newsletter_input_foot}`} />

                                        {/* <FaArrowRight size={24} className="text-main_text/60" /> */}
                                    </div>
                                </div>
                    
                                <div className={`${start_element_col} resSm:items-center gap-[24px]`}>
                                    <h3 className={`${foot_h3s}`}>Email Us</h3>
                    
                                    {/* PLACEHOLDER 2 - Space for Email Us Button */}
                                    <div className="w-full">
                                        <a href="mailto:info@lascalasresort.com" className={`${reachOut_btn_foot}`}>Reach Out To Us Here</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <p className="text-main_text/80 resSm:text-center">© 2026 LasCalas Resort & LUXURY ESTATE</p>
                </div>
            </div>

        </div>
    )
};


export default NavFoot;