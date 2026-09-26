"use client";

import { Search, X } from "lucide-react";
import { Input, Button } from "./ui";

const roleOptions = [
  { value: "all", label: "همه‌ی نقش‌ها" },
  { value: "admin", label: "مدیر" },
  { value: "editor", label: "ویرایشگر" },
  { value: "user", label: "کاربر" },
];

const statusOptions = [
  { value: "all", label: "همه‌ی وضعیت‌ها" },
  { value: "active", label: "فعال" },
  { value: "inactive", label: "غیرفعال" },
  { value: "pending", label: "در انتظار" },
];

export default function UserFilters({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
  onReset,
  onAdd,
}) {
  const hasFilter =
    search !== "" || roleFilter !== "all" || statusFilter !== "all";

  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="flex-1">
        <Input
          placeholder="جستجو بر اساس نام یا ایمیل..."
          icon={<Search size={18} />}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-bold text-zinc-700 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
        >
          {roleOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-bold text-zinc-700 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
        >
          {statusOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        {hasFilter && (
          <Button variant="outline" onClick={onReset} className="gap-2">
            <X size={16} />
            پاک کردن
          </Button>
        )}

        <Button onClick={onAdd} className="whitespace-nowrap">
          + افزودن کاربر
        </Button>
      </div>
    </div>
  );
}