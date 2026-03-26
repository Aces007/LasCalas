import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useState } from "react";

const NavHead = ({ theme = "light" }) => {
    const variantIsDark = theme === "dark";
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("ENG");

    const languages = [
        { code: "ENG", label: "English" },
        { code: "FIL", label: "Filipino"},
    ];

    // Styling Variables

        //--CONTAINERS--//
        const variantPaddingDesktop = variantIsDark ? "px-[48px] py-[24px]" : "px-[56px] py-[56px]"
        const variantPaddingMobile = variantIsDark ? "px-[32px] py-[20px]" : "px-[32px] py-[20px]"
        const variantBorder = variantIsDark ? "border-[3px] border-black hover:bg-highlight hover:text-highlight" : "border-[3px] border-background_lightTxt/50 hover:bg-highlight hover:border-highlight";

        //--TEXTS--//
        const variantLogoCol = variantIsDark ? "/lascalas_assets/lascalasBlack.png" : "/lascalas_assets/lascalasWhite.png";
        const variantNavlinks = variantIsDark ? "text-main_text hover:text-highlight hover:font-bold font-Montserrat uppercase resLg:text-[18px]" : "text-background_lightTxt font-Montserrat uppercase resLg:text-[18px] hover:text-highlight hover:font-bold";
        const variantText = variantIsDark ? "text-main_text text-center" : "text-background_lightTxt text-center";
        const variantSVGs = variantIsDark ? "text-main_text" : "text-background_lightTxt";
        const booking_btn_head = "font-Montserrat font-extrabold uppercase p-4 rounded-[6px] w-[45%] resLg:text-[20px] transition-all duration-300 bg-accent";
    

    // -- FLEX STYLING -- //
        const center_element_col = "flex flex-col items-center";
        const start_element_col = "flex flex-col items-start";
        const center_element_row = "flex items-center";
        const start_element_row = "flex items-start";
        const between_element_row = "flex justify-between";
        const center_justify_row = "flex justify-center";
    
    
    return (
        <>
            {/* Desktop Layout (resLg and up: 1280px and above) */}
            <div className={`hidden resLg:grid grid-cols-3 items-center ${variantPaddingDesktop}`}>
                {/* NavButtons (Left) */}
                <div className={`${center_element_row} gap-[24px] resLg:gap-[20px]`}>
                    <RxHamburgerMenu 
                        size={26} 
                        className={`${variantSVGs} cursor-pointer transition-colors resLg:text-[20px] hover:text-highlight`} 
                        onClick={() => setSideBarOpen(true)}
                    />
                    
                    <div className={`${center_justify_row} gap-[24px] resLg:gap-[20px]`}>
                        <Link to="/packagesmenu" className={`${variantNavlinks}`}>Packages</Link>
                        <Link to="/explore" className={`${variantNavlinks}`}>Explore</Link>
                        <Link to="/celebrations" className={`${variantNavlinks}`}>Celebrations</Link>
                    </div>
                </div>

                {/* Logo (Center) */}
                <div className={`${center_justify_row}`}>
                    <Link to="/"><img src={variantLogoCol} alt="lasCalas logo" className="w-[104px]" /></Link>
                </div>

                {/* CTA Btns (Right) */}
                <div className="flex justify-end gap-[24px]">
                    <a href="https://us2.cloudbeds.com/reservation/10IVXw" target="_blank" className={`${booking_btn_head} ${variantBorder} ${variantText}`}>Book Now</a>
                </div>
            </div>

            {/* Mobile/Tablet Layout (below resLg: below 1280px) */}
            <div className={`resLg:hidden ${center_element_row} justify-between ${variantPaddingMobile}`}>
                {/* Logo (Left) */}
                <Link to="/"><img src={variantLogoCol} alt="lasCalas logo" className="resSm:w-[40px] resMd:w-[60px]" /></Link>

                {/* Hamburger Menu (Right) */}
                <RxHamburgerMenu 
                    size={26} 
                    className={`${variantSVGs} cursor-pointer hover:text-highlight transition-colors`} 
                    onClick={() => setSideBarOpen(true)}
                />
            </div>

            {/* SIDEBAR: Pass state and close function as props */}
            <SideBar isOpen={sideBarOpen} toggleSidebar={() => setSideBarOpen(false)} />
        </>
    )
}

export default NavHead;