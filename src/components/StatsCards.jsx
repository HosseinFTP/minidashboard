import { Card } from "./ui";
import { Users, UserCheck, UserX, Shield } from "lucide-react";

const items = [
  {
    key: "total",
    label: "کل کاربران",
    icon: Users,
    color: "text-brand-500",
    bg: "bg-brand-100 dark:bg-brand-500/15",
  },
  {
    key: "active",
    label: "کاربران فعال",
    icon: UserCheck,
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-500/15",
  },
  {
    key: "inactive",
    label: "غیرفعال",
    icon: UserX,
    color: "text-rose-500",
    bg: "bg-rose-100 dark:bg-rose-500/15",
  },
  {
    key: "admins",
    label: "مدیران",
    icon: Shield,
    color: "text-violet-500",
    bg: "bg-violet-100 dark:bg-violet-500/15",
  },
];

export default function StatsCards({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map(({ key, label, icon: Icon, color, bg }) => (
        <Card key={key} className="flex items-center gap-4">
          <div
            className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 ${bg} ${color}`}
          >
            <Icon size={22} />
          </div>
          <div className="min-w-0">
            <p className="text-xs font-bold text-zinc-500">{label}</p>
            <p className="text-2xl font-black text-zinc-900 dark:text-zinc-100">
              {stats[key]}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}