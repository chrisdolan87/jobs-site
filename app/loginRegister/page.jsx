import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";

export default async function loginRegister() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/dashboard");
  }
  return (
    <>
      <div className="max-w-7xl mx-auto my-8 py-8 flex justify-center items-center gap-8">
        <RegisterForm />
        <LoginForm />
      </div>
    </>
  );
}
