import Searchbar from "@/components/Searchbar";
import Hero from "@/components/Hero";
import Filters from "@/components/Filters";
import AllJobsList from "@/components/AllJobsList";

export const dynamic = "force-dynamic"; // Ensures dynamic rendering

export default function SavedJobs() {
    return (
        <>
            <Searchbar />

            <Hero bgImage="/3227303_43540.jpg">
                <h2 className="text-5xl font-bold text-white">My Saved Jobs</h2>
            </Hero>

            <div className="max-w-7xl mx-auto my-8 flex gap-6">
                <div className="w-2/6">
                    <Filters />
                </div>

                <div className="w-4/6">
                    <AllJobsList />
                </div>
            </div>
        </>
    );
}
