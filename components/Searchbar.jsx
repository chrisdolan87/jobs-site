export default function Searchbar() {
    return (
        <div className="w-full flex justify-center items-center py-8">

            <form action="" method="get" className="flex gap-4">
                <input className="min-w-80 px-4 py-2 border border-amber-300 rounded-xl" type="text" name="search" id="search" placeholder="Job Title, Skill, Keyword" />

                <input className="min-w-80 px-4 py-2 border border-amber-300 rounded-xl" type="text" name="location" id="location" placeholder="Town, City, Postcode" />

                <button className="min-w-40 px-4 py-2 bg-amber-200 border border-amber-300 rounded-xl" type="submit">Search</button>
            </form>

        </div>
    )
}