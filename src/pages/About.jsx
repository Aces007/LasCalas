import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlay, FaTimes } from "react-icons/fa";
import NavHead from "../reusables/NavHead";

const About = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const videoId = "nPrmc_iuWbQ";
    const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

    // -- CONTAINERS -- //
    const about_cont = "w-full max-w-[1350px] mx-auto px-6 resSm:px-4 resMd:px-12 py-16 resSm:py-10 grid grid-cols-1 resLg:grid-cols-12 gap-12 items-center";
    const text_column = "resLg:col-span-7 flex flex-col items-start gap-6";
    const media_column = "resLg:col-span-5 w-full flex flex-col items-center";

    // -- TEXTS -- //
    const story_tagline = "font-Montserrat text-xs resMd:text-sm font-semibold tracking-[0.25em] text-primary uppercase";
    const story_h1 = "font-Raleway font-bold text-[36px] resSm:text-[28px] resMd:text-[42px] text-main_text leading-tight";
    const quote_box = "border-l-4 border-primary pl-4 py-1 italic font-Nunito text-main_text/90 text-sm resMd:text-base";
    const story_p = "font-Nunito text-[17px] resSm:text-[15px] text-main_text/90 leading-relaxed";
    const brand_span = "text-primary font-semibold";

    // -- MEDIA COLUMN -- //
    const video_img = "w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100";
    const video_card_frame = "relative group w-full max-w-[480px] h-[360px] resSm:h-[280px] rounded-2xl overflow-hidden shadow-2xl border border-accent/40 bg-black cursor-pointer";
    const play_btn = "absolute inset-0 m-auto w-16 h-16 rounded-full bg-white/90 text-primary flex items-center justify-center pl-1 shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-white";

    // -- FLEX STYLING -- //
    const center_element_col = "flex flex-col items-center";
    const start_element_col = "flex flex-col items-start";
    const center_element_row = "flex items-center";
    const start_element_row = "flex items-start";
    const between_element_row = "flex justify-between";

    const pageVariants = {
        unmounted: { opacity: 0, y: 20 },
        mounted: { opacity: 1, y: 0 },
        beingUnmounted: { opacity: 0, y: -20 }
    };

    return (
        <motion.div
            className=""
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <NavHead theme="dark" />
            
            <div className={about_cont}>
                <div className={text_column}>
                    <span className={story_tagline}>Our Purpose & Heritage</span>

                    <h1 className={story_h1}>A 10.5-Hectare Sanctuary Born from Heart, Purpose, and Nature</h1>
                    <div className={`flex flex-col gap-4`}>
                        <p className={story_p}>Nestled along the serene shores of Dasol, <span className={brand_span}>LasCalas Resort & Luxury Estate</span> was born from a deeply personal mission: to create a safe, controlled, and restorative environment for families and children on the autism spectrum.</p>
                        
                        <div className={quote_box}>
                            &ldquo;We’re designed to be a low-density resort... so when you come here, you get that feel that there’s not a lot of people around—that feel of exclusivity.&rdquo;
                        </div>

                        <p className={story_p}>Spanning across 10.5 hectares of untouched coves, the estate is purposely engineered with low-density architecture, ensuring genuine tranquility and privacy. Here, peaceful family sanctuaries merge effortlessly with world-class sports facilities and clinical aesthetic wellness; providing an exclusive retreat where every guest can recharge and reconnect.</p>
                    </div>
                </div>
                
                <div className={media_column}>
                    <div 
                        className={video_card_frame}
                        onClick={() => {
                            setIsVideoOpen(true)
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setIsVideoOpen(true)}
                    >
                        <img src={`/lascalas_assets/Website/About/thumbnail.jpg`} alt="Joe Bailey Guerrero - LasCalas Founder Interview" className={video_img} loading="lazy" />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                        <div className={play_btn} aria-label="Play Video">
                            <FaPlay className="text-xl"/>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full p-6 text-white pointer-events-none">
                            <span className="font-Montserrat text-[11px] uppercase tracking-widest text-white/70 block mb-0.5">
                                Exclusive Interview
                            </span>

                            <h3 className="font-Raleway font-semibold text-lg drop-shadow-md">
                                Joe Bailey Gurrero
                            </h3>

                            <p className="font-Nunito text-xs text-white/80">
                                Founder on the Vision of LasCalas
                            </p>
                        </div>
                    </div>
                </div>

                
            </div>

            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 resMd:p-8"
                        onClick={() => setIsVideoOpen(false)}
                        >
                        <motion.div
                            initial={{ scale: 0.94, opacity: 0  }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.94, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsVideoOpen(false)}
                                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-colors"
                                aria-label="Close Video Modal"
                            >
                                <FaTimes size={18} />
                            </button>

                            <iframe
                                src={embedUrl}
                                title="Las Calas Resort & Luxury Estate? | Joe Bailey Guerrero Exclusive Interview"
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default About;