import {Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // controller that tracks when components enter (mounts or appears) or leave (unmmounts or disappears) the React tree

import Hero from "./pages/Hero";
import About from "./pages/About";
import PackagesMenu from "./pages/PackagesMenu";
import PackageDetails from "./pages/subpages/packages/PackageDetails";
import Explore from "./pages/Explore";
import Celebrations from "./pages/Celebrations";

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
                <Route path="/celeb" element={<Celebrations />}/>
            </Routes>
        </AnimatePresence>
    );
};