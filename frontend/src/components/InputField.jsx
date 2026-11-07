import { useState, useEffect, useRef } from "react";
import { Eye, EyeOff } from "lucide-react";

const InputField = ({
  id,
  icon: Icon,
  hint,
  error,
  label,
  className = "",
  labelAction,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = props.type === "password";
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.setCustomValidity(error || "");
  });

  return (
    <div>
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="fieldset-legend pt-0 text-base">
          {label}
        </label>
        {labelAction}
      </div>

      <label className={`input validator w-full rounded-lg ${className}`}>
        {Icon && <Icon strokeWidth={1.5} size={18} />}
        <input
          id={id}
          ref={inputRef}
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
