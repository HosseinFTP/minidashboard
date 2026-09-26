"use client";

import { useEffect, useState } from "react";
import { Button, Input, Modal, Select } from "./ui";

const empty = { name: "", email: "", role: "user", status: "active" };

export default function UserModal({ open, onClose, onSave, user }) {
  const [form, setForm] = useState(empty);
  const [error, setError] = useState("");

  useEffect(() => {
    if (open) {
      setForm(user ?? empty);
      setError("");
    }
  }, [open, user]);

  const isEdit = Boolean(user);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim()) {
      setError("نام و ایمیل الزامی هستن.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("ایمیل معتبر نیست.");
      return;
    }

    onSave(form);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? "ویرایش کاربر" : "افزودن کاربر"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
            نام کامل
          </label>
          <Input
            placeholder="مثلاً علی رضایی"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            autoFocus
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
            ایمیل
          </label>
          <Input
            type="email"
            placeholder="example@mail.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            dir="ltr"
            className="text-left"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
              نقش
            </label>
            <Select
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="user">کاربر</option>
              <option value="editor">ویرایشگر</option>
              <option value="admin">مدیر</option>
            </Select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-zinc-600 dark:text-zinc-400">
              وضعیت
            </label>
            <Select
              value={form.status}
              onChange={(e) => setForm({ ...form, status: e.target.value })}
            >
              <option value="active">فعال</option>
              <option value="inactive">غیرفعال</option>
              <option value="pending">در انتظار</option>
            </Select>
          </div>
        </div>

        {error && (
          <div className="rounded-xl bg-rose-50 border border-rose-200 px-3 py-2 text-xs font-bold text-rose-600 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400">
            {error}
          </div>
        )}

        <div className="flex gap-3 pt-2">
          <Button type="submit" className="flex-1">
            {isEdit ? "ذخیره تغییرات" : "افزودن کاربر"}
          </Button>
          <Button type="button" variant="outline" onClick={onClose}>
            انصراف
          </Button>
        </div>
      </form>
    </Modal>
  );
}