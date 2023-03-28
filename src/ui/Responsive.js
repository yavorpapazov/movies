import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Responsive({resultMovies}) {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    }
    return (
        <div>
            <Slider {...settings}>
                {resultMovies}
            </Slider>
        </div>
    )
}
  
export default Responsive