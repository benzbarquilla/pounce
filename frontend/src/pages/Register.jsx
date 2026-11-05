import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen bg-violet-50 p-8">
      <h1 className="text-3xl font-bold text-violet-700">Register</h1>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-violet-600 underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
