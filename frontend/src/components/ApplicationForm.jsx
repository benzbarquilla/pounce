import {
  BuildingComplex,
  BriefcaseBusiness,
  Network,
  MapPinned,
  Wallet,
  Link,
  Contact,
} from "lucide-react";
import InputField from "./InputField";
import Button from "./Button";
import { useState } from "react";
import { statuses, workTypes } from "#src/lib/constants.js";
import api from "#src/services/api.js";
import Alert from "./Alert";
import { toDateInput, toDateTimeInput } from "#src/lib/date.js";

const ApplicationForm = ({ onClose, onSaved, application }) => {
  const today = new Date().toLocaleDateString("en-CA"); // "2026-11-24", in LOCAL time
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    //data it accepts also used for edit which takes the value is there is one "" is fallback for add
    company: application?.company ?? "",
    jobTitle: application?.jobTitle ?? "",
    platform: application?.platform ?? "",
    status: application?.status ?? "applied",
    dateApplied: application
      ? toDateInput(application?.dateApplied ?? application?.createdAt)
      : today,
    interviewDate: toDateTimeInput(application?.interviewDate),
    workType: application?.workType ?? "",
    location: application?.location ?? "",
    salaryRange: application?.salaryRange ?? "",
    jobLink: application?.jobLink ?? "",
    contact: application?.contact ?? "",
    notes: application?.notes ?? "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const payload = {
        ...formData,
        dateApplied: formData.dateApplied
          ? new Date(`${formData.dateApplied}T12:00:00`).toISOString()
          : "",
        interviewDate: formData.interviewDate
          ? new Date(formData.interviewDate).toISOString()
          : "",
      };

      // Edit and Add request
      const request = application
        ? api.patch(`/applications/${application._id}`, payload)
        : api.post("/applications", payload);
      const { data } = await request;
      onSaved(data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          (err.response
            ? "Failed to save application. Try again."
            : "Cannot reach server. Please try again."),
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex min-h-0 flex-1 flex-col" onSubmit={handleSubmit}>
      <div className="flex-1 overflow-y-auto px-4">
        {/* Job Details */}
        <fieldset>
          <legend className="text-lg mb-2 font-semibold">Job Details</legend>
          <InputField
            id="company"
            type="text"
            label="Company/Employer *"
            placeholder="Microsoft"
            icon={BuildingComplex}
            name="company"
            required
            hint="Company or employer is required"
            value={formData.company}
            onChange={handleChange}
            className="input validator"
          />
          <div className="flex flex-col md:flex-row gap-2 ">
            <InputField
              id="jobtitle"
              type="text"
              label="Job Title *"
              placeholder="IT Support"
              icon={BriefcaseBusiness}
              name="jobTitle"
              required
              hint="Job title is required"
              value={formData.jobTitle}
              onChange={handleChange}
              className="validator input"
            />
            <InputField
              id="platform"
              type="text"
              label="Platform *"
              placeholder="LinkedIn"
              icon={Network}
              name="platform"
              required
              hint="Platform is required"
              value={formData.platform}
              onChange={handleChange}
              className="input validator"
            />
          </div>
        </fieldset>

        {/* Status */}
        <fieldset className="space-y-4">
          <legend className="text-lg mb-2 font-semibold">Status & Dates</legend>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-2/4">
              <label
                htmlFor="status"
                className="fieldset-legend font-normal pt-0 text-sm"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                value={formData.status}
                onChange={handleChange}
                className="select w-full capitalize"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full md:w-2/4">
              <InputField
                id="applieddate"
                type="date"
                label="Date Applied"
                name="dateApplied"
                value={formData.dateApplied}
                onChange={handleChange}
                className="input"
              />
            </div>
          </div>
          <div className="w-full md:w-57 mb-6">
            {(formData.status === "interview" || formData.interviewDate) && (
              <InputField
                id="interviewdate"
                type="datetime-local"
                label="Interview Date"
                name="interviewDate"
                value={formData.interviewDate}
                onChange={handleChange}
                className="input"
              />
            )}
          </div>
        </fieldset>

        {/* Details */}
        <fieldset className="space-y-4">
          <legend className="text-lg mb-2 font-semibold">Details</legend>
          <div className="flex flex-col md:flex-row gap-2">
            <div className="w-full md:w-61">
              <label
                htmlFor="worktype"
                className="fieldset-legend font-normal pt-0 text-sm"
              >
                Work Type
              </label>
              <select
                name="workType"
                id="worktype"
                value={formData.workType}
                onChange={handleChange}
                className="select w-full capitalize"
              >
                <option value="" className="">
                  Select work type
                </option>
                {workTypes.map((workType) => (
                  <option key={workType} value={workType}>
                    {workType}
                  </option>
                ))}
              </select>
            </div>
            <InputField
              id="location"
              type="text"
              label="Location"
              placeholder="San Jose, MC"
              icon={MapPinned}
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="input"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 mb-6">
            <InputField
              id="salary"
              type="text"
              label="Salary/Range"
              placeholder="$5 - $8/hr"
              icon={Wallet}
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              className="input"
            />
            <InputField
              id="joblink"
              type="url"
              label="Job Link"
              placeholder="https://..."
              icon={Link}
              name="jobLink"
              value={formData.jobLink}
              onChange={handleChange}
              className="input"
            />
          </div>
        </fieldset>

        {/* Contact and notes */}
        <fieldset className="space-y-4 mb-6">
          <legend className="text-lg mb-2 font-semibold">
            Contact & Notes
          </legend>
          <div className="flex flex-col gap-4">
            <InputField
              id="contact"
              type="text"
              label="Contact"
              placeholder="johndoe@gmail.com"
              icon={Contact}
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              className="input"
            />
            <div>
              <label
                htmlFor="notes"
                className="fieldset-legend font-normal pt-0 text-sm"
              >
                Notes
              </label>
              <textarea
                className="textarea w-full"
                id="notes"
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
        </fieldset>
      </div>

      {error && <Alert error={error} className="rounded-none" />}

      <div className="flex justify-end gap-2 border-t px-4 py-3">
        <Button
          type="submit"
          loading={loading}
          className="inline-flex px-10 border-none"
        >
          Save
        </Button>
        <Button onClick={onClose} variant="outline">
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default ApplicationForm;
