"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/AuthProvider";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mocking authentication: extracting name from email
    const name = email.split('@')[0] || "User";
    login(email, name);
    router.push("/profile");
  };

  return (
    <main className="pt-32 pb-16 min-h-screen bg-[#f4f4f0] flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <div className="border-4 border-black bg-white p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative">
          <div className="absolute -top-6 -right-6 w-16 h-16 bg-[#ffff00] border-4 border-black rotate-12 flex items-center justify-center font-black text-xl">
            LOG
          </div>

          <h1 className="text-5xl font-black uppercase mb-8 tracking-tighter">Welcome Back</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-6">
            <div>
              <label className="block text-sm font-bold uppercase mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold uppercase mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border-2 border-black p-4 font-mono focus:outline-none focus:border-[#ff0055] transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-black text-white py-4 px-8 font-black uppercase tracking-widest text-lg hover:bg-[#ff0055] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-200"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center border-t-2 border-black border-dashed pt-6">
            <p className="text-gray-600 font-mono text-sm">
              Don't have an account?{" "}
              <Link href="/register" className="text-black font-bold uppercase underline hover:text-[#ff0055]">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
