"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginFormError, setLoginFormError] = useState("");
  const [loginError, setLoginError] = useState("");

  // HANDLE LOGIN FORM SUBMIT
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!loginEmail || !loginPassword) {
      setLoginFormError("All fields are necessary");
      return;
    }

    try {
      const res = await signIn("credentials", {
        loginEmail,
        loginPassword,
        redirect: false,
      });

      if (res.error) {
        setLoginError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-slate-500 px-8 py-4 flex flex-col items-center rounded-2xl">
      <form
        className="flex flex-col justify-center items-center gap-4"
        onSubmit={handleLoginSubmit}>
        <p className="text-xl font-bold">Login to Your Account</p>
        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="text"
          name="loginEmail"
          id="loginEmail"
          placeholder="Email address"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          className="min-w-96 px-4 py-2 rounded-2xl border border-slate-300"
          type="text"
          name="loginPassword"
          id="loginPassword"
          placeholder="Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        {loginError && (
          <div className="w-full bg-red-600 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {loginError}
          </div>
        )}
        {loginFormError && (
          <div className="w-full bg-red-600 font-bold text-white px-4 py-2 text-center rounded-2xl">
            {loginFormError}
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-yellow-400 hover:bg-yellow-200 font-bold text-white hover:text-black min-w-40 mt-4 px-4 py-2 rounded-2xl">
          Login
        </button>
        <div className="w-full flex justify-center items-center">
          <div className="w-full border-t border-slate-500 h-px"></div>
          <div className="mx-4">or</div>
          <div className="w-full border-t border-slate-500 h-px"></div>
        </div>
        <button
          type="submit"
          className="w-full font-bold min-w-40 px-4 py-2 hover:bg-yellow-200 border border-yellow-500 rounded-2xl">
          Login with Google
        </button>
        <button
          type="submit"
          className="w-full font-bold min-w-40 px-4 py-2 hover:bg-yellow-200 border border-yellow-500 rounded-2xl">
          Login with LinkedIn
        </button>
      </form>
    </div>
  );
}
