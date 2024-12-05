"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function EditUserForm({ name, email }) {
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);

  const router = useRouter();
  const { data: session, update } = useSession(); // Access session and update method

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/${newEmail}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newName, newEmail }),
      });

      if (!res.ok) {
        throw new Error("Failed to update user details");
      }
      
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto border border-slate-500 px-8 py-4 flex flex-col items-center rounded-2xl">
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={handleSubmit}>
        <p className="text-xl font-bold">Edit Your Details</p>
        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          value={newEmail}
          onChange={(e) => setNewEmail(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-200 font-bold text-white hover:text-black min-w-40 mt-4 px-4 py-2 rounded-2xl">
          Update Details
        </button>
      </form>
    </div>
  );
}
