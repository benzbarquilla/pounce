// Converts the database format to display local date
export const formatDate = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatDateTime = (value) => {
  if (!value) return "-";
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};

// Reads the database date format to local time when editing
const pad = (n) => String(n).padStart(2, "0");
export const toDateInput = (value) => {
  if (!value) return "";
  const d = new Date(value);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

export const toDateTimeInput = (value) => {
  if (!value) return "";
  const d = new Date(value);
  return `${toDateInput(value)}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};
