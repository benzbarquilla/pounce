import { Link } from "react-router-dom";
import Mascot from "../assets/mascot/curious.svg";

const NotFound = () => {
  return (
    <div className="min-h-screen flex-1 p-8 w-full">
      <div className="flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-light rounded-lg p-2">
            <img src="/logo.svg" alt="Pounce Logo" className="h-8 w-8" />
          </div>
          <h1 className="text-xl font-bold">Pounce</h1>
        </div>

        <div className="flex flex-col">
          <div className="flex justify-center">
            <img
              src={Mascot}
              alt="Pounce Mascot"
              className="w-100 h-auto  object-contain"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-center text-5xl  text-heading font-bold">
              Page Not Found
            </h1>
            <p className="text-center text-xl text-body mt-3 font-normal">
              The page you are looking for cannot be found.{" "}
              <Link to="/" className="underline text-brand">
                Go back home
              </Link>
            </p>
            <div className="flex justify-center mt-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
