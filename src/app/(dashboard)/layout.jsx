import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DashboardProviders from "@/context/DashboardProviders";
import AuthGuard from "@/components/AuthGuard";

export default function DashboardLayout({ children }) {
  return (
    <DashboardProviders>
      <AuthGuard>
        <div className="flex min-h-screen bg-zinc-50 dark:bg-zinc-950">
          <Sidebar />
          <div className="flex flex-1 flex-col min-w-0">
            <Header />
            <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
          </div>
        </div>
      </AuthGuard>
    </DashboardProviders>
  );
}