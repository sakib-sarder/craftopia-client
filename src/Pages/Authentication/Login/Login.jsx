import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../assets/animation/login-animation.json";
import googleLogo from "../../../assets/google.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="md:flex items-center h-[90vh]">
      <div className="mx-auto w-2/4  md:w-1/2">
        <Player autoplay loop src={animation}></Player>
      </div>
      <div className="md:w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-3/4 lg:w-3/5 space-y-2 border-[1px] px-3 rounded-md shadow-md py-6 mx-auto"
        >
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
              {...register("email", { required: true })}
            />
          </div>
          {errors.email && (
            <span className="text-xs text-warning">Email is requird</span>
          )}
          <div className="form-control w-full">
            <label htmlFor="password" className="label">
              <span className="label-text">Your Password</span>
            </label>
            <input
              id="password"
              type={seePassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered w-full"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          {errors.password && (
            <span className="text-xs text-warning">Password is requird</span>
          )}
          <div className="flex w-full items-center gap-2">
            <input
              onClick={() => setSeePassword(!seePassword)}
              type="checkbox"
              className="checkbox"
            />
            <span className="text-sm">See Password</span>
          </div>
          <input
            type="submit"
            value="Login"
            className="my-btn-primary w-full"
          />
          <p className="text-sm text-center pt-1">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
        <div className="flex bg-gray-200 items-center gap-1 justify-center mt-2 shadow-lg md:w-3/4 lg:w-3/5 mx-auto py-2 rounded-md">
          <span className="text-2xl font-semibold">Continue With</span>
          <img src={googleLogo} alt="Google Logo" className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default Login;
