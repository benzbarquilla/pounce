import Happy from "../assets/mascot/happy.svg";
import Celebrating from "../assets/mascot/celebrating.svg";
import Comforting from "../assets/mascot/comforting.svg";
import Curious from "../assets/mascot/curious.svg";
import Pouncing from "../assets/mascot/pouncing.svg";
import Sleeping from "../assets/mascot/sleeping.svg";

const variants = {
  happy: Happy,
  celebrating: Celebrating,
  comforting: Comforting,
  curious: Curious,
  pouncing: Pouncing,
  sleeping: Sleeping,
};

const Mascot = ({ variant = "happy", className = "", mascotPosition = "" }) => {
  // Fallback to Happy if an invalid variant string is passed
  const mascotSrc = variants[variant] || Happy;

  return (
    <img
      src={mascotSrc}
      alt={`Mascot ${variant}`}
      className={`pointer-events-none w-auto shrink-0 ${mascotPosition} ${className}`}
    />
  );
};

export default Mascot;
