import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../assets/animation/login-animation.json";
import googleLogo from "../../../assets/google.png";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { toast } from "react-hot-toast";
import { saveUserInfo } from "../../../API/auth";

const Login = () => {
  const [seePassword, setSeePassword] = useState(false);
  const { logInWithEmilPassword, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    logInWithEmilPassword(data.email, data.password)
      .then((result) => {
        navigate(from, { replace: true });
        toast.success(`Welcome Back ${result?.user?.displayName}`);
      })
      .catch((error) => {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setError("Invalid email or password");
          return;
        } else {
          setError("");
        }
        
      });
  };
  console.log(error);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        saveUserInfo(result?.user);
        navigate(from, { replace: true });
        toast.success(`Welcome ${result?.user?.displayName}`);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="md:flex items-center h-[95vh]">
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
            <span className="text-xs text-warning">Email is required</span>
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
          {/* Password Error Message */}
          {errors.password && (
            <span className="text-xs text-warning">Password is required</span>
          )}
          {error && <span className="text-xs text-warning">{error}</span>}
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
            className="my-btn-primary w-full cursor-pointer"
          />
          <p className="text-sm text-center pt-1">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
        <div
          onClick={handleGoogleSignIn}
          className="flex bg-gray-200 items-center gap-1 justify-center mt-2 shadow-lg md:w-3/4 lg:w-3/5 mx-auto py-2 cursor-pointer rounded-md"
        >
          <span className="text-2xl font-semibold">Continue With</span>
          <img src={googleLogo} alt="Google Logo" className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default Login;
