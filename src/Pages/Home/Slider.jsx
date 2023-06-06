import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/SliderImage/slider-1.jpg";
import image2 from "../../assets/SliderImage/slider-2.jpg";
import image3 from "../../assets/SliderImage/slider-3.jpg";
import image4 from "../../assets/SliderImage/slider-4.jpg";

const Slider = () => {
  return (
    <div className="h-[30vh]">
      <Carousel interval={1500} /* infiniteLoop={true} autoPlay={true} */>
        <div className=" lg:h-[80vh]">
          <img src={image1} alt="" className="h-full"/>
        </div>
        <div className="relative lg:h-[80vh]">
          <img src={image2} alt="" className="h-full"/>
          <h1 className="absolute z-20 text-blue-500 top-[50%] left-[50%]">
            get your Dream{" "}
          </h1>
        </div>
        <div className="lg:h-[80vh]">
          <img src={image3} alt="" className="h-full"/>
        </div>
        <div className="lg:h-[80vh]">
          <img src={image4} alt="" className="h-full"/>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
