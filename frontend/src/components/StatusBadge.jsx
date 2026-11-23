const styles = {
  wishlist: "bg-sky-500/15 text-sky-600 dark:text-sky-400",
  applied: "bg-purple/15 text-purple",
  interview: "bg-brand/15 text-brand",
  offer: "bg-green-500/15 text-green-600 dark:text-green-400",
  hired: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
  rejected: "bg-red-500/15 text-red-500",
  ghosted: "bg-neutral-500/15 text-neutral-500",
};
const StatusBadge = ({ status }) => {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-0.5 text-xs font-medium capitalize ${
        styles[status] ?? styles.ghosted
      }`}
    >
      {status}
    </span>
  );
};

export default StatusBadge;
