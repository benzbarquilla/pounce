import { Sun, Moon } from "lucide-react";
import Mascot from "../assets/mascot/happy.svg";

const Banner = ({ title, children, mascot = Mascot, mascotPosition = "" }) => {
  const isDaytime = () => {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18;
  };

  const getFormattedDate = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
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
          {title}
        </h2>
        <p className="text-muted-foreground mt-6 ">{children}</p>
      </div>
      <img
        src={mascot}
        alt=""
        className={`pointer-events-none absolute right-6 ${mascotPosition} h-100 w-auto shrink-0 self-end hidden md:block`}
      />
    </section>
  );
};

export default Banner;
