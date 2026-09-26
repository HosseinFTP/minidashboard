"use client";

import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui";
import { User, Mail, Shield } from "lucide-react";
import { roles } from "@/data/users";

export default function DashboardHomePage() {
  const { user } = useAuth();

  if (!user) return null;

  const info = [
    { label: "نام", value: user.name, icon: User },
    { label: "ایمیل", value: user.email, icon: Mail, ltr: true },
    { label: "نقش", value: roles[user.role]?.label ?? user.role, icon: Shield },
  ];

  return (
    <div className="space-y-6">
      <Card className="!p-8">
        <div className="flex items-center gap-5 mb-8">
          <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-black text-3xl shadow-lg shadow-brand-500/30">
            {user.name.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-black">سلام، {user.name}</h1>
            <p className="text-sm text-zinc-500 mt-1">
              خوش اومدی به پنل شخصیت
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {info.map(({ label, value, icon: Icon, ltr }) => (
            <div
              key={label}
              className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800"
            >
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-500 mb-2">
                <Icon size={14} />
                {label}
              </div>
              <p
                className="font-bold text-zinc-900 dark:text-zinc-100 truncate"
                dir={ltr ? "ltr" : "rtl"}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}