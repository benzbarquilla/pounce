import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-violet-50 p-8">
      <h1 className="text-3xl font-bold text-violet-700">Page not found</h1>
      <p className="mt-4">
        <Link to="/login" className="text-violet-600 underline">
          Back to home
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
