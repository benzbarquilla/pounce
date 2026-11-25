import Banner from "#src/components/Banner.jsx";
import { useEffect, useState } from "react";
import { Search, Plus } from "lucide-react";
import Mascot from "../components/Mascot";
import Button from "#src/components/Button.jsx";
import api from "#src/services/api.js";
import { formatDate, formatDateTime } from "../lib/date.js";
import StatusBadge from "#src/components/StatusBadge.jsx";
import CompanyAvatar from "../components/CompanyAvatar";
import ApplicationSheet from "#src/components/ApplicationSheet.jsx";
import { statuses } from "#src/lib/constants.js";
import Alert from "#src/components/Alert.jsx";
import { toast } from "sonner";
import RowActions from "#src/components/RowActions.jsx";
import DeleteDialog from "#src/components/DeleteDialog.jsx";

const filterOptions = ["all", ...statuses];

const Applications = () => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [deleting, setDeleting] = useState(null);
  const [deletingApp, setDeletingApp] = useState(null);

  // Get all applications
  useEffect(() => {
    const getApplications = async () => {
      try {
        const { data } = await api.get("/applications");
        setApplications(data);
      } catch (err) {
        setError(
          err.response?.data?.message || "Could not load your applications.",
        );
      } finally {
        setLoading(false);
      }
    };
    getApplications();
  }, []);

  // Filter and Search attached
  const filteredApplications =
    selectedStatus === "all"
      ? applications
      : applications.filter((app) => app.status === selectedStatus);
  const query = search.trim().toLowerCase();
  const visibleApplications = filteredApplications.filter(
    (app) =>
      app.company.toLowerCase().includes(query) ||
      app.jobTitle.toLowerCase().includes(query) ||
      app.platform?.toLowerCase().includes(query),
  );

  // Status counter
  const appliedCount = applications.filter(
    (app) => app.status !== "wishlist",
  ).length;

  // Validations
  const isEmpty = !loading && !error && applications.length === 0;
  const noMatches =
    !loading && applications.length > 0 && visibleApplications.length === 0;

  // Saving new application
  const handleSaved = (newApp) => {
    setApplications((prev) => [newApp, ...prev]);
    setSheetOpen(false);
    toast.success("Application saved!");
  };

  // Deleting application
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await api.delete(`/applications/${deletingApp._id}`);
      setApplications((prev) => prev.filter((a) => a._id !== deletingApp._id));
      setDeletingApp(null);
      toast.success("Application deleted");
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Could not delete the application.",
      );
    } finally {
      setDeleting(false);
    }
  };

  return (
    <main className="space-y-4">
      <Banner
        title="Applications"
        mascotVariant="pouncing"
        mascotPosition="-bottom-20"
      >
        Every job you've applied for, in one place. You've pounced to{" "}
        <span className="font-medium text-heading">{appliedCount}</span>{" "}
        {appliedCount === 1 ? "job" : "jobs"} so far. Keep pouncing!
      </Banner>

      <section>
        <div className="flex flex-col-reverse gap-2  md:flex-row justify-between mb-2">
          <div className="flex flex-wrap md:flex-nowrap gap-1 py-1">
            {filterOptions.map((option) => {
              const isActive = selectedStatus === option;
              const count =
                option === "all"
                  ? applications.length
                  : applications.filter((app) => app.status === option).length;

              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setSelectedStatus(option)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-sm p-1 md:px-2 text-xs capitalize ${
                    isActive
                      ? "bg-purple text-white"
                      : "bg-card text-muted-foreground hover:text-heading"
                  }`}
                >
                  {option} <span className="opacity-70">({count})</span>
                </button>
              );
            })}
          </div>

          <div className="flex w-full  gap-1 sm:w-md">
            <label className="input">
              <Search className="opacity-60 size-5" />
              <input
                type="search"
                className="grow"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search company or job title"
                aria-label="Search applications"
              />
            </label>
            <Button onClick={() => setSheetOpen(true)}>
              <Plus strokeWidth={2} className="size-5" />
              <span className="hidden sm:inline">Add application</span>
            </Button>
          </div>
        </div>
        {error && <Alert error={error} className="rounded-sm" />}
        <div className="overflow-x-auto rounded-sm border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead className="text-heading">
              <tr>
                <th>Company/Employer</th>
                <th>Job Title</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Date Applied</th>
                <th>Salary/Range</th>
                <th>Interview</th>
                <th></th>
              </tr>
            </thead>

            {loading ? (
              <tbody>
                {Array.from({ length: 5 }).map((_, row) => (
                  <tr key={row}>
                    {Array.from({ length: 8 }).map((_, cell) => (
                      <td key={cell}>
                        <div className="skeleton bg-purple/15 h-4 w-full rounded-xs " />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ) : (
              <tbody>
                {isEmpty ? (
                  <tr>
                    <td colSpan={8}>
                      <div className="flex flex-col justify-center items-center">
                        <Mascot variant="sleeping" className="h-40"></Mascot>
                        <p className="text-base pb-5">
                          No applications yet. Add your first one!
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : noMatches ? (
                  <tr>
                    <td colSpan={8}>
                      <div className="flex flex-col justify-center items-center">
                        <Mascot variant="curious" className="h-40"></Mascot>
                        <p className="text-base pb-5">
                          No applications matched.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  visibleApplications.map((app) => {
                    return (
                      <tr key={app._id}>
                        <td>
                          <CompanyAvatar name={app.company} />
                        </td>
                        <td>{app.jobTitle}</td>
                        <td>{app.platform}</td>
                        <td>
                          <StatusBadge status={app.status}></StatusBadge>
                        </td>
                        <td className="whitespace-nowrap">
                          {formatDate(app.dateApplied ?? app.createdAt)}
                        </td>
                        <td className="text-center">
                          {app.salaryRange ?? "-"}
                        </td>
                        <td className="text-center whitespace-nowrap">
                          {formatDateTime(app.interviewDate)}
                        </td>
                        <td>
                          <RowActions
                            onView={() => console.log("view", app._id)}
                            onEdit={() => console.log("edit", app._id)}
                            onDelete={() => setDeletingApp(app)}
                          />
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            )}
          </table>
        </div>
      </section>
      <ApplicationSheet
        title="Add application"
        description="Track a job you applied for or want to apply to."
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        onSaved={handleSaved}
      />
      <DeleteDialog
        application={deletingApp}
        loading={deleting}
        onConfirm={handleDelete}
        onCancel={() => setDeletingApp(null)}
      />
    </main>
  );
};

export default Applications;
