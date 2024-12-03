import Searchbar from "@/components/Searchbar";
import Filters from "@/components/Filters";
import AllJobsList from "@/components/AllJobsList";

export const dynamic = "force-dynamic"; // Ensures dynamic rendering

export default function Jobs() {
    return (
        <>
            <Searchbar />

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
