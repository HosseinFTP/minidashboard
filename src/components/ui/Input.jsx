export default function Input({ className = "", icon, ...props }) {
  return (
    <div className="relative w-full">
      {icon && (
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none">
          {icon}
        </span>
      )}
      <input
        className={`w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 placeholder:text-zinc-400 transition-all focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-brand-500 ${
          icon ? "pr-10" : ""
        } ${className}`}
        {...props}
      />
    </div>
  );
}