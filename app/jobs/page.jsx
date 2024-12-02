import Filters from "@/components/Filters";
import List from "@/components/List";
import Searchbar from "@/components/Searchbar";

export default function Jobs() {
    return (
        <>
            <Searchbar />

            <div className="m-8 flex gap-6">
                <div className="w-2/6">
                    <Filters />
                </div>

                <div className="w-4/6">
                    <List />
                </div>
            </div>
        </>
    );
}
