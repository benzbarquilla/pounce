import { useAuth } from "../context/AuthContext";
import Mascot from "../assets/mascot/happy.svg";
import { Sun, Moon, Send, Users, CircleX, Ghost } from "lucide-react";
import StatCard from "#src/components/StatCard.jsx";

const Dashboard = () => {
  const { user } = useAuth();

  const getFirstName = () => {
    if (!user.name) return "";
    return user.name.trim().split(" ")[0];
  };

  const isDaytime = () => {
    const hour = new Date().getHours();
    return hour >= 6 && 18;
  };

  const getFormattedDate = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  const cards = [
    {
      label: "Total applied",
      value: 12,
      icon: Send,
      className: "bg-purple/15 text-purple",
    },
    {
      label: "In interview",
      value: 2,
      icon: Users,
      className: "bg-brand/15 text-brand",
    },
    {
      label: "Rejected",
      value: 3,
      icon: CircleX,
      className: "bg-red-500/15 text-red-500",
    },
    {
      label: "Ghosted",
      value: 4,
      icon: Ghost,
      className: "bg-neutral-500/15 text-neutral-500",
    },
  ];

  return (
    <div className="space-y-6">
      <section className="relative overflow-hidden flex justify-between p-5 rounded-sm md:min-h-55 bg-linear-to-r from-brand/15 to-[#7266d6]/15 ">
        <div className="max-w-xl md:pb-6">
          <p className="flex items-center gap-2 ">
            {isDaytime() ? (
              <Sun strokeWidth={2} width={20} />
            ) : (
              <Moon strokeWidth={2} />
            )}
            {getFormattedDate()}
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-5">
            Hi, {getFirstName()}!
          </h2>
          <p className="text-muted-foreground mt-6 ">
            You have{" "}
            <span className="font-medium text-heading">
              2 upcoming interviews
            </span>{" "}
            this week.
          </p>
        </div>
        <img
          src={Mascot}
          alt=""
          className="pointer-events-none absolute right-6 -bottom-28 h-100 w-auto shrink-0 self-end hidden md:block"
        />
      </section>

      <section className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <StatCard key={card.label} {...card} />
        ))}
      </section>
      {/* Next: upcoming interviews + recent applications */}
    </div>
  );
};

export default Dashboard;
