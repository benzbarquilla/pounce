const variants = {
  primary: " bg-purple hover:bg-button-hover border-none text-white",
  outline: "border border-purple hover:bg-button-hover/20",
  outline2: "border border-[#E4E4E7]",
  danger: "border-none bg-[#EF4444]  hover:bg-[#DC2626] text-[#ffffff]",
};

const Button = ({
  children,
  loading = false,
  type = "button",
  className = "",
  disabled,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn ${variants[variant]} ${className} rounded-sm shadow-none`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <span className="loading loading-spinner loading-sm" />}
      {children}
    </button>
  );
};

export default Button;
