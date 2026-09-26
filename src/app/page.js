"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const raw = localStorage.getItem("dashboard_auth");
    if (!raw) return router.replace("/login");

    try {
      const session = JSON.parse(raw);
      if (session.role === "user") router.replace("/dashboard");
      else router.replace("/users");
    } catch {
      router.replace("/login");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-10 w-10 rounded-full border-4 border-brand-500 border-t-transparent animate-spin" />
    </div>
  );
}