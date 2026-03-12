import {Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Hero from "./pages/Hero";
import About from "./pages/About";
import PackagesMenu from "./pages/PackagesMenu";
import PackageDetails from "./pages/subpages/packages/PackageDetails";
import Explore from "./pages/Explore";
import ATVAdv from "./pages/subpages/explore/ATVAdv";
import WaterAdv from "./pages/subpages/explore/WaterAdv";
import BuggyAdv from "./pages/subpages/explore/BuggyAdv";
import RopeCourse from "./pages/subpages/explore/RopeCourse";
import Celebrations from "./pages/Celebrations";
import EventPavilion from "./pages/subpages/celebration_showcase/EventPavilion";
import Pergola from "./pages/subpages/celebration_showcase/Pergola";
import GamingPool from "./pages/subpages/celebration_showcase/GamingPool";
import CampingGround from "./pages/subpages/celebration_showcase/CampingGround";
import Gazebo from "./pages/subpages/celebration_showcase/Gazebo";
import Amenities from "./pages/Amenities";
import FAQs from "./pages/FAQs";

export default function RouteFlow () {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Hero />} />
                <Route path="/about" element={<About />} />
                <Route path="/packagesmenu" element={<PackagesMenu />} />
                <Route path="/packagedetails/:id" element={<PackageDetails />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/exploreATV" element={<ATVAdv />} />
                <Route path="/exploreWater" element={<WaterAdv />} />
                <Route path="/exploreBug" element={<BuggyAdv />} />
                <Route path="/exploreRope" element={<RopeCourse />} />
                <Route path="/celebrations" element={<Celebrations />} />
                <Route path="/eventPavilion" element={<EventPavilion />} />
                <Route path="/pergola" element={<Pergola />} />
                <Route path="/gamingPool" element={<GamingPool />} />
                <Route path="/campingGround" element={<CampingGround />} />
                <Route path="/gazebo" element={<Gazebo />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/faqs" element={<FAQs />} />
                <Route path="/amenities" element={<Amenities />} />
            </Routes>
        </AnimatePresence>
    );
};