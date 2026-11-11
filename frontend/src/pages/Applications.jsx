import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Button from "../components/Button";

const Applications = () => {
  const { user, logout } = useAuth();
  return (
    <div className="min-h-screen bg-violet-50 p-8">
      <h1 className="text-3xl font-bold text-violet-700">Applications </h1>
      <h2>Hi {user?.name}</h2>
      <p className="mt-4">
        <Link to="/dashboard" className="text-violet-600 underline">
          Go to dashboard
        </Link>
      </p>

      <Button onClick={logout} className="w-20">
        Logout
      </Button>
    </div>
  );
};

export default Applications;
