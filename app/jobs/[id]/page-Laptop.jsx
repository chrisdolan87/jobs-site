import Filters from "@/components/Filters";
import List from "@/components/AllJobsList";
import Searchbar from "@/components/Searchbar";

const getJobById = async(id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/jobs/${ id }`, {cache: "no-store"});

        if (!res.ok) {
            throw new Error("Failed to fetch job");
        }

        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export default async function Jobs({ params }) {

    const { id } = params;
    const { job } = await getJobById(id);
    const { title, description } = job;

    return (
        <>
            <Searchbar />

            <div className="">
                
            </div>

            <div className="m-8 flex gap-6">
                <div className="h-40 bg-red-300">
                <p>${title}</p>
                <p>${description}</p>
                </div>
            </div>
        </>
    );
}
