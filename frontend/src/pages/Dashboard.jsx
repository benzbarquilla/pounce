import {
  Send,
  Users,
  CircleX,
  Ghost,
  CircleExclamationPoint,
} from "lucide-react";
import StatCard from "#src/components/StatCard.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "#src/context/AuthContext.js";
import api from "#src/services/api.js";
import Banner from "#src/components/Banner.jsx";

const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getStats = async () => {
      try {
        const { data } = await api.get("/applications/stats");
        setStats(data);
      } catch (err) {
        setError(err.response?.data?.message || "Could not load your stats.");
      }
    };
    getStats();
  }, []);

  const cards = [
    {
      label: "Total applied",
      value: stats ? stats.total - stats.byStatus.wishlist : "-",
      icon: Send,
      className: "bg-purple/15 text-purple",
    },
    {
      label: "In interview",
      value: stats?.byStatus.interview ?? "-",
      icon: Users,
      className: "bg-brand/15 text-brand",
    },
    {
      label: "Rejected",
      value: stats?.byStatus.rejected ?? "-",
      icon: CircleX,
      className: "bg-red-500/15 text-red-500",
    },
    {
      label: "Ghosted",
      value: stats?.byStatus.ghosted ?? "-",
      icon: Ghost,
      className: "bg-neutral-500/15 text-neutral-500",
    },
  ];

  const getFirstName = user?.name?.trim().split(" ")[0] ?? "";

  return (
    <main className="space-y-4">
      <Banner title={`Hi, ${getFirstName}!`} mascotPosition="-bottom-28">
        You have{" "}
        <span className="font-medium text-heading">2 upcoming interviews</span>{" "}
        this week.
      </Banner>

      {error && (
        <div role="alert" className="alert alert-error alert-soft rounded-sm">
          <CircleExclamationPoint strokeWidth={1.25} />
          <span>{error}</span>
        </div>
      )}

      <section className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </section>
      {/* Next: upcoming interviews + recent applications */}
    </main>
  );
};

export default Dashboard;
