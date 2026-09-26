import GuestGuard from "@/components/GuestGuard";

export default function AuthLayout({ children }) {
  return (
    <GuestGuard>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-brand-50/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-brand-950/30 p-4">
        {children}
      </div>
    </GuestGuard>
  );
}