"use client";

import AllJobsList from "./AllJobsList";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return <div className="max-w-7xl mx-auto my-8 flex flex-col gap-6">
    <div className="">
        <h2 className="text-5xl capitalize">Hello, {session?.user?.name}</h2>
    </div>
  </div>;
}
