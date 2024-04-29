import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../../Cards/SliderCard/SliderCard";
import "./ImageSlider.css"
const ImageSlider = () => {
  const settings = {
   
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="image-slider">
      <Slider {...settings}>
        <SliderCard />
      </Slider>
    </div>
  );
};
export default ImageSlider;
// import { FaCompass } from "react-icons/fa"; with bg
//import { BsGridFill } from "react-icons/bs"; grid with bg
 // import { BsGrid } from "react-icons/bs";
 // import { AiFillDollarCircle } from "react-icons/ai";
 // import { AiOutlineDollar } from "react-icons/ai";
 // import { FaRegUserCircle } from "react-icons/fa";
 // import { FaUserCircle } from "react-icons/fa";
// import { FaRegCompass } from "react-icons/fa"; without bg

