import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-violet-50 p-8">
      <h1 className="text-3xl font-bold text-violet-700">Dashboard</h1>
      <p className="mt-4">
        <Link to="/login" className="text-violet-600 underline">
          Go to login
        </Link>
      </p>
    </div>
  );
};

export default Dashboard;
