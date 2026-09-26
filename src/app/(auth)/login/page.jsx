"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, LogIn } from "lucide-react";
import { Button, Card } from "@/components/ui";
import AuthInput from "@/components/AuthInput";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "ایمیل الزامی است";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "ایمیل معتبر نیست";
    if (!form.password) e.password = "رمز عبور الزامی است";
    else if (form.password.length < 6) e.password = "حداقل ۶ کاراکتر";
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
      login({ email: form.email, password: form.password });
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
        <h1 className="text-2xl font-black">خوش آمدی</h1>
        <p className="text-sm text-zinc-500 mt-1">
          برای ورود به داشبورد، اطلاعاتت رو وارد کن
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
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
              <LogIn size={18} />
              ورود
            </>
          )}
        </Button>
      </form>

      <p className="text-center text-sm text-zinc-500 mt-6">
        حساب نداری؟{" "}
        <Link
          href="/register"
          className="font-bold text-brand-500 hover:text-brand-600"
        >
          ثبت‌نام کن
        </Link>
      </p>
    </Card>
  );
}