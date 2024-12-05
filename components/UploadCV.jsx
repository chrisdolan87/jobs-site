"use client";

import { redirect } from "next/navigation";
import { useState } from "react";

export default function UploadCV() {
  const [file, setFile] = useState("");
  const [cvFormError, setCVFormError] = useState("");
  const [cvSuccess, setCVSuccess] = useState("");
  const [cvError, setCVError] = useState("");

  // HANDLE REGISTER FORM SUBMIT
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
        setCVFormError("All fields are necessary");
      return;
    }

    try {
      const res = await fetch("api/uploadcv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({

        }),
      });

      if (res.ok) {
        setCVSuccess("CV upload successful");
        const form = e.target;
        form.reset();
      } else {
        setCVError("CV upload failed");
        console.log("CV upload failed");
      }
    } catch (cvError) {
      console.log("Error during CV upload: ", cvError);
    }
  };

  return (
    <div className="max-w-7xl mx-auto border border-slate-500 px-8 py-4 flex flex-col items-center rounded-2xl">
      <form
        className="flex flex-col justify-center items-center gap-4">
        <p className="text-xl font-bold">Upload Your CV</p>

        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="file"
          name="cv"
          id="cv"
          onChange={(e) => setFile(e.target.value)}
        />

        {cvSuccess && (
          <div className="w-full bg-green-500 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {cvSuccess}
          </div>
        )}
        {cvError && (
          <div className="w-full bg-red-600 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {cvError}
          </div>
        )}
        {cvFormError && (
          <div className="w-full bg-red-600 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {cvFormError}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-200 font-bold text-white hover:text-black min-w-40 mt-4 px-4 py-2 rounded-2xl">
          Upload CV
        </button>
      </form>
    </div>
  );
}
