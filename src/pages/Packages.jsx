import MainSlides from "../reusables/MainSlides";

const Packages = () => {

    const packages_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider5.png" },
        { id: 6, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider6.png" },
        { id: 7, src: "/lascalas_assets/Website/Slideshows/Packages_Slideshow/Pack_Slider7.png" },
    ]

    return (
        <div>
            <MainSlides pageTitle="Packages" slideContent={packages_slideshow} />

        </div>
    )
}


export default Packages;