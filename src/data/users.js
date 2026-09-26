export const initialUsers = [
  { id: 1, name: "علی رضایی", email: "ali@example.com", password: "123456", role: "admin", status: "active", joinedAt: "۱۴۰۲/۰۱/۱۵" },
  { id: 2, name: "سارا محمدی", email: "sara@example.com", password: "123456", role: "user", status: "active", joinedAt: "۱۴۰۲/۰۲/۰۳" },
  { id: 3, name: "رضا کریمی", email: "reza@example.com", password: "123456", role: "editor", status: "inactive", joinedAt: "۱۴۰۲/۰۲/۲۰" },
  { id: 4, name: "مریم حسینی", email: "maryam@example.com", password: "123456", role: "user", status: "active", joinedAt: "۱۴۰۲/۰۳/۰۵" },
  { id: 5, name: "حسین نوری", email: "hossein@example.com", password: "123456", role: "admin", status: "active", joinedAt: "۱۴۰۲/۰۳/۱۸" },
  { id: 6, name: "زهرا اکبری", email: "zahra@example.com", password: "123456", role: "editor", status: "pending", joinedAt: "۱۴۰۲/۰۴/۰۱" },
  { id: 7, name: "محمد صادقی", email: "mohammad@example.com", password: "123456", role: "user", status: "inactive", joinedAt: "۱۴۰۲/۰۴/۱۲" },
  { id: 8, name: "فاطمه رحیمی", email: "fateme@example.com", password: "123456", role: "user", status: "active", joinedAt: "۱۴۰۲/۰۵/۰۲" },
  { id: 9, name: "امیر تهرانی", email: "amir@example.com", password: "123456", role: "editor", status: "active", joinedAt: "۱۴۰۲/۰۵/۱۹" },
  { id: 10, name: "نازنین کاظمی", email: "nazanin@example.com", password: "123456", role: "admin", status: "active", joinedAt: "۱۴۰۲/۰۶/۰۸" },
  { id: 11, name: "سعید مرادی", email: "saeed@example.com", password: "123456", role: "user", status: "pending", joinedAt: "۱۴۰۲/۰۶/۲۵" },
  { id: 12, name: "الهام یوسفی", email: "elham@example.com", password: "123456", role: "user", status: "active", joinedAt: "۱۴۰۲/۰۷/۱۱" },
];

export const roles = {
  admin: { label: "مدیر", color: "violet" },
  editor: { label: "ویرایشگر", color: "blue" },
  user: { label: "کاربر", color: "slate" },
};

export const statuses = {
  active: { label: "فعال", color: "emerald" },
  inactive: { label: "غیرفعال", color: "rose" },
  pending: { label: "در انتظار", color: "amber" },
  banned: { label: "بن شده", color: "rose" },
};