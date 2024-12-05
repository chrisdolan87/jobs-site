"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";

export default function UserInfo() {

  const { data: session } = useSession();
  
  const name = session?.user?.name;
  const id = session?.user?.email;


  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-8">
      <div className="">
        <h2 className="text-4xl capitalize">Hello, {name}</h2>
      </div>
      <div className="mx-auto border border-slate-500 px-8 py-4 flex flex-col items-center rounded-2xl">
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="text-xl font-bold">Your Details</p>
          <p className="text-xl">Name: {name}</p>
          <p className="text-xl">Email: {id}</p>
          <Link
            href={`/editUser/${id}`}
            className="w-full bg-yellow-400 hover:bg-yellow-200 font-bold text-center text-white hover:text-black min-w-40 mt-4 px-4 py-2 rounded-2xl">
            Edit Details
          </Link>
        </div>
      </div>
    </div>
  );
}
