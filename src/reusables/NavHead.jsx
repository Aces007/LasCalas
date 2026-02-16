import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";

const NavHead = ({ theme = "light" }) => {
    const variantIsDark = theme === "dark";

    // Styling Variables (USE THIS FORMAT: Permanent Styling [like font fam] then responsive styles starting from smallest size)
    const variantPadding = variantIsDark ? "px-[48px] py-[24px]" : "px-[56px] py-[56px]"
    const variantLogoCol = variantIsDark ? "/lascalas_assets/lascalasBlack.png" : "/lascalas_assets/lascalasWhite.png";
    const variantNavlinks = variantIsDark ? "text-main_text hover:text-highlight hover:font-bold" : "text-background_lightTxt hover:text-highlight hover:font-bold";
    const variantText = variantIsDark ? "text-main_text" : "text-background_lightTxt";
    const variantBorder = variantIsDark ? "border-[3px] border-black hover:bg-highlight hover:text-background_lightTxt" : "border-[3px] border-background_lightTxt hover:bg-highlight";
    const variantSVGs = variantIsDark ? "text-main_text" : "text-background_lightTxt";


    return (
        <div className={`grid grid-cols-3 items-center ${variantPadding}`}>
            {/* NavButtons (Left) */}
            <div className="flex items-center gap-[24px]">
                <RxHamburgerMenu size={26} className={`${variantSVGs}`}/>
                <div className="flex justify-center gap-[24px]">
                    <Link to="/packagesmenu" className={`font-Montserrat uppercase ${variantNavlinks}`}>Packages</Link>
                    <Link to="/explore" className={`font-Montserrat uppercase ${variantNavlinks}`}>Explore</Link>
                    <Link to="/celeb" className={`font-Montserrat uppercase ${variantNavlinks}`}>Celebrations</Link>
                </div>
            </div>

            {/* Logo (Center) */}
            <div className="flex justify-center">
                <Link to="/"><img src={variantLogoCol} alt="lasCalas logo" className="w-[104px]" /></Link>
            </div>

            {/* CTA Btns (Right) */}
            <div className="flex justify-end gap-[24px]">
                <button className={`font-Montserrat font-bold flex flex-row items-center gap-[8px] ${variantText}`}>ENG <FaAngleDown size={20} className={`${variantSVGs}`}/></button>
                <button className={`font-Montserrat font-extrabold uppercase p-4 rounded-[8px] ${variantBorder} ${variantText} hover:p-6`}>Book Now</button>
            </div>
        </div>
    )
}


export default NavHead;