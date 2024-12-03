"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Title and description are required.");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/jobs", {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (res.ok) {
                router.push("/");
            } else {
                throw new Error("Failed to create job.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="border border-slate-500 p-4 flex flex-col gap-4"
        >
            <input
                className="px-4 py-2 border border-slate-300"
                type="text"
                name="title"
                id="title"
                placeholder="Job title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <input
                className="px-4 py-2 border border-slate-300"
                type="text"
                name="description"
                id="description"
                placeholder="Job description"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
            />

            <button
                type="submit"
                className="bg-green-600 font-bold text-white min-w-40 w-fit px-4 py-2"
            >
                Add Job
            </button>
        </form>
    );
}
