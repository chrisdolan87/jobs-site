"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [registerFormError, setRegisterFormError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [registerError, setRegisterError] = useState("");

  // HANDLE REGISTER FORM SUBMIT
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setFormError("All fields are necessary");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        setRegisterSuccess("User registration successful");
        const form = e.target;
        form.reset();
      } else {
        setRegisterError("User registration failed");
        console.log("User registration failed");
      }
    } catch (registerError) {
      console.log("Error during registration: ", registerError);
    }
  };

  return (
    <div className="border border-slate-500 px-8 py-4 flex flex-col items-center rounded-2xl">
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={handleRegisterSubmit}>
        <p className="text-xl font-bold">Create an Account</p>

        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="text"
          name="name"
          id="name"
          placeholder="Full name"
          onChange={(e) => setname(e.target.value)}
        />

        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="text"
          name="email"
          id="email"
          placeholder="Email address"
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setpassword(e.target.value)}
        />

        <div className="w-full flex gap-4">
          <input type="checkbox" name="termsCheck" id="termsCheck" />
          <label htmlFor="termsCheck">
            I have read and agree to the <span>term & conditions</span>
          </label>
        </div>

        <div className="w-full flex justify-start gap-4 mb-4">
          <input type="checkbox" name="privacyCheck" id="privacyCheck" />
          <label htmlFor="privacyCheck">
            I have read and agree to the <span>privacy policy</span>
          </label>
        </div>

        {registerSuccess && (
          <div className="w-full bg-green-500 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {registerSuccess}
          </div>
        )}
        {registerError && (
          <div className="w-full bg-red-600 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {registerError}
          </div>
        )}
        {registerFormError && (
          <div className="w-full bg-red-600 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {registerFormError}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-200 font-bold text-white hover:text-black min-w-40 mt-4 px-4 py-2 rounded-2xl">
          Create Account
        </button>
      </form>
    </div>
  );
}
