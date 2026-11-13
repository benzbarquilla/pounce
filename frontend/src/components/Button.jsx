const variants = {
  primary: "btn-neutral",
  secondary: "btn-outline btn-primary",
  danger: "btn-error",
  ghost: "btn-ghost",
};

const Button = ({
  children,
  variant = "primary",
  loading = false,
  type = "button",
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn ${variants[variant]} ${className} rounded-lg text-heading bg-button border-none shadow-none hover:text-white hover:bg-button-hover `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner loading-sm" />}
      {children}
    </button>
  );
};

export default Button;
