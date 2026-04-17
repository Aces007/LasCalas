import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Main pages
const Hero = lazy(() => import("./pages/Hero"));
const About = lazy(() => import("./pages/About"));
const PackagesMenu = lazy(() => import("./pages/PackagesMenu"));
const Explore = lazy(() => import("./pages/Explore"));
const Celebrations = lazy(() => import("./pages/Celebrations"));
const Amenities = lazy(() => import("./pages/Amenities"));
const FAQs = lazy(() => import("./pages/FAQs"));

// Sub pages
const PackageDetails = lazy(() => import("./pages/subpages/packages/PackageDetails"));
const ATVAdv = lazy(() => import("./pages/subpages/explore/ATVAdv"));
const WaterAdv = lazy(() => import("./pages/subpages/explore/WaterAdv"));
const BuggyAdv = lazy(() => import("./pages/subpages/explore/BuggyAdv"));
const RopeCourse = lazy(() => import("./pages/subpages/explore/RopeCourse"));
const EventPavilion = lazy(() => import("./pages/subpages/celebration_showcase/EventPavilion"));
const Pergola = lazy(() => import("./pages/subpages/celebration_showcase/Pergola"));
const GamingPool = lazy(() => import("./pages/subpages/celebration_showcase/GamingPool"));
const CampingGround = lazy(() => import("./pages/subpages/celebration_showcase/CampingGround"));
const Gazebo = lazy(() => import("./pages/subpages/celebration_showcase/Gazebo"));

export default function RouteFlow() {
  const location = useLocation();
  return (
    // Suspense catches pages mid-load and shows fallback until ready
    <Suspense fallback={<div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: '#000'  // match your site background
    }}>Loading...</div>}>
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
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}