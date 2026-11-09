import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import api from "../services/api";
import Mascot from "../assets/mascot/default.svg";
import PawPattern from "../assets/mascot/paw-marks.svg";
import Logo from "../components/Logo";
const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    setLoading(true);

    try {
      const { data } = await api.post("/auth/login", formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/dashboard");
    } catch (err) {
      setServerError(
        err.response?.data?.message ||
          (err.response
            ? "Login failed. Try again."
            : "Cannot reach the server. Please try again."),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex p-8">
      <div className="flex-1 flex flex-col gap-20">
        <Logo />
        {/* Form Container */}
        <div className="flex justify-center">
          <div className="basis-sm">
            <h1 className="text-3xl text-heading font-bold">Welcome Back!</h1>
            <p className="text-base text-body mt-3 font-normal">
              Sign in to pick up where you left off.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col mt-8 gap-2">
              <InputField
                id="email"
                label="Email"
                icon={Mail}
                type="email"
                name="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                hint="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
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
                autoComplete="current-password"
                required
                placeholder="Password"
                hint="Enter your password"
                value={formData.password}
                onChange={handleChange}
              />

              {serverError && (
                <p role="alert" className="text-sm text-error ">
                  {serverError}
                </p>
              )}

              <Button
                type="submit"
                loading={loading}
                className="rounded-lg text-heading bg-brand border-none shadow-none"
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </form>
            <div className="flex justify-center gap-1 mt-25">
              <p className="text-body">Don't have an account?</p>
              <Link to="/register" className="underline">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-brand-light flex-1 relative overflow-hidden rounded-lg hidden md:flex flex-col">
        <div className="absolute inset-0 opacity-20">
          <img src={PawPattern} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative flex flex-1 flex-col p-5">
          <div className="flex flex-1 items-center justify-center">
            <img
              src={Mascot}
              alt="Pounce Mascot"
              className="h-auto max-h-[75vh] w-full object-contain"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-brand">
              Pounce on your next job.
            </h2>
            <p className="mt-1 text-base">
              Your job hunt, organized in one place.
            </p>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <img
            src={Mascot}
            alt="Pounce Mascot"
            className="w-80 lg:w-[600px] h-auto object-contain"
          />
        </div>

        <div>
          <h1 className="font-bold text-3xl ml-5 text-brand">
            Pounce on your next job.
          </h1>
          <p className="text-base ml-5">
            Your job hunt, organized in one place.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
