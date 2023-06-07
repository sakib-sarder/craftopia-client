import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../../assets/animation/register-animation.json";
import googleLogo from "../../../assets/google.png";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const [seePassword, setSeePassword] = useState(false);
  const [confirmError, setConfirmError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    console.log(password, confirmPassword);
    if (password !== confirmPassword) {
      setConfirmError("Password doesn't Match");
      return;
    } else {
      setConfirmError("");
      }
    
  };

  return (
    <div className="md:flex items-center h-[90vh]">
      <div className="mx-auto w-2/4  md:w-1/2">
        <Player autoplay loop src={animation}></Player>
      </div>
      <div className="md:w-1/2">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-5/6 lg:w-3/5 space-y-2 border-[1px] px-3 rounded-md shadow-md py-6 mx-auto"
        >
          <h1 className="text-2xl font-bold">Please Register!</h1>
          {/* Name */}
          <div className="form-control w-full">
            <label htmlFor="name" className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && (
            <span className="text-xs text-warning">Name is required</span>
          )}
          {/* Email */}
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
          {/* Password */}
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
                maxLength: 12,
                minLength: 6,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./,
              })}
            />
          </div>
          {/* Password Error Messages */}
          {errors.password?.type == "minLength" && (
            <span className="text-xs text-warning">
              Password must be 6 characters
            </span>
          )}
          {errors.password?.type == "maxLength" && (
            <span className="text-xs text-warning">
              Password must be less than 12 chracters
            </span>
          )}
          {errors.password?.type == "pattern" && (
            <span className="text-xs text-warning">
              Requires uppercase, lowercase, and special character.
            </span>
          )}
          <div className="flex w-full items-center gap-2">
            <input
              onClick={() => setSeePassword(!seePassword)}
              type="checkbox"
              className="checkbox"
            />
            <span className="text-sm">See Password</span>
          </div>
          {/* Confirm Password */}
          <div className="form-control w-full">
            <label htmlFor="confirmPassword" className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              id="confirmPassword"
              type={seePassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              className="input input-bordered w-full mb-1"
              {...register("confirmPassword", {
                required: true,
              })}
            />
          </div>
          {errors.confirmPassword && (
            <span className="text-xs text-warning">
              Confirm Password is required
            </span>
          )}
          {confirmError && (
            <span className="text-xs text-warning">{confirmError}</span>
          )}
          <input
            type="submit"
            value="Register"
            className="my-btn-primary w-full"
          />
          <p className="text-sm text-center pt-1">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </form>
        <div className="flex cursor-pointer bg-gray-200 items-center gap-1 justify-center mt-2 shadow-lg md:w-5/6 lg:w-3/5 mx-auto py-2 rounded-md">
          <span className="text-2xl font-semibold">Continue With</span>
          <img src={googleLogo} alt="Google Logo" className="w-7" />
        </div>
      </div>
    </div>
  );
};

export default Register;
