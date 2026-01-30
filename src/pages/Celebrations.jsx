import MainSlides from "../reusables/MainSlides";

const Celebrations = () => {

    const celebrations_slideshow = [
        { id: 1, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations1.png" },
        { id: 2, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations2.png" },
        { id: 3, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations3.png" },
        { id: 4, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations4.png" },
        { id: 5, src: "/lascalas_assets/Website/Slideshows/Celebrations_Slideshow/Celebrations5.png" },
    ]

    return (
        <div>
            <MainSlides pageTitle="Celebrations" slideContent={celebrations_slideshow} />

        </div>
    )
}


export default Celebrations;