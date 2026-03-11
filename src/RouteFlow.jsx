import {Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // controller that tracks when components enter (mounts or appears) or leave (unmmounts or disappears) the React tree

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
import EventPavilion from "./pages/subpages/celebrations/EventPavilion";
import Pergola from "./pages/subpages/celebrations/Pergola";
import GamingPool from "./pages/subpages/celebrations/GamingPool";
import CampingGround from "./pages/subpages/celebrations/CampingGround";
import Gazebo from "./pages/subpages/celebrations/Gazebo";

export default function RouteFlow () {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Hero />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/packagesmenu" element={<PackagesMenu />}/>
                <Route path="/packagedetails/:id" element={<PackageDetails />}/>
                <Route path="/explore" element={<Explore />}/>
                <Route path="/exploreATV" element={<ATVAdv />}/>
                <Route path="/exploreWater" element={<WaterAdv />}/>
                <Route path="/exploreBug" element={<BuggyAdv />}/>
                <Route path="/exploreRope" element={<RopeCourse />}/>
                <Route path="/celeb" element={<Celebrations />}/>
                <Route path="/eventPav" element={<EventPavilion />}/>
                <Route path="/pergola" element={<Pergola />}/>
                <Route path="/gamPool" element={<GamingPool />}/>
                <Route path="/campGround" element={<CampingGround />}/>
                <Route path="/gaze" element={<Gazebo />}/>

            </Routes>
        </AnimatePresence>
    );
};