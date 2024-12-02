"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/jobs/${id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to update job");
            }

            router.push("/");
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
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
            />

            <input
                className="px-4 py-2 border border-slate-300"
                type="text"
                name="description"
                id="description"
                placeholder="Job description"
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
            />

            <button className="bg-green-600 font-bold text-white min-w-40 w-fit px-4 py-2">
                Update Job
            </button>
        </form>
    );
}
