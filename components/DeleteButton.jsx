"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }) {
    const router = useRouter();

    const deleteJob = async() => {
        const confirmed = confirm("Are you sure you want to delete this job?");

        if (confirmed) {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/jobs?id=${id}`, {
                method: "DELETE",
            });

            if (res.ok) {
                router.refresh();
            }
        }        
    };

    return (
        <button onClick={deleteJob} className="text-red-700">
            <HiOutlineTrash size={24} />
        </button>
    );
}
