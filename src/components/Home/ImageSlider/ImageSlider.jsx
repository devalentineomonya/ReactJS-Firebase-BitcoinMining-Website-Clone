import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderCard from "../../Cards/SliderCard/SliderCard";
import "./ImageSlider.css";
import SliderImages from "../../../assets/Data/SliderImages";
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
    <Slider {...settings}>
      {SliderImages.map((SliderImg) => (
        <div className="image-slider" key={SliderImg.id}>
          <SliderCard SliderImg={SliderImg} />
        </div>
      ))}
    </Slider>
  );
};
export default ImageSlider;
