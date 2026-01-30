import MainSlides from "../reusables/MainSlides";

const Explore = () => {

    const explore_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Explore_Slideshow/Explore5.png" },
    ]

    return (
        <div>
            <MainSlides pageTitle="Explore" slideContent={explore_slideshow} />

        </div>
    )
}


export default Explore;