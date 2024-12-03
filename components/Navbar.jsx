"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import LogOutButton from "./LogOutButton";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full flex justify-between items-center px-8 py-8 gap-8" style={{ background: "#00242A"}}>
      <Link className="w-1/4" href={"/"}>
        <div className="text-2xl text-white">Cyber Solutions</div>
      </Link>

      <div className="py-2 flex justify-between text-white gap-8">
        <Link className="hover:underline" href={"/"}>
          Home
        </Link>
        <Link className="hover:underline" href={"/aboutUs"}>
          About Us
        </Link>
        <Link className="hover:underline" href={"/savedJobs"}>
          My Jobs
        </Link>
        {!session && (
          <Link className="hover:underline" href={"/loginRegister"}>
            Login/Register
          </Link>
        )}

        {session && <LogOutButton />}
      </div>
    </nav>
  );
}
