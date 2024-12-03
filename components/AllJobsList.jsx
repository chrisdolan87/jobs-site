import Link from "next/link";

const getJobs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch jobs.");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading jobs: ", error);
    return { jobs: [] }; // Fallback to an empty jobs array
  }
};

export default async function AllJobsList() {
  const { jobs } = await getJobs();

  return (
    <>
      <div className="flex flex-col gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="min-w-96 p-6 flex flex-col justify-between gap-6 bg-gray-100 border border-gray-300 rounded-2xl">
            <div className="w-full flex justify-between">
              <div className="">
                <Link
                  className="text-xl font-bold mb-2 hover:underline"
                  href={`/jobs/${job._id}`}>
                  {job.title}
                </Link>
                <p>Company (Change to Link)</p>
              </div>
              <div className="">
                <p className=" mb-2">Posted: xx/xx/xx</p>
                <p>Location</p>
              </div>
            </div>

            <div className="flex justify-between gap-6">
              <div>
                <p>{job.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-6 py-2 rounded-2xl hover:bg-yellow-200 border border-yellow-500 shadow">
                  Save
                </button>
                <button className="px-6 py-2 rounded-2xl bg-yellow-300 hover:bg-yellow-200 border border-yellow-500 shadow">
                  Apply
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
