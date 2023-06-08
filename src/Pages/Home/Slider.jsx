import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/SliderImage/slider-1.jpg";
import image2 from "../../assets/SliderImage/slider-2.jpg";
import image3 from "../../assets/SliderImage/slider-3.jpg";
import image4 from "../../assets/SliderImage/slider-4.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel /* interval={2000} infiniteLoop={true} autoPlay={true} */>
        <div className=" lg:h-[80vh]">
          <img src={image1} alt="" className="h-full" />
        </div>
        <div className="relative hero-overlay lg:h-[80vh]">
          <img src={image2} alt="" className="h-full opacity-70 " />
          <div className="absolute top-1/2   w-full text-center">
            <h1 className="text-4xl">get your Dream </h1>
          </div>
        </div>
        <div className="lg:h-[80vh]">
          <img src={image3} alt="" className="h-full" />
        </div>
        <div className="lg:h-[80vh]">
          <img src={image4} alt="" className="h-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
