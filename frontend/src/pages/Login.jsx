import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="min-h-screen bg-violet-50 p-8">
      <h1 className="text-3xl font-bold text-violet-700">Login</h1>
      <p className="mt-4">
        No account yet?{" "}
        <Link to="/register" className="text-violet-600 underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
