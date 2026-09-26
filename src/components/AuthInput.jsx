"use client";

export default function AuthInput({
  label,
  icon,
  error,
  dir = "rtl",
  ...props
}) {
  return (
    <div className="space-y-1.5">
      <label className="block text-xs font-bold text-zinc-600 dark:text-zinc-400">
        {label}
      </label>
      <div className="relative" dir={dir}>
        {icon && (
          <span className="absolute start-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          dir={dir}
          className={`w-full h-12 rounded-xl border bg-white ps-10 pe-4 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all focus:outline-none focus:ring-2 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 ${
            error
              ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500/20"
              : "border-zinc-200 focus:border-brand-500 focus:ring-brand-500/20 dark:border-zinc-800"
          }`}
          {...props}
        />
      </div>
      {error && <p className="text-xs font-bold text-rose-500">{error}</p>}
    </div>
  );
}