export default async function Filters() {
    return (
        <>
            <div className="h-full p-6 text-center bg-slate-600 rounded-xl">
                <h2 className="text-xl font-bold text-white mb-6">Filter Results</h2>

                <form className="flex flex-col gap-6">
                    <input
                        className="px-4 py-2 border border-slate-300"
                        type="text"
                        name="Job Type"
                        id="Job Type"
                        placeholder="Job Type"
                    />

                    <input
                        className="px-4 py-2 border border-slate-300"
                        type="text"
                        name="location"
                        id="location"
                        placeholder="Location"
                    />

                    <input
                        className="px-4 py-2 border border-slate-300"
                        type="text"
                        name="Date Posted"
                        id="Date Posted"
                        placeholder="Date Posted"
                    />

                    <input
                        className="px-4 py-2 border border-slate-300"
                        type="text"
                        name="Salary"
                        id="Salary"
                        placeholder="Salary"
                    />

                </form>
            </div>
        </>
    );
}
