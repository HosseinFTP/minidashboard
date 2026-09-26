"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  X,
  BarChart3,
} from "lucide-react";
import { useSidebar } from "@/context/SidebarContext";
import { useAuth } from "@/context/AuthContext";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { open, setOpen } = useSidebar();
  const { user, logout } = useAuth();

  const navItems = [
    { href: "/dashboard", label: "داشبورد", icon: LayoutDashboard, roles: ["admin", "editor", "user"] },
    { href: "/users", label: "کاربران", icon: Users, roles: ["admin", "editor"] },
    { href: "/analytics", label: "آمار و تحلیل", icon: BarChart3, roles: ["admin", "editor"] },
    { href: "/settings", label: "تنظیمات", icon: Settings, roles: ["admin"] },
  ];

  const visibleItems = navItems.filter((item) =>
    user ? item.roles.includes(user.role) : false
  );

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}

      <aside
        className={`fixed lg:sticky top-0 right-0 z-50 h-screen w-72 shrink-0 border-l border-zinc-200 bg-white transition-transform duration-300 dark:border-zinc-800 dark:bg-zinc-900 ${
          open ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between mb-8">
            <Link href="/dashboard" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-500 flex items-center justify-center text-white font-black text-lg shadow-sm shadow-brand-500/30">
                د
              </div>
              <div>
                <p className="font-black text-zinc-900 dark:text-zinc-100">
                  داشبورد
                </p>
                <p className="text-xs text-zinc-500">مدیریت کاربران</p>
              </div>
            </Link>
            <button
              onClick={() => setOpen(false)}
              className="lg:hidden h-9 w-9 inline-flex items-center justify-center rounded-lg text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="بستن منو"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 space-y-1">
            {visibleItems.map(({ href, label, icon: Icon }) => {
              const active =
                pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    active
                      ? "bg-brand-500 text-white shadow-sm shadow-brand-500/30"
                      : "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
                  }`}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          <button
            onClick={handleLogout}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-rose-500 transition-all hover:bg-rose-50 dark:hover:bg-rose-500/10"
          >
            <LogOut size={20} />
            <span>خروج</span>
          </button>
        </div>
      </aside>
    </>
  );
}