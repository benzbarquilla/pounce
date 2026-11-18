import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="min-h-screen p-8">
      <div className="bg-red-500">
        <h2>Hello, {user.name}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
