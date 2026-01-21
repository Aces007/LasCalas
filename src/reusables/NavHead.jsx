import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaAngleDown } from "react-icons/fa6";

const NavHead = () => {
    return (
        <div className="flex flex-row items-center gap-56 py-[56px] px-[56px]">
            {/* NavButtons (Left) */}
            <div className="flex flex-row items-center gap-[40px] border-4 border-black">
                <RxHamburgerMenu size={26}/>
                <div className="flex flex-row items-center gap-[40px]">
                    <Link to="/packages" className="font-Montserrat uppercase">Packages</Link>
                    <Link to="/explore" className="font-Montserrat uppercase">Explore</Link>
                    <Link to="/celeb" className="font-Montserrat uppercase">Celebrations</Link>
                </div>
            </div>

            {/* Logo (Center) */}
            <Link to="/"><img src="/lascalas_assets/lascalasBlack.png" alt="lasCalas logo" className="w-[96px] border-4 border-black" /></Link>

            {/* CTA Btns (Right) */}
            <div className="flex flex-row items-center gap-[8px] border-4 border-black">
                <button classNae="font-Montserrat font-bold flex flex-row items-center gap-[8px]">ENG <FaAngleDown size={20}/></button>
                <button classNae="font-Montserrat font-bold">Book Now</button>
            </div>
        </div>
    )
}


export default NavHead;