import Link from "next/link";
import DeleteButton from "./DeleteButton";
import { HiPencilAlt } from "react-icons/hi";

const getJobs = async () => {
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

export default async function List() {
    const { jobs } = await getJobs();

    return (
        <>
            <div className="flex flex-col gap-6">
                {jobs.map((job) => (
                    <div className="min-w-96 p-6 flex justify-between bg-gray-100 border border-gray-300 rounded-xl">
                        <div className="">
                            <h2 className="text-xl font-bold mb-2">
                                {job.title}
                            </h2>
                            <p>{job.description}</p>
                        </div>

                        <div className="flex gap-6 items-center">
                            <Link href={`/editTopic/${job._id}`}>
                                <HiPencilAlt size={24} />
                            </Link>
                            <DeleteButton id={job._id} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
