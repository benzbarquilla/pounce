import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Register = () => {
  return (
    <div className="min-h-screen flex p-8">
      <div className="flex-1 flex flex-col">
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
            <h1 className="text-3xl text-heading font-bold">
              Create an Account
            </h1>
            <p className="text-base text-body mt-3 font-normal">
              Start organizing your job hunt and keep track of every
              opportunity.
            </p>

            <form className="flex flex-col mt-8">
              <InputField
                legend="Name"
                icon={User}
                name="name"
                placeholder="Full name"
                minLength={2}
                hint="Must be 3 to 30 characters"
              />
              <InputField
                legend="Email"
                icon={Mail}
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                hint="Enter a valid email address"
              />

              <InputField
                legend="Password"
                icon={Lock}
                type="password"
                name="password"
                required
                minLength={6}
                placeholder="Password"
                hint="Must be at least 8 characters"
              />

              <InputField
                legend="Confirm Password"
                icon={Lock}
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                autoComplete="new-password"
                required
              />

              <Button
                type="submit"
                className="mt-3 rounded-lg text-heading bg-brand border-none shadow-none"
              >
                Sign up
              </Button>
            </form>
            <div className="flex justify-center gap-1 mt-10">
              <p className="text-body">Already using pounce?</p>
              <Link to="/login" className="text-header underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
