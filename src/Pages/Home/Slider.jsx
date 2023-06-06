import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/SliderImage/slider-1.jpg";
import image2 from "../../assets/SliderImage/slider-2.jpg";
import image3 from "../../assets/SliderImage/slider-3.jpg";
import image4 from "../../assets/SliderImage/slider-4.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel interval={1500} infiniteLoop={true}  autoPlay={true}>
        <div>
          <img src={image1} alt="" />
        </div>
        <div>
          <img src={image2} alt="" />
        </div>
        <div>
          <img src={image3} alt="" />
        </div>
        <div>
          <img src={image4} alt="" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
