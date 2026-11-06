import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  icon: Icon,
  hint,
  legend,
  className = "",
  showForgotPassword = false,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === "password";

  return (
    <div>
      <div className="flex items-center">
        <legend className="fieldset-legend text-base text-heading pt-0">
          {legend}
        </legend>
        {showForgotPassword && (
          <Link to="/forgot-password" className="text-base text-body pt-0">
            Forgot Password?
          </Link>
        )}
      </div>
      <label className={`input validator w-full rounded-lg ${className}`}>
        {Icon && <Icon strokeWidth={1.5} size={18} />}
        <input
          {...props}
          type={isPassword && showPassword ? "text" : props.type}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-ghost btn-xs btn-circle"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </label>
      {hint && <p className="validator-hint text-xs">{hint}</p>}
    </div>
  );
};

export default InputField;
