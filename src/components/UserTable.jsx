"use client";

import { Pencil, Trash2 } from "lucide-react";
import { Badge } from "./ui";
import { roles, statuses } from "@/data/users";

export default function UserTable({ users, onEdit, onDelete }) {
  if (users.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-12 text-center dark:border-zinc-700 dark:bg-zinc-900">
        <p className="text-lg font-bold text-zinc-700 dark:text-zinc-300">
          کاربری پیدا نشد 
        </p>
        <p className="text-sm text-zinc-500 mt-1">
          فیلترها یا عبارت جستجو رو تغییر بده.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden dark:border-zinc-800 dark:bg-zinc-900">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/50">
              <th className="text-right px-4 py-3 font-bold text-zinc-600 dark:text-zinc-400">
                کاربر
              </th>
              <th className="text-right px-4 py-3 font-bold text-zinc-600 dark:text-zinc-400 hidden md:table-cell">
                ایمیل
              </th>
              <th className="text-right px-4 py-3 font-bold text-zinc-600 dark:text-zinc-400">
                نقش
              </th>
              <th className="text-right px-4 py-3 font-bold text-zinc-600 dark:text-zinc-400">
                وضعیت
              </th>
              <th className="text-right px-4 py-3 font-bold text-zinc-600 dark:text-zinc-400 hidden lg:table-cell">
                تاریخ عضویت
              </th>
              <th className="text-left px-4 py-3 font-bold text-zinc-600 dark:text-zinc-400">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="border-b border-zinc-100 last:border-0 hover:bg-zinc-50/60 transition-colors dark:border-zinc-800 dark:hover:bg-zinc-800/40"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-black shrink-0">
                      {user.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-bold text-zinc-900 dark:text-zinc-100 truncate">
                        {user.name}
                      </p>
                      <p className="text-xs text-zinc-500 md:hidden truncate">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-zinc-600 dark:text-zinc-400 hidden md:table-cell">
                  {user.email}
                </td>
                <td className="px-4 py-3">
                  <Badge color={roles[user.role].color}>
                    {roles[user.role].label}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <Badge color={statuses[user.status].color}>
                    {statuses[user.status].label}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-zinc-500 hidden lg:table-cell">
                  {user.joinedAt}
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-1 justify-end">
                    <button
                      onClick={() => onEdit(user)}
                      className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-zinc-500 hover:bg-brand-50 hover:text-brand-500 transition-colors dark:hover:bg-brand-500/10"
                      aria-label="ویرایش"
                    >
                      <Pencil size={16} />
                    </button>
                    <button
                      onClick={() => onDelete(user)}
                      className="h-9 w-9 inline-flex items-center justify-center rounded-lg text-zinc-500 hover:bg-rose-50 hover:text-rose-500 transition-colors dark:hover:bg-rose-500/10"
                      aria-label="حذف"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}