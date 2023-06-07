import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../assets/animation/login-animation.json";

const Login = () => {
  return (
    <div className="md:flex items-center h-[90vh]">
      <div className="mx-auto w-3/4  md:w-1/2">
        <Player autoplay loop src={animation}></Player>
      </div>
      <div className="md:w-1/2">
        <form className="md:w-3/4 lg:w-3/5 space-y-2 border px-3 rounded-md shadow-md py-6 ">
          <h1 className="text-2xl font-bold">Please Login!</h1>
          <div className="form-control w-full">
            <label htmlFor="email" className="label">
              <span className="label-text">Your Email</span>
            </label>
                      <input
                          id="email"
              type="text"
              placeholder="Email"
              name="email"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control w-full">
            <label htmlFor="password" className="label">
              <span className="label-text">Your Password</span>
            </label>
                      <input
                          id="password"
              type="password"
              placeholder="Password"
              name="password"
              className="input input-bordered w-full"
            />
          </div>
          <div className="flex w-full items-center gap-2">
            <input type="checkbox" className="checkbox" />
            <span className="text-sm">See Password</span>
          </div>
          <input
            type="submit"
            value="Login"
            className="my-btn-primary w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
