"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email || !password) {
      toast.error("All fields are required");
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("Invalid email address");
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("https://urav.up.railway.app/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data?.message || data?.error || "Invalid credentials.");
        return;
      }

      toast.success("Logged in successfully!");

      if (data?.token) {
        sessionStorage.setItem("admin_token", data.token);
      }

      router.push("/admin/dashboard");
    } catch (error) {
      toast.error("Network error. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-neutral-900 w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl flex flex-col gap-4 shadow-lg">
        <h2 className="text-white text-xl sm:text-2xl font-semibold text-center">
          Admin Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="w-full p-3 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-[#630D15] disabled:opacity-50"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
          className="w-full p-3 rounded bg-neutral-800 text-white outline-none focus:ring-2 focus:ring-[#630D15] disabled:opacity-50"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#630D15] hover:bg-[#570a11] transition p-3 rounded text-white font-medium disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </div>
    </section>
  );
}
