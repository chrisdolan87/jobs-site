const getAppliedForJobs = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/jobs", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch jobs.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading jobs: ", error);
  }
};

export default async function AppliedForTable() {
  const { jobs } = await getAppliedForJobs();

  return (
    <>
      <div className="w-full p-6 bg-white shadow rounded-md">
        <h2 className="text-xl font-bold mb-4">Jobs Applied For</h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-slate-500">
            <thead>
              <tr className="text-white" style={{ backgroundColor: "#00242A" }}>
                <th className="border border-slate-500 px-4 py-2 text-left">
                  Job Title
                </th>
                <th className="border border-slate-500 px-4 py-2 text-left">
                  Company
                </th>
                <th className="border border-slate-500 px-4 py-2 text-left">
                  Application Date
                </th>
                <th className="border border-slate-500 px-4 py-2 text-left">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job) => (
                <tr key={job.id} className="hover:bg-gray-50">
                  <td className="border border-slate-500 px-4 py-2">
                    {job.title}
                  </td>
                  <td className="border border-slate-500 px-4 py-2">
                    {job.company}
                  </td>
                  <td className="border border-slate-500 px-4 py-2">
                    {job.applicationDate}
                  </td>
                  <td
                    className={`border border-slate-500 px-4 py-2 ${
                      job.status === "Accepted"
                        ? "text-green-600"
                        : job.status === "Rejected"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}>
                    {job.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
