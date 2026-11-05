const InputField = ({ icon: Icon, hint, legend, className = "", ...props }) => {
  return (
    <div>
      <legend className="fieldset-legend text-sm pt-0">{legend}</legend>
      <label className={`input validator w-full rounded-lg ${className}`}>
        {Icon && <Icon strokeWidth={1.5} size={18} />}
        <input {...props} />
      </label>
      {hint && <p className="validator-hint text-xs">{hint}</p>}
    </div>
  );
};

export default InputField;
