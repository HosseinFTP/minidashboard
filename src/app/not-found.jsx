import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-zinc-50 via-white to-brand-50/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-brand-950/30">
      <div className="w-full max-w-md text-center">
        <div className="relative mb-8">
          <h1 className="text-[120px] sm:text-[160px] font-black leading-none bg-gradient-to-br from-brand-400 via-brand-500 to-brand-700 bg-clip-text text-transparent select-none">
            404
          </h1>
          <div className="absolute inset-0 blur-3xl bg-brand-500/20 -z-10" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-zinc-100 mb-3">
          صفحه پیدا نشد
        </h2>

        <p className="text-sm text-zinc-500 mb-8 leading-7">
          آدرسی که دنبالش بودی وجود نداره یا حذف شده.
          <br />
          می‌تونی برگردی به داشبورد و ادامه بدی.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl bg-brand-500 text-white text-sm font-bold shadow-sm shadow-brand-500/30 transition-all hover:bg-brand-600 hover:shadow-md hover:shadow-brand-500/40"
          >
            بازگشت به داشبورد
          </Link>

          <Link
            href="/login"
            className="inline-flex items-center justify-center h-11 px-6 rounded-xl border border-zinc-200 text-zinc-800 text-sm font-bold transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-900"
          >
            صفحه‌ی ورود
          </Link>
        </div>

        <div className="mt-12 flex items-center justify-center gap-2 text-xs text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          <span>داشبورد مدیریت کاربران</span>
        </div>
      </div>
    </div>
  );
}