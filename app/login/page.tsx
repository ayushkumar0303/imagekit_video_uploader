"use client";
import { log } from "console";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => e.target.value}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => e.target.value}
        />
        <button type="submit">Login</button>
      </form>
      <div>
        Don't have an account ?{" "}
        <button onClick={() => router.push("/register")}>Register</button>
      </div>
    </div>
  );
}

export default LoginPage;
