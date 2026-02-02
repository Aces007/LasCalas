import MainSlides from "../reusables/MainSlides";
import { motion } from "framer-motion";


const Explore = () => {
    const pageVariants = {
        unmounted: { opacity: 0, y: 20},
        mounted: { opacity: 1, y: 0},
        beingUnmounted: { opacity: 0, y: -20}
    };

    const explore_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore5.png" },
    ]

    const explore_menu = {
        Activities: [
            { id: 1, name: "ATV Adventure", src: "", description: "Ready to ride? Ignite your spirit of adventure and go off the beaten path! Whether you're chasing an adrenaline rush or just chasing views, our ATV tour is the ultimate way to experience the wild beauty of Las Calas.", link: "#" },
            { id: 2, name: "Water Adventure", src: "", description: "Dive into adventure with the LasCalas Jetski and Kayak Ride Experience, where the thrill of the open water meets the beauty of nature.", link: "#" },
            { id: 3, name: "Buggy And Polaris Ride", src: "", description: "Buckle up for the ultimate joyride! Gather your squad and tear up the trails in our heavy-duty Buggies and Polaris RZRs. It’s loud, it’s muddy, and it’s the most fun you’ll have on four wheels.", link: "#" },
            { id: 4, name: "Rope Course & Obstacle Course", src: "", description: "Do you have what it takes? Designed by the Special Forces of the Philippines, our authentic Rope and Obstacle Course tests your strength and teamwork in the heart of nature. Step up and conquer the challenge!", link: "#" },
        ],
        Experiences: [
            { id: 1, name: "Day Tour", src: "", description: "Step into a living postcard. With breathtaking views and romantic hideaways at every turn, Las Calas is the ultimate backdrop for your special moments. Come for the day, and take home memories that last forever.", link: "#" },
            { id: 2, name: "Island Hopping", src: "", description: "Explore the unseen. Drift through turquoise waters and discover secret beaches on our premium Island Hopping tour. It’s the perfect blend of luxury, nature, and unforgettable adventure.", link: "#" },
            { id: 3, name: "La Batanes", src: "", description: "Adventure meets awe. Drive through rugged terrain on our Buggies or Polaris and emerge at 'La Batanes', a breathtaking coastal treasure hidden within Las Calas. It’s a view you have to earn, and one you’ll never forget.", link: "#" },
            { id: 4, name: "La Cueva", src: "", description: "Unveil the secret of La Cueva. Navigate a thrilling path of twists and turns to discover a hidden sanctuary of crystal-clear turquoise waters. Nestled deep in the rocks, it’s a natural masterpiece waiting to be found.", link: "#" },
            { id: 5, name: "Polaris", src: "", description: "Dominate the terrain in ultimate style. Our elite Polaris RZRs are built for extreme performance without compromising on comfort. This isn't just an off-road ride; it’s luxury unleashed on the wild.", link: "#" },
            { id: 6, name: "Prenup Shoot", src: "", description: "Create magic in every shot. From dramatic cliffs to serene sunsets, Las Calas offers an ambiance of pure romance. It’s more than a venue; it’s the canvas for your most unforgettable milestones.", link: "#" },
        ],
        Attractions: [
            { id: 1, name: "Coves", src: "", description: "Discover the edge of paradise. Explore the hidden beaches and tranquil inlets of Las Calas Coves. Enclosed by majestic cliffs, it is the ultimate setting for private escapes and nature’s purest serenity.", link: "#" },
            { id: 2, name: "Gazebo", src: "", description: "Unwind in style. The Las Calas Gazebo offers a haven of peace surrounded by nature’s beauty. With the gentle sound of the waves as your soundtrack, it’s the perfect spot for romance, luxury, and unforgettable sunsets.", link: "#" },
            { id: 3, name: "Lucky Park", src: "", description: "Walk on the bright side. Step into Lucky Park, a whimsical garden designed to inspire joy and prosperity. From vibrant wishing ribbons to playful lucky charms, every corner radiates positive energy and a touch of magic.", link: "#" },
            { id: 4, name: "Mango Tree", src: "", description: "Rooted in magic. Experience the quiet power of the Millennium Mango Tree. This ancient wonder offers a unique blend of nature and luxury, a perfect, opulent spot to pause and embrace the soul of Las Calas.", link: "#" },
            { id: 5, name: "Pearl Collections", src: "", description: "Treasures of the deep. Explore the Las Calas Pearl Collection, an exclusive showcase of rare, elegant gems that perfectly reflect the timeless beauty of the sea.", link: "#" },
            { id: 6, name: "Swing", src: "", description: "Swing into paradise. Hover above crystal-clear shallows on our iconic overwater swing. With the ocean breeze in your hair and endless blue horizons, it’s the ultimate spot for romance and unforgettable photos.", link: "#" },
            { id: 7, name: "Wishing Well", src: "", description: "A sanctuary for your dreams. Hidden within our lush greenery, the Wishing Well offers a moment of pure serenity. Embrace the magic of the moment in this elegant setting, where every wish feels a little closer to coming true.", link: "#" },
        ]
    }

    return (
        <motion.div
            variants={pageVariants}
            initial="unmounted"
            animate="mounted"
            exit="beingUnmounted"
            transition={{ duration: 1.2, ease: "easeInOut" }}
        >
            <MainSlides pageTitle="Explore" slideContent={explore_slideshow} />

            
        </motion.div>
    )
}


export default Explore;