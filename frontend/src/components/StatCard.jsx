const StatCard = ({ label, value, icon: Icon, className = "" }) => {
  return (
    <div className="flex items-stretch overflow-hidden rounded-sm border bg-card">
      <div
        className={`flex size-25 shrink-0 items-center justify-center ${className}`}
      >
        <Icon className="size-8" />
      </div>
      <div className="p-5">
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="text-3xl font-semibold text-heading">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
