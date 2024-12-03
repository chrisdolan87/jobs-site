"use client";

import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

export default function LogOutButton() {
  const router = useRouter();

  return (
    <button className="hover:underline" onClick={() => signOut()}>
      Log Out
    </button>
  );
}
