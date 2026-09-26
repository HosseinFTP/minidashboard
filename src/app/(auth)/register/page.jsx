"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, UserPlus } from "lucide-react";
import { Button, Card } from "@/components/ui";
import AuthInput from "@/components/AuthInput";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "نام الزامی است";
    if (!form.email) e.email = "ایمیل الزامی است";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "ایمیل معتبر نیست";
    if (!form.password) e.password = "رمز عبور الزامی است";
    else if (form.password.length < 6) e.password = "حداقل ۶ کاراکتر";
    if (form.password !== form.confirm) e.confirm = "تکرار رمز مطابقت ندارد";
    return e;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) return setErrors(e);

    setErrors({});
    setLoading(true);
    await new Promise((r) => setTimeout(r, 600));

    try {
      register(form);
      router.push("/users");
    } catch (err) {
      setErrors({ general: err.message });
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md !p-8 shadow-xl">
      <div className="text-center mb-8">
        <div className="h-14 w-14 rounded-2xl bg-brand-500 flex items-center justify-center text-white font-black text-2xl mx-auto mb-4 shadow-lg shadow-brand-500/30">
          د
        </div>
        <h1 className="text-2xl font-black">ساخت حساب جدید</h1>
        <p className="text-sm text-zinc-500 mt-1">
          چند ثانیه‌ای عضو داشبورد شو
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="نام کامل"
          placeholder="علی رضایی"
          icon={<User size={18} />}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          error={errors.name}
        />

        <AuthInput
          label="ایمیل"
          type="email"
          placeholder="you@example.com"
          icon={<Mail size={18} />}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          error={errors.email}
          dir="ltr"
        />

        <AuthInput
          label="رمز عبور"
          type="password"
          placeholder="••••••••"
          icon={<Lock size={18} />}
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          error={errors.password}
        />

        <AuthInput
          label="تکرار رمز عبور"
          type="password"
          placeholder="••••••••"
          icon={<Lock size={18} />}
          value={form.confirm}
          onChange={(e) => setForm({ ...form, confirm: e.target.value })}
          error={errors.confirm}
        />

        {errors.general && (
          <div className="rounded-xl bg-rose-50 border border-rose-200 px-3 py-2.5 text-xs font-bold text-rose-600 dark:bg-rose-500/10 dark:border-rose-500/20 dark:text-rose-400">
            {errors.general}
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={loading}>
          {loading ? (
            <span className="h-5 w-5 rounded-full border-2 border-white/40 border-t-white animate-spin" />
          ) : (
            <>
              <UserPlus size={18} />
              ساخت حساب
            </>
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-zinc-500 mt-6">
        حساب داری؟{" "}
        <Link
          href="/login"
          className="font-bold text-brand-500 hover:text-brand-600"
        >
          وارد شو
        </Link>
      </p>
    </Card>
  );
}