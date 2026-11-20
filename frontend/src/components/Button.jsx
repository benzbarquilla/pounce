const Button = ({
  children,
  loading = false,
  type = "button",
  className = "",
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn ${className} rounded-sm text-heading bg-button border-none shadow-none hover:text-white hover:bg-button-hover `}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner loading-sm" />}
      {children}
    </button>
  );
};

export default Button;
