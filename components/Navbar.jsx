import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-slate-800 flex justify-between items-center px-8 py-8 gap-8">
            <div className="text-white">
                Cyber Solutions
            </div>

            <div className="py-2 flex justify-between text-white gap-8">
            <Link className="hover:underline" href={"/"}>Home</Link>

            <Link className="hover:underline" href={"/aboutUs"}>About Us</Link>

            <Link className="hover:underline" href={"/myJobs"}>My Jobs</Link>

            <Link className="hover:underline" href={"/login"}>Login</Link>
            </div>
        </nav>
    )
}