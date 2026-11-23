const BADGE_COLORS = [
  "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  "bg-purple/15 text-purple",
  "bg-brand/15 text-brand",
  "bg-green-500/15 text-green-600 dark:text-green-400",
  "bg-teal-500/15 text-teal-600 dark:text-teal-400",
  "bg-red-500/15 text-red-500",
  "bg-neutral-500/15 text-neutral-500",
];

function getBadgeColor(name = "") {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return BADGE_COLORS[Math.abs(hash) % BADGE_COLORS.length];
}

function getInitials(name = "") {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

const CompanyAvatar = ({ name = "" }) => {
  const initials = getInitials(name);
  const colorClasses = getBadgeColor(name);
  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-xs font-bold ${colorClasses}`}
      >
        {initials || "?"}
      </span>
      <span>{name}</span>
    </div>
  );
};

export default CompanyAvatar;
