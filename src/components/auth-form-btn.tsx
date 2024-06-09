"use client";

import { useFormStatus } from "react-dom";

import { Button } from "./ui/button";

type AuthFormBtnProps = {
  type: "signUp" | "logIn";
};

function AuthFormBtn({ type }: AuthFormBtnProps) {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending}>
      {type === "signUp" ? "Sign Up" : "Log In"}
    </Button>
  );
}

export default AuthFormBtn;
