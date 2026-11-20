import Banner from "#src/components/Banner.jsx";
import { useState } from "react";
import Mascot from "../assets/mascot/pouncing.svg";
import { Search, Plus } from "lucide-react";
import Button from "#src/components/Button.jsx";

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
  const [search, setSearch] = useState();
  const [selectedStatus, setSelectedStatus] = useState("all");
  const applications = [
    { id: 1, status: "applied" },
    { id: 2, status: "rejected" },
  ];
  // const filteredApplications =
  //   selectedStatus === "all"
  //     ? applications
  //     : applications.filter((app) => app.status === selectedStatus);

  return (
    <main className="space-y-4">
      <Banner title="Applications" mascot={Mascot} mascotPosition="-bottom-22">
        Every job you've applied for, in one place. You've pounced to{" "}
        <span className="font-medium text-heading">20</span> jobs so far. Keep
        pouncing!
      </Banner>

      <section>
        <div className="flex flex-col-reverse gap-2 md:flex-row justify-between mb-2">
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
            <tbody>
              {/* row 1 */}
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              {/* row 2 */}
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              {/* row 3 */}
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default Applications;
