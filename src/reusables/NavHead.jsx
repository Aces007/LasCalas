import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";
import SideBar from "./SideBar";
import { useState } from "react";

const NavHead = ({ theme = "light" }) => {
    const variantIsDark = theme === "dark";
    const [sideBarOpen, setSideBarOpen] = useState(false);

    // Styling Variables
    const variantPaddingDesktop = variantIsDark ? "px-[48px] py-[24px]" : "px-[56px] py-[56px]"
    const variantPaddingMobile = variantIsDark ? "px-[32px] py-[20px]" : "px-[32px] py-[20px]"
    const variantLogoCol = variantIsDark ? "/lascalas_assets/lascalasBlack.png" : "/lascalas_assets/lascalasWhite.png";
    const variantNavlinks = variantIsDark ? "text-main_text hover:text-highlight hover:font-bold" : "text-background_lightTxt hover:text-highlight hover:font-bold";
    const variantText = variantIsDark ? "text-main_text" : "text-background_lightTxt";
    const variantBorder = variantIsDark ? "border-[3px] border-black hover:bg-highlight hover:text-background_lightTxt" : "border-[3px] border-background_lightTxt hover:bg-highlight";
    const variantSVGs = variantIsDark ? "text-main_text" : "text-background_lightTxt";

    return (
        <>
            {/* Desktop Layout (resLg and up: 1280px and above) */}
            <div className={`hidden resLg:grid grid-cols-3 items-center ${variantPaddingDesktop}`}>
                {/* NavButtons (Left) */}
                <div className="flex items-center gap-[24px]">
                    <RxHamburgerMenu 
                        size={26} 
                        className={`${variantSVGs} cursor-pointer hover:text-highlight transition-colors`} 
                        onClick={() => setSideBarOpen(true)}
                    />
                    
                    <div className="flex justify-center gap-[24px]">
                        <Link to="/packagesmenu" className={`font-Montserrat uppercase ${variantNavlinks}`}>Packages</Link>
                        <Link to="/explore" className={`font-Montserrat uppercase ${variantNavlinks}`}>Explore</Link>
                        <Link to="/celebrations" className={`font-Montserrat uppercase ${variantNavlinks}`}>Celebrations</Link>
                    </div>
                </div>

                {/* Logo (Center) */}
                <div className="flex justify-center">
                    <Link to="/"><img src={variantLogoCol} alt="lasCalas logo" className="w-[104px]" /></Link>
                </div>

                {/* CTA Btns (Right) */}
                <div className="flex justify-end gap-[24px]">
                    <button className={`font-Montserrat font-bold flex flex-row items-center gap-[8px] ${variantText}`}>
                        ENG <FaAngleDown size={20} className={`${variantSVGs}`}/>
                    </button>
                    <a href="https://us2.cloudbeds.com/reservation/10IVXw" target="_blank" className={`font-Montserrat font-extrabold uppercase p-4 rounded-[8px] ${variantBorder} ${variantText} hover:p-6 transition-all duration-300`}>Book Now</a>
                </div>
            </div>

            {/* Mobile/Tablet Layout (below resLg: below 1280px) */}
            <div className={`resLg:hidden flex items-center justify-between ${variantPaddingMobile}`}>
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