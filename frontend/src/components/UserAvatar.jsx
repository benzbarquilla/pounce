const UserAvatar = ({ name, className = "" }) => {
  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };
  return (
    <>
      <div className={`avatar avatar-placeholder `}>
        <div
          className={`bg-neutral text-neutral-content rounded-full ${className}`}
        >
          <span className="text-base">{getInitials(name)}</span>
        </div>
      </div>
    </>
  );
};

export default UserAvatar;
