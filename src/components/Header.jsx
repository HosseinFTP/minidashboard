"use client";

import { Bell, Menu, Search } from "lucide-react";
import ThemeToggle from "@/context/ThemeToggle";
import { Input } from "./ui";
import { useSidebar } from "@/context/SidebarContext";

export default function Header({ title = "داشبورد" }) {
  const { setOpen } = useSidebar();

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200 bg-white/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden h-10 w-10 shrink-0 inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
            aria-label="باز کردن منو"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-zinc-100 truncate">
            {title}
          </h1>
        </div>

        <div className="hidden md:block w-full max-w-sm">
          <Input placeholder="جستجوی سریع..." icon={<Search size={18} />} />
        </div>

        <div className="flex items-center gap-2">
          <button
            className="relative h-10 w-10 inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-700 transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
            aria-label="اعلان‌ها"
          >
            <Bell size={18} />
            <span className="absolute top-2 left-2 h-2 w-2 rounded-full bg-brand-500" />
          </button>

          <ThemeToggle />

          <div className="hidden sm:flex items-center gap-3 rounded-xl border border-zinc-200 bg-white pl-2 pr-3 py-1.5 dark:border-zinc-800 dark:bg-zinc-900">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-black text-sm">
              ع
            </div>
            <div className="hidden lg:block">
              <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                علی رضایی
              </p>
              <p className="text-[10px] text-zinc-500">مدیر سیستم</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}