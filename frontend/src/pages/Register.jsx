import { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import InputField from "../components/InputField";
import Button from "../components/Button";
import Mascot from "../assets/mascot/celebrating.svg";
import api from "../services/api";
import Logo from "../components/Logo";
const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [registered, setRegistered] = useState(true);
  const passwordsMatch = formData.password === formData.confirmPassword;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordsMatch) return;
    setServerError("");
    setLoading(true);

    try {
      await api.post("/auth/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      setRegistered(true);
    } catch (err) {
      setServerError(
        err.response?.data?.message ||
          (err.response
            ? "Registration failed. Try again."
            : "Cannot reach the server. Please try again."),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex p-8">
      <div className="flex-1 flex flex-col">
        <Logo />
        <div className="flex justify-center">
          <div className="basis-sm">
            {registered ? (
              <div className="flex flex-col">
                <div className="flex justify-center">
                  <img
                    src={Mascot}
                    alt="Pounce Mascot"
                    className="w-full h-auto  object-contain"
                  />
                </div>
                <h1 className="text-3xl text-center font-bold">
                  Registration Successful!
                </h1>
                <p className="mt-2 text-xl text-body text-center">
                  You can now sign in with {formData.email}.
                </p>
                <Link
                  to="/login"
                  className="underline text-brand text-center text-xl "
                >
                  Go to login
                </Link>
              </div>
            ) : (
              <div>
                <h1 className="text-3xl font-bold">Create an Account</h1>
                <p className="text-base text-body mt-1 font-normal">
                  Start organizing your job hunt and keep track of every
                  opportunity.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col mt-2">
                  <InputField
                    id="name"
                    label="Name"
                    icon={User}
                    name="name"
                    autoComplete="name"
                    required
                    placeholder="Full name"
                    minLength={3}
                    maxLength={30}
                    hint="Must be 3 to 30 characters"
                    value={formData.name}
                    onChange={handleChange}
                  />
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
                    icon={Lock}
                    type="password"
                    name="password"
                    required
                    minLength={8}
                    placeholder="Password"
                    autoComplete="new-password"
                    hint="Must be at least 8 characters"
                    value={formData.password}
                    onChange={handleChange}
                  />

                  <InputField
                    id="confirm-password"
                    label="Confirm Password"
                    icon={Lock}
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="Confirm your password"
                    autoComplete="new-password"
                    hint="Passwords must match"
                    error={passwordsMatch ? "" : "Passwords must match"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />

                  {serverError && (
                    <p role="alert" className="text-sm text-error">
                      {serverError}
                    </p>
                  )}

                  <Button type="submit" loading={loading} className="mt-3">
                    {loading ? "Creating account..." : "Sign up"}
                  </Button>
                </form>
                <div className="flex justify-center gap-1 mt-10">
                  <p className="text-body">Already using pounce?</p>
                  <Link to="/login" className="text-heading underline">
                    Sign in
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
