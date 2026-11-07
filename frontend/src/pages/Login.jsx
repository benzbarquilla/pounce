// import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Mascot from "../assets/mascot/default.svg";
import PawPattern from "../assets/mascot/paw-marks.svg";
const Login = () => {
  return (
    <div className="min-h-screen flex p-8">
      <div className="flex-1 flex flex-col gap-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-light rounded-lg p-2">
            <img src="/logo.svg" alt="Pounce Logo" className="h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold">Pounce</h1>
        </div>

        {/* Form Container */}
        <div className="flex justify-center">
          <div className="basis-sm">
            <h1 className="text-3xl text-heading font-bold">Welcome Back!</h1>
            <p className="text-base text-body mt-3 font-normal">
              Sign in to pick up where you left off.
            </p>

            <form className="flex flex-col mt-8">
              <InputField
                id="email"
                label="Email"
                icon={Mail}
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                hint="Enter a valid email address"
              />

              <InputField
                id="password"
                label="Password"
                labelAction={
                  <Link
                    to="/forgot-password"
                    className="text-base text-body pt-0"
                  >
                    Forgot Password?
                  </Link>
                }
                icon={Lock}
                type="password"
                name="password"
                required
                minLength={8}
                placeholder="Password"
                hint="Must be at least 8 characters"
              />

              <Button
                type="submit"
                className="mt-3 rounded-lg text-heading bg-brand border-none shadow-none"
              >
                Sign in
              </Button>
            </form>
            <div className="flex justify-center gap-1 mt-25">
              <p className="text-body">Don't have an account?</p>
              <Link to="/register" className="text-header underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-light flex-1 relative overflow-hidden rounded-lg hidden md:block">
        <div className="absolute inset-0 opacity-20">
          <img
            src={PawPattern}
            alt="Paw Marks"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center">
          <img
            src={Mascot}
            alt="Pounce Mascot"
            className="w-80 lg:w-[600px] h-auto object-contain"
          />
        </div>

        <div className="mt-auto">
          <h1 className="font-bold text-3xl ml-5 text-brand">
            Pounce on your next job.{" "}
          </h1>
          <p className="text-base ml-5">
            Your job hunt, organized in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
