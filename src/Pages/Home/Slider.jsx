import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from "../../assets/SliderImage/slider-1.jpg";
import image2 from "../../assets/SliderImage/slider-2.jpg";
import image3 from "../../assets/SliderImage/slider-3.jpg";
import image4 from "../../assets/SliderImage/slider-4.jpg";

const Slider = () => {
  return (
    <div>
      <Carousel
        interval={2000}
        infiniteLoop={true}
        autoPlay={true}
        transitionTime={500}
      >
        <div className=" lg:h-[80vh] bg-black">
          <img src={image1} alt="" className="h-full opacity-60" />
          <div className="absolute top-1/2 mx-auto ">
            <h1 className="md:-mt-12 px-2 -mt-16 text-neutral-100 font-semibold md:text-4xl">
              Discover the art of Wood Craft. Join our class and learn to shape,
              carve, and transform wood into beautiful and functional creations.
            </h1>
            <button className="my-btn-primary mt-2">Join Now</button>
          </div>
        </div>
        <div className="lg:h-[80vh] bg-black">
          <img src={image2} alt="" className="h-full opacity-60" />
          <div className="absolute top-1/2 mx-auto ">
            <h1 className=" md:-mt-12 -mt-16 text-neutral-100 font-semibold md:text-4xl">
              Experience the magic of Oil Painting. Join our class and learn to
              create captivating artworks with vibrant colors.
            </h1>
            <button className="my-btn-primary mt-2">Join Now</button>
          </div>
        </div>
        <div className="lg:h-[80vh]" style={{ backgroundColor: "black" }}>
          <img src={image3} alt="" className="h-full opacity-60" />
          <div className="absolute top-1/2 mx-auto ">
            <h1 className="px-2 md:-mt-12 -mt-16 text-neutral-100 font-semibold md:text-4xl">
              Discover the art of Soil Craft. Join our class to create
              captivating sculptures and designs using natural soil.
            </h1>
            <button className="my-btn-primary mt-2">Join Now</button>
          </div>
        </div>
        <div className="lg:h-[80vh]" style={{ backgroundColor: "black" }}>
          <img src={image4} alt="" className="h-full opacity-60" />
          <div className="absolute top-1/2 mx-auto ">
            <h1 className="px-2 md:-mt-12 -mt-16 text-neutral-100 font-semibold md:text-4xl">
              Ignite your creativity with our Drawing Class. Learn fundamental
              techniques and unleash your artistic potential.
            </h1>
            <button className="my-btn-primary mt-2">Get Started</button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
