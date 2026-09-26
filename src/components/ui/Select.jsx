export default function Select({ children, className = "", ...props }) {
  return (
    <select
      className={`w-full h-11 rounded-xl border border-zinc-200 bg-white px-4 text-sm text-zinc-900 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}