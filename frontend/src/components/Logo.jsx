import { Link } from "react-router-dom";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`}>
      {/* Logo */}
      <div className="bg-brand-light rounded-lg p-2">
        <img src="/logo.svg" alt="" className="h-8 w-8" />
      </div>
      <p className="text-xl font-bold">Pounce</p>
    </Link>
  );
};

export default Logo;
