import { Sun, Moon } from "lucide-react";
import Mascot from "../components/Mascot";

const Banner = ({ title, children, mascotVariant, mascotPosition }) => {
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
        <p className="flex items-center gap-2">
          {isDaytime() ? (
            <Sun strokeWidth={2} className="size-5" />
          ) : (
            <Moon strokeWidth={2} className="size-5" />
          )}
          {getFormattedDate()}
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold mt-5">
          {title}
        </h2>
        <p className="text-muted-foreground mt-6 ">{children}</p>
      </div>
      <Mascot
        mascotPosition={mascotPosition}
        variant={mascotVariant}
        className="absolute right-6 h-96 self-end hidden md:block"
      />
    </section>
  );
};

export default Banner;
