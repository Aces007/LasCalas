import {Routes, Route, useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion"; // controller that tracks when components enter (mounts or appears) or leave (unmmounts or disappears) the React tree

import Hero from "./pages/Hero";
import About from "./pages/About";
import Packages from "./pages/Packages";
import Explore from "./pages/Explore";
import Celebrations from "./pages/Celebrations";

export default function RouteFlow () {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Hero />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/packages" element={<Packages />}/>
                <Route path="/explore" element={<Explore />}/>
                <Route path="/celeb" element={<Celebrations />}/>
            </Routes>
        </AnimatePresence>
    );
};