import Link from "next/link";

import AuthForm from "@/components/auth-form";
import H1 from "@/components/h1";

export default function Signup() {
  return (
    <main>
      <H1 className="mb-5 text-center">Sign Up</H1>

      <AuthForm type="signUp" />

      <p className="mt-6 text-sm text-zinc-500">
        Already have an account?{" "}
        <Link href="/login" className="font-medium">
          Sign Up
        </Link>
      </p>
    </main>
  );
}
