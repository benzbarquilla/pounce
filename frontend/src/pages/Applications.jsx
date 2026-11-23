import Banner from "#src/components/Banner.jsx";
import { useEffect, useState } from "react";
import { Search, Plus, CircleAlert } from "lucide-react";
import Mascot from "../components/Mascot";
import Button from "#src/components/Button.jsx";
import api from "#src/services/api.js";

const statuses = [
  "all",
  "wishlist",
  "applied",
  "interview",
  "offer",
  "hired",
  "rejected",
  "ghosted",
];

const Applications = () => {
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  const appliedCount = applications.filter(
    (app) => app.status !== "wishlist",
  ).length;

  const isEmpty = !loading && !error && applications.length === 0;
  const noMatches =
    !loading && applications.length > 0 && visibleApplications.length === 0;

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
            {statuses.map((status) => {
              const isActive = selectedStatus === status;
              const count =
                status === "all"
                  ? applications.length
                  : applications.filter((app) => app.status === status).length;

              return (
                <button
                  key={status}
                  type="button"
                  onClick={() => setSelectedStatus(status)}
                  aria-pressed={isActive}
                  className={`shrink-0 rounded-sm p-1 md:px-2 text-xs capitalize ${
                    isActive
                      ? "bg-purple text-white"
                      : "bg-card text-muted-foreground hover:text-heading"
                  }`}
                >
                  {status} <span className="opacity-70">({count})</span>
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
            <Button>
              <Plus strokeWidth={2} className="size-5" />
              <span className="hidden sm:inline">Add application</span>
            </Button>
          </div>
        </div>
        {error && (
          <div
            role="alert"
            className="alert alert-error alert-soft rounded-sm mb-2"
          >
            <CircleAlert strokeWidth={1.25} />
            <span>{error}</span>
          </div>
        )}
        <div className="overflow-x-auto rounded-sm border border-base-content/5 bg-base-100">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Company/Employer</th>
                <th>Job Title</th>
                <th>Platform</th>
                <th>Status</th>
                <th>Date Applied</th>
                <th>Salary/Range</th>
                <th>Interview</th>
                <th>Actions</th>
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
                        <Mascot variant="sleeping" className="h-60"></Mascot>
                        <p className="text-base pb-10">
                          No applications yet. Add your first one!
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : noMatches ? (
                  <tr>
                    <td colSpan={8}>
                      <div className="flex flex-col justify-center items-center">
                        <Mascot variant="curious" className="h-60"></Mascot>
                        <p className="text-base pb-10">
                          No applications matched.
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  visibleApplications.map((app) => {
                    return (
                      <tr key={app._id}>
                        <td>{app.company}</td>
                        <td>{app.jobTitle}</td>
                        <td>{app.platform}</td>
                        <td>{app.status}</td>
                        <td>{app.dateApplied ?? app.createdAt}</td>
                        <td className="text-center">
                          {app.salaryRange ?? "-"}
                        </td>
                        <td>{app.interviewDate}</td>
                        <td></td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            )}
          </table>
        </div>
      </section>
    </main>
  );
};

export default Applications;
