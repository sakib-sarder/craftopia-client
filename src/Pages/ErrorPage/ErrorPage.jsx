import { Player } from "@lottiefiles/react-lottie-player";
import errorAnimation from "../../assets/animation/error-animation.json";
import {AiFillHome} from "react-icons/ai"
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <Player
          autoplay
          loop
          src={errorAnimation}
          className="h-[60vh]"
        ></Player>
        <div className="text-center">
          <Link to="/">
            <button className="my-btn-primary inline-flex items-center gap-2">
              <AiFillHome className="text-xl" /> <span>Back To Home</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
