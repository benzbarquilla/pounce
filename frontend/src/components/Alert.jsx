import { CircleAlert } from "lucide-react";

const Alert = ({ error, className = "" }) => {
  return (
    <div role="alert" className={`alert alert-error alert-soft ${className}`}>
      <CircleAlert strokeWidth={1.25} />
      <span>{error}</span>
    </div>
  );
};

export default Alert;
