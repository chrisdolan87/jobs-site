export default function Newsletter() {
    return (
        <div className="w-full flex flex-col justify-center items-center py-20 gap-8 bg-slate-600">

            <h2 className="text-2xl font-bold text-white">Keep up-to-date with our newsletter</h2>

            <form action="" method="get" className="w-full flex justify-center gap-4">
                <input className="min-w-96 w-1/2 px-4 py-2 border border-amber-300 rounded-xl" type="text" name="search" id="search" placeholder="example@email.com" />

                <button className="min-w-40 px-4 py-2 bg-amber-200 border border-amber-300 rounded-xl" type="submit">Join</button>
            </form>

        </div>
    )
}