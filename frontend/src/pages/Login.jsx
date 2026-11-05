// import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import InputField from "../components/InputField";
import Button from "../components/Button";
const Login = () => {
  return (
    <div className="min-h-screen flex p-8">
      <div className="flex-1 flex flex-col gap-25">
        {/* Logo */}
        <div className="bg-orange-400 flex">
          <div></div>
          <h1 className="text-xl font-bold">Pounce</h1>
        </div>

        {/* Form Container */}
        <div className="flex justify-center">
          <div className="basis-sm">
            <h1 className="text-3xl text-heading font-bold">Welcome Back</h1>
            <p className="text-base text-body mt-3 font-normal">
              Sign in to pick up where you left off.
            </p>

            <div className="flex flex-col mt-5">
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
                hint="Must be at least 6 characters"
              />

              <Button type="submit" className="mt-3">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-500 flex-1">
        <h1>Image Side</h1>
      </div>
    </div>
  );
};

export default Login;
