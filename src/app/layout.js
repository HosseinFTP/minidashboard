import "./globals.css";
import AppProviders from "@/context/AppProviders";

export const metadata = {
  title: "داشبورد مدیریت کاربران",
  description: "پنل مدیریت کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="font-sans bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}